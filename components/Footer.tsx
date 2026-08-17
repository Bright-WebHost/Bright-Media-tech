import Link from "next/link";
import { FOOTER } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const addresses = [
  { label: "India 🇮🇳", text: "Janapriya Complex, Mangalore" },
  { label: "Ivory Coast 🇨🇮", text: "Marcory VGE, Abidjan" },
  { label: "UAE 🇦🇪", text: "Sharjah Publishing City" },
];

const phones = [
  { num: "+91 854 800 5588", tel: "+918548005588" },
  { num: "+225 079 797 9387", tel: "+2250797979387" },
  { num: "+971 50 123 4567", tel: "+971501234567" },
];

const emails = [
  { email: "info@brightmedia.tech", mailto: "mailto:info@brightmedia.tech" },
  { email: "hello@brightmedia.tech", mailto: "mailto:hello@brightmedia.tech" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000000ff, #0d111b)" }}
    >
      {/* ── TOP SECTION: Reference Minimal Layout (3 Addresses, 3 Phones, 2 Emails, Quick links, Social) ── */}
      <div className="container-x pt-14 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">

          {/* Left Block (4 Cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/assets/img/icon/bm-logo.webp"
                alt="Bright Media"
                className="h-12 sm:h-14 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm">
              Bright Media is a full-service digital marketing and branding agency specializing in high-converting web development, SEO, and visual strategy.
            </p>
          </div>

          {/* Right Columns (8 Cols) */}
          <div className="lg:col-span-8 grid gap-8 grid-cols-2 sm:grid-cols-3">

            {/* Column 1: Addresses */}
            <div>
              <h4 className="mb-4 text-xs font-bold text-white tracking-wide uppercase">Addresses</h4>
              <ul className="space-y-2.5 text-xs text-white/50">
                {addresses.map((a) => (
                  <li key={a.label}>
                    <span className="font-semibold text-white/80 block">{a.label}</span>
                    <span className="text-[11px] block">{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Contact (3 Phones & 2 Emails) */}
            <div>
              <h4 className="mb-4 text-xs font-bold text-white tracking-wide uppercase">Contact</h4>
              <div className="space-y-3 text-xs text-white/50">
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-1">Phone</span>
                  {phones.map((p) => (
                    <a
                      key={p.num}
                      href={`tel:${p.tel}`}
                      className="block text-[11px] hover:text-[#c9f31d] transition-colors"
                    >
                      {p.num}
                    </a>
                  ))}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-1">Email</span>
                  {emails.map((e) => (
                    <a
                      key={e.email}
                      href={e.mailto}
                      className="block text-[11px] hover:text-[#c9f31d] transition-colors truncate"
                    >
                      {e.email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Quick link */}
            <div>
              <h4 className="mb-4 text-xs font-bold text-white tracking-wide uppercase">Quick link</h4>
              <ul className="space-y-2 text-xs text-white/50">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-[#c9f31d] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Social */}
            {/* <div>
              <h4 className="mb-4 text-xs font-bold text-white tracking-wide uppercase">Social</h4>
              <ul className="space-y-2 text-xs text-white/50">
                {FOOTER.social.map((s, i) => {
                  const label = i === 0 ? "Facebook" : i === 1 ? "LinkedIn" : i === 2 ? "Behance" : "Dribbble";
                  return (
                    <li key={label}>
                      <a href={s.href} className="hover:text-[#c9f31d] transition-colors">
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div> */}

          </div>
        </div>
      </div>

      {/* ── Brand watermark (ORIGINAL UNTOUCHED WATERMARK) ── */}
      <div
        className="pointer-events-none select-none overflow-hidden leading-none"
        aria-hidden="true"
      >
        <p
          className="whitespace-nowrap text-center font-extrabold uppercase tracking-tight"
          style={{
            fontSize: "clamp(50px, 16vw, 180px)",
            background:
              "linear-gradient(to bottom, rgba(214, 255, 52, 0.43) 0%, rgba(255,255,255,0.01) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          BRIGHT MEDIA
        </p>
      </div>

      {/* ── Bottom bar (ORIGINAL UNTOUCHED BOTTOM BAR) ── */}
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
