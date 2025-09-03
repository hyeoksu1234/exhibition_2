import Link from 'next/link'
import Navigation from './components/Navigation'

export default function ExhibitionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 2025년 전시 데이터 가져오기 (실제로는 Supabase에서 가져올 예정)
  // const archiveData = await getArchiveByYear(2025)
  
  // 현재는 더미 데이터 사용
  const archiveData = {
    id: 1,
    year: 2025,
    title: '2025 졸업 전시',
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* 메인 컨텐츠 */}
      <div className="flex-grow">{children}</div>


    </div>
  )
} 