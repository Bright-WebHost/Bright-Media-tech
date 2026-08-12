"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 5 Process Model Steps from the old website elevated into torn note style
const PROCESS_STEPS = [
  {
    step: "01",
    title: "CONSULTATION",
    subtitle: "Discovery & Goals",
    desc: "Deep-dive alignment on your brand vision, target audience, competitive landscape, and KPIs.",
    color: "bg-[#c9f31d] text-black",
    tape: "tape-strip -top-2 sm:-top-3 left-2 sm:left-4 -rotate-6 !w-7 sm:!w-14 !h-2 sm:!h-4",
    rotation: -2,
    icon: "fas fa-comments",
  },
  {
    step: "02",
    title: "STRATEGY DEVELOPMENT",
    subtitle: "Architecture & Blueprint",
    desc: "Crafting multi-channel creative blueprints, visual direction, technical specifications, and timeline roadmaps.",
    color: "bg-[#feef8f] text-slate-900",
    tape: "tape-strip -top-2 sm:-top-3 right-2 sm:right-4 rotate-3 !w-7 sm:!w-14 !h-2 sm:!h-4",
    rotation: 2,
    icon: "fas fa-drafting-compass",
  },
  {
    step: "03",
    title: "EXECUTION",
    subtitle: "High-Octane Production",
    desc: "Rapid design, high-velocity Next.js development, 4K commercial shoots, and precision asset creation.",
    color: "bg-[#99f6e4] text-slate-950",
    tape: "tape-strip -top-2 sm:-top-3 left-1/2 -translate-x-1/2 -rotate-2 !w-7 sm:!w-14 !h-2 sm:!h-4",
    rotation: -1.5,
    icon: "fas fa-laptop-code",
  },
  {
    step: "04",
    title: "MONITORING & OPTIMIZATION",
    subtitle: "Analytics & Scaling",
    desc: "Granular A/B testing, real-time ROAS tracking, speed optimization, and data-driven iterations.",
    color: "bg-[#fecdd3] text-slate-950",
    tape: "tape-strip -top-2 sm:-top-3 right-2 sm:right-6 rotate-4 !w-7 sm:!w-14 !h-2 sm:!h-4",
    rotation: 2.5,
    icon: "fas fa-chart-line",
  },
  {
    step: "05",
    title: "REVIEW & FEEDBACK",
    subtitle: "Deliver & Elevate",
    desc: "Comprehensive project review, performance feedback loops, asset delivery, and ongoing scale support.",
    color: "bg-[#e9d5ff] text-purple-950",
    tape: "tape-strip -top-2 sm:-top-3 left-2 sm:left-6 rotate-2 !w-7 sm:!w-14 !h-2 sm:!h-4",
    rotation: -2,
    icon: "fas fa-check-double",
  },
];

