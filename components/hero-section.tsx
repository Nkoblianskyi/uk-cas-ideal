"use client"
import { Shield, Clock } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      <section
        aria-label="Top UK land-based casinos — introduction"
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
          <div className="space-y-1">
            <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
              TOP <span className="text-uk-red">UK</span>{" "}
              <span className="text-casino-gold">LAND CASINOS</span>
            </h1>

            <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
              REVIEWED FOR {getCurrentMonthYear()}
            </h2>
          </div>

          <div className="space-y-2 lg:space-y-2 mx-auto">
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight">
              Choosing a reputable land-based venue takes local knowledge. Our reviews cut through the noise with a
              clear look at Great Britain’s leading licensed casino floors — not online products.
            </p>

            <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
              We weigh atmosphere, games, service and safer gambling on the door — written by editors who visit
              premises, not remote sign-up funnels.
            </p>

            <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
              *Venue rules, dress codes and offers vary by location. 18+ only. Valid photographic ID is usually required.
            </p>
          </div>

          <div className="space-y-2 lg:space-y-4 mt-1">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Licensed operators</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Image src="/flag.png" alt="United Kingdom" width={24} height={24} className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Great Britain</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Editorial updates</span>
              </div>
            </div>

            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
              Please gamble responsibly. House rules and venue terms apply.
              <button
                type="button"
                onClick={onAdvertiserModalOpen}
                aria-label="Open advertiser disclosure"
                className="underline ml-1 hover:text-casino-gold transition-colors"
              >
                Advertiser disclosure
              </button>
              <span> | </span>
              <button
                type="button"
                onClick={onTermsModalOpen}
                aria-label="Open terms and conditions"
                className="underline hover:text-casino-gold transition-colors"
              >
                18+ Terms apply
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Top UK land-based casinos — introduction"
        className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">
              TOP <span className="text-uk-red">UK</span> <span className="text-casino-gold">LAND CASINOS</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold">REVIEWED FOR {getCurrentMonthYear()}</h2>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">Licensed</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Image src="/flag.png" alt="United Kingdom" width={24} height={24} className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="text-xs md:text-sm font-bold">Great Britain</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">Updates</span>
            </div>
          </div>

          <div className="text-[10px] md:text-xs">
            Gamble responsibly. Venue terms apply.
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              aria-label="Open advertiser disclosure"
              className="underline ml-1"
            >
              Advertiser disclosure
            </button>
            <span> | </span>
            <button type="button" onClick={onTermsModalOpen} aria-label="Open terms" className="underline">
              18+ Terms
            </button>
          </div>
        </div>
      </section>

      <section
        aria-label="Top UK land-based casinos — introduction"
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-1 w-full h-[120px]"
        style={{
          backgroundImage: "url(/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 px-2 text-center flex flex-col justify-around p-2">
            <div className="mb-1">
              <h1 className="text-base font-bold drop-shadow-lg leading-tight">
                TOP <span className="text-uk-red">UK</span> <span className="text-casino-gold">LAND CASINOS</span>
              </h1>
            </div>

            <h2 className="text-[13px] font-bold drop-shadow-lg leading-tight">REVIEWED FOR {getCurrentMonthYear()}</h2>

            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <Shield className="w-3 h-3 mb-0.5" />
                <span className="text-[7px] font-bold leading-tight">Licensed</span>
              </div>
              <div className="flex flex-col items-center mt-1">
                <div className="flex gap-0.5 mb-0.5">
                  <div className="w-1 h-2 bg-green-primary"></div>
                  <div className="w-1 h-2 bg-white"></div>
                  <div className="w-1 h-2 bg-[rgb(200,16,46)]"></div>
                </div>
                <span className="text-[7px] font-bold leading-tight">GB</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 mb-0.5" />
                <span className="text-[7px] font-bold leading-tight">Updates</span>
              </div>
            </div>

            <div className="text-[6px] leading-tight">
              <div>Gamble responsibly. Not an online casino.</div>
              <div>
                <button
                  type="button"
                  onClick={onAdvertiserModalOpen}
                  aria-label="Advertiser disclosure"
                  className="underline hover:text-casino-gold"
                >
                  Disclosure
                </button>
                <span> | </span>
                <button
                  type="button"
                  onClick={onTermsModalOpen}
                  aria-label="Terms"
                  className="underline hover:text-casino-gold"
                >
                  18+ Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
