import asyncio

from fastapi.testclient import TestClient

from app.main import app


def test_seeded_case_runs_through_orchestrator() -> None:
    with TestClient(app) as client:
        response = client.post("/api/investigations/FC-2026-00421/run")
    assert response.status_code == 200
    body = response.json()
    assert body["case_id"] == "FC-2026-00421"
    assert "risk_score" in body
    assert "graph_context" in body
    assert "recommended_action" in body
