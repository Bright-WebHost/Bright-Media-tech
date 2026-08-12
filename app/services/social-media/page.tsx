import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import SMProcess from "@/components/social-media/SMProcess";
import SMBenefits from "@/components/social-media/SMBenefits";
import SMCta from "@/components/social-media/SMCta";
import SMHero from "@/components/social-media/SMHero";

export const metadata: Metadata = {
  title: "Social Media Marketing | Bright Media",
  description:
    "Elevate your brand with Bright Media's data-driven social media marketing services. Strategy, content creation, community management, and analytics — all under one roof.",
};

export default function SocialMediaPage() {
  return (
    <SiteShell>
      {/* Breadcrumb Header */}
      <SMHero/>
      <Breadcrumb
        title="Social Media"
        subtitle="Viral Reach & Engagement"
        badge="SOCIAL MEDIA // PILLAR 02"
        description="Engage and grow your audience with custom social media strategies, high-voltage content creation, and active community interaction."
      />

      {/* Our Process */}
      <SMProcess />

      {/* Benefits */}
      <SMBenefits />

      {/* CTA */}
      <SMCta />
    </SiteShell>
  );
}
