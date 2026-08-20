from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api.router import api_router
from app.config.settings import get_settings
from app.core.exceptions import BackendError
from app.db.database import create_tables

settings = get_settings()
app = FastAPI(title="SafeFlow Investigation API", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=settings.cors_origin_list, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
app.include_router(api_router)


@app.on_event("startup")
def startup() -> None:
    create_tables()


@app.exception_handler(BackendError)
async def backend_error_handler(request: Request, exc: BackendError) -> JSONResponse:
    return JSONResponse(status_code=404 if exc.code == "NOT_FOUND" else 500, content={"error": {"code": exc.code, "message": exc.message}})
