"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import TornEdgeDivider from "./TornEdgeDivider";
import { FOOTER } from "@/lib/data";

const SERVICES_OPTIONS = [
  "Branding",
  "Web Development",
  "SEO",
  "Video Production",
  "Paid Ads",
  "Social Media",
];

const BUDGET_OPTIONS = ["< $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];

export default function ContactPageContent() {
  const [selectedService, setSelectedService] = useState<string>("Branding");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5,000 - $15,000");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-24 bg-[#0e0f11]">
      {/* ============================================================ */}
      {/* 1. DARK BANNER HEADER SECTION (Theme: Obsidian #0e0f11) */}
      {/* ============================================================ */}
      <section className="relative pt-8 pb-16 md:pb-24 bg-[#0e0f11] text-white overflow-hidden">
        {/* Decorative background grid & floating paper fragments */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9f31d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Floating Paper Scrap Accents */}
        <div className="tape-strip top-12 left-10 -rotate-12 hidden lg:block opacity-40" />
        <div className="tape-strip bottom-20 right-14 rotate-45 hidden lg:block opacity-40" />

        <div className="container-x relative z-10">
          {/* <Breadcrumb title="Contact Us" crumb="Contact" /> */}

          <div className="mt-8 mx-auto max-w-4xl text-center">
            {/* Pill Section Label */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c9f31d] px-5 py-1.5 text-xs font-black text-black uppercase tracking-wider shadow-lg mb-6">
              <i className="fas fa-paper-plane" /> GET IN TOUCH
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-tight">
              Let's Rip Open <br className="hidden sm:inline" />
              <span className="font-handwriting text-[#c9f31d] text-5xl md:text-7xl underline decoration-wavy decoration-[#c9f31d]">
                Bright Side Ideas
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let’s collaborate! Contact us today to begin your brand's digital transformation and achieve outstanding results with our expert team.
            </p>

            {/* Postmark Stamp Graphic Badge */}
            <div className="mt-8 flex justify-center">
              <div className="postmark-stamp text-[#c9f31d]">
                <span className="text-xs font-bold uppercase tracking-widest text-white">BRIGHT MEDIA POST</span>
                <span className="font-handwriting text-2xl font-bold text-[#c9f31d]">⚡ 24h Fast Response</span>
                <span className="text-[10px] text-gray-400">GLOBAL CREATIVE STUDIO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TORN PAPER EDGE TRANSITION (Dark Banner -> Light Section) */}
      {/* ============================================================ */}
      <TornEdgeDivider fillColor="#f7f7f3" />

      {/* ============================================================ */}
      {/* 2. LIGHT SECTION CONTENT (Theme: Light Paper #f7f7f3) */}
      {/* ============================================================ */}
      <section className="relative py-12 md:py-24 paper-canvas-light text-heading">
        <div className="container-x relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* LEFT 7 COLS: TORN PAPER LETTER CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="torn-paper-card p-6 md:p-10 rounded-2xl bg-white border-2 border-black/10 shadow-2xl relative">
                {/* Tape strip top accents */}
                <div className="tape-strip -top-3 left-8 -rotate-3" />
                <div className="tape-strip -top-3 right-8 rotate-3" />

                {/* Airmail Envelope Stripe Header Accent */}
                <div className="h-2.5 w-full bg-[repeating-linear-gradient(45deg,#C9F31D,#C9F31D_15px,#ffffff_15px,#ffffff_25px,#000000_25px,#000000_40px,#ffffff_40px,#ffffff_50px)] rounded-t-lg mb-6" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                  <div>
                    <span className="font-handwriting text-3xl font-bold text-gray-900 block">
                      ✉️ Ripped Letter Form
                    </span>
                    <p className="text-xs text-gray-600">Fill in the fields below to start your project.</p>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-[#c9f31d] uppercase tracking-wider">
                    Official Inquiry
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="my-12 rounded-2xl bg-[#c9f31d] p-8 text-center text-black shadow-xl rotate-1">
                    <i className="fas fa-[#c9f31d] fa-check-circle text-5xl mb-3 text-black" />
                    <h3 className="font-handwriting text-4xl font-bold">Message Received &amp; Pinned!</h3>
                    <p className="mt-2 text-sm font-bold">
                      Thank you, {formData.name}! Your note has been pinned to our priority inbox board. Our team will reach out to <span className="underline">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 rounded-full bg-black px-6 py-2.5 text-xs font-black text-[#c9f31d] transition-transform hover:scale-105"
                    >
                      Send Another Note <i className="fas fa-redo ml-1" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Select Service Needed Pills */}
                    <div>
                      <label className="block text-xs font-black uppercase text-gray-700 tracking-wider mb-2">
                        1. What Service Do You Need?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES_OPTIONS.map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setSelectedService(srv)}
                            className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all ${
                              selectedService === srv
                                ? "bg-[#c9f31d] text-black shadow-md scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-black/5"
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Select Budget Pills */}
                    {/* <div>
                      <label className="block text-xs font-black uppercase text-gray-700 tracking-wider mb-2">
                        2. Estimated Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_OPTIONS.map((bg) => (
                          <button
                            key={bg}
                            type="button"
                            onClick={() => setSelectedBudget(bg)}
                            className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all ${
                              selectedBudget === bg
                                ? "bg-black text-[#c9f31d] shadow-md scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-black/5"
                            }`}
                          >
                            {bg}
                          </button>
                        ))}
                      </div>
                    </div> */}

                    {/* Input Fields */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-black/15 bg-gray-50/50 px-4 py-3 text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9f31d]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-black/15 bg-gray-50/50 px-4 py-3 text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9f31d]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-black/15 bg-gray-50/50 px-4 py-3 text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9f31d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">
                        Project Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your brand goals, timeline, or requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-black/15 bg-gray-50/50 px-4 py-3 text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9f31d]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-black px-8 py-4 text-sm font-black uppercase text-[#c9f31d] shadow-xl transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>Submit Now</span>
                      <i className="fas fa-arrow-right" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT 5 COLS: RIPPED PAPER OFFICE CARDS & QUICK CONTACT */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2">
                <span className="font-handwriting text-3xl font-bold text-gray-900">
                  📌 Global Office Locations
                </span>
              </div>

              {/* 3 RIPPED OFFICE CARDS */}
              {FOOTER.locations.map((loc, i) => (
                <div
                  key={loc.country}
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1.5}deg)` }}
                  className="torn-paper-card p-6 bg-white border border-black/10 rounded-xl shadow-lg relative group transition-transform hover:scale-105"
                >
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-map-pin text-[#c9f31d] text-lg" />
                      <h3 className="font-black text-lg text-gray-900">{loc.country} OFFICE </h3>
                    </div>
                    {/* <span className="font-handwriting text-lg font-bold text-gray-500">
                      Studio #{i + 1}
                    </span> */}
                  </div>

                  <p className="mt-3 text-sm font-semibold text-gray-700 leading-relaxed">
                    {loc.address}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs font-bold text-black border-t border-black/5 pt-3">
                    <a
                      href={`tel:${loc.phone}`}
                      className="inline-flex items-center gap-1.5 hover:text-lime-600"
                    >
                      <i className="fas fa-phone-alt text-lime-600" /> {loc.phone}  
                    </a>
                    {/* <a
                      href={loc.email}
                      className="inline-flex items-center gap-1.5 hover:text-lime-600"
                    >
                      <i className="fas fa-envelope text-lime-600" /> {loc.email}
                    </a> */}
                  </div>
                </div>
              ))}

              {/* QUICK DIRECT CONTACT CARDS */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:info@dixor.com"
                  className="rounded-2xl bg-[#feef8f] p-5 text-gray-900 shadow-md border border-amber-300 rotate-[2deg] transition-transform hover:scale-105"
                >
                  <span className="font-handwriting text-xl font-bold block text-amber-900">✉️ Email Support</span>
                  <p className="font-black text-base mt-1">info@brightmedia.tech</p>
                  {/* <span className="text-[10px] font-bold text-gray-600">Mon-Fri (9am - 6pm GMT)</span> */}
                </a>

                <a
                  href="mailto:info@dixor.com"
                  className="rounded-2xl bg-[#99f6e4] p-5 text-gray-900 shadow-md border border-teal-300 rotate-[2deg] transition-transform hover:scale-105"
                >
                  <span className="font-handwriting text-xl font-bold block text-teal-950">✉️ Email Support</span>
                  <p className="font-black text-base mt-1">hello@brightmedia.tech</p>
                  {/* <span className="text-[10px] font-bold text-gray-600">24/7 Priority Mailbox</span> */}
                </a>
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* MAP & FAQ BOARD SECTION */}
          {/* ============================================================ */}
          <div className="mt-20 border-t border-black/10 pt-16">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="font-handwriting text-4xl font-bold text-gray-900">
                🗺️ Find Us &amp; Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Quick answers pinned to paper and interactive map navigation.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* MAP EMBED (7 COLS) */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative h-80 lg:h-full min-h-[320px]">
                <iframe
                  title="Bright Media Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.544158428807!2d74.8413!3d12.8654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c33000000%3A0x0!2sMangalore!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>

              {/* PINNED FAQ NOTES (5 COLS) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-xl bg-[#c9f31d] p-5 text-black shadow-md border border-black/20 rotate-[-1deg]">
                  <span className="font-handwriting text-xl font-bold block text-black/80">❓ How fast will I get a quote?</span>
                  <p className="text-xs font-extrabold mt-1">
                    We review incoming notes within 4–8 business hours and provide a detailed proposal document.
                  </p>
                </div>

                <div className="rounded-xl bg-[#fecdd3] p-5 text-gray-950 shadow-md border border-rose-300 rotate-[1.5deg]">
                  <span className="font-handwriting text-xl font-bold block text-rose-950">❓ Do you accept global clients?</span>
                  <p className="text-xs font-extrabold mt-1">
                    Yes! We work with clients across India, Europe, Middle East, Africa, and North America.
                  </p>
                </div>

                <div className="rounded-xl bg-[#e9d5ff] p-5 text-purple-950 shadow-md border border-purple-300 rotate-[-1deg]">
                  <span className="font-handwriting text-xl font-bold block text-purple-950">❓ Can we schedule a video consultation?</span>
                  <p className="text-xs font-extrabold mt-1">
                    Absolutely. Once you send a note, we'll send a direct Google Meet / Zoom link to align on details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
