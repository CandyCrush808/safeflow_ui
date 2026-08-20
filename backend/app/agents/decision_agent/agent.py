from app.agents.base import BaseAgent
from app.agents.decision_agent.rules import DecisionRules
from app.schemas.evidence_package import RecommendedAction, RiskScore


class DecisionAgent(BaseAgent[RiskScore, RecommendedAction]):
    def __init__(self, rules: DecisionRules | None = None) -> None:
        self.rules = rules or DecisionRules()

    async def run(self, input_data: RiskScore) -> RecommendedAction:
        return self.rules.recommend(input_data.score)
