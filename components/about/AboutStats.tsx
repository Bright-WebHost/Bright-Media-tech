"use client";

import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { motion } from "framer-motion";

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-24 text-[#0e0f11] border-b border-black/10">
      {/* Architectural Fine Graph Paper Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Decorative Backdrop Tape Accents */}
      <div className="tape-strip top-10 right-10 rotate-12 hidden lg:block opacity-40" />
      <div className="tape-strip bottom-12 left-10 -rotate-12 hidden lg:block opacity-40" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. TOP HEADER: DOSSIER LABEL & MANIFESTO HEADLINE */}
        {/* ============================================================ */}
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[#c9f31d]/35 px-4 py-1.5 text-[11px] font-black text-black uppercase tracking-wider shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
              </span>
              <span>📌 STUDIO MANIFESTO • PHILOSOPHY</span>
            </div>

            <div className="hidden sm:inline-flex postmark-stamp text-black border-black/25 bg-white/80 shadow-xs">
              <span className="text-[8px] font-bold uppercase tracking-widest text-black/60">
                DISCIPLINE &amp; IDENTITY
              </span>
              <span className="font-handwriting text-base font-bold text-black">
                ✦ 100% In-House Craft
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/50 block">
                ABOUT BRIGHT MEDIA
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-black leading-[1.02] tracking-tight">
                We Engineer Distinct Brands &amp;{" "}
                <span className="font-handwriting text-4xl sm:text-5xl md:text-6xl text-emerald-950 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block">
                  Digital Solutions.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="text-sm sm:text-base md:text-lg text-black/75 leading-relaxed font-medium">
                We at Bright Media are a team of highly creative, skilled and dedicated individuals, focusing on adding value to our clients&apos; brands by optimizing, innovating, and leveraging cutting-edge creative craft.
              </p>
            </div>
          </div>
        </div>

     

        {/* ============================================================ */}
        {/* 3. DUAL BLUEPRINT MANIFESTO SPREAD (OUR VISION & OUR MISSION) */}
        {/* ============================================================ */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT: OUR VISION (Tactile Lime Dossier Card) */}
          <Reveal direction="right" className="relative flex">
            <div className="group/vision relative w-full rounded-3xl bg-[#c9f31d] border-2 border-black/20 p-6 sm:p-10 shadow-2xl flex flex-col justify-between rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500 text-[#0e0f11] overflow-hidden">
              {/* 3D Push Pin & Tape Accent */}
              <div className="pointer-events-none absolute -top-2.5 left-8 z-20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                  <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  </div>
                </div>
              </div>
              <div className="tape-strip -top-3 right-8 rotate-4 z-20 opacity-80" />

              {/* Blueprint Grid Watermark */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

              <div className="relative z-10 space-y-5">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-black/15 pb-3">
                  <span className="rounded-full bg-black px-3.5 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-[#c9f31d]">
                    🔭 STRATEGIC HORIZON // 2026+
                  </span>
                  <span className="font-handwriting text-sm font-bold text-black/80">
                    ★ Certified Vision
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#c9f31d] text-xl shadow mb-3">
                    <i className="fas fa-compass" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black tracking-tight leading-tight">
                    Our Vision
                  </h3>
                  <p className="font-handwriting text-lg sm:text-xl font-bold text-black/75 mt-0.5">
                    ~ transforming ambitious ideas into iconic global brands
                  </p>
                </div>

                {/* Narrative Body */}
                <p className="text-sm sm:text-base leading-relaxed font-medium text-black/90">
                  To become a globally trusted creative digital agency that transforms ambitious ideas into impactful brands through innovation, design excellence, and cutting-edge technology. We envision a future where every business, regardless of size, has access to world-class digital experiences that inspire, engage, and drive meaningful growth.
                </p>

                {/* 3 Strategic Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="rounded-xl border border-black/20 bg-black/5 p-2.5 text-xs font-black text-black flex items-center gap-1.5 backdrop-blur-xs">
                    <span>✦</span> Global Reach
                  </div>
                  <div className="rounded-xl border border-black/20 bg-black/5 p-2.5 text-xs font-black text-black flex items-center gap-1.5 backdrop-blur-xs">
                    <span>✦</span> Design Craft
                  </div>
                  <div className="rounded-xl border border-black/20 bg-black/5 p-2.5 text-xs font-black text-black flex items-center gap-1.5 backdrop-blur-xs">
                    <span>✦</span> Scaled Growth
                  </div>
                </div>
              </div>

              {/* Bottom Signature Footnote */}
              <div className="relative z-10 mt-8 pt-4 border-t border-black/15 flex items-center justify-between">
                <span className="font-handwriting text-lg sm:text-xl font-bold text-black">
                  ~ shaping the future of digital craft ✨
                </span>
                <span className="font-mono text-[10px] font-black text-black/60 uppercase">
                  BM-VISION-2026
                </span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: OUR MISSION (Studio Ruled Dossier Card) */}
          <Reveal direction="left" className="relative flex">
            <div className="group/mission relative w-full rounded-3xl bg-white border-2 border-black/15 p-6 sm:p-10 shadow-2xl flex flex-col justify-between rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 text-[#0e0f11] overflow-hidden">
              {/* 3D Push Pin & Tape Accent */}
              <div className="pointer-events-none absolute -top-2.5 right-8 z-20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                  <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  </div>
                </div>
              </div>
              <div className="tape-strip -top-3 left-8 -rotate-4 z-20 opacity-80" />

              {/* Ruled lines background watermark */}
              <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:100%_32px]" />

              <div className="relative z-10 space-y-5">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <span className="rounded-full bg-[#c9f31d] px-3.5 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-black border border-black/15 shadow-2xs">
                    ⚡ CORE OBJECTIVE // EVERY DAY
                  </span>
                  <span className="font-handwriting text-sm font-bold text-black/70">
                    ★ Purpose Driven
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9f31d] text-black text-xl shadow mb-3 border border-black/15">
                    <i className="fas fa-bullseye" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black tracking-tight leading-tight">
                    Our Mission
                  </h3>
                  <p className="font-handwriting text-lg sm:text-xl font-bold text-black/75 mt-0.5">
                    ~ empowering businesses with measurable digital impact
                  </p>
                </div>

                {/* Narrative Body */}
                <p className="text-sm sm:text-base leading-relaxed font-medium text-black/85">
                  Our mission is to empower businesses with strategic branding, exceptional web experiences, and data-driven digital marketing solutions. By combining creativity, technology, and measurable results, we help our clients build lasting relationships with their audiences, strengthen their online presence, and achieve sustainable success in an ever-evolving digital world.
                </p>

                {/* 3 Strategic Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="rounded-xl border border-black/10 bg-[#fafafa] p-2.5 text-xs font-black text-black flex items-center gap-1.5 shadow-2xs">
                    <span className="text-[#65a30d]">✦</span> Strategic Branding
                  </div>
                  <div className="rounded-xl border border-black/10 bg-[#fafafa] p-2.5 text-xs font-black text-black flex items-center gap-1.5 shadow-2xs">
                    <span className="text-[#65a30d]">✦</span> Modern Web UI
                  </div>
                  <div className="rounded-xl border border-black/10 bg-[#fafafa] p-2.5 text-xs font-black text-black flex items-center gap-1.5 shadow-2xs">
                    <span className="text-[#65a30d]">✦</span> Data-Driven ROI
                  </div>
                </div>
              </div>

              {/* Bottom Signature Footnote */}
              <div className="relative z-10 mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="font-handwriting text-lg sm:text-xl font-bold text-black">
                  ~ precision in every execution 📌
                </span>
                <span className="font-mono text-[10px] font-black text-black/50 uppercase">
                  BM-MISSION-2026
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
