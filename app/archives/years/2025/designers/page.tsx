'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link'
import { realStudentData, englishNameByStudentNumber, photoFileByStudentNumber } from '@/app/lib/data/student-data'
import Footer from '../components/Footer'
import { generateDesigners } from '@/app/lib/data/designers'

// 한글 초성 추출
const CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'] as const
function getInitialConsonant(str: string): string {
  const s = str?.trim()?.[0]
  if (!s) return ''
  const code = s.charCodeAt(0)
  if (code < 0xac00 || code > 0xd7a3) return s
  const idx = Math.floor((code - 0xac00) / 588)
  const ch = CHO[idx]
  // 쌍자음은 기본 자음으로 매핑
  if (ch === 'ㄲ') return 'ㄱ'
  if (ch === 'ㄸ') return 'ㄷ'
  if (ch === 'ㅃ') return 'ㅂ'
  if (ch === 'ㅆ') return 'ㅅ'
  if (ch === 'ㅉ') return 'ㅈ'
  return ch
}

// 간단 로마자 변환 (개략적, 표시용)
const CHO_RR = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h']
const JUNG_RR = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i']
const JONG_RR = ['', 'k', 'k', 'ks', 'n', 'nj', 'nh', 't', 'l', 'lk', 'lm', 'lb', 'ls', 'lt', 'lp', 'lh', 'm', 'p', 'ps', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't']
function romanizeKorean(str: string): string {
  let out = ''
  for (const ch of str) {
    const code = ch.charCodeAt(0)
    if (code < 0xac00 || code > 0xd7a3) { out += ch; continue }
    const sidx = code - 0xac00
    const cho = Math.floor(sidx / 588)
    const jung = Math.floor((sidx % 588) / 28)
    const jong = sidx % 28
    const head = CHO_RR[cho]
    const mid = JUNG_RR[jung]
    const tail = JONG_RR[jong]
    out += (head === '' ? '' : head) + mid + tail
  }
  // 단어 첫 글자만 대문자 (간단 표시)
  return out.charAt(0).toUpperCase() + out.slice(1)
}

export default function DesignersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCho, setActiveCho] = useState<'ALL' | string>('ALL')

  const users = generateDesigners(realStudentData)
  const sortedUsers = useMemo(() => [...users].sort((a, b) => a.name.localeCompare(b.name, 'ko-KR')), [users])

  const filteredUsers = useMemo(() => {
    return sortedUsers.filter(user => {
      const matchSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
      const initial = getInitialConsonant(user.name)
      const matchCho = activeCho === 'ALL' ? true : initial === activeCho
      return matchSearch && matchCho
    })
  }, [sortedUsers, searchTerm, activeCho])

  const CHO_FILTERS = ['ALL','ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'] as const

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-10 px-5">
        {/* 필터 바 */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {CHO_FILTERS.map(key => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCho(key as any)}
                className={[
                  'h-8 min-w-8 px-2 flex items-center justify-center border text-sm',
                  key === 'ALL'
                    ? (activeCho === 'ALL' ? 'bg-lime-300 border-black text-black -rotate-1 shadow-[2px_2px_0_0_#000]' : 'bg-gray-100')
                    : (activeCho === key ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50')
                ].join(' ')}
              >
                {key === 'ALL' ? 'All' : key}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="디자이너 이름 검색"
                className="w-56 px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-black pretendard-font"
              />
              <button type="button" onClick={() => null} className="px-3 py-1 border border-black">
                검색
              </button>
            </div>
          </div>
        </div>

        {/* 그리드 */}
        {filteredUsers.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[10px] gap-y-[10px] sm:gap-x-6 sm:gap-y-12">
            {filteredUsers.map(designer => (
              <Link key={designer.id} href={`/archives/years/2025/designers/${designer.id}`} className="block group w-full sm:w-[210px] mx-auto">
                <div className="relative overflow-hidden border border-gray-200 w-full aspect-[210/256] sm:w-[210px] sm:h-[256px] sm:aspect-auto">
                  <img
                    src={`/images/profiles/images/${photoFileByStudentNumber[designer.student_number ?? ''] || designer.name + '.jpg'}`}
                    alt={`${designer.name} 사진`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement
                      t.src = '/images/profiles/Group 1073.png'
                    }}
                  />
                </div>
                <div className="mt-3 h-[48px] flex flex-col justify-start">
                  <div className="pretendard-font text-black font-bold text-[20px] leading-tight">{designer.name}</div>
                  <div className="pretendard-font text-[#3D3D3D] font-bold text-[14px] leading-snug">{englishNameByStudentNumber[designer.student_number ?? ''] || romanizeKorean(designer.name)}</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">검색 결과가 없습니다</div>
        )}
      </div>
      <Footer />
    </div>
  )
}
