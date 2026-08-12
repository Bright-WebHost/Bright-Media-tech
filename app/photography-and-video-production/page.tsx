import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import PVServices from "@/components/photo/PVServices";
import SMTools from "@/components/social-media/SMTools";
import SMCta from "@/components/social-media/SMCta";

export const metadata = {
  title: "Photography and Video Production | Bright Media",
  description:
    "Capture compelling 4K visuals, commercial videos, and studio photoshoots that tell your brand story across all media channels.",
};

export default function PhotographyAndVideoProductionPage() {
  return (
    <SiteShell>
      <Breadcrumb
        title="Photography & Video"
        subtitle="4K Cinematic Commercials"
        badge="VISUAL CRAFT // PILLAR 06"
        description="Capture compelling visuals, commercial videos, and studio photoshoots that tell your brand story and engage audiences across all digital channels."
      />
      <PVServices />
      <SMTools />
      <SMCta />
    </SiteShell>
  );
}