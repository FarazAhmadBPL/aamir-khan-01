import { Reveal } from "./Reveal";
import { BRAND_SLOTS } from "./data";

export function Brands() {
  const brands = [...BRAND_SLOTS, ...BRAND_SLOTS];

  return (
    <section
      id="brands"
      className="relative scroll-mt-16 overflow-hidden bg-background py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-96 -translate-x-1/2 rounded-full bg-gold/[0.045] blur-3xl"
      />

      {/* Heading */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-gold/60" />

            <p className="eyebrow text-xs tracking-[0.24em] text-gold">
              OUR COLLABORATIONS
            </p>

            <span className="h-px w-7 bg-gold/60" />
          </div>

          <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Great Brands.
            {" "}
            <span className="italic text-gold">
              Lasting Impressions.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Creating distinctive brand experiences across industries.
          </p>
        </Reveal>
      </div>

      {/* Brand categories marquee */}
      <div className="relative mt-8 sm:mt-10">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16 lg:w-24"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16 lg:w-24"
        />

        <div className="brands-marquee flex w-max gap-3 px-1 sm:gap-4">
          {brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              aria-hidden={index >= BRAND_SLOTS.length}
              className="brand-card group relative flex h-[76px] w-44 shrink-0 items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card/70 px-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-card sm:h-[84px] sm:w-52 sm:px-5"
            >
              {/* Gold accent */}
              <span
                aria-hidden="true"
                className="h-8 w-[3px] shrink-0 rounded-full bg-gold/40 transition-all duration-300 group-hover:h-11 group-hover:bg-gold"
              />

              {/* Category label */}
              <span className="font-display text-sm leading-snug tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                {brand}
              </span>

              {/* Corner detail */}
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gold/0 transition-colors duration-300 group-hover:bg-gold/80"
              />

              {/* Bottom highlight */}
              <span
                aria-hidden="true"
                className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-gold/70 transition-transform duration-300 group-hover:scale-x-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer detail */}
      <Reveal className="relative mt-7 text-center">
        <p className="text-[10px] tracking-[0.22em] text-muted-foreground/60 sm:text-xs">
          FASHION · LIFESTYLE · HOSPITALITY · LUXURY
        </p>
      </Reveal>

      {/* Inline CSS — no separate stylesheet required */}
      <style>{`
        .brands-marquee {
          animation: brands-scroll 55s linear infinite;
          will-change: transform;
        }

        .brands-marquee:hover {
          animation-play-state: paused;
        }

        .brand-card {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.025);
        }

        .brand-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
        }

        @keyframes brands-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brands-marquee {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}