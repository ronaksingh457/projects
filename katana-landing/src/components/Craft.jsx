const stats = [
  ['1200', '°C forge temperature'],
  ['16', 'folds of steel'],
  ['62', 'HRC edge hardness'],
]

export default function Craft() {
  return (
    <section id="craft" className="relative mx-auto max-w-7xl px-6 py-32 md:py-52">
      {/* content sits on the LEFT — the sword drifts RIGHT behind it */}
      <div className="max-w-xl">
        <div data-reveal className="eyebrow mb-6">
          The Craft
        </div>

        <h2
          data-reveal
          className="font-display text-4xl leading-tight text-white md:text-6xl"
        >
          Forged by hand.
          <br />
          <span className="text-gold-gradient">Perfected by fire.</span>
        </h2>

        <p data-reveal className="mt-7 text-sm leading-relaxed text-slate-400 md:text-base">
          Each blade is folded sixteen times, drawing out impurities until the steel
          becomes a mirror of stillness. The hamon — the temper line you see glowing —
          is not decoration. It is the memory of water meeting a 1,200-degree edge.
        </p>

        <div data-reveal className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {stats.map(([n, label]) => (
            <div key={label}>
              <div className="font-display text-3xl text-gold-gradient md:text-5xl">{n}</div>
              <div className="mt-2 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
