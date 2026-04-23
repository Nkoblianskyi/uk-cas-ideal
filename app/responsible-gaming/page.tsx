import type { Metadata } from "next"
import { AlertTriangle, Clock, Globe, Phone, Shield, ShieldCheck, Users } from "lucide-react"
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Safer gambling — help, tools and advice",
  description:
    "Safer gambling in Great Britain — GamCare, BeGambleAware, National Gambling Helpline and GamStop. Practical tools and support. 18+.",
  alternates: { canonical: "/responsible-gaming" },
  openGraph: {
    url: "/responsible-gaming",
    title: "Safer gambling | Best UK Land Casinos",
    description: "UK help lines and tools for staying in control of gambling.",
  },
}

export default function ResponsibleGamingPage() {
  return (
    <LegalPageShell eyebrow="Player protection" title="Safer gambling">
      <aside
        role="note"
        aria-label="Urgent help"
        className="relative bg-[rgba(1,33,105,0.12)] border-l-2 border-green-primary rounded-sm px-5 py-4"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
          <div className="flex items-center gap-3">
            <AlertTriangle
              className="w-5 h-5 text-green-primary flex-shrink-0"
              strokeWidth={2}
              aria-hidden="true"
            />
            <div className="text-[10px] font-black tracking-[0.18em] uppercase text-green-primary">
              Free confidential help
            </div>
          </div>
          <div className="flex-1 text-[13px] md:text-sm text-gray-200">
            <span className="font-black text-white">National Gambling Helpline</span>{" "}
            <a
              href="tel:08088020133"
              aria-label="Call National Gambling Helpline 0808 8020 133"
              className="text-casino-gold font-black tracking-wider hover:text-casino-gold-hover underline"
            >
              0808 8020 133
            </a>{" "}
            — 24/7 for Great Britain.
          </div>
        </div>
      </aside>

      <p className="text-[15px] md:text-base text-white font-medium leading-relaxed">
        Gambling should be fun — never a way to solve money problems. This page gathers UK tools, warning signs and
        charities so you can stay in control or get help quickly.
      </p>

      <LegalSection index="01" eyebrow="Principles" title="Playing safely in venues">
        <p>
          Land-based gambling still involves real money and real risk. Set limits before you walk in, take breaks, and
          never borrow to play.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            ["Plan your time", "Decide when you will leave — not after losses mount."],
            ["Plan your spend", "Use cash you can afford to lose; leave cards at home if needed."],
            ["Take breaks", "Step outside — fresh air resets impulse decisions."],
            ["Never chase losses", "Treat spend as the cost of entertainment, not a debt to win back."],
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

      <LegalSection index="02" eyebrow="Warning signs" title="When gambling becomes harmful">
        <p>Harm often builds slowly. Watch for these patterns in yourself or someone close:</p>
        <ul className="divide-y divide-casino-gold/15 border border-casino-gold/20 rounded-sm overflow-hidden bg-black/40">
          {[
            "Spending more time or money than planned",
            "Feeling anxious, guilty or low about gambling",
            "Hiding gambling from family or friends",
            "Borrowing or selling items to gamble",
            "Neglecting work, study or caring responsibilities",
            "Thinking constantly about the next bet",
            "Needing larger stakes for the same buzz",
            "Struggling to cut down or stop",
          ].map((x) => (
            <li key={x} className="flex gap-3 items-start px-4 py-2.5">
              <span className="text-green-primary mt-0.5" aria-hidden="true">
                ▲
              </span>
              <span className="text-[13px] md:text-sm text-gray-300">{x}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="03" eyebrow="Tools" title="What licensed venues must support">
        <p>
          UK-licensed operators must offer safer gambling tools and staff interventions. Ask at the desk for
          information on limits, self-exclusion and cooling-off periods for that estate.
        </p>
        <ul className="divide-y divide-casino-gold/15 border border-casino-gold/20 rounded-sm overflow-hidden bg-black/40">
          {[
            ["Reality checks", "On-screen reminders on electronic machines where fitted"],
            ["Time-outs", "Short breaks from play arranged with staff"],
            ["Self-exclusion", "Venue schemes plus GamStop for remote gambling with UK licensees"],
            ["Signposting", "Helpline numbers and BeGambleAware / GamCare materials on display"],
          ].map(([label, desc]) => (
            <li key={label} className="flex flex-col md:flex-row gap-1 md:gap-4 px-4 py-3">
              <span className="text-casino-gold font-black tracking-[0.04em] uppercase text-[11px] md:min-w-[200px]">
                {label}
              </span>
              <span className="text-gray-300 text-[13px] md:text-sm">{desc}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="04" eyebrow="Helplines" title="Where to get professional help">
        <p>These UK organisations are free and confidential:</p>

        <div className="grid md:grid-cols-2 gap-3">
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-black/50 border border-casino-gold/25 rounded-sm p-4 hover:border-casino-gold/70 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-casino-gold" aria-hidden="true" />
              <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold">BeGambleAware</div>
            </div>
            <div className="text-[13px] text-gray-300 leading-relaxed mb-2">
              Education, advice and a gateway to treatment across Great Britain.
            </div>
            <div className="flex flex-col gap-0.5 text-[12px]">
              <span className="text-white font-bold tracking-wide">begambleaware.org</span>
            </div>
          </a>

          <a
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-black/50 border border-casino-gold/25 rounded-sm p-4 hover:border-casino-gold/70 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-casino-gold" aria-hidden="true" />
              <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold">GamCare</div>
            </div>
            <div className="text-[13px] text-gray-300 leading-relaxed mb-2">
              Support, counselling and the National Gambling Helpline network.
            </div>
            <div className="flex flex-col gap-0.5 text-[12px]">
              <span className="text-white font-bold tracking-wide">0808 8020 133</span>
              <span className="text-gray-400">gamcare.org.uk</span>
            </div>
          </a>

          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-black/50 border border-casino-gold/25 rounded-sm p-4 hover:border-casino-gold/70 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-casino-gold" aria-hidden="true" />
              <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold">GamStop</div>
            </div>
            <div className="text-[13px] text-gray-300 leading-relaxed mb-2">
              Free self-exclusion from online gambling with participating UK-licensed operators.
            </div>
            <div className="flex flex-col gap-0.5 text-[12px]">
              <span className="text-gray-400">gamstop.co.uk</span>
            </div>
          </a>

          <a
            href="https://www.gamblersanonymous.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-black/50 border border-casino-gold/25 rounded-sm p-4 hover:border-casino-gold/70 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-casino-gold" aria-hidden="true" />
              <div className="text-[10px] font-black tracking-[0.16em] uppercase text-casino-gold">
                Gamblers Anonymous
              </div>
            </div>
            <div className="text-[13px] text-gray-300 leading-relaxed mb-2">
              Peer support meetings across the UK based on shared experience.
            </div>
            <div className="flex flex-col gap-0.5 text-[12px]">
              <span className="text-gray-400">gamblersanonymous.org.uk</span>
            </div>
          </a>
        </div>
      </LegalSection>

      <LegalSection index="05" eyebrow="Friends & family" title="If someone you love is struggling">
        <p>Gambling harm affects families too. If you are supporting someone:</p>
        <ul className="grid md:grid-cols-2 gap-2 text-[13px] md:text-sm">
          {[
            "Do not ignore the problem — hope alone will not fix it",
            "Encourage professional help early",
            "Do not lend money or pay gambling debts for them",
            "Protect your own finances and wellbeing",
            "Consider support for yourself (GamAnon UK)",
            "Use GamCare’s services for affected others",
          ].map((x) => (
            <li
              key={x}
              className="flex gap-2 items-start border border-casino-gold/20 bg-black/30 px-3 py-2 rounded-sm"
            >
              <span className="text-casino-gold" aria-hidden="true">
                ◆
              </span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection index="06" eyebrow="Our policy" title="What we expect from listed operators">
        <p>We only recommend groups that, so far as we can verify:</p>
        <ul className="space-y-1.5 text-[13px] md:text-sm pl-5 list-disc marker:text-casino-gold">
          <li>Hold appropriate UK Gambling Commission permissions for their activities</li>
          <li>Provide visible safer gambling information in venues</li>
          <li>Train staff to identify and respond to harm</li>
          <li>Offer clear routes to self-exclusion and help</li>
          <li>Verify age rigorously at the door or counter</li>
          <li>Publish transparent house rules</li>
        </ul>
      </LegalSection>

      <aside className="bg-black/50 border border-casino-gold/40 rounded-sm px-5 py-5" aria-label="Remember">
        <div className="flex items-start gap-3">
          <ShieldCheck
            className="w-6 h-6 text-casino-gold flex-shrink-0 mt-0.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <div>
            <div className="text-[10px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">Remember</div>
            <p className="text-[13px] md:text-sm text-gray-200 leading-relaxed mb-2">
              Gambling disorder is a recognised health condition — <strong className="text-white">not</strong> a moral
              failing.
            </p>
            <p className="text-[13px] md:text-sm text-gray-200 leading-relaxed">
              Recovery is possible with the right support. The first step is asking for help.
            </p>
          </div>
        </div>
      </aside>

      <div className="relative bg-[#050505] border border-casino-gold rounded-sm px-6 py-6 text-center">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-casino-gold to-transparent" />
        <Clock className="w-8 h-8 text-casino-gold mx-auto mb-3" strokeWidth={1.5} aria-hidden="true" />
        <div className="text-[10px] font-black tracking-[0.22em] uppercase text-casino-gold mb-2">24 / 7</div>
        <h3 className="text-xl md:text-2xl font-black text-white mb-2">Need to talk now?</h3>
        <p className="text-[13px] text-gray-300 mb-4 max-w-md mx-auto">
          If you or someone close needs immediate support, do not wait. The National Gambling Helpline is free and
          staffed around the clock.
        </p>
        <a
          href="tel:08088020133"
          aria-label="Call National Gambling Helpline 0808 8020 133"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-casino-gold hover:bg-casino-gold-hover text-black font-black tracking-[0.14em] uppercase text-[12px] rounded-sm border-b-2 border-[#8a6d1a] shadow-[0_2px_8px_rgba(212,175,55,0.35)] transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Helpline — 0808 8020 133
        </a>
      </div>
    </LegalPageShell>
  )
}
