import WorksPageClient from './WorksPageClient'
import { fetchWorks } from '@/app/lib/services/works'

export default async function WorksPage() {
  const works = await fetchWorks()
  return <WorksPageClient works={works} />
}
