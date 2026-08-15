import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export const Route = createFileRoute("/dashboard/audit-logs")({
  component: AuditLogsPage,
});

function AuditLogsPage() {
  return (
    <DashboardLayout title="System Audit Logs">
      <div className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet/10 text-violet">
              <History className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Audit Log Repository</h2>
              <p className="text-xs text-muted-foreground">Immutable audit logs and system activity history.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
