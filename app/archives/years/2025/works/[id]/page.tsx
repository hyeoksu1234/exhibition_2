import Link from 'next/link'
import Image from 'next/image'
import { works } from '@/app/lib/data/works'
import { designers } from '@/app/lib/data/designers'
import { englishNameByStudentNumber } from '@/app/lib/data/student-data'

// 페이지 매개변수 타입
interface WorkDetailPageProps {
  params: {
    id: string
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const workId = parseInt(params.id)
  const work = works.find(w => w.id === workId)
  const designer = work ? designers.find(d => d.id === work.userId) : undefined
  const studioKey = work?.category === '혁신디자인스튜디오' ? 'innovation' : 'convergence'
  const worksListHref = `/archives/years/2025/works${studioKey === 'innovation' ? '?studio=innovation' : ''}`

  if (!work || !designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">작품을 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-8">요청하신 작품 정보를 찾을 수 없습니다.</p>
          <Link href={worksListHref} className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700">
            작품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }
  const roman = designer.student_number ? englishNameByStudentNumber[designer.student_number] : undefined

  // 추천 작품 4개
  const related = works.filter(w => w.id !== work.id && w.category === work.category).slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)] gap-10">
          {/* Left: main visual */}
          <div className="order-2 lg:order-1">
            <div className="w-full bg-[repeating-linear-gradient(45deg,#efefef_0,#efefef_24px,#f8f8f8_24px,#f8f8f8_48px)] border border-gray-200 min-h-[720px]" />
            {/* Video placeholder */}
            <div className="mt-10 w-full h-[220px] bg-gray-200 border border-gray-200" />
          </div>

          {/* Right: meta and description */}
          <aside className="order-1 lg:order-2 lg:pl-2 mb-10 lg:mb-0">
            <Link href={worksListHref} className="text-gray-600 hover:text-black inline-flex items-center mb-6">
              <Image src="/images/works/arrow.svg" alt="" width={16} height={16} className="mr-2" />
              <span className="rix-font text-[16px]">뒤로가기</span>
            </Link>
            <h1 className="pretendard-font text-[26px] font-extrabold text-black leading-snug mb-2">{work.title}</h1>
            <div className="pretendard-font text-[18px] font-bold text-[#D5B27D] mb-5">
              {designer.name}
              {roman ? <span className="ml-2 text-[#D5B27D] font-bold">{roman}</span> : null}
            </div>
            <p className="work-description pretendard-font text-[18px] font-medium leading-7 text-gray-700 mb-6">
              {work.description}
            </p>
            <div className="pretendard-font text-[18px] font-bold text-gray-700">{work.category}</div>
          </aside>
        </div>

        {/* Related */}
        <div className="mx-auto max-w-6xl mt-12">
          <span className="inline-flex items-center px-2 py-0.5 -rotate-1" style={{ background: '#DDFF8E', border: '1px solid #000' }}>다른 작품 둘러보기</span>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {related.map(r => (
              <Link key={r.id} href={`/archives/years/2025/works/${r.id}`} className="block group">
                <div className="aspect-[4/3] w-full bg-[repeating-linear-gradient(45deg,#efefef_0,#efefef_24px,#f8f8f8_24px,#f8f8f8_48px)]" />
                <div className="mt-3 pretendard-font font-bold text-[14px] text-gray-900">{r.title}</div>
                <div className="pretendard-font text-[12px] text-[#8b8b8b]">
                  {designers.find(d => d.id === r.userId)?.name || ''}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
