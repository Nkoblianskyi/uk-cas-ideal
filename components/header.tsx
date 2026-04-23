import Link from "next/link"
import Image from "next/image"
import { BrandWordmark } from "./brand-wordmark"

export function Header() {
  return (
    <header
      role="banner"
      className="relative text-white bg-gradient-to-b from-[#070f1c] via-[#0a0a0a] to-[#050a14] backdrop-blur-sm border-b border-casino-gold/50 shadow-[0_8px_32px_rgba(1,33,105,0.25)]"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-casino-gold/70 to-transparent"
      />
      <div className="md:hidden min-h-[48px] flex items-center justify-center px-2 py-1.5">
        <Link
          href="/"
          aria-label="Best UK Land Casinos — home"
          className="flex items-center gap-2.5 group max-w-[100vw]"
        >
          <Image
            src="/logo.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 flex-shrink-0 rounded-sm ring-1 ring-casino-gold/40 shadow-[0_0_12px_rgba(212,175,55,0.2)]"
            priority
          />
          <BrandWordmark variant="header-mobile" />
        </Link>
      </div>

      <div className="hidden md:flex container mx-auto px-2 sm:px-4 items-center justify-center min-h-[72px] lg:min-h-[80px] py-2">
        <Link
          href="/"
          aria-label="Best UK Land Casinos — home"
          className="flex items-center gap-3 lg:gap-5 group rounded-sm px-1 py-0.5 -mx-1 transition-shadow hover:shadow-[0_0_24px_rgba(1,33,105,0.35)]"
        >
          <Image
            src="/logo.png"
            alt=""
            width={56}
            height={56}
            className="w-10 h-10 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px] flex-shrink-0 rounded-sm ring-2 ring-casino-gold/35 shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
            priority
          />
          <BrandWordmark variant="header-desktop" />
        </Link>
      </div>
    </header>
  )
}
