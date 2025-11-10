import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const SITE_TITLE = '2025 졸업 전시 온라인 플랫폼'
const SITE_DESCRIPTION = '2025 졸업 전시 작품을 온라인에서 만나보세요.'
const siteUrlFromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : undefined)
const normalizedSiteUrl = siteUrlFromEnv?.replace(/\/$/, '')
const metadataBase = normalizedSiteUrl ? new URL(normalizedSiteUrl) : undefined
const ogImageUrl = normalizedSiteUrl ? `${normalizedSiteUrl}/img.png` : '/img.png'

export const metadata: Metadata = {
  metadataBase,
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: normalizedSiteUrl,
    siteName: SITE_TITLE,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImageUrl],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://p.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(d) {
              var config = {
                kitId: 'qdl2men',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          `
        }} />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
