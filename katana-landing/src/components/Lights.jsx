import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'

export default function Lights() {
  const orbit = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (orbit.current) {
      orbit.current.position.x = Math.sin(t * 0.4) * 4.5
      orbit.current.position.z = Math.cos(t * 0.4) * 4.5
      orbit.current.position.y = 1.2 + Math.sin(t * 0.7) * 1.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.12} />

      {/* key light */}
      <directionalLight position={[4, 6, 4]} intensity={1.1} color="#dfe8ff" />

      {/* cyan rim from below-left */}
      <pointLight position={[-4, -2, 3]} intensity={40} color="#38bdf8" distance={14} />
      {/* warm counter from the right */}
      <pointLight position={[5, 1, -3]} intensity={30} color="#f0b26a" distance={14} />
      {/* animated roaming light for living reflections */}
      <pointLight ref={orbit} intensity={25} color="#8ab4ff" distance={12} />

      {/* procedural studio reflections (no HDR download required) */}
      <Environment resolution={256}>
        <Lightformer
          intensity={2.2}
          position={[0, 5, -9]}
          scale={[12, 12, 1]}
          color="#7ea6ff"
        />
        <Lightformer
          intensity={1.4}
          position={[-6, 1, 2]}
          rotation-y={Math.PI / 2}
          scale={[9, 2, 1]}
          color="#bfe9ff"
        />
        <Lightformer
          intensity={1.1}
          position={[6, 0, 2]}
          rotation-y={-Math.PI / 2}
          scale={[9, 1.6, 1]}
          color="#ffd9a0"
        />
        <Lightformer
          intensity={0.9}
          position={[0, -6, 3]}
          rotation-x={Math.PI / 2}
          scale={[12, 6, 1]}
          color="#27406e"
        />
      </Environment>
    </>
  )
}
