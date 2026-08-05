import Image from "next/image";
import { CONTACT } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image src={CONTACT.bg} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-dark/85" />

      <div className="container-x relative z-10">
        <h4 className="section-label">Have a project in mind?</h4>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold text-white md:text-4xl">
          For instant support <br /> please reach us
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
          <li className="flex items-center gap-4">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-primary text-xl text-dark">
              <i className="fas fa-phone" />
            </span>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-white/60">Phone</h4>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="text-lg font-semibold text-white hover:text-primary"
              >
                {CONTACT.phone}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-primary text-xl text-dark">
              <i className="fas fa-envelope-open" />
            </span>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-white/60">Official Email</h4>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg font-semibold text-white hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
