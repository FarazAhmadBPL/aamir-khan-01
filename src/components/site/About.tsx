import type { PointerEvent } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { HeartHandshake, Target } from "lucide-react";
import portrait from "@/assets/hero_exp.jpg";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { TIMELINE } from "./data";

const EASE = [0.22, 1, 0.36, 1] as const;

const TITLE_LINES = ["Behind every reel,", "there's a real story."];

const PILLARS = [
  {
    label: "Mission",
    icon: Target,
    text: "Make digital storytelling feel human again. Content that earns attention, never buys it.",
  },
  {
    label: "Values",
    icon: HeartHandshake,
    text: "Honest in every frame. Sharp in every edit. Loyal to the audience and to the brands that trust the work.",
  },
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

export function About() {
  const reduce = useReducedMotion();

  // Portrait: inner parallax
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  // Portrait: 3D tilt on mouse move (desktop only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [7, -7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-5, 5]);

  function handleTilt(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function resetTilt() {
    mx.set(0);
    my.set(0);
  }

  // Timeline: line draws as you scroll
  const tlRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress: tlProgress } = useScroll({
    target: tlRef,
    offset: ["start 85%", "end 55%"],
  });
  const line = useSpring(tlProgress, { stiffness: 80, damping: 25 });

  return (
  <section
  id="about"
  className="relative scroll-mt-16 overflow-hidden bg-ink pt-10 pb-16 text-ink-foreground sm:scroll-mt-20 sm:py-20 lg:py-[clamp(4rem,9svh,7rem)]"
>
      {/* Drifting golden glows */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-20 h-[26rem] w-[26rem] rounded-full bg-gold/15 blur-[120px]"
            animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-40 h-[24rem] w-[24rem] rounded-full bg-[#ff2d6f]/10 blur-[120px]"
            animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main frame: portrait + story (sized by screen height so it fits one view on desktop) */}
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 xl:gap-20">
          {/* Portrait (compact) */}
          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[calc(min(64svh,600px)*0.8)]">
            {/* Gold corner frame grows in */}
            <motion.div
              aria-hidden="true"
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
              className="absolute -top-5 -left-5 hidden h-28 w-28 origin-top-left rounded-tl-[1.75rem] border-t border-l border-gold/60 sm:block"
            />

            <div
              onPointerMove={handleTilt}
              onPointerLeave={resetTilt}
              className="[perspective:1100px]"
            >
              <motion.div
                style={reduce ? undefined : { rotateX, rotateY }}
                className="relative overflow-hidden rounded-[1.75rem] bg-ink-foreground/10 p-px shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]"
              >
                {/* Rotating gold light running around the border */}
                {!reduce && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute -inset-[60%]"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--gold) 320deg, transparent 360deg)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                <motion.div
                  ref={imgRef}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.2, ease: EASE }}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(1.75rem-1px)] bg-ink"
                >
                  <motion.img
                    src={portrait}
                    alt="AL Aamir Khan, Indian digital creator and storyteller"
                    width={1024}
                    height={1280}
                    decoding="async"
                    style={reduce ? undefined : { y: imgY, scale: 1.15 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                </motion.div>
              </motion.div>
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -bottom-6 rounded-2xl border border-ink-foreground/15 bg-ink/70 px-5 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:-right-6"
            >
              <p className="font-display text-2xl text-ink-foreground sm:text-3xl">
                <CountUp value={8} />
                <span className="text-gold">+ yrs</span>
              </p>
              <p className="eyebrow mt-0.5 text-[0.6rem] text-ink-foreground/60">
                Behind the camera
              </p>
            </motion.div>
          </div>

          {/* Story */}
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="eyebrow text-gold"
            >
              About me
            </motion.p>

            {/* Title: each line slides up from a mask */}
            <h2 className="mt-4 text-[length:clamp(2.25rem,min(8vw,6.5svh),3.75rem)] leading-[1.05] font-light tracking-tight text-ink-foreground">
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
              className="mt-[clamp(0.75rem,2.5svh,1.5rem)] max-w-lg text-[0.95rem] leading-relaxed font-light text-ink-foreground/70 sm:text-base"
            >
              I turn everyday moments into stories people watch, trust and
              share. Eight-plus years of writing, shooting and editing, guided
              by one rule: keep it real. That is why audiences stay and brands
              come back.
            </motion.p>

            {/* Mission + Values (compact cards) */}
            <div className="mt-[clamp(1.25rem,4svh,2.5rem)] grid gap-3 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.label} delay={0.15 + i * 0.1}>
                  <article
                    onPointerMove={trackPointer}
                    className="group relative h-full overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-24px_color-mix(in_srgb,var(--gold)_50%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={spotlightStyle}
                    />
                    <div className="relative flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                        <p.icon className="h-4 w-4" />
                      </span>
                      <p className="eyebrow text-gold">{p.label}</p>
                    </div>
                    <p className="relative mt-3 text-[0.82rem] leading-relaxed font-light text-ink-foreground/70">
                      {p.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="mt-20 sm:mt-28">
          <Reveal>
            <p className="eyebrow text-gold">My journey so far</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/60 via-ink-foreground/15 to-transparent" />
          </Reveal>

          <ol
            ref={tlRef}
            className="relative mt-14 space-y-10 pl-8 md:grid md:grid-cols-4 md:gap-10 md:space-y-0 md:pl-0"
          >
            {/* Mobile: vertical track + progress */}
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-px bg-ink-foreground/15 md:hidden"
            />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: reduce ? 1 : line }}
              className="absolute top-0 left-0 h-full w-px origin-top bg-gold md:hidden"
            />
            {/* Desktop: horizontal track + progress */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 hidden h-px bg-ink-foreground/15 md:block"
            />
            <motion.span
              aria-hidden="true"
              style={{ scaleX: reduce ? 1 : line }}
              className="absolute inset-x-0 top-0 hidden h-px origin-left bg-gold md:block"
            />

            {TIMELINE.map((t, i) => (
              <Reveal key={t.phase} delay={i * 0.12}>
                <li className="group relative md:pt-8">
                  {/* Dot pops in when it enters the viewport */}
                  <motion.span
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 15,
                      delay: i * 0.15,
                    }}
                    className="absolute top-2 -left-[2.28rem] block h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_color-mix(in_srgb,var(--gold)_22%,transparent)] md:top-[-5px] md:left-0"
                  />

                  <article
                    onPointerMove={trackPointer}
                    className="relative overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-6 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-gold/50 group-hover:bg-ink-foreground/[0.06] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={spotlightStyle}
                    />
                    <span className="relative block font-display text-sm tracking-[0.2em] text-gold uppercase">
                      {t.year}
                    </span>
                    <h3 className="relative mt-2 text-2xl text-ink-foreground transition-colors duration-500 group-hover:text-gold">
                      {t.phase}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed font-light text-ink-foreground/65">
                      {t.text}
                    </p>
                  </article>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}