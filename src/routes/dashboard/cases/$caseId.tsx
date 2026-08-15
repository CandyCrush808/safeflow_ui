import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { InvestigationWorkspace } from "@/components/investigation/InvestigationWorkspace";
import { agents, demoCase, demoReport, evidenceChips, graphEdges, graphNodes, regulatorySources } from "@/data/mock-investigation";

export const Route = createFileRoute("/dashboard/cases/$caseId")({
  component: CaseWorkspacePage,
});

function CaseWorkspacePage() {
  const { caseId } = Route.useParams();

  const caseData = {
    ...demoCase,
    id: caseId || demoCase.id,
  };

  return (
    <DashboardLayout title={`Case Workspace — ${caseId || demoCase.id}`}>
      <InvestigationWorkspace
        caseData={caseData}
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
