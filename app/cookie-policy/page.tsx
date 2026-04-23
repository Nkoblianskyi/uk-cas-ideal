import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Cookie policy for bestuklandcasinos.co.uk — which cookies we use, why, and how you can control consent.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    url: "/cookie-policy",
    title: "Cookie policy | Best UK Land Casinos",
    description: "Information about cookies and consent.",
  },
  robots: { index: true, follow: true },
}

export default function CookiePolicyPage() {
  const updated = new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <LegalPageShell eyebrow="Legal" title="Cookie policy" updatedAt={updated}>
      <LegalSection index="01" eyebrow="Basics" title="What are cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help sites work properly and
          let operators understand how pages are used.
        </p>
      </LegalSection>

      <LegalSection index="02" eyebrow="Purpose" title="How we use cookies">
        <ul className="divide-y divide-casino-gold/15 border border-casino-gold/20 rounded-sm overflow-hidden bg-black/40">
          {[
            ["Strictly necessary", "Required for core features such as security and load balancing."],
            ["Performance", "Anonymous statistics on visits and errors."],
            ["Functional", "Remember choices such as language where offered."],
            ["Marketing", "May be used to measure campaigns where you have consented."],
          ].map(([label, desc]) => (
            <li key={label} className="flex flex-col md:flex-row gap-1 md:gap-4 px-4 py-3">
              <span className="text-casino-gold font-black tracking-[0.04em] uppercase text-[11px] md:min-w-[140px]">
                {label}
              </span>
              <span className="text-gray-300 text-[13px] md:text-sm">{desc}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="03" eyebrow="Types" title="Session and persistent cookies">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-black/50 border border-casino-gold/25 rounded-sm p-4">
            <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold mb-1">Session</div>
            <p className="text-[13px] text-gray-300 leading-relaxed">
              Deleted when you close your browser. Used to keep your session secure between page loads.
            </p>
          </div>
          <div className="bg-black/50 border border-casino-gold/25 rounded-sm p-4">
            <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold mb-1">Persistent</div>
            <p className="text-[13px] text-gray-300 leading-relaxed">
              Stored for a defined period or until deleted. May recognise returning visitors or remember preferences.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection index="04" eyebrow="Third parties" title="Third-party cookies">
        <p>Partners may set their own cookies, for example:</p>
        <ul className="grid md:grid-cols-2 gap-2 text-[13px] md:text-sm">
          {[
            "Analytics providers",
            "Advertising or affiliate networks",
            "Embedded media or social widgets",
            "Security and bot-detection services",
          ].map((x) => (
            <li
              key={x}
              className="flex gap-2 items-start border border-casino-gold/20 bg-black/30 px-3 py-2 rounded-sm"
            >
              <span className="text-casino-gold">◆</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="05" eyebrow="Control" title="Managing cookies">
        <p>Most browsers let you:</p>
        <ul className="space-y-1.5 text-[13px] md:text-sm pl-5 list-disc marker:text-casino-gold">
          <li>View cookies stored on your device</li>
          <li>Delete all or selected cookies</li>
          <li>Block third-party or all cookies</li>
          <li>Clear cookies automatically when the browser closes</li>
        </ul>
      </LegalSection>

      <LegalSection index="06" eyebrow="Consent" title="Your choices">
        <p>
          When you first visit, you may see a cookie banner. You can change your mind at any time via browser settings.
          See also our{" "}
          <Link href="/privacy-policy" className="text-casino-gold underline hover:text-casino-gold-hover">
            privacy policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
