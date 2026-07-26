import Link from 'next/link';
import { t, type Lang } from '@/content/i18n';

export type Crumb = { label: string; href?: string };

/** The bordered gradient banner used at the top of the interior index pages. */
export default function PageHead({
  lang,
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  lang: Lang;
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-[var(--paper)] to-[var(--paper2)]">
      <div className="wrap sec-xs">
        <Breadcrumbs items={crumbs} lang={lang} />
        <div className="eyebrow mt-[22px]">{eyebrow}</div>
        <h1 className="title-page mt-3">{title}</h1>
        <p className="lede mt-4 max-w-[44em]">{lead}</p>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items, lang }: { items: Crumb[]; lang: Lang }) {
  return (
    <nav aria-label={t(lang).breadcrumb} className="mono text-[12px] text-muted flex flex-wrap gap-2">
      {items.map((c, i) => (
        <span key={i} className="flex gap-2">
          {c.href ? (
            <Link href={c.href} className="text-accent-ink hover:text-accent-ink">
              {c.label}
            </Link>
          ) : (
            <span className="text-ink">{c.label}</span>
          )}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
