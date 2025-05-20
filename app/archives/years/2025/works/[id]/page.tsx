import Link from 'next/link'
import Image from 'next/image'
import { getWorkById } from '@/app/lib/supabase'

// 페이지 매개변수 타입
interface WorkDetailPageProps {
  params: {
    id: string
  }
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const workId = parseInt(params.id)
  
  // 실제로는 DB에서 데이터 가져오기
  // const work = await getWorkById(workId)
  
  // 현재는 더미 데이터 사용
  const work = {
    id: workId,
    title: '작품 제목 ' + workId,
    description: '이 작품은 다양한 디자인 요소와 창의적인 접근을 통해 새로운 시각적 경험을 제공합니다. 세부적인 디테일과 조화로운 구성을 통해 관람객에게 깊은 인상을 남기는 것을 목표로 하였습니다.',
    images: [
      '/images/works/detail-1.jpg',
      '/images/works/detail-2.jpg',
      '/images/works/detail-3.jpg'
    ],
    category: workId % 2 === 0 ? '융합디자인스튜디오' : '혁신디자인스튜디오',
    professor: workId % 2 === 0 ? '김성민 교수' : '이지현 교수',
    tags: ['그래픽디자인', '타이포그래피', '브랜딩'],
    users: {
      id: 100 + workId,
      name: workId === 1 ? '홍길동' : 
            workId === 2 ? '김철수' : 
            workId === 3 ? '이영희' : 
            workId === 4 ? '박민수' : 
            workId === 5 ? '정지원' : 
            workId === 6 ? '최유진' : 
            '알 수 없음',
      profile_image: '/images/profiles/user-' + workId + '.jpg',
      major: '커뮤니케이션디자인과',
    }
  }

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">작품을 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-8">요청하신 작품 정보를 찾을 수 없습니다.</p>
          <Link href="/archives/years/2025/works" className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700">
            작품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* 작품 헤더 */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <Link href="/archives/years/2025" className="hover:text-primary-700">홈</Link>
              <span>/</span>
              <Link href="/archives/years/2025/works" className="hover:text-primary-700">작품</Link>
              <span>/</span>
              <span>{work.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{work.title}</h1>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                {work.category}
              </span>
              <span className="text-gray-600">| 지도교수: {work.professor}</span>
            </div>
            <div className="flex items-center mt-6">
              <div className="text-left">
                <Link href={`/archives/years/2025/designers/${work.users.id}`} className="font-medium text-lg hover:text-primary-700">
                  {work.users.name}
                </Link>
                <p className="text-gray-600">{work.users.major}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 작품 메인 이미지 */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-12">
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
              대표 이미지
            </div>
          </div>

          {/* 작품 설명 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">작품 설명</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {work.description}
              </p>

              {/* 추가 이미지들 */}
              <div className="space-y-8 mt-12">
                {work.images.slice(1).map((image, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="w-full h-80 flex items-center justify-center bg-gray-200 text-gray-500">
                      상세 이미지 {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 작품 정보 사이드바 */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-lg font-medium mb-4">작품 정보</h3>
                
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">카테고리</h4>
                  <p className="mb-4">{work.category}</p>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">지도교수</h4>
                  <p className="mb-4">{work.professor}</p>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">태그</h4>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">디자이너</h4>
                  <Link 
                    href={`/archives/years/2025/designers/${work.users.id}`} 
                    className="flex items-center hover:bg-gray-100 p-2 rounded-lg"
                  >
                    <div className="text-left">
                      <p className="font-medium">{work.users.name}</p>
                      <p className="text-sm text-gray-500">{work.users.major}</p>
                    </div>
                  </Link>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">공유하기</h4>
                  <div className="flex space-x-2 mt-2">
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 다른 작품 추천 */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">다른 작품 둘러보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((id) => {
              // 1부터 6까지 순환하도록 설정
              const nextWorkId = (workId + id) % 6 || 6; // 0이 되면 6으로 처리
              let designerName;
              
              // 작품 ID에 따라 디자이너 이름 할당
              switch(nextWorkId) {
                case 1: designerName = '홍길동'; break;
                case 2: designerName = '김철수'; break;
                case 3: designerName = '이영희'; break;
                case 4: designerName = '박민수'; break;
                case 5: designerName = '정지원'; break;
                case 6: designerName = '최유진'; break;
                default: designerName = '알 수 없음';
              }
              
              return (
                <Link key={id} href={`/archives/years/2025/works/${nextWorkId}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400 group-hover:text-gray-600">
                      작품 이미지
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-primary-700">작품 제목 {nextWorkId}</h3>
                      <p className="text-gray-500 text-sm">
                        {designerName}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/archives/years/2025/works" className="px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 inline-block">
              작품 더 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 