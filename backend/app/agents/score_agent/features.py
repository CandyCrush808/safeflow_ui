from collections.abc import Sequence
from datetime import datetime

from app.schemas.evidence_package import TransactionEvidence


def extract_features(transaction: TransactionEvidence, history: Sequence[TransactionEvidence] = ()) -> dict[str, float]:
    amounts = [item.amount for item in history]
    average_amount = sum(amounts) / len(amounts) if amounts else transaction.amount
    return {
        "transaction_amount": transaction.amount,
        "transaction_frequency": float(len(history) + 1),
        "transaction_velocity": float(len(history) + 1),
        "sender_transaction_count": float(sum(item.sender == transaction.sender for item in history) + 1),
        "receiver_transaction_count": float(sum(item.receiver == transaction.receiver for item in history) + 1),
        "amount_deviation": abs(transaction.amount - average_amount) / max(average_amount, 1),
        "unusual_transaction_time": float(transaction.timestamp.hour < 6 or transaction.timestamp.hour > 22),
        "account_age": 0.0,
        "geographic_distance": 0.0,
    }
