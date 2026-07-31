import { Reveal, SectionHeading } from "./Reveal";
import { AWARDS } from "./data";
import awardImage from "@/assets/award.jpg";

export function Awards() {
  return (
    <section id="awards" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Honours"
          subtitle="Selected recognitions for storytelling, craft and campaign work."
          tone="light"
        />

        <ol className="relative mt-16 space-y-5 before:absolute before:top-2 before:bottom-2 before:left-[1.35rem] before:w-px before:bg-ink-foreground/12 sm:before:left-1/2">
          {AWARDS.map((a, i) => (
            <li key={a.title} className="relative">
              <Reveal delay={i * 0.08}>
                <span className="absolute top-10 left-[1.35rem] hidden h-2 w-2 -translate-x-1/2 rounded-full bg-gold sm:left-1/2 sm:block" />
                <article className="group ml-0 grid grid-cols-[minmax(0,1fr)] items-center gap-6 rounded-[1.75rem] border border-ink-foreground/10 bg-ink-foreground/[0.04] p-5 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-ink-foreground/[0.07] sm:grid-cols-[7rem_minmax(0,1fr)] sm:p-6">
                  <img
                    src={awardImage}
                    alt={`${a.title} award trophy`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-32 w-full rounded-2xl object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] sm:h-28"
                  />
                  <div className="min-w-0">
                    <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">{a.year}</p>
                    <h3 className="mt-2 text-2xl leading-snug text-ink-foreground">{a.title}</h3>
                    <p className="mt-2 text-sm font-light text-ink-foreground/55">{a.org}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}