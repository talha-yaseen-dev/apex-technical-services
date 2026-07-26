import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import ProcessGrid from '@/components/ProcessGrid';
import ProjectGallery from '@/components/ProjectGallery';
import { InfoIcon } from '@/components/icons';
import { getProjectSlots } from '@/content/localized';
import { L, t, alternates, type Lang } from '@/content/i18n';
import { BreadcrumbLd } from '@/components/JsonLd';

export const projectsMeta = (lang: Lang): Metadata => {
  const d = t(lang);
  return {
    title: d.navProjects,
    description: d.projectsLede,
    alternates: alternates(lang, '/projects'),
  };
};

export default function ProjectsView({ lang }: { lang: Lang }) {
  const d = t(lang);

  return (
    <>
      <PageHead
        lang={lang}
        eyebrow={d.projectsEyebrow}
        title={d.projectsTitle}
        lead={d.projectsLede}
        crumbs={[{ label: d.home, href: L(lang, '/') }, { label: d.navProjects }]}
      />

      <section className="wrap sec-sm">
        <div className="border border-line2 rounded-[14px] p-6 bg-accent-soft flex gap-[14px] items-start">
          <span className="flex-none text-accent-ink mt-[2px]">
            <InfoIcon />
          </span>
          <p className="text-[15px] text-ink2">{d.projectsNote}</p>
        </div>

        <ProjectGallery
          slots={getProjectSlots(lang)}
          labels={{ prev: d.galleryPrev, next: d.galleryNext, close: d.galleryClose }}
          rtl={lang === 'ar'}
        />

        <div className="mt-[34px] border-t border-line pt-7">
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold font-display">{d.typicalProject}</h2>
          <ProcessGrid lang={lang} variant="light" />
        </div>
      </section>

      <CtaBand lang={lang} />
      <BreadcrumbLd
        items={[
          { label: d.home, href: L(lang, '/') },
          { label: d.navProjects, href: L(lang, '/projects') },
        ]}
      />
    </>
  );
}
