const features = [
  {
    title: 'Folded Steel',
    desc: 'Sixteen folds, 65,536 layers. Impurities burn away; what remains is unbreakable.',
    icon: (
      <path d="M4 20L20 4M4 4l7 7M20 20l-7-7" />
    ),
  },
  {
    title: 'Living Hamon',
    desc: 'The temper line is hand-clayed and quench-born — no two blades share the same wave.',
    icon: (
      <path d="M3 12c3-4 6 4 9 0s6 4 9 0M3 17c3-4 6 4 9 0s6 4 9 0" />
    ),
  },
  {
    title: 'Balance 0.50',
    desc: 'The point of balance rests precisely at the tsuba — the blade feels weightless in motion.',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16M4 12h16" />
      </>
    ),
  },
  {
    title: 'Eternal Edge',
    desc: 'Differentially hardened: a 62 HRC razor edge on a resilient, shock-absorbing spine.',
    icon: <path d="M12 2l8 18-8-4-8 4 8-18z" />,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-32 md:py-52">
      {/* content sits on the RIGHT — the sword drifts LEFT behind it */}
      <div className="ml-auto max-w-2xl md:pl-24">
        <div data-reveal className="eyebrow mb-6">
          Anatomy of a Legend
        </div>
        <h2
          data-reveal
          className="font-display text-4xl leading-tight text-white md:text-6xl"
        >
          Every detail,
          <br />
          <span className="text-gold-gradient">deliberate.</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            data-reveal
            className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-glow/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-glow transition-colors duration-300 group-hover:text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
            </div>
            <h3 className="mt-5 font-display text-sm uppercase tracking-[0.25em] text-white">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
