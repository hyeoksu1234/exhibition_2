import WorksPageClient from './WorksPageClient'
import { fetchWorks } from '@/app/lib/services/works'

interface WorksPageProps {
  searchParams: {
    studio?: string
  }
}

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const works = await fetchWorks()
  const studioParam = searchParams.studio === 'innovation' ? 'innovation' : 'convergence'
  return <WorksPageClient works={works} initialStudio={studioParam} />
}
