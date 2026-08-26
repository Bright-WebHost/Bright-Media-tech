"use client";

import Image from "next/image";
import Link from "next/link";
import { ABOUT, ARROW } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import ScrollFillText from "@/components/motion/ScrollFillText";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#F2F2F2] py-16 sm:py-14 text-[#0e0f11]">
      {/* Architectural Fine Graph Paper Grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Decorative Backdrop Tape Accents */}
      <div className="tape-strip top-12 right-12 rotate-12 hidden lg:block opacity-40" />
      <div className="tape-strip bottom-16 left-8 -rotate-6 hidden lg:block opacity-40" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. TOP HEADER: DOSSIER LABEL + DISPLAY HEADLINE */}
        {/* ============================================================ */}
        <div className="mb-10 sm:mb-14">
          {/* Top Stamp & Tag Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[#c9f31d]/35 px-4 py-1.5 text-[11px] font-black text-black uppercase tracking-wider shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
              </span>
              <span>⚡ BRIGHT MEDIA</span>
            </div>

            <div className="hidden sm:inline-flex postmark-stamp text-black border-black/25 bg-white/70 shadow-xs">
              <span className="text-[8px] font-bold uppercase tracking-widest text-black/60">
                DISCIPLINE &amp; IDENTITY
              </span>
              <span className="font-handwriting text-base font-bold text-black">
                ✦ 100% In-House Craft
              </span>
            </div>
          </div>

          {/* Headline with Interactive Arrow Button */}
          <div className="flex items-start gap-5 sm:gap-8">
            <Link
              href="/services"
              className="group/arrow mt-2 hidden flex-none sm:block transition-transform duration-300 hover:scale-110 hover:-rotate-6"
            >
              <div className="relative rounded-full bg-[#c9f31d] p-3.5 shadow-md border-2 border-black/15 transition-all group-hover/arrow:bg-black group-hover/arrow:border-black">
                <Image
                  src={ARROW}
                  alt=""
                  width={64}
                  height={64}
                  className="h-11 w-11 object-contain brightness-0 group-hover/arrow:invert transition-all"
                />
              </div>
            </Link>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold uppercase text-black leading-[1.02] tracking-tight">
              <ScrollFillText text={ABOUT.heading} />
            </h2>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. TWO-COLUMN SPREAD: TACTILE STICKY NOTE (LEFT) + PHOTO (RIGHT) */}
        {/* ============================================================ */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT 7 COLS: VIBRANT TACTILE STICKY NOTE CARD */}
          <Reveal direction="right" className="lg:col-span-7 relative flex">
            <div className="group/sticky relative w-full rounded-2xl bg-[#c9f31d] border-2 border-black/20 p-6 sm:p-10 shadow-2xl flex flex-col justify-between rotate-[-2deg] hover:rotate-0 transition-transform duration-500 text-[#0e0f11] overflow-hidden">
              {/* 3D Push Pin at Top Center */}
              <div className="pointer-events-none absolute -top-2.5 left-10 z-20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                  <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  </div>
                </div>
              </div>

              {/* Translucent Scotch Tape on Top Right */}
              <div className="tape-strip -top-3 right-10 rotate-3 z-20 opacity-80" />

              {/* Subtle Sticky Note Grid Watermark */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

              <div className="relative z-10 space-y-6">
                {/* Top Memo Badge Row */}
                <div className="flex items-center justify-between border-b border-black/15 pb-3">
                  <span className="rounded-full bg-black px-3 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-[#c9f31d]">
                    📌 BM-2026
                  </span>
                  <span className="font-handwriting text-sm font-bold text-black/80">
                    ★ Verified Agency Strategy
                  </span>
                </div>

                {/* Main ScrollFill Description Text */}
                <div className="max-w-2xl pt-1">
                  <ScrollFillText
                    text={ABOUT.text}
                    className="text-xl sm:text-2xl md:text-[1.65rem] leading-snug font-semibold text-black tracking-tight"
                  />
                </div>

                {/* 3 Sticky Sticker Tags */}
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 pt-2 ">
                  <div className="rounded-xl border border-black/20 bg-black/5 p-3 text-[10.5px] lg:text-[13px] font-bold text-black flex items-center gap-2 backdrop-blur-xs shadow-2xs">
                    <span className="text-black text-sm">✦</span> Made To Be Yours 
                  </div>
                  <div className="rounded-xl border border-black/20 bg-black/5 p-3 text-[10.5px] lg:text-[13px] font-bold text-black flex items-center gap-2 backdrop-blur-xs shadow-2xs">
                    <span className="text-black text-sm">✦</span> One Story, Everywhere
                  </div>
                  <div className="rounded-xl border border-black/20 bg-black/5 p-3 text-[10.5px] lg:text-[13px] font-bold text-black flex items-center gap-2 backdrop-blur-xs shadow-2xs">
                    <span className="text-black text-sm">✦</span> Room To Grow
                  </div>
                </div>
              </div>

              {/* Sticky Footnote & Hand-drawn Note */}
              <div className="relative z-10 mt-8 pt-4 border-t border-black/15 flex flex-wrap items-center justify-between gap-2">
                <span className="font-handwriting text-xl sm:text-2xl font-bold text-black">
                  ~ thought through, made well &amp; built to last ✨
                </span>
                <span className="font-mono text-[10px] font-black text-black/60 uppercase tracking-widest">
                  BRIGHT MEDIA STUDIO
                </span>
              </div>

              {/* Bottom Right Curled Corner Effect */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 w-10 h-10 opacity-25 group-hover/sticky:opacity-40 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.5) 50%)",
                  borderBottomRightRadius: "14px",
                }}
              />
            </div>
          </Reveal>

          {/* RIGHT 5 COLS: STUDIO PHOTO PRINT WITH PHOTO-CORNERS */}
          <Reveal direction="left" className="lg:col-span-5 relative flex">
            <div className="relative w-full rounded-2xl bg-white border-2 border-black/10 p-4 shadow-2xl flex flex-col justify-between rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
              {/* Tape Strips on Photo Frame */}
              <div className="tape-strip -top-3 right-8 rotate-6" />
              <div className="tape-strip -bottom-3 left-8 rotate-3" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-[280px] sm:h-[360px] lg:h-full min-h-[260px] overflow-hidden rounded-xl bg-gray-900 border border-black/10">
                <Image
                  src={ABOUT.image}
                  alt="Bright Media Creative Studio"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Studio Badges */}
                <div className="absolute top-3.5 left-3.5 rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-[10px] font-black text-[#c9f31d] uppercase tracking-wider shadow">
                  📌 Bright Media Studio
                </div>

                {/* <div className="absolute bottom-3.5 right-3.5 rounded-full bg-[#c9f31d] px-3.5 py-1 text-[10px] font-black text-black uppercase shadow">
                  Creative Direction
                </div> */}
              </div>

              {/* Frame Footer Caption */}
              <div className="mt-3 px-1 flex items-center justify-between">
                <span className="font-handwriting text-xl font-bold text-gray-900">
                 A Brand Coming Together  ✨
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                  BUILT FOR EVERYWHERE
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
