from sqlalchemy.orm import Session

from app.core.exceptions import NotFoundError
from app.db.models import Case
from app.db.repositories.case_repository import CaseRepository
from app.schemas.evidence_package import CaseListResponse, CaseSummary, EvidencePackage


class CaseService:
    def __init__(self, session: Session) -> None:
        self.repository = CaseRepository(session)

    def list_cases(self) -> CaseListResponse:
        return CaseListResponse(cases=[self._summary(case) for case in self.repository.list()])

    def get_case(self, case_id: str) -> EvidencePackage | CaseSummary:
        case = self.repository.get(case_id)
        if case is None:
            raise NotFoundError(f"Case {case_id} was not found")
        if case.evidence_package:
            return EvidencePackage.model_validate(case.evidence_package)
        return self._summary(case)

    @staticmethod
    def _summary(case: Case) -> CaseSummary:
        return CaseSummary(id=case.id, alert="Investigation alert", openedAt=case.created_at, status=case.status, risk_score=case.risk_score, recommendation=case.recommended_action)
