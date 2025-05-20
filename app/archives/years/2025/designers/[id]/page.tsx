import Link from 'next/link'
import Image from 'next/image'
import { getUserById } from '@/app/lib/supabase'

// 페이지 매개변수 타입
interface DesignerDetailPageProps {
  params: {
    id: string
  }
}

export default async function DesignerDetailPage({ params }: DesignerDetailPageProps) {
  const designerId = parseInt(params.id)
  
  // 실제로는 DB에서 데이터 가져오기
  // const designer = await getUserById(designerId)
  
  // 현재는 더미 데이터 사용
  const designer = {
    id: designerId,
    // 디자이너 ID에 따라 이름 할당
    name: designerId === 101 ? '홍길동' : 
          designerId === 102 ? '김철수' : 
          designerId === 103 ? '이영희' : 
          designerId === 104 ? '박민수' : 
          designerId === 105 ? '정지원' : 
          designerId === 106 ? '최유진' : 
          designerId === 107 ? '윤지수' : 
          designerId === 108 ? '서현우' : '알 수 없음',
    major: '커뮤니케이션디자인과',
    profile_image: `/images/profiles/user-${designerId - 100}.jpg`,
    bio: '디자인을 통해 새로운 가치를 창출하고자 합니다. 시각 디자인을 중심으로 다양한 미디어와 플랫폼에서 사용자 경험을 향상시키는 작업을 진행해왔습니다.',
    email: `designer${designerId}@example.com`,
    instagram: `designer${designerId}`,
    interview1: '이번 전시를 통해 4년간의 배움과 경험을 표현할 수 있어서 뜻깊었습니다. 많은 시행착오와 고민을 거쳐 완성된 작품들이라 더욱 의미가 있습니다.',
    interview2: '작업 과정에서 가장 어려웠던 점은 콘셉트를 명확히 정의하고 그것을 시각적으로 표현하는 과정이었습니다. 여러 번의 피드백과 수정을 거쳐 최종 결과물을 만들어내는 과정이 기억에 남습니다.',
    works: [
      {
        id: designerId - 100,
        title: `작품 제목 ${designerId - 100}`,
        images: [`/images/works/thumbnail-${designerId - 100}.jpg`],
        category: (designerId - 100) % 2 === 0 ? '융합디자인스튜디오' : '혁신디자인스튜디오',
      },
      {
        // 두 번째 작품은 사용자마다 다른 작품을 보여줌
        id: ((designerId - 100) % 6) + 1, // 1~6 사이의 숫자 중 하나
        title: `작품 제목 ${((designerId - 100) % 6) + 1}`,
        images: [`/images/works/thumbnail-${((designerId - 100) % 6) + 1}.jpg`],
        category: (((designerId - 100) % 6) + 1) % 2 === 0 ? '융합디자인스튜디오' : '혁신디자인스튜디오',
      }
    ]
  }

  if (!designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">디자이너를 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-8">요청하신 디자이너 정보를 찾을 수 없습니다.</p>
          <Link href="/archives/years/2025/designers" className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700">
            디자이너 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* 디자이너 헤더 */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <Link href="/archives/years/2025" className="hover:text-primary-700">홈</Link>
              <span>/</span>
              <Link href="/archives/years/2025/designers" className="hover:text-primary-700">디자이너</Link>
              <span>/</span>
              <span>{designer.name}</span>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-full shrink-0 flex items-center justify-center">
                {/* 프로필 이미지가 있을 경우 표시 */}
                {designer.profile_image && <Image src={designer.profile_image} alt={`${designer.name} 프로필`} width={192} height={192} className="rounded-full" />}
              </div>
              <div className="flex-1 max-w-2xl text-left">
                <h1 className="text-4xl font-bold mb-2">{designer.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{designer.major}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {designer.email && (
                    <a href={`mailto:${designer.email}`} className="flex items-center text-gray-600 hover:text-primary-700">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {designer.email}
                    </a>
                  )}
                  {designer.instagram && (
                    <a href={`https://instagram.com/${designer.instagram}`} className="flex items-center text-gray-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      @{designer.instagram}
                    </a>
                  )}
                </div>
                <p className="text-gray-700 max-w-2xl">
                  {designer.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 디자이너 인터뷰 */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">인터뷰</h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">전시를 마친 소감이 어떠신가요?</h3>
              <p className="text-gray-700 leading-relaxed">
                {designer.interview1}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">작업하면서 가장 고민했던 점이나 기억에 남는 순간이 있다면?</h3>
              <p className="text-gray-700 leading-relaxed">
                {designer.interview2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 디자이너 작품 */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">작품</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designer.works.map(work => (
                <Link 
                  key={work.id} 
                  href={`/archives/years/2025/works/${work.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 group-hover:text-gray-600">
                      작품 이미지
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary-700">{work.title}</h3>
                      <p className="text-sm text-gray-500">{work.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 