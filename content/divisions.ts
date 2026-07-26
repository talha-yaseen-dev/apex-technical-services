// The five divisions and every sub-service within them.
// Transcribed verbatim from the approved "Apex.dc.html" design document.

export type Faq = { q: string; a: string };

export type SubService = {
  slug: string;
  name: string;
  tag: string;
  lead: string;
  options: string[];
  faqs: Faq[];
};

export type IconKey = 'glass' | 'brush' | 'bolt' | 'wave' | 'wrench';

export type Division = {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  icon: IconKey;
  lead: string;
  chips: string[];
  /** [top-left label, bottom caption] for the technical line diagram */
  diagram: [string, string];
  subservices: SubService[];
  faqs: Faq[];
};

const F = (q: string, a: string): Faq => ({ q, a });

export const DIVISIONS: Division[] = [
  {
    num: '01',
    slug: 'glass-aluminium',
    title: 'Glass & Aluminium',
    tagline: 'Installation & maintenance',
    icon: 'glass',
    lead: 'Our core trade. Fabrication, supply and installation of architectural glass and aluminium — measured to your openings and finished clean.',
    chips: ['Windows', 'Doors', 'Partitions', 'Handrails', 'Façades'],
    diagram: ['CURTAIN WALL', 'GLAZED SYSTEM'],
    subservices: [
      {
        slug: 'aluminium-windows',
        name: 'Aluminium Windows',
        tag: 'Sliding · casement · tilt-turn',
        lead: 'Aluminium window systems in sliding, casement and tilt-and-turn, glazed for heat, noise and privacy.',
        options: [
          'Sliding & lift-slide',
          'Casement & top-hung',
          'Tilt-and-turn',
          'Fixed & feature windows',
          'Fly-screen integration',
          'Single, double & laminated glazing',
        ],
        faqs: [
          F(
            'Can you replace windows in an occupied villa?',
            'Yes. We work opening-by-opening so the property stays secure and weather-tight between visits.',
          ),
          F(
            "Which glass suits the UAE's heat?",
            'We check orientation and exposure on site and recommend tinted, reflective or double-glazed units. The choice is confirmed in your quote.',
          ),
        ],
      },
      {
        slug: 'glass-aluminium-doors',
        name: 'Aluminium & Glass Doors',
        tag: 'Sliding · swing · automatic',
        lead: 'Aluminium and frameless glass doors for entrances, patios, balconies and internal openings.',
        options: [
          'Sliding & lift-slide patio doors',
          'Bi-fold doors',
          'Frameless glass swing doors',
          'Automatic sliding entrances',
          'Office & internal glass doors',
          'Matching hardware & locks',
        ],
        faqs: [
          F(
            'Do you supply automatic door sensors and motors?',
            'Yes — we install and maintain automatic sliding entrances including sensors and controllers.',
          ),
          F(
            'Can a glass door match my existing partition?',
            'We match glass thickness, tint and hardware to an existing installation wherever possible.',
          ),
        ],
      },
      {
        slug: 'shower-enclosures',
        name: 'Shower Enclosures',
        tag: 'Frameless & framed',
        lead: 'Frameless and semi-framed shower enclosures in tempered glass, templated to your bathroom for a precise, leak-resistant fit.',
        options: [
          'Frameless walk-in',
          'Hinged & pivot doors',
          'Sliding enclosures',
          'Clear, frosted or tinted glass',
          'Chrome, black or brushed hardware',
          'Custom angles & steps',
        ],
        faqs: [
          F('Is the glass safe?', 'All shower glass is tempered (toughened) for strength and safety.'),
          F(
            'How long from measurement to fit?',
            'Usually a few working days after templating; confirmed when you approve the quote.',
          ),
        ],
      },
      {
        slug: 'mirrors',
        name: 'Mirrors',
        tag: 'Bathroom · wardrobe · decorative',
        lead: 'Made-to-measure mirrors — bathroom, wardrobe, gym, LED and decorative — cut, polished and installed to any wall.',
        options: [
          'LED / backlit mirrors',
          'Full-height & wardrobe mirrors',
          'Gym mirror walls',
          'Bevelled & framed mirrors',
          'Antique & tinted mirror',
          'Safety-backed mirror',
        ],
        faqs: [
          F(
            'Can you install a full mirror wall?',
            'Yes — we panelise, level and fix large mirror walls for gyms, studios and dressing rooms.',
          ),
          F(
            'Do LED mirrors need an electrician?',
            'We handle the connection; where new wiring is needed our MEP team can add it.',
          ),
        ],
      },
      {
        slug: 'glass-partitions',
        name: 'Glass Partitions & Office Fronts',
        tag: 'Frameless & framed',
        lead: 'Glass partitions and office fronts that divide space without losing light — single or double glazed for acoustic separation.',
        options: [
          'Frameless glazed partitions',
          'Aluminium-framed systems',
          'Double-glazed acoustic partitions',
          'Glass office fronts & doors',
          'Manifestation & branding film',
          'Blinds between glass',
        ],
        faqs: [
          F(
            'Can partitions reduce noise between offices?',
            'Double-glazed and acoustic partitions significantly cut sound transfer; we advise based on your layout.',
          ),
          F(
            'Do you add frosting or branding?',
            'Yes — manifestation, frosted bands and printed film are applied on site.',
          ),
        ],
      },
      {
        slug: 'handrails-balustrades',
        name: 'Handrails & Balustrades',
        tag: 'Glass & stainless',
        lead: 'Glass balustrades and stainless handrails for staircases, balconies, terraces and pool edges — fixed to spec for a clean, strong line.',
        options: [
          'Frameless glass balustrade',
          'Spigot & channel systems',
          'Stainless steel handrails',
          'Stair & balcony railings',
          'Pool & terrace edges',
          'Powder-coated aluminium rails',
        ],
        faqs: [
          F(
            'Are the balustrades structurally fixed?',
            'Yes — spigots and channels are set to the substrate and glass is toughened or laminated as required.',
          ),
          F(
            'Can you match an existing handrail finish?',
            'We match stainless grade or powder-coat colour to your existing railings where possible.',
          ),
        ],
      },
      {
        slug: 'shopfronts',
        name: 'Shopfronts',
        tag: 'Retail & commercial',
        lead: 'Aluminium and glass shopfronts, entrances and display windows built for retail footfall — durable, secure and on-brand.',
        options: [
          'Framed & frameless shopfronts',
          'Display windows',
          'Automatic & manual entrances',
          'Signage-ready fascia',
          'Security shutter coordination',
          'Tempered & laminated glazing',
        ],
        faqs: [
          F(
            'Can you work out of hours to avoid closing the shop?',
            'Where access allows we schedule out-of-hours to minimise disruption to trading.',
          ),
          F(
            'Do you coordinate signage?',
            'We prepare the fascia and openings so your signage contractor can fit cleanly.',
          ),
        ],
      },
      {
        slug: 'curtain-walling',
        name: 'Curtain Walling',
        tag: 'Façade systems',
        lead: 'Aluminium curtain-wall and cladding systems for building façades — engineered framing with glazed or solid infill panels.',
        options: [
          'Stick-system curtain wall',
          'Structural glazing',
          'Cladding & infill panels',
          'Insulated glazed units',
          'Powder-coated framing',
          'Maintenance & re-sealing',
        ],
        faqs: [
          F(
            'Do you handle façade repairs and re-sealing?',
            'Yes — we re-seal joints, replace failed units and maintain existing curtain walls.',
          ),
          F(
            "Which glazing suits the UAE's heat?",
            'Reflective and double-glazed units reduce solar gain; we recommend on site per orientation.',
          ),
        ],
      },
      {
        slug: 'specialty-glass',
        name: 'Tempered, Tinted & Frosted Glass',
        tag: 'Cut & processed to order',
        lead: 'Processed glass supplied and installed to order — tempered for safety, tinted for heat, frosted for privacy, cut to any shape.',
        options: [
          'Tempered / toughened',
          'Tinted & reflective',
          'Frosted / acid-etched',
          'Laminated safety glass',
          'Double-glazed units',
          'Custom shapes & cut-outs',
        ],
        faqs: [
          F(
            'Can you cut glass to a template?',
            'Yes — we cut and process to your template or on-site measurement, including holes and cut-outs.',
          ),
          F(
            'What thicknesses are available?',
            'Common thicknesses from 4mm to 19mm depending on application; confirmed in your quote.',
          ),
        ],
      },
      {
        slug: 'pergolas',
        name: 'Pergolas & Sunshades',
        tag: 'Aluminium · louvered · glass-roofed',
        lead: 'Aluminium pergolas, car-shades and terrace canopies — powder-coated frames with louvered, solid or glass roofs to shade patios, gardens and parking.',
        options: [
          'Fixed & louvered roof pergolas',
          'Glass-roofed canopies',
          'Car park shades',
          'Terrace & garden shades',
          'Powder-coated (any RAL)',
          'Integrated lighting & drainage',
        ],
        faqs: [
          F(
            "Do pergolas handle the UAE's sun and rain?",
            'Yes — frames are powder-coated for UV and heat, and louvered or solid roofs are set with drainage so water runs off cleanly.',
          ),
          F(
            'Can the roof open and close?',
            'We fit manual or motorised louvered roofs that tilt for shade or airflow, with a solid or glass option where you want full cover.',
          ),
        ],
      },
    ],
    faqs: [
      F(
        'Do you both supply and install?',
        'Yes — we fabricate, supply and install, and we also maintain and repair existing glass and aluminium.',
      ),
      F(
        'Do you cover small jobs?',
        'From a single mirror or shower screen to a full façade — no job is too small for a site visit.',
      ),
      F('Is measurement really free?', 'Yes. We measure on site at no cost, then quote against the real openings.'),
    ],
  },
  {
    num: '02',
    slug: 'interior-finishing',
    title: 'Interior Finishing',
    tagline: 'Fit-out & finishes',
    icon: 'brush',
    lead: 'Complete interior finishing under one contractor — paint, tiling, carpentry, plaster, ceilings, wallpaper and detailing, sequenced so trades do not clash.',
    chips: ['Painting', 'Tiling', 'Ceilings', 'Carpentry'],
    diagram: ['CEILING PLAN', 'GYPSUM GRID'],
    subservices: [
      {
        slug: 'painting',
        name: 'Painting',
        tag: 'Interior & exterior',
        lead: 'Interior and exterior painting — surface prep, priming and finishing coats for villas, apartments, offices and shops.',
        options: [
          'Interior emulsion & enamel',
          'Exterior weather coatings',
          'Surface prep & filling',
          'Wood & metal finishes',
          'Textured & decorative finishes',
          'Repaint & touch-up',
        ],
        faqs: [
          F('Do you protect furniture and floors?', 'Yes — we sheet, mask and clean up daily so the space stays usable.'),
          F(
            'Can you colour-match existing walls?',
            'We match to sample or reference so repairs and new work blend in.',
          ),
        ],
      },
      {
        slug: 'tiling',
        name: 'Floor & Wall Tiling',
        tag: 'Ceramic · porcelain · stone',
        lead: 'Floor and wall tiling in ceramic, porcelain and natural stone — set level, aligned and grouted for a lasting finish.',
        options: [
          'Floor & wall tiling',
          'Porcelain & ceramic',
          'Natural stone & marble',
          'Skirting & thresholds',
          'Waterproofing to wet areas',
          'Re-tiling & repairs',
        ],
        faqs: [
          F('Do you waterproof wet areas?', 'Yes — bathrooms and balconies are tanked before tiling to prevent leaks.'),
          F(
            'Can you match existing tiles for a repair?',
            'Where the tile is still available we match it; otherwise we advise the closest option.',
          ),
        ],
      },
      {
        slug: 'carpentry',
        name: 'Carpentry & Wood Flooring',
        tag: 'Joinery & floors',
        lead: 'Carpentry, joinery and wood flooring — doors, wardrobes, custom units and parquet or laminate floors fitted to your space.',
        options: [
          'Wood & laminate flooring',
          'Parquet & vinyl planks',
          'Custom wardrobes & units',
          'Doors & frames',
          'Skirting & trims',
          'Repairs & adjustments',
        ],
        faqs: [
          F('Can you build custom wardrobes?', 'Yes — measured, made and installed to your layout and finish.'),
          F(
            'Do you level floors before laying?',
            'We assess the subfloor and level or underlay as needed for a flat, quiet finish.',
          ),
        ],
      },
      {
        slug: 'plaster',
        name: 'Plaster Works',
        tag: 'Skimming & rendering',
        lead: 'Internal and external plaster — rendering, skimming and making-good to a smooth, paint-ready surface.',
        options: [
          'Internal skim & render',
          'External rendering',
          'Making-good & repairs',
          'Cornices & mouldings',
          'Crack repair',
          'Surface prep for paint',
        ],
        faqs: [
          F(
            'Can you repair cracks before painting?',
            'Yes — we cut out, fill and skim so cracks do not reappear through the paint.',
          ),
          F('Do you do decorative cornices?', 'We fit and repair cornices and mouldings to match the room.'),
        ],
      },
      {
        slug: 'false-ceiling',
        name: 'False Ceiling & Light Partitions',
        tag: 'Gypsum & drywall',
        lead: 'Gypsum false ceilings and lightweight drywall partitions — clean lines, hidden services and integrated lighting.',
        options: [
          'Gypsum board ceilings',
          'Drop & coffered ceilings',
          'Drywall / gypsum partitions',
          'Integrated lighting cut-outs',
          'Access panels',
          'Acoustic options',
        ],
        faqs: [
          F(
            'Can you hide AC and wiring in the ceiling?',
            'Yes — false ceilings conceal ducts, pipework and cabling with access panels where needed.',
          ),
          F('Do you cut in for spotlights?', 'We set out and cut for your lighting layout and coordinate with the electrician.'),
        ],
      },
      {
        slug: 'wallpaper',
        name: 'Wallpaper Fixing',
        tag: 'Supply & install',
        lead: 'Wallpaper and wall-covering installation — surface prep, alignment and bubble-free fixing for feature and full walls.',
        options: [
          'Feature & full walls',
          'Vinyl & fabric coverings',
          'Surface preparation',
          'Pattern matching',
          'Removal of old paper',
          'Murals & custom prints',
        ],
        faqs: [
          F('Do you prepare the wall first?', 'Yes — walls are cleaned, filled and primed so the paper sits flat and lasts.'),
          F('Can you remove old wallpaper?', 'We strip old paper and make good before hanging the new covering.'),
        ],
      },
      {
        slug: 'engraving',
        name: 'Engraving & Ornamentation',
        tag: 'Decorative detailing',
        lead: 'Decorative engraving and ornamentation — CNC and hand detailing for panels, screens, partitions and feature surfaces.',
        options: [
          'CNC-cut screens & panels',
          'Decorative partitions',
          'Engraved glass & mirror',
          'Feature wall detailing',
          'Metal & wood ornamentation',
          'Custom patterns',
        ],
        faqs: [
          F('Can you cut a custom pattern?', 'Yes — we produce CNC-cut screens and panels from your design or ours.'),
          F(
            'Do you engrave glass and mirror?',
            'We engrave and etch glass and mirror for feature and privacy detailing.',
          ),
        ],
      },
      {
        slug: 'media-walls',
        name: 'Media Walls & TV Units',
        tag: 'Feature · TV · fireplace',
        lead: 'Built-in media walls and TV feature units — gypsum, marble, PVC or wood panels with concealed wiring, niches and LED lighting, finished and painted to your room.',
        options: [
          'TV feature & media walls',
          'Electric fireplace niches',
          'Marble, PVC & wood panelling',
          'Concealed cable management',
          'LED & profile lighting',
          'Painting & final finish',
        ],
        faqs: [
          F(
            'Can you hide the TV cables and sockets?',
            'Yes — we run power and AV cabling inside the wall and leave neat outlets behind the screen, so nothing is visible.',
          ),
          F(
            'Do you build the niche for an electric fireplace?',
            'We form and finish the recess to your fireplace size and add lighting, then paint or panel it to match.',
          ),
        ],
      },
      {
        slug: 'epoxy-flooring',
        name: 'Epoxy & Microcement Flooring',
        tag: 'Seamless resin & concrete finish',
        lead: 'Seamless epoxy, resin and microcement floors and walls — a hard-wearing, jointless finish for villas, kitchens, bathrooms, showrooms and warehouses.',
        options: [
          'Epoxy & resin flooring',
          'Microcement floors & walls',
          'Metallic & flake finishes',
          'Warehouse & garage floors',
          'Anti-slip & waterproof coatings',
          'Repairs & re-coats',
        ],
        faqs: [
          F(
            'Is epoxy suitable for homes as well as warehouses?',
            'Yes — decorative epoxy and microcement give a smooth, modern finish for living spaces, while heavy-duty grades suit garages and warehouses.',
          ),
          F(
            'Can you apply it over existing tiles?',
            'In many cases yes — we assess the surface, prepare or level it, and apply the system so it bonds and stays seamless.',
          ),
        ],
      },
    ],
    faqs: [
      F(
        'Can you handle a full fit-out?',
        'Yes — we sequence paint, tiling, carpentry, ceilings and detailing so the finish comes together cleanly.',
      ),
      F('Do you work in occupied homes?', 'We do, scheduling room-by-room and protecting furniture and floors.'),
      F(
        'Can finishing combine with glass work?',
        'Often — running finishing and glass or aluminium together saves time and coordination.',
      ),
    ],
  },
  {
    num: '03',
    slug: 'mep',
    title: 'MEP',
    tagline: 'Mechanical · electrical · plumbing',
    icon: 'bolt',
    lead: 'Mechanical, electrical and plumbing works — installation and maintenance that keep a building comfortable, safe and running.',
    chips: ['AC', 'Plumbing', 'Electrical', 'Pumps'],
    diagram: ['RISER DIAGRAM', 'MEP SERVICES'],
    subservices: [
      {
        slug: 'air-conditioning',
        name: 'Air-Conditioning & Ventilation',
        tag: 'Install & maintain',
        lead: 'Air-conditioning, ventilation and air-filtration installation and maintenance — from split units to ducted systems.',
        options: [
          'Split & ducted AC install',
          'Ventilation & extraction',
          'Air-filtration systems',
          'Servicing & gas top-up',
          'Duct cleaning',
          'Fault diagnosis & repair',
        ],
        faqs: [
          F('Do you service as well as install?', 'Yes — planned servicing keeps units efficient and prevents breakdowns.'),
          F('Can you improve air quality?', 'We fit filtration and ventilation to suit the space and occupancy.'),
        ],
      },
      {
        slug: 'plumbing',
        name: 'Plumbing & Sanitary',
        tag: 'Installation',
        lead: 'Plumbing and sanitary installation — pipework, fittings and fixtures fitted correctly and tested.',
        options: [
          'Sanitary fixtures & fittings',
          'Hot & cold pipework',
          'Water heaters',
          'Kitchen & bathroom plumbing',
          'Leak testing',
          'Drainage connections',
        ],
        faqs: [
          F('Do you test for leaks before closing walls?', 'Yes — pipework is pressure-tested before it is concealed.'),
          F('Can you fit water heaters?', 'We supply, fit and connect water heaters and associated pipework.'),
        ],
      },
      {
        slug: 'sanitary-repair',
        name: 'Sanitary Repair',
        tag: 'Repairs & maintenance',
        lead: 'Sanitary and pipe repairs — leaks, blockages and failed fittings fixed quickly and cleanly.',
        options: [
          'Leak detection & repair',
          'Blockage clearing',
          'Fixture replacement',
          'Pipe repair & re-routing',
          'Cistern & tap repair',
          'Preventive maintenance',
        ],
        faqs: [
          F('Can you find a hidden leak?', 'We trace and locate leaks before opening up, to keep repairs minimal.'),
          F('Do you clear blocked drains?', 'Yes — we clear blockages and advise on prevention.'),
        ],
      },
      {
        slug: 'electrical',
        name: 'Electrical Fittings & Fixtures',
        tag: 'Repair & maintenance',
        lead: 'Electrical fittings and fixtures repair and maintenance — lighting, sockets, DBs and small works by competent hands.',
        options: [
          'Lighting & fixtures',
          'Sockets & switches',
          'Distribution boards',
          'Fault finding',
          'Rewiring (small works)',
          'Testing & safety checks',
        ],
        faqs: [
          F('Do you do fault finding?', 'Yes — we diagnose faults and repair or replace as needed.'),
          F(
            'Can you add new lighting points?',
            'We add points and circuits within the scope of small works, coordinated with finishing.',
          ),
        ],
      },
      {
        slug: 'electromechanical',
        name: 'Electromechanical Equipment',
        tag: 'Install & maintain',
        lead: 'Electromechanical equipment installation and maintenance — pumps, motors and building systems kept running.',
        options: [
          'Pumps & motors',
          'Building systems',
          'Preventive maintenance',
          'Breakdown repair',
          'Controls & wiring',
          'Commissioning',
        ],
        faqs: [
          F('Do you maintain pumps and motors?', 'Yes — on call or on a planned maintenance schedule.'),
          F(
            'Can you respond to a breakdown?',
            'Contact us during working hours and we will advise and attend as fast as we can.',
          ),
        ],
      },
    ],
    faqs: [
      F(
        'Do you offer MEP maintenance contracts?',
        'Yes — planned preventive maintenance keeps AC, plumbing and electrical reliable; ask about a schedule.',
      ),
      F(
        'Can you respond to breakdowns?',
        'Call or WhatsApp during working hours and we will advise and attend as fast as we can.',
      ),
      F(
        'Do you do small electrical works only?',
        'We handle fittings, fixtures and small works; larger installations are quoted after a site visit.',
      ),
    ],
  },
  {
    num: '04',
    slug: 'swimming-pools',
    title: 'Swimming Pools',
    tagline: 'Installation & maintenance',
    icon: 'wave',
    lead: 'Swimming pool installation and maintenance — built watertight and kept balanced, from new pools to scheduled servicing.',
    chips: ['Build', 'Waterproofing', 'Filtration', 'Service'],
    diagram: ['POOL SECTION', 'WATERPROOFING'],
    subservices: [
      {
        slug: 'pool-installation',
        name: 'Swimming Pool Installation',
        tag: 'Design & build',
        lead: 'Swimming pool installation — structure, waterproofing, tiling, plumbing and filtration built as one coordinated job.',
        options: [
          'Pool construction',
          'Waterproofing & tiling',
          'Filtration & pumps',
          'Plumbing & circulation',
          'Lighting',
          'Coping & surrounds',
        ],
        faqs: [
          F(
            'Do you handle the whole build?',
            'Yes — structure, waterproofing, tiling, plumbing and filtration under one team.',
          ),
          F('Can you add lighting and features?', 'We fit underwater lighting, jets and coping to your design.'),
        ],
      },
      {
        slug: 'pool-maintenance',
        name: 'Swimming Pool Maintenance',
        tag: 'Cleaning & servicing',
        lead: 'Swimming pool maintenance — water balancing, cleaning, equipment servicing and repairs on a schedule that suits you.',
        options: [
          'Water testing & balancing',
          'Cleaning & vacuuming',
          'Pump & filter servicing',
          'Leak & crack repair',
          'Tile & grout repair',
          'Regular contracts',
        ],
        faqs: [
          F(
            'What does a maintenance visit include?',
            'Water testing and balancing, skimming and vacuuming, a filter and pump check, and a note of anything that needs repair.',
          ),
          F('Do you service pools you did not build?', 'Yes — we maintain and repair existing pools.'),
        ],
      },
    ],
    faqs: [
      F(
        'Do you build new pools and service existing ones?',
        'Both — new installation and ongoing maintenance, including for pools we did not build.',
      ),
      F('Can I set a regular service schedule?', 'Yes — weekly, fortnightly or monthly visits on a maintenance contract.'),
      F('Do you repair leaks and cracks?', 'We diagnose and repair leaks, cracks and failed equipment.'),
    ],
  },
  {
    num: '05',
    slug: 'building-maintenance',
    title: 'Building Maintenance',
    tagline: 'Renovation, cleaning & plumbing',
    icon: 'wrench',
    lead: 'Building maintenance and cleaning for owners, facility managers and property managers — planned upkeep and rapid response under one number.',
    chips: ['Maintenance', 'Cleaning', 'AMC', 'Call-outs'],
    diagram: ['BUILDING PLAN', 'MAINTENANCE ZONES'],
    subservices: [
      {
        slug: 'building-maintenance',
        name: 'Building Maintenance',
        tag: 'Repairs & upkeep',
        lead: 'General building maintenance — the whole property kept in order under one contractor, on call or on contract.',
        options: [
          'General repairs',
          'Preventive maintenance',
          'Handyman works',
          'MEP upkeep',
          'Finishing repairs',
          'Emergency call-outs',
        ],
        faqs: [
          F(
            'Can you cover a whole building rather than a single job?',
            'Yes — glass, finishes, MEP, pools and cleaning can all sit with one point of contact instead of a different trade for each job.',
          ),
          F(
            'Do you handle call-outs?',
            'Call or WhatsApp during working hours and we will advise straight away, then attend as fast as access allows.',
          ),
        ],
      },
      {
        slug: 'cleaning',
        name: 'Building & Home Cleaning',
        tag: 'Cleaning services',
        lead: 'Building and home cleaning services — one-off deep cleans and scheduled upkeep for villas, apartments and offices.',
        options: [
          'Deep cleaning',
          'Post-construction cleaning',
          'Villa & apartment cleaning',
          'Office cleaning',
          'Façade & glass cleaning',
          'Scheduled contracts',
        ],
        faqs: [
          F(
            'Do you do post-construction cleaning?',
            'Yes — we clear dust and residue so a finished space is ready to use.',
          ),
          F('Can cleaning be scheduled regularly?', 'Yes — on a weekly, fortnightly or monthly contract.'),
        ],
      },
      {
        slug: 'renovation',
        name: 'Renovation & Refurbishment',
        tag: 'Villas · apartments · offices',
        lead: 'Full and partial renovations — kitchens, bathrooms, villas, apartments and offices stripped back and rebuilt, with every trade sequenced under one contractor.',
        options: [
          'Kitchen & bathroom renovation',
          'Villa & apartment refurbishment',
          'Office fit-out & remodelling',
          'Demolition & making-good',
          'Full finishing & MEP works',
          'Project coordination',
        ],
        faqs: [
          F(
            'Can you handle a full renovation end to end?',
            'Yes — demolition, plumbing, electrical, tiling, painting and finishing run under one team, so you deal with one point of contact.',
          ),
          F(
            'Do you renovate while we stay in the property?',
            'Where possible we phase the work room-by-room and protect finished areas so the home or office stays usable.',
          ),
        ],
      },
      {
        slug: 'waterproofing',
        name: 'Waterproofing & Sealing',
        tag: 'Roofs · bathrooms · tanks',
        lead: 'Waterproofing and leak sealing for roofs, bathrooms, balconies, water tanks and basements — membranes and coatings applied and tested to stop water getting in.',
        options: [
          'Roof & terrace waterproofing',
          'Bathroom & wet-area tanking',
          'Water tank & basement sealing',
          'Crack injection & joint sealing',
          'Leak detection & repair',
          'Protective coatings',
        ],
        faqs: [
          F(
            'Can you find where a leak is coming from?',
            'We trace the source before opening up, then seal and test the area so the repair holds rather than moving the problem.',
          ),
          F(
            'What areas most often need waterproofing?',
            'Roofs, balconies, bathrooms and water tanks — anywhere standing water or weather meets the structure. We advise after a site check.',
          ),
        ],
      },
    ],
    faqs: [
      F(
        'What is an annual maintenance contract?',
        'A planned agreement covering regular upkeep and priority response across your building — one contractor for the whole property.',
      ),
      F(
        'Who is building maintenance for?',
        'Villa owners, landlords, facility managers and property managers who want reliable, scheduled upkeep.',
      ),
      F('Can a contract cover multiple trades?', 'Yes — one contract can cover glass, finishing, MEP, pools and maintenance.'),
    ],
  },
];

/** Flat slug → sub-service index, with its parent division attached. */
export type ResolvedService = SubService & {
  divSlug: string;
  divTitle: string;
  related: { slug: string; name: string }[];
};

export const SERVICE_MAP: Record<string, ResolvedService> = {};

for (const d of DIVISIONS) {
  for (const s of d.subservices) {
    SERVICE_MAP[s.slug] = {
      ...s,
      divSlug: d.slug,
      divTitle: d.title,
      related: d.subservices
        .filter((x) => x.slug !== s.slug)
        .slice(0, 4)
        .map((x) => ({ slug: x.slug, name: x.name })),
    };
  }
}

export const ALL_SERVICES: ResolvedService[] = Object.values(SERVICE_MAP);

export const getDivision = (slug: string) => DIVISIONS.find((d) => d.slug === slug);
export const getService = (slug: string): ResolvedService | undefined => SERVICE_MAP[slug];
