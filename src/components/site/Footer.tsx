import type { ReactNode } from "react";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import { Reveal } from "./Reveal";
import {
  NAV_LINKS,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  EMAIL,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "./data";

const YOUTUBE_URL = "https://www.youtube.com/alaamirkhan";

const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM_URL, icon: Instagram },
  { label: "YouTube", href: YOUTUBE_URL, icon: Youtube },
  { label: "Facebook", href: FACEBOOK_URL, icon: Facebook },
];

function ContactRow({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex max-w-full items-center gap-3 text-sm font-light text-ink-foreground/65 transition-colors duration-300 hover:text-gold"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-foreground/15 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
        {icon}
      </span>
      <span className="min-w-0 break-words">{children}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-14 text-ink-foreground sm:pt-16">
      {/* Gold hairline on top + soft glow, so it separates from the Contact section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,color-mix(in_srgb,var(--gold)_10%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.1fr] md:gap-12">
          {/* Brand */}
          <Reveal>
            <div>
              <p className="font-display text-xl tracking-[0.2em] text-ink-foreground">
                AL AAMIR KHAN
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed font-light text-ink-foreground/60">
                Digital creator, storyteller and influencer based in India.
              </p>

              {/* Social buttons */}
              <div className="mt-6 flex gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_14px_30px_-14px_var(--gold)] motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.08}>
            <nav aria-label="Quick links">
              <p className="eyebrow text-gold">Quick Links</p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm font-light text-ink-foreground/65 transition-colors duration-300 hover:text-gold"
                    >
                      <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Connect */}
          <Reveal delay={0.16}>
            <div>
              <p className="eyebrow text-gold">Get in touch</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <ContactRow
                    href={`mailto:${EMAIL}`}
                    icon={<Mail className="h-4 w-4" />}
                  >
                    {EMAIL}
                  </ContactRow>
                </li>
                <li>
                  <ContactRow
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    icon={<Phone className="h-4 w-4" />}
                  >
                    {PHONE_DISPLAY}
                  </ContactRow>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-foreground/10 pt-6 sm:flex-row">
          <p className="text-center text-xs tracking-[0.14em] text-ink-foreground/45 uppercase sm:text-left">
            © {new Date().getFullYear()} AL Aamir Khan. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-xs tracking-[0.14em] text-ink-foreground/35 uppercase">
              Official Website
            </p>
            <a
              href="#home"
              aria-label="Back to top"
              className="group grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Giant faded wordmark, cropped at the bottom edge */}
      <Reveal delay={0.1}>
        <p
          aria-hidden="true"
          className="pointer-events-none mt-4 -mb-[0.18em] select-none bg-gradient-to-b from-ink-foreground/[0.14] to-transparent bg-clip-text text-center font-display text-[clamp(2.25rem,10.5vw,9.5rem)] leading-none tracking-[0.06em] whitespace-nowrap text-transparent"
        >
          AL AAMIR KHAN
        </p>
      </Reveal>
    </footer>
  );
}