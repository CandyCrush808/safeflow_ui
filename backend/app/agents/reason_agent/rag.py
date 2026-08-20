from pathlib import Path

from app.config.settings import Settings
from app.schemas.evidence_package import RegulatoryCitation


class RegulatoryRetriever:
    def __init__(self, settings: Settings) -> None:
        self.path = Path(settings.chroma_path)
        self.documents_path = Path(__file__).resolve().parents[3] / "data" / "regulatory"

    async def retrieve(self, query: str) -> list[RegulatoryCitation]:
        # Optional Chroma integration is deferred until documents are available.
        if not self.documents_path.exists() or not any(self.documents_path.iterdir()):
            return []
        return []
