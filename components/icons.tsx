// Icon set transcribed from the design document. Every icon inherits
// `currentColor` and is sized by the `size` prop so callers stay declarative.

import type { IconKey } from '@/content/divisions';
import type { WhyIcon } from '@/content/site';

type P = { size?: number; className?: string };

const stroke = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'aria-hidden': true,
  focusable: 'false' as const,
});

export function PhoneIcon({ size = 18, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2} className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 19, className }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67a8.2 8.2 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.51 3.66c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.46-.29-.24-.12-1.46-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.79-.78.95-.14.17-.29.19-.53.07-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z" />
    </svg>
  );
}

export function GlobeIcon({ size = 15, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={1.8} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function MailIcon({ size = 20, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowIcon({ size = 15, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2.2} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon({ size = 12, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2.4} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ size = 22, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2} className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ size = 20, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2} className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function InfoIcon({ size = 22, className }: P) {
  return (
    <svg {...stroke(size)} strokeWidth={2} className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
  );
}

// --- division icons --------------------------------------------------------

const DIVISION_PATHS: Record<IconKey, React.ReactNode> = {
  glass: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M4 9h16M12 3v18" />
    </>
  ),
  brush: <path d="M9 11 20 0M9 11l4 4M9 11a4 4 0 0 0-4 4c0 1.5-1 2.5-2 3 1.5 1 3.5 1.5 5 .5a4 4 0 0 0 1-7.5" />,
  bolt: <path d="M13 2 4 14h7l-2 8 9-12h-7z" />,
  wave: (
    <path d="M2 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2M2 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18v3h3l6.5-6.5a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.1-2.1z" />,
};

export function DivisionIcon({ name, size = 20, className }: P & { name: IconKey }) {
  return (
    <svg {...stroke(size)} strokeWidth={1.7} className={className}>
      {DIVISION_PATHS[name]}
    </svg>
  );
}

// --- "why us" icons --------------------------------------------------------

const WHY_PATHS: Record<WhyIcon, React.ReactNode> = {
  shield: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />,
  building: <path d="M3 21h18M6 21V7l6-4 6 4v14M10 21v-6h4v6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  people: (
    <>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    </>
  ),
  pulse: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
};

export function WhyUsIcon({ name, size = 20, className }: P & { name: WhyIcon }) {
  return (
    <svg {...stroke(size)} strokeWidth={1.8} className={className}>
      {WHY_PATHS[name]}
    </svg>
  );
}
