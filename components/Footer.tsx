import Link from "next/link";
import { FOOTER } from "@/lib/data";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const contactInfo = [
  { icon: "fas fa-map-marker-alt", text: "Mangalore, Karnataka, India" },
  { icon: "fas fa-phone-alt", text: "+91 854 800 5588" },
  { icon: "fas fa-envelope", text: "info@brightmedia.tech" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000000ff, #0d111b)" }}
    >
      {/* ── Top grid ── */}
      <div className="container-x grid gap-8 sm:gap-12 pt-14 sm:pt-20 pb-8 sm:pb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand — full width on mobile */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4 sm:mb-5">
            <img
              src="https://brightmedia.tech/img/photo/all%20img/BM%20Logo.webp"
              alt="Bright Media"
              className="h-9 sm:h-10 w-auto object-contain object-left"
            />
          </div>
          <p className="mb-2 sm:mb-3 text-base sm:text-lg font-bold text-white">Building Tomorrow.</p>
          <p className="text-xs sm:text-sm leading-relaxed text-white/50">
            Creating exceptional digital marketing, branding, and web development
            solutions with quality, innovation, and lasting value.
          </p>

          {/* Social icons — show on mobile inside brand block */}
          <div className="flex items-center gap-3 mt-5 lg:hidden">
            {FOOTER.social.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                aria-label="social link"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-200"
              >
                <i className={`${s.icon} text-xs text-white`} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-4 sm:mb-6 text-sm sm:text-base font-bold text-white">Explore</h4>
          <ul className="space-y-2 sm:space-y-3">
            {exploreLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs sm:text-sm text-white/55 transition-colors duration-200 hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 sm:mb-6 text-sm sm:text-base font-bold text-white">Legal</h4>
          <ul className="space-y-2 sm:space-y-3">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs sm:text-sm text-white/55 transition-colors duration-200 hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 sm:mb-6 text-sm sm:text-base font-bold text-white">Get in Touch</h4>
          <ul className="space-y-3 sm:space-y-4">
            {contactInfo.map((c) => (
              <li key={c.text} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-white/55">
                <i className={`${c.icon} mt-[3px] w-4 shrink-0 text-white/40`} />
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Brand watermark ── */}
      <div
        className="pointer-events-none select-none overflow-hidden leading-none"
        aria-hidden="true"
      >
        <p
          className="whitespace-nowrap text-center font-extrabold uppercase tracking-tight"
          style={{
            fontSize: "clamp(50px, 16vw, 220px)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          BRIGHT MEDIA
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="container-x flex flex-col items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 text-xs sm:text-sm text-white/40 sm:flex-row">
          <p>© 2026 Bright Media – All rights reserved</p>

          {/* Social icons — desktop only here */}
          <div className="hidden lg:flex items-center gap-3">
            {FOOTER.social.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                aria-label="social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors duration-200"
              >
                <i className={`${s.icon} text-xs text-white`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
