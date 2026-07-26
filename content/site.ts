// Single source of truth for the Apex site.
// NOTE: Apex Technical Services is a fictional brand used for this portfolio
// prototype. Every contact detail below is a placeholder — not a real company,
// phone number, email or address.

import { DIVISIONS } from './divisions';

export { DIVISIONS };

/** Base path the site is served under (from next.config.mjs). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Prefix a root-relative asset path with the deployment base path. Needed
 * because next/image with `unoptimized` does not add basePath to its `src`,
 * so /logo.png and /projects/*.jpg would 404 on a project-path host.
 */
export const asset = (p: string) => (p.startsWith('/') ? `${BASE_PATH}${p}` : p);

export const C = {
  name: 'APEX TECHNICAL SERVICES L.L.C',
  short: 'Apex',
  phoneRaw: '+971500000000',
  phoneDisp: '+971 50 000 0000',
  wa: '971500000000', // wa.me format — digits only
  email: 'info@apextechnical.example',
  address: 'Office 000, Example Business Tower, Dubai, UAE',
  city: 'UAE',
  /**
   * ⚠️ Not yet supplied. Leave empty rather than inventing hours — every place
   * that renders this omits the whole row when it is blank, so the site never
   * shows a bracketed placeholder to a visitor. Set it to e.g.
   * 'Sat–Thu 8:00–18:00' once confirmed.
   */
  hours: '',
};

/** Canonical origin — the GitHub Pages URL this prototype is deployed to. */
export const SITE_URL = 'https://talha-yaseen-hush.github.io/apex-technical-services';

export const telHref = `tel:${C.phoneRaw}`;
export const mailHref = `mailto:${C.email}`;

/** WhatsApp deep link pre-filled with a measurement request for `name`. */
export function waFor(name?: string) {
  const base = `Hello ${C.short} — I would like a free on-site measurement`;
  const msg = name ? `${base} for ${name}.` : `${base}.`;
  return `https://wa.me/${C.wa}?text=${encodeURIComponent(msg)}`;
}

export const waHome = waFor();
export const waAmc = waFor('an annual maintenance contract');

export const PROCESS = [
  {
    n: '01',
    t: 'Enquiry',
    d: 'Call or WhatsApp with what you need. Send photos if you have them — it helps us prepare.',
  },
  {
    n: '02',
    t: 'Free site measurement',
    d: 'We visit, measure your openings, check access and confirm the material and finish options that fit.',
  },
  {
    n: '03',
    t: 'Custom quote',
    d: 'You receive a clear, itemised quote. Every job is priced to your space — no fixed packages.',
  },
  {
    n: '04',
    t: 'Install & handover',
    d: 'We fabricate, schedule around you, install clean and hand over a tidy, working result.',
  },
];

export type WhyIcon = 'shield' | 'building' | 'check' | 'people' | 'pulse' | 'chat';

export const WHY_US: { icon: WhyIcon; t: string; d: string }[] = [
  {
    icon: 'shield',
    t: 'Licensed across 17 activities',
    d: 'Glass and aluminium plus interior finishing, MEP, pools and building maintenance — one contractor for the whole scope.',
  },
  {
    icon: 'building',
    t: 'Measured on site, made to fit',
    d: 'Nothing is off-the-shelf. We template to your actual openings before anything is cut.',
  },
  {
    icon: 'check',
    t: 'Free site measurement',
    d: 'We come to you, assess access and conditions, and quote against the real job.',
  },
  {
    icon: 'people',
    t: 'One team, whole building',
    d: 'Glass, finishes, MEP and maintenance under one number — fewer contractors to chase.',
  },
  {
    icon: 'pulse',
    t: 'Clean, scheduled work',
    d: 'We work around occupied homes and live offices and leave the site tidy.',
  },
  {
    icon: 'chat',
    t: 'Fast on WhatsApp',
    d: 'Send a photo and a measurement; get a same-day response during working hours.',
  },
];

export const GLASS_TYPES = [
  'Clear float',
  'Tempered / toughened',
  'Laminated',
  'Tinted',
  'Reflective',
  'Frosted / acid-etched',
  'Double-glazed units',
  'Mirror',
];

export const ALU_FINISHES = [
  'Powder-coated (any RAL)',
  'Anodised silver',
  'Matt black',
  'Bronze',
  'Wood-effect',
  'White',
];

export const AMC_POINTS = [
  'Scheduled visits across the whole property',
  'Priority response for breakdowns',
  'One agreement covering multiple trades',
  'Predictable upkeep for landlords & FMs',
];

export const ABOUT_VALUES = [
  'Clear scope — you know exactly what is included',
  'A real site measurement before any quote',
  'Breadth of licensed capability across five trades',
  'Responsive, tidy work around occupied spaces',
];

