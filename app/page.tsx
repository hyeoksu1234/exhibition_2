import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900 pretendard-font">
      {/* 헤더 섹션 */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            <span className="block mb-4">상명대학교 커뮤니케이션디자인</span>
            졸업 전시 아카이브
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            상명대학교 커뮤니케이션디자인과 역대 온라인 졸업 전시 웹사이트 아카이브 플랫폼입니다. <br />
            연도별 졸업 작품을 감상하고 디자이너의 작업 과정을 탐색해보세요.
          </p>
        </div>
      </div>

      {/* 본문 섹션 */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* 연도별 전시 목록 */}
        <div className="mb-24">
          <div className="flex flex-col mb-12">
            <p className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-2">Exhibitions</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold">연도별 전시</h2>
              <p className="text-sm text-gray-500 mt-4 md:mt-0">총 2개의 전시</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-6 pr-6 font-medium text-sm text-gray-500">연도</th>
                    <th className="py-6 pr-6 font-medium text-sm text-gray-500">전시명</th>
                    <th className="py-6 pr-6 font-medium text-sm text-gray-500">참여 학생</th>
                    <th className="py-6 pr-6 font-medium text-sm text-gray-500">작품 수</th>
                    <th className="py-6 pr-6 font-medium text-sm text-gray-500">전시 기간</th>
                    <th className="py-6 font-medium text-sm text-gray-500"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group cursor-pointer">
                    <td className="py-6 pr-6 border-t border-gray-100">2025</td>
                    <td className="py-6 pr-6 border-t border-gray-100 font-medium">2025 졸업 전시</td>
                    <td className="py-6 pr-6 border-t border-gray-100">104명</td>
                    <td className="py-6 pr-6 border-t border-gray-100">200+개</td>
                    <td className="py-6 pr-6 border-t border-gray-100">2025. 11. 13 (목) - 2025. 11. 19 (수)</td>
                    <td className="py-6 border-t border-gray-100 text-right">
                      <Link href="/archives/years/2025" className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600">
                        보기
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                  <tr className="group cursor-pointer">
                    <td className="py-6 pr-6 border-t border-gray-100">2024</td>
                    <td className="py-6 pr-6 border-t border-gray-100 font-medium">2024 졸업 전시</td>
                    <td className="py-6 pr-6 border-t border-gray-100">101명</td>
                    <td className="py-6 pr-6 border-t border-gray-100">202개</td>
                    <td className="py-6 pr-6 border-t border-gray-100">2024. 12. 4 (수) - 2024. 12. 9 (월)</td>
                    <td className="py-6 border-t border-gray-100 text-right">
                      <a href="https://smucd2024.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600">
                        보기
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  {/* 추후 다른 연도 전시 정보 추가 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 아카이브 소개 */}
        <div className="mb-24">
          <p className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-2">About</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">아카이브 소개</h2>
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              본 아카이브는 학교 전시 작품들을 온라인에서 영구적으로 보존하고 공유하기 위해 
              제작되었습니다. <br /> 연도별 전시를 통해 학생들의 성장과 발전을 한눈에 볼 수 있습니다.
              <br />각 전시 사이트에서는 작품 갤러리, 디자이너 프로필, 방명록 등 다양한 기능을 경험하실 수 있습니다.
            </p>
         
            <blockquote className="border-l-2 border-gray-200 pl-4 italic my-8">
              "좋은 디자인은 작가의 발자취이자 미래를 향한 여정의 기록입니다."
            </blockquote>
            <p>
              매년 업데이트되는 졸업 작품 전시를 통해 디자인의 흐름과 학생들의 창의적인 
              시각을 경험해보세요.
            </p>
          </div>
        </div>
      </div>
      
      {/* 푸터 */}
      <div className="border-t border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-12">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} 상명대학교 커뮤니케이션디자인 전공 졸업 전시 아카이브
          </p>
        </div>
      </div>
    </main>
  )
} 