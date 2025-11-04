// 공통 컴포넌트 Props 타입들
export interface RoleBoxProps {
  children: React.ReactNode
  bgColor: string
  className?: string
}

export interface PersonNameProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export interface SectionLabelProps {
  children: React.ReactNode
  position: 'left' | 'right'
  top: string
}

export interface HeroVerticalTextProps {
  children: React.ReactNode
  position: 'left' | 'right'
  top: string
}

// 데이터 타입들 (기존 types.ts에서 재사용)
export interface Designer {
  id: number
  name: string
  major: string
  studios: string[]
  profile_image: string
  interview1?: string
  interview2?: string
  works?: Work[]
}

export interface Work {
  id: number
  title: string
  images: string[]
  category: string
  users?: { name: string }
  description?: string
  professor?: string
  tags?: string[]
}

// 전시 정보 타입
export interface ExhibitionInfo {
  year: number
  title: string
  subtitle: string
  dates: {
    start: string
    end: string
    time: string
    opening: string
  }
  venue: {
    name: string
    korean_name: string
    address: string
    detail: string
  }
  contact: {
    instagram: string
    phone: string
  }
}
