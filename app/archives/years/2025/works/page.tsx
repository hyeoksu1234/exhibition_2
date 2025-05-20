import Link from 'next/link'
import Image from 'next/image'
import { getArchiveByYear, getWorksByArchiveId } from '@/app/lib/supabase'

export default async function WorksPage() {
  // 실제로는 DB에서 데이터 가져오기
  // const archiveData = await getArchiveByYear(2025)
  // const works = await getWorksByArchiveId(archiveData?.id || 0)
  
  // 현재는 더미 데이터 사용
  const works = [
    {
      id: 1,
      title: '작품 제목 1',
      images: ['/images/works/thumbnail-1.jpg'],
      category: '혁신디자인스튜디오',
      users: { name: '홍길동' }
    },
    {
      id: 2,
      title: '작품 제목 2',
      images: ['/images/works/thumbnail-2.jpg'],
      category: '혁신디자인스튜디오',
      users: { name: '김철수' }
    },
    {
      id: 3,
      title: '작품 제목 3',
      images: ['/images/works/thumbnail-3.jpg'],
      category: '융합디자인스튜디오',
      users: { name: '이영희' }
    },
    {
      id: 4,
      title: '작품 제목 4',
      images: ['/images/works/thumbnail-4.jpg'],
      category: '융합디자인스튜디오',
      users: { name: '박민수' }
    },
    {
      id: 5,
      title: '작품 제목 5',
      images: ['/images/works/thumbnail-5.jpg'],
      category: '혁신디자인스튜디오',
      users: { name: '정지원' }
    },
    {
      id: 6,
      title: '작품 제목 6',
      images: ['/images/works/thumbnail-6.jpg'],
      category: '융합디자인스튜디오',
      users: { name: '최유진' }
    },
  ];
  
  // 카테고리 추출
  const categories: string[] = Array.from(new Set(works.map(work => work.category)));

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6">작품 갤러리</h1>
          <p className="text-gray-600 max-w-3xl">
            2025년 졸업 전시 작품들을 모아 놓은 갤러리입니다. 원하는 작품을 클릭하여 자세한 정보를 확인하세요.
          </p>
        </header>

        {/* 검색 및 필터링 */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="작품 또는 디자이너 검색" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button className="px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700">
              검색
            </button>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="mb-8 border-b">
          <div className="flex flex-wrap -mb-px">
            <button className="mr-4 py-2 px-4 border-b-2 border-primary-800 text-primary-800 font-medium">
              전체
            </button>
            {categories.map(category => (
              <button 
                key={category} 
                className="mr-4 py-2 px-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 작품 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {works.map(work => (
            <Link 
              key={work.id} 
              href={`/archives/years/2025/works/${work.id}`} 
              className="group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                {/* 실제로는 이미지가 들어갈 곳 */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 group-hover:bg-gray-300 transition">
                  작품 이미지
                </div>
              </div>
              <h3 className="font-medium text-lg mb-1 group-hover:text-primary-700">{work.title}</h3>
              <p className="text-gray-600">{work.users.name}</p>
              <p className="text-sm text-gray-500">{work.category}</p>
            </Link>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-l-md hover:bg-gray-50">
              이전
            </a>
            <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-primary-800 text-white">
              1
            </a>
            <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
              2
            </a>
            <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
              3
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-r-md hover:bg-gray-50">
              다음
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
} 