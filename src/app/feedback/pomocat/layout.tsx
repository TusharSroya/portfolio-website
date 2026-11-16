import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomocat Feedback",
  description: "Tried Pomocat, the pixel-cat pomodoro timer for macOS and Windows? Tell Tushar what worked and what didn't. Takes about 3 minutes.",
  alternates: { canonical: "/feedback/pomocat" },
  openGraph: {
    title: "Pomocat Feedback | Tushar Sroya",
    description: "A 3-minute survey on Pomocat, the pixel-cat pomodoro timer.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
