import type { MouseEvent } from "react";
import { Play, Youtube } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const VIDEOS = [
  {
    title: "Crafting a premium creator brand",
    description:
      "A look behind the scenes at how storytelling, pacing and visual detail shape a modern digital presence.",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    duration: "12:18",
    url: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
  },
  {
    title: "The mindset behind consistent content",
    description:
      "A short conversation on discipline, audience trust and why strong ideas still matter in a crowded feed.",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    duration: "08:42",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
];

function extractVideoId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v") ?? "";
    }
    if (parsed.hostname.includes("youtu.be")) {
      const pathParts = parsed.pathname.split("/").filter(Boolean);
      return pathParts[0] ?? "";
    }
  } catch {
    return "";
  }

  return "";
}

function openYouTube(e: MouseEvent<HTMLAnchorElement>, url: string) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return;

  const videoId = extractVideoId(url);
  if (!videoId) return;

  e.preventDefault();
  const fallback = window.setTimeout(() => window.open(url, "_blank", "noopener"), 900);
  const onHide = () => {
    if (document.hidden) {
      window.clearTimeout(fallback);
    }
  };

  document.addEventListener("visibilitychange", onHide, { once: true });
  window.location.href = `youtube://www.youtube.com/watch?v=${videoId}`;
}

export function YoutubeSection() {
  return (
    <section id="youtube" className="bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="YouTube"
            title="Watch the stories behind the work."
            subtitle="Tap any thumbnail to open the video on YouTube in the app or browser."
          />
          <Reveal delay={0.1}>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-[0.72rem] tracking-[0.18em] text-foreground uppercase transition-all duration-500 hover:border-gold hover:text-gold"
            >
              <Youtube className="h-4 w-4" />
              Visit channel
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {VIDEOS.map((video, index) => (
            <Reveal key={video.title} delay={0.08 * (index + 1)}>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openYouTube(e, video.url)}
                className="group block overflow-hidden rounded-[2rem] border border-foreground/10 bg-ink shadow-luxe transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  <span className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/25 bg-ink/40 text-ink-foreground backdrop-blur-md transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] tracking-[0.18em] text-ink-foreground uppercase backdrop-blur-md">
                    {video.duration}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-2xl font-medium text-ink-foreground">{video.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed font-light text-ink-foreground/80">
                      {video.description}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
