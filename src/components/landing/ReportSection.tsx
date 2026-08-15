import { Button } from "@/components/ui/button";
import { demoCase, demoReport } from "@/data/mock-investigation";
import { Mono, Reveal, SectionHeading } from "./shared";

export function ReportSection() {
  return (
    <section id="reports" className="bg-navy py-20 md:py-28">
      <div className="container-hz">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="INVESTIGATION REPORTING"
            title="From evidence to an investigation-ready report."
            description="Every finding is assembled into a case record that is structured, explainable and ready for analyst review."
          />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[var(--shadow-card)]">
              <Mono className="text-lavender/80">CASE FILE</Mono>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mono className="text-lavender/80">CASE</Mono>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-white">{demoCase.id}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Mono className="text-lavender/80">RISK</Mono>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-white">{demoCase.risk.level}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Mono className="text-lavender/80">RECOMMENDATION</Mono>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-white">{demoCase.recommendation}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button asChild size="lg" className="rounded-xl bg-white text-gov hover:bg-lavender">
                  <span>Generate PDF</span>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 bg-transparent text-white hover:bg-white/5">
                  <span>Generate STR Draft</span>
                </Button>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-[var(--shadow-float)] md:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <Mono className="text-lavender/80">INVESTIGATION REPORT</Mono>
                  <p className="mt-2 text-lg font-semibold text-white">Case {demoReport.caseId}</p>
                </div>
                <div className="text-right">
                  <Mono className="text-lavender/80">RISK</Mono>
                  <p className="mt-2 text-sm font-medium text-white">{demoReport.risk}</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {demoReport.sections.map((section) => (
                  <div key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="text-base font-semibold text-white">{section.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-lavender/80">{section.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
