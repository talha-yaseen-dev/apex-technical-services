'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Progressive scroll-reveal. Content that sits below the fold fades and rises
// into view as the visitor scrolls; anything already on screen is left exactly
// as rendered (no flash-of-hidden-content). Visitors who ask their OS for
// reduced motion get nothing applied at all.
//
// It auto-targets common content blocks (headings, cards, gallery figures,
// grid items, ledes) so pages don't each need wiring up. Re-runs on navigation.
const SELECTOR = ['main h2', 'main .card', 'main .photo-card', 'main figure', 'main .grid-auto > *', 'main .lede'].join(
  ',',
);

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );

    const tag = () => {
      const vh = window.innerHeight;
      const perParent = new Map<Element, number>();
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.classList.contains('in-view')) return;
        // Already tagged on a previous pass (e.g. StrictMode remount): just make
        // sure the current observer is watching it.
        if (el.classList.contains('reveal')) {
          io.observe(el);
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.height === 0 || r.top <= vh * 0.85) return; // on-screen already — leave it be

        const parent = el.parentElement || document.body;
        const i = perParent.get(parent) ?? 0;
        perParent.set(parent, i + 1);
        (el as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(i * 70, 280)}ms`);

        el.classList.add('reveal');
        io.observe(el);
      });
    };

    // Run now (DOM is committed) and again next frame to catch late layout
    // shifts from web-font loading. rAF is a bonus, not required.
    tag();
    const raf = requestAnimationFrame(tag);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
