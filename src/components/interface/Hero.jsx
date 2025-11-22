import React from 'react'

export default function Hero() {
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
        creative <br />
        web <br />
        developer
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
