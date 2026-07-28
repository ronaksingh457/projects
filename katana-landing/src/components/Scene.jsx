import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Background from './Background.jsx'
import Lights from './Lights.jsx'
import Katana from './Katana.jsx'
import Particles from './Particles.jsx'
import Effects from './Effects.jsx'
import CameraRig from './CameraRig.jsx'
import { config } from '../config.js'

export default function Scene({ fx }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 8], fov: 42 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#04050a']} />
      <fog attach="fog" args={['#04050a', 9, 26]} />

      <Suspense fallback={null}>
        <Background />
        <Lights />
        <Katana />
        {config.particles !== false && <Particles />}
        <Effects fx={fx} />
      </Suspense>

      <CameraRig />
    </Canvas>
  )
}
