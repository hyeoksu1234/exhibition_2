'use client'

import Link from 'next/link'
import { getArchiveByYear } from '@/app/lib/supabase'
import { useState, useEffect } from 'react'

export default function ExhibitionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 모바일 메뉴가 열렸을 때 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

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
      {/* 전시 네비게이션 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between py-4 px-6">
          <div className="flex items-center justify-between">
            <Link href="/archives/years/2025" className="text-xl font-bold text-primary-900 hover:text-primary-700">
              {archiveData.title}
            </Link>
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex md:flex-row md:items-center md:w-auto justify-between">
            <nav className="flex flex-row md:items-center space-x-8">
              <Link href="/archives/years/2025" className="font-medium text-gray-600 hover:text-primary-700">
                HOME
              </Link>
              <Link href="/archives/years/2025/works" className="font-medium text-gray-600 hover:text-primary-700">
                WORKS
              </Link>
              <Link href="/archives/years/2025/designers" className="font-medium text-gray-600 hover:text-primary-700">
                DESIGNER
              </Link>
              <Link href="/archives/years/2025/archive" className="font-medium text-gray-600 hover:text-primary-700">
                ARCHIVE
              </Link>
            </nav>
            <Link href="/" className="font-medium text-gray-600 hover:text-primary-700 ml-8">
              아카이브 메인
            </Link>
          </div>
          
          {/* 모바일 메뉴 오버레이 */}
          <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* 모바일 메뉴 */}
          <div 
            className={`md:hidden fixed top-0 right-0 w-64 h-auto bg-white shadow-lg rounded-bl-lg z-50 transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-primary-900">메뉴</span>
                <button
                  className="p-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="메뉴 닫기"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/archives/years/2025" 
                  className="font-medium text-gray-800 hover:text-primary-700 py-2 border-b border-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  href="/archives/years/2025/works" 
                  className="font-medium text-gray-800 hover:text-primary-700 py-2 border-b border-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WORKS
                </Link>
                <Link 
                  href="/archives/years/2025/designers" 
                  className="font-medium text-gray-800 hover:text-primary-700 py-2 border-b border-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  DESIGNER
                </Link>
                <Link 
                  href="/archives/years/2025/archive" 
                  className="font-medium text-gray-800 hover:text-primary-700 py-2 border-b border-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ARCHIVE
                </Link>
                <Link 
                  href="/" 
                  className="font-medium text-gray-800 hover:text-primary-700 py-2 mt-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  아카이브 메인
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="flex-grow">{children}</div>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{archiveData.title}</h3>
            <p className="text-gray-400 mb-6">
              상명대학교 천안캠퍼스<br />
              충청남도 천안시 동남구 상명대길 31
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">관련 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.smu.ac.kr" className="text-gray-400 hover:text-white">상명대학교</a>
              </li>
              <li>
                <a href="https://visual.smu.ac.kr/visual/index.do" className="text-gray-400 hover:text-white">커뮤니케이션 디자인학과</a>
              </li>
              <li>
                <a href="https://smucd2024.com/" className="text-gray-400 hover:text-white">이전 졸업전시</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">교내 갤러리</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">아카이브</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">전체 아카이브</Link>
              </li>
              <li>
                <Link href="/archives/years/2025" className="text-gray-400 hover:text-white">2025 졸업 전시</Link>
              </li>
              {/* 추후 다른 연도 추가 */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 container mx-auto">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} 상명대학교 졸업전시. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 