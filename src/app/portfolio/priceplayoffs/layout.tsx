import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Blueprint - Classroom Pricing Game",
  description: "A live classroom pricing-strategy game for business students. Teams role-play startup founders, set prices across three rounds, and compete on a projected leaderboard with AI-calibrated market dynamics. Built by Tushar Sroya for Schulich PMC.",
  alternates: { canonical: "/portfolio/priceplayoffs" },
  openGraph: {
    title: "Pricing Blueprint - Classroom Pricing Game | Tushar Sroya",
    description: "Live pricing strategy game with AI calibration, competitor dynamics, and tiered packaging. Built for Schulich PMC students.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
