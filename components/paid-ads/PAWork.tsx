"use client";

import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

interface WorkProject {
  id: string;
  name: string;
  industry: string;
  image: string;
  colorTheme: "lime" | "yellow" | "teal" | "pink" | "peach" | "blue" | "green";
  pinType: "pin-red" | "pin-blue" | "pin-yellow" | "tape-single" | "tape-double";
  rotation: number;
  link?: string;
}


const WORKS: WorkProject[] = [
  {
    id: "work-1",
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturer",
    image: "/assets/img/portfolio/kaiser.webp",
    colorTheme: "pink",
    pinType: "tape-double",
    rotation: 1.6,
  },
  {
    id: "work-2",
    name: "Bajaj",
    industry: "Bike Manufacturers",
    image: "/assets/img/portfolio/bajaj.webp",
    colorTheme: "blue",
    pinType: "tape-single",
    rotation: -1.8,
  },
  {
    id: "work-3",
    name: "Amore ",
    industry: "Cafe",
    image: "/assets/img/portfolio/amore.webp",
    colorTheme: "yellow",
    pinType: "tape-double",
    rotation: 1.6,
  },
  {
    id: "work-4",
    name: "Metroways",
    industry: "Travel Agency",
    image: "/assets/img/portfolio/mw.webp",
    colorTheme: "teal",
    pinType: "tape-single",
    rotation: -2.0,
  },
  {
    id: "work-1",
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturer",
    image: "/assets/img/portfolio/kaiser.webp",
    colorTheme: "pink",
    pinType: "tape-double",
    rotation: 1.6,
  },
  {
    id: "work-2",
    name: "Bajaj",
    industry: "Bike Manufacturers",
    image: "/assets/img/portfolio/bajaj.webp",
    colorTheme: "blue",
    pinType: "tape-single",
    rotation: -1.8,
  },
  {
    id: "work-3",
    name: "Amore ",
    industry: "Cafe",
    image: "/assets/img/portfolio/amore.webp",
    colorTheme: "yellow",
    pinType: "tape-double",
    rotation: 1.6,
  },
  {
    id: "work-4",
    name: "Metroways",
    industry: "Travel Agency",
    image: "/assets/img/portfolio/mw.webp",
    colorTheme: "teal",
    pinType: "tape-single",
    rotation: -2.0,
  },
];

