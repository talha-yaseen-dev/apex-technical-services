import type { Config } from 'tailwindcss';

// Apex design tokens — transcribed from the approved "Apex.dc.html".
// Colour values live as CSS custom properties in app/globals.css so that both
// Tailwind utilities and the raw SVG/diagram markup can reference the same source.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        ink2: 'var(--ink2)',
        paper: 'var(--paper)',
        paper2: 'var(--paper2)',
        panel: 'var(--panel)',
        line: 'var(--line)',
        line2: 'var(--line2)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'accent-hover': 'var(--accent-hover)',
        'accent-soft': 'var(--accent-soft)',
        'accent-lite': 'var(--accent-lite)',
        'accent-fg': 'var(--accent-fg)',
        wa: 'var(--wa)',
        dark: 'var(--dark)',
        dark2: 'var(--dark2)',
        'dark-card': 'var(--dark-card)',
        'dark-line': 'var(--dark-line)',
        'dark-line2': 'var(--dark-line2)',
        'dark-text': 'var(--dark-text)',
        'dark-text2': 'var(--dark-text2)',
        'dark-text3': 'var(--dark-text3)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1220px',
      },
      screens: {
        // Desktop nav measures ~1045px (logo 273 + nav 710 + gap + padding);
        // 1100px gives it slack. Below that we use the mobile drawer.
        nav: '1100px',
      },
    },
  },
  plugins: [],
};
export default config;
