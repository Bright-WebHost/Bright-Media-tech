import Link from "next/link";

export default function Breadcrumb({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-graybg pt-40 pb-20 dark:bg-dark-secondary">
      <div className="container-x relative z-10 text-center">
        <h1 className="text-4xl font-extrabold text-heading dark:text-white md:text-5xl">
          {title}
        </h1>
        <nav className="mt-4 flex items-center justify-center gap-2 text-sm font-medium">
          {/* <Link href="/" className="text-primary hover:underline">
            Home
          </Link> */}
          {/* <i className="fas fa-angle-right text-xs opacity-60" /> */}
          <span className="opacity-70">{crumb}</span>
        </nav>
      </div>
      {/* decorative blob */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}
