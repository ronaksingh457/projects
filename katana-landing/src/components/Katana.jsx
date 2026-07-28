import React, { Component, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Float, useGLTF, Center } from '@react-three/drei'
import { config, sampleKeys, scrollState } from '../config.js'

/* ------------------------------------------------------------------ */
/*  Procedural katana — built entirely from Three.js geometry,         */
/*  so the project needs zero external 3D assets.                      */
/* ------------------------------------------------------------------ */
function ProceduralKatana() {
  const { bladeGeo, hamonGeo, bladeTip } = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(0, -0.085)
    s.lineTo(2.9, -0.06)
    s.quadraticCurveTo(3.5, -0.04, 3.92, 0.045)
    s.quadraticCurveTo(3.55, 0.115, 2.9, 0.11)
    s.lineTo(0, 0.095)
    s.closePath()

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.022,
      bevelEnabled: true,
      bevelThickness: 0.013,
      bevelSize: 0.013,
      bevelSegments: 3,
      curveSegments: 32,
    })
    geo.translate(0, 0, -0.011)
    geo.computeVertexNormals()

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.05, -0.055, 0.024),
      new THREE.Vector3(1.0, -0.048, 0.024),
      new THREE.Vector3(2.0, -0.04, 0.024),
      new THREE.Vector3(2.9, -0.03, 0.024),
      new THREE.Vector3(3.55, -0.005, 0.024),
      new THREE.Vector3(3.9, 0.042, 0.024),
    ])
    const hamon = new THREE.TubeGeometry(curve, 80, 0.0075, 8, false)

    return { bladeGeo: geo, hamonGeo: hamon, bladeTip: new THREE.Vector3(3.93, 0.05, 0) }
  }, [])

  const wrap = useMemo(() => Array.from({ length: 9 }, (_, i) => -0.14 - i * 0.085), [])

  const steel = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#e6ebf5',
        metalness: 1,
        roughness: 0.17,
        envMapIntensity: 1.7,
      }),
    []
  )
  const darkSteel = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#14161c',
        metalness: 0.9,
        roughness: 0.45,
        envMapIntensity: 1.2,
      }),
    []
  )
  const gold = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#caa04f',
        metalness: 1,
        roughness: 0.28,
        envMapIntensity: 1.6,
      }),
    []
  )
  const handleMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#101014',
        metalness: 0.2,
        roughness: 0.85,
      }),
    []
  )
  const glowMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(config.glowColor),
        toneMapped: false,
        transparent: true,
        opacity: 0.95,
      }),
    []
  )

  // keep the hamon glow colour live-linked to the Leva panel
  useFrame(() => {
    glowMat.color.set(config.glowColor)
  })

  return (
    <group>
      {/* blade */}
      <mesh geometry={bladeGeo} material={steel} castShadow />

      {/* glowing hamon line (bloom picks this up) */}
      <mesh geometry={hamonGeo} material={glowMat} />
      <mesh geometry={hamonGeo} scale={[1, 1, -1]} material={glowMat} />

      {/* kissaki (tip) glow */}
      <mesh position={bladeTip} material={glowMat}>
        <sphereGeometry args={[0.016, 16, 16]} />
      </mesh>

      {/* habaki — blade collar */}
      <mesh position={[-0.02, 0.005, 0]} rotation={[0, 0, Math.PI / 2]} material={gold}>
        <cylinderGeometry args={[0.062, 0.072, 0.15, 24]} />
      </mesh>

      {/* tsuba — guard */}
      <mesh position={[-0.13, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={darkSteel}>
        <cylinderGeometry args={[0.21, 0.21, 0.03, 48]} />
      </mesh>
      <mesh position={[-0.13, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={gold}>
        <torusGeometry args={[0.21, 0.009, 12, 64]} />
      </mesh>

      {/* tsuka — handle */}
      <mesh position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={handleMat}>
        <cylinderGeometry args={[0.068, 0.078, 0.82, 24]} />
      </mesh>

      {/* ito wrap rings */}
      {wrap.map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={gold}>
          <torusGeometry args={[0.075, 0.006, 8, 32]} />
        </mesh>
      ))}

      {/* kashira — pommel cap */}
      <mesh position={[-1.03, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={gold}>
        <cylinderGeometry args={[0.075, 0.068, 0.09, 24]} />
      </mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  Optional GLB model (drop a file in public/models + flip the flag)  */
/* ------------------------------------------------------------------ */
function GLFKatana() {
  const { scene } = useGLTF(config.modelPath)
  return (
    <Center>
      <primitive object={scene} scale={config.modelScale} />
    </Center>
  )
}

class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) return <ProceduralKatana />
    return this.props.children
  }
}

/* ------------------------------------------------------------------ */
/*  Wrapper: scroll + mouse choreography                               */
/* ------------------------------------------------------------------ */
export default function Katana() {
  const pivot = useRef()
  const inner = useRef()
  const [introScale, setIntroScale] = useState(0.001)

  useFrame((state, dt) => {
    const t = state.clock.getElapsedTime()

    // cinematic intro: blade scales in after the loader
    const intro = THREE.MathUtils.clamp((t - 1.7) / 1.1, 0, 1)
    const eased = 1 - Math.pow(1 - intro, 3)
    setIntroScale(Math.max(0.001, eased))

    const p = scrollState.progress
    const k = sampleKeys(p)
    const damp = THREE.MathUtils.damp

    pivot.current.position.x = damp(pivot.current.position.x, k.x, 2.5, dt)
    pivot.current.position.y = damp(pivot.current.position.y, k.y, 2.5, dt)

    const px = state.pointer.x
    const py = state.pointer.y

    inner.current.rotation.y =
      0.6 + k.ry + t * config.autoRotate + px * 0.35 * config.mouseParallax
    inner.current.rotation.x = -0.05 - py * 0.2 * config.mouseParallax
    inner.current.rotation.z = -0.52 + p * 0.22

    inner.current.scale.setScalar(introScale)
  })

  return (
    <group ref={pivot}>
      <group ref={inner} scale={0.001}>
        <Float
          speed={1.4}
          rotationIntensity={0.15 * config.floatIntensity}
          floatIntensity={0.7 * config.floatIntensity}
        >
          <group scale={1.25} position={[0, 0.05, 0]}>
            {config.useModel ? (
              <ModelErrorBoundary>
                <GLFKatana />
              </ModelErrorBoundary>
            ) : (
              <ProceduralKatana />
            )}
          </group>
        </Float>
      </group>
    </group>
  )
}
