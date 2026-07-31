import { Reveal } from "./Reveal";
import { WHATSAPP_URL, EMAIL } from "./data";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-32 sm:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-gold">Contact</p>
          <h2 className="mt-6 text-4xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Let's Create Something
            <span className="block font-display italic">Amazing Together</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
            Open to brand campaigns, long-form partnerships, appearances and speaking. Every
            enquiry is read personally.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-9 py-4 text-[0.72rem] tracking-[0.2em] text-background uppercase transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
            >
              Work With Me
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Brand%20Collaboration`}
              className="rounded-full border border-foreground/20 px-9 py-4 text-[0.72rem] tracking-[0.2em] text-foreground uppercase transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              Brand Collaboration
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}