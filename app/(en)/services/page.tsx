import ServicesIndexView, { servicesMeta } from '@/components/pages/ServicesIndexView';

export const metadata = servicesMeta('en');

export default function Page() {
  return <ServicesIndexView lang="en" />;
}
