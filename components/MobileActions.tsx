// Mobile bottom action bar + desktop floating WhatsApp puck — from the design.
import { PhoneIcon, WhatsAppIcon } from './icons';
import { telHref, waHome } from '@/content/site';
import { t, type Lang } from '@/content/i18n';

export function MobileActionBar({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <>
      <div
        className="mob-only fixed inset-x-0 bottom-0 z-[55] bg-paper border-t border-line gap-[9px]"
        style={{ padding: '9px 12px calc(9px + env(safe-area-inset-bottom))' }}
      >
        <a
          href={telHref}
          className="flex-1 inline-flex items-center justify-center gap-2 p-[13px] rounded-[10px] bg-ink text-paper hover:text-paper font-semibold text-[15px]"
        >
          <PhoneIcon size={17} />
          {d.call}
        </a>
        <a
          href={waHome}
          target="_blank"
          rel="noopener"
          className="flex-1 inline-flex items-center justify-center gap-2 p-[13px] rounded-[10px] bg-wa text-white hover:text-white font-semibold text-[15px]"
        >
          <WhatsAppIcon size={18} />
          {d.whatsapp}
        </a>
      </div>
      {/* spacer so content isn't hidden behind the bar */}
      <div className="mob-only h-[70px]" aria-hidden />
    </>
  );
}

export function FloatingWhatsApp({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <a
      className="desk-only fixed end-6 bottom-6 z-[80] w-[60px] h-[60px] rounded-full bg-wa text-white hover:text-white items-center justify-center transition-transform hover:-translate-y-[3px]"
      href={waHome}
      target="_blank"
      rel="noopener"
      aria-label={lang === 'ar' ? 'تحدث معنا على واتساب' : 'Chat with us on WhatsApp'}
      style={{ boxShadow: '0 12px 30px -8px oklch(0.5 0.13 150/.6)' }}
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
