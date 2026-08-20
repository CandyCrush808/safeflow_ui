from collections.abc import Mapping


def explain(features: Mapping[str, float], score: float, model_available: bool) -> tuple[list[str], dict[str, float]]:
    shap_values = {name: round(value, 4) for name, value in features.items() if value and name != "transaction_amount"}
    factors: list[str] = []
    if features.get("transaction_velocity", 0) > 3:
        factors.append("High transaction velocity")
    if features.get("amount_deviation", 0) > 0.5:
        factors.append("Unusual transaction amount")
    if features.get("unusual_transaction_time", 0):
        factors.append("Unusual transaction time")
    if not factors and score >= 60:
        factors.append("Elevated composite transaction risk")
    if not model_available:
        factors.append("Development fallback score; trained model unavailable")
    return factors, shap_values
