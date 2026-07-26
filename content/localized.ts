// Single place where the English source data and the Arabic overlays are
// merged. Pages only ever talk to these getters, never to the raw tables.

import { DIVISIONS, SERVICE_MAP, type Faq, type IconKey } from './divisions';
import { DIVISIONS_AR, SERVICES_AR } from './divisions.ar';
import {
  ABOUT_SLOT,
  ALU_FINISHES,
  AMC_POINTS,
  ABOUT_VALUES,
  AREA,
  C,
  GLASS_TYPES,
  PROCESS,
  PROJECT_SLOTS,
  WHY_US,
  type Slot,
  type WhyIcon,
} from './site';
import {
  ABOUT_SLOT_ALT_AR,
  ABOUT_VALUES_AR,
  ADDRESS_AR,
  ALU_FINISHES_AR,
  AMC_POINTS_AR,
  AREA_AR,
  COMPANY_AR,
  GLASS_TYPES_AR,
  PROCESS_AR,
  PROJECT_ALTS_AR,
  WHY_US_AR,
} from './site.ar';
import type { Lang } from './i18n';

export type LocalService = {
  slug: string;
  name: string;
  tag: string;
  lead: string;
  options: string[];
  faqs: Faq[];
  divSlug: string;
  divTitle: string;
  related: { slug: string; name: string }[];
};

export type LocalDivision = {
  num: string;
  slug: string;
  icon: IconKey;
  title: string;
  tagline: string;
  lead: string;
  chips: string[];
  diagram: [string, string];
  faqs: Faq[];
  subservices: LocalService[];
};

function localService(slug: string, lang: Lang, divTitle: string): LocalService {
  const en = SERVICE_MAP[slug];
  const ar = SERVICES_AR[slug];
  const useAr = lang === 'ar' && ar;
  return {
    slug: en.slug,
    name: useAr ? ar.name : en.name,
    tag: useAr ? ar.tag : en.tag,
    lead: useAr ? ar.lead : en.lead,
    options: useAr ? ar.options : en.options,
    faqs: useAr ? ar.faqs : en.faqs,
    divSlug: en.divSlug,
    divTitle,
    related: en.related.map((r) => ({
      slug: r.slug,
      name: lang === 'ar' && SERVICES_AR[r.slug] ? SERVICES_AR[r.slug].name : r.name,
    })),
  };
}

export function getDivisions(lang: Lang): LocalDivision[] {
  return DIVISIONS.map((d) => {
    const ar = DIVISIONS_AR[d.slug];
    const useAr = lang === 'ar' && ar;
    const title = useAr ? ar.title : d.title;
    return {
      num: d.num,
      slug: d.slug,
      icon: d.icon,
      title,
      tagline: useAr ? ar.tagline : d.tagline,
      lead: useAr ? ar.lead : d.lead,
      chips: useAr ? ar.chips : d.chips,
      diagram: useAr ? ar.diagram : d.diagram,
      faqs: useAr ? ar.faqs : d.faqs,
      subservices: d.subservices.map((s) => localService(s.slug, lang, title)),
    };
  });
}

export function getDivision(slug: string, lang: Lang): LocalDivision | undefined {
  return getDivisions(lang).find((d) => d.slug === slug);
}

export function getService(slug: string, lang: Lang): LocalService | undefined {
  const en = SERVICE_MAP[slug];
  if (!en) return undefined;
  const div = DIVISIONS.find((d) => d.slug === en.divSlug)!;
  const divAr = DIVISIONS_AR[div.slug];
  const divTitle = lang === 'ar' && divAr ? divAr.title : div.title;
  return localService(slug, lang, divTitle);
}

export function getAllServices(lang: Lang): LocalService[] {
  return getDivisions(lang).flatMap((d) => d.subservices);
}

// --- non-catalogue content -------------------------------------------------

export const getProcess = (lang: Lang) =>
  PROCESS.map((p, i) => ({
    n: p.n,
    t: lang === 'ar' ? PROCESS_AR[i].t : p.t,
    d: lang === 'ar' ? PROCESS_AR[i].d : p.d,
  }));

export const getWhyUs = (lang: Lang): { icon: WhyIcon; t: string; d: string }[] =>
  WHY_US.map((w, i) => ({
    icon: w.icon,
    t: lang === 'ar' ? WHY_US_AR[i].t : w.t,
    d: lang === 'ar' ? WHY_US_AR[i].d : w.d,
  }));

export const getGlassTypes = (lang: Lang) => (lang === 'ar' ? GLASS_TYPES_AR : GLASS_TYPES);
export const getAluFinishes = (lang: Lang) => (lang === 'ar' ? ALU_FINISHES_AR : ALU_FINISHES);
export const getAmcPoints = (lang: Lang) => (lang === 'ar' ? AMC_POINTS_AR : AMC_POINTS);
export const getAboutValues = (lang: Lang) => (lang === 'ar' ? ABOUT_VALUES_AR : ABOUT_VALUES);

export const getProjectSlots = (lang: Lang): Slot[] =>
  PROJECT_SLOTS.map((s, i) => (lang === 'ar' ? { ...s, alt: PROJECT_ALTS_AR[i] } : s));

export const getFeaturedSlots = (lang: Lang) => getProjectSlots(lang).slice(0, 3);

export const getAboutSlot = (lang: Lang) =>
  lang === 'ar' ? { ...ABOUT_SLOT, alt: ABOUT_SLOT_ALT_AR } : ABOUT_SLOT;

export const getArea = (lang: Lang) =>
  lang === 'ar'
    ? { ...AREA, city: AREA_AR.city, intro: AREA_AR.intro, neighborhoods: AREA_AR.neighborhoods }
    : AREA;

/** Address and legal name have Arabic forms; phone/email obviously do not. */
export const getAddress = (lang: Lang) => (lang === 'ar' ? ADDRESS_AR : C.address);
export const getCompanyName = (lang: Lang) => (lang === 'ar' ? COMPANY_AR : C.name);

/** Options for the contact form's service picker, in the active language. */
export const getServiceNames = (lang: Lang, defaultLabel: string) =>
  [defaultLabel].concat(getAllServices(lang).map((s) => s.name));
