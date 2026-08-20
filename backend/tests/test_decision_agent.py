import asyncio

from app.agents.decision_agent.agent import DecisionAgent
from app.schemas.evidence_package import RecommendedAction, RiskScore


def test_decision_thresholds() -> None:
    cases = [(10, RecommendedAction.MONITOR), (30, RecommendedAction.VERIFY), (60, RecommendedAction.ESCALATE), (80, RecommendedAction.BLOCK)]
    for score, expected in cases:
        assert asyncio.run(DecisionAgent().run(RiskScore(score=score))) == expected
