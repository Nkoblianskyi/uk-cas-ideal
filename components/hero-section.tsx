"use client"
import { Shield, Clock } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

const trustPill =
  "inline-flex items-center gap-1.5 rounded-sm border border-casino-gold/45 bg-[rgb(1,33,105)]/35 px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"

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
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px] rounded-sm"
      >
        <div className="absolute inset-0 uk-casino-hero-overlay z-0" aria-hidden />

        <div className="relative z-10 h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2">
          <div className="space-y-1.5">
            <p className="text-[10px] lg:text-[11px] font-black tracking-[0.28em] uppercase text-casino-gold/95">
              Licensed casino &amp; LBO floors · Great Britain
            </p>
            <h1 className="text-lg lg:text-[38px] xl:text-[40px] 2xl:text-[40px] font-black drop-shadow-md leading-tight text-casino-cream">
              TOP <span className="text-uk-red">UK</span>{" "}
              <span className="text-casino-gold tracking-[0.06em]">LAND CASINOS</span>
            </h1>

            <h2 className="text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[32px] font-bold text-white/95 tracking-wide">
              REVIEWED FOR {getCurrentMonthYear()}
            </h2>
          </div>

          <div className="space-y-2 lg:space-y-2 mx-auto max-w-4xl">
            <p className="text-xs lg:text-sm 2xl:text-sm leading-relaxed text-stone-200">
              From Mayfair members&apos; rooms to high-street licensed betting offices — we review{" "}
              <span className="text-casino-gold font-semibold">British house rules</span>, the cage, the pit and the
              machine floor. Not apps, not offshore sign-ups: only what you get on the door in England, Scotland and
              Wales.
            </p>

            <p className="text-xs lg:text-sm 2xl:text-sm leading-relaxed text-stone-300">
              UK Gambling Commission regime, 18+ on premises, dress codes where they apply — written for punters who
              still like chips, felt and a proper pint after.
            </p>

            <p className="text-[10px] lg:text-xs text-stone-400">
              *Venue rules, offers and ID checks vary by operator. Always gamble responsibly.
            </p>
          </div>

          <div className="space-y-2 lg:space-y-3 mt-1">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
              <div className={trustPill}>
                <Shield className="w-3 h-3 lg:w-4 lg:h-4 text-casino-gold shrink-0" />
                <span className="text-[10px] lg:text-xs font-bold tracking-wide">UKGC regime</span>
              </div>
              <div className={trustPill}>
                <Image src="/flag.png" alt="" width={20} height={20} className="w-3 h-3 lg:w-4 lg:h-4 rounded-[1px]" />
                <span className="text-[10px] lg:text-xs font-bold tracking-wide">Great Britain</span>
              </div>
              <div className={trustPill}>
                <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-casino-gold shrink-0" />
                <span className="text-[10px] lg:text-xs font-bold tracking-wide">Floor-tested</span>
              </div>
            </div>

            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left text-stone-400">
              Please gamble responsibly. House rules apply.
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
        className="hidden md:block lg:hidden relative overflow-hidden text-white mb-2 w-full h-[160px] md:h-[180px] rounded-sm"
      >
        <div className="absolute inset-0 uk-casino-hero-overlay z-0" aria-hidden />

        <div className="relative z-10 h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          <div className="space-y-1">
            <p className="text-[9px] font-black tracking-[0.2em] uppercase text-casino-gold/90">GB · licensed premises</p>
            <h1 className="text-xl md:text-2xl font-black text-casino-cream leading-tight">
              TOP <span className="text-uk-red">UK</span> <span className="text-casino-gold">LAND CASINOS</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-white/95">REVIEWED FOR {getCurrentMonthYear()}</h2>
          </div>

          <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
            <div className={trustPill}>
              <Shield className="w-4 h-4 text-casino-gold" />
              <span className="text-xs font-bold">UKGC</span>
            </div>
            <div className={trustPill}>
              <Image src="/flag.png" alt="" width={20} height={20} className="w-4 h-4 rounded-[1px]" />
              <span className="text-xs font-bold">Britain</span>
            </div>
            <div className={trustPill}>
              <Clock className="w-4 h-4 text-casino-gold" />
              <span className="text-xs font-bold">Floors</span>
            </div>
          </div>

          <div className="text-[10px] md:text-xs text-stone-400">
            Gamble responsibly.
            <button type="button" onClick={onAdvertiserModalOpen} aria-label="Advertiser disclosure" className="underline ml-1">
              Disclosure
            </button>
            <span> | </span>
            <button type="button" onClick={onTermsModalOpen} aria-label="Terms" className="underline">
              18+ Terms
            </button>
          </div>
        </div>
      </section>

      <section
        aria-label="Top UK land-based casinos — introduction"
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-1 w-full min-h-[148px]"
        style={{
          backgroundImage: "url(/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55 rounded-lg" aria-hidden />
        <div className="absolute inset-0 uk-casino-hero-overlay rounded-lg opacity-95" aria-hidden />

        <div className="relative z-10 px-2 py-2.5 text-center flex flex-col gap-1.5">
          <p className="text-[8px] font-black tracking-[0.18em] uppercase text-casino-gold/90">GB licensed · in-venue</p>
          <h1 className="text-base font-black text-casino-cream drop-shadow-md leading-tight">
            TOP <span className="text-uk-red">UK</span> <span className="text-casino-gold">LAND CASINOS</span>
          </h1>
          <h2 className="text-[12px] font-bold text-white/95">{getCurrentMonthYear()}</h2>

          <div className="flex justify-center gap-1.5 flex-wrap">
            <div className={`${trustPill} py-0.5 px-1.5`}>
              <Shield className="w-3 h-3 text-casino-gold" />
              <span className="text-[7px] font-bold">UKGC</span>
            </div>
            <div className={`${trustPill} py-0.5 px-1.5`}>
              <div className="flex gap-px h-2.5" aria-hidden>
                <span className="w-0.5 bg-green-primary rounded-[1px]" />
                <span className="w-0.5 bg-white rounded-[1px]" />
                <span className="w-0.5 bg-[rgb(200,16,46)] rounded-[1px]" />
              </div>
              <span className="text-[7px] font-bold">GB</span>
            </div>
            <div className={`${trustPill} py-0.5 px-1.5`}>
              <Clock className="w-3 h-3 text-casino-gold" />
              <span className="text-[7px] font-bold">Floors</span>
            </div>
          </div>

          <div className="text-[6px] leading-tight text-stone-400">
            <span>Responsible play · not online.</span>
            <button type="button" onClick={onAdvertiserModalOpen} className="underline ml-0.5 hover:text-casino-gold">
              Disclosure
            </button>
            <span> | </span>
            <button type="button" onClick={onTermsModalOpen} className="underline hover:text-casino-gold">
              18+ Terms
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
