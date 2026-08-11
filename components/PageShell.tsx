import type { ReactNode } from "react";
import SiteShell from "./SiteShell";
import Breadcrumb from "./Breadcrumb";

export default function PageShell({
  title,
  crumb,
  description,
  children,
}: {
  title: string;
  crumb?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <Breadcrumb title={title} crumb={crumb} description={description} />
      {children}
    </SiteShell>
  );
}
