import { PhoneIcon, WhatsAppIcon } from './icons';
import { C, telHref, waFor } from '@/content/site';
import { t, type Lang } from '@/content/i18n';

/** The accent CTA band that sits at the foot of most pages. */
export default function CtaBand({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    // Gold band carries dark text — white on brand gold is only 2.4:1.
    <section className="bg-accent">
      <div className="wrap sec-md text-center text-ink">
        <div className="mono text-[12px] tracking-[0.16em] opacity-90">{d.ctaEyebrow}</div>
        <h2 className="font-display font-extrabold mt-[14px] text-[clamp(28px,4vw,46px)] max-w-[16em] mx-auto">
          {d.ctaTitle}
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mt-7">
          <a
            href={waFor()}
            target="_blank"
            rel="noopener"
            className="btn bg-ink text-paper hover:text-paper hover:bg-ink2"
          >
            <WhatsAppIcon size={19} />
            {d.whatsappUs}
          </a>
          <a
            href={telHref}
            className="btn bg-paper text-ink hover:text-ink hover:bg-paper2 border border-ink/15"
          >
            <PhoneIcon size={17} />
            {d.call} {C.phoneDisp}
          </a>
        </div>
      </div>
    </section>
  );
}
