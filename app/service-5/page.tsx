import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import SMHero from "@/components/social-media/SMHero";
import SMOverview from "@/components/social-media/SMOverview";
import SMWhyMatters from "@/components/social-media/SMWhyMatters";
import SMServicesOffered from "@/components/social-media/SMServicesOffered";
import SMProcess from "@/components/social-media/SMProcess";
import SMTools from "@/components/social-media/SMTools";
import SMBenefits from "@/components/social-media/SMBenefits";
import SMProjects from "@/components/social-media/SMProjects";
import SMFaq from "@/components/social-media/SMFaq";
import SMCta from "@/components/social-media/SMCta";
import BRHero from "@/components/branding/BRHero";
import BRProcess from "@/components/branding/BRProcess";
import PAHero from "@/components/paid-ads/PAHero";
import PAProcess from "@/components/paid-ads/PAProcess";
import PABenefits from "@/components/paid-ads/PABenifits";

export const metadata: Metadata = {
  title: "Paid Ads | Bright Media",
  description:
    "Elevate your brand with Bright Media's data-driven paid ads services. Strategy, content creation, community management, and analytics — all under one roof.",
};

export default function Service5Page() {
  return (
    <SiteShell>
      {/* Hero — Dark */}
      <PAHero />

      {/* Service Overview — White */}
      {/* <SMOverview /> */}

      {/* Why Social Media Matters — Dark */}
      {/* <SMWhyMatters /> */}

      {/* Services We Offer — White */}
      {/* <SMServicesOffered /> */}

      {/* Our Process — Dark */}
      <PAProcess />

      {/* Tools & Platforms — White */}
      <SMTools />

      {/* Benefits — Dark */}
      <PABenefits />

      {/* Featured Projects — White */}
      {/* <SMProjects /> */}

      {/* FAQ — Dark */}
      {/* <SMFaq /> */}

      {/* CTA — White */}
      <SMCta />
    </SiteShell>
  );
}
