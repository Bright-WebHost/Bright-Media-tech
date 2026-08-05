import Image from "next/image";

/**
 * Renders two images and shows the right one per theme via CSS —
 * mirrors the source template's `regular-img` (dark) / `light-img` (light) swap.
 */
export default function DualImage({
  dark,
  light,
  alt = "",
  width,
  height,
  className = "",
}: {
  dark: string;
  light: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src={dark}
        alt={alt}
        width={width}
        height={height}
        className={`hidden dark:block ${className}`}
      />
      <Image
        src={light}
        alt={alt}
        width={width}
        height={height}
        className={`block dark:hidden ${className}`}
      />
    </>
  );
}
