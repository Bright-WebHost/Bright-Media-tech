"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TornEdgeDivider from "@/components/contact/TornEdgeDivider";

/* ───────────────────────────────────────────────
   DATA
─────────────────────────────────────────────── */
const STATS = [
  { value: "31K", suffix: "+", label: "Projects Delivered" },
  { value: "4.8", suffix: "×", label: "Avg ROAS" },
  { value: "12", suffix: "+", label: "Countries" },
  { value: "99", suffix: "%", label: "Retention" },
];

const TICKER_WORDS = [
  "BRANDING", "WEB DEV", "VIDEO PRODUCTION", "PAID ADS",
  "SOCIAL MEDIA", "SEO", "BRIGHT MEDIA", "DESIGN",
];

/* ───────────────────────────────────────────────
   MARQUEE TICKER
─────────────────────────────────────────────── */
function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        animate={{ x: reverse ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="flex items-center whitespace-nowrap"
      >
        {items.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/20 px-4 sm:px-6">
              {w}
            </span>
            <span className="text-[#c9f31d] text-[10px] sm:text-xs">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   ANIMATED COUNTER
─────────────────────────────────────────────── */
function Counter({ value, suffix }: { value: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const num = parseFloat(value);
    const isFloat = value.includes(".");
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = num * Math.min(step / steps, 1);
      setDisplay(isFloat ? current.toFixed(1) : Math.floor(current).toString());
      if (step >= steps) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{display}{suffix}</span>;
}

/* ───────────────────────────────────────────────
   MAIN HERO
─────────────────────────────────────────────── */
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0b0d] text-white flex flex-col">

      {/* ── TOP TICKER BAND ─────────────────────────── */}
      <div className="border-b border-white/10 py-2 sm:py-2.5 bg-[#0d0e10] shrink-0 mt-[64px] sm:mt-[72px] lg:mt-[80px]">
        {/* <Marquee /> */}
      </div>

      {/* ── MAIN SPLIT CANVAS ───────────────────────── */}
      {/*
        Mobile  : single column stack (dark → light)
        Tablet  : single column stack (dark → light)
        Desktop : two-column side-by-side with diagonal slash
      */}
      <div className="relative flex flex-col lg:flex-row min-h-[calc(100svh-88px)] lg:min-h-[calc(100svh-80px)]">

        {/* ╔══════════════════════════════════════════╗
            ║          LEFT / TOP — DARK COLUMN        ║
            ╚══════════════════════════════════════════╝ */}
        <div className="relative flex flex-col lg:flex-none lg:w-[55%] px-5 sm:px-8 lg:px-14 pt-8 sm:pt-10 pb-8 lg:pb-10 z-10 justify-between">

          {/* Faint grid overlay */}
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:80px_80px]" />

          {/* Vertical rotated side-label — desktop only */}
          {/* <div className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-3 origin-center pointer-events-none">
            <span className="h-px w-8 bg-white/15" />
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.35em] text-white/25">
              EST. 2018 — ABIDJAN
            </span>
            <span className="h-px w-8 bg-white/15" />
          </div> */}

          {/* ── Top Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#c9f31d]/40 bg-[#c9f31d]/10 px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-black text-[#c9f31d] uppercase tracking-widest shrink-0"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9f31d] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9f31d]" />
            </span>
            Creative &amp; Digital Studio
          </motion.div>

          {/* ── MEGA HEADLINE ── */}
          <div className="mt-6 sm:mt-8 lg:mt-0 lg:my-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Eyebrow mono label */}
              {/* <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-white/30 mb-3 sm:mb-4">
                BRIGHT MEDIA // 2018–2026
              </p> */}

              {/* Line 1 — MAKING */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[2.8rem] xs:text-[3.4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5rem] xl:text-[6rem] font-black uppercase leading-[0.88] tracking-tighter text-white"
                >
                  MAKING
                </motion.p>
              </div>

              {/* Line 2 — BRANDS (neon lime) + pill sticker */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 sm:gap-4 flex-wrap"
                >
                  <span className="text-[2.8rem] xs:text-[3.4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5rem] xl:text-[6rem] font-black uppercase leading-[0.88] tracking-tighter text-[#c9f31d]">
                    BRANDS
                  </span>
                  <span className="inline-flex items-center gap-1.5 self-center rounded-full bg-[#c9f31d] px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black text-black uppercase tracking-wider -rotate-2 shadow-lg shadow-[#c9f31d]/30 shrink-0">
                    <span className="text-pink-600">★</span> #01
                  </span>
                </motion.div>
              </div>

              {/* Line 3 — LOOK BRIGHT (outline ghost text) */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[2.8rem] xs:text-[3.4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5rem] xl:text-[6rem] font-black uppercase leading-[0.88] tracking-tighter"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.30)", color: "transparent" }}
                >
                  LOOK BRIGHT
                </motion.p>
              </div>

              {/* Handwriting cursive tagline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-4 sm:mt-5 flex items-center gap-3"
              >
                <span className="h-px w-8 sm:w-10 bg-white/20 shrink-0" />
                <span className="font-handwriting text-xl sm:text-2xl md:text-3xl font-bold text-white/70">
                  Ideas. Made Visible.
                </span>
              </motion.div>

              {/* Description paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-4 sm:mt-6 text-sm sm:text-base text-white/50 font-medium max-w-md leading-relaxed"
              >
                Full-service creative studio crafting iconic brand identities, high-velocity websites, and scroll-stopping campaigns for industry leaders across 12 countries.
              </motion.p>
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary CTA — hover wipe */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-black text-black uppercase tracking-wider shadow-2xl shadow-[#c9f31d]/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-paper-plane text-xs -rotate-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  START A PROJECT
                </span>
                {/* Wipe-in overlay */}
                <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
                <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-black text-white uppercase tracking-wider z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                  <i className="fas fa-paper-plane text-xs" /> LET'S GO
                </span>
              </Link>

              {/* Ghost secondary CTA */}
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black text-white/50 uppercase tracking-wider transition-all hover:text-white"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c9f31d] group-hover:text-[#c9f31d] transition-all shrink-0">
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform" />
                </span>
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* ── STAT STRIP ── */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-8 sm:mt-10 lg:mt-0 grid grid-cols-4 gap-px border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shrink-0"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.04] hover:bg-[#c9f31d]/10 transition-colors px-2 sm:px-3 py-3 sm:py-4 text-center border-r border-white/10 last:border-r-0"
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-black text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-white/35 uppercase tracking-wider mt-0.5 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* ── DIAGONAL SLASH (desktop only) ── */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: "calc(55% - 40px)", width: "80px" }}
        >
          <svg className="w-full h-full" viewBox="0 0 80 800" preserveAspectRatio="none">
            <polygon points="80,0 80,800 0,800" fill="#F2F2F2" />
          </svg>
        </div>

        {/* ╔══════════════════════════════════════════╗
            ║      RIGHT / BOTTOM — LIGHT COLUMN       ║
            ╚══════════════════════════════════════════╝ */}
        <div className="relative lg:flex-1 bg-[#F2F2F2] flex flex-col items-center lg:items-start justify-center px-5 sm:px-8 lg:pl-20 lg:pr-10 py-10 sm:py-12 overflow-hidden">

          {/* Faint dot grid */}
          <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Decorative tape strips — desktop only */}
          <div className="tape-strip top-8 right-12 rotate-12 opacity-60 !w-20 !h-5 hidden lg:block" />
          <div className="tape-strip top-40 right-6 -rotate-6 opacity-40 !w-14 !h-4 hidden lg:block" />

          {/* ── 3D TILT IMAGE CARD ── */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-sm xl:max-w-md mx-auto lg:mx-0 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border-2 border-black/10"
            >
              {/* Tape corners */}
              <div className="tape-strip -top-3 left-5 sm:left-6 -rotate-12 opacity-90 z-20 !w-16 sm:!w-20 !h-4 sm:!h-5" />
              <div className="tape-strip -top-3 right-5 sm:right-6 rotate-8 opacity-90 z-20 !w-16 sm:!w-20 !h-4 sm:!h-5" />

              {/* Red pushpin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-5 h-5 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              </div>

              {/* Image viewport */}
              <div className="relative h-52 xs:h-60 sm:h-72 lg:h-64 xl:h-80 w-full overflow-hidden group">
                <Image
                  src="/media/1.147b1ea1.jpg"
                  alt="Bright Media Studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating image badges */}
                <div className="absolute top-3 left-3 rounded-full bg-black/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-black text-[#c9f31d] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-[#ec4899]">📌</span> BRIGHT MEDIA
                </div>
                <div className="absolute bottom-3 right-3 rounded-full bg-[#c9f31d] px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-black text-black uppercase flex items-center gap-1">
                  ⚡ LIVE STUDIO
                </div>
              </div>

              {/* Card caption */}
              <div className="p-3.5 sm:p-4 text-[#0e0f11]">
                <p className="font-handwriting text-lg sm:text-xl font-bold text-slate-900">
                  A little look behind the work ✨
                </p>
                <p className="text-[9.5px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  Creative Minds · Big Ideas · Everywhere
                </p>
              </div>
            </motion.div>

            {/* Floating shadow for 3D depth */}
            <div className="absolute -bottom-5 left-6 right-6 h-10 bg-black/15 blur-xl rounded-full -z-10" />
          </motion.div>

          {/* ── VERIFIED ROI MINI CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative mt-6 sm:mt-8 w-full max-w-[360px] sm:max-w-[420px] lg:max-w-sm xl:max-w-md mx-auto lg:mx-0 rounded-2xl bg-[#c9f31d] p-4 sm:p-5 border-2 border-black/20 shadow-lg z-10"
          >
            {/* Red pin */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-[#dc2626] border-2 border-white shadow-md flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white/80" />
            </div>

            {/* Subtle watermark grid */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex items-center justify-between gap-3">
              <div>
                <span className="rounded-full bg-black px-2.5 py-0.5 text-[9px] font-black uppercase text-[#c9f31d] tracking-wider">
                  ⚡ ONE FOR THE WIN
                </span>
                <p className="mt-2 font-black text-base sm:text-lg text-black leading-tight">
                  BIG REACH. REAL ATTENTION.
                </p>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold text-black/80">
                  A campaign that got people talking, watching &amp; remembering.
                </p>
              </div>
              <div className="shrink-0 rounded-2xl bg-black/10 border border-black/15 px-3 sm:px-4 py-3 text-center">
                <span className="block text-[9px] font-mono font-bold uppercase text-black/50">RECALL</span>
                <span className="block text-2xl sm:text-3xl font-black text-black">📈</span>
                <span className="block text-xs sm:text-sm font-black text-black">+340%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM TICKER BAND ── */}
      <div className="border-t border-white/10 py-2 sm:py-2.5 bg-[#0d0e10] shrink-0">
        <Marquee reverse />
      </div>

      {/* ── TORN PAPER TRANSITION ── */}
      <TornEdgeDivider fillColor="#F2F2F2" />
    </section>
  );
}
