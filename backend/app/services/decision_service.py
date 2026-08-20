from sqlalchemy.orm import Session

from app.core.exceptions import NotFoundError
from app.db.models import Case, CaseStatus
from app.services.audit_service import AuditService


class DecisionService:
    def __init__(self, session: Session) -> None:
        self.session = session
        self.audit = AuditService(session)

    def change_status(self, case_id: str, status: CaseStatus, action: str, actor: str = "human-reviewer") -> dict[str, str]:
        case = self.session.get(Case, case_id)
        if case is None:
            raise NotFoundError(f"Case {case_id} was not found")
        old_status = case.status
        case.status = status.value
        self.session.commit()
        self.audit.append(case_id, actor, action, old_status, status.value)
        return {"case_id": case_id, "status": status.value, "action": action}
