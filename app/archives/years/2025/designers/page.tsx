'use client';

import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { getUsersByArchiveId } from '@/app/lib/supabase'

export default function DesignersPage() {
  // 검색어 상태
  const [searchTerm, setSearchTerm] = useState('');
  
  // 현재는 더미 데이터 사용
  const users = [
    {
      id: 101,
      name: '홍길동',
      major: '커뮤니케이션디자인',
      studio: '혁신디자인스튜디오',
      profile_image: '/images/profiles/user-1.jpg',
    },
    {
      id: 102,
      name: '김철수',
      major: '커뮤니케이션디자인',
      studio: '융합디자인스튜디오',
      profile_image: '/images/profiles/user-2.jpg',
    },
    {
      id: 103,
      name: '이영희',
      major: '커뮤니케이션디자인',
      studio: '혁신디자인스튜디오',
      profile_image: '/images/profiles/user-3.jpg',
    },
    {
      id: 104,
      name: '박민수',
      major: '커뮤니케이션디자인',
      studio: '융합디자인스튜디오',
      profile_image: '/images/profiles/user-4.jpg',
    },
    {
      id: 105,
      name: '정지원',
      major: '커뮤니케이션디자인',
      studio: '혁신디자인스튜디오',
      profile_image: '/images/profiles/user-5.jpg',
    },
    {
      id: 106,
      name: '최유진',
      major: '커뮤니케이션디자인',
      studio: '융합디자인스튜디오',
      profile_image: '/images/profiles/user-6.jpg',
    },
    {
      id: 107,
      name: '윤지수',
      major: '커뮤니케이션디자인',
      studio: '혁신디자인스튜디오',
      profile_image: '/images/profiles/user-7.jpg',
    },
    {
      id: 108,
      name: '서현우',
      major: '커뮤니케이션디자인',
      studio: '융합디자인스튜디오',
      profile_image: '/images/profiles/user-8.jpg',
    },
  ];

  // 가나다 순으로 정렬
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));
  
  // 검색 필터링
  const filteredUsers = sortedUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-6">디자이너</h1>
          <p className="text-gray-600 max-w-3xl">
            2025년 졸업 전시에 참여한 학생들을 소개합니다. 디자이너를 클릭하여 프로필과 작품을 확인하세요.
          </p>
        </header>

        {/* 검색 */}
        <div className="bg-gray-50 p-6 rounded-lg mb-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="디자이너 이름 검색" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700"
            >
              {searchTerm ? '초기화' : '검색'}
            </button>
          </div>
        </div>

        {/* 디자이너 그리드 - 가나다순 */}
        <div>
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b">디자이너 목록</h2>
          {filteredUsers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredUsers.map(designer => (
                <Link 
                  key={designer.id} 
                  href={`/archives/years/2025/designers/${designer.id}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden p-6 transition hover:shadow-md">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                    <h3 className="text-lg font-medium text-center group-hover:text-primary-700">{designer.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">검색 결과가 없습니다</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 