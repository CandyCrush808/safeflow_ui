import json

from app.agents.base import BaseAgent
from app.agents.reason_agent.llm_client import LLMClient
from app.agents.reason_agent.prompts import INVESTIGATION_PROMPT
from app.agents.reason_agent.rag import RegulatoryRetriever
from app.config.settings import get_settings
from app.schemas.evidence_package import LLMAnalysis, RegulatoryCitation


class ReasonAgent(BaseAgent[dict, tuple[LLMAnalysis, list[RegulatoryCitation]]]):
    def __init__(self, llm_client: LLMClient | None = None, retriever: RegulatoryRetriever | None = None) -> None:
        settings = get_settings()
        self.llm_client = llm_client or LLMClient(settings)
        self.retriever = retriever or RegulatoryRetriever(settings)

    async def run(self, input_data: dict) -> tuple[LLMAnalysis, list[RegulatoryCitation]]:
        citations = await self.retriever.retrieve("financial crime investigation")
        prompt = INVESTIGATION_PROMPT.format(evidence=json.dumps(input_data, default=str), citations=json.dumps([citation.model_dump() for citation in citations]))
        try:
            response = await self.llm_client.generate(prompt)
            return LLMAnalysis(summary=response, findings=[response], recommendation="Human review required"), citations
        except Exception as exc:
            return LLMAnalysis(summary=f"LLM analysis unavailable: {exc}", recommendation="Human review required", evidence_unavailable=not citations), citations
