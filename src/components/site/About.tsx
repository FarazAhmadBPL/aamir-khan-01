import portrait from "@/assets/portrait.jpg";
import { Reveal, SectionHeading } from "./Reveal";
import { TIMELINE } from "./data";

export function About() {
  return (
    <section id="about" className="bg-background py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 hidden h-40 w-40 rounded-tl-[2rem] border-t border-l border-gold/50 sm:block" />
              <img
                src={portrait}
                alt="Portrait of AL Aamir Khan in a warm minimal interior"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative w-full rounded-[2rem] object-cover shadow-luxe"
              />
              <div className="absolute -right-4 -bottom-8 rounded-2xl border border-border bg-card/90 px-7 py-5 backdrop-blur-md sm:-right-8">
                <p className="font-display text-3xl text-foreground">8 yrs</p>
                <p className="eyebrow mt-1 text-muted-foreground">Of the craft</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About"
              title="A storyteller first, a creator second."
              subtitle="AL Aamir Khan builds narratives that people remember. What began as a curiosity for the camera has become a disciplined practice of writing, filming and editing stories that move audiences across India — and the brands that want to reach them."
            />

            <Reveal delay={0.12}>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-gold">Mission</p>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    To make digital storytelling feel human again — work that earns attention
                    instead of buying it.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-gold">Values</p>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    Honesty in every frame. Restraint in every edit. Respect for the audience and
                    for the brands who trust the work.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 sm:mt-36">
          <Reveal>
            <p className="eyebrow text-gold">The Journey</p>
            <div className="hairline mt-6" />
          </Reveal>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.phase} delay={i * 0.1}>
                <li className="group relative">
                  <span className="block h-px w-full bg-border transition-colors duration-500 group-hover:bg-gold" />
                  <span className="mt-6 block font-display text-sm tracking-[0.2em] text-gold uppercase">
                    {t.year}
                  </span>
                  <h3 className="mt-2 text-2xl text-foreground">{t.phase}</h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    {t.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}