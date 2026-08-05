import Image from "next/image";
import Link from "next/link";
import { CLIENTS } from "@/lib/data";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";

export default function Clients() {
  return (
    <section className="bg-graybg py-24 dark:bg-dark-secondary">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left */}
        <Reveal direction="right" className="lg:col-span-4">
          <h4 className="section-label">Clients</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-heading dark:text-white md:text-4xl">
            Worked with largest brands
          </h2>
          <p className="mt-4 leading-relaxed">
            From ambitious startups to established enterprises, teams trust us to design,
            build and grow the products behind their brand.
          </p>

          <div className="mt-8 flex items-center">
            {CLIENTS.cards.map((c, i) => (
              <div
                key={c}
                className="-ml-3 h-14 w-14 overflow-hidden rounded-full border-2 border-graybg first:ml-0 dark:border-dark-secondary"
                style={{ zIndex: CLIENTS.cards.length - i }}
              >
                <Image src={c} alt="" width={56} height={56} className="h-full w-full object-cover" />
              </div>
            ))}
            <Link
              href="#"
              aria-label="more clients"
              className="-ml-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-dark"
            >
              <i className="fas fa-plus" />
            </Link>
          </div>
        </Reveal>

        {/* Right — logo grid */}
        <Reveal direction="left" className="lg:col-span-7 lg:col-start-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center bg-primary p-6 text-center text-dark">
              <span className="flex items-end text-4xl font-black">
                <Counter to={150} />+
              </span>
              <span className="text-sm font-semibold">Active Clients</span>
            </div>
            {CLIENTS.logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center bg-graybg p-6 dark:bg-dark"
              >
                <Image
                  src={logo}
                  alt="client logo"
                  width={160}
                  height={50}
                  className="h-8 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:invert"
                />
              </div>
            ))}
            <div className="flex items-center justify-center bg-graybg p-6 dark:bg-dark">
              <Link href="#" className="text-sm font-semibold text-primary">
                View All
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
