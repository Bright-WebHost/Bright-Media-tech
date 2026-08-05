import Image from "next/image";
import Link from "next/link";
import { ABOUT, ARROW } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import ScrollFillText from "@/components/motion/ScrollFillText";

export default function About() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container-x relative px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:items-start">
          {/* Image */}
          <Reveal direction="right" className="lg:col-span-5 relative z-0">
            <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] w-full h-[300px] sm:h-[420px] lg:h-[500px]">
              <Image
                src={ABOUT.image}
                alt=""
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="left" className="lg:col-span-7 lg:col-start-6 pt-4 sm:pt-12 relative z-10">
            <div className="flex items-start gap-4 sm:gap-6">
              <Link href="/services" className="mt-2 hidden flex-none sm:block">
                <Image
                  src={ARROW}
                  alt=""
                  width={100}
                  height={100}
                  className="h-20 w-20 object-contain brightness-0"
                />
              </Link>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.1]">
                <ScrollFillText text={ABOUT.heading} />
              </h2>
            </div>

            <div className="mt-6 sm:mt-8 sm:ml-22 max-w-2xl">
              <ScrollFillText
                text={ABOUT.text}
                className="text-base sm:text-lg leading-relaxed font-medium"
              />
            </div>
          </Reveal>
        </div>

        {/* Service Cards */}
        <div className="group/wrapper grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-20 mt-8 sm:mt-12 lg:-mt-[11rem] w-full lg:w-[67%] lg:ml-auto">
          {ABOUT.services.map((s, i) => {
            if (i === 0) {
              return (
                <Link
                  key={s.no}
                  href="/services"
                  className="group/card flex flex-col justify-between rounded-xl sm:rounded-[0.5rem] p-5 sm:p-6 h-28 sm:h-[9rem] transition-colors duration-300 bg-[#cfff10] text-dark border border-transparent group-has-[a:hover]/wrapper:bg-[#101010] group-has-[a:hover]/wrapper:text-white group-has-[a:hover]/wrapper:border-white/5 hover:!bg-[#cfff10] hover:!text-dark hover:!border-transparent hover:-translate-y-2"
                >
                  <div className="mt-2 ml-2 h-10 sm:h-12 flex items-center">
                    <div className="text-2xl block group-has-[a:hover]/wrapper:hidden group-hover/card:!block">
                      <i className="fas fa-arrow-right -rotate-45" />
                    </div>
                    <div className="hidden h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/2 text-sm font-bold group-has-[a:hover]/wrapper:flex group-hover/card:!hidden">
                      {s.no}
                    </div>
                  </div>
                  <div className="text-sm sm:text-[1rem] font-bold mb-2 sm:mb-4 ml-2">{s.label}</div>
                </Link>
              );
            }
            return (
              <Link
                key={s.no}
                href="/services"
                className="group/card flex flex-col justify-between rounded-xl sm:rounded-[0.5rem] border border-[#0c0c0c] p-5 sm:p-6 h-28 sm:h-[9rem] transition-colors duration-300 bg-white text-black hover:bg-[#cfff10] hover:text-dark hover:border-transparent hover:-translate-y-2"
              >
                <div className="mt-2 ml-2 h-10 sm:h-12 flex items-center">
                  <div className="text-2xl hidden group-hover/card:block">
                    <i className="fas fa-arrow-right -rotate-45" />
                  </div>
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 text-sm font-bold group-hover/card:hidden">
                    {s.no}
                  </div>
                </div>
                <div className="text-sm sm:text-[1rem] font-bold mb-2 sm:mb-4 ml-2">{s.label}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
