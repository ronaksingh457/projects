const BLADES = [
  {
    img: '/images/blade-kaze.jpg',
    name: 'Kaze',
    kanji: '風',
    meaning: 'The Wind',
    desc: 'Feather-light and impossibly quick. A blade for the practitioner who believes speed is a form of silence.',
    specs: ['72 cm blade', '980 g', 'Aogami steel'],
  },
  {
    img: '/images/blade-kage.jpg',
    name: 'Kage',
    kanji: '影',
    meaning: 'The Shadow',
    desc: 'Blackened steel, gilded guard. Kaze’s quiet opposite — a ceremonial blade that swallows light whole.',
    specs: ['74 cm blade', '1,080 g', 'Tamahagane'],
  },
  {
    img: '/images/blade-hikari.jpg',
    name: 'Hikari',
    kanji: '光',
    meaning: 'The Light',
    desc: 'The forge-master’s personal design. Its hamon runs like a dawn horizon — only ten will ever exist.',
    specs: ['73 cm blade', '1,020 g', 'Tamahagane'],
  },
]

export default function Collection() {
  return (
    <section id="collection" className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      <div className="mb-16 flex flex-col items-center text-center">
        <div data-reveal className="eyebrow mb-6">
          The Collection
        </div>
        <h2 data-reveal className="font-display text-4xl text-white md:text-6xl">
          Three blades. <span className="text-gold-gradient">One lineage.</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {BLADES.map((b) => (
          <div
            key={b.name}
            data-reveal
            className="glass group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-glow/30"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={b.img}
                alt={`The ${b.name} blade`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute right-4 top-4 font-display text-4xl text-white/70">
                {b.kanji}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl uppercase tracking-[0.2em] text-white">
                  {b.name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-glow/80">
                  {b.meaning}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {b.specs.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
