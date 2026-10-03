
import type {
  MouseEvent,
  KeyboardEvent,
  PointerEvent,
} from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import type { Variants } from "motion/react";
import { Play, Youtube } from "lucide-react";
import { Reveal } from "./Reveal";

const AUTOPLAY_MS = 5500;
const FLIP_S = 0.95;
const EASE = [0.22, 1, 0.36, 1] as const;
const RINGS = 6;
const SWIPE_THRESHOLD = 50;
const SWIPE_VERTICAL_TOLERANCE = 80;

const VIDEOS = [
  {
    title: "Jab Helicopter First Time Gaon Mein Utra Vlog 😍",
    thumbnail: "https://img.youtube.com/vi/I2FeuMMus40/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=I2FeuMMus40",
  },
  {
    title: "Tiger Mila Safari में 😍 Pench National Park Vlog",
    thumbnail: "https://img.youtube.com/vi/EkvqOGZZF4g/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=EkvqOGZZF4g",
  },
  {
    title: "Russian Waiters in Indian Wedding 😍 VIP Shadi Ka Khana Vlog",
    thumbnail: "https://img.youtube.com/vi/Tw8i5CSWtCI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=Tw8i5CSWtCI",
  },
  {
    title: "One Day in Clock Towers Makkah | Visiting Kaaba Sharif",
    thumbnail: "https://img.youtube.com/vi/9KbxKL7AuAk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=9KbxKL7AuAk",
  },
  {
    title: "5 Star Hotel का Breakfast - Jehan Numa Palace Buffet",
    thumbnail: "https://img.youtube.com/vi/JGhHDNKS_dg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=JGhHDNKS_dg",
  },
  {
    title: "Bhopal का Mela 2022 - Jhula अब नही झूलेंगे 🥲",
    thumbnail: "https://img.youtube.com/vi/qmQ0N8X2Ajk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=qmQ0N8X2Ajk",
  },
  {
    title: "12 Crores की Car 🔥 Bhopal Auto Expo 2022",
    thumbnail: "https://img.youtube.com/vi/VFgidddpRmY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VFgidddpRmY",
  },
  {
    title: "Taj Hotel Ka Khana 🔥",
    thumbnail: "https://img.youtube.com/vi/xsyDLE-cNxY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=xsyDLE-cNxY",
  },
];

type Video = (typeof VIDEOS)[number];

const CAROUSEL_CSS = `
@keyframes yt-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.yt-fill {
  animation: yt-progress ${AUTOPLAY_MS}ms linear both;
}

.yt-carousel[data-paused="true"] .yt-fill {
  animation-play-state: paused;
}

.yt-carousel {
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

.yt-carousel a,
.yt-carousel button {
  -webkit-tap-highlight-color: transparent;
}

@property --fold {
  syntax: "<length>";
  inherits: true;
  initial-value: 44px;
}

.yt-page {
  --fold: 44px;
  transition: --fold 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  clip-path: polygon(
    0 0,
    calc(100% - var(--fold)) 0,
    100% var(--fold),
    100% 100%,
    0 100%
  );
}

@media (min-width: 640px) {
  .yt-page { --fold: 56px; }
}

.yt-page:has(.yt-fold:hover),
.yt-page:has(.yt-fold:focus-visible) {
  --fold: 74px;
}

.yt-flap {
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  background: linear-gradient(
    to bottom left,
    #fffdf6 0%,
    #ddd5bf 55%,
    #c4baa0 100%
  );
}

@media (prefers-reduced-motion: reduce) {
  .yt-page { transition: none; }
}
`;

