"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

const partners = [
  {
    category: "TECH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bing_Fluent_Logo.svg/120px-Bing_Fluent_Logo.svg.png",
    name: "Bing",
    url: "access.org",
  },
  {
    category: "SOLUTION",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/120px-Google_Gemini_logo.svg.png",
    name: "Gemini",
    url: "nexttech.it",
  },
  {
    category: "BRAND",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/120px-Spotify_logo_without_text.svg.png",
    name: "Spotify",
    url: "teamapt.tech",
  },
];

export default function AboutPartners() {
  return (
    <section className="overflow-hidden bg-dark py-24">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - dual overlapping images */}
          <Reveal direction="right" className="relative">
            <div className="relative h-[500px]">
              <div className="absolute left-0 top-0 h-[320px] w-[340px] overflow-hidden rounded-2xl">
                <Image
                  src="/media/45.bd61eeba.jpg"
                  alt="Partner team"
                  width={340}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-[280px] w-[320px] overflow-hidden rounded-2xl">
                <Image
                  src="/media/46.c80e7fb3.jpg"
                  alt="Partner workspace"
                  width={320}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right - content */}
          <Reveal direction="left">
            <span className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              OUR PARTNER
            </span>
            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Our Trusted Partner.
            </h2>
            <p className="mt-5 leading-relaxed text-white/60">
              Perceived determine departure explained no forfeite. Give lady of they such they sure
              it. Me contained explained my education. Vulgar as hearts by garret. Perceived
              determine departure explained no forfeited he something an
            </p>

            {/* Partner cards */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="group rounded-2xl border border-white/10 bg-dark-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-white/40">
                    {p.category}
                  </span>
                  <div className="mb-4 flex items-center gap-2">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-lg font-bold text-white">{p.name}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-dark transition-opacity hover:opacity-80"
                  >
                    {p.url}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
