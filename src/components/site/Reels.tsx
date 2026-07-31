import { useEffect, useRef } from "react";
import { Heart, Instagram, Play } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { REELS, INSTAGRAM_URL } from "./data";

function openInstagram(e: React.MouseEvent<HTMLAnchorElement>, url: string) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return;
  try {
    const { pathname } = new URL(url);
    const parts = pathname.split("/").filter(Boolean);
    let deepLink = "";
    if (parts[0] === "reel" || parts[0] === "p") deepLink = `instagram://media?id=${parts[1]}`;
    else if (parts[0]) deepLink = `instagram://user?username=${parts[0]}`;
    if (!deepLink) return;
    e.preventDefault();
    const fallback = window.setTimeout(() => window.open(url, "_blank", "noopener"), 900);
    const onHide = () => document.hidden && window.clearTimeout(fallback);
    document.addEventListener("visibilitychange", onHide, { once: true });
    window.location.href = deepLink;
  } catch {
    /* fall through to default link behaviour */
  }
}

export function Reels() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let paused = false;
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("pointerdown", pause);
    const id = window.setInterval(() => {
      if (paused) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 8) return;
      el.scrollTo({
        left: el.scrollLeft >= max - 8 ? 0 : el.scrollLeft + 1,
        behavior: "auto",
      });
    }, 24);
    return () => {
      window.clearInterval(id);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("pointerdown", pause);
    };
  }, []);

  return (
    <section id="instagram" className="bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            eyebrow="Instagram"
            title="Highlights from the feed."
            subtitle="A selection of recent reels and posts. Tap any card to open it on Instagram."
          />
          <Reveal delay={0.1}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-[0.72rem] tracking-[0.18em] text-foreground uppercase transition-all duration-500 hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              Follow
            </a>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-[max(1.5rem,calc((100vw-80rem)/2))]"
      >
        {[...REELS, ...REELS].map((r, i) => (
          <a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openInstagram(e, r.url)}
            className="group relative w-[70vw] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-ink shadow-luxe transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)] sm:w-[19rem]"
          >
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={r.image}
                alt={r.caption}
                width={720}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
            <span className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/25 bg-ink/40 text-ink-foreground backdrop-blur-md transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
              <Play className="h-4 w-4 fill-current" />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="flex items-center gap-2 text-xs tracking-[0.12em] text-ink-foreground/85 uppercase">
                <Heart className="h-3.5 w-3.5 fill-gold text-gold" />
                {r.likes}
              </p>
              <p className="mt-2 line-clamp-2 text-sm leading-snug font-light text-ink-foreground/80">
                {r.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}