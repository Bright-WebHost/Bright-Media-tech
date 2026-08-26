"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import TornEdgeDivider from "@/components/contact/TornEdgeDivider";

const TICKER_ITEMS = [
  "BRIGHT MEDIA",
  "BRAND ARCHITECTURE",
  "IMMERSIVE WEB",
  "SPATIAL CGI",
  "KINETIC MOTION",
  "GROWTH SYSTEMS",
  "DIGITAL POWERHOUSE",
  "HIGH-VELOCITY CREATIVE",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // ── Scroll-Linked Kinetic Typography ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const textXLeft = useTransform(smoothProgress, [0, 1], ["0%", "-16%"]);
  const textXRight = useTransform(smoothProgress, [0, 1], ["0%", "16%"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0.3]);
  const heroScale = useTransform(smoothProgress, [0, 0.85], [1, 0.97]);

  // ── Mouse 3D Tilt for Right Pinned Note ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-200, 200], [8, -8]);
  const rotateY = useTransform(mouseX, [-200, 200], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#08090b] text-[#f2f2ef] pt-24 sm:pt-28 lg:pt-32 select-none min-h-[920px] lg:min-h-[960px] flex flex-col justify-between"
    >
      {/* ========================================================================= */}
      {/* 1. ATMOSPHERIC BACKGROUND GRID                                            */}
      {/* ========================================================================= */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Ambient Spotlight */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-radial-gradient from-white/[0.03] to-transparent blur-3xl z-0" />

      {/* ========================================================================= */}
      {/* 2. MAIN HERO STAGE                                                        */}
      {/* ========================================================================= */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20 my-auto flex-1 flex flex-col justify-center py-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* LEFT: SCROLL-REACTIVE MEGA TYPOGRAPHY & MANIFESTO                 */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="h-px w-8 bg-[#c9f31d]/60" />
              <span className="font-mono text-[8px] sm:text-xs uppercase tracking-[0.3em] text-[#c9f31d] font-bold">
                BRIGHT MEDIA // DIGITAL POWERHOUSE
              </span>
            </motion.div>

            {/* ── KINETIC HEADLINE WITH SCROLL SHIFT ── */}
            <div className="overflow-hidden w-full relative">
              
              {/* Row 1: MAKING (Scrolls Left on Scroll) */}
              <motion.div style={{ x: textXLeft }} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[3.8rem] xs:text-[4.8rem] sm:text-[6.5rem] md:text-[7rem] lg:text-[6rem] xl:text-[7.2rem] font-bold uppercase tracking-tighter leading-[0.85] font-barlow text-white"
                >
                  MAKING
                </motion.h1>
              </motion.div>

              {/* Row 2: BRANDS (Highlighted Accent with Kinetic Shift) */}
              <motion.div style={{ x: textXRight }} className="overflow-hidden flex items-center gap-4 sm:gap-6 flex-wrap">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[3.8rem] xs:text-[4.8rem] sm:text-[6.5rem] md:text-[7rem] lg:text-[6rem] xl:text-[7.2rem] font-bold uppercase tracking-tighter leading-[0.85] font-barlow text-[#c9f31d]"
                >
                  BRANDS
                </motion.h1>

                {/* Minimalist Pill Sticker */}
                <motion.span
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: -4 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 font-mono text-[11px] font-bold uppercase tracking-wider text-[#c9f31d] shadow-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9f31d]" />
                  EST. 2018
                </motion.span>
              </motion.div>

              {/* Row 3: LOOK BRIGHT (Ghost Outline) */}
              <motion.div style={{ x: textXLeft }} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[3.8rem] xs:text-[4.8rem] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[6rem] xl:text-[7.2rem] font-bold uppercase tracking-tighter leading-[0.85] font-barlow"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.4)",
                    color: "transparent",
                  }}
                >
                  LOOK BRIGHT
                </motion.h1>
              </motion.div>
            </div>

            {/* ── MANIFESTO & ACTIONS ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 sm:mt-8 max-w-xl"
            >
              {/* <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Full-service creative studio crafting iconic brand identities, high-velocity websites, and scroll-stopping campaigns for industry leaders across 12 countries.
              </p> */}

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-[#c9f31d] text-[#08090b] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider font-mono shadow-2xl transition-all duration-300 hover:bg-[#ffffff] hover:scale-105 active:scale-95"
                >
                  <span>START A PROJECT</span>
                  <span className="w-6 h-6 rounded-full bg-[#08090b] text-white flex items-center justify-center group-hover:bg-[#08090b] group-hover:text-[#c9f31d] transition-colors">
                    <i className="fas fa-arrow-up-right text-[10px] transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-white/[0.04] border border-white/15 px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white font-mono hover:bg-white/[0.08] hover:border-white/30 transition-all"
                >
                  <span>VIEW OUR WORK</span>
                  <i className="fas fa-arrow-right text-xs text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* RIGHT: PINNED REALISTIC STICKY NOTE POSTER (EXACT REFERENCE STYLE) */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-5 relative w-full flex flex-col items-center justify-center py-4">

            {/* Depth-of-Field Blurred Paper Floaters (Left and Right edges) */}
            <div 
              aria-hidden="true" 
              className="absolute -left-6 top-1/3 w-16 h-36 bg-white/70 blur-[5px] rounded-xs shadow-2xl transform -rotate-12 pointer-events-none hidden sm:block opacity-60"
            />
            <div 
              aria-hidden="true" 
              className="absolute -right-6 top-1/4 w-16 h-40 bg-white/70 blur-[5px] rounded-xs shadow-2xl transform rotate-12 pointer-events-none hidden sm:block opacity-60"
            />

            {/* MAIN POSTER CONTAINER WITH 3D TILT */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] sm:max-w-[460px] flex flex-col items-center text-center z-10"
            >
              
              {/* ── 1. TOP BRANDING TITLE ── */}
              <div className="mb-6 text-center">
                <span className="font-mono text-xs sm:text-sm font-black tracking-[0.3em] uppercase text-white/70 block">
                   ONE FOR THE WIN
                </span>
                
                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase tracking-tight leading-[0.95] font-barlow mt-2">
                  <span className="text-white">BIG REACH.</span>{" "}
                  <span className="bg-gradient-to-r from-[#c9f31d] via-[#d1ed17] to-[#ecf327] bg-clip-text text-transparent drop-shadow-md">
                    REAL ATTENTION.
                  </span>
                </h3>
              </div>

              {/* ── 2. REALISTIC PINNED WHITE STICKY NOTE ── */}
              <div className="relative w-full max-w-[340px] sm:max-w-[370px] my-2">
                
                {/* 3D Realistic Pushpin (Center Top) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                  {/* Pushpin Head with Plastic Highlights */}
                  <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-[#ea580c] via-[#fb923c] to-[#fed7aa] shadow-xl border border-white/40 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/80 shadow-inner" />
                    {/* Pin Tip Stem */}
                    <div className="absolute top-full w-2 h-3 bg-gradient-to-b from-[#9a3412] to-[#431407] rounded-b-xs" />
                  </div>
                  {/* Cast Shadow Under Pin on the Paper */}
                  <div className="w-6 h-2 bg-black/60 blur-[2px] rounded-full mt-0.5" />
                </div>

                {/* The Paper Note Body */}
                <div 
                  className="relative bg-[#f6f5f0] text-[#0e0f11] px-8 sm:px-10 py-12 sm:py-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)] transform rotate-[0.5deg]"
                  style={{
                    clipPath: "polygon(0% 0.5%, 99.5% 0%, 100% 98.5%, 98% 100%, 1% 99.5%)",
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, rgba(0,0,0,0.015) 0%, transparent 80%),
                      linear-gradient(to right, rgba(0,0,0,0.01) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0,0,0,0.01) 1px, transparent 1px)
                    `,
                    backgroundSize: "100% 100%, 20px 20px, 20px 20px"
                  }}
                >
                  {/* Paper Curled Corner Shadows */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />

                  {/* Handwritten Script Content */}
                  <div className="flex flex-col items-center justify-center gap-4 text-center my-auto">
                    <p className="font-handwriting text-4xl sm:text-5xl md:text-[3.4rem] font-bold text-[#141518] tracking-wide leading-tight drop-shadow-xs">
                      Ideas.
                    </p>
                    <p className="font-handwriting text-4xl sm:text-5xl md:text-[3.4rem] font-bold text-[#141518] tracking-wide leading-tight drop-shadow-xs">
                      Made Visible.
                    </p>
                  </div>
                </div>

                {/* Soft Cast Shadow of the Paper on the Dark Background */}
                <div className="absolute -bottom-4 inset-x-6 h-8 bg-black/80 blur-xl rounded-full -z-10" />
              </div>

              {/* ── 3. BOTTOM MINIMAL METADATA ROW ── */}
              <div className="mt-8 flex items-center justify-center gap-6 sm:gap-8 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300">
                <div className="flex items-center gap-2">
                  {/* <span className="text-[#f97316]">📅</span> */}
                  <span>A campaign that got people talking, watching & remembering.</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <span className="text-[#f97316]">📍</span>
                  <span>GLOBAL CREATIVE</span>
                </div> */}
              </div>

            </motion.div>

          </div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM KINETIC MARQUEE TICKER & TORN PAPER DIVIDER                     */}
      {/* ========================================================================= */}
      <div className="relative z-30 mt-8 sm:mt-12">
        <div className="border-y border-white/[0.08] py-2.5 sm:py-3 bg-[#0a0b0e] overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="flex items-center whitespace-nowrap gap-8"
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-neutral-400">
                  {item}
                </span>
                <span className="text-[#c9f31d] text-[10px]">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
        
        {/* Crisp transition to the next section */}
        <TornEdgeDivider fillColor="#F2F2F2" />
      </div>
    </section>
  );
}