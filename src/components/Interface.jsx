import { Scroll } from '@react-three/drei'
import Hero from './interface/Hero'
import About from './interface/About'
import OtherWork from './interface/OtherWork'
import Footer from './interface/Footer'

export default function Interface() {
  return (
    <Scroll html style={{ width: '100%' }}>
      <Hero />

      {/* Spacer to push content down after gallery scroll */}
      <div style={{ height: '100vh' }} />

      {/* Content Container */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10vh', // Gap between About and Other Works
        paddingBottom: '10vh'
      }}>
        <About />
        <OtherWork />
        <Footer />
      </div>
    </Scroll>
  )
}
