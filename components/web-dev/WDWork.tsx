"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Reveal from "@/components/motion/Reveal";

interface WorkProject {
  id: string;
  name: string;
  industry: string;
  image: string;
  badge: string;
  handwrittenTag: string;
  colorTheme: "lime" | "yellow" | "teal" | "pink" | "peach" | "blue" | "green";
  pinType: "pin-red" | "pin-blue" | "pin-yellow" | "tape-single" | "tape-double";
  rotation: number;
  deliverables: string[];
  result: string;
}

const WORKS: WorkProject[] = [
  {
    id: "work-1",
    name: "MCM",
    industry: "Construction Materials",
    image: "/assets/img/portfolio/mcm.webp",
    badge: "🏢 B2B Authority",
    handwrittenTag: "🏗️ Enterprise Inbound",
    colorTheme: "green",
    pinType: "tape-single",
    rotation: -2.0,
    deliverables: ["Product Architecture", "B2B LinkedIn Content", "Technical Demos"],
    result: "50+ Enterprise RFQ Inquiries",
  },
  {
    id: "work-2",
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturers",
    image: "/assets/img/portfolio/kaiser.webp",
    badge: "🍳 German Craft",
    handwrittenTag: "⚡ 4.2x ROAS Meta Ads",
    colorTheme: "peach",
    pinType: "tape-double",
    rotation: -1.7,
    deliverables: ["Product Walkthroughs", "Chef Collaborations", "Paid Social Scaling"],
    result: "4.2x Return on Ad Spend",
  },
  {
    id: "work-3",
    name: "Farhat Frères",
    industry: "Automotive Dealer",
    image: "/assets/img/portfolio/farhat.webp",
    badge: "🚙 Premium Fleet",
    handwrittenTag: "✦ 50+ Car Deliveries",
    colorTheme: "lime",
    pinType: "tape-single",
    rotation: -2.1,
    deliverables: ["VIP Car Walkarounds", "Exclusive Financing Ads", "Client Spotlights"],
    result: "50+ Verified Car Sales",
  },
  {
    id: "work-4",
    name: "Hafil",
    industry: "Trading and services",
    image: "/assets/img/portfolio/hafil.webp",
    badge: "🥙 Turkish Flavors",
    handwrittenTag: "🔥 Viral Sizzle Videos",
    colorTheme: "blue",
    pinType: "tape-double",
    rotation: -1.4,
    deliverables: ["Grill & Sizzle Reels", "Local Foodie Retargeting", "Weekend Specials"],
    result: "+180% Dine-In Customer Spike",
  },
  {
    id: "work-5",
    name: "Azim Group",
    industry: "Group of companies",
    image: "/assets/img/portfolio/azim.webp",
    badge: "🥙 Turkish Flavors",
    handwrittenTag: "🔥 Viral Sizzle Videos",
    colorTheme: "yellow",
    pinType: "tape-double",
    rotation: -1.4,
    deliverables: ["Grill & Sizzle Reels", "Local Foodie Retargeting", "Weekend Specials"],
    result: "+180% Dine-In Customer Spike",
  },
  {
    id: "work-6",
    name: "The Architecture Corporation",
    industry: "Architecture",
    image: "/assets/img/portfolio/tac.webp",
    badge: "🏗️ Corporate",
    handwrittenTag: "🔥 Viral Sizzle Videos",
    colorTheme: "blue",
    pinType: "tape-double",
    rotation: -1.4,
    deliverables: ["Grill & Sizzle Reels", "Local Foodie Retargeting", "Weekend Specials"],
    result: "+180% Dine-In Customer Spike",
  },
  {
    id: "work-7",
    name: "TaurusIvoire",
    industry: "Architecture",
    image: "/assets/img/portfolio/ti.webp",
    badge: "🏗️ Corporate",
    handwrittenTag: "🔥 Viral Sizzle Videos",
    colorTheme: "pink",
    pinType: "tape-double",
    rotation: -1.4,
    deliverables: ["Grill & Sizzle Reels", "Local Foodie Retargeting", "Weekend Specials"],
    result: "+180% Dine-In Customer Spike",
  },
  {
    id: "work-1",
    name: "MCM",
    industry: "Construction Materials",
    image: "/assets/img/portfolio/mcm.webp",
    badge: "🏢 B2B Authority",
    handwrittenTag: "🏗️ Enterprise Inbound",
    colorTheme: "green",
    pinType: "tape-single",
    rotation: -2.0,
    deliverables: ["Product Architecture", "B2B LinkedIn Content", "Technical Demos"],
    result: "50+ Enterprise RFQ Inquiries",
  },
  {
    id: "work-2",
    name: "Kaiser",
    industry: "Kitchen Appliances Manufacturers",
    image: "/assets/img/portfolio/kaiser.webp",
    badge: "🍳 German Craft",
    handwrittenTag: "⚡ 4.2x ROAS Meta Ads",
    colorTheme: "peach",
    pinType: "tape-double",
    rotation: -1.7,
    deliverables: ["Product Walkthroughs", "Chef Collaborations", "Paid Social Scaling"],
    result: "4.2x Return on Ad Spend",
  },
  {
    id: "work-3",
    name: "Farhat Frères",
    industry: "Automotive Dealer",
    image: "/assets/img/portfolio/farhat.webp",
    badge: "🚙 Premium Fleet",
    handwrittenTag: "✦ 50+ Car Deliveries",
    colorTheme: "lime",
    pinType: "tape-single",
    rotation: -2.1,
    deliverables: ["VIP Car Walkarounds", "Exclusive Financing Ads", "Client Spotlights"],
    result: "50+ Verified Car Sales",
  },
];

