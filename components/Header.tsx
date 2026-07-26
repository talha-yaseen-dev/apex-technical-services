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
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [openDivision, setOpenDivision] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const d = t(lang);
  const divisions = getDivisions(lang);

  // Marks a nav link "pending" the instant it's clicked, so it stays visibly
  // active (spinner + dimmed) through the client-side transition instead of
  // looking dead until the next page finishes loading.
  const startNav = (href: string) => {
    if (href !== pathname) setPendingHref(href);
  };

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
    setPendingHref(null);
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
    // Sub-categories start collapsed each time the drawer opens.
    if (!menuOpen) setOpenDivision(null);
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const switchHref = otherLangPath(lang, pathname || '/');

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-line backdrop-blur-[10px] backdrop-saturate-150 bg-[color-mix(in_oklab,var(--paper)_92%,transparent)]">
        <TopProgressBar active={pendingHref !== null} pathname={pathname || '/'} />
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
            <NavLink href={L(lang, '/')} pending={pendingHref === L(lang, '/')} onNav={startNav}>
              {d.navHome}
            </NavLink>

            <div ref={menuRef} onMouseEnter={openMenu} onMouseLeave={scheduleClose} onFocus={openMenu} onBlur={scheduleClose}>
              <Link
                href={L(lang, '/services')}
                onClick={() => startNav(L(lang, '/services'))}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="svc-menu"
                aria-busy={pendingHref === L(lang, '/services')}
                className="px-[13px] py-[9px] rounded-[7px] font-medium text-[15px] text-ink hover:text-ink inline-flex items-center gap-[6px] hover:bg-panel transition active:scale-[0.97] data-[pending=true]:opacity-60"
                data-pending={pendingHref === L(lang, '/services')}
              >
                {d.navServices}
                {pendingHref === L(lang, '/services') ? (
                  <SpinnerIcon size={12} />
                ) : (
                  <ChevronIcon
                    size={12}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                )}
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
              <NavLink key={n.href} href={L(lang, n.href)} pending={pendingHref === L(lang, n.href)} onNav={startNav}>
                {n.label}
              </NavLink>
            ))}

            <LangSwitch
              href={switchHref}
              label={d.langName}
              title={d.switchTo}
              pending={pendingHref === switchHref}
              onNav={startNav}
            />
          </nav>

          <div className="mob-only items-center gap-2">
            <LangSwitch
              href={switchHref}
              label={d.langName}
              title={d.switchTo}
              pending={pendingHref === switchHref}
              onNav={startNav}
            />
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
              <DrawerLink href={L(lang, '/')} pending={pendingHref === L(lang, '/')} onNav={startNav}>
                {d.navHome}
              </DrawerLink>

              <div className="mono text-[10.5px] tracking-[0.2em] text-muted px-3 pt-4 pb-[6px]">{d.divisions}</div>
              {divisions.map((div) => {
                const divHref = L(lang, `/services/${div.slug}`);
                const isOpen = openDivision === div.slug;
                return (
                  <div key={div.slug} className="mb-1">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`drawer-div-${div.slug}`}
                      onClick={() => setOpenDivision(isOpen ? null : div.slug)}
                      className="w-full flex gap-3 px-3 py-[11px] rounded-[9px] text-ink hover:bg-panel items-baseline transition active:scale-[0.98]"
                    >
                      <span className="mono text-[12px] text-accent-ink">{div.num}</span>
                      <span className="font-semibold text-[15.5px] flex-1 text-start">{div.title}</span>
                      <ChevronIcon size={13} className={`flex-none mt-[3px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div id={`drawer-div-${div.slug}`} className="flex flex-col">
                        <Link
                          href={divHref}
                          onClick={() => startNav(divHref)}
                          aria-busy={pendingHref === divHref}
                          className="ps-[38px] pe-3 py-[7px] rounded-[9px] text-[13.5px] font-semibold text-accent-ink hover:bg-panel transition active:scale-[0.98] data-[pending=true]:opacity-60 inline-flex items-center gap-2"
                          data-pending={pendingHref === divHref}
                        >
                          {d.openDivision}
                          {pendingHref === divHref && <SpinnerIcon size={12} />}
                        </Link>
                        {div.subservices.map((s) => {
                          const sHref = L(lang, `/service/${s.slug}`);
                          return (
                            <Link
                              key={s.slug}
                              href={sHref}
                              onClick={() => startNav(sHref)}
                              aria-busy={pendingHref === sHref}
                              className="ps-[38px] pe-3 py-[7px] rounded-[9px] text-[13.5px] text-muted hover:text-ink hover:bg-panel transition active:scale-[0.98] data-[pending=true]:opacity-60"
                              data-pending={pendingHref === sHref}
                            >
                              {s.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="h-px bg-line mx-3 my-3" />

              <DrawerLink href={L(lang, '/services')} pending={pendingHref === L(lang, '/services')} onNav={startNav}>
                {d.allServices}
              </DrawerLink>
              {NAV.map((n) => (
                <DrawerLink key={n.href} href={L(lang, n.href)} pending={pendingHref === L(lang, n.href)} onNav={startNav}>
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

type NavProps = { pending?: boolean; onNav?: (href: string) => void };

function LangSwitch({ href, label, title, pending, onNav }: { href: string; label: string; title: string } & NavProps) {
  return (
    <Link
      href={href}
      title={title}
      lang={label === 'English' ? 'en' : 'ar'}
      onClick={() => onNav?.(href)}
      aria-busy={pending}
      data-pending={pending}
      className="inline-flex items-center gap-[7px] ps-[13px] pe-[15px] py-[8px] rounded-full border border-line2 text-ink hover:text-ink hover:border-accent hover:bg-panel font-medium text-[14px] whitespace-nowrap transition active:scale-[0.96] data-[pending=true]:opacity-60"
    >
      {pending ? <SpinnerIcon size={14} className="flex-none" /> : <GlobeIcon size={15} className="flex-none opacity-80" />}
      {label}
    </Link>
  );
}

function NavLink({ href, children, pending, onNav }: { href: string; children: React.ReactNode } & NavProps) {
  return (
    <Link
      href={href}
      onClick={() => onNav?.(href)}
      aria-busy={pending}
      data-pending={pending}
      className="px-[13px] py-[9px] rounded-[7px] font-medium text-[15px] text-ink hover:text-ink hover:bg-panel inline-flex items-center gap-[6px] transition active:scale-[0.97] data-[pending=true]:opacity-60"
    >
      {children}
      {pending && <SpinnerIcon size={12} />}
    </Link>
  );
}

function DrawerLink({ href, children, pending, onNav }: { href: string; children: React.ReactNode } & NavProps) {
  return (
    <Link
      href={href}
      onClick={() => onNav?.(href)}
      aria-busy={pending}
      data-pending={pending}
      className="flex items-center gap-2 p-3 rounded-[9px] font-semibold text-base text-ink hover:text-ink hover:bg-panel transition active:scale-[0.98] data-[pending=true]:opacity-60"
    >
      <span className="flex-1">{children}</span>
      {pending && <SpinnerIcon size={14} />}
    </Link>
  );
}

function SpinnerIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
      className={`animate-spin ${className}`}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Thin bar that eases in the instant a nav link is clicked and completes
// once `pathname` actually changes — visible proof the click registered
// while the next page loads, instead of the header looking unresponsive.
function TopProgressBar({ active, pathname }: { active: boolean; pathname: string }) {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (!active) return;
    setVisible(true);
    setWidth(0);
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setWidth(78)));
    return () => cancelAnimationFrame(id);
  }, [active]);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    setWidth(100);
    const timer = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 260);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;
  return (
    <div className="absolute inset-x-0 top-0 h-[2.5px] overflow-hidden pointer-events-none z-[80]">
      <div
        className="h-full bg-accent"
        style={{ width: `${width}%`, transition: `width ${width === 100 ? 150 : 550}ms ease-out` }}
      />
    </div>
  );
}
