import networkx as nx
from collections.abc import Iterable

from app.schemas.evidence_package import TransactionEvidence


def build_graph(transactions: Iterable[TransactionEvidence]) -> nx.DiGraph:
    graph = nx.DiGraph()
    for transaction in transactions:
        graph.add_edge(transaction.sender, transaction.receiver, amount=transaction.amount, timestamp=transaction.timestamp.isoformat())
    return graph
