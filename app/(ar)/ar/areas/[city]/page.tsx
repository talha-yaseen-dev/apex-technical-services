import type { Metadata } from 'next';
import AreaView, { areaParams, areaMeta, type AreaParams } from '@/components/pages/AreaView';

export function generateStaticParams() {
  return areaParams();
}

export function generateMetadata({ params }: { params: AreaParams }): Metadata {
  return areaMeta(params.city, 'ar');
}

export default function Page({ params }: { params: AreaParams }) {
  return <AreaView slug={params.city} lang="ar" />;
}
