from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.schemas.evidence_package import EvidencePackage
from app.services.investigation_service import InvestigationService

router = APIRouter(prefix="/investigations", tags=["investigations"])


@router.post("/{case_id}/run", response_model=EvidencePackage)
async def run_investigation(case_id: str, db: Session = Depends(get_db)) -> EvidencePackage:
    return await InvestigationService(db).run(case_id)


@router.get("/{case_id}", response_model=EvidencePackage)
def get_investigation(case_id: str, db: Session = Depends(get_db)) -> EvidencePackage:
    from app.services.case_service import CaseService

    result = CaseService(db).get_case(case_id)
    if not isinstance(result, EvidencePackage):
        from app.core.exceptions import NotFoundError

        raise NotFoundError(f"Investigation {case_id} has not been run")
    return result
