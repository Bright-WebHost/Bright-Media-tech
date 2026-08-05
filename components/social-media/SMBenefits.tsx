"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

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
    desc: "Organic + paid social working together creates a compounding effect that maximises every rupee spent.",
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
    <section className="relative overflow-hidden bg-dark py-24 ">
      {/* Radial gradient hero-style background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,243,29,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-x relative z-10">
        {/* <Reveal className="mb-16 text-center">
          <h4 className="section-label justify-center">Why Partner With Us</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
            The Benefits of Social Media Done Right
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/50">
            When social media is executed strategically, it becomes your most powerful
            and cost-effective marketing channel.
          </p>
        </Reveal> */}

        {/* Benefits grid — 2 columns on mobile, 3 on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="group flex gap-5 rounded-2xl border border-white/8 bg-white/4 p-7 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-white/7"
            >
              {/* Icon */}
              <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-dark">
                <i className={`${b.icon} text-lg`} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-white">{b.title}</h4>
                {/* <p className="text-sm leading-relaxed text-white/50">{b.desc}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
