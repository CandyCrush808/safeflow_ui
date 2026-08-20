from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.db.models import CaseStatus
from app.services.decision_service import DecisionService

router = APIRouter(prefix="/cases", tags=["decisions"])


@router.post("/{case_id}/approve")
def approve(case_id: str, db: Session = Depends(get_db)) -> dict[str, str]:
    return DecisionService(db).change_status(case_id, CaseStatus.CLOSED, "CASE_APPROVED")


@router.post("/{case_id}/reject")
def reject(case_id: str, db: Session = Depends(get_db)) -> dict[str, str]:
    return DecisionService(db).change_status(case_id, CaseStatus.DISMISSED, "CASE_REJECTED")


@router.post("/{case_id}/escalate")
def escalate(case_id: str, db: Session = Depends(get_db)) -> dict[str, str]:
    return DecisionService(db).change_status(case_id, CaseStatus.ESCALATED, "CASE_ESCALATED")
