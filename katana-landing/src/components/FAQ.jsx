import { useState } from 'react'

const ITEMS = [
  {
    q: 'How long until my blade is delivered?',
    a: 'Each sword is forged to order. From reservation to delivery takes 14–18 weeks — the polishing alone demands three of them. You will receive forge updates and photographs at every rite of passage.',
  },
  {
    q: 'Is the blade authentic tamahagane steel?',
    a: 'Yes. Our tamahagane is smelted in a traditional tatara furnace from iron sand, and every blade ships with a metallurgical certificate and a signed provenance document from the master smith.',
  },
  {
    q: 'Are the blades functional or decorative?',
    a: 'Fully functional and differentially hardened to 62 HRC at the edge. That said, each blade is a collector-grade instrument — we recommend it for kata and display, not cutting practice.',
  },
  {
    q: 'How do I care for the steel?',
    a: 'Every sword arrives with a traditional care kit: uchiko powder ball, choji oil, and rice paper. A thin coat of oil after handling keeps the hamon pristine for generations.',
  },
  {
    q: 'Do you ship worldwide?',
    a: 'We ship to over 40 countries in compliance with local bladed-articles regulations. Where required, our legal team prepares export documentation on your behalf at no charge.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
      {/* content sits on the RIGHT — the sword drifts LEFT behind it */}
      <div className="grid gap-14 md:grid-cols-[1fr_1.4fr]">
        <div>
          <div data-reveal className="eyebrow mb-6">
            Questions
          </div>
          <h2 data-reveal className="font-display text-4xl leading-tight text-white md:text-6xl">
            Before you
            <br />
            <span className="text-gold-gradient">draw the blade.</span>
          </h2>
          <p data-reveal className="mt-6 text-sm leading-relaxed text-slate-400">
            Anything else? Write to{' '}
            <span className="text-glow/90">forge@katana.example</span> — a human
            answers within one day.
          </p>
        </div>

        <div data-reveal className="space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${
                  isOpen ? 'border-glow/30' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-glow transition-transform duration-300 ${
                      isOpen ? 'rotate-45 border-glow/50' : ''
                    }`}
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
