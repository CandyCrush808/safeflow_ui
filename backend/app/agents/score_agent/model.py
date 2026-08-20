from pathlib import Path


class RiskModel:
    """Loads an optional XGBoost model and reports whether fallback is active."""

    def __init__(self, model_path: str) -> None:
        self.model_path = Path(model_path)
        self.model = None
        self.is_fallback = True
        self._load()

    def _load(self) -> None:
        if not self.model_path.exists():
            return
        try:
            from xgboost import XGBClassifier

            model = XGBClassifier()
            model.load_model(self.model_path)
            self.model = model
            self.is_fallback = False
        except Exception:
            self.model = None
            self.is_fallback = True

    def predict_score(self, features: dict[str, float]) -> float:
        if self.model is not None:
            values = [list(features.values())]
            probability = float(self.model.predict_proba(values)[0][1])
            return round(max(0, min(100, probability * 100)), 2)
        # Development-only deterministic signal; never represented as trained ML output.
        raw = min(100, features["amount_deviation"] * 40 + features["transaction_velocity"] * 8 + features["unusual_transaction_time"] * 12)
        return round(raw, 2)
