from app.schemas.evidence_package import RecommendedAction


class DecisionRules:
    def __init__(self, verify_threshold: float = 30, escalate_threshold: float = 60, block_threshold: float = 80) -> None:
        self.verify_threshold = verify_threshold
        self.escalate_threshold = escalate_threshold
        self.block_threshold = block_threshold

    def recommend(self, risk_score: float) -> RecommendedAction:
        if risk_score < self.verify_threshold:
            return RecommendedAction.MONITOR
        if risk_score < self.escalate_threshold:
            return RecommendedAction.VERIFY
        if risk_score < self.block_threshold:
            return RecommendedAction.ESCALATE
        return RecommendedAction.BLOCK
