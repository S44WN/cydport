import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import FluidBlob from './components/FluidBlob'

import SpiralGallery from './components/SpiralGallery'
import Interface from './components/Interface'


export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#000000' }}
    >
      <color attach="background" args={['#000000']} />
      <ScrollControls pages={5} damping={0.2}>
        <FluidBlob />
        <SpiralGallery />
        <Interface />
      </ScrollControls>


      {/* Content will go here */}


    </Canvas>
  )
}
