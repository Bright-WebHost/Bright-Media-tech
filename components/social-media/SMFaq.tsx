"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const faqs = [
  {
    q: "How soon will I see results from social media marketing?",
    a: "Most clients begin to see meaningful improvements in engagement and reach within 60–90 days. Sustainable growth — including follower acquisition and lead generation — typically builds over 3–6 months as your content library and audience trust compound.",
  },
  {
    q: "Which social media platforms do you manage?",
    a: "We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, YouTube, and X (Twitter). We recommend the right platform mix based on your audience demographics and business goals — not just what's trendy.",
  },
  {
    q: "Do you create the content, or do we need to provide it?",
    a: "We handle everything — strategy, creative direction, design, copywriting, and video editing. You can provide brand assets, product shots, or team photos, but it's not required. Our team can create fully custom content from scratch.",
  },
  {
    q: "How is success measured and reported?",
    a: "We provide monthly performance reports covering reach, impressions, engagement rate, follower growth, website traffic from social, and conversions. Every metric is benchmarked against your goals and previous periods.",
  },
  {
    q: "What makes Bright Media different from other social media agencies?",
    a: "We're a results-first, data-driven team that combines creative storytelling with strategic performance marketing. We don't offer cookie-cutter packages — every strategy is built from scratch for your brand, your audience, and your goals.",
  },
  {
    q: "Can I approve content before it's published?",
    a: "Absolutely. Every piece of content goes through an approval workflow before publishing. You'll review and approve all posts via a shared content calendar — nothing goes live without your sign-off.",
  },
];

export default function SMFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
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
      <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-16 text-center">
            <h4 className="section-label justify-center">FAQ</h4>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/50">
              Everything you need to know about working with us on social media marketing.
            </p>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm transition-colors hover:border-white/12">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold transition-colors duration-200 ${
                      open === i ? "text-primary" : "text-white hover:text-white/80"
                    }`}
                  >
                    <span className="text-base">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
                        open === i ? "bg-primary text-dark" : "bg-white/8 text-white"
                      }`}
                    >
                      <i className="fas fa-plus text-xs" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-white/55">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
