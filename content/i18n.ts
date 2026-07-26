// Bilingual plumbing. English is the default language and lives at the root
// (/about); Arabic mirrors the whole tree under /ar (/ar/about).

export type Lang = 'en' | 'ar';
export const LANGS: Lang[] = ['en', 'ar'];

export const isRtl = (lang: Lang) => lang === 'ar';
export const dirOf = (lang: Lang) => (isRtl(lang) ? 'rtl' : 'ltr');
export const htmlLang = (lang: Lang) => (lang === 'ar' ? 'ar-AE' : 'en-AE');

/** Prefix an app-relative path with the locale segment. `L('ar','/about')` → `/ar/about`. */
export function L(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  return path === '/' ? '/ar' : `/ar${path}`;
}

/** The same page in the other language — used by the header switcher. */
export function otherLangPath(lang: Lang, pathname: string): string {
  const bare = pathname.replace(/^\/ar(?=\/|$)/, '') || '/';
  return lang === 'ar' ? bare : L('ar', bare);
}

/**
 * Next `alternates` for a page. `path` is the English (root) app-relative path,
 * e.g. `/about`. Produces the canonical for the active language plus hreflang
 * links to both languages, so Google indexes the pair correctly.
 */
export function alternates(lang: Lang, path: string) {
  return {
    canonical: L(lang, path),
    languages: {
      'en-AE': path,
      'ar-AE': L('ar', path),
      'x-default': path,
    },
  };
}

type Dict = {
  // chrome
  navHome: string;
  navServices: string;
  navProjects: string;
  navAbout: string;
  navDubai: string;
  navContact: string;
  allServices: string;
  menu: string;
  openMenu: string;
  closeMenu: string;
  divisions: string;
  skipToContent: string;
  langName: string;
  switchTo: string;
  brandSub: string;
  brandSubShort: string;
  // shared CTAs
  freeMeasurement: string;
  whatsappPhoto: string;
  callWorkshop: string;
  whatsappUs: string;
  call: string;
  whatsapp: string;
  explore: string;
  details: string;
  openDivision: string;
  viewAllProjects: string;
  talkOptions: string;
  breadcrumb: string;
  home: string;
  // gallery / lightbox
  galleryPrev: string;
  galleryNext: string;
  galleryClose: string;
  // home
  heroBadge: string;
  heroTitle: string;
  heroLede: string;
  heroTick1: string;
  heroTick2: string;
  heroTick3: string;
  elevationLabel: string;
  scaleNts: string;
  glazing: string;
  glazingValue: string;
  frame: string;
  frameValue: string;
  whatWeDo: string;
  whatWeDoTitle: string;
  whatWeDoLede: string;
  howItWorks: string;
  howItWorksTitle: string;
  whyUs: string;
  whyUsTitle: string;
  whyUsLede: string;
  specifyWithUs: string;
  materialsTitle: string;
  materialsLede: string;
  glassTypes: string;
  aluFinishes: string;
  amcEyebrow: string;
  amcTitle: string;
  amcLede: string;
  amcCta: string;
  seeBuildingMaintenance: string;
  ourWork: string;
  ourWorkTitle: string;
  ourWorkLede: string;
  ctaEyebrow: string;
  ctaTitle: string;
  // services
  servicesEyebrow: string;
  servicesTitle: string;
  servicesLede: string;
  division: string;
  servicesInDivision: string;
  ourProcess: string;
  commonQuestions: string;
  whatsappAboutThis: string;
  // service
  enquireWhatsapp: string;
  callToArrange: string;
  serviceNote: string;
  optionsScope: string;
  optionsLede: string;
  howWeHandleIt: string;
  warranty: string;
  warrantyText: string;
  questionsSuffix: string;
  relatedIn: string;
  // about
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLede: string;
  aboutH2: string;
  aboutP1: string;
  aboutP2: string;
  factActivities: string;
  factDivisions: string;
  factNumber: string;
  factBased: string;
  credibilityTitle: string;
  credentials: string;
  credentialsText: string;
  howWeWork: string;
  // projects
  projectsEyebrow: string;
  projectsTitle: string;
  projectsLede: string;
  projectsNote: string;
  typicalProject: string;
  // contact
  contactEyebrow: string;
  contactTitle: string;
  contactLede: string;
  reachUs: string;
  reachUsLede: string;
  labelWhatsapp: string;
  labelPhone: string;
  labelEmail: string;
  labelWorkshop: string;
  labelHours: string;
  formTitle: string;
  formLede: string;
  formName: string;
  formNamePh: string;
  formArea: string;
  formAreaPh: string;
  formService: string;
  formServiceDefault: string;
  formDetails: string;
  formDetailsPh: string;
  formSend: string;
  formFootnote: string;
  // area
  serviceArea: string;
  areaTitle: string;
  areaCoverTitle: string;
  areaCoverLede: string;
  areaDivisionsTitle: string;
  whatsappInCity: string;
  // 404
  notFoundTitle: string;
  notFoundLede: string;
};

