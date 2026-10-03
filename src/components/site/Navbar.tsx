import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <a
          href="#home"
          className={`min-w-0 truncate font-display text-xl tracking-[0.2em] transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-ink-foreground"
          }`}
        >
          AL AAMIR KHAN
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-[0.78rem] tracking-[0.16em] uppercase transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-ink-foreground/75 hover:text-ink-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full border px-6 py-2.5 text-[0.72rem] tracking-[0.18em] uppercase transition-all duration-500 sm:inline-block ${
              scrolled
                ? "border-foreground/20 bg-foreground text-background hover:bg-gold hover:text-ink"
                : "border-ink-foreground/35 text-ink-foreground hover:border-gold hover:text-gold"
            }`}
          >
            Work With Me
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`shrink-0 rounded-full p-2 transition-colors lg:hidden ${
              scrolled ? "text-foreground" : "text-ink-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto max-w-7xl px-6 py-6">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/50 py-4 text-sm tracking-[0.16em] text-foreground uppercase last:border-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}