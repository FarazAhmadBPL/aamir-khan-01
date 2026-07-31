import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { SOCIAL_PROOF } from "./data";

export function SocialProof() {
  return (
    <section aria-label="Social proof" className="relative z-10 bg-background">
      <div className="mx-auto -mt-14 max-w-7xl px-6 sm:-mt-20">
        <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-border/70 bg-card/80 p-4 shadow-luxe backdrop-blur-xl sm:gap-4 sm:p-6 lg:grid-cols-4">
          {SOCIAL_PROOF.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <article className="group h-full rounded-[1.4rem] bg-secondary/60 px-5 py-7 text-center transition-all duration-700 hover:-translate-y-1 hover:bg-secondary sm:px-6 sm:py-9">
                <p className="font-display text-3xl leading-none tracking-tight text-foreground sm:text-4xl">
                  <CountUp value={s.value} />
                  <span className="text-gold">{s.suffix}</span>
                </p>
                <div className="mx-auto mt-4 h-px w-6 bg-gold transition-all duration-700 group-hover:w-12" />
                <p className="mt-3 text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase sm:text-[0.68rem]">
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