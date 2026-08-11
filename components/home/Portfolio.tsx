"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// 5 Process Model Steps from the old website elevated into torn note style
const PROCESS_STEPS = [
  {
    step: "01",
    title: "CONSULTATION",
    subtitle: "Discovery & Goals",
    desc: "Deep-dive alignment on your brand vision, target audience, competitive landscape, and KPIs.",
    color: "bg-[#c9f31d] text-black",
    tape: "tape-strip -top-3 left-4 -rotate-6",
    rotation: -2,
    icon: "fas fa-comments",
  },
  {
    step: "02",
    title: "STRATEGY DEVELOPMENT",
    subtitle: "Architecture & Blueprint",
    desc: "Crafting multi-channel creative blueprints, visual direction, technical specifications, and timeline roadmaps.",
    color: "bg-[#feef8f] text-slate-900",
    tape: "tape-strip -top-3 right-4 rotate-3",
    rotation: 2,
    icon: "fas fa-drafting-compass",
  },
  {
    step: "03",
    title: "EXECUTION",
    subtitle: "High-Octane Production",
    desc: "Rapid design, high-velocity Next.js development, 4K commercial shoots, and precision asset creation.",
    color: "bg-[#99f6e4] text-slate-950",
    tape: "tape-strip -top-3 left-1/2 -translate-x-1/2 -rotate-2",
    rotation: -1.5,
    icon: "fas fa-laptop-code",
  },
  {
    step: "04",
    title: "MONITORING & OPTIMIZATION",
    subtitle: "Analytics & Scaling",
    desc: "Granular A/B testing, real-time ROAS tracking, speed optimization, and data-driven iterations.",
    color: "bg-[#fecdd3] text-slate-950",
    tape: "tape-strip -top-3 right-6 rotate-4",
    rotation: 2.5,
    icon: "fas fa-chart-line",
  },
  {
    step: "05",
    title: "REVIEW & FEEDBACK",
    subtitle: "Deliver & Elevate",
    desc: "Comprehensive project review, performance feedback loops, asset delivery, and ongoing scale support.",
    color: "bg-[#e9d5ff] text-purple-950",
    tape: "tape-strip -top-3 left-6 rotate-2",
    rotation: -2,
    icon: "fas fa-check-double",
  },
];

// Featured Projects with Real Media Covers for the Swiper
const FEATURED_PROJECTS = [
  {
    id: "proj-1",
    title: "Second Cup",
    category: "Photography & Videography",
    industry: "Food & Beverage Café",
    image: "https://brightmedia.tech/img/covers/project/lg/secondcup1.webp",
    quote: "Behind the camera with Bright Media: High-impact 4K commercial videos and photography driving viral engagement.",
    badge: "⚡ Viral Engagement",
    color: "bg-[#faf8f5]",
    slug: "Second-Cup",
  },
  {
    id: "proj-2",
    title: "Bajaj Auto",
    category: "Branding & Social",
    industry: "Automotive Mobility",
    image: "https://brightmedia.tech/img/covers/project/bajaj.webp",
    quote: "Empowering Africa with robust mobility: Viral social video campaigns driving over 1,000,000 impressions in 60 days.",
    badge: "📈 1M+ Impressions",
    color: "bg-[#f7fdf4]",
    slug: "bajaj",
  },
  {
    id: "proj-3",
    title: "Tonino Lamborghini",
    category: "Branding & Web",
    industry: "Luxury Energy Drink",
    image: "https://brightmedia.tech/img/covers/project/tonino.webp",
    quote: "Positioning Italian luxury in Ivory Coast: Iconic branding, high-voltage photography, and interactive social launch.",
    badge: "💡 Luxury Recall",
    color: "bg-[#fdf9f4]",
    slug: "Tonino-Lamborghini",
  },
  {
    id: "proj-4",
    title: "Motorland",
    category: "Social Media & Web",
    industry: "Commercial Fleet",
    image: "https://brightmedia.tech/img/covers/project/Mllog.webp",
    quote: "Fleet reliability brought to life through consistent digital branding, modern web UI, and active social management.",
    badge: "⚡ 60fps UX",
    color: "bg-[#f4f9fd]",
    slug: "Motorland",
  },
  {
    id: "proj-5",
    title: "Kaiser Café",
    category: "Photography & Video",
    industry: "Artisan Bakery",
    image: "https://brightmedia.tech/img/covers/project/kaiser.webp",
    quote: "Artisanal culinary storytelling: Capturing freshness and premium French pastry craftsmanship across all digital channels.",
    badge: "📷 Studio Craft",
    color: "bg-[#fdf4f7]",
    slug: "Kaiser",
  },
];

