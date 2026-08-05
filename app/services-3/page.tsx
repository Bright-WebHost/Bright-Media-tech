import PageShell from "@/components/PageShell";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import WDHero from "@/components/web-dev/WDHero";
import SiteShell from "@/components/SiteShell";
import SMCta from "@/components/social-media/SMCta";
import SMTools from "@/components/social-media/SMTools";

export const metadata = { title: "Web Development | Bright Media" };

export default function Services3Page() {
  return (
    <SiteShell>
      <WDHero/>
      <ServicesShowcase variant={3} />
      {/* <Testimonials /> */}
      {/* <ContactCTA /> */}
      <SMTools/>
      <SMCta/>
    </SiteShell>
  );
}
