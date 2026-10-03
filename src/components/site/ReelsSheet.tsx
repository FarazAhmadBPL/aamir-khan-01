import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useDragControls,
  useReducedMotion,
} from "motion/react";
import { X, Heart, Play, Instagram, Star } from "lucide-react";
import { INSTAGRAM_URL, REELS } from "./data";
import { openInstagram } from "./openInstagram";

type Reel = (typeof REELS)[number];

const EASE = [0.22, 1, 0.36, 1] as const;
const ALL = "All";

interface ReelsSheetProps {
  open: boolean;
  onClose: () => void;
}

export function ReelsSheet({ open, onClose }: ReelsSheetProps) {
  const reduce = useReducedMotion();
  const dragControls = useDragControls();
  const [active, setActive] = useState<string>(ALL);

  const bodyRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Categories (in data order) + counts
  const { categories, counts } = useMemo(() => {
    const map = new Map<string, number>();
    REELS.forEach((r) => map.set(r.category, (map.get(r.category) ?? 0) + 1));
    return {
      categories: [ALL, ...Array.from(map.keys())],
      counts: { [ALL]: REELS.length, ...Object.fromEntries(map) } as Record<
        string,
        number
      >,
    };
  }, []);

  const visible: Reel[] = useMemo(
    () => (active === ALL ? REELS : REELS.filter((r) => r.category === active)),
    [active]
  );

  // Lock page scroll + Esc to close + focus close button
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 350);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  // Reset filter each time the sheet opens
  useEffect(() => {
    if (open) setActive(ALL);
  }, [open]);

  // Keep active chip in view + scroll grid back to top
  useEffect(() => {
    chipRefs.current[active]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
    bodyRef.current?.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[#12031f]/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            onClick={onClose}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
            {/* Sheet */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="All reels"
              className="pointer-events-auto relative flex h-[90svh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[28px] border border-b-0 border-white/10 bg-[#14081f] text-white shadow-[0_-30px_80px_-20px_rgba(225,48,108,0.45)] sm:h-[88svh]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", damping: 32, stiffness: 320, mass: 0.9 }
              }
              drag="y"
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.7 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120 || info.velocity.y > 600) onClose();
              }}
            >
              {/* Ambient gradient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#7b2ff7,#e1306c,#ff7a3d)] opacity-30 blur-3xl"
              />

              {/* ===== Header (drag handle area) ===== */}
              <div className="relative shrink-0">
                <div
                  onPointerDown={(e) => dragControls.start(e)}
                  className="cursor-grab touch-none px-5 pt-3 active:cursor-grabbing sm:px-8"
                >
                  <div className="mx-auto h-1.5 w-11 rounded-full bg-white/30" />

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff9ac0]">
                        Brand collabs
                      </p>
                      <h3 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                        All Reels
                      </h3>
                      <p
                        aria-live="polite"
                        className="mt-1 text-xs text-white/60 sm:text-sm"
                      >
                        {visible.length} reel{visible.length === 1 ? "" : "s"}
                        {active !== ALL && ` in ${active}`}
                      </p>
                    </div>

                    <button
                      ref={closeBtnRef}
                      type="button"
                      onClick={onClose}
                      onPointerDown={(e) => e.stopPropagation()}
                      aria-label="Close"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Category chips */}
                <div className="relative mt-4">
                  <div
                    role="tablist"
                    aria-label="Reel categories"
                    className="flex gap-2 overflow-x-auto px-5 pb-3 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {categories.map((cat) => {
                      const isActive = cat === active;
                      return (
                        <button
                          key={cat}
                          ref={(el) => {
                            chipRefs.current[cat] = el;
                          }}
                          role="tab"
                          aria-selected={isActive}
                          type="button"
                          onClick={() => setActive(cat)}
                          className={`relative shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                            isActive
                              ? "text-white"
                              : "bg-white/[0.07] text-white/70 hover:bg-white/[0.14] hover:text-white"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="reel-chip-active"
                              className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#7b2ff7,#e1306c_55%,#ff7a3d)] shadow-[0_8px_20px_-8px_rgba(225,48,108,0.8)]"
                              transition={
                                reduce
                                  ? { duration: 0 }
                                  : { type: "spring", stiffness: 420, damping: 34 }
                              }
                            />
                          )}
                          <span className="relative flex items-center gap-1.5 whitespace-nowrap">
                            {cat}
                            <span
                              className={`rounded-full px-1.5 py-px text-[10px] font-bold ${
                                isActive
                                  ? "bg-white/25 text-white"
                                  : "bg-white/10 text-white/60"
                              }`}
                            >
                              {counts[cat]}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {/* edge fades */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#14081f] to-transparent sm:w-6"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#14081f] to-transparent sm:w-10"
                  />
                </div>

                <div className="h-px w-full bg-white/10" />
              </div>

              {/* ===== Reels grid ===== */}
              <div
                ref={bodyRef}
                className="relative flex-1 overflow-y-auto overscroll-contain px-4 pb-6 pt-5 sm:px-8"
              >
                <div
                  key={active}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                >
                  {visible.map((reel, i) => (
                    <motion.a
                      key={`${reel.brand}-${i}`}
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => openInstagram(e, reel.url)}
                      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.55,
                        ease: EASE,
                        delay: reduce ? 0 : Math.min(i, 11) * 0.045,
                      }}
                      whileHover={reduce ? undefined : { y: -4 }}
                      className="group relative block aspect-[3/4.2] overflow-hidden rounded-2xl border border-white/10 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    >
                      <img
                        src={reel.image}
                        alt={reel.caption}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* top overlay */}
                      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/45 px-2 py-1 text-[10px] font-semibold backdrop-blur-md">
                          <Heart className="h-3 w-3 fill-[#ff4d79] text-[#ff4d79]" />
                          {reel.likes}
                        </span>
                        {reel.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#ffd36e] px-2 py-1 text-[10px] font-bold text-[#5a3a00]">
                            <Star className="h-3 w-3 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* play button */}
                      <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white/90 text-[#e1306c] opacity-0 shadow-xl backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 max-sm:scale-100 max-sm:opacity-80">
                        <Play className="h-5 w-5 translate-x-[1px] fill-current" />
                      </span>

                      {/* bottom info */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-3 pb-3 pt-14">
                        <p className="truncate text-sm font-bold leading-tight">
                          {reel.brand}
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-white/75">
                          {reel.caption}
                        </p>
                        {active === ALL && (
                          <span className="mt-2 inline-block max-w-full truncate rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur">
                            {reel.category}
                          </span>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* ===== Sticky footer CTA ===== */}
              <div className="relative shrink-0 border-t border-white/10 bg-[#14081f]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur sm:px-8">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openInstagram(e, INSTAGRAM_URL)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#7b2ff7,#e1306c_55%,#ff7a3d)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(225,48,108,0.8)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <Instagram className="h-4 w-4" />
                  Follow for more on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}