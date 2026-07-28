import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const COUNT = 450

export default function Particles() {
  const ref = useRef()

  const { geometry, speeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const speeds = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 1
      speeds[i] = 0.1 + Math.random() * 0.35
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return { geometry, speeds }
  }, [])

  useFrame((state, dt) => {
    const attr = ref.current.geometry.attributes.position
    for (let i = 0; i < COUNT; i++) {
      let y = attr.getY(i) + speeds[i] * dt
      if (y > 7) y = -7
      attr.setY(i, y)
    }
    attr.needsUpdate = true
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        color="#9cc4ff"
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}
