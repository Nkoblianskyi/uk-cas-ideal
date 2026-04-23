import { cn } from "@/lib/utils"

const fullTitle = "Best UK Land Casinos — guide to licensed casino premises in Great Britain"

type BrandWordmarkProps = {
  variant: "header-mobile" | "header-desktop" | "footer"
  className?: string
}

/**
 * Simple wordmark: one type scale, Lato only. “Land” in gold — rest white — reads as one name, not three shouting words.
 */
export function BrandWordmark({ variant, className }: BrandWordmarkProps) {
  const name = (
    <span className="text-white font-extrabold tracking-[-0.03em]">
      Best UK <span className="text-casino-gold">Land</span> Casinos
    </span>
  )

  if (variant === "header-mobile") {
    return (
      <span className={cn("inline-flex flex-col items-start gap-0.5 text-left min-w-0", className)} title={fullTitle}>
        <span className="text-[14px] sm:text-[15px] leading-snug max-w-[calc(100vw-5rem)] break-words">{name}</span>
        <span className="text-[10px] font-medium tracking-wide text-white/50">Great Britain · premises only</span>
      </span>
    )
  }

  if (variant === "header-desktop") {
    return (
      <span className={cn("inline-flex flex-col items-start gap-1 text-left", className)} title={fullTitle}>
        <span className="text-xl md:text-2xl lg:text-[1.65rem] xl:text-[1.75rem] leading-[1.15]">{name}</span>
        <span className="text-[11px] lg:text-xs font-medium tracking-[0.08em] text-white/45 uppercase">
          Licensed casino &amp; LBO guide
        </span>
      </span>
    )
  }

  /* footer */
  return (
    <span
      className={cn("inline-flex flex-col items-start gap-1.5 text-left group-hover:opacity-95 transition-opacity", className)}
      title={fullTitle}
    >
      <span className="text-2xl md:text-3xl leading-tight">{name}</span>
      <span className="h-px w-12 bg-gradient-to-r from-casino-gold/70 to-transparent" aria-hidden="true" />
      <span className="text-[11px] font-medium text-white/45 leading-snug max-w-[280px]">
        Land-based venues in England, Scotland &amp; Wales — not online play.
      </span>
    </span>
  )
}
