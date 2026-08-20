import asyncio
from datetime import datetime, timezone

from app.agents.score_agent.agent import ScoreAgent
from app.agents.score_agent.model import RiskModel
from app.schemas.evidence_package import TransactionEvidence


def test_score_agent_marks_missing_model_as_fallback(tmp_path) -> None:
    transaction = TransactionEvidence(amount=490000, currency="INR", sender="A", receiver="B", timestamp=datetime.now(timezone.utc), channel="UPI")
    agent = ScoreAgent(RiskModel(str(tmp_path / "missing.json")))
    result = asyncio.run(agent.run((transaction, [])))
    assert result.is_development_fallback is True
    assert 0 <= result.score <= 100
