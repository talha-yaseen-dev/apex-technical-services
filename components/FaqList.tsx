import type { Faq } from '@/content/divisions';

/** Native <details>/<summary> accordion — no JS required. Matches the design. */
export default function FaqList({ items, heading }: { items: Faq[]; heading?: string }) {
  return (
    <section className="max-w-[900px] mx-auto sec-md px-[22px]">
      {heading && <h2 className="title-4">{heading}</h2>}
      <div className={`${heading ? 'mt-5' : ''} border-t border-line`}>
        {items.map((f, i) => (
          <details key={i} className="border-b border-line group">
            <summary className="cursor-pointer py-5 flex justify-between gap-4 items-center font-semibold text-[17px] list-none">
              {f.q}
              <span className="flex-none w-[26px] h-[26px] border border-line2 rounded-full grid place-items-center text-accent-ink text-[18px] group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="text-ink2 text-[15.5px] pb-5 max-w-[52em]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
