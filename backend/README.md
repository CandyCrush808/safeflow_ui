# SafeFlow Backend

FastAPI backend for the SafeFlow financial-crime investigation co-pilot. It keeps the API, services, sequential agent orchestration, repositories, and SQLite persistence separate so the frontend can consume a stable REST boundary.

## Installation

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

## Run locally

```powershell
uvicorn app.main:app --reload
```

Swagger UI: `http://localhost:8000/docs`

Seed synthetic data from another terminal:

```powershell
python -m scripts.seed_database
```

Run tests with `pytest`.

## API

- `GET /api/health`
- `GET /api/cases`
- `GET /api/cases/{case_id}`
- `POST /api/alerts`
- `POST /api/investigations/{case_id}/run`
- `GET /api/investigations/{case_id}`
- `POST /api/cases/{case_id}/approve|reject|escalate`
- `POST|GET /api/cases/{case_id}/report`
- `GET /api/cases/{case_id}/audit`

## Architecture

Alerts enter the service layer, which delegates investigation to the sequential orchestrator. The orchestrator invokes Score, Context, Reason, and Decision agents and persists the typed `EvidencePackage`. Missing ML, LLM, or regulatory data produces a labelled partial result rather than crashing the API. Decisions are recommendations and lifecycle changes require a human-facing endpoint that appends an audit record.

The frontend can replace mock data by calling `GET /api/cases` and `GET /api/cases/{case_id}`. CORS defaults to `http://localhost:5173` and is configurable through `CORS_ORIGINS`.
