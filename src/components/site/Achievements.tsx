import { Reveal, SectionHeading } from "./Reveal";
import { CountUp } from "./CountUp";
import { STATS } from "./data";

export function Achievements() {
  return (
    <section id="achievements" className="bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Numbers that follow the work."
          align="center"
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card p-8 transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-luxe">
                <p className="font-display text-4xl leading-none tracking-tight text-foreground sm:text-5xl">
                  <CountUp value={s.value} />
                  <span className="text-gold">{s.suffix}</span>
                </p>
                <div className="mt-6 h-px w-8 bg-gold transition-all duration-700 group-hover:w-16" />
                <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}