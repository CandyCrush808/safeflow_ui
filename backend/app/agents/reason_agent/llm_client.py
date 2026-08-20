from app.config.settings import Settings


class LLMClient:
    def __init__(self, settings: Settings) -> None:
        self.settings = settings

    async def generate(self, prompt: str) -> str:
        if not self.settings.llm_api_key:
            raise RuntimeError("LLM API key is not configured")
        raise RuntimeError(f"LLM provider {self.settings.llm_provider!r} is not configured in the MVP")
