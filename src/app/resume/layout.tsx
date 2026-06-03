import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Tushar Sroya's resume. Product Manager, founder, iOS developer. Tech MBA at Schulich School of Business, Toronto. Experience in HealthTech, enterprise SaaS, CRM architecture, and on-device AI.",
  alternates: { canonical: "/resume" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
