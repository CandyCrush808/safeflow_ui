import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { InvestigationWorkspace } from "@/components/investigation/InvestigationWorkspace";
import { agents, demoCase, demoReport, evidenceChips, graphEdges, graphNodes, regulatorySources } from "@/data/mock-investigation";

export const Route = createFileRoute("/dashboard/investigation")({
  component: InvestigationPage,
});

function InvestigationPage() {
  return (
    <DashboardLayout title="Investigation Workspace">
      <InvestigationWorkspace
        caseData={demoCase}
        evidenceChips={evidenceChips}
        nodes={graphNodes}
        edges={graphEdges}
        agents={agents}
        regulatorySources={regulatorySources}
        report={demoReport}
      />
    </DashboardLayout>
  );
}
