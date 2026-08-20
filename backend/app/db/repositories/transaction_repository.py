from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.models import Transaction


class TransactionRepository:
    def __init__(self, session: Session) -> None:
        self.session = session

    def for_case(self, case_id: str) -> list[Transaction]:
        return list(self.session.scalars(select(Transaction).where(Transaction.case_id == case_id).order_by(Transaction.timestamp)))

    def save(self, transaction: Transaction) -> Transaction:
        self.session.add(transaction)
        self.session.commit()
        self.session.refresh(transaction)
        return transaction
