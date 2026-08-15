import { Link } from "@tanstack/react-router";
import { ArrowRight, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./shared";

export function FinalCTA() {
  return (
    <section id="launch" className="relative overflow-hidden bg-deep py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--violet) 22%, transparent), transparent 34%), radial-gradient(circle at 80% 30%, color-mix(in oklab, var(--teal) 18%, transparent), transparent 36%), linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
        }}
      />

      <div className="container-hz relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[30px] border border-white/10 bg-white/5 px-6 py-10 text-center shadow-[var(--shadow-float)] md:px-10 md:py-14">
            <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-teal">
              <Network className="size-5" aria-hidden />
            </div>

            <SectionHeading
              tone="dark"
              eyebrow="LAUNCH"
              title="Turn alerts into investigations."
              description="Give investigators the evidence, intelligence and explanations they need to make informed decisions."
            />

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl bg-white text-gov hover:bg-lavender">
                <Link to="/sign-in">
                  Launch Investigator
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/15 bg-transparent text-white hover:bg-white/5"
              >
                <a href="#intelligence">View Architecture</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
