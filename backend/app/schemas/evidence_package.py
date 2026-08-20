from datetime import datetime
from enum import StrEnum

from pydantic import BaseModel, ConfigDict, Field


class AlertType(StrEnum):
    SUSPICIOUS_TRANSACTION = "SUSPICIOUS_TRANSACTION"
    VELOCITY = "VELOCITY"
    GRAPH_PATTERN = "GRAPH_PATTERN"
    GEO_VELOCITY = "GEO_VELOCITY"


class RecommendedAction(StrEnum):
    ALLOW = "ALLOW"
    MONITOR = "MONITOR"
    VERIFY = "VERIFY"
    ESCALATE = "ESCALATE"
    BLOCK = "BLOCK"


class AlertEvidence(BaseModel):
    type: AlertType = AlertType.SUSPICIOUS_TRANSACTION
    timestamp: datetime
    rule_triggered: str


class TransactionEvidence(BaseModel):
    amount: float = Field(ge=0)
    currency: str = Field(min_length=3, max_length=8)
    sender: str
    receiver: str
    timestamp: datetime
    channel: str


class CustomerEvidence(BaseModel):
    name: str
    kyc_status: str
    risk_category: str


class RiskFactor(BaseModel):
    label: str
    contribution: float


class RiskScore(BaseModel):
    score: float = Field(ge=0, le=100)
    factors: list[RiskFactor] = Field(default_factory=list)
    shap_values: dict[str, float] = Field(default_factory=dict)
    is_development_fallback: bool = False


class GraphPattern(BaseModel):
    type: str
    severity: str
    description: str


class GraphContext(BaseModel):
    connections: list[dict[str, str | float]] = Field(default_factory=list)
    patterns: list[GraphPattern] = Field(default_factory=list)


class GeoVelocity(BaseModel):
    impossible_travel: bool = False
    details: str = ""


class LLMAnalysis(BaseModel):
    summary: str = ""
    findings: list[str] = Field(default_factory=list)
    recommendation: str = ""
    evidence_unavailable: bool = False


class RegulatoryCitation(BaseModel):
    document: str
    section: str = ""
    excerpt: str = ""


class EvidencePackage(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    case_id: str
    alert: AlertEvidence
    transaction: TransactionEvidence
    customer: CustomerEvidence
    risk_score: RiskScore
    graph_context: GraphContext
    geo_velocity: GeoVelocity
    llm_analysis: LLMAnalysis
    rag_citations: list[RegulatoryCitation] = Field(default_factory=list)
    recommended_action: RecommendedAction
    confidence: float = Field(ge=0, le=1)


class CaseSummary(BaseModel):
    id: str
    alert: str
    opened_at: datetime = Field(alias="openedAt")
    status: str
    risk_score: float
    recommendation: str | None

    model_config = ConfigDict(populate_by_name=True)


class CaseListResponse(BaseModel):
    cases: list[CaseSummary]


class AlertCreate(BaseModel):
    case_id: str | None = None
    alert_type: AlertType = AlertType.SUSPICIOUS_TRANSACTION
    rule_triggered: str
    timestamp: datetime
    transaction: TransactionEvidence
    customer: CustomerEvidence
