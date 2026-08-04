import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { MEDIA } from "./data";

export function Media() {
  return (
    <section id="media" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Media"
          title="Awards & Honours"
          subtitle="Featured stories, interviews and recognition from leading publications."
        />

        <div className="hairline mt-10" />

        <div className="mt-16 space-y-12">
          {MEDIA.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe transition-all duration-700 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[var(--shadow-lift)]">
                <div className="grid lg:grid-cols-[420px_1fr]">
                  {/* Image */}

                 <div className="flex items-center justify-center bg-secondary/30 p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-[420px] w-auto max-w-full rounded-2xl object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                  {/* Content */}

                  <div className="flex flex-col justify-between p-8 lg:p-10">
                    <div>
                      <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
                        {item.outlet}
                      </p>

                      <h3 className="mt-4 text-3xl font-display leading-tight text-foreground transition-colors duration-500 group-hover:text-gold lg:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-6 max-w-2xl text-base leading-relaxed font-light text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-8 grid gap-6 sm:grid-cols-3">
                        <div>
                          <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                            Published By
                          </p>

                          <p className="mt-2 text-base text-foreground">
                            {item.outlet}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                            Date
                          </p>

                          <p className="mt-2 text-base text-foreground">
                            {item.date}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                            Location
                          </p>

                          <p className="mt-2 text-base text-foreground">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* {item.link && (
                      <div className="mt-10">
                        <a
                          href={item.link}
                          className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-all duration-500 hover:text-gold"
                        >
                          Read Full Story

                          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </div>
                    )} */}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}