const flipVariants: Variants = {
  enter: (dir: number) =>
    dir > 0
      ? {
          rotateY: 0,
          scale: 0.94,
          filter: "brightness(0.6)",
          zIndex: 1,
        }
      : {
          rotateY: -100,
          scale: 1,
          filter: "brightness(0.7)",
          zIndex: 3,
        },

  center: {
    rotateY: 0,
    scale: 1,
    filter: "brightness(1)",
    zIndex: 2,
    transition: {
      duration: FLIP_S,
      ease: EASE,
    },
  },

  exit: (dir: number) =>
    dir > 0
      ? {
          rotateY: -100,
          scale: 1,
          filter: "brightness(0.7)",
          zIndex: 3,
          transition: {
            duration: FLIP_S,
            ease: [0.4, 0, 0.2, 1],
          },
        }
      : {
          rotateY: 0,
          scale: 0.94,
          filter: "brightness(0.6)",
          zIndex: 1,
          transition: {
            duration: FLIP_S,
            ease: EASE,
          },
        },
};

const fadeVariants: Variants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

function extractVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v") ?? "";
    }

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.split("/").filter(Boolean)[0] ?? "";
    }
  } catch {
    return "";
  }

  return "";
}

function openYouTube(
  e: MouseEvent<HTMLAnchorElement>,
  url: string
) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );

  if (!isMobile) return;

  const videoId = extractVideoId(url);
  if (!videoId) return;

  e.preventDefault();

  const fallback = window.setTimeout(() => {
    window.open(url, "_blank", "noopener");
  }, 900);

  const onHide = () => {
    if (document.hidden) {
      window.clearTimeout(fallback);
    }
  };

  document.addEventListener("visibilitychange", onHide, {
    once: true,
  });

  window.location.href =
    `youtube://www.youtube.com/watch?v=${videoId}`;
}

function usePerPage() {
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const sm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      setPerPage(lg.matches ? 4 : sm.matches ? 2 : 1);
    };

    update();

    lg.addEventListener("change", update);
    sm.addEventListener("change", update);

    return () => {
      lg.removeEventListener("change", update);
      sm.removeEventListener("change", update);
    };
  }, []);

  return perPage;
}

function VideoCard({ video }: { video: Video }) {
  // A swipe should navigate the carousel, not open the video.
  const suppressClick = useRef(false);
  const suppressTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (suppressTimer.current !== null) {
        window.clearTimeout(suppressTimer.current);
      }
    };
  }, []);

  function handlePointerDown(e: PointerEvent<HTMLAnchorElement>) {
    // The carousel handles horizontal gestures.
    // Remember this pointer so a completed swipe won't open the link.
    suppressClick.current = false;
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClick.current = false;
      return;
    }

    openYouTube(e, video.url);
  }

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      className="group relative block aspect-video overflow-hidden rounded-lg bg-black shadow-[0_10px_20px_-10px_rgba(0,0,0,0.55)] ring-1 ring-black/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_30px_-12px_rgba(225,48,108,0.5)] hover:ring-gold/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:translate-x-[420%] group-hover:opacity-100 motion-reduce:hidden"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/75 to-black/30 px-3.5 py-2.5 backdrop-blur-[2px]">
        <h3 className="line-clamp-2 text-xs leading-snug font-medium text-white sm:text-sm">
          {video.title}
        </h3>

        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-black">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gold/50 opacity-0 group-hover:animate-ping group-hover:opacity-100 motion-reduce:hidden"
          />
          <Play className="relative h-3.5 w-3.5 fill-current" />
        </span>
      </div>
    </a>
  );
}

