import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={tone === "dark" ? "eyebrow text-gold" : "eyebrow text-gold-soft"}>{eyebrow}</p>
      <h2
        className={`mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl ${
          tone === "dark" ? "text-foreground" : "text-ink-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-base leading-relaxed font-light ${
            tone === "dark" ? "text-muted-foreground" : "text-ink-foreground/65"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}