// --- imagery ---------------------------------------------------------------
// Representative stock, exactly as specified in the design. Swap `img` for
// client photography as it becomes available; `note` is the shot brief.
// Gallery cards render at ~300-420px wide, so 900px covers 2x displays without
// shipping 1400px files. `auto=format` still serves WebP/AVIF where supported.
const UP = (p: string, w = 900) =>
  `https://images.unsplash.com/photo-${p}?fm=jpg&q=72&w=${w}&auto=format&fit=crop`;

// Grid cards share one aspect ratio so rows line up; the images are cropped to
// fit with object-cover. `note` is the shot brief for the real photography.
export const CARD_RATIO = '4 / 3';

export type Slot = { id: string; tag: string; alt: string; note: string; img: string };

// Sample project photography. Files live in /public/projects.
// All are staircase railing / balustrade jobs — the core Glass & Aluminium trade.
export const PROJECT_SLOTS: Slot[] = [
  {
    id: 'p-glass-led',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Frameless glass staircase balustrade with a black handrail and warm LED step lighting',
    note: 'Modern glass balustrade with under-tread LED lighting on a villa staircase.',
    img: '/projects/glass-staircase-led.jpg',
  },
  {
    id: 'p-brass-laser',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Gold laser-cut decorative panel balustrade with a polished brass handrail',
    note: 'Laser-cut geometric brass balustrade panel with feature lighting.',
    img: '/projects/brass-laser-cut-balustrade.jpg',
  },
  {
    id: 'p-frameless-glass',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Frameless tempered-glass staircase balustrade with a wrapped handrail',
    note: 'Frameless glass stair balustrade against panelled walls.',
    img: '/projects/frameless-glass-staircase.jpg',
  },
  {
    id: 'p-brass-glass',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Polished brass posts and glass infill railing on a black marble staircase',
    note: 'Brass balustrade with glass infill on black marble stairs.',
    img: '/projects/brass-glass-railing.jpg',
  },
  {
    id: 'p-glass-brass-rail',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Frameless glass balustrade with a brass handrail on a marble staircase',
    note: 'Glass balustrade with a brass top rail on a marble landing.',
    img: '/projects/glass-balustrade-brass-handrail.jpg',
  },
  {
    id: 'p-steel-brass',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Stainless steel railing with brass ball detailing across two staircase flights',
    note: 'Stainless steel balustrade with brass ornament detailing.',
    img: '/projects/steel-brass-balusters.jpg',
  },
  {
    id: 'p-brass-marble',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Polished brass handrail and ball-topped posts on black marble stairs',
    note: 'Polished brass staircase railing with ball finials.',
    img: '/projects/brass-handrail-black-marble.jpg',
  },
  {
    id: 'p-smoked-glass',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Smoked tempered-glass staircase balustrade with stainless fittings',
    note: 'Tinted (smoked) glass stair balustrade with point fixings.',
    img: '/projects/smoked-glass-balustrade.jpg',
  },
  {
    id: 'p-steel-rail',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Brushed stainless steel staircase railing on marble steps',
    note: 'Brushed stainless steel stair railing during installation.',
    img: '/projects/steel-staircase-railing.jpg',
  },
  {
    id: 'p-steel-spiral',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Curved stainless steel and brass staircase railing',
    note: 'Curved stainless and brass balustrade on a sweeping staircase.',
    img: '/projects/steel-brass-spiral-staircase.jpg',
  },
  {
    id: 'p-steel-rack',
    tag: 'GLASS & ALUMINIUM',
    alt: 'Polished stainless steel wall-mounted tubular rack, fabricated and installed',
    note: 'Custom stainless steel fabrication — wall-mounted tubular rack.',
    img: '/projects/steel-wall-rack.jpg',
  },
];

export const FEATURED_SLOTS = PROJECT_SLOTS.slice(0, 3);

export const ABOUT_SLOT = {
  id: 'a-workshop',
  ratio: '16/9',
  alt: 'Aluminium & steel fabrication workshop',
  img: UP('1531053326607-9d349096d887', 1400), // full-bleed 16/9 figure, needs the extra width
};

// --- service area ----------------------------------------------------------
export const AREA = {
  city: 'UAE',
  slug: 'uae',
  intro:
    'We are based in Dubai and work across the UAE — measuring, fabricating and installing glass, aluminium and full fit-out, with maintenance and cleaning to match. Send a photo on WhatsApp and we will arrange a free measurement.',
  neighborhoods: [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Ajman',
    'Al Ain',
    'Ras Al Khaimah',
    'Fujairah',
    'Umm Al Quwain',
  ],
  wa: waFor('a project in the UAE'),
};

export const AREAS = [AREA];

/** Options for the contact form's service picker. */
export const SERVICE_NAMES = ['Free site measurement (not sure yet)'].concat(
  DIVISIONS.reduce<string[]>((acc, d) => acc.concat(d.subservices.map((s) => s.name)), []),
);
