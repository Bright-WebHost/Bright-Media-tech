import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import BRProcess from "@/components/branding/BRProcess";
import SMCta from "@/components/social-media/SMCta";
import BRHero from "@/components/branding/BRHero";

export const metadata: Metadata = {
  title: "Branding | Bright Media",
  description:
    "Elevate your brand with Bright Media's data-driven branding services. Strategy, identity systems, and brand positioning.",
};

export default function BrandingPage() {
  return (
    <SiteShell>
      <Breadcrumb
        title="Brand Identity"
        subtitle="Built on Precision & Soul"
        badge="BRANDING // PILLAR 01"
        description="Make your brand stand out from the rest. We specialize in crafting quality brand identities that resonate with your audience and set you apart from the competition."
      />
      <BRHero />
      {/* Our Process */}
      <BRProcess />

      {/* CTA */}
      <SMCta />
    </SiteShell>
  );
}
