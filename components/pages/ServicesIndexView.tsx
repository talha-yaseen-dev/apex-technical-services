import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import { ArrowIcon, DivisionIcon } from '@/components/icons';
import { getDivisions } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { BreadcrumbLd } from '@/components/JsonLd';

export const servicesMeta = (lang: Lang): Metadata => {
  const d = t(lang);
  return {
    title: d.navServices,
    description: d.servicesLede,
    alternates: alternates(lang, '/services'),
  };
};

export default function ServicesIndexView({ lang }: { lang: Lang }) {
  const d = t(lang);

  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={d.servicesEyebrow}
        title={d.servicesTitle}
        lead={d.servicesLede}
        crumbs={[{ label: d.home, href: L(lang, '/') }, { label: d.navServices }]}
      />

      <section className="wrap sec-sm">
        <div className="grid gap-[26px]">
          {getDivisions(lang).map((div) => (
            <div key={div.slug} className="border border-line rounded-2xl overflow-hidden">
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
                <div className="p-[clamp(24px,3vw,36px)] bg-paper2 border-e border-line">
                  <div className="flex items-center gap-3">
                    <span className="mono text-[14px] text-accent-ink font-semibold">{div.num}</span>
                    <span className="w-10 h-10 border border-line2 rounded-[9px] grid place-items-center text-accent-ink">
                      <DivisionIcon name={div.icon} />
                    </span>
                  </div>
                  <h2 className="text-[26px] font-extrabold mt-4">{div.title}</h2>
                  <p className="text-muted text-[15px] mt-[10px]">{div.lead}</p>
                  <Link
                    href={L(lang, `/services/${div.slug}`)}
                    className="inline-flex items-center gap-2 mt-[18px] font-semibold text-[14.5px]"
                  >
                    {d.openDivision} <ArrowIcon size={15} />
                  </Link>
                </div>
                <div className="p-[clamp(24px,3vw,36px)] grid gap-[2px] content-start">
                  {div.subservices.map((s) => (
                    <Link
                      key={s.slug}
                      href={L(lang, `/service/${s.slug}`)}
                      className="flex items-center justify-between gap-3 px-2 py-3 border-b border-line text-ink hover:text-accent-ink hover:ps-[14px] transition-all"
                    >
                      <span className="font-medium text-[15.5px]">{s.name}</span>
                      <span className="mono text-[11.5px] text-muted">{s.tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand lang={lang} />
      <BreadcrumbLd
        items={[
          { label: d.home, href: L(lang, '/') },
          { label: d.navServices, href: L(lang, '/services') },
        ]}
      />
    </>
  );
}
