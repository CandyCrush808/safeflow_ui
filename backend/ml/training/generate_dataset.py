"""Generate a placeholder dataset contract for future model training."""

from pathlib import Path


if __name__ == "__main__":
    output = Path(__file__).resolve().parents[2] / "data" / "generated" / "risk_training.csv"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text("transaction_amount,transaction_velocity,amount_deviation,label\n", encoding="utf-8")
    print(f"Created {output}")
