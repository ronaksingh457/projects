import { Stars } from '@react-three/drei'

const vertex = /* glsl */ `
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragment = /* glsl */ `
  varying vec3 vPos;
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uGlow;

  void main() {
    vec3 dir = normalize(vPos);
    float h = dir.y * 0.5 + 0.5;
    vec3 col = mix(uBottom, uTop, smoothstep(0.0, 1.0, h));

    // cold cyan nebula glow behind the blade
    float d = length(dir.xy - vec2(0.0, 0.02));
    col += uGlow * exp(-d * d * 7.0) * 0.35;

    // faint warm ember glow low-right
    float d2 = length(dir.xy - vec2(0.55, -0.45));
    col += vec3(0.35, 0.18, 0.06) * exp(-d2 * d2 * 6.0) * 0.25;

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function Background() {
  return (
    <>
      <mesh scale={40}>
        <sphereGeometry args={[1, 48, 48]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          side={2}
          fog={false}
          uniforms={{
            uTop: { value: { x: 0.035, y: 0.05, z: 0.11 } },
            uBottom: { value: { x: 0.008, y: 0.01, z: 0.024 } },
            uGlow: { value: { x: 0.05, y: 0.22, z: 0.32 } },
          }}
        />
      </mesh>

      <Stars radius={80} depth={40} count={2600} factor={3.2} saturation={0} fade speed={0.6} />
    </>
  )
}
