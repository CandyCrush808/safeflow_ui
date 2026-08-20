from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.models import Case


class CaseRepository:
    def __init__(self, session: Session) -> None:
        self.session = session

    def list(self) -> list[Case]:
        return list(self.session.scalars(select(Case).order_by(Case.created_at.desc())))

    def get(self, case_id: str) -> Case | None:
        return self.session.get(Case, case_id)

    def save(self, case: Case) -> Case:
        self.session.add(case)
        self.session.commit()
        self.session.refresh(case)
        return case
