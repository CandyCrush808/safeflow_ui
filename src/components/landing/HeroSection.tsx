import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Mono, Reveal, RiskBadge, useCountUp, useInView } from "./shared";
import { TransactionGraph } from "./TransactionGraph";
import { demoCase, evidenceChips } from "@/data/mock-investigation";

const floatingLabels = ["RISK ANALYSIS", "GRAPH INTELLIGENCE", "RAG COMPLIANCE", "XAI"];

export function HeroSection() {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const score = useCountUp(demoCase.risk.value, visible);

  return (
    <section id="top" className="relative overflow-hidden bg-offwhite pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="container-hz relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <Eyebrow>Financial Crime Intelligence Platform</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
              Financial Crime Investigation, <span className="text-gov">Reimagined.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Smart Horizon transforms suspicious financial activity into explainable,
              investigation-ready intelligence — combining AI agents, risk analytics, transaction
              graphs and regulatory intelligence.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl shadow-[var(--shadow-card)]">
                <a href="#cta">
                  Launch Investigator <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-background">
                <a href="#platform">Explore the Platform</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2">
              {["AI-ASSISTED INVESTIGATION", "HUMAN-IN-THE-LOOP", "AUDIT-READY"].map((item) => (
                <Mono key={item} className="eyebrow text-muted-foreground">
                  {item}
                </Mono>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={380} className="mt-16">
          <div ref={ref} className="relative mx-auto max-w-5xl">
            <div className="pointer-events-none absolute -inset-x-6 -top-6 hidden justify-between lg:flex">
              {floatingLabels.map((label, i) => (
                <span
                  key={label}
                  className="eyebrow hz-float rounded-lg border border-border bg-background/80 px-3 py-1.5 text-muted-foreground backdrop-blur-xs"
                  style={{ animationDelay: `${i * 900}ms` }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--shadow-float)]">
              <div className="flex items-center justify-between border-b border-border bg-offwhite px-5 py-3">
                <Mono className="text-muted-foreground">CASE {demoCase.id}</Mono>
                <Mono className="text-muted-foreground">DIGITAL INVESTIGATOR</Mono>
              </div>

              <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <Mono className="text-muted-foreground">RISK SCORE</Mono>
                    <div className="mt-2 flex items-end gap-3">
                      <span className="text-5xl font-semibold tracking-tight tabular-nums">
                        {score}
                      </span>
                      <span className="pb-1.5 text-lg text-muted-foreground">/ 100</span>
                      <RiskBadge level={demoCase.risk.level} className="mb-2" />
                    </div>
                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-risk-high transition-[width] duration-1000 ease-out"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-offwhite p-4">
                    <Mono className="text-muted-foreground">ALERT</Mono>
                    <p className="mt-1 text-sm font-medium">{demoCase.alert}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {evidenceChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-[0.68rem] text-muted-foreground"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-offwhite p-4">
                  <Mono className="text-muted-foreground">TRANSACTION GRAPH</Mono>
                  <TransactionGraph compact className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}