export const UI: Record<Lang, Dict> = {
  en: {
    navHome: 'Home',
    navServices: 'Services',
    navProjects: 'Projects',
    navAbout: 'About',
    navDubai: 'UAE',
    navContact: 'Contact',
    allServices: 'All services',
    menu: 'MENU',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    divisions: 'DIVISIONS',
    skipToContent: 'Skip to content',
    langName: 'العربية',
    switchTo: 'التبديل إلى العربية',
    brandSub: 'TECHNICAL SERVICES · UAE',
    brandSubShort: 'TECHNICAL SERVICES',

    freeMeasurement: 'Free site measurement',
    whatsappPhoto: 'WhatsApp a photo',
    callWorkshop: 'Call the workshop',
    whatsappUs: 'WhatsApp us',
    call: 'Call',
    whatsapp: 'WhatsApp',
    explore: 'EXPLORE',
    details: 'DETAILS',
    openDivision: 'Open division',
    viewAllProjects: 'VIEW ALL PROJECTS →',
    talkOptions: 'TALK OPTIONS',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    galleryPrev: 'Previous photo',
    galleryNext: 'Next photo',
    galleryClose: 'Close',

    heroBadge: 'GLASS · ALUMINIUM · FIT-OUT · MEP',
    heroTitle: 'Glass & aluminium, measured to your openings.',
    heroLede:
      'Windows, doors, showers, partitions and façades across the UAE — plus fit-out, MEP, pools and maintenance from one licensed contractor.',
    heroTick1: 'Free on-site measurement',
    heroTick2: 'Every job custom-quoted',
    heroTick3: 'Same-day WhatsApp reply',
    elevationLabel: 'ELEVATION · CURTAIN WALL',
    scaleNts: 'SCALE N.T.S.',
    glazing: 'GLAZING',
    glazingValue: 'Double / laminated',
    frame: 'FRAME',
    frameValue: 'Powder-coated alu',
    whatWeDo: 'WHAT WE DO',
    whatWeDoTitle: 'Five divisions, one contractor',
    whatWeDoLede:
      'Lead with glass and aluminium — our core trade — and keep the same team for finishing, MEP, pools and maintenance. Fewer contractors to chase; one number for the whole building.',
    howItWorks: 'HOW IT WORKS',
    howItWorksTitle: 'From a photo on WhatsApp to a clean handover',
    whyUs: 'WHY APEX',
    whyUsTitle: 'Specific beats boastful',
    whyUsLede:
      'No counters, no awards, no star ratings. Just clear scope, a real measurement, and a quote against your actual openings.',
    specifyWithUs: 'SPECIFY WITH US',
    materialsTitle: 'Materials & finishes',
    materialsLede:
      'The right glass and finish depends on orientation, privacy and use. We review it on site and confirm the choice in your quote — never a fixed package.',
    glassTypes: 'GLASS TYPES',
    aluFinishes: 'ALUMINIUM FINISHES',
    amcEyebrow: 'FOR OWNERS & FACILITY MANAGERS',
    amcTitle: 'Annual maintenance contracts',
    amcLede:
      'Planned upkeep and priority response across a whole building — glass, finishes, MEP, pools and cleaning under one agreement, one number, one accountable contractor.',
    amcCta: 'Discuss an AMC',
    seeBuildingMaintenance: 'SEE BUILDING MAINTENANCE →',
    ourWork: 'OUR WORK',
    ourWorkTitle: 'The work we do',
    ourWorkLede:
      'Glass, aluminium and fit-out we deliver across the UAE. These images show the scope and finish we work to — ask us for references from recent jobs in your area.',
    ctaEyebrow: 'FREE ON-SITE MEASUREMENT',
    ctaTitle: 'Send us a photo. We will measure, advise and quote.',

    servicesEyebrow: 'ALL SERVICES',
    servicesTitle: 'Everything we do',
    servicesLede:
      'Five divisions and every service within them — glass and aluminium first, then finishing, MEP, pools and maintenance.',
    division: 'DIVISION',
    servicesInDivision: 'Services in this division',
    ourProcess: 'Our process',
    commonQuestions: 'Common questions',
    whatsappAboutThis: 'WhatsApp about this',

    enquireWhatsapp: 'Enquire on WhatsApp',
    callToArrange: 'Call to arrange a visit',
    serviceNote: 'Free on-site measurement · custom-quoted · no fixed prices',
    optionsScope: 'Options & scope',
    optionsLede:
      'What we typically supply, install and maintain. Your exact specification is confirmed after the site measurement.',
    howWeHandleIt: 'How we handle it',
    warranty: 'WARRANTY',
    warrantyText:
      'Warranty terms are confirmed in writing with your quote, and depend on the system and finish specified.',
    questionsSuffix: '— questions',
    relatedIn: 'RELATED IN',

    aboutEyebrow: 'ABOUT',
    aboutTitle: 'Apex Technical Services',
    aboutLede:
      'A UAE glass and aluminium specialist that also delivers finishing, MEP, pools and maintenance — one licensed contractor for the whole building.',
    aboutH2: 'One licensed contractor for the whole building',
    aboutP1:
      'Apex Technical Services is a UAE-based glass and aluminium specialist that also delivers interior finishing, MEP, swimming pools and building maintenance. Our commercial licence covers seventeen activities across these trades — so a single job, or a whole property, can be handled by one accountable team.',
    aboutP2:
      'We lead with glass and aluminium because it is our craft: fabrication and installation measured to your actual openings. Everything else — paint, tiling, ceilings, plumbing, electrical, pools and cleaning — keeps the same standard and the same point of contact.',
    factActivities: 'licensed activities',
    factDivisions: 'divisions, one team',
    factNumber: 'number for all of it',
    factBased: 'based & serving',
    credibilityTitle: 'What we build credibility on',
    credentials: 'CREDENTIALS',
    credentialsText:
      'We hold a UAE commercial licence covering seventeen trade activities, plus a trade-work list certificate. Copies are available on request — just ask when we visit or message us on WhatsApp.',
    howWeWork: 'How we work with you',

    projectsEyebrow: 'PROJECTS',
    projectsTitle: 'What we build',
    projectsLede:
      'The range of work we take on across the UAE — from a single shower enclosure to a full curtain-wall façade, with the finishing, MEP and upkeep that goes around it.',
    projectsNote:
      'Imagery on this page is representative of our scope and finish rather than a specific job. For photos and references from recent work near you, just ask — we are happy to share them.',
    typicalProject: 'What a typical project looks like',

    contactEyebrow: 'CONTACT',
    contactTitle: 'Let us measure your job',
    contactLede:
      'Tell us what you need and we will arrange a free site visit. Every job is measured on site and quoted to your space — no fixed packages.',
    reachUs: 'Reach us directly',
    reachUsLede:
      'The fastest way to a quote is a photo and a rough measurement on WhatsApp. We reply the same day during working hours.',
    labelWhatsapp: 'WHATSAPP',
    labelPhone: 'PHONE',
    labelEmail: 'EMAIL',
    labelWorkshop: 'WORKSHOP',
    labelHours: 'HOURS',
    formTitle: 'Request a free measurement',
    formLede:
      'Fill this in and we will open WhatsApp with your details ready to send. No account, no forms stored.',
    formName: 'YOUR NAME',
    formNamePh: 'e.g. Ahmed',
    formArea: 'AREA IN UAE',
    formAreaPh: 'e.g. Business Bay',
    formService: 'SERVICE',
    formServiceDefault: 'Free site measurement (not sure yet)',
    formDetails: 'DETAILS (OPTIONAL)',
    formDetailsPh: 'Sizes, quantity, timing…',
    formSend: 'Send on WhatsApp',
    formFootnote: 'we confirm price by phone or WhatsApp',

    serviceArea: 'SERVICE AREA',
    areaTitle: 'Glass, aluminium & fit-out across',
    areaCoverTitle: 'Areas we cover in',
    areaCoverLede:
      'We measure and install across the city. If your area is not listed, message us — we most likely cover it.',
    areaDivisionsTitle: 'Every division, on your doorstep',
    whatsappInCity: 'WhatsApp us in',

    notFoundTitle: 'We cannot find that page',
    notFoundLede: 'The link may be old, or the page has moved. Try our services or reach us directly.',
  },

  ar: {
    navHome: 'الرئيسية',
    navServices: 'خدماتنا',
    navProjects: 'أعمالنا',
    navAbout: 'من نحن',
    navDubai: 'الإمارات',
    navContact: 'تواصل معنا',
    allServices: 'جميع الخدمات',
    menu: 'القائمة',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    divisions: 'الأقسام',
    skipToContent: 'تخطَّ إلى المحتوى',
    langName: 'English',
    switchTo: 'Switch to English',
    brandSub: 'الخدمات الفنية · الإمارات',
    brandSubShort: 'الخدمات الفنية',

    freeMeasurement: 'قياس مجاني في الموقع',
    whatsappPhoto: 'أرسل صورة على واتساب',
    callWorkshop: 'اتصل بالورشة',
    whatsappUs: 'راسلنا على واتساب',
    call: 'اتصال',
    whatsapp: 'واتساب',
    explore: 'استكشف',
    details: 'التفاصيل',
    openDivision: 'فتح القسم',
    viewAllProjects: 'عرض جميع الأعمال ←',
    talkOptions: 'ناقش الخيارات',
    breadcrumb: 'مسار التنقل',
    home: 'الرئيسية',
    galleryPrev: 'الصورة السابقة',
    galleryNext: 'الصورة التالية',
    galleryClose: 'إغلاق',

    heroBadge: 'زجاج · ألمنيوم · تشطيبات · كهروميكانيك',
    heroTitle: 'زجاج وألمنيوم مُقاس على فتحاتك بالضبط.',
    heroLede:
      'نوافذ وأبواب وكابائن استحمام وقواطع وواجهات في جميع أنحاء الإمارات — إضافة إلى التشطيبات والأعمال الكهروميكانيكية وحمامات السباحة والصيانة، من مقاول واحد مرخّص.',
    heroTick1: 'قياس مجاني في الموقع',
    heroTick2: 'تسعير مخصص لكل عمل',
    heroTick3: 'رد على واتساب في نفس اليوم',
    elevationLabel: 'مسقط رأسي · حائط ساتر',
    scaleNts: 'بدون مقياس',
    glazing: 'التزجيج',
    glazingValue: 'مزدوج / مصفّح',
    frame: 'الإطار',
    frameValue: 'ألمنيوم مطلي بالبودرة',
    whatWeDo: 'ما نقوم به',
    whatWeDoTitle: 'خمسة أقسام، ومقاول واحد',
    whatWeDoLede:
      'نبدأ من الزجاج والألمنيوم — وهو تخصصنا الأساسي — ويكمل الفريق نفسه أعمال التشطيبات والكهروميكانيك وحمامات السباحة والصيانة. مقاولون أقل تلاحقهم، ورقم واحد للمبنى بأكمله.',
    howItWorks: 'كيف نعمل',
    howItWorksTitle: 'من صورة على واتساب إلى تسليم نظيف',
    whyUs: 'لماذا أبيكس',
    whyUsTitle: 'الوضوح أهم من المبالغة',
    whyUsLede:
      'بلا أرقام مبالغ فيها ولا جوائز ولا تقييمات نجوم. نطاق عمل واضح، وقياس فعلي في الموقع، وعرض سعر مبني على فتحاتك أنت.',
    specifyWithUs: 'حدّد المواصفات معنا',
    materialsTitle: 'المواد والتشطيبات',
    materialsLede:
      'يعتمد اختيار الزجاج والتشطيب على اتجاه الواجهة ومتطلبات الخصوصية والاستخدام. نراجع ذلك في الموقع ونؤكد الاختيار ضمن عرض السعر — وليس ضمن باقة ثابتة.',
    glassTypes: 'أنواع الزجاج',
    aluFinishes: 'تشطيبات الألمنيوم',
    amcEyebrow: 'للملاك ومديري المرافق',
    amcTitle: 'عقود الصيانة السنوية',
    amcLede:
      'صيانة مجدولة واستجابة ذات أولوية للمبنى بالكامل — الزجاج والتشطيبات والأعمال الكهروميكانيكية وحمامات السباحة والتنظيف ضمن اتفاقية واحدة، ورقم واحد، ومقاول واحد مسؤول.',
    amcCta: 'ناقش عقد صيانة سنوي',
    seeBuildingMaintenance: 'تعرّف على صيانة المباني ←',
    ourWork: 'أعمالنا',
    ourWorkTitle: 'طبيعة الأعمال التي ننفذها',
    ourWorkLede:
      'أعمال الزجاج والألمنيوم والتشطيبات التي ننفذها في الإمارات. تعرض هذه الصور نطاق العمل ومستوى التشطيب الذي نلتزم به — واطلب منا مراجع من أعمال قريبة من منطقتك.',
    ctaEyebrow: 'قياس مجاني في الموقع',
    ctaTitle: 'أرسل لنا صورة، ونتولى القياس والاستشارة وعرض السعر.',

    servicesEyebrow: 'جميع الخدمات',
    servicesTitle: 'كل ما نقدمه',
    servicesLede:
      'خمسة أقسام وكل خدمة ضمنها — الزجاج والألمنيوم أولاً، ثم التشطيبات والأعمال الكهروميكانيكية وحمامات السباحة والصيانة.',
    division: 'القسم',
    servicesInDivision: 'خدمات هذا القسم',
    ourProcess: 'خطوات العمل',
    commonQuestions: 'أسئلة شائعة',
    whatsappAboutThis: 'استفسر عبر واتساب',

    enquireWhatsapp: 'استفسر عبر واتساب',
    callToArrange: 'اتصل لتحديد موعد زيارة',
    serviceNote: 'قياس مجاني في الموقع · تسعير مخصص · بلا أسعار ثابتة',
    optionsScope: 'الخيارات ونطاق العمل',
    optionsLede:
      'ما نقوم بتوريده وتركيبه وصيانته عادةً. تُعتمد المواصفات النهائية بعد القياس في الموقع.',
    howWeHandleIt: 'كيف ننفذ العمل',
    warranty: 'الضمان',
    warrantyText: 'تُحدَّد شروط الضمان كتابةً ضمن عرض السعر، وتعتمد على النظام والتشطيب المعتمد.',
    questionsSuffix: '— أسئلة',
    relatedIn: 'خدمات ذات صلة في',

    aboutEyebrow: 'من نحن',
    aboutTitle: 'أبيكس للخدمات الفنية',
    aboutLede:
      'متخصصون في الزجاج والألمنيوم في الإمارات، ونقدم كذلك التشطيبات والأعمال الكهروميكانيكية وحمامات السباحة والصيانة — مقاول واحد مرخّص للمبنى بأكمله.',
    aboutH2: 'مقاول واحد مرخّص للمبنى بأكمله',
    aboutP1:
      'أبيكس للخدمات الفنية شركة إماراتية متخصصة في الزجاج والألمنيوم، وتنفذ أيضاً التشطيبات الداخلية والأعمال الكهروميكانيكية وحمامات السباحة وصيانة المباني. تغطي رخصتنا التجارية سبعة عشر نشاطاً ضمن هذه المجالات — بحيث يمكن لفريق واحد مسؤول أن يتولى عملاً مفرداً أو عقاراً بأكمله.',
    aboutP2:
      'نبدأ من الزجاج والألمنيوم لأنه تخصصنا: تصنيع وتركيب مبني على قياس فتحاتك الفعلية. وكل ما عداه — الدهان والبلاط والأسقف والسباكة والكهرباء وحمامات السباحة والتنظيف — يحافظ على المستوى نفسه ونقطة التواصل نفسها.',
    factActivities: 'نشاطاً مرخّصاً',
    factDivisions: 'أقسام، وفريق واحد',
    factNumber: 'رقم واحد لكل ذلك',
    factBased: 'مقرنا ونطاق عملنا',
    credibilityTitle: 'ما نبني عليه ثقتك',
    credentials: 'الوثائق',
    credentialsText:
      'نحمل رخصة تجارية إماراتية تغطي سبعة عشر نشاطاً، إضافة إلى شهادة قائمة الأعمال الفنية. نسخ منها متاحة عند الطلب — اطلبها أثناء الزيارة أو راسلنا على واتساب.',
    howWeWork: 'كيف نعمل معك',

    projectsEyebrow: 'أعمالنا',
    projectsTitle: 'ما ننفذه',
    projectsLede:
      'نطاق الأعمال التي ننفذها في الإمارات — من كابينة استحمام واحدة إلى واجهة زجاجية كاملة، مع ما يرافقها من تشطيبات وأعمال كهروميكانيكية وصيانة.',
    projectsNote:
      'الصور في هذه الصفحة تمثل نطاق أعمالنا ومستوى التشطيب لدينا، وليست لمشروع بعينه. لمشاهدة صور ومراجع من أعمال قريبة منك، اطلبها منا ويسعدنا مشاركتها.',
    typicalProject: 'كيف يسير المشروع عادةً',

    contactEyebrow: 'تواصل معنا',
    contactTitle: 'دعنا نقيس عملك',
    contactLede:
      'أخبرنا بما تحتاجه وسنرتب زيارة مجانية للموقع. كل عمل يُقاس في الموقع ويُسعّر حسب مساحتك — بلا باقات ثابتة.',
    reachUs: 'تواصل معنا مباشرة',
    reachUsLede:
      'أسرع طريق للحصول على عرض سعر هو إرسال صورة وقياس تقريبي عبر واتساب. نرد في نفس اليوم خلال ساعات العمل.',
    labelWhatsapp: 'واتساب',
    labelPhone: 'الهاتف',
    labelEmail: 'البريد الإلكتروني',
    labelWorkshop: 'الورشة',
    labelHours: 'ساعات العمل',
    formTitle: 'اطلب قياساً مجانياً',
    formLede: 'املأ الحقول وسنفتح واتساب وبياناتك جاهزة للإرسال. بلا حساب، وبلا حفظ للنماذج.',
    formName: 'الاسم',
    formNamePh: 'مثال: أحمد',
    formArea: 'المنطقة في الإمارات',
    formAreaPh: 'مثال: الكرامة',
    formService: 'الخدمة',
    formServiceDefault: 'قياس مجاني في الموقع (لست متأكداً بعد)',
    formDetails: 'تفاصيل (اختياري)',
    formDetailsPh: 'المقاسات، الكمية، التوقيت…',
    formSend: 'إرسال عبر واتساب',
    formFootnote: 'نؤكد السعر عبر الهاتف أو واتساب',

    serviceArea: 'نطاق الخدمة',
    areaTitle: 'زجاج وألمنيوم وتشطيبات في',
    areaCoverTitle: 'المناطق التي نغطيها في',
    areaCoverLede:
      'نقوم بالقياس والتركيب في جميع أنحاء المدينة. إن لم تكن منطقتك مدرجة، راسلنا — على الأرجح نغطيها.',
    areaDivisionsTitle: 'كل الأقسام، قريباً منك',
    whatsappInCity: 'راسلنا على واتساب في',

    notFoundTitle: 'تعذّر العثور على الصفحة',
    notFoundLede: 'قد يكون الرابط قديماً أو تم نقل الصفحة. جرّب صفحة خدماتنا أو تواصل معنا مباشرة.',
  },
};

export const t = (lang: Lang) => UI[lang];
