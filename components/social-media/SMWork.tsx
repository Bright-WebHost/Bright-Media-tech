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
    name: "Bajaj Auto",
    industry: "Bike Manufacturers",
    image: "/assets/img/portfolio/bajaj.webp",
    badge: "⚡ 1M+ Views",
    handwrittenTag: "★ 1M+ Organic Views 🚀",
    colorTheme: "blue",
    pinType: "pin-red",
    rotation: -2.5,
    deliverables: ["Viral Reel Production", "Influencer Activation", "Social Storytelling"],
    result: "+1.2M Total Campaign Reach",
  },
  {
    id: "work-2",
    name: "Motorland",
    industry: "Automotive Dealer",
    image: "/assets/img/portfolio/ml.webp",
    badge: "🚗 100+ Posts",
    handwrittenTag: "📈 3.8x Test-Drive Leads",
    colorTheme: "teal",
    pinType: "tape-double",
    rotation: 1.8,
    deliverables: ["Inventory Showcase", "Meta Ad Funnels", "High-Converting Retargeting"],
    result: "3.8x Growth in Showroom Visits",
  },
  {
    id: "work-3",
    name: "Second Cup",
    industry: "Coffee Shop",
    image: "/assets/img/portfolio/sc.webp",
    badge: "☕ Viral Reels",
    handwrittenTag: "✨ Daily Viral Footfall",
    colorTheme: "yellow",
    pinType: "tape-single",
    rotation: -1.5,
    deliverables: ["Café Aesthetic Feeds", "Daily Story Content", "Local Foodie Engagement"],
    result: "+240% In-Store Foot Traffic",
  },
  {
    id: "work-4",
    name: "Metroways",
    industry: "Travel Agency",
    image: "/assets/img/portfolio/mw.webp",
    badge: "✈️ Global Reach",
    handwrittenTag: "🌴 +280% Booking Inquiries",
    colorTheme: "teal",
    pinType: "pin-blue",
    rotation: 2.2,
    deliverables: ["Holiday Package Ads", "Destination Reels", "Lead Gen Campaigns"],
    result: "+280% Qualified Booking Calls",
  },
  {
    id: "work-5",
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
    id: "work-6",
    name: "Tonino",
    industry: "Restaurant",
    image: "/assets/img/portfolio/tonino.webp",
    badge: "🍷 Luxury Dining",
    handwrittenTag: "🥂 Fully Booked Weekends",
    colorTheme: "pink",
    pinType: "pin-yellow",
    rotation: 1.6,
    deliverables: ["Culinary Video Craft", "VIP Reservation Ads", "Menu Launch Blitz"],
    result: "100% Weekend Table Bookings",
  },
  {
    id: "work-7",
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
    id: "work-8",
    name: "GTSW",
    industry: "Battery and Tyre Manufacturers",
    image: "/assets/img/portfolio/gt.webp",
    badge: "🔋 Duracell & Giti",
    handwrittenTag: "🏁 Global Distribution",
    colorTheme: "yellow",
    pinType: "pin-red",
    rotation: 2.4,
    deliverables: ["Distributor Engagement", "Duracell Campaign Ads", "Tech Reels"],
    result: "Expanded Dealer Network Reach",
  },
  {
    id: "work-9",
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
    id: "work-10",
    name: "Amore Glacier",
    industry: "Cafe",
    image: "/assets/img/portfolio/amore.webp",
    badge: "🍦 Gelato Craze",
    handwrittenTag: "🍨 500K+ TikTok Views",
    colorTheme: "pink",
    pinType: "pin-blue",
    rotation: 1.9,
    deliverables: ["TikTok Sound Trends", "Mouthwatering Video Hooks", "Flavor Launches"],
    result: "500K+ TikTok Viral Impressions",
  },
  {
    id: "work-11",
    name: "Istanbul Sofrasi",
    industry: "Restaurant",
    image: "https://brightmedia.tech/img/allimg/logo/Istanbul.webp",
    badge: "🥙 Turkish Flavors",
    handwrittenTag: "🔥 Viral Sizzle Videos",
    colorTheme: "peach",
    pinType: "tape-double",
    rotation: -1.4,
    deliverables: ["Grill & Sizzle Reels", "Local Foodie Retargeting", "Weekend Specials"],
    result: "+180% Dine-In Customer Spike",
  },
];

