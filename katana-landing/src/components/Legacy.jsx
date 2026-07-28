import { useState } from 'react'

export default function Legacy() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section id="legacy" className="relative overflow-hidden py-40 md:py-64">
      {/* soft glow behind the CTA */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-[130px]" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <div data-reveal className="eyebrow mb-8">
          Limited Edition
        </div>

        <h2
          data-reveal
          className="font-display text-5xl leading-tight text-white md:text-7xl"
        >
          Own a piece of
          <br />
          <span className="text-gold-gradient">living history.</span>
        </h2>

        <p data-reveal className="mt-8 max-w-lg text-sm leading-relaxed text-slate-400 md:text-base">
          Only one hundred blades will be forged this year. Each is numbered,
          registered, and delivered with a certificate signed by the master smith.
        </p>

        {/* reservation form */}
        <div data-reveal className="mt-12 w-full max-w-md">
          {sent ? (
            <div className="glass rounded-2xl px-6 py-5 text-sm text-slate-300">
              <span className="text-glow">✦ Your place in line is secured.</span>
              <br />
              <span className="text-slate-400">
                The forge will write to <span className="text-white">{email}</span> within 48 hours.
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email.trim()) setSent(true)
              }}
              className="glass flex flex-col gap-3 rounded-2xl p-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button type="submit" className="btn-primary shrink-0 !py-3">
                Reserve Yours
              </button>
            </form>
          )}
          <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-slate-600">
            $4,800 · Fully refundable deposit · No spam, ever
          </div>
        </div>

        <div
          data-reveal
          className="mt-12 text-[10px] uppercase tracking-[0.35em] text-slate-600"
        >
          Worldwide shipping · Certificate of authenticity · Lifetime care
        </div>
      </div>
    </section>
  )
}
