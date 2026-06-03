import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ValGenesis Technical Escalations",
  description: "Case study: Reduced 50+ open enterprise SaaS tickets to 4 in 2 months through agile workflows. Application engineering and client escalation management by Tushar Sroya.",
  alternates: { canonical: "/portfolio/valgenesis" },
  openGraph: {
    title: "ValGenesis Technical Escalations | Tushar Sroya",
    description: "Enterprise SaaS escalation management. 700+ technical solutions delivered globally, 98% client satisfaction maintained.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
