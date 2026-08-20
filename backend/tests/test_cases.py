from fastapi.testclient import TestClient

from app.main import app


def test_cases_endpoint_returns_collection() -> None:
    with TestClient(app) as client:
        response = client.get("/api/cases")
    assert response.status_code == 200
    assert "cases" in response.json()
