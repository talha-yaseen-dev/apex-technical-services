import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, MobileActionBar } from '@/components/MobileActions';
import ScrollReveal from '@/components/ScrollReveal';
import { LocalBusinessLd } from '@/components/JsonLd';
import { SITE_URL } from '@/content/site';
import { t } from '@/content/i18n';

// Arabic pairs the body and headings on one family (IBM Plex Sans Arabic — the
// Arabic sibling of the Latin body face). The technical mono labels stay Latin
// mono; Arabic glyphs inside them fall back gracefully.
const sansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

const brandAr = 'أبيكس';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brandAr} — زجاج وألمنيوم وتشطيبات وأعمال كهروميكانيكية وصيانة في الإمارات`,
    template: `%s — ${brandAr}`,
  },
  description:
    'متخصصون في الزجاج والألمنيوم في الإمارات — نوافذ وأبواب وقواطع وكابائن استحمام ودرابزين وواجهات، إضافة إلى التشطيبات الداخلية والأعمال الكهروميكانيكية وحمامات السباحة وصيانة المباني. قياس مجاني في الموقع.',
  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    alternateLocale: 'en_AE',
    siteName: brandAr,
    url: '/ar',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'أبيكس للخدمات الفنية — زجاج وألمنيوم وتشطيبات وأعمال كهروميكانيكية وصيانة في الإمارات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brandAr} — زجاج وألمنيوم وتشطيبات وأعمال كهروميكانيكية وصيانة في الإمارات`,
    description:
      'متخصصون في الزجاج والألمنيوم في الإمارات — نوافذ وأبواب وقواطع وكابائن استحمام ودرابزين وواجهات، إضافة إلى التشطيبات والأعمال الكهروميكانيكية وحمامات السباحة وصيانة المباني. قياس مجاني في الموقع.',
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

export default function ArLayout({ children }: { children: React.ReactNode }) {
  const d = t('ar');
  return (
    <html
      lang="ar-AE"
      dir="rtl"
      className={`${sansArabic.variable} ${mono.variable}`}
      style={{ ['--font-display' as string]: 'var(--font-sans)' } as React.CSSProperties}
    >
      <body>
        <a
          href="#main"
          className="absolute start-3 z-[200] bg-ink text-paper hover:text-paper px-4 py-[10px] rounded-[6px] mono text-[13px] transition-all -top-[60px] focus:top-3"
        >
          {d.skipToContent}
        </a>

        <Header lang="ar" />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer lang="ar" />

        <MobileActionBar lang="ar" />
        <FloatingWhatsApp lang="ar" />

        <ScrollReveal />
        <LocalBusinessLd />
      </body>
    </html>
  );
}
