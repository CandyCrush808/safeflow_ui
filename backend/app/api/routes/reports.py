from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.services.report_service import ReportService

router = APIRouter(prefix="/cases", tags=["reports"])


@router.post("/{case_id}/report")
def create_report(case_id: str, db: Session = Depends(get_db)) -> dict:
    return ReportService(db).get_report(case_id)


@router.get("/{case_id}/report")
def get_report(case_id: str, db: Session = Depends(get_db)) -> dict:
    return ReportService(db).get_report(case_id)