// Torn Paper Bottom Jagged Clip Path
const TORN_PAPER_BOTTOM_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), 98% calc(100% - 3px), 95% calc(100% - 13px), 92% calc(100% - 2px), 89% calc(100% - 16px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function SMWork() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const getThemeStyles = (theme: WorkProject["colorTheme"]) => {
    switch (theme) {
      case "lime":
        return {
          bg: "bg-[#d8f938] text-[#0e0f11]",
          border: "border-black/20",
          tagBg: "bg-black text-[#c9f31d]",
          backBg: "bg-[#c4ea27] text-black",
        };
      case "yellow":
        return {
          bg: "bg-[#fef08a] text-stone-900",
          border: "border-yellow-600/20",
          tagBg: "bg-stone-900 text-yellow-300",
          backBg: "bg-[#fde047] text-stone-900",
        };
      case "teal":
        return {
          bg: "bg-[#99f6e4] text-stone-900",
          border: "border-teal-700/20",
          tagBg: "bg-stone-900 text-teal-300",
          backBg: "bg-[#5eead4] text-stone-900",
        };
      case "pink":
        return {
          bg: "bg-[#fecdd3] text-stone-900",
          border: "border-pink-700/20",
          tagBg: "bg-stone-900 text-pink-300",
          backBg: "bg-[#fda4af] text-stone-900",
        };
      case "peach":
        return {
          bg: "bg-[#fed7aa] text-stone-900",
          border: "border-orange-700/20",
          tagBg: "bg-stone-900 text-orange-300",
          backBg: "bg-[#fdba74] text-stone-900",
        };
      case "blue":
        return {
          bg: "bg-[#bae6fd] text-stone-900",
          border: "border-sky-700/20",
          tagBg: "bg-stone-900 text-sky-300",
          backBg: "bg-[#7dd3fc] text-stone-900",
        };
      case "green":
        return {
          bg: "bg-[#bbf7d0] text-stone-900",
          border: "border-emerald-700/20",
          tagBg: "bg-stone-900 text-emerald-300",
          backBg: "bg-[#86efac] text-stone-900",
        };
    }
  };

  const toggleFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-14 sm:py-20 text-[#0e0f11] border-b border-black/10">
      {/* Light Paper Blueprint Texture Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Decorative Wall Tape Accents */}
      <div className="tape-strip top-8 left-10 rotate-[-12deg] opacity-50 hidden sm:block !w-16 !h-4" />
      <div className="tape-strip top-10 right-14 rotate-[14deg] opacity-50 hidden md:block !w-16 !h-4" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* SECTION HEADER: DOSSIER BADGE & TITLE */}
        {/* ============================================================ */}
        <Reveal className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="font-handwriting text-2xl sm:text-3xl font-bold text-amber-900 -rotate-1">
              ✨ Our Works
            </span>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* 3D FLIP COVERFLOW CAROUSEL WITH TORN STICKY NOTES */}
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
              const isFlipped = flippedCard === work.id;

              return (
                <SwiperSlide key={work.id} className="h-auto">
                  <div
                    onClick={(e) => toggleFlip(work.id, e)}
                    style={{
                      transform: `rotate(${work.rotation}deg)`,
                      transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      filter:
                        "drop-shadow(0 14px 18px rgba(0,0,0,0.12)) drop-shadow(0 4px 6px rgba(0,0,0,0.05))",
                    }}
                    className="group relative flex flex-col h-full cursor-pointer select-none"
                  >
                    {/* Torn Paper Sheet Container */}
                    <div
                      style={{
                        clipPath: TORN_PAPER_BOTTOM_CLIP,
                      }}
                      className={`relative flex flex-col justify-between h-full overflow-hidden rounded-t-2xl p-3.5 sm:p-5 pb-10 sm:pb-12 transition-all duration-500 ${
                        isFlipped ? styles.backBg : styles.bg
                      } ${styles.border} border-t-2 border-l-2 border-r-2`}
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

                      {/* FRONT VIEW OR FLIPPED VIEW */}
                      {!isFlipped ? (
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
                      ) : (
                        /* FLIPPED BACK VIEW */
                        <div className="relative z-10 flex-1 flex flex-col justify-between py-1 animate-fade-down">
                          <div className="space-y-2">
                            <div className="border-b border-black/20 pb-1.5">
                              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-black/60 block">
                                CAMPAIGN HIGHLIGHTS
                              </span>
                              <h4 className="text-base sm:text-lg font-black uppercase text-black truncate">
                                {work.name}
                              </h4>
                              <p className="font-handwriting text-xs sm:text-sm font-bold text-black/80 truncate">
                                {work.industry}
                              </p>
                            </div>

                            {/* Deliverables List */}
                            <div className="space-y-1">
                              {work.deliverables.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-center gap-1.5 rounded-md bg-black/10 px-2 py-0.5 text-[11px] font-bold text-black"
                                >
                                  <span>✦</span>
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Verified Result Badge */}
                          <div className="mt-3 pt-2 border-t border-black/20">
                            <div className="rounded-lg bg-black px-2.5 py-1.5 text-center text-[#c9f31d] shadow">
                              <span className="text-[8px] font-bold uppercase tracking-widest block opacity-70">
                                OUTCOME
                              </span>
                              <span className="text-[11px] sm:text-xs font-black block truncate">
                                {work.result}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
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
