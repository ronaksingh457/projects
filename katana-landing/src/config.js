/**
 * Global live config — mutated by the Leva panel (top-right corner),
 * read every frame inside the 3D scene via useFrame.
 */
export const config = {
  useModel: false, // true → load public/models/katana.glb instead of the procedural blade
  modelPath: '/models/katana.glb',
  modelScale: 1,

  bloomIntensity: 1.1,
  bloomThreshold: 1,
  glowColor: '#67e8f9',
  autoRotate: 0.18,
  floatIntensity: 1,
  mouseParallax: 0.5,
  particles: true,
}

/** Scroll progress (0 → 1) shared between GSAP and the 3D scene. */
export const scrollState = { progress: 0 }

/* ------------------------------------------------------------------ */
/*  Scroll choreography keyframes (shared by sword + camera).          */
/*  p = normalized scroll progress. x/y = sword position,              */
/*  z = camera distance, ry = sword yaw added on top of spin.          */
/* ------------------------------------------------------------------ */
export const scrollKeys = [
  { p: 0.0, x: 0, y: 0, z: 8.0, ry: 0.0 }, // Hero
  { p: 0.1, x: 2.15, y: -0.1, z: 7.2, ry: 0.9 }, // Craft (text left)
  { p: 0.22, x: 0.2, y: 0.15, z: 8.6, ry: 1.8 }, // Process (centered back)
  { p: 0.36, x: -2.35, y: -0.25, z: 6.6, ry: 2.6 }, // Features (text right)
  { p: 0.52, x: 0, y: 0.35, z: 7.8, ry: 3.6 }, // Collection (lifted center)
  { p: 0.66, x: 2.2, y: -0.1, z: 8.3, ry: 4.4 }, // Testimonials (text left)
  { p: 0.8, x: -2.0, y: 0.0, z: 8.7, ry: 5.2 }, // FAQ (text right)
  { p: 1.0, x: 0, y: 0.15, z: 9.4, ry: 6.3 }, // Legacy finale
]

const smoothstep = (p, a, b) => {
  const t = Math.min(Math.max((p - a) / (b - a), 0), 1)
  return t * t * (3 - 2 * t)
}

/** Smoothly interpolate between the two surrounding keyframes. */
export function sampleKeys(p) {
  const keys = scrollKeys
  if (p <= keys[0].p) return keys[0]
  if (p >= keys[keys.length - 1].p) return keys[keys.length - 1]
  let i = 0
  while (p > keys[i + 1].p) i++
  const a = keys[i]
  const b = keys[i + 1]
  const t = smoothstep(p, a.p, b.p)
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
    ry: a.ry + (b.ry - a.ry) * t,
  }
}
