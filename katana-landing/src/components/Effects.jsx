import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

export default function Effects({ fx }) {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        mipmapBlur
        intensity={fx?.bloomIntensity ?? 1.1}
        luminanceThreshold={fx?.bloomThreshold ?? 1}
        luminanceSmoothing={0.25}
      />
      <Vignette eskil={false} offset={0.22} darkness={0.82} />
    </EffectComposer>
  )
}
