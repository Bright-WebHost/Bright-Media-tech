import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import PAProcess from "@/components/paid-ads/PAProcess";
import PABenefits from "@/components/paid-ads/PABenifits";
import SMCta from "@/components/social-media/SMCta";
import WDWork from "@/components/web-dev/WDWork";
import SMWork from "@/components/social-media/SMWork";
import PAWork from "@/components/paid-ads/PAWork";

export const metadata: Metadata = {
  title: "Paid Ads | Bright Media",
  description:
    "Maximize reach and ROI with targeted advertising campaigns across Google, Meta, and multi-channel ad networks.",
};

export default function PaidAdsPage() {
  return (
    <SiteShell>
      {/* Breadcrumb Header */}
      <Breadcrumb
        title="Paid Advertising"
        subtitle="Smarter Ads. Stronger Returns."
        badge="PAID ADS // PILLAR 05"
        description="Maximize reach and return on investment with targeted advertising campaigns across Google Ads, Meta Ads Manager, Snapchat Ads, and multi-channel platforms."
      />

      {/* Our Process */}
      <PAProcess />

      {/* Benefits */}
      <PABenefits />
      <PAWork/>

      {/* CTA */}
      <SMCta />
    </SiteShell>
  );
}
