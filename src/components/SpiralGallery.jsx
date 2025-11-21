import { Image, useScroll } from '@react-three/drei'
import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

const images = Array.from({ length: 12 }, (_, i) => ({
  url: `https://picsum.photos/600/800?random=${i}`,
  position: [0, 0, 0],
  rotation: [0, 0, 0]
}))

export default function SpiralGallery() {
  const groupRef = useRef()
  const scroll = useScroll()

  // Calculate positions
  const radius = 2
  const verticalGap = 0.5 // Vertical gap between images

  useFrame((state, delta) => {
    if (!groupRef.current) return
    
    // The scroll offset is between 0 and 1
    const offset = scroll.offset
    
    // Rotate the entire group based on scroll
    // We want a full rotation or more over the course of the scroll
    const targetRotation = offset * Math.PI * 2 
    
    // Move the group up based on scroll
    // We want to move it up enough to see all images
    // Total height roughly = images.length * verticalGap
    const totalHeight = images.length * verticalGap
    const targetY = offset * totalHeight

    // Smoothly interpolate current values to target values
    // Using damp for smoother camera-like feel, or just direct assignment if damping is handled by ScrollControls
    // Since ScrollControls has damping, we can use the offset directly or use simple lerp for extra smoothness if needed.
    // Let's use simple linear interpolation for now or just direct assignment since ScrollControls handles the damping of the 'offset' value itself.
    
    groupRef.current.rotation.y = targetRotation
    groupRef.current.position.y = targetY
  })

  return (
    <group ref={groupRef}>
      {images.map((img, i) => {
        const theta = i * 0.5
        const x = radius * Math.sin(theta)
        const z = radius * Math.cos(theta)
        const y = -i * verticalGap // Spiral downwards

        return (
          <GalleryImage 
            key={i} 
            url={img.url} 
            position={[x, y, z]} 
          />
        )
      })}
    </group>
  )
}

function GalleryImage({ url, position }) {
  const ref = useRef()

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.lookAt(0, 0, 0)
    }
  }, [])

  return (
    <Image 
      ref={ref}
      url={url} 
      position={position}
      scale={[1.5, 2, 1]} // Aspect ratio roughly 3:4
      transparent
      opacity={0.8}
    />
  )
}
