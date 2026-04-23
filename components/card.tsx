"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const desktopTermsRef = useRef<HTMLDivElement>(null)
  const tabletTermsRef = useRef<HTMLDivElement>(null)
  const mobileTermsRef = useRef<HTMLDivElement>(null)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  // Determine background color based on rank (alternating)
  const isEvenRank = rank % 2 === 0
  const cardBgColor = isEvenRank ? "bg-gray-50" : "bg-white"

  // #1 card: stronger gold frame + warm glow (stands out from the list).
  const rankBorderClass =
    rank === 1
      ? "rounded-sm border-[3px] border-casino-gold shadow-[0_0_0_2px_rgba(212,175,55,0.55),0_0_28px_rgba(212,175,55,0.45),0_10px_32px_rgba(212,175,55,0.28),0_4px_12px_rgba(0,0,0,0.1)]"
      : "rounded-sm border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"

  useEffect(() => {
    // Перевіряємо чи це мобільний пристрій
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Detect overflow of the clamped terms text via real DOM measurement
    // (independent of character count, since line wrapping depends on width)
    const refs = [desktopTermsRef, tabletTermsRef, mobileTermsRef]

    const check = () => {
      if (isTermsExpanded) return
      for (const ref of refs) {
        const el = ref.current
        // offsetParent is null when the element is hidden via display:none
        if (el && el.offsetParent !== null) {
          setShowReadMore(el.scrollHeight > el.clientHeight + 1)
          return
        }
      }
    }

    // Measure after layout is ready
    const raf = requestAnimationFrame(check)

    const ro = new ResizeObserver(check)
    refs.forEach((r) => {
      if (r.current) ro.observe(r.current)
    })
    window.addEventListener("resize", check)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("resize", check)
    }
  }, [site.terms, isTermsExpanded])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  // Updated badge logic: show special badges only on positions 1, 2, 4, 7
  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 4 || rank === 7
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "FEATURED"
    if (rank === 4) return "POPULAR"
    if (rank === 7) return "RISING"
    return ""
  }

  return (
    <div className="block">
      {/* Table Header - тільки для першого елемента на desktop/tablet */}
      {rank === 1 && (
        <div className="hidden md:block bg-[#0a0a0a] text-white rounded-sm overflow-hidden mb-2 border-b-[3px] border-casino-gold shadow-[0_4px_16px_rgba(212,175,55,0.2)]">
          <div className="h-[40px] flex items-center px-6">
            <div className="flex-[0_0_30%] text-center pr-2">
              <span className="text-[11px] font-black tracking-[0.1em] uppercase">Operator</span>
            </div>

            <div className="flex-[0_0_25%] text-center px-2">
              <span className="text-[11px] font-black tracking-[0.1em] uppercase">Venue highlight</span>
            </div>

            <div className="flex-[0_0_20%] text-center px-2">
              <span className="text-[11px] font-black tracking-[0.1em] uppercase">Visitor score</span>
            </div>

            <div className="flex-[0_0_12%] text-center px-2">
              <span className="text-[11px] font-black tracking-[0.1em] uppercase">Score</span>
            </div>

            <div className="flex-[0_0_13%] text-center pl-2">
              <span className="text-[11px] font-black tracking-[0.1em] uppercase">Official site</span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div
        role="article"
        aria-label={`${site.name} — land venue review, rank #${rank}`}
        className={`hidden lg:block w-full min-w-0 ${cardBgColor} ${rankBorderClass} transition-all duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)] hover:-translate-y-px relative overflow-hidden cursor-pointer`}
      >
        <Link
          href={`/go/${site.slug}`}
          target="_blank"
          rel="nofollow noopener sponsored noreferrer"
          aria-label={`Visit ${site.name} official site (opens in new tab, sponsored)`}
          className="block w-full min-w-0"
        >
          {/* Rank Number Badge - flat black with gold number, premium Scandinavian feel */}
          <div className="absolute top-0 left-0 bg-[#0a0a0a] text-casino-gold px-3 py-1 rounded-tl-sm text-sm font-black tracking-tight z-10 border-b border-casino-gold/60">
            #{rank}
          </div>

          {/* Special Badge - flat gold with black text, uppercase, sharp edges */}
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-[52px] bg-casino-gold text-black px-3 py-1 text-[11px] font-black tracking-[0.08em] uppercase z-10 border-b border-[rgba(0,0,0,0.15)]">
              {getSpecialBadgeText()}
            </div>
          )}

          {/* Main Content — fixed % columns, min-w-0 stops wide logos / text from blowing layout */}
          <div className="h-[130px] flex items-center px-6 w-full min-w-0">
            {/* BOOKMAKER - 30% */}
            <div className="flex-[0_0_30%] min-w-0 flex justify-center items-center h-full pr-2 shrink-0">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-w-full w-[170px] xl:w-[200px] h-[85px] xl:h-[100px] object-contain mt-4"
              />
            </div>

            {/* BONUS OFFER - 25% */}
            <div className="flex-[0_0_25%] min-w-0 text-center flex flex-col justify-center h-full px-2 shrink-0">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Venue offer</div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 mb-0.5 leading-tight break-words">
                {site.bonus}
              </div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 leading-tight break-words hyphens-auto">
                {site.welcomeOffer}
              </div>
            </div>

            {/* USER RATING - 20% */}
            <div className="flex-[0_0_20%] min-w-0 text-center flex flex-col justify-center h-full px-2 shrink-0">
              <div className="text-xs text-black mb-0.5">Rate this ({formatVotes(site.votes)})</div>
              <div className="flex justify-center gap-0.5 xl:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 xl:w-5 h-4 xl:h-5 ${
                      i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* SCORE - 12% */}
            <div className="flex-[0_0_12%] min-w-0 text-center flex flex-col justify-center h-full px-1 shrink-0">
              <div
                className="text-[44px] xl:text-[56px] font-bold leading-none"
                style={{
                  color: "rgb(200, 16, 46)",
                }}
              >
                {site.rating.toFixed(1)}
              </div>
            </div>

            {/* VISIT SITE - 13% */}
            <div className="flex-[0_0_13%] min-w-0 text-center flex flex-col justify-center items-center h-full pl-1 shrink-0">
              <Button className="bg-green-primary hover:bg-green-hover text-white font-black tracking-[0.06em] uppercase px-1 xl:px-2 py-2 rounded-sm text-xs xl:text-sm w-full max-w-[120px] h-[38px] xl:h-[45px] mb-1 transition-colors border-b-2 border-casino-gold shadow-[0_2px_8px_rgba(1,33,105,0.45)]">
                OFFICIAL SITE
              </Button>
              <div className="text-xs text-gray-500 underline">Visit {site.name}</div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="bg-gray-100 text-[8px] text-gray-500 px-6 py-2" ref={termsContainerRef}>
          <div className="text-center">
            <div
              ref={desktopTermsRef}
              className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-green-hover underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        role="article"
        aria-label={`${site.name} — land venue review, rank #${rank}`}
        className={`hidden md:block lg:hidden w-full min-w-0 ${cardBgColor} ${rankBorderClass} transition-all duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)] hover:-translate-y-px relative overflow-hidden cursor-pointer`}
      >
        <Link
          href={`/go/${site.slug}`}
          target="_blank"
          rel="nofollow noopener sponsored noreferrer"
          aria-label={`Visit ${site.name} official site (opens in new tab, sponsored)`}
          className="block w-full min-w-0"
        >
          {/* Rank Number Badge */}
          <div className="absolute top-0 left-0 bg-[#0a0a0a] text-casino-gold px-2 py-1 rounded-tl-sm text-xs font-black z-10 border-b border-casino-gold/60">
            #{rank}
          </div>

          {/* Special Badge */}
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-[42px] bg-casino-gold text-black px-2 py-1 text-[10px] font-black tracking-[0.08em] uppercase z-10 border-b border-[rgba(0,0,0,0.15)]">
              {getSpecialBadgeText()}
            </div>
          )}

          <div className="p-4 pt-6 min-h-[140px] w-full min-w-0">
            {/* FLEXBOX Layout for Tablet */}
            <div className="flex items-center mb-3 w-full min-w-0">
              {/* Logo - 30% */}
              <div className="flex-[0_0_30%] min-w-0 flex justify-center items-center h-full pr-2 shrink-0">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="max-w-full w-[140px] h-[70px] object-contain"
                />
              </div>

              {/* Bonus - 25% */}
              <div className="flex-[0_0_25%] min-w-0 text-center px-2 shrink-0">
                <div className="text-xs text-gray-600 uppercase font-normal mb-1">Venue offer</div>
                <div className="text-base font-bold text-gray-900 mb-0.5 leading-tight break-words">{site.bonus}</div>
                <div className="text-base font-bold text-gray-900 leading-tight break-words hyphens-auto">
                  {site.welcomeOffer}
                </div>
              </div>

              {/* Rating - 20% */}
              <div className="flex-[0_0_20%] min-w-0 text-center px-2 shrink-0">
                <div className="text-xs text-gray-600 mb-0.5">({formatVotes(site.votes)})</div>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Score - 12% */}
              <div className="flex-[0_0_12%] min-w-0 text-center px-1 shrink-0">
                <div
                  className="text-[40px] font-bold leading-none"
                  style={{
                    color: "rgb(200, 16, 46)",
                  }}
                >
                  {site.rating.toFixed(1)}
                </div>
              </div>

              {/* Button - 13% */}
              <div className="flex-[0_0_13%] min-w-0 text-center pl-1 shrink-0">
                <Button className="bg-green-primary hover:bg-green-hover text-white font-black tracking-[0.06em] uppercase px-2 py-2 rounded-sm text-xs w-full max-w-[100px] mx-auto transition-colors border-b-2 border-casino-gold shadow-[0_2px_8px_rgba(1,33,105,0.45)]">
                  OFFICIAL SITE
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 text-gray-500 text-[7px] px-4 py-3 bg-gray-100">
          <div className="text-center">
            <div
              ref={tabletTermsRef}
              className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500 hover:text-green-hover underline mt-1 text-[8px] font-medium"
              >
                {isTermsExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        role="article"
        aria-label={`${site.name} — land venue review, rank #${rank}`}
        className={`md:hidden w-full min-w-0 ${cardBgColor} ${rankBorderClass} transition-all duration-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.10)] relative overflow-hidden cursor-pointer`}
      >
        <Link
          href={`/go/${site.slug}`}
          target="_blank"
          rel="nofollow noopener sponsored noreferrer"
          aria-label={`Visit ${site.name} official site (opens in new tab, sponsored)`}
          className="block w-full min-w-0"
        >
          {/* Rank Number Badge */}
          <div className="absolute top-0 left-0 bg-[#0a0a0a] text-casino-gold px-2 py-0.5 rounded-tl-sm text-[10px] font-black z-20 border-b border-casino-gold/60">
            #{rank}
          </div>

          {/* Special Badge */}
          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-[34px] bg-casino-gold text-black px-2 py-0.5 text-[9px] font-black tracking-[0.08em] uppercase z-20 border-b border-[rgba(0,0,0,0.15)]">
              {getSpecialBadgeText()}
            </div>
          )}

          {/* Main Content — equal 50/50 columns; minmax(0,1fr) + min-w-0 prevents logo/text widening one side */}
          <div className="grid h-[175px] w-full min-w-0 [grid-template-columns:minmax(0,1fr)_minmax(0,1fr)] box-border">
            {/* Left Column: Gray background with logo and rating */}
            <div className="min-w-0 bg-[rgb(242,242,242)] flex flex-col justify-between items-center py-2 px-2 border-r border-gray-300/90">
              {/* Logo */}
              <div className="flex-1 flex items-center justify-center w-full min-h-0 min-w-0 px-0.5">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="max-h-16 max-w-full w-full h-auto object-contain object-center"
                />
              </div>

              {/* Bottom section with stars and rating */}
              <div className="grid w-full min-w-0 [grid-template-columns:minmax(0,1fr)_minmax(0,1fr)] gap-1">
                {/* Left column: Stars and Rate it */}
                <div className="min-w-0 flex flex-col items-center justify-center">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < filledStars || (i === filledStars && hasHalfStar)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-[12px] text-black text-center leading-tight">
                    Rate
                    <br />({formatVotes(site.votes)})
                  </div>
                </div>

                {/* Right column: Score */}
                <div className="min-w-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold leading-none" style={{ color: "rgb(200, 16, 46)" }}>
                    {site.rating.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-black font-bold mt-1">Our score</div>
                </div>
              </div>
            </div>

            {/* Right Column: Bonus and Button */}
            <div className="min-w-0 flex flex-col justify-between py-2 px-2 bg-white">
              {/* Welcome Bonus */}
              <div className="text-center flex-1 flex flex-col justify-center min-w-0">
                <div className="text-[10px] text-black uppercase font-normal mb-1">Venue offer</div>
                <div className="text-base font-bold text-gray-900 leading-snug mb-1 break-words hyphens-auto">
                  {site.bonus}
                </div>
                <div className="text-base font-bold text-gray-900 leading-snug break-words hyphens-auto">
                  {site.welcomeOffer}
                </div>
              </div>

              {/* Button - more square */}
              <div className="flex justify-center mt-2">
                <Button className="bg-green-primary hover:bg-green-hover text-white font-black tracking-[0.06em] uppercase px-3 py-1.5 rounded-sm text-sm transition-colors w-full border-b-2 border-casino-gold shadow-[0_2px_8px_rgba(1,33,105,0.45)]">
                  OFFICIAL SITE
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 bg-gray-100 px-2 py-2">
          <div className="text-center">
            <div
              ref={mobileTermsRef}
              className={`text-gray-500 text-[8px] leading-[1.4] transition-all duration-300 ${
                !isTermsExpanded ? "line-clamp-2" : ""
              }`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-green-hover underline text-[9px] font-medium"
              >
                {isTermsExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
