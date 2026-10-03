import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CalendarDays, MapPin, Newspaper } from "lucide-react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { MEDIA } from "./data";

const EASE = [0.22, 1, 0.36, 1] as const;

const TITLE_LINES = ["Moments the world", "took notice of."];

type MediaItem = (typeof MEDIA)[number];

// Soft gold spotlight that follows the cursor inside a card
function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

const spotlightStyle = {
  background:
    "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 16%, transparent), transparent 70%)",
};

function MediaCard({ item, index }: { item: MediaItem; index: number }) {
  const reduce = useReducedMotion();
  const flipped = index % 2 === 1; // image alternates left / right on desktop
  const link = (item as { link?: string }).link;

  return (
    <Reveal delay={0.05}>
      <article
        onPointerMove={trackPointer}
        className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe transition-all duration-700 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-lift)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        {/* Cursor-following gold spotlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={spotlightStyle}
        />

        <div className="relative grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Image panel: the photo sits in a framed "press print", never cropped */}
          <div
            className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/80 via-secondary/40 to-secondary/10 px-6 py-12 sm:px-10 lg:min-h-[26rem] ${
              flipped ? "lg:order-last" : ""
            }`}
          >
            {/* Giant faded outlet name as a watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-3 select-none truncate px-6 text-center font-display text-[5rem] leading-none text-foreground/[0.05] sm:text-[7rem]"
            >
              {item.outlet}
            </span>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 36, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE }}
              className="relative max-w-full"
            >
              <div
                className={`relative rounded-xl bg-white p-2 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.5)] ring-1 ring-black/5 transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                  flipped ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
                }`}
              >
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="block max-h-[18rem] w-auto max-w-full object-contain sm:max-h-[22rem]"
                  />
                  {/* Shine sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-[1100ms] ease-out group-hover:translate-x-[420%] group-hover:opacity-100 motion-reduce:hidden"
                  />
                </div>

                {/* Gold "tape" holding the print */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-gold/35 shadow-sm backdrop-blur-[1px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-3.5 py-1.5 text-[0.68rem] tracking-[0.2em] text-gold uppercase">
              <Newspaper className="h-3.5 w-3.5" />
              {item.outlet}
            </span>

            <h3 className="mt-5 font-display text-2xl leading-tight text-foreground transition-colors duration-500 group-hover:text-gold sm:text-3xl lg:text-4xl">
              {item.title}
            </h3>

            <div className="mt-5 h-px w-12 bg-gold transition-all duration-700 group-hover:w-24" />

            <p className="mt-5 max-w-2xl text-base leading-relaxed font-light text-muted-foreground">
              {item.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {item.date && (
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  {item.date}
                </span>
              )}
              {item.location && (
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-gold" />
                  {item.location}
                </span>
              )}
            </div>

            {/* {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs tracking-[0.18em] text-background uppercase transition-colors duration-500 hover:bg-gold hover:text-ink"
              >
                Read full story
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )} */}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Media() {
  const reduce = useReducedMotion();

  return (
    <section
      id="media"
      className="relative scroll-mt-16 overflow-hidden bg-background py-20 sm:py-28"
    >
      {/* Soft gold glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_90%_0%,color-mix(in_srgb,var(--gold)_14%,transparent),transparent_70%),radial-gradient(45%_35%_at_0%_100%,color-mix(in_srgb,var(--gold)_10%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading strip */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="eyebrow text-gold"
            >
              Press &amp; Recognition
            </motion.p>

            {/* Title: each line slides up from a mask */}
            <h2 className="mt-4 text-4xl leading-[1.05] font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {TITLE_LINES.map((line, i) => (
                <span
                  key={line}
                  className="block overflow-hidden pr-[0.1em] pb-[0.12em]"
                >
                  <motion.span
                    initial={reduce ? false : { y: "110%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 1.1,
                      delay: 0.1 + i * 0.14,
                      ease: EASE,
                    }}
                    className={`block ${
                      i === TITLE_LINES.length - 1
                        ? "font-display text-gold italic"
                        : ""
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-relaxed font-light text-muted-foreground"
            >
              Features, interviews and honours from the publications and stages
              that backed the work.
            </motion.p>
          </div>

          {/* Count of features, taken straight from the data */}
          {/* <Reveal delay={0.2}>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 px-6 py-4 backdrop-blur-sm">
              <p className="font-display text-4xl leading-none text-foreground">
                <CountUp value={MEDIA.length} />
              </p>
              <div className="h-8 w-px bg-border" />
              <p className="eyebrow text-muted-foreground">
                Features &amp;
                <br />
                honours
              </p>
            </div>
          </Reveal> */}
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-gold/60 via-border to-transparent" />

        <div className="mt-14 space-y-8 sm:space-y-12">
          {MEDIA.map((item, index) => (
            <MediaCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}