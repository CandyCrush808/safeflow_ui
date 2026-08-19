import { useState } from "react";
import { Check, CircleDot, ClipboardCheck, FileText, Gavel, ShieldCheck, X, CheckCircle2 } from "lucide-react";
import { AgentStatus } from "@/components/dashboard/AgentStatus";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Agent, Case, GraphEdge, GraphNode, InvestigationReport, RegulatorySource } from "@/types/investigation";
import { InvestigationGraph } from "./InvestigationGraph";
import { RiskIntelligencePanel } from "./RiskIntelligencePanel";

export interface InvestigationWorkspaceProps {
  caseData: Case;
  evidenceChips: string[];
  nodes: GraphNode[];
  edges: GraphEdge[];
  agents: Agent[];
  regulatorySources: RegulatorySource[];
  report: InvestigationReport;
}

const agentIds = ["orchestrator", "data", "risk", "reason"];

function recommendationStyle(recommendation: Case["recommendation"]) {
  return recommendation === "ESCALATE"
    ? "bg-risk-high/10 text-risk-high border-risk-high/20"
    : recommendation === "VERIFY"
      ? "bg-risk-medium/10 text-risk-medium border-risk-medium/20"
      : "bg-risk-low/10 text-risk-low border-risk-low/20";
}

export function InvestigationWorkspace({
  caseData,
  evidenceChips,
  nodes,
  edges,
  agents,
  regulatorySources,
  report,
}: InvestigationWorkspaceProps) {
  const [decisionRecorded, setDecisionRecorded] = useState<string | null>(null);

  const supporting = caseData.evidence.filter((item) => item.kind === "supporting");
  const counter = caseData.evidence.filter((item) => item.kind === "counter");
  const investigationAgents = agents.filter((agent) => agentIds.includes(agent.id));
  const recommendationReasoning = report.sections.find((section) => section.title === "Executive Findings")?.summary;

  const handleDecision = (action: string) => {
    setDecisionRecorded(action);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-10">
      <header className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase font-mono">
              Investigation workspace
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Case {caseData.id}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{caseData.alert}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[420px]">
            <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
              <p className="text-[10px] text-muted-foreground uppercase font-mono">Case ID</p>
              <p className="mt-1 font-mono text-sm font-semibold text-foreground">{caseData.id}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
              <p className="text-[10px] text-muted-foreground uppercase font-mono">Risk</p>
              <p className="mt-1 text-sm font-semibold text-risk-high">
                {caseData.risk.level} · {caseData.risk.value}/{caseData.risk.max}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
              <p className="text-[10px] text-muted-foreground uppercase font-mono">Status</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Open</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
              <p className="text-[10px] text-muted-foreground uppercase font-mono">Opened</p>
              <p className="mt-1 font-mono text-xs font-semibold text-foreground">
                {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(caseData.openedAt))}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Graph and Risk Panels */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <InvestigationGraph nodes={nodes} edges={edges} />
        <RiskIntelligencePanel risk={caseData.risk} />
      </div>

      {/* AI Agents Pipeline */}
      <AgentStatus agents={investigationAgents} />

      {/* Evidence and Regulatory Registers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs" aria-labelledby="evidence-title">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Evidence</p>
          <h2 id="evidence-title" className="mt-1 text-lg font-bold tracking-tight text-foreground">Evidence register</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-teal">
                <Check className="size-4" />Supporting evidence
              </h3>
              <ul className="mt-3 space-y-2">
                {supporting.map((item) => (
                  <li key={item.label} className="text-xs text-muted-foreground">{item.label}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-risk-medium">
                <X className="size-4" />Counter evidence
              </h3>
              <ul className="mt-3 space-y-2">
                {counter.map((item) => (
                  <li key={item.label} className="text-xs text-muted-foreground">{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
            {evidenceChips.map((chip) => (
              <span key={chip} className="rounded-full bg-muted px-2.5 py-1 text-xs text-foreground font-mono">
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs" aria-labelledby="regulatory-title">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Regulatory context</p>
          <h2 id="regulatory-title" className="mt-1 text-lg font-bold tracking-tight text-foreground">Sources consulted</h2>
          <p className="mt-1.5 text-xs text-muted-foreground">Grounding regulatory documents available for investigator review.</p>
          <ul className="mt-4 divide-y divide-border">
            {regulatorySources.map((source) => (
              <li key={source.code} className="flex gap-3 py-2.5 first:pt-0">
                <span className="font-mono text-xs font-bold text-violet">{source.code}</span>
                <span className="text-xs text-foreground">{source.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs" aria-labelledby="recommendation-title">
        <div className="flex items-start gap-3 border-b border-border pb-4">
          <FileText className="mt-0.5 size-5 text-violet" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase font-mono">
              Investigation assessment
            </p>
            <h2 id="recommendation-title" className="mt-1 text-lg font-bold text-foreground">
              {caseData.recommendation}
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground">{recommendationReasoning}</p>
        <div className="mt-5">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Supporting signals</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {supporting.map((item) => (
              <span key={item.label} className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs text-foreground">
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs" aria-labelledby="human-decision-title">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Gavel className="size-5 text-foreground" aria-hidden="true" />
              <h2 id="human-decision-title" className="text-lg font-bold tracking-tight text-foreground">Decision owner</h2>
            </div>
            <p className="mt-1.5 max-w-2xl text-xs text-muted-foreground">The assessment is advisory. The investigating officer remains accountable for the final decision.</p>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <CircleDot className="size-3.5 text-teal" />
              Prototype UI only — no live account actions or regulatory submissions are performed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant={decisionRecorded === "Approved" ? "default" : "outline"}
              onClick={() => handleDecision("Approved")}
              className="gap-1.5 text-xs"
            >
              <ShieldCheck className="size-4" />
              {decisionRecorded === "Approved" ? "Approved" : "Approve"}
            </Button>
            <Button
              type="button"
              variant={decisionRecorded === "Review Requested" ? "default" : "outline"}
              onClick={() => handleDecision("Review Requested")}
              className="gap-1.5 text-xs"
            >
              <ClipboardCheck className="size-4" />
              {decisionRecorded === "Review Requested" ? "Review Requested" : "Request Review"}
            </Button>
            <Button
              type="button"
              variant={decisionRecorded === "Escalated" ? "destructive" : "outline"}
              onClick={() => handleDecision("Escalated")}
              className="gap-1.5 text-xs"
            >
              Escalate
            </Button>
          </div>
        </div>
        {decisionRecorded && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-teal/30 bg-teal/10 p-3 text-xs font-semibold text-teal">
            <CheckCircle2 className="size-4" />
            <span>Decision recorded: Case {decisionRecorded} (Audit trail entry created).</span>
          </div>
        )}
      </section>
    </div>
  );
}
