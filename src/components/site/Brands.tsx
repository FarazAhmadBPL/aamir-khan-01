import { Reveal } from "./Reveal";
import { BRAND_SLOTS } from "./data";

export function Brands() {
  const row = [...BRAND_SLOTS, ...BRAND_SLOTS];
  return (
    <section id="brands" className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Partnerships</p>
          <h2 className="mt-5 text-3xl tracking-tight text-foreground sm:text-5xl">
            Brands I've Worked With
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex w-max gap-4">
          {row.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="group flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe"
            >
              <span className="font-display text-lg tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-500 group-hover:text-foreground">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-xs tracking-[0.14em] text-muted-foreground/70 uppercase">
        Partner logos added on confirmation
      </p>
    </section>
  );
}