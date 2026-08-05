import PageShell from "@/components/PageShell";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import Process from "@/components/home/Process";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "Services — Dixor" };

export default function ServicesPage() {
  return (
    <PageShell title="Branding" crumb="Services">
      {/* <ServicesShowcase variant={1} /> */}
      {/* <Process /> */}
      <ContactCTA />
    </PageShell>
  );
}
