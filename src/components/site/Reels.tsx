import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Instagram, Play } from "lucide-react";
import { INSTAGRAM_URL, REELS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

function openInstagram(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string
) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );

  if (!isMobile) return;

  try {
    const { pathname } = new URL(url);
    const parts = pathname.split("/").filter(Boolean);

    let deepLink = "";

    if (parts[0] === "reel" || parts[0] === "p") {
      deepLink = `instagram://media?id=${parts[1]}`;
    } else if (parts[0]) {
      deepLink = `instagram://user?username=${parts[0]}`;
    }

    if (!deepLink) return;

    e.preventDefault();

    const fallback = setTimeout(() => {
      window.open(url, "_blank", "noopener");
    }, 800);

    const hide = () => {
      if (document.hidden) clearTimeout(fallback);
    };

    document.addEventListener("visibilitychange", hide, {
      once: true,
    });

    window.location.href = deepLink;
  } catch {}
}

export function Reels() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REELS.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [pause]);

  const reel = REELS[index];

  return (
    <section
      id="instagram"
      className="bg-secondary py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

          <SectionHeading
            eyebrow="Instagram"
            title="Highlights from the feed."
            subtitle="Latest reels and moments."
          />

          <Reveal delay={0.1}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              Follow
            </a>
          </Reveal>

        </div>

        <div
          className="mt-14 flex justify-center"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <AnimatePresence mode="wait">

            <motion.a
              key={index}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                openInstagram(e, reel.url)
              }
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -40,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="group relative w-[82vw] max-w-[360px] overflow-hidden rounded-[32px] shadow-2xl"
            >

              <img
                src={reel.image}
                alt={reel.caption}
                className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-lg transition group-hover:bg-gold">

                <Play className="h-5 w-5 fill-white text-white group-hover:fill-black group-hover:text-black" />

              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">

                {/* <div className="flex items-center gap-2 text-gold">

                  <Heart
                    className="fill-current"
                    size={18}
                  />

                  <span className="text-sm font-medium text-white">
                    {reel.likes}
                  </span>

                </div> */}

                <p className="mt-3 text-sm leading-6 text-white/90">
                  {reel.caption}
                </p>

              </div>

            </motion.a>

          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">

          {REELS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-gold"
                  : "w-2 bg-gray-400/50"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}