// 12 Curated Proven Works displayed in a Chaotic Colorful Moodboard Canvas Style
const PROVEN_WORKS_CHAOTIC = [
  // ROW 1
  {
    id: "pw-1",
    title: "Bajaj Auto",
    industry: "Automotive Mobility",
    category: "Branding & Social",
    image: "https://brightmedia.tech/img/covers/project/bajaj.webp",
    badge: "⚡ 1M+ Views",
    bgColor: "bg-[#c9f31d]", // Neon Lime
    tapeClass: "tape-strip -top-2 sm:-top-3 left-2 sm:left-4 -rotate-6 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-red-600",
    rotation: -3.5,
    yOffset: "sm:translate-y-2",
    slug: "Bajaj",
  },
  {
    id: "pw-2",
    title: "Second Cup",
    industry: "Café & Coffee Chain",
    category: "Photography & Video",
    image: "https://brightmedia.tech/img/covers/project/lg/secondcup1.webp",
    badge: "🎬 Viral Reels",
    bgColor: "bg-[#feef8f]", // Canary Yellow
    tapeClass: "tape-strip -top-2 sm:-top-3 right-2 sm:right-4 rotate-4 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-blue-600",
    rotation: 2.8,
    yOffset: "sm:-translate-y-3",
    slug: "Second-Cup",
  },
  {
    id: "pw-3",
    title: "Tonino",
    industry: "Fine Dining Restaurant",
    category: "Branding & Video",
    image: "https://brightmedia.tech/img/covers/project/tonino.webp",
    badge: "💡 Luxury Recall",
    bgColor: "bg-[#99f6e4]", // Aqua Mint
    tapeClass: "tape-strip -top-2 sm:-top-3 left-1/2 -translate-x-1/2 -rotate-2 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-emerald-600",
    rotation: -2.2,
    yOffset: "sm:translate-y-4",
    slug: "Tonino",
  },
  {
    id: "pw-4",
    title: "Motorland",
    industry: "Automotive Fleet",
    category: "Social Media & Web",
    image: "https://brightmedia.tech/img/covers/project/Mllog.webp",
    badge: "⚡ 100+ Posts",
    bgColor: "bg-[#fecdd3]", // Coral Rose
    tapeClass: "tape-strip -top-2 sm:-top-3 right-2 sm:right-6 rotate-6 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-amber-600",
    rotation: 4.2,
    yOffset: "sm:-translate-y-2",
    slug: "Motorland",
  },
  {
    id: "pw-5",
    title: "Kaiser",
    industry: "German Appliances",
    category: "Paid Ads & Branding",
    image: "https://brightmedia.tech/img/covers/project/kaiser.webp",
    badge: "📈 High ROAS",
    bgColor: "bg-[#fed7aa]", // Peach Orange
    tapeClass: "tape-strip -top-2 sm:-top-3 left-2 sm:left-6 -rotate-4 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-purple-600",
    rotation: -3.8,
    yOffset: "sm:translate-y-3",
    slug: "Kaiser",
  },
  {
    id: "pw-6",
    title: "TAC Architecture",
    industry: "Luxury Architecture",
    category: "Web Development",
    image: "https://brightmedia.tech/img/allimg/logo/taclogo.webp",
    badge: "⚡ 60fps UX",
    bgColor: "bg-[#e9d5ff]", // Lavender Purple
    tapeClass: "tape-strip -top-2 sm:-top-3 right-2 sm:right-4 rotate-3 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-rose-600",
    rotation: 3.2,
    yOffset: "sm:-translate-y-4",
    slug: "TAC",
  },

  // ROW 2
  {
    id: "pw-7",
    title: "MCM Materials",
    industry: "Construction Industry",
    category: "Web & Social Media",
    image: "https://brightmedia.tech/img/allimg/logo/mcm.webp",
    badge: "🏢 Dynamic Web",
    bgColor: "bg-[#bbf7d0]", // Sage Green
    tapeClass: "tape-strip -top-2 sm:-top-3 left-2 sm:left-5 -rotate-5 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-cyan-600",
    rotation: -4.5,
    yOffset: "sm:translate-y-2",
    slug: "MCM",
  },
  {
    id: "pw-8",
    title: "Hafil Services",
    industry: "Hospitality Solutions",
    category: "Branding & Web",
    image: "https://brightmedia.tech/img/allimg/logo/hafillogo1.webp",
    badge: "✦ Brand From Scratch",
    bgColor: "bg-[#bae6fd]", // Sky Blue
    tapeClass: "tape-strip -top-2 sm:-top-3 left-1/2 -translate-x-1/2 rotate-2 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-red-600",
    rotation: 2.1,
    yOffset: "sm:-translate-y-3",
    slug: "Hafil",
  },
  {
    id: "pw-9",
    title: "Farhat Frères",
    industry: "Automotive Dealer",
    category: "Web Platform & Social",
    image: "https://brightmedia.tech/img/allimg/logo/farhat%20.webp",
    badge: "🚗 50+ Pages",
    bgColor: "bg-[#fde68a]", // Golden Amber
    tapeClass: "tape-strip -top-2 sm:-top-3 right-2 sm:right-5 rotate-5 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-indigo-600",
    rotation: -2.7,
    yOffset: "sm:translate-y-4",
    slug: "FarhatFreres",
  },
  {
    id: "pw-10",
    title: "AZIM Group",
    industry: "Group of Companies",
    category: "Branding & Web",
    image: "https://brightmedia.tech/img/allimg/logo/azimlogo1.webp",
    badge: "🌐 7 Sectors",
    bgColor: "bg-[#fbcfe8]", // Pink Blossom
    tapeClass: "tape-strip -top-2 sm:-top-3 left-2 sm:left-6 -rotate-3 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-lime-600",
    rotation: 3.6,
    yOffset: "sm:-translate-y-2",
    slug: "azim-group",
  },
  {
    id: "pw-11",
    title: "Battery & Tyres",
    industry: "GTSW Distribution",
    category: "Social Media",
    image: "https://brightmedia.tech/img/allimg/logo/Giti.webp",
    badge: "🔋 Duracell & Giti",
    bgColor: "bg-[#d9f99d]", // Light Lime
    tapeClass: "tape-strip -top-2 sm:-top-3 right-2 sm:right-4 rotate-4 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-teal-600",
    rotation: -3.2,
    yOffset: "sm:translate-y-3",
    slug: "GTSW",
  },
  {
    id: "pw-12",
    title: "Pulse Healthy",
    industry: "Healthy Restaurant",
    category: "Branding & Web",
    image: "https://brightmedia.tech/img/allimg/logo/pulse.webp",
    badge: "🥗 Nutritious Brand",
    bgColor: "bg-[#a7f3d0]", // Mint Fresh
    tapeClass: "tape-strip -top-2 sm:-top-3 left-2 sm:left-4 -rotate-6 !w-7 sm:!w-14 !h-2 sm:!h-4",
    pinColor: "bg-amber-600",
    rotation: 2.5,
    yOffset: "sm:-translate-y-3",
    slug: "Pulse",
  },
];

