from fastapi import APIRouter

from app.api.routes import alerts, audit, cases, decisions, health, investigations, reports

api_router = APIRouter(prefix="/api")
api_router.include_router(health.router)
api_router.include_router(cases.router)
api_router.include_router(alerts.router)
api_router.include_router(investigations.router)
api_router.include_router(decisions.router)
api_router.include_router(reports.router)
api_router.include_router(audit.router)
