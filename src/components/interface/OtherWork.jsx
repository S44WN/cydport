import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '@react-three/drei'

export default function OtherWork() {
  const containerRef = useRef()
  const titleRef = useRef()
  const scroll = useScroll()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!scroll.el) return

    const ctx = gsap.context(() => {
      // Animate Title
      gsap.fromTo(".work-title-word",
        { y: '100%', rotate: 5 },
        {
          y: 0,
          rotate: 0,
          duration: 2,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleRef.current,
            scroller: scroll.el, // Use the correct scroll container
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate List Items
      gsap.fromTo(".work-item-inner",
        { y: '100%', rotate: 5 },
        {
          y: 0,
          rotate: 0,
          duration: 2,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            scroller: scroll.el, // Use the correct scroll container
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [scroll.el])

  return (
    <section ref={containerRef} style={{ 
      minHeight: '100vh', 
      padding: '0 5vw'
    }}>
      <h2 ref={titleRef} style={{
        fontSize: '5rem',
        fontFamily: "'Playfair Display', serif",
        marginBottom: '4rem',
        mixBlendMode: 'difference',
        color: '#ffffff',
        lineHeight: 1
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div className="work-title-word">other</div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div className="work-title-word">work</div>
        </div>
      </h2>

      <div style={{ width: '100%', maxWidth: '1200px' }}>
        {[
          { name: 'Buro Dertig', desc: 'A creative communication agency', link: '#' },
          { name: 'MOMO Festival', desc: 'Music, Art & Performance', link: '#' },
          { name: 'Creative Coding', desc: 'Experiments & Prototypes', link: '#' },
          { name: 'Agency Portfolio', desc: 'Showcase for digital agency', link: '#' }
        ].map((project, index) => (
          <div key={index} className="work-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            mixBlendMode: 'difference',
            color: '#ffffff',
            overflow: 'hidden' // Ensure the row itself clips if needed, but we animate inner content
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.paddingLeft = '1rem'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7'
            e.currentTarget.style.paddingLeft = '0'
          }}
          >
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <h3 className="work-item-inner" style={{ fontSize: '1.5rem', margin: 0 }}>{project.name}</h3>
            </div>
            <div style={{ flex: 2, opacity: 0.7, overflow: 'hidden' }}>
              <span className="work-item-inner" style={{ fontFamily: "'Inter', sans-serif", display: 'block' }}>{project.desc}</span>
            </div>
            <div style={{ flex: 0.5, textAlign: 'right', overflow: 'hidden' }}>
              <div className="work-item-inner">
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif"
                }}>View Case</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
