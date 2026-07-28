const WORDS = [
  'TAMAHAGANE',
  'FOLDED STEEL',
  'HAMON',
  'TSUBA',
  '62 HRC',
  'HAND FORGED',
  'KISSAKI',
  'TSUKA-ITO',
]

export default function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/5 bg-white/[0.015] py-6">
      <div className="marquee-track items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((w, i) => (
              <span
                key={`${half}-${i}`}
                className="mx-8 flex items-center gap-16 whitespace-nowrap font-display text-sm tracking-[0.4em] text-slate-600"
              >
                {w}
                <span className="text-glow/50">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
