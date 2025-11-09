import { cache } from 'react'

import type { Work } from '@/app/lib/types'
import { generateWorks } from '@/app/lib/data/works'
import { fetchDesignersCached } from '@/app/lib/services/designers'

const loadWorks = cache(async (): Promise<Work[]> => {
  const designers = await fetchDesignersCached()
  return generateWorks(designers)
})

export async function fetchWorks(): Promise<Work[]> {
  return loadWorks()
}

export async function fetchWorkById(id: number): Promise<Work | undefined> {
  const works = await loadWorks()
  return works.find((work) => work.id === id)
}

export async function fetchWorksByUserId(userId: number): Promise<Work[]> {
  const works = await loadWorks()
  return works.filter((work) => work.userId === userId)
}
