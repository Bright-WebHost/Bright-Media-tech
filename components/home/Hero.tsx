import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/lib/data";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import FloatY from "@/components/motion/FloatY";

function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 opacity-[0.4] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #5d5b5b65 1px, transparent 1px),
          linear-gradient(to bottom, #72727375 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-graybg pt-28 sm:pt-36 lg:pt-48 pb-12 sm:pb-16 dark:bg-dark">
      <GridPattern className="opacity-[0.1]" />
      <div className="container-x relative z-10 px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-[18vw] font-bold uppercase leading-[1.05] text-heading dark:text-white sm:text-[12vw] lg:text-[4.5rem]">
              <SplitText text={HERO.titleTop} className="block" />
              <SplitText
                text={HERO.titleBottom}
                className="block sm:text-right sm:pl-10 md:pl-20"
                delay={0.15}
              />
            </h1>
          </div>

          {/* Floating image — desktop only */}
          <FloatY
            className="relative mx-auto hidden aspect-[500/639] w-full max-w-[220px] lg:block"
            duration={6}
          >
            <div className="relative h-full w-full">
              <Image src={HERO.image} alt="" fill className="object-contain" priority />
            </div>
          </FloatY>
        </div>

        {/* Bottom info row */}
        <div className="mt-10 sm:mt-12 lg:mt-2 grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-start">
          <Reveal
            direction="up"
            className="lg:col-span-8 flex flex-col sm:flex-row gap-5 sm:gap-8 lg:gap-16 pt-2"
          >
            <h4 className="shrink-0 text-lg sm:text-xl font-bold uppercase tracking-wide text-heading dark:text-white">
              {HERO.brand}
            </h4>
            <div className="w-full">
              <div className="mb-4 sm:mb-8 h-[1px] w-full bg-gray-300 dark:bg-white/30" />
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {HERO.description}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15} className="lg:col-span-4">
            <div className="flex items-end justify-between rounded-[1.5rem] sm:rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white p-6 sm:p-8 pb-8 sm:pb-10 text-heading dark:bg-[#0a0a0a] dark:text-white">
              <div>
                <div className="flex items-end gap-1">
                  <Counter
                    to={Number(HERO.stat.value)}
                    className="text-[3rem] sm:text-[4rem] leading-none font-bold"
                  />
                  <span className="text-[3rem] sm:text-[4rem] leading-none font-bold">
                    {HERO.stat.suffix}
                  </span>
                </div>
                <span className="mt-3 sm:mt-4 block text-sm font-bold opacity-90">
                  {HERO.stat.label}
                </span>
              </div>
              <Link
                href="/services"
                aria-label="View projects"
                className="flex h-12 w-12 sm:h-14 sm:w-14 mb-2 items-center justify-center rounded-full bg-heading text-white dark:bg-white dark:text-black transition-transform hover:scale-110"
              >
                <i className="fas fa-arrow-right -rotate-45 text-base sm:text-lg" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <FloatY
        className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        duration={7}
        distance={40}
      >
        <span />
      </FloatY>
    </section>
  );
}
