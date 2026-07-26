import ServicesIndexView, { servicesMeta } from '@/components/pages/ServicesIndexView';

export const metadata = servicesMeta('ar');

export default function Page() {
  return <ServicesIndexView lang="ar" />;
}
