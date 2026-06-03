import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attio CRM Architecture",
  description: "CRM architecture and operations consulting for Schulich Startups. Designed stakeholder pipelines in Attio across 4+ startup cohorts. Case study by Tushar Sroya.",
  alternates: { canonical: "/portfolio/attio" },
  openGraph: {
    title: "Attio CRM Architecture | Tushar Sroya",
    description: "Operations consulting: structured CRM pipelines for startup cohort management at Schulich Startups.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
