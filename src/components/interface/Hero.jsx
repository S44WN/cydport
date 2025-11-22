import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const titleRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRefs.current, 
        { y: '100%', rotate: 5 },
        { 
          y: 0, 
          rotate: 0,
          duration: 2.5, 
          ease: 'power4.out', 
          stagger: 0.2,
          delay: 0.5 // Wait for loader
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const addToRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el)
    }
  }

  return (
    <section style={{ 
      height: '100vh', 
      position: 'relative',
      padding: '10vh 5vw'
    }}>
      {/* Logo (Top Left) */}
      <div style={{
        position: 'absolute',
        top: '5vh',
        left: '5vw',
        fontFamily: "'Inter', sans-serif",
        fontSize: '1.5rem',
        fontWeight: 'bold',
        mixBlendMode: 'difference',
        color: '#ffffff',
        zIndex: 10,
        cursor: 'pointer'
      }} onClick={() => window.location.reload()}>
        SAAWN ©
      </div>

      <h1 style={{ 
        fontSize: '12vw', 
        lineHeight: '0.9', 
        margin: 0, 
        mixBlendMode: 'difference', 
        color: '#ffffff',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div ref={addToRefs}>creative</div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div ref={addToRefs}>web</div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div ref={addToRefs}>developer</div>
        </div>
      </h1>
      
      <div style={{
        position: 'absolute',
        top: '5vh',
        right: '5vw',
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        mixBlendMode: 'difference',
        color: '#ffffff',
        zIndex: 10,
        textAlign: 'right'
      }}>
        <a href="mailto:itissaavn@gmail.com" style={{ 
          color: 'inherit', 
          textDecoration: 'none', 
          display: 'block', 
          marginBottom: '0.5rem',
          cursor: 'pointer' 
        }}>
          ↗ itissaavn@gmail.com
        </a>
        Available for freelance work
      </div>
    </section>
  )
}
