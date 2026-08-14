import { agents } from "@/data/mock-investigation";
import { Reveal, SectionHeading } from "./shared";

function AgentCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-teal/40">
      <h3 className="text-sm font-semibold tracking-[0.1em] text-white uppercase">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-lavender/70">{role}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-4" aria-hidden>
      <svg width="2" height="36" viewBox="0 0 2 36" className="overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="36"
          stroke="var(--teal)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          className="hz-dash"
        />
      </svg>
    </div>
  );
}

export function AgentArchitecture() {
  const orchestrator = agents.find((a) => a.tier === "orchestrator")!;
  const collection = agents.filter((a) => a.tier === "collection");
  const reasoning = agents.filter((a) => a.tier === "reasoning");
  const human = agents.find((a) => a.tier === "human")!;

  return (
    <section id="intelligence" className="bg-navy py-20 md:py-28">
      <div className="container-hz">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Multi-agent architecture"
            title="One case. Multiple intelligent agents."
            description="Specialised agents divide the investigation, then converge into a single reasoned, documented case file."
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <div className="mx-auto max-w-md">
              <AgentCard name={orchestrator.name} role={orchestrator.role} />
            </div>
          </Reveal>
          <Connector />
          <Reveal delay={80}>
            <div className="grid gap-4 md:grid-cols-3">
              {collection.map((agent) => (
                <AgentCard key={agent.id} name={agent.name} role={agent.role} />
              ))}
            </div>
          </Reveal>
          <Connector />
          {reasoning.map((agent, i) => (
            <div key={agent.id}>
              <Reveal delay={i * 80}>
                <div className="mx-auto max-w-md">
                  <AgentCard name={agent.name} role={agent.role} />
                </div>
              </Reveal>
              <Connector />
            </div>
          ))}
          <Reveal>
            <div
              className="mx-auto max-w-md rounded-3xl border border-teal/30 p-5 text-center"
              style={{ background: "var(--gradient-cta)" }}
            >
              <h3 className="text-sm font-semibold tracking-[0.1em] text-teal uppercase">
                {human.name}
              </h3>
              <p className="mt-2 text-sm text-lavender/80">{human.role}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}