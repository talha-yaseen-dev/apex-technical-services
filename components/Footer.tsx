import Link from 'next/link';
import Logo from './Logo';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './icons';
import { C, mailHref, telHref, waHome } from '@/content/site';
import { getAddress, getCompanyName, getDivisions } from '@/content/localized';
import { L, t, type Lang } from '@/content/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  const d = t(lang);
  const isAr = lang === 'ar';
  return (
    <footer className="bg-dark text-dark-text">
      <div className="wrap pt-[clamp(44px,5vw,72px)] pb-[30px]">
        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          <div>
            <Logo lang={lang} onDark short />
            <p className="text-[14px] mt-4 text-dark-text2 max-w-[30em]">
              {isAr
                ? 'متخصصون في الزجاج والألمنيوم في الإمارات — إضافة إلى التشطيبات الداخلية والأعمال الكهروميكانيكية وحمامات السباحة وصيانة المباني، من مقاول واحد مرخّص.'
                : 'Glass and aluminium specialists in the UAE — plus interior finishing, MEP, swimming pools and building maintenance under one licensed contractor.'}
            </p>
            <div className="flex gap-[10px] mt-[18px]">
              <a
                href={waHome}
                target="_blank"
                rel="noopener"
                aria-label={d.whatsapp}
                className="w-10 h-10 border border-dark-line rounded-[9px] grid place-items-center text-paper hover:text-paper hover:border-accent"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={telHref}
                aria-label={d.call}
                className="w-10 h-10 border border-dark-line rounded-[9px] grid place-items-center text-paper hover:text-paper hover:border-accent"
              >
                <PhoneIcon size={17} />
              </a>
              <a
                href={mailHref}
                aria-label={d.labelEmail}
                className="w-10 h-10 border border-dark-line rounded-[9px] grid place-items-center text-paper hover:text-paper hover:border-accent"
              >
                <MailIcon size={17} />
              </a>
            </div>
          </div>

          <FooterCol title={d.divisions}>
            {getDivisions(lang).map((div) => (
              <Link
                key={div.slug}
                href={L(lang, `/services/${div.slug}`)}
                className="text-dark-text hover:text-paper text-[14.5px]"
              >
                {div.title}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title={isAr ? 'الشركة' : 'COMPANY'}>
            <Link href={L(lang, '/services')} className="text-dark-text hover:text-paper text-[14.5px]">
              {d.allServices}
            </Link>
            <Link href={L(lang, '/about')} className="text-dark-text hover:text-paper text-[14.5px]">
              {d.navAbout}
            </Link>
            <Link href={L(lang, '/projects')} className="text-dark-text hover:text-paper text-[14.5px]">
              {d.navProjects}
            </Link>
            <Link href={L(lang, '/areas/uae')} className="text-dark-text hover:text-paper text-[14.5px]">
              {isAr ? 'نطاق التغطية في الإمارات' : 'UAE coverage'}
            </Link>
            <Link href={L(lang, '/contact')} className="text-dark-text hover:text-paper text-[14.5px]">
              {d.navContact}
            </Link>
          </FooterCol>

          <FooterCol title={isAr ? 'التواصل' : 'CONTACT'}>
            <a href={telHref} dir="ltr" className="text-paper hover:text-paper font-semibold text-[14.5px]">
              {C.phoneDisp}
            </a>
            <a href={mailHref} dir="ltr" className="text-dark-text hover:text-paper text-[14.5px] break-all">
              {C.email}
            </a>
            <span className="text-dark-text2 text-[14.5px]">{getAddress(lang)}</span>
            {C.hours && <span className="mono text-[12px] text-dark-text3">{C.hours}</span>}
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-dark-line2">
        <div className="wrap py-[18px] flex flex-wrap justify-between gap-x-5 gap-y-2 mono text-[11.5px] text-[color:var(--dark-text3)]">
          <span>
            © {year} {getCompanyName(lang)} · {isAr ? 'الإمارات' : 'UAE'}
          </span>
          <span>
            {isAr ? 'تسعير مخصص لكل عمل · قياس مجاني في الموقع' : 'Every job custom-quoted · Free site measurement'}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mono text-[11px] tracking-[0.16em] text-dark-text3">{title}</div>
      <div className="grid gap-[9px] mt-[14px]">{children}</div>
    </div>
  );
}
