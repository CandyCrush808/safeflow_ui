from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.schemas.evidence_package import CaseListResponse, CaseSummary, EvidencePackage
from app.services.case_service import CaseService

router = APIRouter(prefix="/cases", tags=["cases"])


@router.get("", response_model=CaseListResponse)
def list_cases(db: Session = Depends(get_db)) -> CaseListResponse:
    return CaseService(db).list_cases()


@router.get("/{case_id}", response_model=EvidencePackage | CaseSummary)
def get_case(case_id: str, db: Session = Depends(get_db)) -> EvidencePackage | CaseSummary:
    return CaseService(db).get_case(case_id)
