from collections.abc import Sequence

from app.agents.base import BaseAgent
from app.agents.score_agent.explainer import explain
from app.agents.score_agent.features import extract_features
from app.agents.score_agent.model import RiskModel
from app.config.settings import get_settings
from app.schemas.evidence_package import RiskScore, RiskFactor, TransactionEvidence
from app.utils.logging import get_logger


class ScoreAgent(BaseAgent[tuple[TransactionEvidence, Sequence[TransactionEvidence]], RiskScore]):
    def __init__(self, model: RiskModel | None = None) -> None:
        self.model = model or RiskModel(get_settings().risk_model_path)
        self.logger = get_logger(__name__)

    async def run(self, input_data: tuple[TransactionEvidence, Sequence[TransactionEvidence]]) -> RiskScore:
        transaction, history = input_data
        features = extract_features(transaction, history)
        score = self.model.predict_score(features)
        labels, shap_values = explain(features, score, not self.model.is_fallback)
        return RiskScore(
            score=score,
            factors=[RiskFactor(label=label, contribution=round(score / max(len(labels), 1), 2)) for label in labels],
            shap_values=shap_values,
            is_development_fallback=self.model.is_fallback,
        )
