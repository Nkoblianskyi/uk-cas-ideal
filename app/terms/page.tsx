import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "Terms and conditions for using bestuklandcasinos.co.uk — legal information, disclaimers and rules. 18+ · Great Britain.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms and conditions | Best UK Land Casinos",
    description: "Legal terms for using this website. 18+.",
  },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <LegalPageShell eyebrow="Legal" title="Terms and conditions" updatedAt={updated}>
      <aside
        role="note"
        className="bg-[rgba(1,33,105,0.12)] border-l-2 border-green-primary rounded-sm px-5 py-3"
      >
        <div className="text-[10px] font-black tracking-[0.18em] uppercase text-green-primary mb-1">
          18+ · Great Britain
        </div>
        <p className="text-[12px] md:text-[13px] text-gray-200 leading-relaxed">
          This website is for adults aged 18 or over in Great Britain. Gambling can be addictive — please play
          responsibly. This is not an online casino.
        </p>
      </aside>

      <LegalSection index="01" eyebrow="Consent" title="Acceptance of terms">
        <p>
          By accessing bestuklandcasinos.co.uk you agree to be bound by these terms. Do not use the site if you do not
          accept them in full.
        </p>
      </LegalSection>

      <LegalSection index="02" eyebrow="Purpose" title="What this site is for">
        <p>
          We provide independent information and comparisons about licensed land-based and venue gambling in Great
          Britain. We are not a gambling operator and do not accept stakes or offer games.
        </p>
      </LegalSection>

      <LegalSection index="03" eyebrow="Age" title="Age restrictions">
        <p>
          You must be at least <strong className="text-white">18</strong> to use this website. We support age
          verification in venues and safer gambling tools such as{" "}
          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-casino-gold underline hover:text-casino-gold-hover"
          >
            GamStop
          </a>{" "}
          for remote products where applicable.
        </p>
      </LegalSection>

      <LegalSection index="04" eyebrow="Accuracy" title="Information accuracy">
        <p>
          We aim for accuracy but cannot guarantee completeness. Venue rules, hours, offers and licence records can
          change without notice. Always confirm with the operator or venue.
        </p>
      </LegalSection>

      <LegalSection index="05" eyebrow="Third parties" title="External links">
        <p>
          The site may contain sponsored or tracked links to third parties. We are not responsible for their content,
          cookies or practices. Review their terms before you use them.
        </p>
      </LegalSection>

      <LegalSection index="06" eyebrow="Safer gambling" title="Responsible play">
        <p>We encourage safer gambling:</p>
        <ul className="grid md:grid-cols-2 gap-2 text-[13px] md:text-sm">
          {[
            "Set time and money limits before you gamble",
            "Never gamble more than you can afford to lose",
            "Seek help early if gambling is harming you or others",
            "Use self-exclusion schemes offered by operators and GamStop where relevant",
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

      <LegalSection index="07" eyebrow="Copyright" title="Intellectual property">
        <p>
          Text, graphics, layout and data on this site belong to Best UK Land Casinos unless otherwise stated and are
          protected by UK and international copyright laws. Do not copy without permission.
        </p>
      </LegalSection>

      <LegalSection index="08" eyebrow="Liability" title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Best UK Land Casinos is not liable for any direct, indirect or
          consequential loss arising from your use of this website or decisions based on its content.
        </p>
      </LegalSection>

      <LegalSection index="09" eyebrow="Privacy" title="Personal data">
        <p>
          Read our{" "}
          <Link href="/privacy-policy" className="text-casino-gold underline hover:text-casino-gold-hover">
            privacy policy
          </Link>{" "}
          for how we process personal data.
        </p>
      </LegalSection>

      <LegalSection index="10" eyebrow="Changes" title="Updates to these terms">
        <p>We may update these terms at any time. Changes take effect when published on this page.</p>
      </LegalSection>

      <LegalSection index="11" eyebrow="Law" title="Governing law">
        <p>
          These terms are governed by the laws of England and Wales. Courts of England and Wales have non-exclusive
          jurisdiction, without prejudice to mandatory consumer rights where you live.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
