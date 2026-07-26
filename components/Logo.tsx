import Link from 'next/link';
import Image from 'next/image';
import { L, t, type Lang } from '@/content/i18n';
import { asset } from '@/content/site';

export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <Image
      src={asset('/logo.png')}
      alt=""
      width={size}
      height={size}
      priority
      unoptimized
      className="flex-none"
      style={{ width: size, height: size }}
    />
  );
}

/**
 * Apex badge + wordmark. The badge is the mark; the name stays live text so
 * it is selectable, indexable and legible at nav size.
 */
export default function Logo({
  lang,
  short = false,
  onDark = false,
  size = 44,
}: {
  lang: Lang;
  short?: boolean;
  onDark?: boolean;
  size?: number;
}) {
  const d = t(lang);
  const sub = short ? d.brandSubShort : d.brandSub;
  const isAr = lang === 'ar';
  return (
    <Link
      href={L(lang, '/')}
      aria-label={isAr ? 'أبيكس — الصفحة الرئيسية' : 'Apex home'}
      className={`flex items-center gap-3 ${onDark ? 'text-paper' : 'text-ink'}`}
    >
      <LogoMark size={size} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-[19px] tracking-[-0.01em] ${onDark ? 'text-paper' : ''}`}>
          {isAr ? 'أبيكس' : 'APEX'}
        </span>
        <span
          className={`mono text-[9.5px] mt-[3px] ${isAr ? 'tracking-normal' : 'tracking-[0.28em]'} ${
            onDark ? 'text-dark-text3' : 'text-muted'
          }`}
        >
          {sub}
        </span>
      </span>
    </Link>
  );
}
