"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Reveal from "@/components/motion/Reveal";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  image: string;
  quote: string;
  handwrittenNote: string;
  colorTheme: "yellow" | "lime" | "teal" | "pink" | "orange" | "blue" | "purple";
  pinType: "pin-red" | "pin-blue" | "pin-yellow" | "tape-single" | "tape-double";
  rotation: number;
  date: string;
}

const TESTIMONIAL_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Michel Dark",
    role: "Marketing Director",
    company: "Apex Global Group",
    project: "Brand Strategy & Campaign",
    rating: 5.0,
    image: "/assets/img/team/11.jpg",
    quote:
      "Working with Bright Media was seamless from start to finish. They delivered a thoughtful strategy, razor-sharp visual design, and launched 5 days ahead of schedule. The ROI was instant.",
    handwrittenNote: "★ Delivered 5 days early! 🚀",
    colorTheme: "yellow",
    pinType: "pin-red",
    rotation: -1.8,
    date: "May 2026",
  },
  {
    id: "test-2",
    name: "Alex Hales",
    role: "Founder & CEO",
    company: "VentureCraft Labs",
    project: "Full Rebrand & Web Platform",
    rating: 4.9,
    image: "/assets/img/team/12.jpg",
    quote:
      "They took our raw, messy concept and engineered a world-class digital identity. Communication was crystal clear at every stage, and the end product blew our board away.",
    handwrittenNote: "✨ Truly world-class craft!",
    colorTheme: "lime",
    pinType: "tape-double",
    rotation: 2.1,
    date: "April 2026",
  },
  {
    id: "test-3",
    name: "Micky James",
    role: "Head of Growth",
    company: "Lumina Fintech",
    project: "Social Media & Performance",
    rating: 5.0,
    image: "/assets/img/team/13.jpg",
    quote:
      "A rare collective of genuine creativity and deep technical precision. Our inbound leads and organic conversions spiked by +240% within the first 60 days of launch.",
    handwrittenNote: "📈 +240% Inbound Growth!",
    colorTheme: "teal",
    pinType: "pin-blue",
    rotation: -2.2,
    date: "June 2026",
  },
  {
    id: "test-4",
    name: "Sarah Jenkins",
    role: "Product VP",
    company: "NovaScale Studio",
    project: "UI/UX & Design System",
    rating: 4.8,
    image: "/assets/img/team/9.jpg",
    quote:
      "The design system Bright Media created for us cut our development cycles in half. Every interaction feels intentional, fluid, and delightful to our end users.",
    handwrittenNote: "🎨 Unbelievable UI precision",
    colorTheme: "pink",
    pinType: "tape-single",
    rotation: 1.6,
    date: "March 2026",
  },
  {
    id: "test-5",
    name: "David Chen",
    role: "Creative Producer",
    company: "Pulse Media",
    project: "Video & Content Direction",
    rating: 5.0,
    image: "/assets/img/team/10.jpg",
    quote:
      "Their storytelling and visual direction gave our brand the edge it needed in a saturated market. We finally stand out with authority and confidence.",
    handwrittenNote: "✦ 100% In-house mastery",
    colorTheme: "orange",
    pinType: "pin-yellow",
    rotation: -1.5,
    date: "February 2026",
  },
  {
    id: "test-6",
    name: "Elena Rostova",
    role: "Chief Strategy Officer",
    company: "Kinetix Digital",
    project: "Digital Transformation",
    rating: 4.9,
    image: "/assets/img/team/8.jpg",
    quote:
      "Bright Media didn't just deliver a service — they became an indispensable strategic partner. Highly responsive, fiercely creative, and meticulously detailed.",
    handwrittenNote: "💡 Indispensable partner!",
    colorTheme: "purple",
    pinType: "tape-single",
    rotation: 2.3,
    date: "January 2026",
  },
];

