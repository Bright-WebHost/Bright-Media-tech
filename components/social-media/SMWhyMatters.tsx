"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { value: "3.96B", label: "Social media users worldwide" },
  { value: "73%", label: "Marketers believe social media is effective" },
  { value: "54%", label: "Users research products on social media" },
  { value: "80%", label: "Purchase decisions influenced by social content" },
];

const reasons = [
  {
    icon: "fas fa-bullseye",
    title: "Unmatched Brand Reach",
    body: "Social media gives your brand direct access to billions of potential customers across the globe — at a fraction of traditional advertising costs.",
  },
  {
    icon: "fas fa-users",
    title: "Build Real Relationships",
    body: "Unlike any other channel, social media lets you have genuine two-way conversations with your audience, building trust and lasting loyalty.",
  },
  {
    icon: "fas fa-rocket",
    title: "Accelerate Growth",
    body: "Viral content, influencer partnerships, and community-driven momentum can propel your brand to new heights faster than ever before.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Stay Competitive",
    body: "Your competitors are already there. An active, strategic social presence ensures you remain relevant and top-of-mind in your industry.",
  },
];

export default function SMWhyMatters() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

      <div className="container-x relative z-10">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <h4 className="section-label justify-center">Why It Matters</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
            Social Media Is No Longer Optional
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/50">
            The brands winning in today&apos;s digital landscape are the ones showing up
            consistently, engaging authentically, and growing strategically on social.
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/8 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-black text-primary md:text-4xl">
                {s.value}
              </div>
              <p className="mt-2 text-xs leading-snug text-white/50 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </Reveal>

        {/* Reasons grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-white/8"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/0 transition-all duration-500 group-hover:bg-primary/5" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-dark">
                <i className={`${r.icon} text-lg`} />
              </div>

              <h4 className="mb-3 text-lg font-bold text-white">{r.title}</h4>
              <p className="text-sm leading-relaxed text-white/50">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
