"use client"

import { ShieldCheck, Scale, Lock, FileCheck2, MapPin } from "lucide-react"

export function InfoSections() {
  return (
    <div className="mt-16">
      <section
        aria-labelledby="info-heading"
        role="region"
        className="relative rounded-sm overflow-hidden border-t-[3px] border-casino-gold shadow-[0_-20px_60px_rgba(1,33,105,0.2),inset_0_1px_0_rgba(212,175,55,0.12)]"
      >
        <div className="absolute inset-0 bg-[#060a12]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[rgb(1,33,105)]/25 via-transparent to-[rgb(200,16,46)]/10"
        />

        <div className="relative z-10 px-4 md:px-8 py-8 lg:py-12 text-white">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div
              aria-hidden="true"
              className="flex justify-center gap-3 md:gap-5 text-casino-gold/50 text-lg md:text-xl font-serif mb-4 select-none"
            >
              <span>♠</span>
              <span className="text-[rgb(200,16,46)]/70">♥</span>
              <span>♦</span>
              <span>♣</span>
            </div>
            <div className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-black tracking-[0.2em] text-casino-gold uppercase border border-casino-gold/35 rounded-sm px-3 py-1.5 mb-4 bg-black/40">
              <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              From London to Glasgow — on the door
            </div>
            <h2 id="info-heading" className="text-2xl md:text-4xl font-black tracking-tight text-white mb-3 leading-[1.1]">
              <span className="text-casino-gold">Britain&apos;s</span> casino floors,{" "}
              <span className="text-white">reviewed like a punter</span>
            </h2>
            <p className="text-[12px] md:text-sm text-gray-400 font-semibold tracking-[0.12em] uppercase mb-3">
              London · Manchester · Birmingham · Leeds · Glasgow · Cardiff
            </p>
            <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Chips, carpets, cage queues and how the pit boss runs the room — not generic “operator” copy. We rank{" "}
              <strong className="text-white">who actually runs a decent British house</strong> under UK Gambling
              Commission rules: full casino licences, regional casinos, and licensed betting office (LBO) floors where
              the law allows casino-style machines.
            </p>
          </div>

          <ul
            aria-label="British gambling regulation at a glance"
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-px md:bg-casino-gold/20 md:border md:border-casino-gold/25 mb-10 list-none p-0 m-0 max-w-4xl mx-auto"
          >
            <li className="bg-[#0a0f18] border border-casino-gold/20 md:border-0 p-4 flex flex-col items-center text-center">
              <ShieldCheck aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">UKGC licence</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">Casino &amp; LBO permissions</div>
            </li>
            <li className="bg-[#0a0f18] border border-casino-gold/20 md:border-0 p-4 flex flex-col items-center text-center">
              <Scale aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">British law</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">Gambling Act 2005</div>
            </li>
            <li className="bg-[#0a0f18] border border-casino-gold/20 md:border-0 p-4 flex flex-col items-center text-center">
              <Lock aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">Self-exclusion</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">Venue schemes + GamStop (remote)</div>
            </li>
            <li className="bg-[#0a0f18] border border-casino-gold/20 md:border-0 p-4 flex flex-col items-center text-center">
              <FileCheck2 aria-hidden="true" className="w-6 h-6 text-casino-gold mb-2" strokeWidth={1.75} />
              <div className="text-[10px] font-black tracking-[0.14em] uppercase text-white">Door policy</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">18+ · ID &amp; membership</div>
            </li>
          </ul>

          <div className="max-w-3xl mx-auto space-y-7 md:space-y-9">
            <article className="border-l-2 border-[rgb(200,16,46)]/80 pl-4 md:pl-5 bg-black/20 py-3 pr-2 rounded-r-sm">
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">01 — The walk-in</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">What we clock on arrival</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Security greeting, queue at membership, smell of floor polish versus smoke-stale carpets — it all tells
                you how a British house respects punters. We score{" "}
                <strong className="text-white">first impressions on the door</strong>, not website UX mock-ups.
              </p>
            </article>

            <article className="border-l-2 border-[rgb(1,33,105)] pl-4 md:pl-5 bg-black/20 py-3 pr-2 rounded-r-sm">
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">02 — Licence reality</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">UKGC isn&apos;t a sticker — it&apos;s the rulebook</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                We cross-check the public register: operating licence, premises approvals, and conditions around AML and
                customer interaction. If a group blurs retail betting with casino-style floors, we say so in plain
                English — <strong className="text-white">British punters deserve straight talk</strong>.
              </p>
            </article>

            <article className="border-l-2 border-casino-gold/70 pl-4 md:pl-5 bg-black/20 py-3 pr-2 rounded-r-sm">
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">03 — Tables &amp; machines</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Roulette, blackjack, B1/B3 — what&apos;s actually switched on</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Full casinos run American roulette, punto banco, blackjack; many LBOs run category B1/B3 and roulette
                terminals under strict caps. We care about{" "}
                <strong className="text-white">spacing, minimums posted honestly</strong>, and whether electronic
                roulette feels fair or cramped.
              </p>
            </article>

            <article className="border-l-2 border-casino-gold/70 pl-4 md:pl-5 bg-black/20 py-3 pr-2 rounded-r-sm">
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">04 — The bar &amp; the cage</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Hospitality without the waffle</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Dress codes, last rounds, and how the cage handles a chunky chip cash-out — that&apos;s the Britain we
                review. Chandeliers are optional; <strong className="text-white">straight answers at the desk</strong>{" "}
                are not.
              </p>
            </article>

            <article className="border-l-2 border-[rgb(200,16,46)]/80 pl-4 md:pl-5 bg-black/20 py-3 pr-2 rounded-r-sm">
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">05 — Cash &amp; chips</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Real money, real cage</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Contactless at the bar doesn&apos;t replace chip redemption. We note payout friction, ID re-checks, and
                whether staff explain machine limits before you sit —{" "}
                <strong className="text-white">how a UK house should treat bankrolls</strong>.
              </p>
            </article>

            <article className="border-l-2 border-[rgb(1,33,105)] pl-4 md:pl-5 bg-black/20 py-3 pr-2 rounded-r-sm">
              <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-casino-gold mb-1">06 — When it&apos;s not fun</h3>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Safer gambling on the floor</h4>
              <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed">
                Trained interventions, time-outs, self-exclusion forms and helpline cards by the machines — that&apos;s
                the UK standard we expect. <strong className="text-white">No “responsible gaming” buzzwords</strong>{" "}
                without staff who can actually act.
              </p>
            </article>
          </div>

          <div className="mt-10 pt-6 border-t border-casino-gold/35 max-w-3xl mx-auto">
            <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed tracking-wide uppercase text-center">
              Editorial content © Great Britain audience only. We do not publish online casino bonuses or remote
              sign-up funnels — walk-in gambling on licensed premises only. Membership, photo ID and regional house rules
              always apply.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
