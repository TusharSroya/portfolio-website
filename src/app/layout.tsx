import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LandingScreen } from '@/components/LandingScreen';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Tushar Sroya | Tech MBA & Product Manager',
  description: 'I build systems that scale with people. Product Manager specializing in HealthTech, operations, and technical strategy.',
  openGraph: {
    title: 'Tushar Sroya | Portfolio',
    description: 'Tech MBA candidate & Product Manager. Solving messy, real-world problems with scalable systems.',
    url: 'https://tusharsroya.info', // User's domain choice at deployment
    siteName: 'Tushar Sroya Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar Sroya | Product Manager',
    description: 'I build systems that scale with people.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
