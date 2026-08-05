import SiteShell from "@/components/SiteShell";
import AboutBreadcrumb from "@/components/about/AboutBreadcrumb";
import AboutAgency from "@/components/about/AboutAgency";
import AboutStats from "@/components/about/AboutStats";
import AboutPartners from "@/components/about/AboutPartners";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonials from "@/components/about/AboutTestimonials";

export const metadata = {
  title: "About Company | Dixor Creative Digital Agency",
  description:
    "Learn about Dixor – a best creative & digital agency delivering branding, social media, content writing and video production.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutBreadcrumb />
      {/* <AboutAgency /> */}
      <AboutStats />
      {/* <AboutPartners /> */}
      <AboutTeam />
      <AboutTestimonials />
    </SiteShell>
  );
}