export default function Portfolio() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-24 text-gray-900 border-t border-b border-black/10">
      {/* ============================================================ */}
      {/* LIGHT PAPER CANVAS BACKGROUND PATTERN */}
      {/* ============================================================ */}
      {/* Subtle Notebook Paper Ruled Lines Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />

      {/* Decorative Scotch Tape Strips scattered in corners */}
      <div className="tape-strip top-10 left-8 -rotate-12 hidden xl:block opacity-60" />
      <div className="tape-strip top-24 right-12 rotate-45 hidden xl:block opacity-60" />
      <div className="tape-strip bottom-16 left-12 rotate-6 hidden xl:block opacity-50" />

      <div className="container-x relative z-10 px-3 sm:px-6">
        {/* ============================================================ */}
        {/* 1. HEADER BLOCK (Centered, Torn Sticky Note Style) */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-4xl text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          {/* Centered Pill Label */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 sm:px-5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black text-[#c9f31d] uppercase tracking-wider shadow-md">
            <i className="fas fa-thumbtack text-[10px] sm:text-xs" /> OUR MODEL &amp; WORKFLOW
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-heading tracking-tight leading-[1.05]">
            We Take Care Of{" "}
            <span className="font-handwriting text-4xl sm:text-4xl lg:text-6xl text-emerald-950 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block mt-1">
              Everything
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            We manage all aspects of your project, ensuring seamless execution and exceptional results tailored for you.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. 5-STEP TORN STICKY PROCESS PIPELINE (3 in Row 1, 2 Centered in Row 2 on Mobile) */}
        {/* ============================================================ */}
        <div className="relative mb-16 sm:mb-24">
          {/* Connecting Conveyor Track (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 border-t-2 border-dashed border-black/20 -translate-y-1/2 pointer-events-none z-0" />

          {/* Responsive Flexbox Container: 3 per row on mobile, 2 centered below, 5 on desktop */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:grid lg:grid-cols-5 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((p, index) => {
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={p.step}
                  whileHover={{ y: -6, scale: 1.03 }}
                  onClick={() => setActiveStep(index)}
                  className={`w-[calc(33.333%-6px)] sm:w-[calc(33.333%-11px)] lg:w-auto relative flex flex-col justify-between rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 shadow-md sm:shadow-xl ${p.color} border border-black/15 sm:border-2 cursor-pointer transition-all duration-300 select-none`}
                  style={{
                    transform: `rotate(${p.rotation}deg)`,
                    boxShadow: isActive
                      ? "0 14px 28px -4px rgba(0,0,0,0.25), 0 0 0 2px #000"
                      : "0 6px 14px -3px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Top Scotch Tape Strip */}
                  <div className={p.tape} />

                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between border-b border-black/15 pb-1.5 sm:pb-2.5">
                      <span className="font-mono text-[10px] sm:text-xs lg:text-sm font-black opacity-70">
                        {p.step}
                      </span>
                      <span className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 rounded-full bg-black flex items-center justify-center text-[#c9f31d] text-[8px] sm:text-[10px] lg:text-xs shadow">
                        <i className={p.icon} />
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-1.5 sm:mt-2.5 text-[9px] sm:text-xs lg:text-sm font-black text-black uppercase tracking-tight sm:tracking-wider leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-handwriting text-[10px] sm:text-xs lg:text-base font-bold opacity-80 mt-0.5 leading-tight">
                      {p.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. PROVEN WORK CANVAS: CHAOTIC COLORFUL SWATCH POLAROID MOODBOARD (3 per row on Mobile) */}
        {/* ============================================================ */}
        <div className="mt-16 sm:mt-24">
          {/* Showcase Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b-2 border-black/15 pb-3 sm:pb-4 mb-6 sm:mb-10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d]/35 border border-black/15 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black text-black uppercase tracking-wider">
                <i className="fas fa-palette text-[10px] sm:text-xs" /> PROVEN WORK CANVAS
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
                Craft Delivered With This Model
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-gray-500">
              <span className="h-2 w-2 rounded-full bg-[#15803d]" />
              <span>CHAOTIC DESK SWATCHES // PINNED MOODBOARD</span>
            </div>
          </div>

          {/* Organic / Chaotic Grid of 12 Distinct Color Swatch Works (3 in a row on Mobile) */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-6 pt-2 pb-6">
            {PROVEN_WORKS_CHAOTIC.map((work, idx) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                whileHover={{
                  y: -8,
                  rotate: 0,
                  scale: 1.06,
                  zIndex: 40,
                }}
                style={{
                  rotate: work.rotation,
                }}
                className={`relative ${work.yOffset} transition-all duration-300`}
              >
                <Link
                  href={`/blog/${work.slug}`}
                  className={`group/card relative flex flex-col justify-between rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 lg:p-3 ${work.bgColor} border border-black/20 sm:border-2 shadow-md sm:shadow-xl hover:shadow-2xl transition-all duration-300 text-left h-full block cursor-pointer select-none`}
                  style={{
                    boxShadow:
                      "0 8px 16px -4px rgba(0,0,0,0.12), 0 3px 6px -2px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Top Scotch Tape Accent (Small for mobile) */}
                  <div className={work.tapeClass} />

                  {/* 3D Push Pin on Top Corner */}
                  <div className="pointer-events-none absolute -top-1.5 sm:-top-2.5 right-2 sm:right-3 z-20 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -bottom-0.5 -right-0.5 h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-black/40 blur-[1px]" />
                      <div
                        className={`h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full ${work.pinColor} border border-white sm:border-2 shadow-sm`}
                      />
                    </div>
                  </div>

                  <div>
                    {/* Media Viewport / Canvas Polaroid Frame */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:rounded-xl border border-black/15 bg-gray-900 shadow-inner">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                      />

                      {/* Floating View Icon on Hover */}
                      <div className="absolute bottom-1 right-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-black text-[8px] sm:text-[10px] opacity-0 group-hover/card:opacity-100 transition-opacity shadow">
                        <i className="fas fa-arrow-right -rotate-45" />
                      </div>
                    </div>

                    {/* Polaroid Handwritten Caption */}
                    <div className="mt-1.5 sm:mt-2 px-0.5">
                      <h4 className="text-[10px] sm:text-xs md:text-sm font-black text-black tracking-tight leading-tight truncate">
                        {work.title}
                      </h4>
                      <p className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-black/60 tracking-tight truncate">
                        {work.industry}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. AIRMAIL STRIPED FOOTER BANNER ACCENT */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-16 rounded-xl sm:rounded-3xl border sm:border-2 border-black/15 bg-white p-3.5 sm:p-6 md:p-8 shadow-lg sm:shadow-xl relative overflow-hidden">
          {/* Airmail striped border header */}
          <div className="h-1.5 sm:h-2.5 w-full bg-[repeating-linear-gradient(45deg,#c9f31d,#c9f31d_12px,#ffffff_12px,#ffffff_20px,#000000_20px,#000000_32px,#ffffff_32px,#ffffff_40px)] rounded-t-lg absolute top-0 left-0 right-0" />

          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3.5 sm:gap-6 pt-1.5 sm:pt-2">
            <div className="space-y-0.5 sm:space-y-1">
              <span className="font-handwriting text-sm sm:text-lg md:text-xl font-bold text-emerald-950 block">
                ⚡ Ready to experience the model?
              </span>
              <h4 className="text-base sm:text-2xl md:text-3xl font-black text-black uppercase tracking-tight leading-tight">
                Let's Build Your Project Together
              </h4>
              <p className="text-[11px] sm:text-sm text-gray-600 max-w-xl mx-auto md:mx-0 leading-snug sm:leading-relaxed">
                From consultation to final delivery, we take care of everything so you can focus on scale.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-black px-4 sm:px-7 py-2 sm:py-3.5 text-[10px] sm:text-xs font-black uppercase text-[#c9f31d] tracking-wider shadow-md sm:shadow-xl transition-all hover:bg-[#c9f31d] hover:text-black hover:scale-105 shrink-0"
            >
              <i className="fas fa-paper-plane text-[9px] sm:text-xs" /> Start A Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
