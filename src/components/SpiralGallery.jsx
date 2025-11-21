import { Image, useScroll, Text } from '@react-three/drei'
import { useRef, useState, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import '../utils/bentPlaneGeometry' // Ensures the extension is registered

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  url: `https://picsum.photos/600/800?random=${i}`,
  title: `Project ${i + 1}`,
  description: `Creative work #${i + 1}`
}))

export default function SpiralGallery() {
  const groupRef = useRef()
  const scroll = useScroll()

  // Configuration
  const radius = 2 // Reduced radius
  const verticalGap = 0.35 // Reduced gap further

  useFrame((state, delta) => {
    if (!groupRef.current) return
    
    // Scroll offset (0 to 1)
    const offset = scroll.offset
    
    // Calculate target rotation and Y position
    // Invert rotation direction as requested
    const targetRotation = -offset * Math.PI * 2 
    const totalHeight = images.length * verticalGap
    const targetY = offset * totalHeight

    // Apply directly (ScrollControls handles damping)
    groupRef.current.rotation.y = targetRotation
    groupRef.current.position.y = targetY
  })

  return (
    <group ref={groupRef}>
      {images.map((img, i) => {
        // Spiral positioning
        const anglePerImage = 0.8 // Increased for more horizontal gap
        const theta = i * anglePerImage
        
        const x = radius * Math.sin(theta)
        const z = radius * Math.cos(theta)
        const y = -i * verticalGap

        // Rotation to face center (plus 180 degrees to face outward if needed, or 0 for inward)
        // For a gallery surrounding the user/camera, usually facing inward (0,0,0) is good.
        // If the camera is outside, they should face outward.
        // Let's assume camera is at [0, 0, 5] looking at [0,0,0].
        // The spiral is centered at 0,0,0.
        // We want images to face OUTWARD so the camera sees them? 
        // Or inward?
        // If x = r*sin(theta), z = r*cos(theta), the normal vector is (sin, 0, cos).
        // Rotation Y = theta.
        // Let's try rotation Y = theta + PI (facing center) or theta (facing out).
        // User code had: Math.PI + (i / count) * Math.PI * 2. This is facing center.
        
        const rotationY = theta + Math.PI

        return (
          <Card 
            key={i}
            url={img.url}
            title={img.title}
            position={[x, y, z]}
            rotation={[0, rotationY, 0]}
            index={i}
            radius={radius}
          />
        )
      })}
    </group>
  )
}

function Card({ url, title, position, rotation, index, radius }) {
  const imageRef = useRef()
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)

  const handlePointerOver = (e) => {
    e.stopPropagation()
    setHovered(true)
  }

  const handlePointerOut = () => {
    setHovered(false)
  }

  useFrame((state, delta) => {
    if (!imageRef.current) return

    // GSAP-like damping using lerp for hover effects
    // We can use gsap.to directly if we want, but inside useFrame it's better to use lerp 
    // OR trigger gsap.to on state change.
    // The user asked for "equivalent func from gsap".
    // I will use gsap.utils.interpolate for smooth frame-by-frame interpolation if needed, 
    // or just trigger gsap animations on hover change.
    // Let's trigger GSAP animations on hover change for better performance and "GSAP feel".
  })

  // Use useEffect to trigger GSAP animations when hover state changes
  useLayoutEffect(() => {
    if (!imageRef.current) return

    const targetScale = hovered ? 1.2 : 1
    const targetOpacity = hovered ? 1 : 0

    gsap.to(imageRef.current.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: 0.4,
      ease: "power2.out"
    })
    
    if (textRef.current) {
      gsap.to(textRef.current.material, {
        opacity: targetOpacity,
        duration: 0.3
      })
      gsap.to(textRef.current.position, {
        y: hovered ? 0.8 : 0.6, // Move text up slightly
        duration: 0.3
      })
    }

  }, [hovered])

  return (
    <group position={position} rotation={rotation}>
      <Image
        ref={imageRef}
        url={url}
        transparent
        side={THREE.DoubleSide}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {/* 
          Using the bent plane geometry. 
          Args: [radius, width, height, widthSegments, heightSegments]
          User provided: [0.1, 1.25, 1, 20, 20]
        */}
        <bentPlaneGeometry args={[0.1, 1.25, 1, 20, 20]} />
      </Image>
      
      <Text
        ref={textRef}
        position={[0, 0.6, 0]} // Position relative to the card
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        opacity={0} // Start hidden
      >
        {title}
      </Text>
    </group>
  )
}
