import type {Metadata} from 'next';
import { Inter, Playfair_Display, Oswald } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Creative Writer & Storyteller',
  description: 'Bite-sized stories of love and humour. Helping creators grow with storytelling and AI automation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${oswald.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
