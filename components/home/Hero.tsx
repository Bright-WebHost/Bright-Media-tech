"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import TornEdgeDivider from "@/components/contact/TornEdgeDivider";

const HERO_STICKY_SERVICES = [
  {
    id: "s1",
    tag: "01. Visual Branding",
    title: "Brand Strategy & Identity",
    desc: "Crafting iconic logos, living design systems, and high-contrast typography that build instant market affinity.",
    color: "bg-[#c9f31d] text-[#0e0f11]",
    tapeClass: "tape-strip -top-3 left-1/2 -translate-x-1/2 -rotate-2",
    rotation: -2,
    badge: "💡 340% Brand Recall",
    link: "/services-2/branding",
    likes: 184,
  },
  {
    id: "s2",
    tag: "02. Web & Digital",
    title: "High-Velocity Websites",
    desc: "Next.js server-side performance, 60fps micro-interactions, responsive layouts & tactile interfaces.",
    color: "bg-[#feef8f] text-gray-900",
    tapeClass: "tape-strip -top-3 right-8 rotate-3",
    rotation: 2,
    badge: "⚡ 60fps Fluid Motion",
    link: "/services-3",
    likes: 215,
  },
  {
    id: "s3",
    tag: "03. Paid Ads",
    title: "Performance Social & Search",
    desc: "High-converting direct response creatives, granular audience targeting, and multi-channel revenue scaling.",
    color: "bg-[#99f6e4] text-slate-950",
    tapeClass: "tape-strip -top-3 left-8 -rotate-6",
    rotation: -1,
    badge: "📈 4.8X Avg ROAS",
    link: "/service-5",
    likes: 142,
  },
  {
    id: "s4",
    tag: "04. Video & Photo",
    title: "4K Commercial Storytelling",
    desc: "Studio photoshoots, cinematic commercials, and viral vertical video reels engineered to stop the scroll.",
    color: "bg-[#fecdd3] text-slate-950",
    tapeClass: "tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-1",
    rotation: 3,
    badge: "🎬 4K Cinema Craft",
    link: "/photography-and-video-production",
    likes: 198,
  },
];

const HERO_STATS = [
  { value: "31K+", label: "Deliverables Completed", icon: "fas fa-check-circle" },
  { value: "12+", label: "Global Countries", icon: "fas fa-globe-americas" },
  { value: "1M+", label: "Monthly Impressions", icon: "fas fa-eye" },
  { value: "99.4%", label: "Client Satisfaction", icon: "fas fa-heart" },
];

