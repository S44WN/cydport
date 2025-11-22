import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll } from '@react-three/drei'

export default function About() {
  const textRef = useRef()
  const text = "I’m an award-winning creative developer with over 5 years of experience, based in Amsterdam, the Netherlands. I turn designs into rich experiences."
  const words = text.split(" ")
  const scroll = useScroll()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (!scroll.el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(".about-word", 
        { y: '100%', rotate: 5 },
        {
          y: 0,
          rotate: 0,
          duration: 2,
          ease: 'power3.out',
          stagger: 0.02,
          scrollTrigger: {
            trigger: textRef.current,
            scroller: scroll.el, // Use the correct scroll container
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, textRef)
    return () => ctx.revert()
  }, [scroll.el])

  return (
    <section style={{ 
      minHeight: '80vh', 
      padding: '0 5vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }}>
      <div ref={textRef} style={{ width: '50%', maxWidth: '600px', textAlign: 'right' }}>
        <p style={{ 
          fontSize: '2.5rem', 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          lineHeight: '1.4',
          mixBlendMode: 'difference', 
          color: '#ffffff',
          zIndex: 10,
          margin: 0
        }}>
          {words.map((word, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.3em' }}>
              <span className="about-word" style={{ display: 'inline-block' }}>
                {/* Handle bolding manually based on content or just render plain for now, 
                    but user had bold tags. Let's try to preserve them if possible or just bold specific words.
                    The original text had <strong>Amsterdam</strong> and <strong>rich experiences</strong>.
                    Splitting by space breaks tags. 
                    Let's just use the plain text split for animation simplicity as requested, 
                    or I can manually reconstruct the bolding logic. 
                    Given the "masking" request is priority, I will stick to simple word splitting.
                    If I want to keep bold, I'd need a more complex parser. 
                    I'll check if I can just wrap the specific words in the map.
                */}
                {word === "Amsterdam," || word === "rich" || word === "experiences." ? <strong>{word}</strong> : word}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
