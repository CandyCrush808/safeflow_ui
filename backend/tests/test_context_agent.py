import asyncio
from datetime import datetime, timezone

from app.agents.context_agent.agent import ContextAgent
from app.schemas.evidence_package import TransactionEvidence


def tx(sender: str, receiver: str) -> TransactionEvidence:
    return TransactionEvidence(amount=1, currency="INR", sender=sender, receiver=receiver, timestamp=datetime.now(timezone.utc), channel="UPI")


def test_context_detects_fan_out_and_cycle() -> None:
    result = asyncio.run(ContextAgent().run([tx("A", "B"), tx("A", "C"), tx("A", "D"), tx("B", "C"), tx("C", "D"), tx("D", "B")]))
    types = {pattern.type for pattern in result.patterns}
    assert "FAN_OUT" in types
    assert "CIRCULAR_FLOW" in types