export default function Portfolio() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-20 sm:py-22 text-gray-900 border-t border-b border-black/10">
      {/* ============================================================ */}
      {/* LIGHT PAPER CANVAS BACKGROUND PATTERN */}
      {/* ============================================================ */}
      {/* Subtle Notebook Paper Ruled Lines Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />

      {/* Decorative Scotch Tape Strips scattered in corners */}
      <div className="tape-strip top-10 left-8 -rotate-12 hidden xl:block opacity-60" />
      <div className="tape-strip top-24 right-12 rotate-45 hidden xl:block opacity-60" />
      <div className="tape-strip bottom-16 left-12 rotate-6 hidden xl:block opacity-50" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        {/* ============================================================ */}
        {/* 1. HEADER BLOCK (Centered, Torn Sticky Note Style) */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          {/* Centered Pill Label */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-1.5 text-xs font-black text-[#c9f31d] uppercase tracking-wider shadow-md">
            <i className="fas fa-thumbtack text-xs" /> OUR MODEL &amp; WORKFLOW
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-black uppercase text-heading tracking-tight leading-[1.05]">
            We Take Care Of <span className="hidden sm:inline" />
            <span className="font-handwriting text-5xl sm:text-4xl lg:text-6xl text-emerald-950 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block mt-1 sm:mt-2">
              Everything
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We manage all aspects of your project, ensuring seamless execution and exceptional results tailored for you.
          </p>

          {/* Postmark stamp accent */}
          {/* <div className="pt-2 flex justify-center">
            <div className="postmark-stamp text-black border-black/30">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-700">BRIGHT MEDIA MODEL</span>
              <span className="font-handwriting text-lg font-bold text-black">⚡ 5-Phase Delivery</span>
            </div>
          </div> */}
        </div>

        {/* ============================================================ */}
        {/* 2. 5-STEP TORN STICKY PROCESS PIPELINE */}
        {/* ============================================================ */}
        <div className="relative mb-24">
          {/* Connecting Conveyor Track (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 border-t-2 border-dashed border-black/20 -translate-y-1/2 pointer-events-none z-0" />

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
            {PROCESS_STEPS.map((p, index) => {
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={p.step}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 shadow-xl ${p.color} border-2 border-black/15 cursor-pointer transition-all duration-300 select-none`}
                  style={{
                    transform: `rotate(${p.rotation}deg)`,
                    boxShadow: isActive
                      ? "0 20px 35px -5px rgba(0,0,0,0.3), 0 0 0 3px #000"
                      : "0 10px 20px -5px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Top Scotch Tape Strip */}
                  <div className={p.tape} />

                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between border-b border-black/15 pb-2.5">
                      <span className="font-mono text-sm font-black opacity-70">
                        {p.step}
                      </span>
                      <span className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-[#c9f31d] text-xs shadow">
                        <i className={p.icon} />
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-3 text-sm font-black text-black uppercase tracking-wider leading-snug">
                      {p.title}
                    </h3>
                    <p className="font-handwriting text-base font-bold opacity-80 mt-0.5">
                      {p.subtitle}
                    </p>

                    {/* Step Description */}
                    {/* <p className="mt-2 text-xs leading-relaxed opacity-90">
                      {p.desc}
                    </p> */}
                  </div>

                  {/* Bottom Indicator */}
                  {/* <div className="mt-4 pt-2.5 border-t border-black/15 flex items-center justify-between text-[11px] font-bold">
                    <span>Phase {index + 1}</span>
                    <span className="font-mono text-xs">
                      {index < PROCESS_STEPS.length - 1 ? ">>" : "✓ FINISH"}
                    </span>
                  </div> */}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. TORN PAPER SHOWCASE: FEATURED CLIENT PROJECTS */}
        {/* ============================================================ */}
        <div className="mt-20 sm:mt-28">
          {/* Showcase Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/15 pb-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/10 px-3 py-1 text-xs font-bold text-black uppercase tracking-wider mb-2">
                <i className="fas fa-folder-open" /> PROVEN WORK
              </div>
              {/* <h3 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
                Craft Delivered With This Model
              </h3> */}
            </div>

            {/* Swiper Controls */}
            {/* <div className="flex items-center gap-3">
              <button className="pf-prev-btn flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#c9f31d] hover:bg-[#c9f31d] hover:text-black transition-colors shadow-md cursor-pointer">
                <i className="fas fa-arrow-left text-xs" />
              </button>
              <button className="pf-next-btn flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#c9f31d] hover:bg-[#c9f31d] hover:text-black transition-colors shadow-md cursor-pointer">
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div> */}
          </div>

          {/* Swiper Carousel of Torn Paper Project Cards */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop
            speed={700}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{ prevEl: ".pf-prev-btn", nextEl: ".pf-next-btn" }}
            className="overflow-visible"
          >
            {FEATURED_PROJECTS.map((proj, idx) => (
              <SwiperSlide key={proj.id} className="pb-8">
                <div
                  className={`relative flex flex-col justify-between rounded-3xl p-1 sm:p-1 shadow-xl ${proj.color} border-2 border-black/15 transition-all duration-300 hover:-translate-y-2`}
                  style={{
                    transform: `rotate(${idx % 2 === 0 ? -1.5 : 1.5}deg)`,
                    boxShadow: "0 20px 35px -10px rgba(0,0,0,0.15), 0 4px 6px -2px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Tape Strips on Project Card */}
                  <div className="tape-strip -top-3 left-6 -rotate-6" />
                  <div className="tape-strip -top-3 right-6 rotate-6" />

                  {/* Media Viewport */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden rounded-2xl border-2 border-black/10 bg-gray-900 shadow-inner">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority={idx < 2}
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-black/90 px-3 py-1 text-[10px] font-black text-[#c9f31d] uppercase tracking-wider shadow">
                      {proj.category}
                    </div>
                    {/* <div className="absolute bottom-3 right-3 rounded-full bg-[#c9f31d] px-3 py-1 text-[10px] font-black text-black uppercase shadow">
                      {proj.badge}
                    </div> */}
                  </div>

                  {/* Card Content */}
                  <div className="mt-4">
                    {/* <div className="flex items-center justify-between text-xs text-gray-500 font-bold uppercase tracking-wider">
                      <span>{proj.industry}</span>
                      <span className="font-handwriting text-sm text-black">Verified ✨</span>
                    </div> */}

                    {/* <h4 className="mt-1 text-2xl font-black text-black">
                      {proj.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-700 line-clamp-3">
                      {proj.quote}
                    </p> */}
                  </div>

                  {/* Footer Link */}
                  {/* <div className="mt-5 pt-3.5 border-t border-black/10 flex items-center justify-between">
                    <Link
                      href={`/blog/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black hover:text-[#c9f31d] hover:bg-black px-3 py-1.5 rounded-full transition-colors"
                    >
                      Project Breakdown <i className="fas fa-arrow-right text-[10px]" />
                    </Link>
                    <span className="font-handwriting text-sm font-bold text-gray-600">
                      Pinned 📌
                    </span>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ============================================================ */}
        {/* 4. AIRMAIL STRIPED FOOTER BANNER ACCENT */}
        {/* ============================================================ */}
        <div className="mt-16 rounded-3xl border-2 border-black/15 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Airmail striped border header */}
          <div className="h-2.5 w-full bg-[repeating-linear-gradient(45deg,#ef4444,#ef4444_15px,#ffffff_15px,#ffffff_25px,#3b82f6_25px,#3b82f6_40px,#ffffff_40px,#ffffff_50px)] rounded-t-lg absolute top-0 left-0 right-0" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
            <div className="text-left space-y-1">
              <span className="font-handwriting text-xl font-bold text-emerald-950 block">
                ⚡ Ready to experience the model?
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
                Let's Build Your Project Together
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
                From consultation to final delivery, we take care of everything so you can focus on scale.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-xs font-black uppercase text-[#c9f31d] tracking-wider shadow-xl transition-all hover:bg-[#c9f31d] hover:text-black hover:scale-105 shrink-0"
            >
              <i className="fas fa-paper-plane text-xs" /> Start A Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
