import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NurseShield HealthTech MVP",
  description: "Product management case study: AI-powered workforce operations platform for emergency department nurses. Built by Tushar Sroya to reduce cognitive overload in clinical workflows.",
  alternates: { canonical: "/portfolio/nurseshield" },
  openGraph: {
    title: "NurseShield HealthTech MVP | Tushar Sroya",
    description: "HealthTech MVP tackling nurse cognitive overload. Product management, user research, clinical workflow optimization.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
