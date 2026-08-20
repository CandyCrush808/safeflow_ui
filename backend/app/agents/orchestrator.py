from sqlalchemy.orm import Session

from app.agents.context_agent.agent import ContextAgent
from app.agents.decision_agent.agent import DecisionAgent
from app.agents.reason_agent.agent import ReasonAgent
from app.agents.score_agent.agent import ScoreAgent
from app.core.exceptions import NotFoundError
from app.db.models import Alert, Case, Customer
from app.db.repositories.audit_repository import AuditRepository
from app.db.repositories.case_repository import CaseRepository
from app.db.repositories.customer_repository import CustomerRepository
from app.db.repositories.transaction_repository import TransactionRepository
from app.schemas.evidence_package import (
    AlertEvidence, CustomerEvidence, EvidencePackage, GeoVelocity, TransactionEvidence,
)
from app.utils.logging import get_logger


class InvestigationOrchestrator:
    def __init__(self, session: Session) -> None:
        self.session = session
        self.logger = get_logger(__name__)
        self.score_agent = ScoreAgent()
        self.context_agent = ContextAgent()
        self.reason_agent = ReasonAgent()
        self.decision_agent = DecisionAgent()

    async def investigate(self, case_id: str) -> EvidencePackage:
        case = CaseRepository(self.session).get(case_id)
        if case is None:
            raise NotFoundError(f"Case {case_id} was not found")
        alert = self.session.query(Alert).filter(Alert.case_id == case_id).first()
        transaction_rows = TransactionRepository(self.session).for_case(case_id)
        customer = self.session.query(Customer).first()
        if alert is None or not transaction_rows or customer is None:
            raise NotFoundError(f"Investigation data for case {case_id} is incomplete")
        transactions = [TransactionEvidence.model_validate(row, from_attributes=True) for row in transaction_rows]
        customer_evidence = CustomerEvidence.model_validate(customer, from_attributes=True)
        current = transactions[0]
        risk = await self.score_agent.run((current, transactions[1:]))
        graph = await self.context_agent.run(transactions)
        analysis, citations = await self.reason_agent.run({"risk_score": risk.model_dump(), "graph_context": graph.model_dump()})
        recommendation = await self.decision_agent.run(risk)
        package = EvidencePackage(
            case_id=case_id,
            alert=AlertEvidence(type=alert.alert_type, timestamp=alert.timestamp, rule_triggered=alert.rule_triggered),
            transaction=current,
            customer=customer_evidence,
            risk_score=risk,
            graph_context=graph,
            geo_velocity=GeoVelocity(),
            llm_analysis=analysis,
            rag_citations=citations,
            recommended_action=recommendation,
            confidence=min(0.99, max(0.5, risk.score / 100)),
        )
        case.risk_score = risk.score
        case.recommended_action = recommendation.value
        case.evidence_package = package.model_dump(mode="json")
        self.session.commit()
        self.logger.info("INVESTIGATION_COMPLETED case_id=%s", case_id)
        return package
