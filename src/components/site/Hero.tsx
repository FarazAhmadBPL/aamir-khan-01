import type { PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { WHATSAPP_URL } from "./data";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE = ["Real stories.", "Real people.", "Real influence."];

const PHRASES = [
  "vlogs people love",
  "reels people replay",
  "stories brands trust",
  "moments worth sharing",
];

function RotatingPhrase({ reduce }: { reduce: boolean | null }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((n) => (n + 1) % PHRASES.length),
      2600
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-flex h-[1.5em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={PHRASES[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-block whitespace-nowrap text-gold"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        aria-hidden="true"
        className="ml-1.5 inline-block h-[1em] w-[2px] bg-gold"
        animate={reduce ? undefined : { opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax (desktop only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const imgX = useTransform(sx, [-0.5, 0.5], ["1.8%", "-1.8%"]);
  const imgY = useTransform(sy, [-0.5, 0.5], ["1.2%", "-1.2%"]);

  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-svh items-end overflow-hidden bg-ink"
    >
      {/* Hero image: scroll parallax > mouse parallax > intro zoom-out */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.div style={{ x: imgX, y: imgY }} className="h-full w-full">
          <motion.img
            src={heroImage}
            alt="AL Aamir Khan, Indian digital creator and influencer, in a black tailored suit"
            width={1920}
            height={1280}
            fetchPriority="high"
            initial={reduce ? false : { scale: 1.18, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.2, ease: EASE }}
            className="h-full w-full object-cover object-[42%_28%]"
          />
        </motion.div>
      </motion.div>

      {/* Slow drifting golden light across the image */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-1/4 top-1/4 h-[70%] w-[55%] rounded-full bg-gold/20 blur-[110px] mix-blend-screen"
          animate={{ x: ["0%", "60%", "0%"], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/45" />

      {/* All sizes and gaps below scale with screen height (svh) so everything fits on any device */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-[clamp(5rem,13svh,10rem)] pb-[clamp(5rem,15svh,8rem)]"
      >
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="inline-flex items-center gap-2.5 rounded-full border border-ink-foreground/20 bg-ink/40 px-4 py-1.5 text-[0.65rem] tracking-[0.2em] text-ink-foreground/80 uppercase backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open for brand collaborations
        </motion.div>

        {/* Headline: each line slides up from a mask. Name stays for SEO/screen readers. */}
        <h1 className="mt-[clamp(1rem,3svh,1.75rem)] max-w-4xl text-[length:clamp(2.5rem,min(12vw,10.5svh),6rem)] leading-[0.98] tracking-tight text-ink-foreground">
          <span className="sr-only">AL Aamir Khan: </span>
          {HEADLINE.map((line, i) => (
            <span
              key={line}
              className="-mb-[0.04em] block overflow-hidden pr-[0.1em] pb-[0.1em]"
            >
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.3 + i * 0.12,
                  ease: EASE,
                }}
                className={`block ${
                  i === HEADLINE.length - 1
                    ? "font-display font-normal text-gold italic"
                    : ""
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Gold line draws in */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.9, ease: EASE }}
          className="mt-[clamp(0.75rem,2.5svh,1.75rem)] block h-px w-20 origin-left bg-gold"
        />

        {/* One-liner with rotating phrase (plain inline text, so "I create" always renders) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
          className="mt-[clamp(0.75rem,2.5svh,1.5rem)] text-lg leading-[1.5] font-light text-ink-foreground sm:text-2xl"
        >
          <span className="sr-only">
            Digital creator making vlogs, reels and brand stories.
          </span>
          <span aria-hidden="true">
            I create <RotatingPhrase reduce={reduce} />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.15, ease: EASE }}
          className="mt-[clamp(1.25rem,4svh,2.5rem)] flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.7rem] tracking-[0.18em] text-ink uppercase transition-transform duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--gold)] sm:px-9 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.2em]"
          >
            Let&apos;s Collaborate
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="rounded-full border border-ink-foreground/30 px-7 py-3.5 text-[0.7rem] tracking-[0.18em] text-ink-foreground uppercase transition-all duration-500 hover:border-gold hover:text-gold sm:px-9 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.2em]"
          >
            Watch My Journey
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-ink-foreground/50 sm:block"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[0.6rem] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}