"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface ServiceItem {
  id: string;
  no: string;
  tag: string;
  title: string;
  shortDesc: string;
  takeaways: string[];
  color: string;
  tapeClass: string;
  pinColor: string;
  rotation: number;
  trashX: number;
  trashY: number;
  trashRotate: number;
  href: string;
  likes: number;
  statBadge: string;
}

// 7 Specialized Services split into Row 1 (3 cards) and Row 2 (4 cards)
const ROW_1_SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    no: "01",
    tag: "Brand Identity",
    title: "Branding",
    shortDesc:
      "Create Brand identity that resonates with your audience and reflects your core values.",
    takeaways: ["Identity Design", "Core Values", "Brand Resonance"],
    color: "bg-[#c9f31d] text-[#0e0f11]",
    tapeClass: "tape-strip -top-3 left-6 -rotate-6",
    pinColor: "bg-red-600",
    rotation: -2.5,
    trashX: -40,
    trashY: 25,
    trashRotate: -14,
    href: "/services-2/branding",
    likes: 342,
    statBadge: "💡 Distinct Identity",
  },
  {
    id: "serv-2",
    no: "02",
    tag: "Social Growth",
    title: "Social Media Marketing",
    shortDesc:
      "Engage and grow your audience with custom social media strategies to boost brand awareness and interaction.",
    takeaways: ["Audience Growth", "Brand Awareness", "Custom Strategies"],
    color: "bg-[#feef8f] text-slate-950",
    tapeClass: "tape-strip -top-3 left-1/2 -translate-x-1/2 -rotate-2",
    pinColor: "bg-amber-600",
    rotation: -1.5,
    trashX: -20,
    trashY: -15,
    trashRotate: -10,
    href: "/services/social-media",
    likes: 529,
    statBadge: "🔥 High Engagement",
  },
  {
    id: "serv-3",
    no: "03",
    tag: "Web & Platforms",
    title: "Web Development",
    shortDesc:
      "Build user-friendly, responsive websites designed to enhance customer experience and drive conversions effectively.",
    takeaways: ["Responsive UI", "Customer Experience", "High Conversion"],
    color: "bg-[#99f6e4] text-slate-950",
    tapeClass: "tape-strip -top-3 right-8 rotate-3",
    pinColor: "bg-blue-600",
    rotation: 2,
    trashX: 35,
    trashY: -20,
    trashRotate: 16,
    href: "/services-3",
    likes: 418,
    statBadge: "⚡ 60fps & Fast UX",
  },
];

