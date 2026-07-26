import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DIVISIONS } from '@/content/divisions';
import { C, telHref, waFor } from '@/content/site';
import { getDivision } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { ArrowIcon, WhatsAppIcon } from '@/components/icons';
import { TechDiagram } from '@/components/Diagram';
import { Breadcrumbs } from '@/components/PageHead';
import ProcessGrid from '@/components/ProcessGrid';
import FaqList from '@/components/FaqList';
import CtaBand from '@/components/CtaBand';
import { BreadcrumbLd, FaqLd, ServiceLd } from '@/components/JsonLd';

export type DivisionParams = { division: string };

export const divisionParams = (): DivisionParams[] => DIVISIONS.map((d) => ({ division: d.slug }));

export function divisionMeta(slug: string, lang: Lang): Metadata {
  const d = getDivision(slug, lang);
  if (!d) return { title: 'Not found' };
  return {
    title: d.title,
    description: d.lead,
    alternates: alternates(lang, `/services/${d.slug}`),
  };
}

export default function DivisionView({ slug, lang }: { slug: string; lang: Lang }) {
  const ui = t(lang);
  const d = getDivision(slug, lang);
  if (!d) notFound();

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
              { label: d.title },
            ]}
          />
          <div
            className="grid gap-9 items-center mt-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="mono text-[15px] text-accent-ink font-semibold">{d.num}</span>
                <span className="mono text-[12px] tracking-[0.14em] text-muted">{ui.division}</span>
              </div>
              <h1 className="text-[clamp(32px,4.6vw,54px)] font-extrabold mt-[14px] font-display">{d.title}</h1>
              <p className="lede mt-4 max-w-[38em]">{d.lead}</p>
              <div className="flex flex-wrap gap-3 mt-[26px]">
                <a href={waFor(d.title)} target="_blank" rel="noopener" className="btn btn-sm btn-wa">
                  {ui.whatsappAboutThis} <WhatsAppIcon size={16} />
                </a>
                <a href={telHref} className="btn btn-sm btn-ink">
                  {ui.call} {C.phoneDisp}
                </a>
              </div>
            </div>
            <TechDiagram top={d.diagram[0]} bottom={d.diagram[1]} />
          </div>
        </div>
      </section>

      {/* SUB-SERVICES */}
      <section className="wrap sec-md">
        <h2 className="title-3">{ui.servicesInDivision}</h2>
        <div
          className="grid gap-4 mt-[26px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}
        >
          {d.subservices.map((s) => (
            <Link key={s.slug} href={L(lang, `/service/${s.slug}`)} className="card card-link flex flex-col">
              <div className="mono text-[11.5px] text-accent-ink tracking-[0.08em]">{s.tag}</div>
              <h3 className="text-[20px] font-bold mt-[10px]">{s.name}</h3>
              <p className="text-muted text-[14px] mt-2 flex-1">{s.lead}</p>
              <span className="mt-4 arrow-link text-accent-ink">
                {ui.details} <ArrowIcon size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink text-paper">
        <div className="wrap sec-md">
          <h2 className="title-3 text-paper">{ui.ourProcess}</h2>
          <ProcessGrid lang={lang} variant="dark" />
        </div>
      </section>

      <FaqList items={d.faqs} heading={ui.commonQuestions} />

      <CtaBand lang={lang} />

      <ServiceLd name={d.title} description={d.lead} />
      <FaqLd items={d.faqs} />
      <BreadcrumbLd
        items={[
          { label: ui.home, href: L(lang, '/') },
          { label: ui.navServices, href: L(lang, '/services') },
          { label: d.title, href: L(lang, `/services/${d.slug}`) },
        ]}
      />
    </>
  );
}
