import ContactView, { contactMeta } from '@/components/pages/ContactView';

export const metadata = contactMeta('ar');

export default function Page() {
  return <ContactView lang="ar" />;
}
