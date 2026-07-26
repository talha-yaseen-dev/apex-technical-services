import type { Metadata } from 'next';
import DivisionView, { divisionParams, divisionMeta, type DivisionParams } from '@/components/pages/DivisionView';

export function generateStaticParams() {
  return divisionParams();
}

export function generateMetadata({ params }: { params: DivisionParams }): Metadata {
  return divisionMeta(params.division, 'ar');
}

export default function Page({ params }: { params: DivisionParams }) {
  return <DivisionView slug={params.division} lang="ar" />;
}
