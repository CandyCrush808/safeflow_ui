from datetime import datetime, timedelta, timezone

from sqlalchemy.orm import Session

from app.db.models import Alert, Case, Customer, Transaction


def seed_database(session: Session) -> None:
    if session.query(Case).count():
        return
    now = datetime.now(timezone.utc)
    cases = [
        ("FC-2026-00421", "Mule account fan-out", [("A001", "A004"), ("A001", "A008"), ("A001", "A012")]),
        ("FC-2026-00422", "Circular flow", [("B001", "B002"), ("B002", "B003"), ("B003", "B001")]),
        ("FC-2026-00423", "Geo-velocity anomaly", [("C001", "C002")]),
        ("FC-2026-00424", "Legitimate high-volume merchant", [("M001", f"M{i:03d}") for i in range(2, 8)]),
        ("FC-2026-00425", "Normal transaction", [("N001", "N002")]),
    ]
    for case_id, rule, edges in cases:
        sender = edges[0][0]
        case = Case(id=case_id, status="OPEN", priority="MEDIUM")
        customer = Customer(id=sender, name=f"Synthetic Customer {sender}", kyc_status="VERIFIED", risk_category="LOW")
        transaction = Transaction(case_id=case_id, amount=490000 if "Mule" in rule else 12000, currency="INR", sender=sender, receiver=edges[0][1], timestamp=now - timedelta(minutes=5), channel="UPI")
        alert = Alert(id=f"ALT-{case_id[-5:]}", case_id=case_id, alert_type="SUSPICIOUS_TRANSACTION", rule_triggered=rule, timestamp=now)
        session.add_all([case, customer, transaction, alert])
        for index, (edge_sender, receiver) in enumerate(edges[1:], start=1):
            session.add(Transaction(case_id=case_id, amount=10000 + index * 1000, currency="INR", sender=edge_sender, receiver=receiver, timestamp=now - timedelta(minutes=4 - index), channel="UPI"))
    session.commit()
