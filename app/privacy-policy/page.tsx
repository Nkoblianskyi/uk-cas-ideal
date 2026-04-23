import type { Metadata } from "next"
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy policy for bestuklandcasinos.co.uk — how we handle personal data under UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    url: "/privacy-policy",
    title: "Privacy policy | Best UK Land Casinos",
    description: "How we collect, use and protect personal information.",
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  const updated = new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <LegalPageShell eyebrow="Legal" title="Privacy policy" updatedAt={updated}>
      <p className="text-[14px] md:text-[15px] text-gray-300">
        This policy explains how bestuklandcasinos.co.uk collects, uses and protects personal information in line with
        the <strong className="text-white">UK GDPR</strong> and the Data Protection Act 2018.
      </p>

      <LegalSection index="01" eyebrow="Collection" title="Data we may collect">
        <p>
          We collect information you provide (for example when you contact us) and technical data from your browser
          such as IP address and device type.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-black/50 border border-casino-gold/25 rounded-sm p-4">
            <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold mb-2">
              Personal data
            </div>
            <ul className="text-[13px] text-gray-300 space-y-1">
              <li>• Name and email address</li>
              <li>• Message content when you write to us</li>
              <li>• Any optional profile fields you choose to share</li>
            </ul>
          </div>
          <div className="bg-black/50 border border-casino-gold/25 rounded-sm p-4">
            <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold mb-2">Technical data</div>
            <ul className="text-[13px] text-gray-300 space-y-1">
              <li>• IP address and browser information</li>
              <li>• Usage patterns and approximate location</li>
              <li>• Analytics via cookies (see cookie policy)</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <LegalSection index="02" eyebrow="Purpose" title="How we use information">
        <ul className="space-y-1.5 text-[13px] md:text-sm pl-5 list-disc marker:text-casino-gold">
          <li>To operate and improve the website</li>
          <li>To respond to enquiries</li>
          <li>To analyse traffic and performance</li>
          <li>To meet legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection index="03" eyebrow="Sharing" title="When we share data">
        <p>
          We do not sell your personal data. We may share limited information with processors (for example hosting or
          analytics) under strict contracts, or where UK law requires disclosure.
        </p>
      </LegalSection>

      <LegalSection index="04" eyebrow="Cookies" title="Cookies">
        <p>
          We use cookies as described in our cookie policy. You can control cookies through your browser; blocking some
          cookies may affect functionality.
        </p>
      </LegalSection>

      <LegalSection index="05" eyebrow="Security" title="Keeping data safe">
        <p>
          We use appropriate technical and organisational measures such as HTTPS, access controls and monitoring to
          protect personal data.
        </p>
      </LegalSection>

      <LegalSection index="06" eyebrow="Rights" title="Your rights">
        <p>You may have the following rights under UK data protection law:</p>
        <ul className="divide-y divide-casino-gold/15 border border-casino-gold/20 rounded-sm overflow-hidden bg-black/40">
          {[
            ["Access", "Request a copy of the personal data we hold"],
            ["Rectification", "Ask us to correct inaccurate data"],
            ["Erasure", "Ask us to delete data in certain circumstances"],
            ["Restriction", "Ask us to limit processing in certain cases"],
            ["Objection", "Object to processing based on legitimate interests"],
            ["Portability", "Receive some data in a machine-readable format"],
            ["Complaint", "Lodge a complaint with the ICO (ico.org.uk)"],
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

      <LegalSection index="07" eyebrow="Updates" title="Changes">
        <p>We may update this policy from time to time. Material changes will be posted here with a new “last updated” date.</p>
      </LegalSection>

      <aside role="note" className="bg-black/50 border border-casino-gold/30 rounded-sm px-5 py-4">
        <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold mb-1">Contact</div>
        <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
          For privacy questions or to exercise your rights, contact us using the details published on this site.
        </p>
      </aside>
    </LegalPageShell>
  )
}
