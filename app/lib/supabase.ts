import { createClient } from '@supabase/supabase-js'

// Supabase 클라이언트 설정
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 타입 지정
export type Database = {
  public: {
    Tables: {
      archives: {
        Row: {
          id: number
          year: number
          title: string
          description: string | null
          thumbnail: string | null
          start_date: string | null
          end_date: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: number
          year: number
          title: string
          description?: string | null
          thumbnail?: string | null
          start_date?: string | null
          end_date?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: number
          year?: number
          title?: string
          description?: string | null
          thumbnail?: string | null
          start_date?: string | null
          end_date?: string | null
          is_active?: boolean
          created_at?: string
        }
      }
      users: {
        Row: {
          id: number
          name: string
          major: string | null
          bio: string | null
          email: string | null
          instagram: string | null
          profile_image: string | null
          interview1: string | null
          interview2: string | null
          archive_id: number
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          major?: string | null
          bio?: string | null
          email?: string | null
          instagram?: string | null
          profile_image?: string | null
          interview1?: string | null
          interview2?: string | null
          archive_id: number
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          major?: string | null
          bio?: string | null
          email?: string | null
          instagram?: string | null
          profile_image?: string | null
          interview1?: string | null
          interview2?: string | null
          archive_id?: number
          created_at?: string
        }
      }
      works: {
        Row: {
          id: number
          title: string
          description: string | null
          tags: string[] | null
          category: string | null
          images: string[] | null
          artist_id: number
          archive_id: number
          created_at: string
        }
        Insert: {
          id?: number
          title: string
          description?: string | null
          tags?: string[] | null
          category?: string | null
          images?: string[] | null
          artist_id: number
          archive_id: number
          created_at?: string
        }
        Update: {
          id?: number
          title?: string
          description?: string | null
          tags?: string[] | null
          category?: string | null
          images?: string[] | null
          artist_id?: number
          archive_id?: number
          created_at?: string
        }
      }
      guestbook: {
        Row: {
          id: number
          to_recipient: string | null
          message: string
          from_sender: string
          created_at: string
          archive_id: number
        }
        Insert: {
          id?: number
          to_recipient?: string | null
          message: string
          from_sender: string
          created_at?: string
          archive_id: number
        }
        Update: {
          id?: number
          to_recipient?: string | null
          message?: string
          from_sender?: string
          created_at?: string
          archive_id?: number
        }
      }
      committee: {
        Row: {
          id: number
          name: string
          role: string
          major: string | null
          profile_image: string | null
          archive_id: number
        }
        Insert: {
          id?: number
          name: string
          role: string
          major?: string | null
          profile_image?: string | null
          archive_id: number
        }
        Update: {
          id?: number
          name?: string
          role?: string
          major?: string | null
          profile_image?: string | null
          archive_id?: number
        }
      }
      professors: {
        Row: {
          id: number
          name: string
          department: string
          profile_image: string | null
          archive_id: number
        }
        Insert: {
          id?: number
          name: string
          department: string
          profile_image?: string | null
          archive_id: number
        }
        Update: {
          id?: number
          name?: string
          department?: string
          profile_image?: string | null
          archive_id?: number
        }
      }
      sponsors: {
        Row: {
          id: number
          name: string
          logo: string | null
          url: string | null
          archive_id: number
        }
        Insert: {
          id?: number
          name: string
          logo?: string | null
          url?: string | null
          archive_id: number
        }
        Update: {
          id?: number
          name?: string
          logo?: string | null
          url?: string | null
          archive_id?: number
        }
      }
    }
  }
}

// Supabase 클라이언트 생성
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// 서버 컴포넌트에서 사용할 함수
export async function getArchives() {
  const { data, error } = await supabase
    .from('archives')
    .select('*')
    .order('year', { ascending: false })

  if (error) {
    console.error('Error fetching archives:', error)
    return []
  }

  return data || []
}

export async function getArchiveByYear(year: number) {
  const { data, error } = await supabase
    .from('archives')
    .select('*')
    .eq('year', year)
    .single()

  if (error) {
    console.error(`Error fetching archive for year ${year}:`, error)
    return null
  }

  return data
}

export async function getWorksByArchiveId(archiveId: number) {
  const { data, error } = await supabase
    .from('works')
    .select('*, users!inner(*)')
    .eq('archive_id', archiveId)

  if (error) {
    console.error(`Error fetching works for archive ${archiveId}:`, error)
    return []
  }

  return data || []
}

export async function getUsersByArchiveId(archiveId: number) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('archive_id', archiveId)

  if (error) {
    console.error(`Error fetching users for archive ${archiveId}:`, error)
    return []
  }

  return data || []
}

export async function getWorkById(workId: number) {
  const { data, error } = await supabase
    .from('works')
    .select('*, users!inner(*)')
    .eq('id', workId)
    .single()

  if (error) {
    console.error(`Error fetching work ${workId}:`, error)
    return null
  }

  return data
}

export async function getUserById(userId: number) {
  const { data, error } = await supabase
    .from('users')
    .select('*, works(*)')
    .eq('id', userId)
    .single()

  if (error) {
    console.error(`Error fetching user ${userId}:`, error)
    return null
  }

  return data
}

export async function getGuestbookByArchiveId(archiveId: number) {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .eq('archive_id', archiveId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error(`Error fetching guestbook for archive ${archiveId}:`, error)
    return []
  }

  return data || []
} 