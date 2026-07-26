import ProjectsView, { projectsMeta } from '@/components/pages/ProjectsView';

export const metadata = projectsMeta('en');

export default function Page() {
  return <ProjectsView lang="en" />;
}
