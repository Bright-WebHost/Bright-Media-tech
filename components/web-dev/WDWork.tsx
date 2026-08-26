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
  category: "all" | "b2b" | "ecommerce" | "architecture" | "automotive";
  image: string;
  badge: string;
  handwrittenTag: string;
  colorTheme: "lime" | "yellow" | "teal" | "pink" | "peach" | "blue" | "green";
  pinType: "pin-red" | "pin-blue" | "pin-yellow" | "tape-single" | "tape-double";
  rotation: number;
  techStack: string[];
  deliverables: string[];
  result: string;
  clientStory: string;
  link?: string;
}

const CATEGORIES = [
  { id: "all", label: "All Web Platforms" },
  { id: "b2b", label: "B2B & Enterprise" },
  { id: "ecommerce", label: "E-Commerce & Retail" },
  { id: "architecture", label: "Architecture & Real Estate" },
  { id: "automotive", label: "Automotive & Mobility" },
];

const WORKS: WorkProject[] = [
  {
    id: "work-1",
    name: "MCM",
    industry: "Construction Materials & Industrial",
    category: "b2b",
    image: "/assets/img/portfolio/mcm.webp",
    badge: "⚡ 0.6s LCP Speed",
    handwrittenTag: "🏗️ Enterprise RFQ Portal",
    colorTheme: "green",
    pinType: "tape-single",
    rotation: -1.8,
    techStack: ["Next.js 14", "Tailwind CSS", "Headless CMS", "Algolia"],
    deliverables: ["Interactive Product Catalog", "Automated RFQ Inquiries", "Technical PDF Spec Sheets"],
    result: "+320% Enterprise RFQ Inquiries",
    clientStory: "Engineered a high-performance digital product library that reduced page load times by 72% and scaled high-value B2B contractor quote requests across West Africa.",
  },
  {
    id: "work-2",
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturer",
    category: "ecommerce",
    image: "/assets/img/portfolio/kaiser.webp",
    badge: "🍳 German Craft",
    handwrittenTag: "⚡ 4.2x ROAS Meta Ads",
    colorTheme: "peach",
    pinType: "tape-double",
    rotation: 1.6,
    techStack: ["Next.js", "Shopify Plus", "Framer Motion", "Stripe"],
    deliverables: ["Product Walkthroughs", "Interactive Configurator", "Multi-Currency Checkout"],
    result: "4.2x Return on Ad Spend & +85% Mobile Orders",
    clientStory: "Built a tactile luxury shopping experience combining fluid 60fps micro-animations with seamless checkout workflows tailored for premium kitchen buyers.",
  },
  {
    id: "work-3",
    name: "Farhat Frères",
    industry: "Luxury Automotive Dealership",
    category: "automotive",
    image: "/assets/img/portfolio/farhat.webp",
    badge: "🚙 60fps Experience",
    handwrittenTag: "✦ 50+ Car Deliveries",
    colorTheme: "lime",
    pinType: "tape-single",
    rotation: -2.0,
    techStack: ["Next.js", "WebGL 3D", "Tailwind", "WhatsApp API"],
    deliverables: ["VIP Car Walkarounds", "Financing Rate Calculator", "Instant VIP Test Drive Booking"],
    result: "50+ Verified Car Sales via Digital Inbound",
    clientStory: "Created a high-octane automotive showroom with 360-degree vehicle inspection modules and direct WhatsApp booking that converts casual browsers into qualified showroom visits.",
  },
  {
    id: "work-4",
    name: "The Architecture Corp",
    industry: "Spatial & Architectural Practice",
    category: "architecture",
    image: "/assets/img/portfolio/tac.webp",
    badge: "📐 Spatial UI Design",
    handwrittenTag: "✦ Awwwards Nominee",
    colorTheme: "blue",
    pinType: "tape-double",
    rotation: 1.4,
    techStack: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel Edge"],
    deliverables: ["Full-Screen Project Gallery", "Blueprint Blueprint Dark Mode", "Case Study Engine"],
    result: "+210% International Client Inquiries",
    clientStory: "A minimal, ultra-clean portfolio interface highlighting architectural blueprints, high-resolution renders, and spatial storytelling that positioned TAC as a premier global firm.",
  },
  {
    id: "work-5",
    name: "Azim Group",
    industry: "Conglomerate & Enterprise Holdings",
    category: "b2b",
    image: "/assets/img/portfolio/azim.webp",
    badge: "🏢 Corporate Ecosystem",
    handwrittenTag: "⚡ Unified Brand Hub",
    colorTheme: "yellow",
    pinType: "tape-single",
    rotation: -1.2,
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "i18n"],
    deliverables: ["Holding Group Architecture", "Investor Relations Portal", "Subsidiary Directory"],
    result: "100% Brand Alignment Across 6 Subsidiaries",
    clientStory: "Designed and deployed a unified holding company ecosystem providing investors and partners with seamless navigation across diverse multinational business verticals.",
  },
  {
    id: "work-6",
    name: "TaurusIvoire",
    industry: "Infrastructure & Heavy Engineering",
    category: "architecture",
    image: "/assets/img/portfolio/ti.webp",
    badge: "🏗️ Heavy Industry",
    handwrittenTag: "🔥 High-Ticket Inbound",
    colorTheme: "pink",
    pinType: "tape-double",
    rotation: 1.8,
    techStack: ["Next.js", "Tailwind", "Edge CDN", "SEO Engine"],
    deliverables: ["Mega-Project Case Studies", "Interactive Project Timeline", "Supplier Registration Hub"],
    result: "+190% Engagement on Mega-Project Tenders",
    clientStory: "Transformed a traditional infrastructure contractor's digital footprint into an authoritative, institutional powerhouse capable of winning multi-million dollar government tenders.",
  },
  {
    id: "work-7",
    name: "Hafil",
    industry: "Trading & Services",
    category: "b2b",
    image: "/assets/img/portfolio/hafil.webp",
    badge: "⚡ 1M+ Monthly Hits",
    handwrittenTag: "🚀 Ultra-Fast Mobile PWA",
    colorTheme: "blue",
    pinType: "tape-double",
    rotation: 1.3,
    techStack: ["Next.js", "PWA", "Geo-Locator API", "Cloudflare"],
    deliverables: ["Dealership Locator", "Commercial Fleet Calculator", "Multilingual Service Guides"],
    result: "Sub-second load times across 2G/3G mobile networks",
    clientStory: "Built a lightweight, ultra-optimized progressive web app ensuring instantaneous loading on mobile devices across emerging markets with high customer conversion.",
  },
  {
    id: "work-1",
    name: "MCM",
    industry: "Construction Materials & Industrial",
    category: "b2b",
    image: "/assets/img/portfolio/mcm.webp",
    badge: "⚡ 0.6s LCP Speed",
    handwrittenTag: "🏗️ Enterprise RFQ Portal",
    colorTheme: "green",
    pinType: "tape-single",
    rotation: -1.8,
    techStack: ["Next.js 14", "Tailwind CSS", "Headless CMS", "Algolia"],
    deliverables: ["Interactive Product Catalog", "Automated RFQ Inquiries", "Technical PDF Spec Sheets"],
    result: "+320% Enterprise RFQ Inquiries",
    clientStory: "Engineered a high-performance digital product library that reduced page load times by 72% and scaled high-value B2B contractor quote requests across West Africa.",
  },
  {
    id: "work-2",
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturer",
    category: "ecommerce",
    image: "/assets/img/portfolio/kaiser.webp",
    badge: "🍳 German Craft",
    handwrittenTag: "⚡ 4.2x ROAS Meta Ads",
    colorTheme: "peach",
    pinType: "tape-double",
    rotation: 1.6,
    techStack: ["Next.js", "Shopify Plus", "Framer Motion", "Stripe"],
    deliverables: ["Product Walkthroughs", "Interactive Configurator", "Multi-Currency Checkout"],
    result: "4.2x Return on Ad Spend & +85% Mobile Orders",
    clientStory: "Built a tactile luxury shopping experience combining fluid 60fps micro-animations with seamless checkout workflows tailored for premium kitchen buyers.",
  },
  {
    id: "work-3",
    name: "Farhat Frères",
    industry: "Luxury Automotive Dealership",
    category: "automotive",
    image: "/assets/img/portfolio/farhat.webp",
    badge: "🚙 60fps Experience",
    handwrittenTag: "✦ 50+ Car Deliveries",
    colorTheme: "lime",
    pinType: "tape-single",
    rotation: -2.0,
    techStack: ["Next.js", "WebGL 3D", "Tailwind", "WhatsApp API"],
    deliverables: ["VIP Car Walkarounds", "Financing Rate Calculator", "Instant VIP Test Drive Booking"],
    result: "50+ Verified Car Sales via Digital Inbound",
    clientStory: "Created a high-octane automotive showroom with 360-degree vehicle inspection modules and direct WhatsApp booking that converts casual browsers into qualified showroom visits.",
  },
  {
    id: "work-4",
    name: "The Architecture Corp",
    industry: "Spatial & Architectural Practice",
    category: "architecture",
    image: "/assets/img/portfolio/tac.webp",
    badge: "📐 Spatial UI Design",
    handwrittenTag: "✦ Awwwards Nominee",
    colorTheme: "blue",
    pinType: "tape-double",
    rotation: 1.4,
    techStack: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel Edge"],
    deliverables: ["Full-Screen Project Gallery", "Blueprint Blueprint Dark Mode", "Case Study Engine"],
    result: "+210% International Client Inquiries",
    clientStory: "A minimal, ultra-clean portfolio interface highlighting architectural blueprints, high-resolution renders, and spatial storytelling that positioned TAC as a premier global firm.",
  },
  {
    id: "work-5",
    name: "Azim Group",
    industry: "Conglomerate & Enterprise Holdings",
    category: "b2b",
    image: "/assets/img/portfolio/azim.webp",
    badge: "🏢 Corporate Ecosystem",
    handwrittenTag: "⚡ Unified Brand Hub",
    colorTheme: "yellow",
    pinType: "tape-single",
    rotation: -1.2,
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "i18n"],
    deliverables: ["Holding Group Architecture", "Investor Relations Portal", "Subsidiary Directory"],
    result: "100% Brand Alignment Across 6 Subsidiaries",
    clientStory: "Designed and deployed a unified holding company ecosystem providing investors and partners with seamless navigation across diverse multinational business verticals.",
  },
  {
    id: "work-6",
    name: "TaurusIvoire",
    industry: "Infrastructure & Heavy Engineering",
    category: "architecture",
    image: "/assets/img/portfolio/ti.webp",
    badge: "🏗️ Heavy Industry",
    handwrittenTag: "🔥 High-Ticket Inbound",
    colorTheme: "pink",
    pinType: "tape-double",
    rotation: 1.8,
    techStack: ["Next.js", "Tailwind", "Edge CDN", "SEO Engine"],
    deliverables: ["Mega-Project Case Studies", "Interactive Project Timeline", "Supplier Registration Hub"],
    result: "+190% Engagement on Mega-Project Tenders",
    clientStory: "Transformed a traditional infrastructure contractor's digital footprint into an authoritative, institutional powerhouse capable of winning multi-million dollar government tenders.",
  },
  {
    id: "work-7",
    name: "Hafil",
    industry: "Trading & Services",
    category: "b2b",
    image: "/assets/img/portfolio/hafil.webp",
    badge: "⚡ 1M+ Monthly Hits",
    handwrittenTag: "🚀 Ultra-Fast Mobile PWA",
    colorTheme: "blue",
    pinType: "tape-double",
    rotation: 1.3,
    techStack: ["Next.js", "PWA", "Geo-Locator API", "Cloudflare"],
    deliverables: ["Dealership Locator", "Commercial Fleet Calculator", "Multilingual Service Guides"],
    result: "Sub-second load times across 2G/3G mobile networks",
    clientStory: "Built a lightweight, ultra-optimized progressive web app ensuring instantaneous loading on mobile devices across emerging markets with high customer conversion.",
  },
];

