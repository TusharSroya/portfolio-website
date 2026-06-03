import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LandingScreen } from '@/components/LandingScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Tushar Sroya | Product Manager, Founder, iOS Developer',
    template: '%s | Tushar Sroya',
  },
  description: 'Product Manager and founder building Enkindl (iOS language learning) and CivicTwin Spark (NVIDIA hackathon). Tech MBA candidate at Schulich School of Business, Toronto.',
  keywords: ['product manager', 'iOS developer', 'Tushar Sroya', 'Toronto', 'Tech MBA', 'Schulich', 'healthtech', 'on-device AI', 'language learning app', 'NVIDIA hackathon', 'portfolio'],
  authors: [{ name: 'Tushar Sroya' }],
  creator: 'Tushar Sroya',
  metadataBase: new URL('https://www.tusharsroya.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tushar Sroya | Product Manager, Founder, iOS Developer',
    description: 'Product Manager and founder building Enkindl and CivicTwin Spark. Tech MBA at Schulich, Toronto.',
    url: 'https://www.tusharsroya.com',
    siteName: 'Tushar Sroya',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar Sroya | Product Manager & Founder',
    description: 'Building Enkindl (iOS language learning) and CivicTwin Spark (NVIDIA hackathon). Tech MBA at Schulich, Toronto.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tushar Sroya',
    url: 'https://www.tusharsroya.com',
    jobTitle: 'Product Manager & Founder',
    description: 'Product Manager and founder building Enkindl (iOS language learning app) and CivicTwin Spark. Tech MBA candidate at Schulich School of Business.',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Schulich School of Business, York University',
    },
    knowsAbout: ['Product Management', 'iOS Development', 'On-Device AI', 'HealthTech', 'SwiftUI', 'Language Learning', 'CRM Architecture', 'NVIDIA DGX Spark'],
    sameAs: [
      'https://www.linkedin.com/in/tusharsroya/',
      'https://github.com/TusharSroya',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
