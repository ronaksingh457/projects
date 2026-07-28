export default function QuoteBand() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
      <img
        src="/images/forge-wide.jpg"
        alt="Inside the forge"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />

      <div data-reveal className="relative mx-auto max-w-4xl px-6 py-32 text-center">
        <div className="font-display text-6xl text-gold/60">“</div>
        <blockquote className="mt-2 font-display text-2xl leading-snug text-white md:text-5xl md:leading-tight">
          The sword is the soul of the warrior —
          <br />
          <span className="text-gold-gradient">and the forge is where the soul is made.</span>
        </blockquote>
        <div className="mt-10 text-[11px] uppercase tracking-[0.4em] text-slate-400">
          Master Takamura Sōke · 14th generation swordsmith
        </div>
      </div>
    </section>
  )
}
