import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SERVICES1 } from "@/lib/data";
import WDTools from "../web-dev/WDTools";
import SEOTools from "../seo/SEOTools";

type Variant = 1 | 2 | 3 | 4;

export default function ServicesShowcase({ variant }: { variant: Variant }) {
  return (
    <section className="py-16 bg-white">
      <div className="container-x">
        
        <div className="mt-14">
          {variant === 1 && <GridCards />}
          {variant === 2 && <NumberedList />}
          {variant === 3 && <Alternating />}
          {variant === 4 && <MinimalColumns />}
        </div>
      </div>
    </section>
  );
}

/* Variant 1 — icon cards */
function GridCards() {
  return (
    <>
    <SectionHeading
          label="Types"
          title="Websites we provide"
        />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s) => (
        <Link
          key={s.id}
          href={`/service-details/${s.id}`}
          className="group flex flex-col rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl dark:border-white/10 dark:bg-dark-secondary"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
            <Image src={s.icon} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-heading dark:text-white">{s.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed">{s.desc}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-primary">
            Read More <i className="fas fa-arrow-right" />
          </span>
        </Link>
      ))}
    </div>
    </>
  );
}

/* Variant 2 — big numbered rows */
function NumberedList() {
  return (
    <>
    <SectionHeading className="mb-12"
          label="Types"
          title="Websites we provide"
        />
    <div className="space-y-4">
      {SERVICES.map((s) => (
        <Link
          key={s.id}
          href={`/service-details/${s.id}`}
          className="group flex items-center gap-6 rounded-2xl border border-black/5 bg-white p-8 transition-colors hover:border-primary `"
        >
          <span className="text-5xl font-black text-primary/30 group-hover:text-primary">{s.no}</span>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-heading dark:text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
          </div>
          <i className="fas fa-arrow-right text-xl text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      ))}
    </div>
    </>
  );
}

/* Variant 3 — alternating media rows */
function Alternating() {
  return (
    <>
      <SectionHeading
        className="mb-14 lg:mb-20"
        label="Types"
        title="Websites we provide"
      />
      <div className="space-y-16 sm:space-y-20 lg:space-y-28">
        {SERVICES.map((s, i) => (
          <div
            key={s.id}
            className={`flex flex-col gap-8 lg:gap-14 lg:items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Image Showcase Container */}
            <div className="group relative w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-black/5 shadow-md transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
              <Image
                src={s.image || s.icon}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30" />
              
              {/* Floating Tag/Number Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                <span className="text-primary font-bold">{s.no}</span>
                <span className="h-1 w-1 rounded-full bg-white/60" />
                <span>{s.tag || "Web Solution"}</span>
              </div>
            </div>

            {/* Content Details Container */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                  {s.tag || "Web Solution"}
                </span>
                <span className="text-xs font-bold text-paragraph">/ 0{i + 1}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
                {s.title}
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-paragraph ">
                {s.desc}
              </p>

              {/* {s.features && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {s.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-sm font-medium text-heading dark:text-white/90"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-dark text-[10px]">
                        <i className="fas fa-check" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )} */}

              {/* <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href={`/service-details/${s.id}`}
                  className="btn-primary"
                >
                  <span>Explore Details</span>
                  <i className="fas fa-arrow-right text-xs" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline border-black/15 text-heading hover:border-primary hover:bg-primary/10 dark:border-white/20 dark:text-white"
                >
                  <span>Get Started</span>
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <WDTools/>
    </>
  );
}

/* Variant 4 — minimal bordered columns */
function MinimalColumns() {
  return (
    <>
    <SectionHeading className="mb-12" 
          label="Expertise"
          title="How we can help you?"
        />  
    <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10  sm:grid-cols-2 lg:grid-cols-4">
      
      {SERVICES1.map((s) => (
        <Link
          key={s.id}
          href={`/service-details/${s.id}`}
          className="group bg-white p-8 transition-colors hover:bg-primary "
        >
          <span className="text-4xl font-black text-primary group-hover:text-dark">{s.no}</span>
          <h3 className="mt-4 text-lg font-bold text-heading group-hover:text-dark ">
            {s.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed group-hover:text-dark/80">{s.desc}</p>
        </Link>
      ))}
    </div> 
    <SEOTools/>
     </>
  );
}
