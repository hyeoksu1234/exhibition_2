import Link from 'next/link'
import Image from 'next/image'
import { getArchiveByYear } from '@/app/lib/supabase'

export default async function Exhibition2025Home() {
  // 2025년 전시 데이터 가져오기 (실제로는 Supabase에서 가져올 예정)
  // const archiveData = await getArchiveByYear(2025)
  
  // 현재는 더미 데이터 사용
  const archiveData = {
    id: 1,
    year: 2025,
    title: '2025 졸업 전시',
    description: '100명의 학생이 참여한 졸업 작품 200개를 온라인에 전시합니다.',
    thumbnail: null,
    start_date: '2025-11-13',
    end_date: '2025-11-19',
    is_active: true,
  }

  return (
    <main className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="bg-primary-900 text-white py-36 px-8">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">{archiveData.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{archiveData.description}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/archives/years/2025/works" className="px-8 py-3 bg-white text-primary-900 font-medium rounded-lg hover:bg-gray-100 transition">
              작품 보기
            </Link>
            <Link href="/archives/years/2025/designers" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition">
              디자이너 보기
            </Link>
          
          </div>
        </div>
      </div>

      {/* 전시 정보 섹션 */}
      <div className="bg-white py-24 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">전시 정보</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">기간</h3>
                <p className="text-xl">
                  {archiveData.start_date} ~ {archiveData.end_date}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">위치</h3>
                <p className="text-xl">
                더 서울 라이티움 제 1전시장
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">운영 시간</h3>
                <p className="text-xl">
                  10:00 AM ~ 6:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">입장료</h3>
                <p className="text-xl">
                  무료
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">전시 포스터</h2>
            <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg">
              {/* 포스터 이미지 */}
              <div className="flex items-center justify-center h-96 bg-gray-100 rounded text-gray-500">
                포스터 이미지 준비 중
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 출품위원회 섹션 */}
      <div className="bg-gray-50 py-12 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">졸업전시 준비 위원회</h2>
          
          {/* 데스크탑 버전 - 중간 크기 이상 화면에서만 표시 */}
          <div className="hidden md:block w-full overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th className="py-4 px-4 font-medium text-lg">위원장</th>
                  <th className="py-4 px-4 font-medium text-lg">부위원장</th>
                  <th className="py-4 px-4 font-medium text-lg">총무</th>
                  <th className="py-4 px-4 font-medium text-lg">디자인</th>
                  <th className="py-4 px-4 font-medium text-lg">기획</th>
                  <th className="py-4 px-4 font-medium text-lg">홍보</th>
                  <th className="py-4 px-4 font-medium text-lg">웹</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">명규민</td>
                  <td className="py-2 px-4">김재겸</td>
                  <td className="py-2 px-4">이유진</td>
                  <td className="py-2 px-4">조은영</td>
                  <td className="py-2 px-4">박규영</td>
                  <td className="py-2 px-4">유서윤</td>
                  <td className="py-2 px-4">이혁수</td>
                </tr>
                <tr>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">금예은</td>
                  <td className="py-2 px-4">김세미</td>
                  <td className="py-2 px-4">박시온</td>
                  <td className="py-2 px-4">최지윤</td>
                  <td className="py-2 px-4">고세진</td>
                  <td className="py-2 px-4">김혜림</td>
                </tr>
                <tr>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">김수인</td>
                  <td className="py-2 px-4">송시후</td>
                  <td className="py-2 px-4">박하빈</td>
                  <td className="py-2 px-4">강규리</td>
                </tr>
                <tr>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">유경주</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* 모바일 버전 - 테이블 형태와 유사한 심플한 레이아웃 */}
          <div className="md:hidden">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">위원장</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>명규민</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">부위원장</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>김재겸</p>
                  <p>금예은</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">총무</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>이유진</p>
                  <p>김세미</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">디자인</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>조은영</p>
                  <p>박시온</p>
                  <p>김수인</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">기획</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>박규영</p>
                  <p>최지윤</p>
                  <p>송시후</p>
                  <p>유경주</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">홍보</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>유서윤</p>
                  <p>고세진</p>
                  <p>박하빈</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-sm pb-1 border-b mb-2">웹</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <p>이혁수</p>
                  <p>김혜림</p>
                  <p>강규리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 지도교수 섹션 */}
      <div className="bg-white py-24 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">지도교수</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-8 pb-4 border-b text-center">융합디자인스튜디오</h3>
              <div className="grid grid-cols-2 gap-6">
                {['이원제', '신윤진', '남정', '유동관'].map((name, index) => (
                  <div key={index} className="py-2 text-center">
                    <span>{name} 교수</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-8 pb-4 border-b text-center">혁신디자인스튜디오</h3>
              <div className="grid grid-cols-2 gap-6">
                {['손우성', '김한솔', '안혜선', '서승연'].map((name, index) => (
                  <div key={index} className="py-2 text-center">
                    <span>{name} 교수</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 협찬 섹션 */}
      <div className="bg-gray-50 py-24 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">협찬</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <span className="text-gray-400">협찬사 로고</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 바로가기 섹션 */}
      <div className="bg-primary-900 text-white py-16 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/archives/years/2025/works" className="block p-8 bg-primary-800 rounded-lg hover:bg-primary-700 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">작품 갤러리</h3>
                <span className="text-lg">&rarr;</span>
              </div>
            </Link>
            <Link href="/archives/years/2025/designers" className="block p-8 bg-primary-800 rounded-lg hover:bg-primary-700 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">디자이너</h3>
                <span className="text-lg">&rarr;</span>
              </div>
            </Link>
            <Link href="/archives/years/2025/archive" className="block p-8 bg-primary-800 rounded-lg hover:bg-primary-700 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">전시장 아카이브</h3>
                <span className="text-lg">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 