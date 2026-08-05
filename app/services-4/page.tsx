import PageShell from "@/components/PageShell";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import Portfolio from "@/components/home/Portfolio";
import ContactCTA from "@/components/ContactCTA";
import SiteShell from "@/components/SiteShell";
import SEOHero from "@/components/seo/SEOHero";
import SMCta from "@/components/social-media/SMCta";
import SMTools from "@/components/social-media/SMTools";

export const metadata = { title: "Search Engine Optimization | Bright Media" };

export default function Services4Page() {
  return (
    <SiteShell >
      <SEOHero/>
      <ServicesShowcase variant={4} />
      <SMTools/>
      {/* <Portfolio /> */}
      {/* <ContactCTA /> */}
      <SMCta/>
    </SiteShell>
  );
}