// Torn Paper Bottom Jagged Clip Path
const TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), 98% calc(100% - 3px), 95% calc(100% - 13px), 92% calc(100% - 2px), 89% calc(100% - 16px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function WDWork() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredWorks = useMemo(() => {
    if (activeCategory === "all") return WORKS;
    return WORKS.filter((w) => w.category === activeCategory);
  }, [activeCategory]);

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
    <section className="relative overflow-hidden bg-[#121316] py-10 sm:py-14 text-white border-b border-white/10">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[400px] w-[500px] rounded-full bg-[#c9f31d]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-[400px] w-[500px] rounded-full bg-[#38bdf8]/10 blur-[140px]" />

      {/* Decorative Wall Tape Accents */}
      <div className="tape-strip top-8 left-10 rotate-[-12deg] opacity-60 hidden sm:block !w-20 !h-5" />
      <div className="tape-strip top-10 right-14 rotate-[14deg] opacity-60 hidden md:block !w-20 !h-5" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER: DOSSIER BADGE, TITLE & STATS */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            {/* Top Tag Pill */}
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-4 py-1.5 text-[11px] font-black text-black uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
              </span>
              <span>⚡ LIVE DIGITAL SHOWCASE // WEB PLATFORMS & APPS</span>
            </div> */}

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

            {/* <p className="text-sm sm:text-base text-slate-300 max-w-xl font-medium leading-relaxed">
              Explore high-velocity Next.js web applications, immersive brand storefronts, and conversion-focused architectures built for industry leaders.
            </p> */}
          </div>

          {/* Right Postmark Stamp & Quick Controls */}
          <div className="flex flex-wrap items-center gap-4 lg:self-end">
            <div className="postmark-stamp border-[#c9f31d]/60 bg-white/5 backdrop-blur-md px-5 py-2.5 shadow-sm text-left">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#c9f31d]">
                LIGHTHOUSE BENCHMARK
              </span>
              <span className="font-handwriting text-base sm:text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
                <span className="text-amber-400">⚡</span> 99+ Speed &amp; 60fps Motion
              </span>
            </div>

            {/* Swiper Custom Navigation Buttons */}
            {/* <div className="flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#c9f31d] hover:text-black hover:border-[#c9f31d] transition-all active:scale-95 shadow-sm"
                aria-label="Previous Project"
              >
                <i className="fas fa-arrow-left text-sm" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#c9f31d] hover:text-black hover:border-[#c9f31d] transition-all active:scale-95 shadow-sm"
                aria-label="Next Project"
              >
                <i className="fas fa-arrow-right text-sm" />
              </button>
            </div> */}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. CATEGORY FILTER TABS */}
        {/* ============================================================ */}
        {/* <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${isActive
                    ? "bg-[#c9f31d] text-black shadow-md scale-105"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div> */}

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

        {/* ============================================================ */}
        {/* 4. FOOTER NOTE & CTA */}
        {/* ============================================================ */}
        {/* <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-left">
            <span className="flex h-3 w-3 rounded-full bg-[#c9f31d] animate-pulse" />
            <p className="font-handwriting text-lg sm:text-xl text-slate-300">
              Need a custom web application or interactive platform? Let&apos;s architect it.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-7 py-3 text-xs sm:text-sm font-black text-black uppercase tracking-wider shadow-lg shadow-[#c9f31d]/20 transition-all hover:bg-white hover:scale-105 active:scale-95 text-center"
          >
            <i className="fas fa-laptop-code text-xs" />
            <span>START YOUR WEB PROJECT</span>
          </Link>
        </div> */}
      </div>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE PROJECT INSPECTION MODAL */}
      {/* ============================================================ */}
      <AnimatePresence>
        {/* {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#fafaf8] p-6 sm:p-8 text-[#0e0f11] shadow-2xl border-2 border-black/15 overflow-hidden text-left"
            > */}
              {/* Scotch Tape Accent on Modal */}
              {/* <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-[-1deg] !w-24 !h-6" /> */}

              {/* Close Button */}
              {/* <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/10 hover:bg-black hover:text-white flex items-center justify-center text-sm font-bold transition-all z-20"
                aria-label="Close modal"
              >
                ✕
              </button> */}

              {/* Modal Content Header */}
              {/* <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-black px-3 py-1 font-mono text-[10px] font-black uppercase text-[#c9f31d]">
                  {selectedProject.badge}
                </span>
                <span className="font-handwriting text-base font-bold text-stone-800">
                  {selectedProject.handwrittenTag}
                </span>
              </div> */}

              {/* <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                {selectedProject.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-stone-600 mb-5">
                {selectedProject.industry}
              </p> */}

              {/* Image Preview & Details Grid */}
              {/* <div className="grid sm:grid-cols-12 gap-5 mb-5">
                <div className="sm:col-span-6 relative aspect-[4/3] rounded-2xl bg-white p-3 border border-black/10 shadow-sm flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="sm:col-span-6 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block">
                      CLIENT STORY &amp; CHALLENGE
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                      {selectedProject.clientStory}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#c9f31d]/30 border border-black/15 p-3">
                    <span className="text-[9px] font-mono font-bold uppercase text-stone-700 block">
                      MEASURABLE ROI
                    </span>
                    <span className="text-sm font-black text-black flex items-center gap-1.5 mt-0.5">
                      <span>📈</span> {selectedProject.result}
                    </span>
                  </div>
                </div>
              </div> */}

              {/* Key Deliverables & Tech Stack */}
              {/* <div className="grid sm:grid-cols-2 gap-4 border-t border-black/10 pt-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    KEY DELIVERABLES
                  </span>
                  <ul className="space-y-1.5 text-xs font-semibold text-stone-800">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#15803d]">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    TECHNICAL ARCHITECTURE
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-black/10 border border-black/15 px-2.5 py-1 text-[11px] font-bold font-mono text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Action Buttons in Modal */}
              {/* <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full border border-black/20 text-xs font-bold text-stone-800 hover:bg-black/5"
                >
                  Close Note
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#c9f31d] px-6 py-2.5 text-xs font-black uppercase text-black hover:bg-black hover:text-white transition-all shadow-md"
                >
                  <span>Build A Similar Platform</span>
                  <i className="fas fa-arrow-right text-[10px]" />
                </Link>
              </div>
            </motion.div> */}
          {/* </div>
        )} */}
      </AnimatePresence>
    </section>
  );
}
