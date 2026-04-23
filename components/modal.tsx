"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function Modal({ bettingSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = bettingSites.slice(0, 3)
  const reorderedSites = [top3Sites[1], top3Sites[0], top3Sites[2]]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="top3-modal-heading"
      className="hidden md:flex fixed inset-0 bg-black/80 backdrop-blur-sm z-50 items-center justify-center p-4"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        aria-label="Close dialog"
        className="absolute top-4 right-4 text-black hover:bg-gray-200 z-10 w-10 h-10 p-0 rounded-full bg-white/90"
      >
        <X className="w-8 h-8 font-bold" aria-hidden="true" />
      </Button>

      <div className="w-full max-w-6xl">
        <div className="text-center mb-2 md:mb-2">
          <h2 id="top3-modal-heading" className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
            Top <span className="text-casino-gold">UK</span> land casinos
          </h2>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4 pb-2">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden ${
                  isCenter
                    ? "w-[357px] border-4 border-green-primary shadow-2xl shadow-green-primary/50 rounded-lg relative z-20"
                    : "w-[255px] border-4 border-white rounded-lg relative z-10"
                } ${isCenter ? "h-[386px]" : "h-[370px]"}`}
              >
                <div
                  className={`bg-white ${isCenter ? "h-[115px]" : "h-[109px]"} flex items-center justify-center p-4`}
                  style={{
                    borderTopLeftRadius: "calc(0.5rem - 4px)",
                    borderTopRightRadius: "calc(0.5rem - 4px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Operator"}
                    className="h-18 w-auto object-contain"
                  />
                </div>

                <div
                  className={`bg-black text-white ${isCenter ? "h-[267px]" : "h-[255px]"} flex flex-col p-4 text-center`}
                  style={{
                    borderBottomLeftRadius: "calc(0.5rem - 4px)",
                    borderBottomRightRadius: "calc(0.5rem - 4px)",
                  }}
                >
                  <div className="flex justify-center gap-1 mt-4 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex-1 flex flex-col justify-center mb-3">
                    <div className={` ${isCenter ? "text-2xl" : "text-xl"} font-bold mb-2`}>{site?.bonus}</div>
                    <div className={` ${isCenter ? "text-2xl" : "text-xl"}`}>{site?.welcomeOffer}</div>
                  </div>

                  <div className="mb-2">
                    <Link
                      href={site?.slug ? `/go/${site.slug}` : "#"}
                      target="_blank"
                      rel="nofollow noopener sponsored noreferrer"
                      aria-label={site?.name ? `Visit ${site.name} (opens in new tab)` : "Visit operator"}
                    >
                      <Button className="bg-green-primary hover:bg-green-hover text-white font-black tracking-[0.06em] uppercase py-2 px-4 rounded-sm text-sm w-full border-b-2 border-casino-gold shadow-[0_2px_8px_rgba(1,33,105,0.45)]">
                        OFFICIAL SITE
                      </Button>
                    </Link>
                  </div>

                  <div className="text-[9px] text-gray-300 leading-tight text-center">{site?.terms}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden md:flex lg:hidden items-center justify-center gap-0 w-full px-2">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden ${
                  isCenter
                    ? "w-[240px] border-4 border-green-primary shadow-2xl shadow-green-primary/50 rounded-lg relative z-20"
                    : "w-[180px] border-4 border-white rounded-lg relative z-10"
                } ${isCenter ? "h-[280px]" : "h-[260px]"}`}
              >
                <div
                  className={`bg-white ${isCenter ? "h-[80px]" : "h-[75px]"} flex items-center justify-center p-3`}
                  style={{
                    borderTopLeftRadius: "calc(0.5rem - 3px)",
                    borderTopRightRadius: "calc(0.5rem - 3px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Operator"}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                <div
                  className={`bg-black text-white ${isCenter ? "h-[200px]" : "h-[185px]"} flex flex-col p-3 text-center`}
                  style={{
                    borderBottomLeftRadius: "calc(0.5rem - 3px)",
                    borderBottomRightRadius: "calc(0.5rem - 3px)",
                  }}
                >
                  <div className="flex justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex-1 flex flex-col justify-center mb-1">
                    <div className={` ${isCenter ? "text-lg" : "text-base"} font-bold mb-1`}>{site?.bonus}</div>
                    <div className={` ${isCenter ? "text-lg" : "text-base"}`}>{site?.welcomeOffer}</div>
                  </div>

                  <div className="mb-1">
                    <Link
                      href={site?.slug ? `/go/${site.slug}` : "#"}
                      target="_blank"
                      rel="nofollow noopener sponsored noreferrer"
                      aria-label={site?.name ? `Visit ${site.name} (opens in new tab)` : "Visit operator"}
                    >
                      <Button className="bg-green-primary hover:bg-green-hover text-white font-black tracking-[0.06em] uppercase py-1.5 px-3 rounded-sm text-xs w-full border-b-2 border-casino-gold shadow-[0_2px_8px_rgba(1,33,105,0.45)]">
                        OFFICIAL SITE
                      </Button>
                    </Link>
                  </div>

                  <div className="text-[8px] text-gray-300 leading-tight text-center">{site?.terms}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm">
            18+. Land venues only — not online casino play.{" "}
            <a href="https://www.begambleaware.org" className="underline" target="_blank" rel="noopener noreferrer">
              BeGambleAware.org
            </a>
            . Gamble responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
