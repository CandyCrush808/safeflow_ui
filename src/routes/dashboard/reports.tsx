import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, Calendar, Filter, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/reports")({
  component: ReportsPage,
});

const mockReports = [
  {
    id: "REP-2026-0891",
    title: "FinCEN Suspicious Activity Report (SAR)",
    caseId: "FC-2026-00421",
    type: "SAR Filing",
    status: "Approved",
    date: "2026-08-14",
    author: "Marcus Johnson",
  },
  {
    id: "REP-2026-0888",
    title: "Cross-Border Wire Velocity Analysis",
    caseId: "FC-2026-00422",
    type: "Risk Intelligence",
    status: "Pending Review",
    date: "2026-08-13",
    author: "Sarah Chen",
  },
  {
    id: "REP-2026-0882",
    title: "Quarterly AML Compliance Audit Summary",
    caseId: "SYSTEM",
    type: "Audit Log",
    status: "Published",
    date: "2026-08-10",
    author: "Alex Chen",
  },
];

function ReportsPage() {
  return (
    <DashboardLayout title="Reports & Regulatory Filings">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet/10 text-violet">
              <FileText className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Audit & Filing Repository</h2>
              <p className="text-xs text-muted-foreground">Generated investigation reports, SAR filings, and compliance documentation.</p>
            </div>
          </div>
          <Button size="sm" className="gap-2">
            <FileText className="size-4" />
            Generate New Report
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4 text-left">Report Title</th>
                  <th className="px-6 py-4 text-left">Case Reference</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Generated Date</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockReports.map((report) => (
                  <tr key={report.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-foreground">{report.title}</p>
                        <p className="text-xs text-muted-foreground">{report.id} · By {report.author}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-violet text-xs">{report.caseId}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-muted-foreground">{report.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal/10 text-teal">
                        <CheckCircle2 className="size-3" />
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-muted-foreground">{report.date}</td>
                    <td className="px-6 py-4">
                      <Button size="sm" variant="outline" className="text-xs gap-1">
                        <Download className="size-3" />
                        Export PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
