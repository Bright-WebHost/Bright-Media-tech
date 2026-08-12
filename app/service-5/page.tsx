import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import PAProcess from "@/components/paid-ads/PAProcess";
import PABenefits from "@/components/paid-ads/PABenifits";
import SMCta from "@/components/social-media/SMCta";

export const metadata: Metadata = {
  title: "Paid Ads | Bright Media",
  description:
    "Maximize reach and ROI with targeted advertising campaigns across Google, Meta, and multi-channel ad networks.",
};

export default function Service5Page() {
  return (
    <SiteShell>
      {/* Breadcrumb Header */}
      <Breadcrumb
        title="Paid Advertising"
        subtitle="Maximized ROAS & Scale"
        badge="PAID ADS // PILLAR 05"
        description="Maximize reach and return on investment with targeted advertising campaigns across Google Ads, Meta Ads Manager, Snapchat Ads, and multi-channel platforms."
      />

      {/* Our Process */}
      <PAProcess />

      {/* Benefits */}
      <PABenefits />

      {/* CTA */}
      <SMCta />
    </SiteShell>
  );
}
