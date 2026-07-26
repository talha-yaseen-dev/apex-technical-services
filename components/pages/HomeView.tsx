import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { telHref, waHome, waAmc, CARD_RATIO, asset } from '@/content/site';
import {
  getDivisions,
  getWhyUs,
  getGlassTypes,
  getAluFinishes,
  getAmcPoints,
  getFeaturedSlots,
} from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { ArrowIcon, DivisionIcon, PhoneIcon, WhatsAppIcon, WhyUsIcon } from '@/components/icons';
import { CurtainWallElevation } from '@/components/Diagram';
import ProcessGrid from '@/components/ProcessGrid';
import CtaBand from '@/components/CtaBand';

export const homeMeta = (lang: Lang): Metadata => ({
  alternates: alternates(lang, '/'),
});

export default function HomeView({ lang }: { lang: Lang }) {
  const d = t(lang);
  const divisions = getDivisions(lang);
  const flip = lang === 'ar' ? 'rotate-180' : '';

  return (
    <>
      {/* HERO */}
      <section className="hero-fit border-b border-line bg-gradient-to-b from-[var(--paper)] to-[var(--paper2)]">
        <div
          className="wrap sec-hero grid gap-10 items-center w-full"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))' }}
        >
          <div>
            <div className="inline-flex items-center gap-[9px] mono text-[12px] tracking-[0.1em] text-muted border border-line2 rounded-full px-[13px] py-[6px]">
              <span className="w-[7px] h-[7px] bg-accent rounded-full" />
              {d.heroBadge}
            </div>
            <h1 className="title-hero mt-5">{d.heroTitle}</h1>
            <p className="lede mt-4 max-w-[30em]">{d.heroLede}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href={waHome} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon size={19} />
                {d.whatsappPhoto}
              </a>
              <a href={telHref} className="btn btn-ink">
                <PhoneIcon size={18} />
                {d.callWorkshop}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-[22px] gap-y-2 mt-5 mono text-[12.5px] text-muted">
              {[d.heroTick1, d.heroTick2, d.heroTick3].map((tick) => (
                <span key={tick} className="inline-flex items-center gap-[7px]">
                  <span className="text-accent-ink">✓</span> {tick}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-art">
            <CurtainWallElevation lang={lang} />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="wrap sec-lg">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-[34px]">
          <div>
            <div className="eyebrow">{d.whatWeDo}</div>
            <h2 className="title-1 mt-3">{d.whatWeDoTitle}</h2>
            <p className="mt-3 text-ink2 text-[17px] max-w-[44em]">{d.whatWeDoLede}</p>
          </div>
          <Link href={L(lang, '/services')} className="arrow-link">
            {d.allServices} <ArrowIcon size={14} />
          </Link>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))' }}>
          {divisions.map((div) => (
            <Link key={div.slug} href={L(lang, `/services/${div.slug}`)} className="card card-link flex flex-col">
              <div className="flex items-center justify-between">
                <span className="mono text-[13px] text-accent-ink font-semibold">{div.num}</span>
                <span className="w-[38px] h-[38px] border border-line rounded-[9px] grid place-items-center text-accent-ink">
                  <DivisionIcon name={div.icon} />
                </span>
              </div>
              <h3 className="text-[22px] font-bold mt-[18px]">{div.title}</h3>
              <p className="text-muted text-[14.5px] mt-2 flex-1">{div.lead}</p>
              <div className="flex flex-wrap gap-[6px] mt-4">
                {div.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
              <span className="mt-[18px] arrow-link text-accent-ink">
                {d.explore} <ArrowIcon size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS (dark) */}
      <section className="bg-ink text-paper">
        <div className="wrap sec">
          <div>
            <div className="mono text-[12px] tracking-[0.16em] text-accent-lite">{d.howItWorks}</div>
            <h2 className="title-1 mt-3 max-w-[16em] text-paper">{d.howItWorksTitle}</h2>
          </div>
          <ProcessGrid lang={lang} variant="dark" />
        </div>
      </section>

      {/* WHY US */}
      <section className="wrap sec">
        <div className="max-w-[44em]">
          <div className="eyebrow">{d.whyUs}</div>
          <h2 className="title-1 mt-3">{d.whyUsTitle}</h2>
          <p className="mt-3 text-ink2 text-[17px]">{d.whyUsLede}</p>
        </div>
        <div
          className="grid gap-px bg-line border border-line rounded-[14px] overflow-hidden mt-[34px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}
        >
          {getWhyUs(lang).map((w) => (
            <div key={w.t} className="bg-paper p-[26px]">
              <div className="w-10 h-10 rounded-[9px] bg-accent-soft text-accent-ink grid place-items-center">
                <WhyUsIcon name={w.icon} />
              </div>
              <h3 className="text-[18px] font-bold mt-4">{w.t}</h3>
              <p className="text-muted text-[14.5px] mt-[7px]">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-paper2 border-y border-line">
        <div
          className="wrap sec grid gap-11"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
        >
          <div>
            <div className="eyebrow">{d.specifyWithUs}</div>
            <h2 className="title-2 mt-3">{d.materialsTitle}</h2>
            <p className="text-ink2 text-base mt-3 max-w-[38em]">{d.materialsLede}</p>
            <Link href={L(lang, '/contact')} className="inline-flex items-center gap-2 mt-5 arrow-link">
              {d.talkOptions} <ArrowIcon size={14} />
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="border border-line rounded-xl p-5 bg-paper">
              <div className="mono text-[11px] tracking-[0.14em] text-muted">{d.glassTypes}</div>
              <div className="flex flex-wrap gap-[7px] mt-3">
                {getGlassTypes(lang).map((g) => (
                  <span key={g} className="pill">
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-line rounded-xl p-5 bg-paper">
              <div className="mono text-[11px] tracking-[0.14em] text-muted">{d.aluFinishes}</div>
              <div className="flex flex-wrap gap-[7px] mt-3">
                {getAluFinishes(lang).map((a) => (
                  <span key={a} className="pill">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMC BAND */}
      <section className="wrap sec">
        <div
          className="border border-line2 rounded-[18px] overflow-hidden grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
        >
          <div className="p-[clamp(28px,4vw,48px)] bg-accent text-ink">
            <div className="mono text-[12px] tracking-[0.16em] opacity-90">{d.amcEyebrow}</div>
            <h2 className="title-2 mt-3 text-ink">{d.amcTitle}</h2>
            <p className="text-[16.5px] mt-[14px] opacity-90 max-w-[34em]">{d.amcLede}</p>
            <a
              href={waAmc}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[9px] mt-[22px] px-[22px] py-[13px] rounded-[10px] bg-ink text-paper hover:text-paper hover:bg-ink2 font-semibold transition-colors"
            >
              {d.amcCta} <ArrowIcon size={15} className={flip} />
            </a>
          </div>
          <div className="p-[clamp(28px,4vw,48px)] bg-paper grid gap-[14px] content-center">
            {getAmcPoints(lang).map((p) => (
              <div key={p} className="flex gap-[13px] items-start">
                <span
                  className="flex-none w-[26px] h-[26px] rounded-[7px] bg-accent-soft text-accent-ink grid place-items-center"
                  style={{ fontSize: 14 }}
                >
                  ✓
                </span>
                <span className="text-[15.5px] text-ink2">{p}</span>
              </div>
            ))}
            <Link href={L(lang, '/services/building-maintenance')} className="mono text-[12.5px] mt-[6px]">
              {d.seeBuildingMaintenance}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-paper2 border-y border-line">
        <div className="wrap sec">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-[30px]">
            <div>
              <div className="eyebrow">{d.ourWork}</div>
              <h2 className="title-2 mt-3">{d.ourWorkTitle}</h2>
              <p className="text-ink2 text-base mt-[10px] max-w-[40em]">{d.ourWorkLede}</p>
            </div>
            <Link href={L(lang, '/projects')} className="arrow-link">
              {d.viewAllProjects}
            </Link>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
            {getFeaturedSlots(lang).map((s) => (
              <figure key={s.id} className="photo-card m-0">
                <div className="relative bg-panel overflow-hidden" style={{ aspectRatio: CARD_RATIO }}>
                  <Image
                    src={asset(s.img)}
                    alt={s.alt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 400px"
                    unoptimized
                  />
                </div>
                <figcaption className="flex-1 px-4 py-[14px] border-t border-line">
                  <div className="font-semibold text-[14.5px]">{s.alt}</div>
                  <div className="mono text-[11.5px] text-accent-ink mt-[5px]">{s.tag}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
