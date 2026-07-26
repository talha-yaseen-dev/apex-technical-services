import { C, SITE_URL } from '@/content/site';
import { DIVISIONS, type Faq } from '@/content/divisions';

function tag(json: unknown) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function LocalBusinessLd() {
  return tag({
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE_URL}/#business`,
    name: C.name,
    alternateName: C.short,
    url: SITE_URL,
    telephone: C.phoneRaw,
    email: C.email,
    image: `${SITE_URL}/og.jpg`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: '$$',
    knowsLanguage: ['en', 'ar'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 000, Example Business Tower',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: DIVISIONS.map((dv) => ({
        '@type': 'OfferCatalog',
        name: dv.title,
        itemListElement: dv.subservices.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name },
        })),
      })),
    },
  });
}

export function ServiceLd({ name, description }: { name: string; description: string }) {
  return tag({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    areaServed: 'United Arab Emirates',
    provider: {
      '@type': 'GeneralContractor',
      name: C.name,
      telephone: C.phoneRaw,
    },
  });
}

export function FaqLd({ items }: { items: Faq[] }) {
  if (!items?.length) return null;
  return tag({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
}

export function BreadcrumbLd({ items }: { items: { label: string; href: string }[] }) {
  return tag({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: SITE_URL + c.href,
    })),
  });
}
