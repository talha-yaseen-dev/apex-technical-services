import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_SERVICES } from '@/content/divisions';
import { telHref, waFor } from '@/content/site';
import { getService } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { WhatsAppIcon } from '@/components/icons';
import { TechDiagram } from '@/components/Diagram';
import { Breadcrumbs } from '@/components/PageHead';
import ProcessGrid from '@/components/ProcessGrid';
import CtaBand from '@/components/CtaBand';
import { BreadcrumbLd, FaqLd, ServiceLd } from '@/components/JsonLd';

export type ServiceParams = { slug: string };

export const serviceParams = (): ServiceParams[] => ALL_SERVICES.map((s) => ({ slug: s.slug }));

export function serviceMeta(slug: string, lang: Lang): Metadata {
  const s = getService(slug, lang);
  if (!s) return { title: 'Not found' };
  return {
    title: s.name,
    description: s.lead,
    alternates: alternates(lang, `/service/${s.slug}`),
  };
}

export default function ServiceView({ slug, lang }: { slug: string; lang: Lang }) {
  const ui = t(lang);
  const s = getService(slug, lang);
  if (!s) notFound();

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-gradient-to-b from-[var(--paper)] to-[var(--paper2)]">
        <div className="wrap sec-xs">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: ui.home, href: L(lang, '/') },
              { label: ui.navServices, href: L(lang, '/services') },
              { label: s.divTitle, href: L(lang, `/services/${s.divSlug}`) },
              { label: s.name },
            ]}
          />
          <div
            className="grid gap-9 items-center mt-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
          >
            <div>
              <div className="mono text-[12px] tracking-[0.14em] text-accent-ink">{s.tag}</div>
              <h1 className="text-[clamp(32px,4.4vw,52px)] font-extrabold mt-3 font-display">{s.name}</h1>
              <p className="lede mt-4 max-w-[38em]">{s.lead}</p>
              <div className="flex flex-wrap gap-3 mt-[26px]">
                <a href={waFor(s.name)} target="_blank" rel="noopener" className="btn btn-sm btn-wa">
                  {ui.enquireWhatsapp} <WhatsAppIcon size={16} />
                </a>
                <a href={telHref} className="btn btn-sm btn-outline">
                  {ui.callToArrange}
                </a>
              </div>
              <p className="mono text-[12px] text-muted mt-4">{ui.serviceNote}</p>
            </div>
            <TechDiagram top={s.tag.toUpperCase()} bottom={s.name.toUpperCase()} />
          </div>
        </div>
      </section>

      {/* OPTIONS + PROCESS */}
      <section
        className="wrap sec-md grid gap-11"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
      >
        <div>
          <h2 className="title-4">{ui.optionsScope}</h2>
          <p className="text-ink2 text-base mt-3">{ui.optionsLede}</p>
          <div className="grid gap-[2px] mt-[22px] border-t border-line">
            {s.options.map((o) => (
              <div key={o} className="flex gap-[13px] items-center py-[14px] px-1 border-b border-line">
                <span className="tick">✓</span>
                <span className="text-[15.5px]">{o}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="border border-line rounded-[14px] p-[26px] bg-paper2">
            <h3 className="text-[20px] font-bold">{ui.howWeHandleIt}</h3>
            <ProcessGrid lang={lang} variant="compact" />
          </div>
          <div className="border border-dashed border-line2 rounded-[14px] p-5 mt-4 bg-paper">
            <div className="mono text-[11px] tracking-[0.14em] text-muted">{ui.warranty}</div>
            <p className="text-[14px] text-muted mt-2">{ui.warrantyText}</p>
          </div>
        </div>
      </section>

      {/* FAQs + RELATED */}
      <section className="max-w-[900px] mx-auto sec-md px-[22px]">
        <h2 className="title-4">
          {s.name} {ui.questionsSuffix}
        </h2>
        <div className="mt-5 border-t border-line">
          {s.faqs.map((f, i) => (
            <details key={i} className="border-b border-line group">
              <summary className="cursor-pointer py-5 flex justify-between gap-4 items-center font-semibold text-[17px] list-none">
                {f.q}
                <span className="flex-none w-[26px] h-[26px] border border-line2 rounded-full grid place-items-center text-accent-ink text-[18px] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-ink2 text-[15.5px] pb-5 max-w-[52em]">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <div className="mono text-[11px] tracking-[0.14em] text-muted mb-3">
            {ui.relatedIn} {s.divTitle}
          </div>
          <div className="flex flex-wrap gap-2">
            {s.related.map((r) => (
              <Link
                key={r.slug}
                href={L(lang, `/service/${r.slug}`)}
                className="border border-line2 rounded-full px-[15px] py-2 text-[14px] text-ink hover:text-accent-ink hover:border-accent"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />

      <ServiceLd name={s.name} description={s.lead} />
      <FaqLd items={s.faqs} />
      <BreadcrumbLd
        items={[
          { label: ui.home, href: L(lang, '/') },
          { label: ui.navServices, href: L(lang, '/services') },
          { label: s.divTitle, href: L(lang, `/services/${s.divSlug}`) },
          { label: s.name, href: L(lang, `/service/${s.slug}`) },
        ]}
      />
    </>
  );
}
