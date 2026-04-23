"use client"

import { ShieldCheck, Scale, Lock, FileCheck2 } from "lucide-react"

export function InfoSections() {
  return (
    <div className="mt-16">
      <section
        aria-labelledby="info-heading"
        role="region"
        className="relative rounded-sm overflow-hidden border-t-2 border-casino-gold"
      >
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        <div className="relative z-10 px-4 md:px-8 py-8 lg:py-10 text-white">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-block text-[10px] md:text-[11px] font-black tracking-[0.22em] text-casino-gold uppercase border-b border-casino-gold/60 pb-1 mb-4">
              Editorial guide
            </div>
            <h2 id="info-heading" className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
              UK land casinos — how we review
            </h2>
            <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
              An independent look at operators that run licensed premises in Great Britain. Scores are based on
              documented criteria — not press releases.
            </p>
          </div>

          <ul
            aria-label="Regulatory snapshot"
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-casino-gold/25 border border-casino-gold/25 mb-10 list-none p-0 m-0"
          >
            <li className="bg-[#0a0a0a] p-4 flex flex-col items-center text-center">
              <ShieldCheck aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">Licence</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">UK Gambling Commission</div>
            </li>
            <li className="bg-[#0a0a0a] p-4 flex flex-col items-center text-center">
              <Scale aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">Law</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">Gambling Act 2005</div>
            </li>
            <li className="bg-[#0a0a0a] p-4 flex flex-col items-center text-center">
              <Lock aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">Self-exclusion</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">Venue schemes &amp; GamStop (remote)</div>
            </li>
            <li className="bg-[#0a0a0a] p-4 flex flex-col items-center text-center">
              <FileCheck2 aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">Age</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">18+ only on premises</div>
            </li>
          </ul>

          <div className="max-w-3xl mx-auto space-y-8">
            <article>
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">01 — Method</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Documented review process</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Each group is checked against the same framework: UKGC licence status, quality of the physical gaming
                floor, table-game depth, machine estate where relevant, staff training, dispute handling, and how
                clearly safer gambling help is signposted at the door. Rankings are refreshed quarterly.
              </p>
            </article>

            <article>
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">02 — Regulation</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">UKGC and British law</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Commercial gambling in Great Britain is regulated by the Gambling Commission. Casino operating licences
                set strict conditions on anti-money laundering, customer interaction, and protecting children and
                vulnerable people. We only cover groups that hold (or clearly operate under) appropriate GB permissions
                for land-based activity.
              </p>
            </article>

            <article>
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">03 — On the floor</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Games and atmosphere</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                A strong land venue balances classic tables, modern electronic tables where offered, and a well-run slots
                floor without overcrowding. We reward consistent housekeeping, professional dealers, and a calm,
                well-lit environment — not app download counts.
              </p>
            </article>

            <article>
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">04 — Hospitality</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Membership and service</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Membership rules, dress codes and food &amp; beverage vary by house. We note how fairly front-of-house
                staff explain limits, ID checks and self-exclusion — clarity matters as much as chandeliers.
              </p>
            </article>

            <article>
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">05 — Payments</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Cash, chips and payouts</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Land venues still rely on cash, chip redemption and card services at the cage. We ask how quickly
                legitimate payouts are processed in person, and whether limits are explained before play — not
                e-wallet marketing speeds.
              </p>
            </article>

            <article>
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-2">06 — Safer gambling</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Player protection on site</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Staff must be trained to spot harm, offer time-outs, and signpost BeGambleAware, GamCare and National
                Gambling Helpline materials. Safer gambling is not a “nice extra” for a licensed house — it is a
                licence condition.
              </p>
            </article>
          </div>

          <div className="mt-10 pt-6 border-t border-casino-gold/40 max-w-3xl mx-auto">
            <div className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed tracking-wide uppercase text-center">
              <p className="mb-1">
                Content is copyright. Information is aimed at adults aged 18+ in Great Britain visiting licensed
                premises. This site does not offer or promote online casino play.
              </p>
              <p>Operators may require membership, proof of address and photographic ID. Regional house rules apply.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
