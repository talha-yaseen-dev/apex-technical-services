import { getProcess } from '@/content/localized';
import type { Lang } from '@/content/i18n';

type Variant = 'dark' | 'light' | 'compact';

export default function ProcessGrid({ lang, variant = 'dark' }: { lang: Lang; variant?: Variant }) {
  const process = getProcess(lang);
  if (variant === 'dark') {
    return (
      <div
        className="grid gap-4 mt-[38px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))' }}
      >
        {process.map((p) => (
          <div key={p.n} className="border border-dark-line rounded-[14px] p-6 bg-dark-card">
            <div className="font-display font-extrabold text-[44px] text-accent-lite leading-none">{p.n}</div>
            <h3 className="text-[19px] font-bold mt-[14px] text-paper">{p.t}</h3>
            <p className="text-dark-text2 text-[14.5px] mt-2">{p.d}</p>
          </div>
        ))}
      </div>
    );
  }
  if (variant === 'compact') {
    return (
      <div className="grid gap-4 mt-[22px]">
        {process.map((p) => (
          <div key={p.n} className="flex gap-[14px]">
            <span className="mono font-semibold text-accent-ink flex-none">{p.n}</span>
            <span>
              <span className="font-semibold block">{p.t}</span>
              <span className="text-muted text-[14px]">{p.d}</span>
            </span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className="grid gap-4 mt-[22px]"
      style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))' }}
    >
      {process.map((p) => (
        <div key={p.n} className="border border-line rounded-[14px] p-6 bg-paper">
          <div className="font-display font-extrabold text-[40px] text-accent-ink leading-none">{p.n}</div>
          <h3 className="text-[18px] font-bold mt-3">{p.t}</h3>
          <p className="text-muted text-[14.5px] mt-[7px]">{p.d}</p>
        </div>
      ))}
    </div>
  );
}
