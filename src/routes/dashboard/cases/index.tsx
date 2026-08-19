import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, Search, Filter, ArrowUpRight, ShieldCheck, AlertTriangle } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { demoCase } from "@/data/mock-investigation";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/cases/")({
  component: CasesListPage,
});

const mockCases = [
  demoCase,
  {
    ...demoCase,
    id: "FC-2026-00422",
    title: "Cross-Border Structuring Alert",
    alert: "Unusual destination country & rapid transfer",
    openedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    risk: { score: 72, level: "HIGH" as const, value: 72 },
    recommendation: "VERIFY" as const,
  },
  {
    ...demoCase,
    id: "FC-2026-00420",
    title: "Automated ATM Velocity Spike",
    alert: "Large cash withdrawal flagged across multiple locations",
    openedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    risk: { score: 58, level: "MEDIUM" as const, value: 58 },
    recommendation: "VERIFY" as const,
  },
  {
    ...demoCase,
    id: "FC-2026-00419",
    title: "Round-Tripping Network Signal",
    alert: "Circular transaction flow detected between shell accounts",
    openedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    risk: { score: 45, level: "MEDIUM" as const, value: 45 },
    recommendation: "ALLOW" as const,
  },
  {
    ...demoCase,
    id: "FC-2026-00418",
    title: "High-Frequency Low-Amount Transfers",
    alert: "Minor velocity alert within expected threshold",
    openedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    risk: { score: 28, level: "LOW" as const, value: 28 },
    recommendation: "ALLOW" as const,
  },
];

function CasesListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filteredCases = mockCases.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.alert.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "ALL" || item.risk.level === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout title="Cases Directory">
      <div className="space-y-6">
        {/* Top Header Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet/10 text-violet">
              <Briefcase className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Active Case Workspace</h2>
              <p className="text-xs text-muted-foreground">Manage and review financial crime investigation cases.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search case ID, title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2 text-xs text-foreground outline-none focus:ring-2 focus:ring-violet/20"
              />
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 rounded-xl border border-border bg-background p-1 text-xs">
              {["ALL", "HIGH", "MEDIUM", "LOW"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedFilter(level)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 font-medium transition-colors",
                    selectedFilter === level
                      ? "bg-violet text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Table */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4 text-left">Case ID</th>
                  <th className="px-6 py-4 text-left">Risk Level</th>
                  <th className="px-6 py-4 text-left">Alert Description</th>
                  <th className="px-6 py-4 text-left">AI Recommendation</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <Link
                          to="/dashboard/cases/$caseId"
                          params={{ caseId: caseItem.id }}
                          className="font-semibold text-violet hover:underline flex items-center gap-1"
                        >
                          {caseItem.id}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-0.5">{caseItem.title}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "font-bold text-xs px-2 py-0.5 rounded-full border",
                            caseItem.risk.level === "HIGH" || caseItem.risk.level === "CRITICAL"
                              ? "bg-risk-high/10 text-risk-high border-risk-high/20"
                              : caseItem.risk.level === "MEDIUM"
                                ? "bg-risk-medium/10 text-risk-medium border-risk-medium/20"
                                : "bg-risk-low/10 text-risk-low border-risk-low/20",
                          )}
                        >
                          {caseItem.risk.level}
                        </span>
                        <span className="text-xs text-muted-foreground">{caseItem.risk.value}/100</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-foreground">{caseItem.alert}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet/10 text-violet">
                        {caseItem.recommendation}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Button asChild size="sm" variant="outline" className="text-xs gap-1">
                        <Link to="/dashboard/cases/$caseId" params={{ caseId: caseItem.id }}>
                          View Workspace
                          <ArrowUpRight className="size-3" />
                        </Link>
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
