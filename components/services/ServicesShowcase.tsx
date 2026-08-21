"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SERVICES1 } from "@/lib/data";
import WDTools from "../web-dev/WDTools";
import SEOTools from "../seo/SEOTools";

type Variant = 1 | 2 | 3 | 4;

export default function ServicesShowcase({ variant }: { variant: Variant }) {
  return (
    <section className="py-14 bg-white">
      <div className="container-x">

        <div className="mt-14">
          {variant === 1 && <GridCards />}
          {variant === 2 && <NumberedList />}
          {variant === 3 && <Alternating />}
          {variant === 4 && <MinimalColumns />}
        </div>
      </div>
    </section>
  );
}

/* Variant 1 — icon cards */
function GridCards() {
  return (
    <>
      <SectionHeading
        label="Types"
        title="Websites we provide"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            href={`/service-details/${s.id}`}
            className="group flex flex-col rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl dark:border-white/10 dark:bg-dark-secondary"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
              <Image src={s.icon} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-heading dark:text-white">{s.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed">{s.desc}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-primary">
              Read More <i className="fas fa-arrow-right" />
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

/* Variant 2 — big numbered rows */
function NumberedList() {
  return (
    <>
      <SectionHeading className="mb-12"
        label="Types"
        title="Websites we provide"
      />
      <div className="space-y-4">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            href={`/service-details/${s.id}`}
            className="group flex items-center gap-6 rounded-2xl border border-black/5 bg-white p-8 transition-colors hover:border-primary `"
          >
            <span className="text-5xl font-black text-primary/30 group-hover:text-primary">{s.no}</span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-heading dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
            <i className="fas fa-arrow-right text-xl text-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </>
  );
}

/* ========================================================================= */
/* Variant 3 — Classic Invitation Envelope Showcase with Pop-Up Image Cards  */
/* ========================================================================= */

/** Scalloped Rosette Seal Badge SVG Component */
function RosetteSeal({ color = "#22C55E", iconText = "★" }: { color?: string; iconText?: string }) {
  return (
    <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center select-none pointer-events-none drop-shadow-md">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ fill: color }}
      >
        <path d="M50 0 C53 10 59 10 68 5 C75 14 80 16 86 13 C91 23 94 27 100 28 C99 38 100 44 100 50 C100 56 99 62 100 72 C94 73 91 77 86 87 C80 84 75 86 68 95 C59 90 53 90 50 100 C47 90 41 90 32 95 C25 86 20 84 14 87 C9 77 6 73 0 72 C1 62 0 56 0 50 C0 44 1 38 0 28 C6 27 9 23 14 13 C20 16 25 14 32 5 C41 10 47 10 50 0 Z" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-black text-white text-[11px] font-mono drop-shadow-xs">
        {iconText}
      </span>
    </div>
  );
}

/** Envelope Services Data */
const INVITATION_ENVELOPES = [
  {
    id: "01",
    tag: "Web Solutions",
    hash: "CUSTOM NEXT.JS",
    title: "Websites that do more",
    desc: "Clean, responsive websites built around your business and your users.",
    image: "/assets/img/about/28.webp",
    theme: {
      envelopeBg: "#c9f31d",
      envelopeBack: "#3f4f03ff",
      flapBorder: "#b5df13",
      textColor: "#1A2E05",
      textMuted: "#365314",
      sealColor: "#c9f31d",
      badgeBg: "#F59E0B",
    },
  },
  {
    id: "02",
    tag: "Online Store",
    hash: "ECOMMERCE UX",
    title: "Sell online, without headache",
    desc: "E-commerce experiences that make browsing and buying simple.",
    image: "/assets/img/about/29.webp",
    theme: {
      envelopeBg: "#A7CFFF",
      envelopeBack: "#091429",
      flapBorder: "#8EBCF0",
      textColor: "#0C2340",
      textMuted: "#1E3A8A",
      sealColor: "#A7CFFF",
      badgeBg: "#A7CFFF",
    },
  },
  {
    id: "03",
    tag: "Content Management",
    hash: "HEADLESS CMS",
    title: "Update it yourself",
    desc: "Easy-to-manage websites that put your content back in your hands.",
    image: "/assets/img/about/30.webp",
    theme: {
      envelopeBg: "#FECDD3",
      envelopeBack: "#2B0C15",
      flapBorder: "#FDA4AF",
      textColor: "#4C0519",
      textMuted: "#881337",
      sealColor: "#F43F5E",
      badgeBg: "#FB7185",
    },
  },
  {
    id: "04",
    tag: "E-learning Platform",
    hash: "ACADEMY LMS",
    title: "Teach. Learn. Track.",
    desc: "LMS platforms built to make online learning easier to manage.",
    image: "/assets/img/about/31.webp",
    theme: {
      envelopeBg: "#E9D5FF",
      envelopeBack: "#1F0B2D",
      flapBorder: "#D8B4FE",
      textColor: "#2E1065",
      textMuted: "#581C87",
      sealColor: "#E9D5FF",
      badgeBg: "#C084FC",
    },
  },
];

function Alternating() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <>
      {/* Studio Themed Section Header */}
      <div className="mb-4 sm:mb-6 text-center max-w-3xl mx-auto px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lime-200/60 border border-lime-400/40 text-lime-900 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-2 sm:mb-3 shadow-xs transform -rotate-1">
          <span className="w-2 h-2 rounded-full bg-lime-600 animate-pulse" />
          <span>WHAT WE BUILD</span>
        </div>

        <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black leading-[1.1] sm:leading-[1.06]">
          WEBSITES FOR{" "}
          <span className="font-handwriting text-3xl sm:text-6xl lg:text-7xl text-emerald-800 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block">
            every kind of business
          </span>
        </h2>
      </div>

      {/* 4 Invitation Envelopes Grid - Works identically on mobile & desktop */}
      <div className="relative max-w-lg lg:max-w-none mx-auto pt-6 sm:pt-8 pb-12 overflow-visible">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3.5 sm:gap-x-6 gap-y-14 sm:gap-y-10 lg:gap-y-6 items-stretch">
          {INVITATION_ENVELOPES.map((item, index) => {
            const isOpened = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCard(isOpened ? null : item.id)}
                className={`relative group cursor-pointer select-none flex flex-col h-full transition-all duration-200 ${
                  isOpened ? "z-50" : "z-10 hover:z-40"
                }`}
              >
                {/* Ambient Soft Glow */}
                <div
                  className="absolute -inset-2 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-400 pointer-events-none"
                  style={{ backgroundColor: item.theme.envelopeBg }}
                />

                {/* ======================================================== */}
                {/* 1. ENVELOPE BACK WALL & OPEN TOP TRIANGULAR FLAP (Behind) */}
                {/* ======================================================== */}
                <div className="absolute inset-x-0 -top-12 sm:-top-16 bottom-0 rounded-xl sm:rounded-2xl z-0 overflow-hidden" />

                {/* ======================================================== */}
                {/* 2. POPPING INSERT CARD WITH PURE IMAGE (Touch + Hover)    */}
                {/* ======================================================== */}
                <motion.div
                  initial={{ y: 0, rotate: 0 }}
                  animate={{
                    y: isOpened ? -90 : 0,
                    rotate: isOpened ? (index % 2 === 0 ? -3 : 3) : 0,
                    scale: isOpened ? 1.03 : 1,
                  }}
                  whileHover={{
                    y: -130,
                    rotate: index % 2 === 0 ? -3 : 3,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 280, damping: 20 },
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="relative mx-1.5 sm:mx-3.5 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl z-10 transition-shadow duration-300 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border-2 border-white/60 bg-slate-900 shrink-0"
                >
                  {/* Pure, crisp image card */}
                  <div className="relative h-36 sm:h-56 md:h-60 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />

                    {/* Scalloped Rosette Seal Badge on Top-Right Corner */}
                    <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 z-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <RosetteSeal color={item.theme.sealColor} iconText={item.id} />
                    </div>
                  </div>
                </motion.div>

                {/* ======================================================== */}
                {/* 3. ENVELOPE FRONT FLAPS (Responsive Front Face)          */}
                {/* ======================================================== */}
                <div
                  className="relative -mt-12 sm:-mt-20 rounded-xl sm:rounded-2xl p-3 sm:p-6 pt-7 sm:pt-12 pb-4 sm:pb-6 z-20 overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] sm:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] border transition-transform duration-300 group-hover:-translate-y-1 flex-1 flex flex-col justify-start min-h-[140px] sm:min-h-[190px]"
                  style={{
                    backgroundColor: item.theme.envelopeBg,
                    borderColor: item.theme.flapBorder,
                  }}
                >
                  {/* Top V-Scoop Opening for Card */}
                  <div
                    className="absolute top-0 inset-x-0 h-6 sm:h-10 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 100%)`,
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    }}
                  />

                  {/* Left & Right Fold Texture Lines */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%)
                      `,
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Cursive Tag */}
                  <div className="text-center mb-0.5 sm:mb-1 relative z-10 h-5 sm:h-6 flex items-center justify-center">
                    <span
                      className="text-xs sm:text-lg font-bold italic tracking-wide block leading-tight opacity-95 truncate"
                      style={{
                        fontFamily: "var(--font-caveat), cursive",
                        color: item.theme.textMuted,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Main Title on Envelope - Responsive Height */}
                  <div className="min-h-[36px] sm:min-h-[48px] flex items-center justify-center mb-1 sm:mb-2 relative z-10">
                    <h3
                      className="text-xs sm:text-lg font-bold tracking-tight text-center leading-snug"
                      style={{ color: item.theme.textColor }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description on Envelope */}
                  <p
                    className="text-[10px] sm:text-[13px] leading-tight sm:leading-relaxed font-sans text-center line-clamp-2 sm:line-clamp-3 relative z-10 opacity-90 mt-auto"
                    style={{ color: item.theme.textMuted }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <WDTools />
    </>
  );
}

/* Variant 4 — minimal bordered columns */
function MinimalColumns() {
  return (
    <>
      <SectionHeading className="mb-12"
        label="WHAT WE DO"
        title="SEO that moves your brand forward"
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10  sm:grid-cols-2 lg:grid-cols-4">

        {SERVICES1.map((s) => (
          <Link
            key={s.id}
            href={`/service-details/${s.id}`}
            className="group bg-white p-8 transition-colors hover:bg-primary "
          >
            <span className="text-4xl font-black text-primary group-hover:text-dark">{s.no}</span>
            <h3 className="mt-4 text-lg font-bold text-heading group-hover:text-dark ">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed group-hover:text-dark/80">{s.desc}</p>
          </Link>
        ))}
      </div>
      <SEOTools />
    </>
  );
}
