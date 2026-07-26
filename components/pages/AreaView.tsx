import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AREAS, C, telHref } from '@/content/site';
import { getArea, getDivisions } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { Breadcrumbs } from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import { BreadcrumbLd } from '@/components/JsonLd';

export type AreaParams = { city: string };

export const areaParams = (): AreaParams[] => AREAS.map((a) => ({ city: a.slug }));

export function areaMeta(slug: string, lang: Lang): Metadata {
  if (!AREAS.some((x) => x.slug === slug)) return { title: 'Area not found' };
  const a = getArea(lang);
  return {
    title: `${a.city} — ${t(lang).navServices}`,
    description: a.intro,
    alternates: alternates(lang, `/areas/${slug}`),
  };
}

export default function AreaView({ slug, lang }: { slug: string; lang: Lang }) {
  const ui = t(lang);
  if (!AREAS.some((x) => x.slug === slug)) notFound();
  const a = getArea(lang);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-[var(--paper)] to-[var(--paper2)]">
        <div className="wrap sec-xs">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: ui.home, href: L(lang, '/') },
              { label: ui.navServices, href: L(lang, '/services') },
              { label: a.city },
            ]}
          />
          <div className="eyebrow mt-[22px]">{ui.serviceArea}</div>
          <h1 className="text-[clamp(34px,5vw,60px)] font-extrabold mt-3 font-display">
            {ui.areaTitle} {a.city}
          </h1>
          <p className="lede mt-4 max-w-[44em]">{a.intro}</p>
          <div className="flex flex-wrap gap-3 mt-[26px]">
            <a href={a.wa} target="_blank" rel="noopener" className="btn btn-sm btn-wa">
              {ui.whatsappInCity} {a.city}
            </a>
            <a href={telHref} className="btn btn-sm btn-ink">
              {ui.call} {C.phoneDisp}
            </a>
          </div>
        </div>
      </section>

      <section className="wrap sec-md">
        <h2 className="title-4">
          {ui.areaCoverTitle} {a.city}
        </h2>
        <p className="text-muted text-[15px] mt-[10px]">{ui.areaCoverLede}</p>
        <div className="flex flex-wrap gap-[9px] mt-[22px]">
          {a.neighborhoods.map((n) => (
            <span key={n} className="border border-line2 rounded-full px-[15px] py-2 text-[14px] bg-paper">
              {n}
            </span>
          ))}
        </div>

        <h2 className="title-4 mt-12">{ui.areaDivisionsTitle}</h2>
        <div
          className="grid gap-4 mt-[22px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}
        >
          {getDivisions(lang).map((d) => (
            <Link
              key={d.slug}
              href={L(lang, `/services/${d.slug}`)}
              className="border border-line rounded-[14px] p-[22px] bg-paper text-ink hover:text-ink hover:border-accent hover:-translate-y-[3px] transition-all"
            >
              <span className="mono text-[12px] text-accent-ink">{d.num}</span>
              <h3 className="text-[19px] font-bold mt-2">{d.title}</h3>
              <p className="text-muted text-[14px] mt-[6px]">{d.lead}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand lang={lang} />
      <BreadcrumbLd
        items={[
          { label: ui.home, href: L(lang, '/') },
          { label: a.city, href: L(lang, `/areas/${slug}`) },
        ]}
      />
    </>
  );
}
