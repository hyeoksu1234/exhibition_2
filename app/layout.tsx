import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: '2025 졸업 전시 온라인 플랫폼',
  description: '2025 졸업 전시 작품을 온라인에서 만나보세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 