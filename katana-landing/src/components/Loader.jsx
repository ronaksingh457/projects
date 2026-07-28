import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress, active } = useProgress()
  const [minElapsed, setMinElapsed] = useState(false)
  const [done, setDone] = useState(false)

  // keep the intro cinematic for at least 1.6s
  useEffect(() => {
    const t = setTimeout(() => setMinElapsed(true), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (minElapsed && !active) setDone(true)
  }, [minElapsed, active])

  const shown = active ? Math.min(Math.round(progress), 99) : 100

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.9em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="font-display text-3xl text-slate-100 pl-[0.5em]"
          >
            KATANA
          </motion.div>

          <div className="mt-10 h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-glow"
              animate={{ width: `${shown}%` }}
              transition={{ ease: 'easeOut', duration: 0.4 }}
            />
          </div>

          <div className="mt-5 text-[10px] uppercase tracking-[0.45em] text-slate-500">
            Forging the blade — {shown}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
