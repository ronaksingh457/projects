const STEPS = [
  {
    n: '01',
    title: 'Smelt',
    kanji: '精錬',
    desc: 'Iron sand burns for seventy-two unbroken hours in the tatara furnace, yielding tamahagane — the jewel steel from which legends begin.',
  },
  {
    n: '02',
    title: 'Fold',
    kanji: '折返',
    desc: 'The steel is folded sixteen times over open flame. Sixty-five thousand layers later, every impurity has been drawn out like a whispered secret.',
  },
  {
    n: '03',
    title: 'Forge',
    kanji: '鍛造',
    desc: 'Hammer and anvil give the blade its gentle curve — the sori — born not from design, but from the physics of a harder edge meeting a softer spine.',
  },
  {
    n: '04',
    title: 'Quench',
    kanji: '焼入',
    desc: 'At 1,200°C the clay-coated blade meets water. In that single violent second, the hamon is born — the glowing temper line you see before you.',
  },
  {
    n: '05',
    title: 'Polish',
    kanji: '研磨',
    desc: 'Three weeks on progressively finer stones. The swordsmith does not sharpen the blade so much as reveal it, layer by patient layer.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
      <div className="mb-20 flex flex-col items-center text-center">
        <div data-reveal className="eyebrow mb-6">
          The Ceremony
        </div>
        <h2 data-reveal className="font-display text-4xl text-white md:text-6xl">
          Five rites of <span className="text-gold-gradient">creation.</span>
        </h2>
      </div>

      <div className="relative">
        {/* center line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />

        {STEPS.map((s, i) => {
          const left = i % 2 === 0
          return (
            <div
              key={s.n}
              data-reveal
              className={`relative mb-16 flex last:mb-0 md:w-1/2 ${
                left ? 'md:pr-16' : 'md:ml-auto md:pl-16'
              } pl-16 md:pl-0 ${left ? 'md:pl-0' : ''}`}
            >
              {/* node */}
              <div
                className={`absolute left-5 top-2 -translate-x-1/2 md:top-2 ${
                  left ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-glow/40 bg-ink font-display text-xs text-glow shadow-[0_0_20px_rgba(103,232,249,0.25)]">
                  {s.n}
                </div>
              </div>

              <div className={`glass rounded-2xl p-7 ${left ? 'md:text-right' : ''} w-full`}>
                <div
                  className={`flex items-baseline gap-3 ${
                    left ? 'md:justify-end' : ''
                  }`}
                >
                  <h3 className="font-display text-xl uppercase tracking-[0.25em] text-white">
                    {s.title}
                  </h3>
                  <span className="font-display text-gold/70">{s.kanji}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
