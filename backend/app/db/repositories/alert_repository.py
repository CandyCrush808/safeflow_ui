from sqlalchemy.orm import Session

from app.db.models import Alert


class AlertRepository:
    def __init__(self, session: Session) -> None:
        self.session = session

    def get(self, alert_id: str) -> Alert | None:
        return self.session.get(Alert, alert_id)

    def save(self, alert: Alert) -> Alert:
        self.session.add(alert)
        self.session.commit()
        self.session.refresh(alert)
        return alert
