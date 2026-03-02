import type { Metadata } from 'next';
import { Inter, Playfair_Display, Oswald } from 'next/font/google';
import './globals.css'; // Global styles
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Hannah Oyiza Salami | Expert Storyteller & Brand Content Strategist',
  description: 'Partner with Hannah Oyiza Salami to craft authentic, emotional stories that connect with 154k+ loyal followers and drive 15M+ views.',
  keywords: ['Storytelling Content Creator Nigeria', 'Brand Storyteller for Gen Z', 'Professional Ghostwriter for Creators', 'Instagram Content Strategy', 'Authentic Brand Collaborations', 'Creative Scriptwriter Nigeria'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Hannah Oyiza Salami",
        "jobTitle": "Brand Storyteller & Content Strategist",
        "url": "https://explorewithannie.com",
        "sameAs": [
          "https://instagram.com/explore.with.annie",
          "https://x.com/explorewithann"
        ]
      },
      {
        "@type": "Service",
        "name": "Brand Storytelling Campaigns",
        "provider": {
          "@type": "Person",
          "name": "Hannah Oyiza Salami"
        },
        "description": "Transform brand messages into emotional narratives."
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${oswald.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
