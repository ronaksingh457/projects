import { motion, useScroll, useTransform } from 'framer-motion'

const TITLE = 'KATANA'

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, 140])

  return (
    <section id="top" className="relative flex h-screen items-center justify-center">
      <motion.div
        style={{ opacity, y }}
        className="pointer-events-auto flex flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="eyebrow mb-8"
        >
          The Blade, Reborn
        </motion.div>

        <h1 className="flex font-display text-[clamp(4.2rem,15vw,11rem)] leading-none">
          {TITLE.split('').map((c, i) => (
            <motion.span
              key={i}
              className="inline-block bg-gradient-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent"
              initial={{ y: '0.6em', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.05 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {c}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.75, duration: 0.9, ease: 'easeOut' }}
          className="mt-7 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base"
        >
          A thousand folds of tamahagane steel, ten thousand hours of tradition —
          rendered in real time. Move your cursor. Scroll to witness the ceremony.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.9, ease: 'easeOut' }}
          className="mt-11 flex flex-wrap items-center justify-center gap-4"
        >
          <a className="btn-primary" href="#craft">
            Explore the Craft
          </a>
          <a className="btn-ghost" href="#legacy">
            Enter the Legacy
          </a>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-glow animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  )
}
