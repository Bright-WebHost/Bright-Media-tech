"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";

// Torn Paper Bottom Jagged Clip Path
const TORN_NOTE_CLIP =
  "polygon(0% 0%, 100% 0%, 100% calc(100% - 14px), 98% calc(100% - 3px), 95% calc(100% - 12px), 92% calc(100% - 2px), 89% calc(100% - 15px), 85% calc(100% - 4px), 81% calc(100% - 13px), 77% calc(100% - 2px), 73% calc(100% - 15px), 69% calc(100% - 5px), 65% calc(100% - 13px), 61% calc(100% - 2px), 57% calc(100% - 16px), 53% calc(100% - 4px), 48% calc(100% - 15px), 44% calc(100% - 2px), 40% calc(100% - 14px), 36% calc(100% - 5px), 32% calc(100% - 16px), 27% calc(100% - 3px), 23% calc(100% - 13px), 19% calc(100% - 2px), 15% calc(100% - 15px), 11% calc(100% - 4px), 7% calc(100% - 13px), 3% calc(100% - 2px), 0% calc(100% - 11px))";

export default function SMCta() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-14 sm:py-20 text-[#0e0f11] border-t border-black/10">
      {/* Light Paper Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Wall Tape Accents */}
      <div className="tape-strip top-6 left-10 rotate-[-8deg] opacity-50 hidden sm:block !w-16 !h-4" />
      <div className="tape-strip top-8 right-12 rotate-[10deg] opacity-50 hidden md:block !w-16 !h-4" />

      <div className="container-x relative z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Main Card Container (Sticky Torn Note Style) */}
          <Reveal>
            <div
              style={{
                filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.12)) drop-shadow(0 4px 6px rgba(0,0,0,0.04))",
              }}
              className="relative"
            >
              <div
                style={{
                  clipPath: TORN_NOTE_CLIP,
                }}
                className="relative overflow-hidden rounded-t-2xl bg-white p-6 sm:p-10 pb-12 sm:pb-16 border-t-2 border-l-2 border-r-2 border-black/15"
              >
                {/* Faint Ruled Grid Overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Top Corner Tape Strips */}
                <div className="tape-strip -top-3 left-8 rotate-[-4deg] z-20 !w-16 !h-4 sm:!w-20 sm:!h-5" />
                <div className="tape-strip -top-3 right-8 rotate-[5deg] z-20 !w-16 !h-4 sm:!w-20 sm:!h-5" />

                <div className="grid gap-8 lg:grid-cols-12 items-center relative z-10">
                  {/* Left Column: Heading & Quick Contacts */}
                  <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#c9f31d] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-2xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                      <span>START A PROJECT</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                      Ready to Scale{" "}
                      <span className="font-handwriting text-3xl sm:text-5xl text-emerald-800 underline decoration-wavy decoration-[#c9f31d] normal-case inline-block">
                        Your Brand?
                      </span>
                    </h2>

                    <p className="text-xs sm:text-sm text-black/70 font-medium leading-relaxed">
                      Drop us a quick note below. We&apos;ll review your social presence and get back with a tailored action plan.
                    </p>

                    {/* Direct Contact Links */}
                    <div className="pt-2 flex flex-col gap-2 text-xs font-bold text-black/80 items-center lg:items-start">
                      <a
                        href="tel:+918548005588"
                        className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors"
                      >
                        <i className="fas fa-phone-alt text-[#65a30d]" />
                        <span>+91 854 800 5588</span>
                      </a>
                      <a
                        href="mailto:contact@brightmedia.tech"
                        className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors"
                      >
                        <i className="fas fa-envelope text-[#65a30d]" />
                        <span>contact@brightmedia.tech</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Small Minimal Form */}
                  <div className="lg:col-span-7">
                    {!submitted ? (
                      <form
                        onSubmit={handleSubmit}
                        className="rounded-xl bg-[#faf8f5] p-5 sm:p-6 border border-black/15 shadow-inner space-y-3.5"
                      >
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-black/70 mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="e.g. John Doe"
                              className="w-full rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-xs font-medium text-black placeholder:text-black/40 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-black/70 mb-1">
                              Email or Phone *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.contact}
                              onChange={(e) =>
                                setFormData({ ...formData, contact: e.target.value })
                              }
                              placeholder="e.g. john@company.com"
                              className="w-full rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-xs font-medium text-black placeholder:text-black/40 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-black/70 mb-1">
                            How can we help?
                          </label>
                          <textarea
                            rows={2}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Tell us briefly about your goals or requirements..."
                            className="w-full rounded-lg border border-black/15 bg-white px-3.5 py-2 text-xs font-medium text-black placeholder:text-black/40 focus:border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-lg bg-[#c9f31d] border border-black/20 py-2.5 px-4 text-xs font-black uppercase tracking-wider text-black shadow-sm transition-all hover:bg-black hover:text-[#c9f31d] active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                          <span>Send Message</span>
                          <i className="fas fa-arrow-right text-[10px]" />
                        </button>
                      </form>
                    ) : (
                      /* Success Message */
                      <div className="rounded-xl bg-[#d8f938]/30 border border-[#65a30d]/40 p-6 text-center space-y-2">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#c9f31d] text-black shadow-xs">
                          <i className="fas fa-check" />
                        </div>
                        <h4 className="text-base font-black uppercase text-black">
                          Message Received!
                        </h4>
                        <p className="text-xs text-black/70 font-medium max-w-sm mx-auto">
                          Thank you, {formData.name}. Our social media strategist will reach out to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {/* Trust Indicators */}
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold text-black/50 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-bolt text-[#65a30d]" /> 24h Response
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-lock text-[#65a30d]" /> 100% Confidential
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-check-circle text-[#65a30d]" /> Free Consultation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
