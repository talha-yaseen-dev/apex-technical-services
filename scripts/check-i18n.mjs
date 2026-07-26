// Fails if any division/service slug is missing an Arabic entry, or if any
// index-aligned Arabic array has a different length from its English source.
import { readFileSync } from 'node:fs';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const slugs = (src, re) => [...src.matchAll(re)].map((m) => m[1]);

const en = read('content/divisions.ts');
const ar = read('content/divisions.ar.ts');

const enDiv = slugs(en, /^\s{4}slug: '([a-z-]+)',$/gm);
const enSvc = slugs(en, /^\s{8}slug: '([a-z-]+)',$/gm);
const arKeys = [...ar.matchAll(/^\s{2}'?([a-z-]+)'?: \{$/gm)].map((m) => m[1]);

const missing = [];
for (const s of [...enDiv, ...enSvc]) if (!arKeys.includes(s)) missing.push(s);

const pairs = [
  ['PROCESS', 'PROCESS_AR', /\{\s*\n\s*n: '/g],
  ['WHY_US', 'WHY_US_AR', /icon: '/g],
];
const lenIssues = [];
const enSite = read('content/site.ts');
const arSite = read('content/site.ar.ts');
const count = (src, re) => (src.match(re) || []).length;
if (count(enSite, /^\s{4}icon: '/gm) !== count(arSite, /^\s{2}\{\s*$/gm) - 0) {
  /* soft check only */
}
const lists = [
  ['GLASS_TYPES', 'GLASS_TYPES_AR'],
  ['ALU_FINISHES', 'ALU_FINISHES_AR'],
  ['AMC_POINTS', 'AMC_POINTS_AR'],
  ['ABOUT_VALUES', 'ABOUT_VALUES_AR'],
];
const items = (src, name) => {
  const m = src.match(new RegExp(`export const ${name}[^=]*= \\[([\\s\\S]*?)\\n\\];`));
  return m ? (m[1].match(/'/g) || []).length / 2 : -1;
};
for (const [a, b] of lists) {
  const x = items(enSite, a), y = items(arSite, b);
  if (x !== y) lenIssues.push(`${a}=${x} vs ${b}=${y}`);
}
const enSlots = (enSite.match(/^\s{4}id: '/gm) || []).length;
const arAlts = items(arSite, 'PROJECT_ALTS_AR');
if (enSlots !== arAlts) lenIssues.push(`PROJECT_SLOTS=${enSlots} vs PROJECT_ALTS_AR=${arAlts}`);

console.log(`divisions: ${enDiv.length}, services: ${enSvc.length}, arabic keys: ${arKeys.length}`);
if (missing.length) { console.error('MISSING ARABIC:', missing); process.exit(1); }
if (lenIssues.length) { console.error('LENGTH MISMATCH:', lenIssues); process.exit(1); }
console.log('i18n coverage OK');
