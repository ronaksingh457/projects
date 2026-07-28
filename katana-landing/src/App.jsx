import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useControls } from 'leva'

import { config, scrollState } from './config.js'
import Scene from './components/Scene.jsx'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Craft from './components/Craft.jsx'
import Process from './components/Process.jsx'
import Features from './components/Features.jsx'
import Collection from './components/Collection.jsx'
import QuoteBand from './components/QuoteBand.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Legacy from './components/Legacy.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  /* Leva tuning panel — values flow live into the 3D scene */
  const [fx, setFx] = useState({
    bloomIntensity: config.bloomIntensity,
    bloomThreshold: config.bloomThreshold,
  })
  useControls({
    glowColor: {
      value: config.glowColor,
      onChange: (v) => (config.glowColor = v),
    },
    bloomIntensity: {
      value: config.bloomIntensity,
      min: 0,
      max: 3,
      step: 0.05,
      onChange: (v) => {
        config.bloomIntensity = v
        setFx((s) => ({ ...s, bloomIntensity: v }))
      },
    },
    bloomThreshold: {
      value: config.bloomThreshold,
      min: 0,
      max: 2,
      step: 0.05,
      onChange: (v) => {
        config.bloomThreshold = v
        setFx((s) => ({ ...s, bloomThreshold: v }))
      },
    },
    autoRotate: {
      value: config.autoRotate,
      min: 0,
      max: 1.5,
      step: 0.01,
      onChange: (v) => (config.autoRotate = v),
    },
    floatIntensity: {
      value: config.floatIntensity,
      min: 0,
      max: 3,
      step: 0.05,
      onChange: (v) => (config.floatIntensity = v),
    },
    mouseParallax: {
      value: config.mouseParallax,
      min: 0,
      max: 1.5,
      step: 0.05,
      onChange: (v) => (config.mouseParallax = v),
    },
  })

  /* GSAP: scroll progress for the 3D scene + reveal-on-scroll for UI */
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          scrollState.progress = self.progress
        },
      })

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 70 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%' },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative min-h-screen bg-ink text-slate-200">
      <Loader />
      <Cursor />
      <Navbar />

      {/* Fixed 3D scene behind everything (pointer-events off so page scrolls) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene fx={fx} />
      </div>

      <div className="vignette-overlay" />
      <div className="noise-overlay" />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Craft />
        <Process />
        <Features />
        <Collection />
        <QuoteBand />
        <Testimonials />
        <FAQ />
        <Legacy />
        <Footer />
      </main>
    </div>
  )
}
