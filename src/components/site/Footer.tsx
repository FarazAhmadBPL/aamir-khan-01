import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { NAV_LINKS, INSTAGRAM_URL, FACEBOOK_URL, EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER } from "./data";

export function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-ink-foreground">
              AL AAMIR KHAN
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed font-light text-ink-foreground/50">
              Digital creator, storyteller and influencer based in India.
            </p>
          </div>

          <nav aria-label="Quick links">
            <p className="eyebrow text-gold">Quick Links</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-light text-ink-foreground/55 transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold">Connect</p>
            <ul className="mt-5 space-y-3 text-sm font-light text-ink-foreground/55">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-gold"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-gold"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-gold"
                >
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-gold"
                >
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs tracking-[0.14em] text-ink-foreground/40 uppercase">
            © {new Date().getFullYear()} AL Aamir Khan. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.14em] text-ink-foreground/30 uppercase">
            Official Website
          </p>
        </div>
      </div>
    </footer>
  );
}