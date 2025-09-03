'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-center h-[110px] px-1 xxs:px-2 xs:px-4 overflow-visible">
      <div className="flex items-center justify-center gap-0.5 xxs:gap-1 xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-visible w-full">
        <Link 
          href="/archives/years/2025" 
          className={`flex items-center justify-center text-black font-medium transform -rotate-2 px-0.5 xxs:px-1 xs:px-2 sm:px-3 md:px-4 lg:px-5 py-1 xxs:py-1 xs:py-2 md:py-3 lg:py-4 h-[24px] xxs:h-[26px] xs:h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] no-underline transition-colors duration-200 whitespace-nowrap text-[10px] xxs:text-[11px] xs:text-sm sm:text-base md:text-2xl lg:text-5xl min-w-[45px] xxs:min-w-[48px] xs:min-w-[65px] rounded-none overflow-visible ${
            pathname === '/archives/years/2025' ? 'bg-[#B5EEFF]' : 'bg-[#DFDFDF]'
          } hover:bg-[#DDFF8E]`}
          style={{ fontFamily: '"rixdongnimgothic-pro", sans-serif' }}
        >
          Home
        </Link>
        <Link 
          href="/archives/years/2025/works" 
          className={`flex items-center justify-center text-black transform rotate-2 px-0.5 xxs:px-1 xs:px-2 sm:px-3 md:px-4 lg:px-5 py-1 xxs:py-1 xs:py-2 md:py-3 lg:py-4 h-[24px] xxs:h-[26px] xs:h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] no-underline transition-colors duration-200 whitespace-nowrap text-[10px] xxs:text-[11px] xs:text-sm sm:text-base md:text-2xl lg:text-5xl min-w-[40px] xxs:min-w-[43px] xs:min-w-[55px] rounded-none overflow-visible ${
            pathname === '/archives/years/2025/works' ? 'bg-[#B5EEFF]' : 'bg-[#DFDFDF]'
          } hover:bg-[#DDFF8E]`}
          style={{ fontFamily: '"rixdongnimgothic-pro", sans-serif' }}
        >
          Works
        </Link>
        <Link 
          href="/archives/years/2025/designers" 
          className={`flex items-center justify-center text-black transform -rotate-2 px-0.5 xxs:px-1 xs:px-2 sm:px-3 md:px-4 lg:px-5 py-1 xxs:py-1 xs:py-2 md:py-3 lg:py-4 h-[24px] xxs:h-[26px] xs:h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] no-underline transition-colors duration-200 whitespace-nowrap text-[10px] xxs:text-[11px] xs:text-sm sm:text-base md:text-2xl lg:text-5xl min-w-[50px] xxs:min-w-[53px] xs:min-w-[70px] rounded-none overflow-visible ${
            pathname === '/archives/years/2025/designers' ? 'bg-[#B5EEFF]' : 'bg-[#DFDFDF]'
          } hover:bg-[#DDFF8E]`}
          style={{ fontFamily: '"rixdongnimgothic-pro", sans-serif' }}
        >
          Designer
        </Link>
        <Link 
          href="/archives/years/2025/archive" 
          className={`flex items-center justify-center text-black transform rotate-2 px-0.5 xxs:px-1 xs:px-2 sm:px-3 md:px-4 lg:px-5 py-1 xxs:py-1 xs:py-2 md:py-3 lg:py-4 h-[24px] xxs:h-[26px] xs:h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] no-underline transition-colors duration-200 whitespace-nowrap text-[10px] xxs:text-[11px] xs:text-sm sm:text-base md:text-2xl lg:text-5xl min-w-[45px] xxs:min-w-[48px] xs:min-w-[65px] rounded-none overflow-visible ${
            pathname === '/archives/years/2025/archive' ? 'bg-[#B5EEFF]' : 'bg-[#DFDFDF]'
          } hover:bg-[#DDFF8E]`}
          style={{ fontFamily: '"rixdongnimgothic-pro", sans-serif' }}
        >
          Archive
        </Link>
      </div>
    </nav>
  )
}
