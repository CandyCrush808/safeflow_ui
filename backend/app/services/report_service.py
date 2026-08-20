from sqlalchemy.orm import Session

from app.core.exceptions import NotFoundError
from app.db.models import Case


class ReportService:
    def __init__(self, session: Session) -> None:
        self.session = session

    def get_report(self, case_id: str) -> dict:
        case = self.session.get(Case, case_id)
        if case is None:
            raise NotFoundError(f"Case {case_id} was not found")
        return {"case_id": case_id, "status": "DRAFT", "evidence_package": case.evidence_package}
