import type { Metadata } from 'next';
import ServiceView, { serviceParams, serviceMeta, type ServiceParams } from '@/components/pages/ServiceView';

export function generateStaticParams() {
  return serviceParams();
}

export function generateMetadata({ params }: { params: ServiceParams }): Metadata {
  return serviceMeta(params.slug, 'en');
}

export default function Page({ params }: { params: ServiceParams }) {
  return <ServiceView slug={params.slug} lang="en" />;
}