// Torn Paper Bottom Jagged Clip Path
const TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), 98% calc(100% - 3px), 95% calc(100% - 13px), 92% calc(100% - 2px), 89% calc(100% - 16px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function WDWork() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getThemeStyles = (theme: WorkProject["colorTheme"]) => {
    switch (theme) {
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          border: "border-black/20",
          tagBg: "bg-black text-[#c9f31d]",
        };
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-900",
          border: "border-yellow-600/20",
          tagBg: "bg-stone-900 text-yellow-300",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-900",
          border: "border-teal-700/20",
          tagBg: "bg-stone-900 text-teal-300",
        };
      case "pink":
        return {
          bg: "bg-[#fecdd3] text-stone-900",
          border: "border-pink-700/20",
          tagBg: "bg-stone-900 text-pink-300",
        };
      case "peach":
        return {
          bg: "bg-[#fed7aa] text-stone-900",
          border: "border-orange-700/20",
          tagBg: "bg-stone-900 text-orange-300",
        };
      case "blue":
        return {
          bg: "bg-[#bae6fd] text-stone-900",
          border: "border-sky-700/20",
          tagBg: "bg-stone-900 text-sky-300",
        };
      case "green":
        return {
          bg: "bg-[#bbf7d0] text-stone-900",
          border: "border-emerald-700/20",
          tagBg: "bg-stone-900 text-emerald-300",
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#121316] py-14 sm:py-10 text-white border-b border-white/10">
      {/* Primary White Linear Grid for Dark Background */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />

      {/* Secondary Fine Graph Paper Grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(207,207,207,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(86,84,84,0.04)_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Grid Intersection Accent Dots */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.3)_1.2px,transparent_1.2px)] [background-size:36px_36px]" />

      {/* Decorative Wall Tape Accents */}
      <div className="tape-strip top-8 left-10 rotate-[-12deg] opacity-50 hidden sm:block !w-16 !h-4" />
      <div className="tape-strip top-10 right-14 rotate-[14deg] opacity-50 hidden md:block !w-16 !h-4" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* SECTION HEADER: DOSSIER BADGE & TITLE */}
        {/* ============================================================ */}
        <Reveal className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#c9f31d] -rotate-1">
              ✨ Our Works
            </span>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* 3D COVERFLOW CAROUSEL WITH TORN STICKY NOTES */}
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
                        "drop-shadow(0 16px 22px rgba(0,0,0,0.45)) drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
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
