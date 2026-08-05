"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const tools = [
  { name: "Meta Business Suite", icon: "fab fa-meta", color: "#0668E1" },
  { name: "Instagram", icon: "fab fa-instagram", color: "#E1306C" },
  { name: "Facebook", icon: "fab fa-facebook-f", color: "#1877F2" },
  { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "#0A66C2" },
  // { name: "TikTok", icon: "fab fa-tiktok", color: "#69C9D0" },
  // { name: "YouTube", icon: "fab fa-youtube", color: "#FF0000" },
  // { name: "Google Analytics", icon: "fab fa-google", color: "#F4B400" },
  // { name: "Canva", icon: "fas fa-swatchbook", color: "#00C4CC" },
  // { name: "Adobe Creative Suite", icon: "fab fa-adobe", color: "#FF0000" },
  // { name: "Hootsuite", icon: "fas fa-rss", color: "#143059" },
  // { name: "SemRush", icon: "fas fa-search-dollar", color: "#FF642D" },
  // { name: "Adobe Photoshop", icon: "fas fa-image", color: "#31A8FF" },
];

function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}

export default function SMTools() {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <GridPattern />
      <div className="container-x">
        <Reveal className="mb-16 text-center">
          <h4 className="section-label justify-center">Our Toolbox</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
            Tools &amp; Platforms We Use
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paragraph">
            We leverage the best-in-class tools to manage, create, publish, and analyse
            your social media presence with precision and scale.
          </p>
        </Reveal>

        {/* Tools grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-[#f9f9f9] p-6 text-center transition-all duration-300 hover:border-primary hover:shadow-md"
            >
              {/* Icon circle */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: tool.color }}
              >
                <i className={`${tool.icon} text-2xl`} />
              </div>
              <span className="text-sm font-semibold text-heading">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
