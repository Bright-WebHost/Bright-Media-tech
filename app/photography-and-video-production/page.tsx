import PageShell from "@/components/PageShell";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import WDHero from "@/components/web-dev/WDHero";
import SiteShell from "@/components/SiteShell";
import SMCta from "@/components/social-media/SMCta";
import SMTools from "@/components/social-media/SMTools";
import PVHero from "@/components/photo/PVHero";
import PVServices from "@/components/photo/PVServices";

export const metadata = { title: "Photography and Video Production | Bright Media" };

export default function PhotographyAndVideoProductionPage() {
  return (
    <SiteShell>
      <PVHero/>
      <PVServices />
      <SMTools/>
      <SMCta/>
    </SiteShell>
  );
}