import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { WHATSAPP_URL } from "./data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-svh items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="AL Aamir Khan, Indian digital creator and influencer, in a black tailored suit"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover object-[42%_28%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/45" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-gold"
        >
          Official Website
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-5xl leading-[0.98] tracking-tight text-ink-foreground sm:text-7xl lg:text-8xl"
        >
          AL Aamir Khan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-2xl leading-snug font-light text-ink-foreground/85 italic sm:text-3xl"
        >
          Creating Stories. Building Influence.
          <span className="text-gold"> Inspiring Millions.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-sm leading-relaxed font-light text-ink-foreground/60 sm:text-base"
        >
          Professional influencer, storyteller and digital creator helping brands connect with
          millions through authentic storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink uppercase transition-transform duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--gold)]"
          >
            Work With Me
          </a>
          <a
            href="#about"
            className="rounded-full border border-ink-foreground/30 px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-all duration-500 hover:border-gold hover:text-gold"
          >
            Explore Journey
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-foreground/50 sm:block"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}