export default function Hero() {
  const [likesState, setLikesState] = useState<Record<string, number>>({
    s1: 184,
    s2: 215,
    s3: 142,
    s4: 198,
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikesState((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#fafaf8] pt-28 sm:pt-28 lg:pt-34 text-[#0e0f11]">
      {/* ============================================================ */}
      {/* BACKGROUND DESK CANVAS & ARCHITECTURAL GRID PATTERN */}
      {/* ============================================================ */}
      {/* Primary Linear Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      {/* Secondary Fine Graph Paper Grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] [background-size:11px_11px]" />

      {/* Grid Intersection Accent Dots */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.18)_1.2px,transparent_1.2px)] [background-size:44px_44px]" />

      {/* Decorative Floating Tape Strips in Backdrop */}
      <div className="tape-strip top-20 left-10 -rotate-12 hidden xl:block opacity-60" />
      <div className="tape-strip top-40 right-16 rotate-45 hidden xl:block opacity-60" />
      <div className="tape-strip bottom-48 left-16 rotate-6 hidden xl:block opacity-50" />

      {/* Soft Ambient Pastel Glows */}
      {/* <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#c9f31d]/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[450px] w-[450px] rounded-full bg-[#38bdf8]/15 blur-[130px]" /> */}

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. ASYMMETRIC HERO HEADER (Left Text + Right Desk Elements) */}
        {/* ============================================================ */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center text-left">
          {/* LEFT 7 COLS: BOLD LEFT-ALIGNED HEADLINE & ACTIONS */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tape Strip Pill Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[#c9f31d]/25 px-4 py-1.5 text-[11px] font-black text-black uppercase tracking-wider shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
              </span>
              <span>⚡ BRIGHT MEDIA • CREATIVE &amp; DIGITAL LAB</span>
            </motion.div>

            {/* Main Display Headline with Sticky Accent */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.4rem] font-bold uppercase tracking-tight text-black leading-[0.98]"
              >
                Bringing The <br />
                <span className="relative inline-block">
                  Bright Side
                  {/* Mini Sticky Tag stuck to heading */}
                  <span className="hidden sm:inline-flex absolute -top-4 -right-12 rotate-6 rounded-md bg-[#feef8f] px-2 py-0.5 text-[9px] font-black text-gray-900 shadow-md border border-amber-300 font-sans tracking-normal">
                    📌 #01 STUDIO
                  </span>
                </span>{" "}
                <br />
                <span className="font-handwriting text-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.8rem] underline decoration-wavy decoration-[#c9f31d] normal-case inline-block mt-1 sm:mt-2">
                  Pinned On Paper
                </span>
              </motion.h1>
            </div>

            {/* CTA Buttons & Stamp Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#c9f31d] px-8 py-4 text-sm font-black text-black uppercase tracking-wider shadow-lg shadow-[#c9f31d]/20 transition-all hover:bg-black hover:text-white hover:scale-105 active:scale-95"
              >
                <i className="fas fa-paper-plane text-xs" /> Start A Project
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-black/15 bg-black/[0.03] px-8 py-4 text-sm font-black text-black uppercase tracking-wider backdrop-blur-md transition-all hover:border-black hover:bg-[#c9f31d]/20 hover:scale-105"
              >
                <i className="fas fa-sticky-note text-black text-xs" /> Explore Sticky Notes
              </Link>

              {/* Postmark Postal Stamp Graphic Badge */}
              <div className="postmark-stamp text-black border-black/30 hidden sm:inline-flex bg-white/80 shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/70">BRIGHT MEDIA POST</span>
                <span className="font-handwriting text-lg font-bold text-black">⚡ 24h Express</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT 5 COLS: TACTILE DESK ARTBOARD (Polaroid & Live Case Sticky) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-6">
              {/* Card 1: Polaroid Studio Photo (Tilted with Scotch Tape) */}
              <motion.div
                initial={{ opacity: 0, rotate: -4, scale: 0.9 }}
                animate={{ opacity: 1, rotate: -3, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="relative rounded-2xl bg-white p-4 text-black shadow-xl border-2 border-black/10 transition-all duration-300"
              >
                {/* Tape Strips on Polaroid */}
                <div className="tape-strip -top-3 left-6 -rotate-12" />
                <div className="tape-strip -top-3 right-6 rotate-12" />

                {/* Polaroid Media Viewport */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl bg-gray-900 border border-black/10">
                  <Image
                    src="/media/1.147b1ea1.jpg"
                    alt="Bright Media Studio Workspace"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-black/80 backdrop-blur px-3 py-1 text-[10px] font-black text-[#c9f31d] uppercase tracking-wider shadow">
                    📌 Bright media
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-[#c9f31d] px-3 py-1 text-[10px] font-black text-black uppercase shadow">
                    ⚡ Live
                  </div>
                </div>

                {/* Handwritten Polaroid Caption */}
                <div className="mt-3.5 flex items-center justify-between border-t border-black/10 pt-2.5">
                  <div>
                    <p className="font-handwriting text-xl font-bold text-gray-900">
                      Behind the lens with Bright Media ✨
                    </p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Ivory Coast • UAE • India
                    </p>
                  </div>
                  <span className="rounded-full bg-black/5 p-2 text-xs font-bold text-black" title="Verified Studio Craft">
                    <i className="fas fa-stamp text-[#65a30d]" />
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Floating Sticky Case Win Note (Lime Pop Accent) */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 2 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={{ rotate: 0, y: -4, scale: 1.03 }}
                className="relative rounded-2xl bg-[#c9f31d] p-5 text-[#0e0f11] shadow-xl border-2 border-black/20"
              >
                {/* 3D Push Pin Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md" />
                </div>

                <div className="flex items-center justify-between border-b border-black/15 pb-2">
                  <span className="rounded-full bg-black px-2.5 py-0.5 text-[9px] font-black uppercase text-[#c9f31d] tracking-wider">
                    ⚡ Client Win Note
                  </span>
                  <span className="font-handwriting text-xs font-bold text-black/70">
                    Verified ROI
                  </span>
                </div>

                <h4 className="mt-2.5 font-black text-base leading-snug">
                  Bajaj Auto: +1,000,000 Impressions
                </h4>
                <p className="mt-1 text-xs font-medium leading-relaxed text-black/80">
                  Strategic mobility social management in Ivory Coast generating massive engagement and direct brand recall.
                </p>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-black/10 text-[11px] font-extrabold">
                  <span className="font-mono">📈 +340% Recall</span>
                  {/* <span className="font-handwriting text-sm text-black/60">Pinned on desk 📌</span> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. INTERACTIVE TACTILE STICKY DESK CANVAS (Unique Centerpiece) */}
        {/* ============================================================ */}
        {/* <div className="mt-16 sm:mt-24">
          <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-[#15803d]" />
              <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#0e0f11]">
                📌 Live Desk Spread: Core Agency Services
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
              Click any note to explore dedicated services &rarr;
            </span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_STICKY_SERVICES.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30, rotate: s.rotation * 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: s.rotation }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 shadow-xl ${s.color} border-2 border-black/10 cursor-pointer transition-all duration-300`}
              > */}
                {/* Top Tape Strip Accent */}
                {/* <div className={s.tapeClass} />

                <div> */}
                  {/* Top Bar: Tag & Live Like */}
                  {/* <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="rounded-full bg-black/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#c9f31d]">
                      {s.tag}
                    </span>
                    <button
                      onClick={(e) => handleLike(s.id, e)}
                      className="flex items-center gap-1 text-xs font-bold text-black/80 hover:text-black transition-colors"
                      title="Like this service note"
                    >
                      <i className="fas fa-heart text-red-600" />
                      <span>{likesState[s.id] || s.likes}</span>
                    </button>
                  </div> */}

                  {/* Title & Description */}
                  {/* <h3 className="mt-4 text-xl font-black leading-tight tracking-tight text-black">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-black/80">
                    {s.desc}
                  </p> */}

                  {/* Takeaway Tape Snippet */}
                  {/* <div className="mt-4 rounded-lg bg-black/10 p-2.5 text-[11px] font-bold text-black/90 border-l-2 border-black/50">
                    {s.badge}
                  </div>
                </div> */}

                {/* Footer Action Link */}
                {/* <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black hover:underline"
                  >
                    Explore Service <i className="fas fa-arrow-right text-[10px]" />
                  </Link>
                  <span className="font-handwriting text-sm font-bold text-black/60">
                    Pinned 📌
                  </span>
                </div> */}
              {/* </motion.div>
            ))}
          </div>
        </div> */}

        {/* ============================================================ */}
        {/* 3. POLAROID STUDIO BOARD & LIVE AGENCY STATS */}
        {/* ============================================================ */}
        {/* <div className="mt-16 sm:mt-24 rounded-3xl border-2 border-black/10 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden"> */}
          {/* Subtle desk texture background */}
          {/* <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" /> */}

          {/* <div className="grid gap-10 lg:grid-cols-12 lg:items-center relative z-10"> */}
            {/* Left Col: Polaroid Photo Card Taped to Board */}
            {/* <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl bg-[#fafafa] p-4 text-black shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border-2 border-black/10"> */}
                {/* Tape strips on Polaroid */}
                {/* <div className="tape-strip -top-3 left-4 -rotate-12" />
                <div className="tape-strip -top-3 right-4 rotate-12" />

                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg border border-black/10 bg-gray-900">
                  <Image
                    src="/media/3.527ea292.jpg"
                    alt="Bright Media Studio Work"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-[#c9f31d] px-3 py-1 text-[10px] font-black text-black uppercase shadow">
                    Creative Lab
                  </div>
                </div> */}

                {/* <div className="mt-3 text-center">
                  <p className="font-handwriting text-xl sm:text-2xl font-bold text-gray-900">
                    Behind the lens with Bright Media ✨
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Ivory Coast • Dubai • Worldwide
                  </p>
                </div>
              </div>
            </div> */}

            {/* Right Col: Live Metric Counters */}
            {/* <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d]/25 border border-black/10 px-3.5 py-1 text-xs font-black text-black uppercase tracking-wider mb-2">
                  <i className="fas fa-chart-line text-[#15803d]" /> Proven Track Record
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
                  Numbers Pinned on Our Board
                </h3>
                <p className="mt-2 text-sm text-gray-600 max-w-xl leading-relaxed">
                  Every campaign, website, and visual identity is engineered for measurable real-world growth and sustained brand dominance.
                </p>
              </div> */}

              {/* 4 Stat Boxes */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {HERO_STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border-2 border-black/10 bg-[#fafafa] p-4 text-center shadow-sm hover:border-black/30 hover:shadow-md hover:bg-white transition-all"
                  >
                    <i className={`${stat.icon} text-lg text-black mb-2`} />
                    <div className="text-2xl sm:text-3xl font-black text-black">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Airmail Stripe Footer Accent */}
              {/* <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,#ef4444,#ef4444_15px,#ffffff_15px,#ffffff_25px,#3b82f6_25px,#3b82f6_40px,#ffffff_40px,#ffffff_50px)] rounded-full opacity-80 mt-4 shadow-sm" />
            </div>
          </div>
        </div> */}
      </div>

      {/* ============================================================ */}
      {/* 4. TORN PAPER EDGE TRANSITION */}
      {/* ============================================================ */}
      <div className="mt-16 sm:mt-24">
        <TornEdgeDivider fillColor="#F2F2F2" />
      </div>
    </section>
  );
}
