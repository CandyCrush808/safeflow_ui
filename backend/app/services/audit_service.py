from sqlalchemy.orm import Session

from app.db.models import AuditLog
from app.db.repositories.audit_repository import AuditRepository


class AuditService:
    def __init__(self, session: Session) -> None:
        self.repository = AuditRepository(session)

    def list_for_case(self, case_id: str) -> list[AuditLog]:
        return self.repository.for_case(case_id)

    def append(self, case_id: str, actor: str, action: str, old_status: str | None, new_status: str | None) -> AuditLog:
        return self.repository.append(AuditLog(case_id=case_id, actor=actor, action=action, old_status=old_status, new_status=new_status))
