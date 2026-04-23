import Link from "next/link"
import Image from "next/image"

type FooterPartner =
  | { href: string; label: string; alt: string; kind: "image"; src: string }
  | { href: string; label: string; alt: string; kind: "text"; title: string }

const partners: FooterPartner[] = [
  {
    href: "https://www.gamblingcommission.gov.uk",
    label: "UK Gambling Commission",
    alt: "UK Gambling Commission",
    kind: "text",
    title: "UKGC",
  },
  {
    href: "https://www.gamstop.co.uk",
    label: "GamStop self-exclusion",
    alt: "GamStop",
    kind: "text",
    title: "GamStop",
  },
  {
    href: "https://www.begambleaware.org",
    label: "BeGambleAware",
    alt: "BeGambleAware",
    kind: "image",
    src: "/gamble.webp",
  },
  {
    href: "https://www.gamcare.org.uk",
    label: "GamCare",
    alt: "GamCare",
    kind: "image",
    src: "/gamecare.svg",
  },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative mt-12 bg-[#0a0a0a] text-white border-t-2 border-casino-gold"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-casino-gold/40 to-transparent"
      />

      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8 mb-10">
          <div className="md:col-span-6 text-center md:text-left">
            <Link
              href="/"
              aria-label="Best UK Land Casinos — home"
              className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Image src="/logo.png" alt="Best UK Land Casinos logo" width={36} height={36} />
              <span className="text-xl md:text-2xl font-black tracking-tight whitespace-nowrap">
                <span className="text-casino-gold">Best UK</span>
                <span className="text-white"> Land </span>
                <span className="text-green-primary">Casinos</span>
              </span>
            </Link>

            <p className="mt-4 text-[13px] text-gray-400 leading-relaxed max-w-sm md:max-w-md mx-auto md:mx-0">
              Independent editorial guide to licensed land-based casino venues in Great Britain. We do not promote
              remote or online casino play — only physical premises and operator standards.
            </p>

            <div className="mt-5 flex items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center px-2 py-1 bg-black border border-casino-gold/50 text-casino-gold text-[9px] font-black tracking-[0.16em] uppercase rounded-sm">
                UKGC licensed groups
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-green-primary text-white text-[9px] font-black tracking-[0.16em] uppercase rounded-sm">
                18+
              </span>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-3 text-center md:text-left">
            <h3 className="text-[10px] font-black tracking-[0.22em] uppercase text-casino-gold mb-4 pb-1 border-b border-casino-gold/30 inline-block">
              Navigate
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
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

        <section aria-labelledby="rg-partners-heading" className="mb-8 items-center justify-center flex flex-col">
          <h3
            id="rg-partners-heading"
            className="text-[10px] font-black tracking-[0.22em] uppercase text-casino-gold mb-4 pb-1 border-b border-casino-gold/30 inline-block"
          >
            Safer gambling — UK resources
          </h3>

          <div
            role="list"
            aria-label="Responsible gambling organisations"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 max-w-4xl w-full"
          >
            {partners.map((p) => (
              <a
                key={p.alt}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={p.label}
                title={p.alt}
                className={
                  p.kind === "image"
                    ? "bg-white hover:bg-stone-100 rounded-sm h-10 md:h-11 flex items-center justify-center px-2 py-1 transition-colors"
                    : "bg-black border border-casino-gold/30 hover:border-casino-gold/60 rounded-sm h-10 md:h-11 flex items-center justify-center px-2 py-1 transition-colors"
                }
              >
                {p.kind === "image" ? (
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={100}
                    height={32}
                    className="max-h-7 md:max-h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-[10px] md:text-[11px] font-black tracking-[0.12em] uppercase text-casino-gold text-center leading-tight">
                    {p.title}
                  </span>
                )}
              </a>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-casino-gold/30 to-transparent mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[11px] text-gray-500 tracking-wide">
            © 2026 <span className="text-gray-300 font-bold tracking-tight">bestuklandcasinos.co.uk</span> — all rights
            reserved.
          </p>

          <p
            role="note"
            aria-label="Responsible gambling notice"
            className="text-[11px] font-black tracking-[0.12em] uppercase text-uk-red"
          >
            18+ · Great Britain · Gambling can be addictive — play responsibly
          </p>
        </div>
      </div>
    </footer>
  )
}
