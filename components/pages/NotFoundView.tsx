import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import { L, t, type Lang } from '@/content/i18n';

export default function NotFoundView({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <>
      <section className="wrap sec-lg text-center">
        <div className="eyebrow">404</div>
        <h1 className="title-page mt-3">{d.notFoundTitle}</h1>
        <p className="lede mt-4 mx-auto max-w-[36em]">{d.notFoundLede}</p>
        <div className="flex justify-center gap-3 mt-7">
          <Link href={L(lang, '/')} className="btn btn-ink">
            {d.navHome}
          </Link>
          <Link href={L(lang, '/services')} className="btn btn-outline">
            {d.allServices}
          </Link>
        </div>
      </section>
      <CtaBand lang={lang} />
    </>
  );
}
