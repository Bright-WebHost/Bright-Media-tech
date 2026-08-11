"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import Lanyard from "@/components/Lanyard";

const benefits = [
  {
    icon: "fas fa-eye",
    title: "Increased Brand Awareness",
    desc: "Consistent, strategic posting puts your brand in front of more eyeballs every single day.",
  },
  {
    icon: "fas fa-heart",
    title: "Enhanced Audience Engagement",
    desc: "When you show up authentically, your audience becomes your most powerful advocates.",
  },
  {
    icon: "fas fa-funnel-dollar",
    title: "Growth in Followership",
    desc: "Engaged audiences trust your brand more — and trust drives sales more than any other factor.",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Higher Website Traffic",
    desc: "Organic + paid social working together creates a compounding effect that maximises every spend.",
  },
  {
    icon: "fas fa-seedling",
    title: "Measurable Results",
    desc: "Unlike one-time campaigns, a strong social presence compounds over time — your asset, not a cost.",
  },
  {
    icon: "fas fa-trophy",
    title: "Improved Brand Reputation",
    desc: "Position your brand as the definitive authority in your space, making competitors an afterthought.",
  },
];

export default function SMBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0e] py-20 sm:py-28 text-white">
      {/* Background Radial & Architectural Grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,243,29,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-x relative z-10">
        {/* Section Header */}
        {/* <Reveal className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <span>⚡ Agency Verified Value</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            The Benefits of 
            <span className="text-stroke" style={{ WebkitTextStroke: "1.5px #c9f31d", color: "transparent" }}>
               Social Media
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/60">
            When social media is executed strategically, it transforms into your most powerful and cost-effective digital growth engine.
          </p>
        </Reveal> */}

        {/* 2-Column Layout: Left (Benefits Grid) | Right (Interactive 3D Lanyard) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* LEFT 7 COLS: Benefits Cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
  <motion.div
    key={b.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-5 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary/5"
  >
    {/* Icon */}
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:scale-110">
      <i className={`${b.icon} text-base`} />
    </div>
    {/* Title */}
    <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
      {b.title}
    </h4>
  </motion.div>
))}
            </div>
          </div>

          {/* RIGHT 5 COLS: Lime Color Sticky Note ("Our Tools") */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
              className="relative w-full max-w-md rounded-3xl bg-[#c9f31d] p-6 sm:p-8 text-[#0e0f11] shadow-2xl border-2 border-black/20 select-none transition-all duration-300"
              style={{
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5), 0 0 25px 2px rgba(201,243,29,0.3)",
              }}
            >
              {/* Top Scotch Tape Strip */}
              <div className="tape-strip -top-3.5 left-1/2 -translate-x-1/2 -rotate-2" />

              {/* 3D Push Pin Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-white shadow-md" />
              </div>

              {/* Sticky Note Header */}
              <div className="border-b-2 border-black/15 pb-4">
                <div className="flex items-center justify-between">
                  {/* <span className="rounded-full bg-black px-3 py-1 text-[10px] font-black uppercase text-[#c9f31d] tracking-wider">
                    ⚡ Social Stack
                  </span> */}
                  <span className="font-handwriting text-xl font-bold text-black/70">
                    Our Social Media Tools 📌
                  </span>
                </div>

                {/* <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                  Our Tools
                </h3> */}
                {/* <p className="mt-1 text-xs font-medium text-black/75">
                  High-performance platform ecosystem we use to scale your social presence.
                </p> */}
              </div>

              {/* 4 Tools Grid (Image / Icon + Title below) */}
              <div className="grid grid-cols-2 gap-3.5 pt-5">
                {/* 1. Facebook */}
                <div className="group/tool flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-black/[0.06] p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105">
                  {/* Facebook Icon Image Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-md transition-transform duration-300 group-hover/tool:scale-110">
                    <i className="fab fa-facebook-f text-2xl" />
                  </div>
                  {/* Title Below Image */}
                  <span className="mt-2.5 text-[11px] font-bold text-black/100">SemRush</span>
                  {/* <span className="text-[10px] font-bold text-black/60">Community &amp; Ads</span> */}
                </div>

                {/* 2. Instagram */}
                <div className="group/tool flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-black/[0.06] p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105">
                  {/* Instagram Icon Image Badge (Gradient) */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-300 group-hover/tool:scale-110"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    }}
                  >
                    <i className="fab fa-instagram text-2xl" />
                  </div>
                  {/* Title Below Image */}
                  <span className="mt-2.5 text-[11px] font-bold text-black/100">Hootsuite</span>
                  {/* <span className="text-[10px] font-bold text-black/60">Reels &amp; Visuals</span> */}
                </div>

                {/* 3. LinkedIn */}
                <div className="group/tool flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-black/[0.06] p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105">
                  {/* LinkedIn Icon Image Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A66C2] text-white shadow-md transition-transform duration-300 group-hover/tool:scale-110">
                    <i className="fab fa-linkedin-in text-2xl" />
                  </div>
                  {/* Title Below Image */}
                  <span className="mt-2.5 text-[11px] font-bold text-black/100">Adobe Photoshop</span>
                  {/* <span className="text-[10px] font-bold text-black/60">B2B Authority</span> */}
                </div>

                {/* 4. Meta */}
                <div className="group/tool flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-black/[0.06] p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105">
                  {/* Meta Icon Image Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0668E1] text-white shadow-md transition-transform duration-300 group-hover/tool:scale-110">
                    <i className="fab fa-meta text-2xl" />
                  </div>
                  {/* Title Below Image */}
                  <span className="mt-2.5 text-[11px] font-bold text-black/100">Meta Business Suite</span>
                  {/* <span className="text-[10px] font-bold text-black/60">Business Suite</span> */}
                </div>
              </div>

              {/* Sticky Note Footer Strip */}
              {/* <div className="mt-5 pt-3.5 border-t border-black/15 flex items-center justify-between text-xs font-black">
                <span className="font-mono text-[11px] text-black/80">📈 Multi-Channel ROAS</span>
                <span className="font-handwriting text-sm text-black/70">Pinned on desk 📌</span>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
