import Link from "next/link";
import DualImage from "@/components/DualImage";
import { SERVICES } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default function Services() {
  return (
    <section className="bg-graybg py-24 dark:bg-dark-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h4 className="section-label justify-center">Services we offer</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-heading dark:text-white md:text-4xl">
            Turn Information Into Actionable Insights
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal
              as="div"
              key={s.id}
              delay={i * 0.1}
              className={`group flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                i === 0
                  ? "border-primary bg-primary text-dark"
                  : "border-black/5 bg-white hover:border-primary dark:border-white/10 dark:bg-dark"
              }`}
            >
              <div className="mb-6 h-14">
                <DualImage
                  dark={s.icon}
                  light={s.iconLight}
                  width={75}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h4 className="text-xl font-bold">
                <Link
                  href={`/service-details/${s.id}`}
                  className={i === 0 ? "text-dark" : "text-heading dark:text-white"}
                >
                  {s.title}
                </Link>
              </h4>
              <p className={`mt-3 flex-1 text-sm leading-relaxed ${i === 0 ? "text-dark/80" : ""}`}>
                {s.desc}
              </p>
              <Link
                href={`/service-details/${s.id}`}
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                  i === 0 ? "text-dark" : "text-heading group-hover:text-primary dark:text-white"
                }`}
              >
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
