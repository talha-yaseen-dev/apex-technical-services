import AboutView, { aboutMeta } from '@/components/pages/AboutView';

export const metadata = aboutMeta('ar');

export default function Page() {
  return <AboutView lang="ar" />;
}
