import { fetchDesigners } from '@/app/lib/services/designers'
import DesignersClient from './DesignersClient'

export const revalidate = 60

export default async function DesignersPage() {
  const designers = await fetchDesigners()
  return <DesignersClient designers={designers} />
}
