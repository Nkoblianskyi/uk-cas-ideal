import Link from "next/link"
import Image from "next/image"
import { BrandWordmark } from "./brand-wordmark"

const helpline = "0808 8020 133"

const partnerLogos: {
  href: string
  label: string
  src: string
  alt: string
  width: number
  height: number
}[] = [
  {
    href: "https://www.gambleaware.org/",
    label: "BeGambleAware",
    src: "/gamble.webp",
    alt: "GambleAware",
    width: 120,
    height: 32,
  },
  {
    href: "https://www.gamcare.org.uk/",
    label: "GamCare",
    src: "/gamecare.svg",
    alt: "GamCare",
    width: 120,
    height: 32,
  },
  {
    href: "https://www.gordonmoody.org.uk/",
    label: "Gordon Moody",
    src: "/gordon.png",
    alt: "Gordon Moody",
    width: 120,
    height: 32,
  },
  {
    href: "https://www.gamblersanonymous.org.uk/",
    label: "Gamblers Anonymous",
    src: "/anonymos.avif",
    alt: "Gamblers Anonymous",
    width: 120,
    height: 32,
  },
  {
    href: "https://www.gamstop.co.uk/",
    label: "GamStop",
    src: "/gamstop.svg",
    alt: "GamStop",
    width: 120,
    height: 32,
  },
  {
    href: "https://www.egba.eu/",
    label: "European Gaming and Betting Association",
    src: "/egba.png",
    alt: "EGBA",
    width: 120,
    height: 32,
  },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative mt-12 bg-gradient-to-b from-[#050a14] via-[#080c16] to-[#0a0a0a] text-white border-t-[3px] border-casino-gold shadow-[0_-12px_40px_rgba(1,33,105,0.2)]"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-casino-gold/40 to-transparent"
      />

      <div className="container mx-auto px-4 py-10 md:py-12 relative z-[1]">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8 mb-10">
          <div className="md:col-span-6 text-center md:text-left">
            <Link
              href="/"
              aria-label="Best UK Land Casinos — home"
              className="group inline-flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5"
            >
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="flex-shrink-0 rounded-sm ring-2 ring-casino-gold/35 shadow-[0_4px_18px_rgba(0,0,0,0.5)]"
              />
              <BrandWordmark variant="footer" />
            </Link>

            <p className="mt-6 text-[13px] text-gray-400 leading-relaxed max-w-md mx-auto sm:mx-0 border-l-2 border-casino-gold/40 pl-4 sm:pl-5">
              We write for people walking through{" "}
              <span className="text-casino-gold/95 font-semibold">casino doors in England, Scotland and Wales</span> —
              from members&apos; clubs and regional casinos to high-street LBOs with proper machine entitlement. No
              remote roulette apps, no offshore sign-up pages: just what matters on the British gaming floor.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="inline-flex items-center px-2.5 py-1.5 bg-[rgb(1,33,105)]/40 border border-casino-gold/45 text-casino-gold text-[9px] font-black tracking-[0.14em] uppercase rounded-sm">
                UKGC regime
              </span>
              <span className="inline-flex items-center px-2.5 py-1.5 bg-[rgb(200,16,46)]/25 border border-[rgb(200,16,46)]/50 text-white text-[9px] font-black tracking-[0.14em] uppercase rounded-sm">
                18+ on premises
              </span>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-3 text-center md:text-left">
            <h3 className="text-[10px] font-black tracking-[0.22em] uppercase text-casino-gold mb-4 pb-1 border-b border-casino-gold/30 inline-block">
              On this site
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { href: "/", label: "Rankings" },
                { href: "/about", label: "Our floor tests" },
                { href: "/responsible-gaming", label: "Safer gambling" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-300 hover:text-casino-gold transition-colors tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal navigation" className="md:col-span-3 text-center md:text-left">
            <h3 className="text-[10px] font-black tracking-[0.22em] uppercase text-casino-gold mb-4 pb-1 border-b border-casino-gold/30 inline-block">
              Legal
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { href: "/terms", label: "Terms" },
                { href: "/privacy-policy", label: "Privacy" },
                { href: "/cookie-policy", label: "Cookies" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-300 hover:text-casino-gold transition-colors tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-casino-gold/30 to-transparent mb-8" />

        <section aria-labelledby="rg-partners-heading" className="mb-8 flex flex-col items-center">
          <h3
            id="rg-partners-heading"
            className="text-[10px] font-black tracking-[0.22em] uppercase text-casino-gold mb-2 pb-1 border-b border-casino-gold/30 inline-block text-center"
          >
            When the fun stops — help &amp; organisations
          </h3>
          <p className="text-[11px] text-gray-500 text-center max-w-lg mb-5">
            National Gambling Helpline{" "}
            <a href={`tel:${helpline.replace(/\s/g, "")}`} className="text-gray-300 font-semibold hover:text-casino-gold">
              {helpline}
            </a>{" "}
            (free, 24/7, GB).
          </p>

          <div
            role="list"
            aria-label="Responsible gambling and industry organisations"
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6 max-w-5xl w-full"
          >
            <a
              href="https://www.gamblingcommission.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="UK Gambling Commission"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded border border-casino-gold/40 bg-black/70 px-3 text-[10px] font-black uppercase tracking-wider text-casino-gold opacity-90 transition-opacity hover:opacity-100"
            >
              UKGC
            </a>

            {partnerLogos.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={p.label}
                className="inline-flex h-10 shrink-0 items-center justify-center rounded bg-white px-2 py-1 opacity-90 ring-1 ring-black/10 transition-opacity hover:opacity-100"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  className="h-8 w-auto max-w-[140px] object-contain object-center"
                />
              </a>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-casino-gold/30 to-transparent mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[11px] text-gray-500 tracking-wide">
            © 2026 <span className="text-gray-300 font-bold tracking-tight">bestuklandcasinos.co.uk</span> — Great Britain
          </p>

          <p
            role="note"
            aria-label="Responsible gambling notice"
            className="text-[11px] font-black tracking-[0.12em] uppercase text-uk-red"
          >
            18+ · GB licensed premises only
          </p>
        </div>
      </div>
    </footer>
  )
}
