import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enkindl - iOS Language Learning App",
  description: "Enkindl teaches Eelam Tamil and Household Punjabi through voice conversation with on-device AI. Founded by Tushar Sroya. Built with SwiftUI, on-device ML, and articulatory phonetics coaching.",
  alternates: { canonical: "/portfolio/enkindl" },
  openGraph: {
    title: "Enkindl - iOS Language Learning App | Tushar Sroya",
    description: "Voice-driven language learning for diaspora families. On-device AI coaches pronunciation through articulatory mechanics. SwiftUI, local-first, zero cloud.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
