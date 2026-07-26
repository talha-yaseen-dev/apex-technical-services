import ProjectsView, { projectsMeta } from '@/components/pages/ProjectsView';

export const metadata = projectsMeta('ar');

export default function Page() {
  return <ProjectsView lang="ar" />;
}
