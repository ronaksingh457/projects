const QUOTES = [
  {
    quote:
      'I have handled blades from every great house in Seki and Sakai. The hamon on my Hikari is unlike any of them — it moves like weather.',
    name: 'Daniel R. Whitmore',
    role: 'Private collector · London',
  },
  {
    quote:
      'The balance point sits exactly where the master promised. After thirty years of iaido, this is the first sword that disappeared in my hands.',
    name: 'Aiko Matsuda',
    role: 'Iaido instructor · Kyoto',
  },
  {
    quote:
      'From reservation to delivery, the ceremony around the blade mattered as much as the blade itself. It arrived like a relic, not a product.',
    name: 'Lucas Ferreira',
    role: 'Museum curator · São Paulo',
  },
]

export default function Testimonials() {
  return (
    <section id="voices" className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      {/* content sits on the LEFT — the sword drifts RIGHT behind it */}
      <div className="max-w-xl">
        <div data-reveal className="eyebrow mb-6">
          Voices
        </div>
        <h2 data-reveal className="font-display text-4xl leading-tight text-white md:text-6xl">
          Held by those
          <br />
          <span className="text-gold-gradient">who know.</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {QUOTES.map((q) => (
          <figure
            key={q.name}
            data-reveal
            className="glass flex flex-col rounded-2xl p-7"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
              “{q.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4">
              <div className="text-sm font-semibold text-white">{q.name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                {q.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
