import Link from 'next/link'
import Image from 'next/image'
import { getDesignerById } from '@/app/lib/data/designers'
import { englishNameByStudentNumber, photoFileByStudentNumber } from '@/app/lib/data/student-data'
import { getWorksByUserId } from '@/app/lib/data/works'

// 간단 로마자 변환(표시용)
function romanizeKorean(str: string): string {
  const CHO_RR = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h']
  const JUNG_RR = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i']
  const JONG_RR = ['', 'k', 'k', 'ks', 'n', 'nj', 'nh', 't', 'l', 'lk', 'lm', 'lb', 'ls', 'lt', 'lp', 'lh', 'm', 'p', 'ps', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't']
  let out = ''
  for (const ch of str) {
    const code = ch.charCodeAt(0)
    if (code < 0xac00 || code > 0xd7a3) { out += ch; continue }
    const sidx = code - 0xac00
    const cho = Math.floor(sidx / 588)
    const jung = Math.floor((sidx % 588) / 28)
    const jong = sidx % 28
    out += (CHO_RR[cho] || '') + (JUNG_RR[jung] || '') + (JONG_RR[jong] || '')
  }
  return out.charAt(0).toUpperCase() + out.slice(1)
}

// Bio helper: insert gentle line breaks after sentence‑like boundaries
function formatBio(text: string): string {
  if (!text) return ''
  // 1) Normalize whitespace
  const normalized = text.replace(/\r\n?/g, '\n').replace(/[\t ]+/g, ' ').trim()

  // 2) If author inserted explicit newlines, preserve them (but collapse 3+)
  if (normalized.includes('\n')) {
    return normalized.replace(/\n{3,}/g, '\n\n')
  }

  // 3) Conservative sentence split: split after sentence-ending punctuation
  //    only when next token likely starts a new sentence (letter/Korean/quote/open bracket)
  const parts = normalized.split(/(?<=[.!?]|다\.|니다\.|요\.)\s+(?=[A-Za-z가-힣"“‘\(\[])/g)

  // 4) Reflow into lines with a soft max width to avoid overly long lines
  const MAX = 72
  const lines: string[] = []
  let buf = ''
  for (const seg of parts) {
    const candidate = buf ? buf + ' ' + seg : seg
    if (candidate.length > MAX && buf) {
      lines.push(buf)
      buf = seg
    } else {
      buf = candidate
    }
  }
  if (buf) lines.push(buf)

  return lines.join('\n')
}

// 페이지 매개변수 타입
interface DesignerDetailPageProps {
  params: {
    id: string
  }
}

export default async function DesignerDetailPage({ params }: DesignerDetailPageProps) {
  const designerId = parseInt(params.id)
  const designer = getDesignerById(designerId)

  if (!designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-normal text-gray-800 mb-4">디자이너를 찾을 수 없습니다</h2>
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
      {/* info */}
      <section id="info" className="py-8 xl:h-[590px]">
        <div className="container mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-[302px_1fr] gap-6 md:gap-10 items-stretch">
            {/* 왼쪽: 학생 사진 (이름 기반) */}
            <div className="relative overflow-hidden border border-gray-200 w-[302px] h-[370px] mx-auto md:mx-0 md:mt-[20px]">
              <Image
                src={`/images/profiles/images/${encodeURIComponent(photoFileByStudentNumber[designer.student_number ?? ''] || designer.name + '.jpg')}`}
                alt={`${designer.name} 사진`}
                fill
                sizes="(min-width: 768px) 302px, 50vw"
                className="object-cover"
              />
            </div>
            {/* 우측 정보 */}
            <div className="md:h-[370px] flex flex-col justify-start">
              {/* 이름: 괄호 PNG 한 장 위에 텍스트 오버레이 */}
              <div className="mb-4">
                <div className="relative inline-block align-middle">
                  <img
                    src="/images/profiles/Group 1073.png"
                    alt="name bracket"
                    className="h-[120px] md:h-[168px] w-auto select-none"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                    <span
                      className="leading-tight whitespace-nowrap"
                      style={{ fontFamily: '"rixdongnimgothic-pro", sans-serif', fontSize: '33px', fontWeight: 400 }}
                    >
                      {designer.name}
                    </span>
                  <span
                    className="text-black leading-tight whitespace-nowrap"
                    style={{ fontFamily: '"rixdongnimgothic-pro", sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 2.4vw, 18px)' }}
                  >
                    {englishNameByStudentNumber[designer.student_number ?? ''] || romanizeKorean(designer.name)}
                  </span>
                  </div>
                </div>
              </div>
              <div className="pretendard-font text-base text-gray-800 grid grid-cols-[86px_1fr] gap-y-2 gap-x-2 items-center max-w-xl mb-6">
                <div className="text-gray-600 flex items-center h-[32px]">Instagram</div>
                <div className="flex items-center h-[32px]">
                  {designer.instagram ? (
                    <a
                      href={`https://instagram.com/${designer.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center h-[32px] px-2 -rotate-1"
                      style={{ background: '#DDFF8E', fontFamily: '"rixdongnimgothic-pro", sans-serif', fontSize: '16px', fontWeight: 700, transformOrigin: 'center' }}
                    >
                      @{designer.instagram}
                    </a>
                  ) : (
                    <span className="pretendard-font text-gray-500">계정 없음</span>
                  )}
                </div>
                <div className="text-gray-600 flex items-center h-[32px]">E-mail</div>
                <div className="flex items-center h-[32px]">
                  {designer.email ? (
                    <a
                      href={`mailto:${designer.email}`}
                      className="inline-flex items-center h-[32px] px-2 -rotate-1"
                      style={{ background: '#B5EEFF', fontFamily: '"rixdongnimgothic-pro", sans-serif', fontSize: '16px', fontWeight: 700, transformOrigin: 'center' }}
                    >
                      {designer.email}
                    </a>
                  ) : (
                    <span className="pretendard-font text-gray-500">없음</span>
                  )}
                </div>
              </div>
              <p className="pretendard-font text-gray-700 leading-relaxed break-keep whitespace-pre-line max-w-[68ch] md:max-w-[72ch]" style={{ wordBreak: 'keep-all' }}>
                {formatBio(designer.bio)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 구분선 */}
      <div className="container mx-auto px-[30px]">
        <div className="h-[12px] bg-black" />
      </div>

      {/* interview */}
      <section id="interview" className="container mx-auto px-[30px] py-10">
        <h2 className="text-2xl md:text-3xl font-normal mb-8">Interview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <div className="mb-3">
              <span className="inline-flex items-center px-2 py-0.5 -rotate-1" style={{ background: '#DDFF8E', border: '1px solid #000' }}>[ 1 ]</span>
            </div>
            <h3 className="text-lg md:text-xl font-normal mb-3">4년동안 디자인 전공을 하며 생긴 새로운 습관이나 태도가 있다면 무엇인가요?</h3>
            <p className="pretendard-font text-gray-700 leading-relaxed break-keep whitespace-pre-line max-w-[68ch] md:max-w-[72ch]" style={{ wordBreak: 'keep-all' }}>{formatBio(designer.interview1)}</p>
          </div>
          <div>
            <div className="mb-3">
              <span className="inline-flex items-center px-2 py-0.5 -rotate-1" style={{ background: '#DDFF8E', border: '1px solid #000' }}>[ 2 ]</span>
            </div>
            <h3 className="text-lg md:text-xl font-normal mb-3">졸업 작품 작업을 하면서 가장 고민했던 점이나 기억에 남는 순간이 있다면 무엇인가요?</h3>
            <p className="pretendard-font text-gray-700 leading-relaxed break-keep whitespace-pre-line max-w-[68ch] md:max-w-[72ch]" style={{ wordBreak: 'keep-all' }}>{formatBio(designer.interview2)}</p>
          </div>
        </div>
      </section>

      {/* 구분선 */}
      <div className="container mx-auto px-[30px]"><div className="h-[12px] bg-black" /></div>

      {/* projects */}
      <section id="projects" className="py-10">
        <div className="container mx-auto px-[30px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-8">Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {(() => {
              const all = getWorksByUserId(designer.id)
              const conv = all.find(w => w.category === '융합디자인스튜디오')
              const inov = all.find(w => w.category === '혁신디자인스튜디오')
              const two = [conv, inov].filter(Boolean)
              return two
            })().map((work) => (
              <Link key={work.id} href={`/archives/years/2025/works/${work.id}`} className="block group">
                <div className="w-full aspect-[4/3] bg-[repeating-linear-gradient(45deg,#e6e6e6_0,#e6e6e6_12px,#f5f5f5_12px,#f5f5f5_24px)] border border-gray-200" />
                <div className="mt-3">
                  <div className="text-sm text-black leading-tight">{work.title}</div>
                  <div className="text-xs text-gray-600 pretendard-font">{work.category} | {work.professor}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
