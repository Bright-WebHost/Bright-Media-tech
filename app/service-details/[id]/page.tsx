import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ContactCTA from "@/components/ContactCTA";
import { SERVICES, CONTACT } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ id: String(s.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const s = SERVICES.find((x) => String(x.id) === params.id);
  return { title: s ? `${s.title} — Dixor` : "Service — Dixor" };
}

const FEATURES = [
  "Discovery workshop and goal alignment",
  "Tailored strategy backed by real data",
  "Transparent milestones and reporting",
  "Ongoing optimization after launch",
];

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => String(s.id) === params.id);
  if (!service) notFound();

  return (
    <PageShell title={service.title} crumb="Service Details">
      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* Main content */}
          <article>
            <div className="relative mb-8 h-80 sm:h-96 w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 shadow-lg">
              <Image
                src={service.image || service.icon}
                alt={service.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-3xl font-extrabold text-heading dark:text-white">
              {service.title}
            </h2>
            <p className="mt-4 leading-relaxed">{service.desc}</p>
            <p className="mt-4 leading-relaxed">
              Our team blends strategy, design and engineering to deliver outcomes that move the
              needle. From the first workshop to the final handover, we keep you informed and
              involved at every step, so the result is exactly what your business needs.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-heading dark:text-white">
              What you get
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs text-dark">
                    <i className="fas fa-star" />
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-dark-secondary">
              <h4 className="mb-4 text-lg font-bold text-heading dark:text-white">All Services</h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/service-details/${s.id}`}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        s.id === service.id
                          ? "bg-primary text-dark"
                          : "bg-black/5 text-heading hover:bg-primary/20 dark:bg-white/5 dark:text-white"
                      }`}
                    >
                      {s.title}
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-dark p-8 text-white dark:bg-dark-optional">
              <h4 className="text-lg font-bold">Need help?</h4>
              <p className="mt-2 text-sm text-white/70">
                Talk to our team about your project today.
              </p>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="mt-4 flex items-center gap-3 text-primary"
              >
                <i className="fas fa-phone" /> {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 flex items-center gap-3 text-primary"
              >
                <i className="fas fa-envelope-open" /> {CONTACT.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </PageShell>
  );
}
