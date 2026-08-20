from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.db.models import Alert, Case, Customer, Transaction
from app.schemas.evidence_package import AlertCreate
from app.utils.ids import new_id

router = APIRouter(prefix="/alerts", tags=["alerts"])


@router.post("", status_code=status.HTTP_201_CREATED)
def create_alert(payload: AlertCreate, db: Session = Depends(get_db)) -> dict[str, str]:
    case_id = payload.case_id or new_id("FC-2026")
    alert_id = new_id("ALT")
    case = Case(id=case_id, status="OPEN", priority="HIGH")
    customer = Customer(id=payload.transaction.sender, name=payload.customer.name, kyc_status=payload.customer.kyc_status, risk_category=payload.customer.risk_category)
    transaction = Transaction(case_id=case_id, amount=payload.transaction.amount, currency=payload.transaction.currency, sender=payload.transaction.sender, receiver=payload.transaction.receiver, timestamp=payload.transaction.timestamp, channel=payload.transaction.channel)
    alert = Alert(id=alert_id, case_id=case_id, alert_type=payload.alert_type.value, rule_triggered=payload.rule_triggered, timestamp=payload.timestamp)
    db.add_all([case, customer, transaction, alert])
    db.commit()
    return {"alert_id": alert_id, "case_id": case_id}
