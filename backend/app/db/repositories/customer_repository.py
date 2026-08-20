from sqlalchemy.orm import Session

from app.db.models import Customer


class CustomerRepository:
    def __init__(self, session: Session) -> None:
        self.session = session

    def get(self, customer_id: str) -> Customer | None:
        return self.session.get(Customer, customer_id)

    def save(self, customer: Customer) -> Customer:
        self.session.add(customer)
        self.session.commit()
        self.session.refresh(customer)
        return customer
