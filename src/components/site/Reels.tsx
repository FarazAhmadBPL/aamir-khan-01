import { useState } from "react";
import { Instagram, Play, ArrowUpRight, Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { INSTAGRAM_URL, REELS } from "./data";
import { openInstagram } from "./openInstagram";
import { ReelsSheet } from "./ReelsSheet";

const EASE = [0.22, 1, 0.36, 1] as const;

// Fan layout: left tilt, centre hero card, right tilt
const FAN = [
  { rotate: -8, y: 18, z: 10, scale: 0.94 },
  { rotate: 0, y: -6, z: 30, scale: 1.06 },
  { rotate: 8, y: 18, z: 20, scale: 0.94 },
];

export function Reels() {
  const reduce = useReducedMotion();
  const [sheetOpen, setSheetOpen] = useState(false);

  const featured = REELS.filter((r) => r.featured);
  const others = REELS.filter((r) => !r.featured);
  const gridReels = [...featured, ...others].slice(0, 3);

  return (
    <section
      id="instagram"
      className="relative scroll-mt-16 overflow-hidden bg-[linear-gradient(135deg,#7b2ff7_0%,#e1306c_45%,#ff7a3d_80%,#ffb347_100%)] py-12 text-white sm:py-14 lg:flex lg:min-h-svh lg:items-center lg:py-[clamp(3rem,7svh,6rem)]"
    >
      <style>{`
        @keyframes ig-blob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-24px) scale(1.12)} }
        @keyframes ig-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ig-ring { 0%{transform:scale(1);opacity:.55} 100%{transform:scale(1.9);opacity:0} }
        @keyframes ig-shine { 0%{transform:translateX(-120%) skewX(-20deg)} 60%,100%{transform:translateX(220%) skewX(-20deg)} }
        .ig-blob { animation: ig-blob 12s ease-in-out infinite; }
        .ig-float { animation: ig-float 4s ease-in-out infinite; }
        .ig-ring { animation: ig-ring 2.4s ease-out infinite; }
        .ig-btn::after{content:"";position:absolute;inset:0;width:40%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);animation:ig-shine 3.6s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){
          .ig-blob,.ig-float,.ig-ring,.ig-btn::after{animation:none!important}
        }
      `}</style>

      {/* Background blobs + dotted texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="ig-blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div
          className="ig-blob absolute -bottom-28 right-[-4rem] h-80 w-80 rounded-full bg-[#ffd36e]/30 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* ============ TEXT ============ */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="ig-ring absolute inset-0 rounded-full bg-white" />
              <span className="relative h-2 w-2 rounded-full bg-white" />
            </span>
            Live on Instagram
          </motion.span>

          <h2 className="mt-4 font-extrabold leading-[0.95] tracking-[-0.04em] text-[length:clamp(2.25rem,min(9vw,8.5svh),4.75rem)]">
            {["Scroll less.", "Feel more."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-[#fff3c4]" : ""}`}
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0"
          >
            Brand collabs, behind-the-scenes aur real moments - seedha mere
            reels mein. Ek tap, aur kahani shuru.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openInstagram(e, INSTAGRAM_URL)}
              className="ig-btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#c2185b] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </a>
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Explore All Reels
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* ============ FANNED DECK ============ */}
        <div className="relative mx-auto flex items-center justify-center pb-4 pt-6">
          {/* glow behind the deck */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl"
          />

          <div className="relative flex items-center justify-center">
            {gridReels.map((reel, i) => {
              const f = FAN[i] ?? FAN[0];
              return (
                <motion.a
                  key={`${reel.url}-${i}`}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openInstagram(e, reel.url)}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 70, rotate: 0, scale: 0.85 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: f.y,
                    rotate: f.rotate,
                    scale: f.scale,
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 * i }}
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -22, rotate: 0, scale: 1.1, zIndex: 50 }
                  }
                  style={{
                    zIndex: f.z,
                    width: "clamp(118px, min(27vw, 30svh), 250px)",
                    marginLeft: i === 0 ? 0 : "clamp(-70px, -5vw, -28px)",
                  }}
                  className="group relative block aspect-[3/4] shrink-0 overflow-hidden rounded-2xl border-[3px] border-white bg-black shadow-[0_28px_50px_-18px_rgba(40,0,40,0.65)]"
                >
                  <img
                    src={reel.image}
                    alt={reel.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* likes chip */}
                  <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                    <Heart className="h-3 w-3 fill-[#ff4d79] text-[#ff4d79]" />
                    {reel.likes}
                  </span>

                  {/* bottom strip: brand + play */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-2.5 pb-2.5 pt-8">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-bold leading-tight sm:text-xs">
                        {reel.brand}
                      </p>
                      <p className="truncate text-[9px] uppercase tracking-wider text-white/70 sm:text-[10px]">
                        {reel.category}
                      </p>
                    </div>
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#e1306c] shadow-lg transition group-hover:scale-110">
                      <span className="ig-ring absolute inset-0 rounded-full bg-white/70" />
                      <Play className="relative h-3.5 w-3.5 translate-x-[1px] fill-current" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* floating sticker */}
          <div className="ig-float absolute -right-1 top-0 hidden rotate-6 rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-[#c2185b] shadow-xl sm:block">
            Tap to watch ▶
          </div>
        </div>
      </div>

      {/* ============ ALL REELS BOTTOM SHEET ============ */}
      <ReelsSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </section>
  );
}