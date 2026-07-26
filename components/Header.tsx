'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { ChevronIcon, CloseIcon, GlobeIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from './icons';
import { C, mailHref, telHref, waHome } from '@/content/site';
import { getAddress, getDivisions } from '@/content/localized';
import { L, otherLangPath, t, type Lang } from '@/content/i18n';

export default function Header({ lang }: { lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const d = t(lang);
  const divisions = getDivisions(lang);

  // Hover-intent: open immediately, but close on a short delay so the pointer
  // can cross the small gap from the trigger to the panel without it snapping shut.
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  // Order mirrors the desktop nav; Services is rendered separately because it
  // expands into the division list.
  const NAV = [
    { href: '/projects', label: d.navProjects },
    { href: '/about', label: d.navAbout },
    { href: '/areas/uae', label: d.navDubai },
    { href: '/contact', label: d.navContact },
  ];

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuRef.current && !menuRef.current.contains(target)) setServicesOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const switchHref = otherLangPath(lang, pathname || '/');

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-line backdrop-blur-[10px] backdrop-saturate-150 bg-[color-mix(in_oklab,var(--paper)_92%,transparent)]">
        {/* utility bar */}
        <div className="bg-dark text-paper">
          <div className="wrap flex flex-wrap items-center justify-between gap-x-[22px] gap-y-[6px] py-[7px] mono text-[12px] tracking-[0.01em]">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-[6px]">
              <a href={telHref} dir="ltr" className="text-paper hover:text-paper inline-flex items-center gap-[7px]">
                <PhoneIcon size={13} />
                {C.phoneDisp}
              </a>
              <a
                href={waHome}
                target="_blank"
                rel="noopener"
                className="text-paper hover:text-paper inline-flex items-center gap-[7px]"
              >
                <WhatsAppIcon size={13} />
                {d.whatsapp}
              </a>
              <a
                href={mailHref}
                dir="ltr"
                className="hidden min-[1024px]:inline-flex text-paper hover:text-paper opacity-85"
              >
                {C.email}
              </a>
            </div>
            {/* Hidden below 1280px so the bar stays one line — a wrapped bar
                changes header height, which the home hero sizes against. */}
            <div className="hidden min-[1280px]:flex items-center gap-x-5 opacity-[0.72]">
              <span>{getAddress(lang)}</span>
              {C.hours && (
                <>
                  <span>·</span>
                  <span>{C.hours}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* main bar */}
        <div className="wrap relative flex items-center justify-between gap-[18px] py-3">
          <Logo lang={lang} />

          <nav className="desk-only items-center gap-1" aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary'}>
            <NavLink href={L(lang, '/')}>{d.navHome}</NavLink>

            <div ref={menuRef} onMouseEnter={openMenu} onMouseLeave={scheduleClose} onFocus={openMenu} onBlur={scheduleClose}>
              <Link
                href={L(lang, '/services')}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="svc-menu"
                className="px-[13px] py-[9px] rounded-[7px] font-medium text-[15px] text-ink hover:text-ink inline-flex items-center gap-[6px] hover:bg-panel"
              >
                {d.navServices}
                <ChevronIcon
                  size={12}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </Link>

              {servicesOpen && (
                <div
                  id="svc-menu"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                  className="absolute top-[calc(100%+10px)] end-2 w-[min(900px,calc(100vw-40px))] max-h-[min(74vh,640px)] overflow-y-auto bg-paper border border-line rounded-2xl p-4 z-[70] shadow-[0_30px_70px_-28px_oklch(0.2_0.02_255/.45)]"
                >
                  <div className="grid gap-x-5 gap-y-5 [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
                    {divisions.map((div) => (
                      <div key={div.slug} className="min-w-0">
                        <Link
                          href={L(lang, `/services/${div.slug}`)}
                          className="flex gap-2 items-baseline px-2 py-[7px] rounded-lg text-ink hover:text-ink hover:bg-panel"
                        >
                          <span className="mono text-[11px] text-accent-ink flex-none">{div.num}</span>
                          <span>
                            <span className="block font-semibold text-[13.5px] leading-tight">{div.title}</span>
                            <span className="block text-[11.5px] text-muted leading-tight mt-[2px]">{div.tagline}</span>
                          </span>
                        </Link>
                        <div className="mt-1 flex flex-col">
                          {div.subservices.map((s) => (
                            <Link
                              key={s.slug}
                              href={L(lang, `/service/${s.slug}`)}
                              className="ps-[30px] pe-2 py-[5px] rounded-md text-[12.5px] text-muted hover:text-ink hover:bg-panel"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV.map((n) => (
              <NavLink key={n.href} href={L(lang, n.href)}>
                {n.label}
              </NavLink>
            ))}

            <LangSwitch href={switchHref} label={d.langName} title={d.switchTo} />
          </nav>

          <div className="mob-only items-center gap-2">
            <LangSwitch href={switchHref} label={d.langName} title={d.switchTo} />
            <button
              type="button"
              className="flex items-center justify-center w-11 h-11 border border-line2 bg-paper rounded-[9px] cursor-pointer text-ink"
              aria-label={d.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)} className="fixed inset-0 z-[90] bg-[oklch(0.2_0.02_255/.5)]" />
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={d.menu}
            className="fixed inset-y-0 end-0 w-[min(88vw,360px)] bg-paper z-[100] flex flex-col shadow-[-20px_0_60px_-20px_oklch(0.2_0.02_255/.4)]"
          >
            <div className="flex items-center justify-between px-[18px] py-4 border-b border-line">
              <span className="mono text-[11px] tracking-[0.22em] text-muted">{d.menu}</span>
              <button
                type="button"
                aria-label={d.closeMenu}
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 border border-line2 bg-paper rounded-[9px] cursor-pointer text-ink grid place-items-center"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="overflow-y-auto px-3 pt-[10px] pb-5">
              <DrawerLink href={L(lang, '/')}>{d.navHome}</DrawerLink>

              <div className="mono text-[10.5px] tracking-[0.2em] text-muted px-3 pt-4 pb-[6px]">{d.divisions}</div>
              {divisions.map((div) => (
                <div key={div.slug} className="mb-1">
                  <Link
                    href={L(lang, `/services/${div.slug}`)}
                    className="flex gap-3 px-3 py-[11px] rounded-[9px] text-ink hover:text-ink hover:bg-panel items-baseline"
                  >
                    <span className="mono text-[12px] text-accent-ink">{div.num}</span>
                    <span className="font-semibold text-[15.5px]">{div.title}</span>
                  </Link>
                  <div className="flex flex-col">
                    {div.subservices.map((s) => (
                      <Link
                        key={s.slug}
                        href={L(lang, `/service/${s.slug}`)}
                        className="ps-[38px] pe-3 py-[7px] rounded-[9px] text-[13.5px] text-muted hover:text-ink hover:bg-panel"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="h-px bg-line mx-3 my-3" />

              <DrawerLink href={L(lang, '/services')}>{d.allServices}</DrawerLink>
              {NAV.map((n) => (
                <DrawerLink key={n.href} href={L(lang, n.href)}>
                  {n.label}
                </DrawerLink>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function LangSwitch({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <Link
      href={href}
      title={title}
      lang={label === 'English' ? 'en' : 'ar'}
      className="inline-flex items-center gap-[7px] ps-[13px] pe-[15px] py-[8px] rounded-full border border-line2 text-ink hover:text-ink hover:border-accent hover:bg-panel font-medium text-[14px] whitespace-nowrap transition-colors"
    >
      <GlobeIcon size={15} className="flex-none opacity-80" />
      {label}
    </Link>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-[13px] py-[9px] rounded-[7px] font-medium text-[15px] text-ink hover:text-ink hover:bg-panel"
    >
      {children}
    </Link>
  );
}

function DrawerLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block p-3 rounded-[9px] font-semibold text-base text-ink hover:text-ink hover:bg-panel">
      {children}
    </Link>
  );
}
