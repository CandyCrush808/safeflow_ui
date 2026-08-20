from collections.abc import Sequence

from app.agents.base import BaseAgent
from app.agents.context_agent.graph_builder import build_graph
from app.agents.context_agent.pattern_detector import detect_patterns
from app.schemas.evidence_package import GraphContext, TransactionEvidence


class ContextAgent(BaseAgent[Sequence[TransactionEvidence], GraphContext]):
    async def run(self, input_data: Sequence[TransactionEvidence]) -> GraphContext:
        graph = build_graph(input_data)
        connections = [
            {"from": sender, "to": receiver, "amount": float(data.get("amount", 0))}
            for sender, receiver, data in graph.edges(data=True)
        ]
        return GraphContext(connections=connections, patterns=detect_patterns(graph))
