import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CivicTwin Spark - NVIDIA Hackathon",
  description: "Agentic urban simulation sandbox running 10,000 generative citizen agents through a spatial-temporal digital twin of Toronto. Built by Tushar Sroya using RAPIDS cuDF, cuML, and NVIDIA NIM on DGX Spark.",
  alternates: { canonical: "/portfolio/civictwin" },
  openGraph: {
    title: "CivicTwin Spark - NVIDIA Hackathon | Tushar Sroya",
    description: "311 demand forecasting, auto-triage, and AI morning briefings for city operations. 10,000 synthetic citizens on NVIDIA DGX Spark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
