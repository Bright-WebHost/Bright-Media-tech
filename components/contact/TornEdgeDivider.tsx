"use client";

interface TornEdgeDividerProps {
  fillColor?: string; // color of the section below (e.g. #f7f7f3 for light theme)
  className?: string;
  flipVertical?: boolean;
}

export default function TornEdgeDivider({
  fillColor = "#f7f7f3",
  className = "",
  flipVertical = false,
}: TornEdgeDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-20 ${
        flipVertical ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        className="relative block w-full h-12 md:h-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill={fillColor}
          d="M0,0 
             L0,90 
             L45,45 L80,105 L125,35 L170,95 L220,50 L275,110 L330,40 L385,100 L440,30 L495,90 L550,45 L610,115 L665,35 L720,95 L780,50 L835,105 L890,30 L950,90 L1005,45 L1065,115 L1120,40 L1180,95 L1235,50 L1290,110 L1350,35 L1400,90 L1440,55 
             L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
