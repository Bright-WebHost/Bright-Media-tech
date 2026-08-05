export default function SectionHeading({
  label,
  title,
  align = "center",
  className = "",
}: {
  label?: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="mt-3 text-3xl font-extrabold text-heading  md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
