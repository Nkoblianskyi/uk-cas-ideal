import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header
      role="banner"
      className="relative text-white bg-[#0a0a0a]/85 backdrop-blur-sm border-b border-casino-gold/30"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-casino-gold/50 to-transparent"
      />

      <div className="md:hidden h-[42px] flex items-center justify-center px-3">
        <Link
          href="/"
          aria-label="Best UK Land Casinos — home"
          title="Best UK Land Casinos"
          className="flex items-center gap-2 group"
        >
          <Image
            src="/logo.png"
            alt="Best UK Land Casinos logo"
            width={22}
            height={22}
            className="w-5 h-5 flex-shrink-0"
            priority
          />

          <span className="font-black tracking-[0.06em] uppercase text-[13px] leading-none whitespace-nowrap">
            <span className="text-white">Best UK Land Casinos</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex container mx-auto px-2 sm:px-4 items-center justify-center min-h-[72px] lg:min-h-[84px] py-2">
        <Link
          href="/"
          aria-label="Best UK Land Casinos — home"
          title="Best UK Land Casinos"
          className="flex items-center gap-3 lg:gap-4 group"
        >
          <Image
            src="/logo.png"
            alt="Best UK Land Casinos logo"
            width={56}
            height={56}
            className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
            priority
          />

          <div className="flex flex-col items-start leading-none">
            <div className="flex items-center gap-2 lg:gap-2.5">
              <span aria-hidden="true" className="hidden lg:inline-block w-px h-5 bg-casino-gold/50" />

              <span className="font-black tracking-[0.08em] uppercase text-[20px] md:text-[22px] lg:text-[30px] leading-none whitespace-nowrap">
                <span className="text-white">Best UK Land Casinos</span>
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1.5">
              <span aria-hidden="true" className="h-px w-4 lg:w-5 bg-casino-gold/70" />
              <span className="text-[9px] lg:text-[10px] font-black tracking-[0.3em] uppercase text-casino-gold/90 whitespace-nowrap">
                Land-based venues · GB
              </span>
              <span aria-hidden="true" className="h-px w-4 lg:w-5 bg-casino-gold/70" />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
