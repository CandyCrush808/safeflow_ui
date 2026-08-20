import networkx as nx

from app.schemas.evidence_package import GraphPattern


def detect_patterns(graph: nx.DiGraph) -> list[GraphPattern]:
    patterns: list[GraphPattern] = []
    for node in graph.nodes:
        if graph.out_degree(node) >= 3:
            patterns.append(GraphPattern(type="FAN_OUT", severity="HIGH", description=f"Account {node} sends funds to many connected accounts."))
        if graph.in_degree(node) >= 3:
            patterns.append(GraphPattern(type="FAN_IN", severity="HIGH", description=f"Account {node} receives funds from many connected accounts."))
    for cycle in nx.simple_cycles(graph):
        if len(cycle) >= 3:
            patterns.append(GraphPattern(type="CIRCULAR_FLOW", severity="HIGH", description=f"Circular flow detected through {' -> '.join(cycle)}."))
    return patterns
