import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

export default function Blog() {
  return (
    <section className="bg-graybg py-24 dark:bg-dark-secondary">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h4 className="section-label justify-center">News &amp; Events</h4>
          <h2 className="mt-3 text-3xl font-extrabold text-heading dark:text-white md:text-4xl">
            Latest blog posts
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal
              as="div"
              key={p.title}
              delay={i * 0.12}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-dark"
            >
              <div className="relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 rounded-xl bg-primary px-4 py-2 text-center text-dark">
                  <span className="block text-xl font-black leading-none">{p.date.day}</span>
                  <strong className="text-xs font-semibold uppercase">{p.date.month}</strong>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-primary">
                  <span>
                    <i className="fas fa-user mr-1" /> {p.author}
                  </span>
                  <span>
                    <i className="fas fa-comments mr-1" /> {p.comments} Comments
                  </span>
                </div>
                <h4 className="mt-3 text-xl font-bold text-heading transition-colors group-hover:text-primary dark:text-white">
                  <Link href="#">{p.title}</Link>
                </h4>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-heading dark:text-white"
                >
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
