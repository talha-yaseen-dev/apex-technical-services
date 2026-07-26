import type { Metadata, Viewport } from 'next';
import { Archivo, Space_Mono, Hanken_Grotesk } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, MobileActionBar } from '@/components/MobileActions';
import ScrollReveal from '@/components/ScrollReveal';
import { LocalBusinessLd } from '@/components/JsonLd';
import { C, SITE_URL } from '@/content/site';
import { t } from '@/content/i18n';

const display = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
});

const sans = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

// Space Mono only ships regular (400) and bold (700).
const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${C.short} — Glass & Aluminium, Fit-Out, MEP & Maintenance in the UAE`,
    template: `%s — ${C.short}`,
  },
  description:
    'Glass and aluminium specialists in the UAE — windows, doors, partitions, shower enclosures, handrails and façades, plus interior finishing, MEP, pools and building maintenance. Free site measurement.',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'ar_AE',
    siteName: C.short,
    url: '/',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Technical Services — glass, aluminium, fit-out, MEP and maintenance in the UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${C.short} — Glass & Aluminium, Fit-Out, MEP & Maintenance in the UAE`,
    description:
      'Glass and aluminium specialists in the UAE — windows, doors, partitions, shower enclosures, handrails, façades, plus fit-out, MEP, pools and maintenance. Free site measurement.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const d = t('en');
  return (
    <html lang="en-AE" dir="ltr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="absolute start-3 z-[200] bg-ink text-paper hover:text-paper px-4 py-[10px] rounded-[6px] mono text-[13px] transition-all -top-[60px] focus:top-3"
        >
          {d.skipToContent}
        </a>

        <Header lang="en" />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer lang="en" />

        <MobileActionBar lang="en" />
        <FloatingWhatsApp lang="en" />

        <ScrollReveal />
        <LocalBusinessLd />
      </body>
    </html>
  );
}
