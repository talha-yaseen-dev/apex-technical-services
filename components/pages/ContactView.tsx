import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import ContactForm from '@/components/ContactForm';
import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons';
import { C, mailHref, telHref, waHome } from '@/content/site';
import { getAddress } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { BreadcrumbLd } from '@/components/JsonLd';

export const contactMeta = (lang: Lang): Metadata => {
  const d = t(lang);
  return {
    title: d.navContact,
    description: d.contactLede,
    alternates: alternates(lang, '/contact'),
  };
};

export default function ContactView({ lang }: { lang: Lang }) {
  const d = t(lang);

  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={d.contactEyebrow}
        title={d.contactTitle}
        lead={d.contactLede}
        crumbs={[{ label: d.home, href: L(lang, '/') }, { label: d.navContact }]}
      />

      <section
        className="wrap sec-sm grid gap-9"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}
      >
        <div>
          <h2 className="title-3">{d.reachUs}</h2>
          <p className="text-ink2 text-base mt-3">{d.reachUsLede}</p>
          <div className="grid gap-3 mt-6">
            <a
              href={waHome}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-[14px] border border-line rounded-xl p-[18px] bg-paper text-ink hover:text-ink hover:border-wa"
            >
              <span className="flex-none w-11 h-11 rounded-[10px] bg-wa text-white grid place-items-center">
                <WhatsAppIcon size={22} />
              </span>
              <span>
                <span className="mono text-[11px] text-muted tracking-[0.12em]">{d.labelWhatsapp}</span>
                <span className="block font-bold text-[17px]" dir="ltr">
                  {C.phoneDisp}
                </span>
              </span>
            </a>
            <a
              href={telHref}
              className="flex items-center gap-[14px] border border-line rounded-xl p-[18px] bg-paper text-ink hover:text-ink hover:border-accent"
            >
              <span className="flex-none w-11 h-11 rounded-[10px] bg-ink text-paper grid place-items-center">
                <PhoneIcon size={20} />
              </span>
              <span>
                <span className="mono text-[11px] text-muted tracking-[0.12em]">{d.labelPhone}</span>
                <span className="block font-bold text-[17px]" dir="ltr">
                  {C.phoneDisp}
                </span>
              </span>
            </a>
            <a
              href={mailHref}
              className="flex items-center gap-[14px] border border-line rounded-xl p-[18px] bg-paper text-ink hover:text-ink hover:border-accent"
            >
              <span className="flex-none w-11 h-11 rounded-[10px] bg-panel text-accent-ink grid place-items-center">
                <MailIcon size={20} />
              </span>
              <span>
                <span className="mono text-[11px] text-muted tracking-[0.12em]">{d.labelEmail}</span>
                <span className="block font-bold text-[16px] break-all" dir="ltr">
                  {C.email}
                </span>
              </span>
            </a>
            <div className="border border-line rounded-xl p-[18px] bg-paper2">
              <div className="mono text-[11px] text-muted tracking-[0.12em]">{d.labelWorkshop}</div>
              <div className="font-semibold text-[15.5px] mt-1">{getAddress(lang)}</div>
              {C.hours && <div className="mono text-[12px] text-muted mt-2">{d.labelHours} · {C.hours}</div>}
            </div>
          </div>
        </div>

        <ContactForm lang={lang} />
      </section>

      <CtaBand lang={lang} />
      <BreadcrumbLd
        items={[
          { label: d.home, href: L(lang, '/') },
          { label: d.navContact, href: L(lang, '/contact') },
        ]}
      />
    </>
  );
}
