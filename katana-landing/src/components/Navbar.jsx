import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  ['The Craft', '#craft'],
  ['Features', '#features'],
  ['Collection', '#collection'],
  ['FAQ', '#faq'],
  ['Legacy', '#legacy'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl tracking-[0.35em] text-white">
          KATANA<span className="text-glow">.</span>
        </a>

        <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.3em] text-slate-400 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors duration-300 hover:text-glow">
              {label}
            </a>
          ))}
        </div>

        <a href="#legacy" className="btn-ghost !px-6 !py-2 text-[11px] !rounded-full">
          Pre-Order
        </a>
      </nav>
    </motion.header>
  )
}