const ROW_2_SERVICES: ServiceItem[] = [
  {
    id: "serv-4",
    no: "04",
    tag: "Search Dominance",
    title: "SEO",
    shortDesc:
      "Optimize your online presence to improve search rankings, attract organic traffic, and increase visibility.",
    takeaways: ["Search Rankings", "Organic Traffic", "Online Visibility"],
    color: "bg-[#bbf7d0] text-emerald-950",
    tapeClass: "tape-strip -top-3 right-8 -rotate-3",
    pinColor: "bg-teal-600",
    rotation: 2.5,
    trashX: 25,
    trashY: -25,
    trashRotate: 12,
    href: "/services-4",
    likes: 211,
    statBadge: "🎯 Page 1 Rankings",
  },
  {
    id: "serv-5",
    no: "05",
    tag: "Targeted Ads",
    title: "Paid Ads",
    shortDesc:
      "Maximize reach and return on investment with targeted advertising campaigns across various digital platforms.",
    takeaways: ["Maximized Reach", "High ROI", "Targeted Campaigns"],
    color: "bg-[#fecdd3] text-slate-950",
    tapeClass: "tape-strip -top-3 right-6 rotate-4",
    pinColor: "bg-emerald-600",
    rotation: 3,
    trashX: 30,
    trashY: 20,
    trashRotate: 15,
    href: "/service-5",
    likes: 287,
    statBadge: "📈 High ROI / ROAS",
  },
  {
    id: "serv-6",
    no: "06",
    tag: "Visual Storytelling",
    title: "Photography & Video",
    shortDesc:
      "Capture compelling visuals that tell your brand story and engage your audience across all media.",
    takeaways: ["Compelling Visuals", "Brand Storytelling", "Multi-Media Assets"],
    color: "bg-[#e9d5ff] text-purple-950",
    tapeClass: "tape-strip -top-3 left-8 rotate-2",
    pinColor: "bg-purple-600",
    rotation: -3,
    trashX: -35,
    trashY: 15,
    trashRotate: -12,
    href: "/photography-and-video-production",
    likes: 395,
    statBadge: "🎬 4K Storytelling",
  },
  {
    id: "serv-7",
    no: "07",
    tag: "Custom Software",
    title: "Software Development",
    shortDesc:
      "Build scalable, reliable software solutions designed to improve business efficiency and deliver seamless user experiences.",
    takeaways: ["Scalable Systems", "Business Efficiency", "Seamless UX"],
    color: "bg-[#fed7aa] text-orange-950",
    tapeClass: "tape-strip -top-3 left-6 -rotate-6",
    pinColor: "bg-rose-600",
    rotation: -1.5,
    trashX: -20,
    trashY: 18,
    trashRotate: -8,
    href: "/services-3",
    likes: 316,
    statBadge: "💻 Scalable Code",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });

  const [boardMode, setBoardMode] = useState<"arranged" | "trash">("arranged");
  const [likesState, setLikesState] = useState<Record<string, number>>({
    "serv-1": 342,
    "serv-2": 418,
    "serv-3": 529,
    "serv-4": 287,
    "serv-5": 395,
    "serv-6": 211,
    "serv-7": 316,
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikesState((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const isArranged = isInView && boardMode === "arranged";

  const renderCard = (serv: ServiceItem, index: number) => (
    <motion.div
      key={serv.id}
      layout
      drag
      dragConstraints={containerRef}
      dragElastic={0.15}
      whileDrag={{ scale: 1.06, zIndex: 60, rotate: 0 }}
      initial={{
        x: serv.trashX,
        y: serv.trashY,
        rotate: serv.trashRotate,
        opacity: 0.4,
        scale: 0.92,
      }}
      animate={
        isArranged
          ? {
              x: 0,
              y: 0,
              rotate: serv.rotation,
              opacity: 1,
              scale: 1,
            }
          : {
              x: serv.trashX,
              y: serv.trashY,
              rotate: serv.trashRotate,
              opacity: 0.9,
              scale: 0.94,
            }
      }
      transition={{
        type: "spring",
        stiffness: 75,
        damping: 15,
        delay: isArranged ? index * 0.05 : 0,
      }}
      whileHover={{
        y: -8,
        rotate: 0,
        scale: 1.02,
        zIndex: 30,
      }}
      className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 shadow-2xl ${serv.color} border-2 border-black/15 cursor-grab active:cursor-grabbing select-none transition-shadow duration-200 text-left`}
      style={{
        boxShadow: "0 18px 30px -10px rgba(0,0,0,0.35), 0 6px 12px -4px rgba(0,0,0,0.2)",
      }}
    >
      {/* Top Scotch Tape Accent */}
      <div className={serv.tapeClass} />

      {/* 3D Push Pin Accent at Top Center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
        <div className={`h-4 w-4 rounded-full ${serv.pinColor} border-2 border-white shadow-md`} />
      </div>

      <div>
        {/* Top Meta Bar: Service Number & Tag + Live Like */}
        <div className="flex items-center justify-between border-b border-black/15 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black opacity-60">{serv.no}</span>
            <span className="rounded-full bg-black/90 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#c9f31d]">
              {serv.tag}
            </span>
          </div>

          <button
            onClick={(e) => handleLike(serv.id, e)}
            className="flex items-center gap-1 text-xs font-bold text-black/80 hover:text-black transition-colors"
            title="Like this service note"
          >
            <i className="fas fa-heart text-red-600" />
            <span>{likesState[serv.id] || serv.likes}</span>
          </button>
        </div>

        {/* Service Title */}
        <h3 className="mt-3 text-lg sm:text-xl font-black leading-tight tracking-tight text-black">
          {serv.title}
        </h3>

        {/* Short Description */}
        <p className="mt-1.5 text-xs font-medium leading-relaxed text-black/80">
          {serv.shortDesc}
        </p>

        {/* Key Takeaway Bullet Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {serv.takeaways.map((takeaway, tIdx) => (
            <span
              key={tIdx}
              className="rounded-md bg-black/10 px-2 py-0.5 text-[9px] font-bold text-black/90 border border-black/10"
            >
              ✓ {takeaway}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Strip: Metric Badge & Link */}
      <div className="mt-5 pt-3 border-t border-black/15 flex items-center justify-between">
        <div className="rounded-md bg-black/90 px-2 py-0.5 text-[10px] font-mono font-bold text-[#c9f31d]">
          {serv.statBadge}
        </div>

        <Link
          href={serv.href}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black hover:underline"
        >
          Details <i className="fas fa-arrow-right text-[10px]" />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#0e0f11] py-14 sm:py-18 text-white border-t border-b border-white/10"
    >
      {/* Background Canvas Dot Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(#c9f31d_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Ambient Neon Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[#c9f31d]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-[#38bdf8]/10 blur-[130px]" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* SECTION HEADER WITH INTERACTIVE CONTROLS (Centered) */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-4xl text-center space-y-4 border-b border-white/10 pb-8 mb-12">
          {/* Pulsing Pill Section Badge (Centered) */}
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#c9f31d]/40 bg-[#c9f31d]/10 px-4 py-1 text-xs font-black text-[#c9f31d] uppercase tracking-wider backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9f31d] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9f31d]" />
            </span>
            <span>📌 CREATIVE DESK SPREAD • 7 SPECIALIZED PILLARS</span>
          </div> */}

          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {/* Torn Notes Pinned Across <br /> */}
            <span className="font-handwriting text-[#c9f31d] text-2xl sm:text-4xl lg:text-5xl underline decoration-wavy decoration-[#c9f31d] normal-case inline-block">
              Our Services Desk
            </span>
          </h2>

          {/* Centered Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Scroll to watch our 7 specialized pillars assemble onto the pinboard. Toggle modes or click and drag any note!
          </p>

          {/* Centered Interactive Animation Toggle Toolbar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {/* <button
              onClick={() => setBoardMode("arranged")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all ${
                boardMode === "arranged"
                  ? "bg-[#c9f31d] text-black shadow-xl scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <i className="fas fa-th-large" /> ✨ Arrange Canvas
            </button> */}

            {/* <button
              onClick={() => setBoardMode("trash")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all ${
                boardMode === "trash"
                  ? "bg-red-500 text-white shadow-xl scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <i className="fas fa-trash-alt" /> 🗑️ Chaotic Trash Pile
            </button> */}

            {/* Postmark Stamp Pill */}
            <div className="postmark-stamp text-[#c9f31d] hidden sm:inline-flex py-1 px-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white">DRAGGABLE PINBOARD</span>
              <span className="font-handwriting text-sm font-bold text-[#c9f31d]">📌 7 Services</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 7 STICKY NOTES PINBOARD CANVAS: 3 TOP ROW + 4 BOTTOM ROW */}
        {/* ============================================================ */}
        <div className="space-y-6">
          {/* TOP ROW: 3 CARDS IN A ROW */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {ROW_1_SERVICES.map((serv, index) => renderCard(serv, index))}
          </div>

          {/* BOTTOM ROW: 4 CARDS IN A ROW */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ROW_2_SERVICES.map((serv, index) => renderCard(serv, index + 3))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESK BOTTOM POSTAL STRIP */}
        {/* ============================================================ */}
        {/* <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c9f31d] text-black text-lg shadow">
              <i className="fas fa-paper-plane" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">Need a Tailored Custom Service Bundle?</h4>
              <p className="text-xs text-gray-300">
                We combine all 7 pillars into a cohesive digital growth strategy for your brand.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-6 py-2.5 text-xs font-black text-black uppercase tracking-wider shadow-lg transition-all hover:bg-white hover:scale-105 shrink-0"
          >
            <i className="fas fa-thumbtack text-xs" /> Pin Your Project Inquiry
          </Link>
        </div> */}
      </div>
    </section>
  );
}
