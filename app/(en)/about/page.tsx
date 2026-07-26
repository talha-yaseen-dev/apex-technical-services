import AboutView, { aboutMeta } from '@/components/pages/AboutView';

export const metadata = aboutMeta('en');

export default function Page() {
  return <AboutView lang="en" />;
}
