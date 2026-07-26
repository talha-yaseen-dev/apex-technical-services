import Link from 'next/link';
import { L, t, type Lang } from '@/content/i18n';
import { asset } from '@/content/site';

/**
 * Apex wordmark logo (double-peak "A" + PEX) with the trade/locale subtitle
 * beneath it. The wordmark ships in black for light surfaces and white for
 * dark ones (footer). Served from /public so it works under the Pages basePath
 * via asset().
 */
export default function Logo({
  lang,
  short = false,
  onDark = false,
  size = 26,
}: {
  lang: Lang;
  short?: boolean;
  onDark?: boolean;
  size?: number;
}) {
  const d = t(lang);
  const sub = short ? d.brandSubShort : d.brandSub;
  const isAr = lang === 'ar';
  const src = onDark ? '/logo-wordmark-white.png' : '/logo-wordmark.png';
  return (
    <Link
      href={L(lang, '/')}
      aria-label={isAr ? 'أبيكس — الصفحة الرئيسية' : 'Apex home'}
      className={`flex flex-col ${isAr ? 'items-end' : 'items-start'} gap-[4px] ${onDark ? 'text-paper' : 'text-ink'}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt="APEX"
        height={size}
        style={{ height: size, width: 'auto' }}
        className="block"
      />
      <span
        className={`mono text-[9px] ${isAr ? 'tracking-normal' : 'tracking-[0.22em]'} ${
          onDark ? 'text-dark-text3' : 'text-muted'
        }`}
      >
        {sub}
      </span>
    </Link>
  );
}
