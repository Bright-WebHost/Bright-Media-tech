"use client";

import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { motion } from 'framer-motion';
import { Wrench, Settings, Terminal} from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const stats = [
  { value: 360, suffix: "K", label: "World Customer", accent: false },
  { value: 98, suffix: "%", label: "Positive Rating", accent: false },
  { value: 874, suffix: "+", label: "Total Branch", accent: false },
  { value: 35, suffix: "", label: "Years experience", accent: true },
];
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

// The original page shows 4 overlapping circles in a horizontal band,
// each progressively larger, with slight vertical offsets to create visual depth.
const circleConfig = [
  {
    size: "h-[260px] w-[260px] lg:h-[310px] lg:w-[310px]",
    offset: "mt-8 lg:mt-16",
    border: "border border-white/10",
    bg: "bg-dark-secondary",
  },
  {
    size: "h-[300px] w-[300px] lg:h-[360px] lg:w-[360px]",
    offset: "-ml-8 lg:-ml-12 mt-0",
    border: "border border-white/10",
    bg: "bg-dark-secondary",
  },
  {
    size: "h-[330px] w-[330px] lg:h-[400px] lg:w-[400px]",
    offset: "-ml-8 lg:-ml-12 -mt-6 lg:-mt-8",
    border: "border border-white/10",
    bg: "bg-dark-secondary",
  },
  {
    size: "h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]",
    offset: "-ml-8 lg:-ml-12",
    border: "border border-white/10",
    bg: "bg-dark",
  },
];

function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 opacity-[0.4] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #5d5b5b65 1px, transparent 1px),
          linear-gradient(to bottom, #72727375 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

export default function AboutStats() {
  return (
    <>
    {/* <section className="overflow-hidden bg-dark">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex items-center justify-center py-8">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              direction="up"
              delay={i * 0.1}
              className={`relative flex flex-shrink-0 flex-col items-center justify-center rounded-full ${circleConfig[i].border} ${circleConfig[i].bg} ${circleConfig[i].size} ${circleConfig[i].offset}`}
            >
              <span
                className={`text-4xl font-black lg:text-6xl xl:text-7xl ${
                  stat.accent ? "text-primary" : "text-white"
                }`}
              >
                <Counter to={stat.value} />
                {stat.suffix}
              </span>
              <span className="mt-2 text-center text-xs font-medium text-white/60 lg:text-sm">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section> */}
    <section className="relative overflow-hidden bg-[#f2f2f2] py-20 sm:py-32 border-t border-slate-200">
        <GridPattern className="opacity-[0.1]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <div className={`${mono.className} inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9F31D] mb-4`}>
                <Terminal size={14} />
                <span>ABOUT BRIGHT MEDIA</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl lg:text-6xl">
                We provide services <br />
                <span className="text-black/40">and solutions.</span>
              </h2>
            </div>
            <p className="text-lg text-black/40 font-light lg:justify-self-end lg:max-w-md lg:pb-2">
              We at bright media are a team of highly creative, skilled and dedicated individuals, focussing more on adding value to our Clients brands by optimizing and leveraging.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Installation Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#09252a] bg-[#BCFF00]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-2"
            >
              <div className={`${mono.className} absolute top-0 right-0 bg-[#000000] px-4 py-2 rounded-bl-xl text-[10px] font-bold text-white uppercase tracking-widest`}>
                Vision
              </div>
              
              <div className="mb-8 inline-flex rounded-2xl bg-black/40 p-4 border border-white/10 text-white shadow-inner">
                <Wrench size={32} className="group-hover:text-[#ffffff] transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight text-black">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black/40 font-light">
                To become a globally trusted creative digital agency that transforms ambitious ideas into impactful brands through innovation, design excellence, and cutting-edge technology. We envision a future where every business, regardless of its size, has access to world-class digital experiences that inspire, engage, and drive meaningful growth.
              </p>
              
              {/* <div className={`${mono.className} mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest`}>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> POSITIONING</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> WIRING</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> CONFIG</span>
              </div> */}
            </motion.div>

            {/* Maintenance Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#09252a] bg-[#BCFF00]/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-2"
            >
              <div className={`${mono.className} absolute top-0 right-0 bg-[#000000] px-4 py-2 rounded-bl-xl text-[10px] font-bold text-white uppercase tracking-widest`}>
                Mission
              </div>
              
              <div className="mb-8 inline-flex rounded-2xl bg-black/40 p-4 border border-white/10 text-black shadow-inner">
                <Settings size={32} className="group-hover:text-[#ffffff] transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight text-black">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black/40 font-light">
                Our mission is to empower businesses with strategic branding, exceptional web experiences, and data-driven digital marketing solutions. By combining creativity, technology, and measurable results, we help our clients build lasting relationships with their audiences, strengthen their online presence, and achieve sustainable success in an ever-evolving digital world.
              </p>

              {/* <div className={`${mono.className} mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest`}>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> 24/7 SUPPORT</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> DIAGNOSTICS</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> UPGRADES</span>
              </div> */}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
