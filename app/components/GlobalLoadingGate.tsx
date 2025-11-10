'use client'

import { useEffect, useState } from 'react'

export default function GlobalLoadingGate() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    function markReady() {
      if (!cancelled) {
        setReady(true)
      }
    }

    const html = document.documentElement

    const isTypekitReady = () =>
      html.classList.contains('wf-active') || html.classList.contains('wf-inactive')

    if (isTypekitReady()) {
      markReady()
      return
    }

    const observer = new MutationObserver(() => {
      if (isTypekitReady()) {
        observer.disconnect()
        markReady()
      }
    })

    observer.observe(html, { attributes: true, attributeFilter: ['class'] })

    const timeout = window.setTimeout(() => {
      observer.disconnect()
      markReady()
    }, 8000)

    return () => {
      cancelled = true
      observer.disconnect()
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-300 ${
        ready ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-sm tracking-[0.4em] text-gray-500 animate-pulse">
          LOADING
        </span>
      </div>
    </div>
  )
}
