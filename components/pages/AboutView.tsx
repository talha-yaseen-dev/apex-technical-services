import type { Metadata } from 'next';
import Image from 'next/image';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import ProcessGrid from '@/components/ProcessGrid';
import { getAboutValues, getAboutSlot } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { BreadcrumbLd } from '@/components/JsonLd';

export const aboutMeta = (lang: Lang): Metadata => {
  const d = t(lang);
  return {
    title: d.navAbout,
    description: d.aboutLede,
    alternates: alternates(lang, '/about'),
  };
};

export default function AboutView({ lang }: { lang: Lang }) {
  const d = t(lang);
  const slot = getAboutSlot(lang);

  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={d.aboutEyebrow}
        title={d.aboutTitle}
        lead={d.aboutLede}
        crumbs={[{ label: d.home, href: L(lang, '/') }, { label: d.navAbout }]}
      />

      <section
        className="wrap sec-sm grid gap-11"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
      >
        <div>
          <h2 className="title-3">{d.aboutH2}</h2>
          <p className="text-ink2 text-[16.5px] mt-4">{d.aboutP1}</p>
          <p className="text-ink2 text-[16.5px] mt-[14px]">{d.aboutP2}</p>
          <div className="grid gap-px bg-line border border-line rounded-xl overflow-hidden mt-6 grid-cols-2">
            <Fact k="17" v={d.factActivities} />
            <Fact k="05" v={d.factDivisions} />
            <Fact k="1" v={d.factNumber} />
            <Fact k={d.navDubai} v={d.factBased} />
          </div>
        </div>
        <div className="grid gap-4 content-start">
          <div className="border border-line rounded-[14px] p-6 bg-paper2">
            <h3 className="text-[19px] font-bold">{d.credibilityTitle}</h3>
            <div className="grid gap-3 mt-4">
              {getAboutValues(lang).map((v) => (
                <div key={v} className="flex gap-3 items-start">
                  <span className="tick">✓</span>
                  <span className="text-[15px] text-ink2">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-line2 rounded-[14px] p-[22px] bg-paper">
            <div className="mono text-[11px] tracking-[0.14em] text-muted">{d.credentials}</div>
            <p className="text-[14.5px] text-muted mt-2">{d.credentialsText}</p>
          </div>
        </div>
      </section>

      <section className="bg-paper2 border-y border-line">
        <div className="wrap sec-md">
          <h2 className="title-3">{d.howWeWork}</h2>
          <ProcessGrid lang={lang} variant="light" />
        </div>
      </section>

      <section className="wrap sec-md">
        <figure className="m-0 border border-line2 rounded-2xl overflow-hidden bg-paper">
          <div className="relative bg-panel overflow-hidden" style={{ aspectRatio: slot.ratio }}>
            <Image
              src={slot.img}
              alt={slot.alt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1220px) 100vw, 1176px"
              unoptimized
            />
          </div>
          <figcaption className="p-4 border-t border-line">
            <span className="font-semibold">{slot.alt}</span>
          </figcaption>
        </figure>
      </section>

      <CtaBand lang={lang} />
      <BreadcrumbLd
        items={[
          { label: d.home, href: L(lang, '/') },
          { label: d.navAbout, href: L(lang, '/about') },
        ]}
      />
    </>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-paper p-[18px]">
      <div className="font-display font-extrabold text-[30px] text-accent-ink">{k}</div>
      <div className="text-[13.5px] text-muted">{v}</div>
    </div>
  );
}
