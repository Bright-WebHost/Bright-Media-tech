import type { ReactNode } from "react";
import SiteShell from "./SiteShell";
import Breadcrumb from "./Breadcrumb";

export default function PageShell({
  title,
  crumb,
  children,
}: {
  title: string;
  crumb: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <Breadcrumb title={title} crumb={crumb} />
      {children}
    </SiteShell>
  );
}