// Torn Paper Bottom Jagged Clip Path
const TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), 98% calc(100% - 3px), 95% calc(100% - 13px), 92% calc(100% - 2px), 89% calc(100% - 16px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function PAWork() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const getThemeStyles = (theme: WorkProject["colorTheme"]) => {
    switch (theme) {
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          border: "border-black/25",
          tagBg: "bg-black text-[#c9f31d]",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-950",
          border: "border-yellow-700/25",
          tagBg: "bg-stone-950 text-yellow-300",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-950",
          border: "border-teal-700/25",
          tagBg: "bg-stone-950 text-teal-300",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
      case "pink":
        return {
          bg: "bg-[#fecdd3] text-stone-950",
          border: "border-pink-700/25",
          tagBg: "bg-stone-950 text-pink-300",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
      case "peach":
        return {
          bg: "bg-[#fed7aa] text-stone-950",
          border: "border-orange-700/25",
          tagBg: "bg-stone-950 text-orange-300",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
      case "blue":
        return {
          bg: "bg-[#bae6fd] text-stone-950",
          border: "border-sky-700/25",
          tagBg: "bg-stone-950 text-sky-300",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
      case "green":
        return {
          bg: "bg-[#bbf7d0] text-stone-950",
          border: "border-emerald-700/25",
          tagBg: "bg-stone-950 text-emerald-300",
          accentPill: "bg-black/10 border-black/20 text-black",
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F2F2F2] py-10 sm:py-14 text-white border-b border-white/10">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255, 255, 255, 1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255, 255, 255, 0.34)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255, 255, 255, 0.23)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Atmospheric Ambient Glows */}
      {/* <div className="pointer-events-none absolute -top-24 left-1/4 h-[400px] w-[500px] rounded-full bg-[#c9f31d]/10 blur-[140px]" /> */}
      {/* <div className="pointer-events-none absolute -bottom-24 right-1/4 h-[400px] w-[500px] rounded-full bg-[#38bdf8]/10 blur-[140px]" /> */}

      {/* Decorative Wall Tape Accents */}
      <div className="tape-strip top-8 left-10 rotate-[-12deg] opacity-60 hidden sm:block !w-20 !h-5" />
      <div className="tape-strip top-10 right-14 rotate-[14deg] opacity-60 hidden md:block !w-20 !h-5" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER: DOSSIER BADGE, TITLE & STATS */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl text-left">

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              {/* WEBSITES ENGINEERED <br /> */}
              <span className="inline-flex items-center gap-3 flex-wrap">
                <span className="text-[#c9f31d]">Our Works</span>
                <span className="font-handwriting text-2xl sm:text-4xl text-amber-300 normal-case font-bold">
                  ✦ Crafted for Clients
                </span>
              </span>
            </h2>
          </div>

          {/* Right Postmark Stamp & Quick Controls */}
          <div className="flex flex-wrap items-center gap-4 lg:self-end">
            <div className="postmark-stamp border-[#c9f31d]/60 bg-white/5 backdrop-blur-md px-5 py-2.5 shadow-sm text-left">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#c9f31d]">
                LIGHTHOUSE BENCHMARK
              </span>
              <span className="font-handwriting text-base sm:text-lg font-bold text-black flex items-center gap-1.5 mt-0.5">
                <span className="text-amber-400">⚡</span> 99+ Speed &amp; 60fps Motion
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. 3D COVERFLOW TACTILE CAROUSEL */}
        {/* ============================================================ */}
        <Reveal delay={0.1} className="relative">
                  <Swiper
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    coverflowEffect={{
                      rotate: 15,
                      stretch: 0,
                      depth: 100,
                      modifier: 1.1,
                      slideShadows: false,
                    }}
                    breakpoints={{
                      320: { slidesPerView: 2.5, spaceBetween: 16 },
                      480: { slidesPerView: 1.7, spaceBetween: 20 },
                      640: { slidesPerView: 2.2, spaceBetween: 24 },
                      768: { slidesPerView: 2.7, spaceBetween: 28 },
                      1024: { slidesPerView: 3.4, spaceBetween: 32 },
                      1280: { slidesPerView: 4.2, spaceBetween: 36 },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="!pt-6 !pb-10 overflow-visible"
                  >
                    {WORKS.map((work) => {
                      const styles = getThemeStyles(work.colorTheme);
        
                      return (
                        <SwiperSlide key={work.id} className="h-auto">
                          <div
                            style={{
                              transform: `rotate(${work.rotation}deg)`,
                              transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                              filter:
                                "drop-shadow(0 14px 18px rgba(0,0,0,0.12)) drop-shadow(0 4px 6px rgba(0,0,0,0.05))",
                            }}
                            className="group relative flex flex-col h-full select-none"
                          >
                            {/* Torn Paper Sheet Container */}
                            <div
                              style={{
                                clipPath: TORN_PAPER_BOTTOM_CLIP,
                              }}
                              className={`relative flex flex-col justify-between h-full overflow-hidden rounded-t-2xl p-3.5 sm:p-5 pb-10 sm:pb-12 ${styles.bg} ${styles.border} border-t-2 border-l-2 border-r-2`}
                            >
                              {/* Faint Graph/Ruled Lines on Note */}
                              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:22px_22px]" />
        
                              {/* Top Tape / Push Pin Accents */}
                              {work.pinType === "tape-single" ? (
                                <div className="tape-strip -top-2.5 left-1/2 -translate-x-1/2 rotate-[-2deg] z-20 !w-12 sm:!w-14 !h-3 sm:!h-3.5" />
                              ) : work.pinType === "tape-double" ? (
                                <>
                                  <div className="tape-strip -top-2 left-3 rotate-[-10deg] z-20 !w-10 !h-3" />
                                  <div className="tape-strip -top-2 right-3 rotate-[8deg] z-20 !w-10 !h-3" />
                                </>
                              ) : work.pinType === "pin-red" ? (
                                <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                                  <div className="relative">
                                    <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-black/40 blur-[1px]" />
                                    <div className="h-3.5 w-3.5 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                                      <div className="h-1 w-1 rounded-full bg-white/90" />
                                    </div>
                                  </div>
                                </div>
                              ) : work.pinType === "pin-blue" ? (
                                <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                                  <div className="relative">
                                    <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-black/40 blur-[1px]" />
                                    <div className="h-3.5 w-3.5 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                                      <div className="h-1 w-1 rounded-full bg-white/90" />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                                  <div className="relative">
                                    <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-black/40 blur-[1px]" />
                                    <div className="h-3.5 w-3.5 rounded-full bg-amber-400 border-2 border-white shadow-md flex items-center justify-center">
                                      <div className="h-1 w-1 rounded-full bg-white/90" />
                                    </div>
                                  </div>
                                </div>
                              )}
        
                              {/* Card Content */}
                              <div className="relative z-10 flex-1 flex flex-col justify-between pt-1">
                                {/* Polaroid Framed Logo with Responsive Aspect Ratio */}
                                <div className="relative w-full overflow-hidden rounded-xl bg-white p-1.5 shadow-sm border border-black/10 mb-3">
                                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-[#FAF8F5] p-2 flex items-center justify-center border border-black/5">
                                    <Image
                                      src={work.image}
                                      alt={work.name}
                                      fill
                                      sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 25vw"
                                      className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                                    />
                                  </div>
                                </div>
        
                                {/* Brand Name & Industry */}
                                <div className="text-center space-y-0.5 pb-1">
                                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-black leading-tight truncate">
                                    {work.name}
                                  </h3>
                                  <p className="font-handwriting text-sm sm:text-base font-bold text-stone-800 truncate">
                                    {work.industry}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Reveal>

        
      </div>

      
    </section>
  );
}