export function YoutubeSection() {
  const reduce = useReducedMotion();
  const perPage = usePerPage();

  const pages = useMemo(() => {
    const chunks: Video[][] = [];

    for (let i = 0; i < VIDEOS.length; i += perPage) {
      chunks.push(VIDEOS.slice(i, i + perPage));
    }

    return chunks;
  }, [perPage]);

  const pageCount = pages.length;

  const [state, setState] = useState({
    page: 0,
    dir: 1,
  });

  const [paused, setPaused] = useState(false);

  const pointerStart = useRef<{
    x: number;
    y: number;
    pointerId: number;
    target: EventTarget | null;
  } | null>(null);

  const suppressClick = useRef(false);
  const suppressTimer = useRef<number | null>(null);

  useEffect(() => {
    setState({ page: 0, dir: 1 });
  }, [perPage]);

  useEffect(() => {
    return () => {
      if (suppressTimer.current !== null) {
        window.clearTimeout(suppressTimer.current);
      }
    };
  }, []);

  const page = Math.min(state.page, pageCount - 1);

  function paginate(dir: number) {
    if (pageCount <= 1) return;

    setState((s) => ({
      page:
        (Math.min(s.page, pageCount - 1) +
          dir +
          pageCount) %
        pageCount,
      dir,
    }));
  }

  function goTo(index: number) {
    if (index === page) return;

    setState({
      page: index,
      dir: index > page ? 1 : -1,
    });
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") paginate(1);
    if (e.key === "ArrowLeft") paginate(-1);
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (
      !e.isPrimary ||
      (e.pointerType === "mouse" && e.button !== 0)
    ) {
      return;
    }

    pointerStart.current = {
      x: e.clientX,
      y: e.clientY,
      pointerId: e.pointerId,
      target: e.target,
    };
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    const start = pointerStart.current;

    if (!start || start.pointerId !== e.pointerId) return;

    const deltaX = e.clientX - start.x;
    const deltaY = e.clientY - start.y;

    pointerStart.current = null;

    // Ignore vertical scrolling, diagonal gestures, and short movements.
    if (
      Math.abs(deltaX) < SWIPE_THRESHOLD ||
      Math.abs(deltaY) > SWIPE_VERTICAL_TOLERANCE ||
      Math.abs(deltaX) < Math.abs(deltaY)
    ) {
      return;
    }

    // Suppress a follow-up click after swiping a video card.
    suppressClick.current = true;

    if (suppressTimer.current !== null) {
      window.clearTimeout(suppressTimer.current);
    }

    suppressTimer.current = window.setTimeout(() => {
      suppressClick.current = false;
    }, 500);

    // Swipe left = next; swipe right = previous.
    paginate(deltaX < 0 ? 1 : -1);
  }

  function onPointerCancel() {
    pointerStart.current = null;
  }

  function onCarouselClickCapture(
    e: MouseEvent<HTMLDivElement>
  ) {
    if (!suppressClick.current) return;

    e.preventDefault();
    e.stopPropagation();
    suppressClick.current = false;

    if (suppressTimer.current !== null) {
      window.clearTimeout(suppressTimer.current);
      suppressTimer.current = null;
    }
  }

  const autoplay = !reduce && pageCount > 1;

  return (
    <section
      id="youtube"
      className="relative scroll-mt-16 overflow-hidden bg-ink py-10 text-ink-foreground sm:py-28"
    >
      <style>{CAROUSEL_CSS}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(255,45,111,0.18),transparent_70%),radial-gradient(50%_45%_at_90%_100%,rgba(255,170,60,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
                Watch on YouTube
              </p>

              <h2 className="mt-4 text-4xl leading-tight font-light tracking-tight text-ink-foreground sm:text-5xl">
                Big stories, told in full.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed font-light text-ink-foreground/70">
                From village vlogs to home makeovers, watch
                the full videos on our channel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://www.youtube.com/alaamirkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-foreground/25 bg-white/5 px-4 py-2 text-[10px] tracking-[0.18em] text-ink-foreground uppercase backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              <Youtube className="h-3.5 w-3.5" />
              Visit YouTube Channel
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="YouTube videos"
            data-paused={paused}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onClickCapture={onCarouselClickCapture}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") setPaused(true);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") setPaused(false);
              pointerStart.current = null;
            }}
            onFocus={(e) => {
              if (e.target.matches(":focus-visible")) {
                setPaused(true);
              }
            }}
            onBlur={() => setPaused(false)}
            className="yt-carousel relative mt-12 pl-3 touch-pan-y sm:mt-14 sm:px-16"
          >
            <div className="relative mr-2 mb-2 sm:mr-3 sm:mb-3">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm bg-[repeating-linear-gradient(90deg,#e9e3d3_0_2px,#cdc5ae_2px_3px)] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.9)] sm:translate-x-3 sm:translate-y-3"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-sm bg-[repeating-linear-gradient(90deg,#f1ecdd_0_2px,#d6cfba_2px_3px)] sm:translate-x-[7px] sm:translate-y-[7px]"
              />

              <div
                aria-live="off"
                className="relative z-10 grid [perspective:3000px]"
              >
                <AnimatePresence
                  initial={false}
                  custom={state.dir}
                >
                  <motion.div
                    key={`${perPage}-${page}`}
                    custom={state.dir}
                    variants={reduce ? fadeVariants : flipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{
                      transformOrigin: "left center",
                      backfaceVisibility: "hidden",
                      backgroundColor: "#f4efe2",
                      backgroundImage:
                        "linear-gradient(90deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 22px, rgba(0,0,0,0) 56px), radial-gradient(120% 90% at 70% 0%, rgba(255,255,255,0.55), rgba(255,255,255,0) 60%)",
                    }}
                    className="yt-page relative col-start-1 row-start-1 flex flex-col rounded-sm px-4 pt-5 pb-3 pl-9 sm:px-6 sm:pt-6 sm:pl-12"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-2 flex flex-col justify-evenly py-6 sm:left-3"
                    >
                      {Array.from({ length: RINGS }).map(
                        (_, i) => (
                          <span
                            key={i}
                            className="block h-2.5 w-2.5 rounded-full bg-[#3a3326]/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"
                          />
                        )
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                      {pages[page].map((video, i) => (
                        <VideoCard
                          key={`${video.url}-${i}`}
                          video={video}
                        />
                      ))}
                    </div>

                    <p className="mt-3 text-center font-serif text-xs italic tracking-wider text-black/45">
                      — {page + 1} / {pageCount} —
                    </p>

                    <div
                      className="pointer-events-none absolute top-0 right-0 [filter:drop-shadow(-3px_4px_4px_rgba(60,45,20,0.4))]"
                      style={{
                        width: "var(--fold)",
                        height: "var(--fold)",
                      }}
                    >
                      <button
                        type="button"
                        aria-label="Turn to next page"
                        tabIndex={pageCount > 1 ? 0 : -1}
                        onClick={() => paginate(1)}
                        className="yt-fold yt-flap pointer-events-auto block h-full w-full cursor-pointer"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-3 z-40 flex flex-col justify-evenly py-6 sm:-left-4"
              >
                {Array.from({ length: RINGS }).map((_, i) => (
                  <span
                    key={i}
                    className="block h-2.5 w-7 rounded-full bg-[linear-gradient(180deg,#fafafa_0%,#a8a8a8_50%,#6e6e6e_100%)] shadow-[0_2px_3px_rgba(0,0,0,0.55)] sm:h-3 sm:w-9"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-1">
              {pages.map((_, i) => {
                const active = i === page;

                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to page ${i + 1} of ${pageCount}`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => goTo(i)}
                    className="group p-2"
                  >
                    <span
                      className={`relative block h-1.5 overflow-hidden rounded-full bg-ink-foreground/25 transition-all duration-500 group-hover:bg-ink-foreground/50 ${
                        active ? "w-10" : "w-1.5"
                      }`}
                    >
                      {active &&
                        (autoplay ? (
                          <span
                            key={`${perPage}-${page}`}
                            className="yt-fill absolute inset-0 origin-left bg-gold"
                            onAnimationEnd={(e) => {
                              if (
                                e.animationName === "yt-progress"
                              ) {
                                paginate(1);
                              }
                            }}
                          />
                        ) : (
                          <span className="absolute inset-0 bg-gold" />
                        ))}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}