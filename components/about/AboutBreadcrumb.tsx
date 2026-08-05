import Link from "next/link";

export default function AboutBreadcrumb() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-dark">
      {/* Concentric circles decoration – right-center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[340, 260, 180, 100].map((size, i) => (
          <span
            key={size}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
          About Company
        </h1>
        <nav className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-white/70">
          <i className="fas fa-home text-xs" />
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <i className="fas fa-angle-right text-xs opacity-60" />
          <span>About</span>
        </nav>
      </div>
    </section>
  );
}
