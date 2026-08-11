"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOGO_DARK, LOGO_LIGHT, NAV } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On dark bg use the light logo, and vice-versa.
  const logo = theme === "dark" ? LOGO_LIGHT : LOGO_DARK;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0f11]/95 py-2.5 shadow-md backdrop-blur border-b border-white/10"
          : "bg-[#0e0f11]/90 py-3.5 backdrop-blur-md border-b border-white/10 shadow-sm"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link href="/" className="relative block h-10 w-32">
          <Image src="https://brightmedia.tech/img/photo/all%20img/BM%20Logo.webp" alt="Dixor" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((item, i) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 py-6 text-sm font-semibold text-heading transition-colors hover:text-primary dark:text-white"
              >
                {item.label}
                {item.children && <i className="fas fa-angle-down text-xs" />}
              </Link>
              {item.children && (
                <ul className="invisible absolute left-0 top-full min-w-[220px] translate-y-3 rounded-xl border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-dark-secondary">
                  {item.children.map((c) => (
                    <li key={c.label + c.href}>
                      <Link
                        href={c.href}
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-heading transition-colors hover:bg-primary/10 hover:text-primary dark:text-white/80"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Link href="/services" className="btn-primary hidden lg:inline-flex">
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="text-2xl text-heading dark:text-white lg:hidden"
        >
          <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-black/5 bg-white px-4 py-4 dark:border-white/10 dark:bg-dark lg:hidden">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-semibold text-heading dark:text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      aria-label="Expand"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="p-2 text-heading dark:text-white"
                    >
                      <i className={`fas fa-angle-${openIndex === i ? "up" : "down"}`} />
                    </button>
                  )}
                </div>
                {item.children && openIndex === i && (
                  <ul className="ml-4 border-l border-black/10 pl-4 dark:border-white/10">
                    {item.children.map((c) => (
                      <li key={c.label + c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-paragraph dark:text-white/70"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
