"use client";

import { motion } from "framer-motion";
import Reveal, { RevealGroup, childVariants } from "@/components/motion/Reveal";

const detailedServices = [
  {
    no: "01",
    icon: "fas fa-chart-network",
    title: "Social Media Strategy",
    desc: "A comprehensive roadmap tailored to your brand — audience research, competitive analysis, platform selection, content pillars, and KPI definition.",
    tags: ["Audience Research", "Competitive Analysis", "KPI Planning"],
  },
  {
    no: "02",
    icon: "fas fa-paint-brush",
    title: "Content Creation & Design",
    desc: "From reels and carousels to infographics and stories, our creative team produces scroll-stopping content that converts followers into customers.",
    tags: ["Reels & Videos", "Graphic Design", "Copywriting"],
  },
  {
    no: "03",
    icon: "fas fa-calendar-check",
    title: "Content Scheduling",
    desc: "Strategic scheduling with optimal posting times. We manage your content calendar, ensuring a consistent and high-quality brand voice every day.",
    tags: ["Editorial Calendar", "Auto Scheduling", "A/B Testing"],
  },
  {
    no: "04",
    icon: "fas fa-comment-dots",
    title: "Community Management",
    desc: "We actively engage with your audience — responding to comments, messages, reviews, and mentions to build a loyal, thriving community.",
    tags: ["Comment Replies", "DM Management", "Crisis Response"],
  },
  {
    no: "05",
    icon: "fas fa-ad",
    title: "Paid Social Advertising",
    desc: "Data-driven ad campaigns on Meta, Instagram, LinkedIn, and TikTok that maximise reach and deliver measurable return on ad spend.",
    tags: ["Meta Ads", "LinkedIn Ads", "TikTok Ads"],
  },
  {
    no: "06",
    icon: "fas fa-analytics",
    title: "Performance Reporting",
    desc: "Monthly deep-dive reports with clear insights, benchmarks, and recommendations. Transparent data, no vanity metrics.",
    tags: ["Monthly Reports", "Benchmarking", "ROI Tracking"],
  },
];

export default function SMServicesOffered() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mb-16 text-center">
          <h4 className="section-label justify-center">What We Do</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-heading md:text-5xl">
            Services We Offer
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paragraph">
            End-to-end social media management built for brands that want to dominate
            their niche — not just exist in it.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailedServices.map((s, i) => (
            <motion.div
              key={s.title}
              variants={childVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group flex flex-col rounded-2xl border border-black/5 bg-[#f9f9f9] p-8 transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              {/* Number + icon row */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-black text-black/8">{s.no}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-heading transition-colors duration-300 group-hover:bg-primary group-hover:text-dark">
                  <i className={`${s.icon} text-lg`} />
                </div>
              </div>

              <h4 className="mb-3 text-xl font-bold text-heading">{s.title}</h4>
              <p className="flex-1 text-sm leading-relaxed text-paragraph">{s.desc}</p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-heading transition-colors group-hover:border-primary group-hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
