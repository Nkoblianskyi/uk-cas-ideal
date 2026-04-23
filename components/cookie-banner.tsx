"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) setIsVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t-2 border-casino-gold shadow-[0_-12px_40px_rgba(0,0,0,0.55)]"
    >
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">Cookies</div>
            <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
              We use cookies to improve your experience, for analytics and, where applicable, for relevant messaging. By
              continuing you agree to our use of cookies. Read our{" "}
              <Link href="/privacy-policy" className="text-casino-gold underline hover:text-casino-gold-hover">
                privacy policy
              </Link>{" "}
              and{" "}
              <Link href="/cookie-policy" className="text-casino-gold underline hover:text-casino-gold-hover">
                cookie policy
              </Link>
              .
            </p>
          </div>

          <div className="flex gap-2 md:gap-3 w-full md:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              aria-label="Decline non-essential cookies"
              className="flex-1 md:flex-none px-4 py-2 rounded-sm text-[11px] font-black tracking-[0.12em] uppercase text-white bg-transparent border border-white/40 hover:bg-white/10 hover:border-white transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              aria-label="Accept all cookies"
              className="flex-1 md:flex-none px-5 py-2 rounded-sm text-[11px] font-black tracking-[0.12em] uppercase text-black bg-casino-gold hover:bg-casino-gold-hover border-b-2 border-[#8a6d1a] shadow-[0_2px_8px_rgba(212,175,55,0.35)] transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
