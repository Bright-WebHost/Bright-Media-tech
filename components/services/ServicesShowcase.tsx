import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SERVICES1 } from "@/lib/data";

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
          className="group flex items-center gap-6 rounded-2xl border border-black/5 bg-white p-8 transition-colors hover:border-primary dark:border-white/10 dark:bg-dark-secondary"
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
    <SectionHeading className="mb-12"
          label="Types"
          title="Websites we provide"
        />
    <div className="space-y-12 ">
      {SERVICES.map((s, i) => (
        <div
          key={s.id}
          className={`flex flex-col gap-8 lg:items-center  ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          <div className="flex h-56 flex-1 items-center justify-center rounded-2xl bg-primary/10">
            <Image src={s.icon} alt="" width={80} height={80} className="h-20 w-20 object-contain" />
          </div>
          <div className="flex-1">
            <span className="text-sm font-bold text-primary">{s.no}</span>
            <h3 className="mt-2 text-2xl font-bold text-heading ">{s.title}</h3>
            <p className="mt-3 leading-relaxed">{s.desc}</p>
            <Link href="#" className="btn-primary mt-6">
              {/* Read More <i className="fas fa-arrow-right" /> */}
            </Link>
          </div>
        </div>
      ))}
    </div>
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
    </div>  </>
  );
}