// Torn Paper Bottom Polygon Clip Path (Realistic jagged torn notepad page)
const TESTIMONIAL_TORN_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 18px), 98% calc(100% - 3px), 95% calc(100% - 15px), 92% calc(100% - 2px), 89% calc(100% - 18px), 85% calc(100% - 5px), 81% calc(100% - 15px), 77% calc(100% - 2px), 73% calc(100% - 17px), 69% calc(100% - 5px), 65% calc(100% - 15px), 61% calc(100% - 2px), 57% calc(100% - 19px), 53% calc(100% - 4px), 48% calc(100% - 17px), 44% calc(100% - 2px), 40% calc(100% - 16px), 36% calc(100% - 5px), 32% calc(100% - 19px), 27% calc(100% - 3px), 23% calc(100% - 15px), 19% calc(100% - 2px), 15% calc(100% - 17px), 11% calc(100% - 4px), 7% calc(100% - 15px), 3% calc(100% - 2px), 0% calc(100% - 13px))";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = !full && i < rating;
        return (
          <i
            key={i}
            className={`fas ${
              full ? "fa-star" : half ? "fa-star-half-alt" : "fa-star opacity-25"
            } text-[12px] sm:text-[12px]`}
          />
        );
      })}
    </div>
  );
}

export default function AboutTestimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredNote, setHoveredNote] = useState<string | null>(null);

  const total = TESTIMONIAL_DATA.length;

  const getThemeStyles = (color: TestimonialItem["colorTheme"]) => {
    switch (color) {
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-900",
          border: "border-yellow-600/20",
          badgeBg: "bg-stone-900 text-yellow-300",
          stampBorder: "border-amber-700/40 text-amber-900",
        };
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          border: "border-black/20",
          badgeBg: "bg-black text-[#c9f31d]",
          stampBorder: "border-emerald-800/40 text-emerald-950",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-900",
          border: "border-teal-700/20",
          badgeBg: "bg-stone-900 text-teal-300",
          stampBorder: "border-teal-800/40 text-teal-950",
        };
      case "pink":
        return {
          bg: "bg-[#fecdd3] text-stone-900",
          border: "border-pink-700/20",
          badgeBg: "bg-stone-900 text-pink-300",
          stampBorder: "border-rose-800/40 text-rose-950",
        };
      case "orange":
        return {
          bg: "bg-[#fed7aa] text-stone-900",
          border: "border-orange-700/20",
          badgeBg: "bg-stone-900 text-orange-300",
          stampBorder: "border-orange-800/40 text-orange-950",
        };
      case "purple":
        return {
          bg: "bg-[#e9d5ff] text-stone-900",
          border: "border-purple-700/20",
          badgeBg: "bg-stone-900 text-purple-300",
          stampBorder: "border-purple-800/40 text-purple-950",
        };
      case "blue":
        return {
          bg: "bg-[#bae6fd] text-stone-900",
          border: "border-sky-700/20",
          badgeBg: "bg-stone-900 text-sky-300",
          stampBorder: "border-sky-800/40 text-sky-950",
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f2eb] py-16 text-[#0e0f11] dark:bg-[#0e0f11]  sm:py-18 border-t border-black/10 ">
      {/* Tactile Craft Paper / Desk Canvas Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10 [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Wall Tape & Pin Accents */}
      <div className="tape-strip -top-3 left-20 rotate-[-12deg] opacity-50 hidden sm:block" />
      <div className="tape-strip top-16 right-16 rotate-[14deg] opacity-50 hidden lg:block" />
      <div className="tape-strip bottom-12 left-12 rotate-[6deg] opacity-40 hidden md:block" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* TOP HEADER: DOSSIER LABEL, HEADLINE & RATING STAMP */}
        {/* ============================================================ */}
        <div className="mb-14 sm:mb-18">
          {/* <Reveal className="flex flex-wrap items-center justify-between gap-4 mb-4"> */}
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#c9f31d] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-xs dark:border-white/20">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <span>💬 CLIENT DOSSIER // REPUTATION & PROOF</span>
            </div> */}

            {/* Postmark Stamp Rating Badge */}
            {/* <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-dashed border-black/25 bg-white/80 dark:bg-black/60 px-4 py-2 shadow-xs backdrop-blur-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-[#c9f31d] font-black text-base shadow">
                4.9
              </div>
              <div className="text-left">
                <Stars rating={5} />
                <span className="font-mono text-[10px] font-bold text-black/60 dark:text-white/60 block mt-0.5">
                  150+ VERIFIED PARTNER REVIEWS
                </span>
              </div>
            </div> */}
          {/* </Reveal> */}

          <Reveal delay={0.1} className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-heading dark:text-white leading-[1.04]">
                What Our Partners Say About{" "}
                <span className="font-handwriting text-4xl sm:text-6xl lg:text-7xl text-emerald-700 dark:text-[#c9f31d] underline decoration-wavy decoration-[#c9f31d] dark:decoration-emerald-500 normal-case inline-block mt-1">
                  Our Craft.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-1">
              <p className="text-sm sm:text-base text-black/70 dark:text-white/70 font-medium">
                Unfiltered feedback from founders, marketing leaders, and enterprise directors who trusted us to transform their digital presence.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* TORN STICKY NOTES SWIPER SLIDER */}
        {/* ============================================================ */}
        <Reveal delay={0.2} className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 36 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="!pb-1 !pt-6 overflow-visible"
          >
            {TESTIMONIAL_DATA.concat(TESTIMONIAL_DATA).map((item, index) => {
              const theme = getThemeStyles(item.colorTheme);
              const isHovered = hoveredNote === `${item.id}-${index}`;

              return (
                <SwiperSlide key={`${item.id}-${index}`} className="h-auto">
                  <div
                    onMouseEnter={() => setHoveredNote(`${item.id}-${index}`)}
                    onMouseLeave={() => setHoveredNote(null)}
                    style={{
                      transform: isHovered
                        ? "translateY(-12px) scale(1.02) rotate(0deg)"
                        : `rotate(${item.rotation}deg)`,
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      filter: isHovered
                        ? "drop-shadow(0 26px 32px rgba(0,0,0,0.25)) drop-shadow(0 12px 14px rgba(0,0,0,0.12)) drop-shadow(0 0 18px rgba(201,243,29,0.3))"
                        : "drop-shadow(0 14px 18px rgba(0,0,0,0.14)) drop-shadow(0 4px 6px rgba(0,0,0,0.06))",
                    }}
                    className="group relative flex h-full flex-col cursor-grab active:cursor-grabbing"
                  >
                    {/* Torn Paper Sheet Container with Jagged Bottom Clip */}
                    <div
                      style={{
                        clipPath: TESTIMONIAL_TORN_CLIP,
                      }}
                      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-t-2xl p-6 sm:p-8 pb-16 sm:pb-20 ${theme.bg} ${theme.border} border-t-2 border-l-2 border-r-2`}
                    >
                      {/* Faint Ruled Lines & Graph Grid Background */}
                      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

                      {/* Top Tape or 3D Push Pin */}
                      {item.pinType === "tape-single" ? (
                        <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] z-20 !w-16 !h-4 sm:!w-20 sm:!h-5" />
                      ) : item.pinType === "tape-double" ? (
                        <>
                          <div className="tape-strip -top-2.5 left-6 rotate-[-10deg] z-20 !w-14 !h-4" />
                          <div className="tape-strip -top-2.5 right-6 rotate-[8deg] z-20 !w-14 !h-4" />
                        </>
                      ) : item.pinType === "pin-red" ? (
                        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>
                      ) : item.pinType === "pin-blue" ? (
                        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black/40 blur-[1px]" />
                            <div className="h-4 w-4 rounded-full bg-amber-400 border-2 border-white shadow-md flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Header Row: Project Service Tag, Rating & Date */}
                      {/* <div className="relative z-10 border-b border-black/15 pb-4 mb-5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${theme.badgeBg} shadow-xs`}
                          >
                            ✦ {item.project}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Stars rating={item.rating} />
                          <span className="font-mono text-[12px] font-black text-black">
                            {item.rating.toFixed(1)}
                          </span>
                        </div>
                      </div> */}

                      {/* Handwritten Sticky Pull-Note Accent */}
                      {/* <div className="relative z-10 mb-4 inline-flex items-center gap-2 self-start rounded-md bg-black/5 px-2.5 py-1 border-l-2 border-black/50">
                        <span className="font-handwriting text-base sm:text-lg font-bold text-stone-900">
                          {item.handwrittenNote}
                        </span>
                      </div> */}

                      {/* Client Quote Body */}
                      <blockquote className="relative z-10 flex-1 text-base sm:text-md font-semibold leading-relaxed text-stone-900 mb-6">
                        <span className="text-2xl font-black font-serif text-black/40 mr-1">“</span>
                        {item.quote}
                        <span className="text-2xl font-black font-serif text-black/40 ml-1">”</span>
                      </blockquote>

                      {/* Client Footer: Polaroid Photo Frame + Details */}
                      <div className="relative z-10 pt-4 border-t border-black/15 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          {/* Polaroid Mini Avatar */}
                          {/* <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-md border border-black/15 rotate-[-2deg]">
                            <div className="relative h-full w-full overflow-hidden rounded-lg bg-stone-200">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div> */}

                          <div>
                            <h4 className="font-bold text-base sm:text-lg text-black leading-tight">
                              {item.name}
                            </h4>
                            <p className="font-handwriting text-sm sm:text-base font-bold text-stone-800 leading-tight">
                              {item.role} • <span className="font-sans text-xs font-bold text-black/70">{item.company}</span>
                            </p>
                          </div>
                        </div>

                        {/* Stamp Verification Seal */}
                        {/* <div className="hidden sm:inline-flex flex-col items-center justify-center rounded-lg border border-dashed border-black/30 bg-black/5 px-2.5 py-1 text-center">
                          <span className="font-mono text-[9px] font-black uppercase tracking-widest text-black/60">
                            VERIFIED
                          </span>
                          <span className="font-handwriting text-xs font-bold text-emerald-950">
                            ✓ {item.date}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* ============================================================ */}
          {/* SLIDER NAVIGATION CONTROLS & PROGRESS SEGMENTS */}
          {/* ============================================================ */}
          {/* <div className="mt-4 flex items-center justify-between gap-4"> */}
            {/* Previous Button */}
            {/* <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-black/20 bg-white text-black transition-all duration-300 hover:bg-[#c9f31d] hover:border-black hover:scale-105 shadow-sm dark:bg-dark-secondary dark:border-white/20 dark:text-white dark:hover:bg-[#c9f31d] dark:hover:text-black active:scale-95"
              aria-label="Previous Testimonial"
            >
              <i className="fas fa-arrow-left text-sm" />
            </button> */}

            {/* Segmented Progress Indicators */}
            {/* <div className="flex flex-1 max-w-md gap-2 items-center">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    i === activeIndex % total
                      ? "bg-[#c9f31d] shadow-xs"
                      : "bg-black/15 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div> */}

            {/* Next Button */}
            {/* <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-black/20 bg-white text-black transition-all duration-300 hover:bg-[#c9f31d] hover:border-black hover:scale-105 shadow-sm dark:bg-dark-secondary dark:border-white/20 dark:text-white dark:hover:bg-[#c9f31d] dark:hover:text-black active:scale-95"
              aria-label="Next Testimonial"
            >
              <i className="fas fa-arrow-right text-sm" />
            </button> */}
          {/* </div> */}
        </Reveal>
      </div>
    </section>
  );
}
