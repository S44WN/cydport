import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import FluidBlob from './components/FluidBlob'
import SpiralGallery from './components/SpiralGallery'
import Interface from './components/Interface'

import LoadingScreen from './components/LoadingScreen'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#000000' }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <ScrollControls pages={4.2} damping={0.2}>
            <FluidBlob />
            <SpiralGallery />
            <Interface />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}
