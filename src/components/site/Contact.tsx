import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL, EMAIL } from "./data";

const EASE = [0.22, 1, 0.36, 1] as const;

const TITLE_LINES = ["Let's create something", "amazing together."];

const OPEN_TO = [
  "Brand campaigns",
  "Long-form partnerships",
  "Appearances",
  "Speaking",
];

// Soft gold spotlight that follows the cursor inside a card
function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

const spotlightStyle = {
  background:
    "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 22%, transparent), transparent 70%)",
};

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden bg-ink py-16 text-ink-foreground sm:py-20 lg:flex lg:min-h-svh lg:items-center lg:py-[clamp(3rem,8svh,8rem)]"
    >
      {/* Ambient glows + faint dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,color-mix(in_srgb,var(--gold)_20%,transparent),transparent_70%),radial-gradient(45%_40%_at_85%_100%,rgba(255,45,111,0.14),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(60%_60%_at_50%_45%,black,transparent)]"
      />

      {/* Sonar rings: a quiet "get in touch" ripple behind the heading */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute h-[22rem] w-[22rem] rounded-full border border-gold/30 sm:h-[34rem] sm:w-[34rem]"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 1.5], opacity: [0.5, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: i * 2.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        {/* Availability pill */}
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-ink-foreground/20 bg-ink/40 px-4 py-1.5 text-[0.65rem] tracking-[0.2em] text-ink-foreground/80 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open for collaborations
          </div>
        </Reveal>

        {/* Title: size follows both screen width and height so it always fits */}
        <h2 className="mt-[clamp(1rem,3.5svh,2rem)] text-[length:clamp(2rem,min(8.5vw,8.5svh),5.25rem)] leading-[1.02] font-light tracking-tight text-ink-foreground">
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

        <Reveal delay={0.2}>
          <p className="mx-auto mt-[clamp(0.75rem,2.5svh,1.75rem)] max-w-xl text-base leading-relaxed font-light text-ink-foreground/70">
            Every enquiry is read personally. Here&apos;s what I&apos;m open to.
          </p>
        </Reveal>

        {/* What I'm open to (moved up, right below the line that introduces it) */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-[clamp(0.75rem,2.5svh,1.5rem)] flex max-w-2xl flex-wrap justify-center gap-2">
            {OPEN_TO.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-light tracking-wide text-ink-foreground/70 transition-colors duration-500 hover:border-gold/60 hover:text-gold"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Two contact cards */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-[clamp(1.25rem,4.5svh,3rem)] grid max-w-3xl gap-3 text-left sm:grid-cols-2 sm:gap-4">
            {/* Primary: WhatsApp (gold light runs around the border) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onPointerMove={trackPointer}
              className="group relative block overflow-hidden rounded-2xl bg-gold/30 p-px transition-transform duration-500 hover:-translate-y-1 motion-reduce:hover:translate-y-0"
            >
              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  className="absolute -inset-[80%]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--gold) 320deg, transparent 360deg)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              )}
              <span className="relative flex h-full items-center gap-4 overflow-hidden rounded-[calc(1rem-1px)] bg-ink px-5 py-4 sm:px-6">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={spotlightStyle}
                />
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-ink">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="relative min-w-0">
                  <span className="block font-display text-xl text-ink-foreground">
                    Work With Me
                  </span>
                  <span className="mt-0.5 block text-sm font-light text-ink-foreground/65">
                    Chat on WhatsApp
                  </span>
                </span>
                <ArrowUpRight className="relative ml-auto h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>

            {/* Secondary: Email */}
            <a
              href={`mailto:${EMAIL}?subject=Brand%20Collaboration`}
              onPointerMove={trackPointer}
              className="group relative block overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 motion-reduce:hover:translate-y-0"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={spotlightStyle}
              />
              <span className="relative flex h-full items-center gap-4 px-5 py-4 sm:px-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl text-ink-foreground">
                    Brand Collaboration
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-light text-ink-foreground/65">
                    {EMAIL}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}