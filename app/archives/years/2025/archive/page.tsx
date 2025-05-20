'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ArchivePage() {
  // 상태 관리
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  // 캐러셀 효과를 위한 ref
  const carouselRef = useRef<HTMLDivElement>(null);

  // 아카이브 이미지 (실제로는 DB/스토리지에서 가져올 예정)
  const archiveImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `/images/archive/image-${i + 1}.jpg`,
    alt: `전시 이미지 ${i + 1}`,
    category: ['전시장', '오프닝', '관람객', '작품'][i % 4], // 샘플 카테고리
  }));

  // 모든 이미지 표시
  const filteredImages = archiveImages;

  // 캐러셀 이전 이미지로 이동
  const prevSlide = () => {
    setActiveIndex(prev => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  // 캐러셀 다음 이미지로 이동
  const nextSlide = () => {
    setActiveIndex(prev => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // 모달 열기
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // 스크롤 복원
  };

  // 모달 내 이전 이미지
  const prevModalImage = () => {
    setModalImageIndex(prev => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  // 모달 내 다음 이미지
  const nextModalImage = () => {
    setModalImageIndex(prev => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevModalImage();
      if (e.key === 'ArrowRight') nextModalImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // 활성화된 이미지로 스크롤
  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * (carouselRef.current.offsetWidth * 0.85);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-6">전시장 아카이브</h1>
          <p className="text-gray-600 max-w-3xl">
            2025년 졸업 전시의 다양한 모습을 담은 이미지 아카이브입니다. <br /> 전시장 모습, 관람객, 오프닝 행사 등의 순간들을 모았습니다.
          </p>
        </header>

        {/* 캐러셀 섹션 */}
        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-100">
            {filteredImages.length > 0 ? (
              <div className="h-full flex items-center justify-center bg-gray-200">
                {filteredImages[activeIndex].alt}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                이미지가 없습니다
              </div>
            )}
          </div>
          
          {/* 캐러셀 컨트롤 버튼 */}
          {filteredImages.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-70"
                aria-label="이전 이미지"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-70"
                aria-label="다음 이미지"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* 카운터 표시 */}
          {filteredImages.length > 0 && (
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm">
              {activeIndex + 1} / {filteredImages.length}
            </div>
          )}
          
          {/* 전체화면 보기 버튼 */}
          {filteredImages.length > 0 && (
            <button 
              onClick={() => openModal(activeIndex)}
              className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-opacity-80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
              전체화면
            </button>
          )}
        </div>
        
        {/* 썸네일 캐러셀 */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide mb-12"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`flex-none cursor-pointer w-32 h-20 transition-all duration-300 ${
                index === activeIndex
                  ? 'border-4 border-primary-800'
                  : 'border border-gray-200 opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-sm text-gray-500">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 이미지 뷰어 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-5xl">
            {/* 이미지 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video flex items-center justify-center bg-gray-700 text-gray-400">
                {filteredImages[modalImageIndex].alt}
              </div>
            </div>
            
            {/* 화살표 버튼 */}
            <button 
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-70"
              onClick={prevModalImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-70"
              onClick={nextModalImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* 이미지 정보 */}
            <div className="text-white mt-4 text-center">
              <p>{filteredImages[modalImageIndex].alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 