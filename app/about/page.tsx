import type { Metadata } from "next"
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "About us — editorial method and independence",
  description:
    "Learn how Best UK Land Casinos reviews licensed land-based venues in Great Britain, our editorial independence and scoring criteria.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About us | Best UK Land Casinos",
    description: "How we review UK land casinos — editorial independence and a documented method.",
  },
}

export default function AboutPage() {
  return (
    <LegalPageShell eyebrow="Editorial" title="About Best UK Land Casinos">
      <p className="text-[15px] md:text-base text-white font-medium leading-relaxed">
        Independent editorial guide to licensed land-based casino and betting premises in Great Britain. We compare
        what happens on the floor — not app downloads or remote sign-up funnels.
      </p>

      <LegalSection index="01" eyebrow="Mission" title="What we do">
        <p>
          We publish clear, evidence-led reviews so you can choose venues with confidence. Each write-up is grounded in
          public licence data, venue visits where possible, and consistent scoring — not marketing fluff.
        </p>
      </LegalSection>

      <LegalSection index="02" eyebrow="Method" title="How we score operators">
        <p>Our framework is reviewed quarterly. Each group is assessed on ten fixed criteria:</p>
        <ul className="divide-y divide-casino-gold/15 border border-casino-gold/20 rounded-sm overflow-hidden bg-black/40">
          {[
            ["Licensing", "UKGC status and suitability for land-based activity"],
            ["Safety & trust", "Staff training, incident handling, CCTV and dispute processes"],
            ["Gaming floor", "Tables, machines and spacing — real-world comfort"],
            ["House rules", "ID, membership and dress code communicated clearly"],
            ["Value", "Fair pricing of food, drink and entertainment where offered"],
            ["Payments", "Cash desk speed, chip redemption, card acceptance"],
            ["Service", "Courtesy and knowledge of hosts and security"],
            ["Accessibility", "Step-free routes, hearing loops, opening hours"],
            ["Safer gambling", "Visible help materials and trained interventions"],
            ["Consistency", "Standards held across the estate, not just flagship sites"],
          ].map(([label, desc]) => (
            <li key={label} className="flex flex-col md:flex-row gap-1 md:gap-4 px-4 py-3">
              <span className="text-casino-gold font-black tracking-[0.04em] uppercase text-[11px] md:min-w-[180px]">
                {label}
              </span>
              <span className="text-gray-300 text-[13px] md:text-sm">{desc}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="03" eyebrow="Process" title="How reviews are produced">
        <p>
          Editors combine mystery visits, desk research on licence conditions, and structured interviews with
          industry contacts. When we cannot visit a venue personally, we rely on documented public sources and mark
          limitations clearly.
        </p>
        <ul className="grid md:grid-cols-2 gap-2 text-[13px] md:text-sm">
          {[
            "Licence register checks (UKGC public register)",
            "Venue photography policy respected — no covert filming",
            "Cash-out and chip tests where safe and lawful",
            "Cross-checking safer gambling materials on site",
            "Customer service scenarios at the counter",
            "Comparison of published house rules vs on-door notices",
          ].map((x) => (
            <li key={x} className="flex gap-2 items-start border border-casino-gold/20 bg-black/30 px-3 py-2 rounded-sm">
              <span className="text-casino-gold">◆</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="04" eyebrow="Independence" title="Why our voice matters">
        <p>
          Editorial and commercial teams are separated. Commercial partnerships never buy a higher rank. If we ever
          publish sponsored content outside our normal tables, it will be labelled prominently.
        </p>
      </LegalSection>

      <LegalSection index="05" eyebrow="Promise" title="What we owe readers">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            ["Transparency", "We disclose funding models in our advertiser notice"],
            ["Accuracy", "We update pages when licence or ownership changes"],
            ["Duty of care", "Safer gambling messaging is mandatory, not optional"],
            ["Expertise", "Writers understand both compliance and customer experience"],
          ].map(([h, d]) => (
            <div
              key={h}
              className="bg-black/50 border border-casino-gold/25 rounded-sm p-4 hover:border-casino-gold/60 transition-colors"
            >
              <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold mb-1">{h}</div>
              <div className="text-[13px] text-gray-300 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection index="06" eyebrow="Updates" title="Keeping pace with the market">
        <p>
          Retail estates shrink and grow; machines categories change after government reviews. We monitor Gambling
          Commission publications and operator announcements so rankings reflect today’s licensed landscape.
        </p>
      </LegalSection>

      <aside
        role="note"
        aria-label="Responsible gambling reminder"
        className="mt-4 bg-[rgba(1,33,105,0.12)] border-l-2 border-green-primary rounded-sm px-5 py-4"
      >
        <div className="text-[10px] font-black tracking-[0.18em] uppercase text-green-primary mb-1">Important</div>
        <p className="text-[13px] md:text-sm text-gray-200 leading-relaxed">
          Gambling should stay entertainment. If it becomes a problem, contact the{" "}
          <strong className="text-white">National Gambling Helpline on 0808 8020 133</strong>, visit{" "}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-casino-gold underline hover:text-casino-gold-hover"
          >
            BeGambleAware.org
          </a>{" "}
          or{" "}
          <a
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-casino-gold underline hover:text-casino-gold-hover"
          >
            GamCare
          </a>
          .
        </p>
      </aside>
    </LegalPageShell>
  )
}
