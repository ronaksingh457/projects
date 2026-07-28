import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { config, sampleKeys, scrollState } from '../config.js'

export default function CameraRig() {
  useFrame((state, dt) => {
    const cam = state.camera
    const p = scrollState.progress
    const k = sampleKeys(p)
    const px = state.pointer.x
    const py = state.pointer.y

    cam.position.x = THREE.MathUtils.damp(
      cam.position.x,
      px * 0.85 * config.mouseParallax,
      3,
      dt
    )
    cam.position.y = THREE.MathUtils.damp(
      cam.position.y,
      0.2 + py * 0.45 * config.mouseParallax,
      3,
      dt
    )
    cam.position.z = THREE.MathUtils.damp(cam.position.z, k.z, 2.5, dt)

    cam.lookAt(0, -0.1, 0)
  })

  return null
}
