from sqlalchemy.orm import Session

from app.agents.orchestrator import InvestigationOrchestrator
from app.schemas.evidence_package import EvidencePackage


class InvestigationService:
    def __init__(self, session: Session) -> None:
        self.orchestrator = InvestigationOrchestrator(session)

    async def run(self, case_id: str) -> EvidencePackage:
        return await self.orchestrator.investigate(case_id)
