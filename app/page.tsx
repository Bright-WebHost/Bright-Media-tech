import SiteShell from "@/components/SiteShell";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import OurClients from "@/components/home/OurClients";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Clients from "@/components/home/Clients";
import WhyDixor from "@/components/home/WhyDixor";
import Process from "@/components/home/Process";
import ContactCTA from "@/components/ContactCTA";
import Blog from "@/components/home/Blog";
import AboutTestimonials from "@/components/about/AboutTestimonials";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <About />
      {/* <Process /> */}
      <Services />
      <WhyDixor />
      {/* <OurClients /> */}
      {/* <Clients /> */}
      {/* <Team /> */}
      <AboutTestimonials />
      {/* <Testimonials /> */}
      <Portfolio />
      {/* <ContactCTA /> */}
      {/* <Blog /> */}
    </SiteShell>
  );
}
