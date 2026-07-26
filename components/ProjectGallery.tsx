'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { CARD_RATIO, asset, type Slot } from '@/content/site';
import { ArrowIcon, CloseIcon } from './icons';

type Labels = { prev: string; next: string; close: string };

// Gallery grid + full-screen lightbox. Clicking a photo opens it large with
// previous/next navigation (buttons, arrow keys, and backdrop-to-close).
export default function ProjectGallery({ slots, labels, rtl }: { slots: Slot[]; labels: Labels; rtl: boolean }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const n = slots.length;

  const show = useCallback((i: number) => setIndex(((i % n) + n) % n), [n]);
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % n)), [n]);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + n) % n)), [n]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, next, prev]);

  const current = index === null ? null : slots[index];
  const arrowBtn =
    'absolute top-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-white/12 hover:bg-white/22 text-white transition-colors';

  return (
    <>
      <div className="grid gap-4 mt-[26px]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
        {slots.map((s, i) => (
          <figure key={s.id} className="photo-card m-0">
            <button
              type="button"
              onClick={() => show(i)}
              aria-label={s.alt}
              className="relative block w-full m-0 p-0 border-0 bg-panel overflow-hidden cursor-zoom-in"
              style={{ aspectRatio: CARD_RATIO }}
            >
              <Image
                src={asset(s.img)}
                alt={s.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 300px"
                unoptimized
              />
              <span className="photo-tag">{s.tag}</span>
            </button>
            <figcaption className="flex-1 px-4 py-[15px] border-t border-line">
              <div className="font-semibold text-[14.5px]">{s.alt}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      {open && current && (
        <div
          id="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-[oklch(0.14_0.02_255/.92)] backdrop-blur-[2px]"
        >
          <div className="absolute top-5 start-5 mono text-[13px] text-white/75 tabular-nums">
            {index! + 1} / {n}
          </div>
          <button
            type="button"
            aria-label={labels.close}
            onClick={close}
            className="absolute top-4 end-4 grid place-items-center w-11 h-11 rounded-full bg-white/12 hover:bg-white/22 text-white transition-colors"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            aria-label={labels.prev}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className={`${arrowBtn} start-3 sm:start-5`}
          >
            <ArrowIcon size={22} className={rtl ? '' : 'rotate-180'} />
          </button>

          <figure className="m-0 flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(current.img)}
              alt={current.alt}
              className="max-w-[86vw] max-h-[76vh] object-contain rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,.7)]"
            />
            <figcaption className="text-white/85 text-center text-[14px] leading-snug max-w-[64ch] px-6">
              {current.alt}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label={labels.next}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className={`${arrowBtn} end-3 sm:end-5`}
          >
            <ArrowIcon size={22} className={rtl ? 'rotate-180' : ''} />
          </button>
        </div>
      )}
    </>
  );
}
