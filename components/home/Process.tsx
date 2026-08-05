import DualImage from "@/components/DualImage";
import { PROCESS } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default function Process() {
  return (
    <section className="bg-graybg py-16 sm:py-24 dark:bg-dark-secondary">
      <div className="container-x px-4 sm:px-6">
        <Reveal className="mx-auto mb-10 sm:mb-14 max-w-2xl text-center">
          <h4 className="section-label justify-center">Services</h4>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-heading dark:text-white md:text-4xl">
            What services we offer
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((s, i) => (
            <Reveal
              as="div"
              key={s.title}
              delay={i * 0.12}
              className="relative rounded-xl sm:rounded-2xl border border-black/5 bg-white p-6 sm:p-8 text-center transition-colors hover:border-primary dark:border-white/10 dark:bg-dark"
            >
              <div className="mx-auto mb-5 sm:mb-6 flex h-20 sm:h-24 items-center justify-center">
                <DualImage
                  dark={s.icon}
                  light={s.iconLight}
                  width={200}
                  height={230}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
              <h4 className="text-base sm:text-xl font-bold text-heading dark:text-white">{s.title}</h4>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              {i < PROCESS.length - 1 && (
                <i className="fas fa-arrow-right absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
