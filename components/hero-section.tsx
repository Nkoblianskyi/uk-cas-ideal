"use client"
import { Shield, Clock } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

const trustPill =
  "inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-[rgb(1,33,105)]/45 px-2 py-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"

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
    return `${monthNames[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <>
      <section
        aria-label="Top UK land-based casinos — introduction"
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full min-h-0 lg:h-[248px] xl:h-[256px] 2xl:h-[256px] rounded-sm"
      >
        <div className="absolute inset-0 uk-casino-hero-overlay z-0" aria-hidden />

        <div className="relative z-10 h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-2 lg:py-3 gap-1">
          <div className="space-y-0.5 shrink-0">
            <p className="text-[8px] lg:text-[9px] font-bold tracking-[0.22em] uppercase text-sky-100/85">
              Licensed casino &amp; LBO floors · Great Britain
            </p>
            <h1 className="text-[1.1rem] lg:text-[1.6rem] xl:text-[1.7rem] font-black drop-shadow-sm leading-[1.12] text-white">
              TOP <span className="text-uk-red">UK</span>{" "}
              <span className="text-white/95 tracking-[0.04em]">LAND CASINOS</span>
            </h1>

            <h2 className="text-[10px] lg:text-[11px] font-semibold text-sky-100/95 tracking-[0.12em] uppercase">
              Reviewed for {getCurrentMonthYear()}
            </h2>
          </div>

          <div className="space-y-0.5 mx-auto max-w-4xl min-h-0">
            <p className="text-[10px] lg:text-[11px] leading-snug text-sky-50/95">
              Mayfair to high-street LBOs — house rules, cage, pit &amp; machine floor. On-the-door in England, Scotland
              &amp; Wales. UKGC regime, 18+ on premises, dress codes where they apply.{" "}
              <span className="text-white font-semibold">Not apps or offshore</span> — felt, chips, premises only.
            </p>

            <p className="text-[8px] lg:text-[9px] text-sky-200/70 leading-tight">
              *Venue rules, offers and ID checks vary. Always gamble responsibly.
            </p>
          </div>

          <div className="space-y-1 shrink-0">
            <div className="flex flex-wrap justify-center gap-1.5 lg:gap-2">
              <div className={trustPill}>
                <Shield className="w-3 h-3 text-white shrink-0" />
                <span className="text-[8px] lg:text-[9px] font-bold tracking-wide">UKGC regime</span>
              </div>
              <div className={trustPill}>
                <Image src="/flag.png" alt="" width={20} height={20} className="w-3 h-3 rounded-[1px]" />
                <span className="text-[8px] lg:text-[9px] font-bold tracking-wide">Great Britain</span>
              </div>
              <div className={trustPill}>
                <Clock className="w-3 h-3 text-white shrink-0" />
                <span className="text-[8px] lg:text-[9px] font-bold tracking-wide">Floor-tested</span>
              </div>
            </div>

            <div className="text-[8px] lg:text-[8px] xl:text-[9px] leading-tight text-sky-200/65 text-center">
              <span>Play responsibly. House rules apply.</span>
              <button
                type="button"
                onClick={onAdvertiserModalOpen}
                aria-label="Open advertiser disclosure"
                className="underline ml-1 hover:text-white transition-colors"
              >
                Advertiser disclosure
              </button>
              <span> | </span>
              <button
                type="button"
                onClick={onTermsModalOpen}
                aria-label="Open terms and conditions"
                className="underline hover:text-white transition-colors"
              >
                18+ Terms
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Top UK land-based casinos — introduction"
        className="hidden md:block lg:hidden relative overflow-hidden text-white mb-2 w-full h-[148px] md:h-[158px] rounded-sm"
      >
        <div className="absolute inset-0 uk-casino-hero-overlay z-0" aria-hidden />

        <div className="relative z-10 h-full flex flex-col justify-between text-center px-4 md:px-6 py-2">
          <div className="space-y-0.5">
            <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-sky-100/80">GB · licensed premises</p>
            <h1 className="text-lg md:text-[1.35rem] font-black text-white leading-tight">
              TOP <span className="text-uk-red">UK</span> <span className="text-white/95">LAND CASINOS</span>
            </h1>
            <h2 className="text-[9px] font-semibold text-sky-100/95 tracking-[0.1em] uppercase">Reviewed · {getCurrentMonthYear()}</h2>
          </div>

          <div className="flex justify-center gap-1.5 md:gap-2 flex-wrap">
            <div className={trustPill}>
              <Shield className="w-3 h-3 text-white" />
              <span className="text-[8px] font-bold">UKGC</span>
            </div>
            <div className={trustPill}>
              <Image src="/flag.png" alt="" width={20} height={20} className="w-3 h-3 rounded-[1px]" />
              <span className="text-[8px] font-bold">Britain</span>
            </div>
            <div className={trustPill}>
              <Clock className="w-3 h-3 text-white" />
              <span className="text-[8px] font-bold">Floors</span>
            </div>
          </div>

          <div className="text-[8px] text-sky-200/70">
            <span>Play responsibly.</span>
            <button type="button" onClick={onAdvertiserModalOpen} aria-label="Advertiser disclosure" className="underline ml-1 hover:text-white">
              Disclosure
            </button>
            <span> | </span>
            <button type="button" onClick={onTermsModalOpen} aria-label="Terms" className="underline hover:text-white">
              18+ Terms
            </button>
          </div>
        </div>
      </section>

      <section
        aria-label="Top UK land-based casinos — introduction"
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-1 w-full min-h-[128px]"
        style={{
          backgroundImage: "url(/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55 rounded-lg" aria-hidden />
        <div className="absolute inset-0 uk-casino-hero-overlay rounded-lg opacity-95" aria-hidden />

        <div className="relative z-10 px-2 py-2 text-center flex flex-col gap-1">
          <p className="text-[7px] font-bold tracking-[0.16em] uppercase text-sky-100/80">GB licensed · in-venue</p>
          <h1 className="text-[0.9rem] font-black text-white drop-shadow-sm leading-tight">
            TOP <span className="text-uk-red">UK</span> <span className="text-white/95">LAND CASINOS</span>
          </h1>
          <h2 className="text-[9px] font-semibold text-sky-100/90 tracking-wide uppercase">Reviewed · {getCurrentMonthYear()}</h2>

          <div className="flex justify-center gap-1 flex-wrap">
            <div className={`${trustPill} py-0.5 px-1.5`}>
              <Shield className="w-2.5 h-2.5 text-white" />
              <span className="text-[6px] font-bold">UKGC</span>
            </div>
            <div className={`${trustPill} py-0.5 px-1.5`}>
              <div className="flex gap-px h-2.5" aria-hidden>
                <span className="w-0.5 bg-green-primary rounded-[1px]" />
                <span className="w-0.5 bg-white rounded-[1px]" />
                <span className="w-0.5 bg-[rgb(200,16,46)] rounded-[1px]" />
              </div>
              <span className="text-[6px] font-bold">GB</span>
            </div>
            <div className={`${trustPill} py-0.5 px-1.5`}>
              <Clock className="w-2.5 h-2.5 text-white" />
              <span className="text-[6px] font-bold">Floors</span>
            </div>
          </div>

          <div className="text-[6px] leading-tight text-sky-200/70">
            <span>18+ · premises. Not online.</span>
            <button type="button" onClick={onAdvertiserModalOpen} className="underline ml-0.5 hover:text-white">
              Disclosure
            </button>
            <span> | </span>
            <button type="button" onClick={onTermsModalOpen} className="underline hover:text-white">
              Terms
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
