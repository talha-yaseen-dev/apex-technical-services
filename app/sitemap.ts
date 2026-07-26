import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
import { DIVISIONS, ALL_SERVICES } from '@/content/divisions';
import { L, type Lang } from '@/content/i18n';

// Every page exists in English (root) and Arabic (/ar). We emit both URL trees
// and cross-link them with hreflang alternates so Google indexes the pair.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // app-relative paths (English form) with their crawl priority.
  const paths: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/projects', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/areas/uae', priority: 0.8 },
    ...DIVISIONS.map((d) => ({ path: `/services/${d.slug}`, priority: 0.85 })),
    ...ALL_SERVICES.map((s) => ({ path: `/service/${s.slug}`, priority: 0.7 })),
  ];

  // trailingSlash: true — mirror it here so sitemap URLs match the real files.
  const url = (lang: Lang, path: string) => {
    const p = L(lang, path);
    return SITE_URL + (p === '/' ? '/' : `${p}/`);
  };

  return paths.flatMap(({ path, priority }): MetadataRoute.Sitemap => {
    const languages = { 'en-AE': url('en', path), 'ar-AE': url('ar', path) };
    return (['en', 'ar'] as Lang[]).map((lang) => ({
      url: url(lang, path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages },
    }));
  });
}
