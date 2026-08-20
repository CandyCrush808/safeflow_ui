from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.models import AuditLog


class AuditRepository:
    def __init__(self, session: Session) -> None:
        self.session = session

    def for_case(self, case_id: str) -> list[AuditLog]:
        return list(self.session.scalars(select(AuditLog).where(AuditLog.case_id == case_id).order_by(AuditLog.timestamp)))

    def append(self, entry: AuditLog) -> AuditLog:
        self.session.add(entry)
        self.session.commit()
        self.session.refresh(entry)
        return entry
