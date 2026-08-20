from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.services.audit_service import AuditService

router = APIRouter(prefix="/cases", tags=["audit"])


@router.get("/{case_id}/audit")
def get_audit(case_id: str, db: Session = Depends(get_db)) -> dict:
    entries = AuditService(db).list_for_case(case_id)
    return {"audit": [{"id": item.id, "case_id": item.case_id, "actor": item.actor, "action": item.action, "old_status": item.old_status, "new_status": item.new_status, "timestamp": item.timestamp} for item in entries]}
