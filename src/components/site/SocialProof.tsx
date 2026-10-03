import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { SOCIAL_PROOF } from "./data";

// Moves a soft gold spotlight inside the card to follow the cursor
function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export function SocialProof() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Social proof"
      className="relative overflow-hidden bg-ink py-14 text-ink-foreground sm:py-20"
    >
      {/* Soft golden glow behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_0%,color-mix(in_srgb,var(--gold)_16%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5">
          {/* Gold hairline that draws in when the section appears */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-10 top-0 h-px origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          {/* Light sweep that passes across the panel every few seconds */}
          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
              animate={{ x: ["0%", "560%"] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
            />
          )}

          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {SOCIAL_PROOF.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <article
                  onPointerMove={trackPointer}
                  className="group relative h-full overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] px-5 py-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-ink-foreground/[0.07] hover:shadow-[0_24px_50px_-24px_color-mix(in_srgb,var(--gold)_55%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-6 sm:py-9"
                >
                  {/* Cursor-following gold spotlight */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 24%, transparent), transparent 70%)",
                    }}
                  />

                  <p className="relative font-display text-4xl leading-none tracking-tight text-ink-foreground sm:text-5xl">
                    <CountUp value={s.value} />
                    <span className="text-gold">{s.suffix}</span>
                  </p>

                  <div className="relative mx-auto mt-5 h-px w-6 bg-gold transition-all duration-700 group-hover:w-14" />

                  <p className="relative mt-3 text-[0.62rem] tracking-[0.16em] text-ink-foreground/60 uppercase transition-colors duration-500 group-hover:text-ink-foreground/90 sm:text-[0.68rem]">
                    {s.label}
                  </p>

                  {/* Bottom gold line grows from the center on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 group-hover:scale-x-100"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}