import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { MEDIA } from "./data";

export function Media() {
  return (
    <section id="media" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Press" title="Media Coverage" />
        <div className="hairline mt-10" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <article className="group">
              <p className="eyebrow text-gold">
                {MEDIA.featured.outlet} — {MEDIA.featured.date}
              </p>
              <h3 className="mt-5 text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                {MEDIA.featured.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
                {MEDIA.featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-foreground uppercase">
                Feature reserved
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </article>
          </Reveal>

          <div className="divide-y divide-border border-t border-border">
            {MEDIA.items.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <article className="group py-7">
                  <p className="text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {m.outlet} — {m.date}
                  </p>
                  <h4 className="mt-3 font-display text-2xl leading-snug text-foreground transition-colors duration-500 group-hover:text-gold">
                    {m.title}
                  </h4>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}