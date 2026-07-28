import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return
    setEnabled(true)
    document.body.classList.add('custom-cursor')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const rp = { ...pos }
    let raf

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current)
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    }

    const loop = () => {
      rp.x += (pos.x - rp.x) * 0.16
      rp.y += (pos.y - rp.y) * 0.16
      if (ring.current)
        ring.current.style.transform = `translate3d(${rp.x}px, ${rp.y}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      document.body.classList.remove('custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dot} className="fixed left-0 top-0 z-[90] pointer-events-none">
        <div className="h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-glow" />
      </div>
      <div ref={ring} className="fixed left-0 top-0 z-[90] pointer-events-none mix-blend-screen">
        <div className="h-9 w-9 -ml-[18px] -mt-[18px] rounded-full border border-glow/40 animate-pulse-soft" />
      </div>
    </>
  )
}
