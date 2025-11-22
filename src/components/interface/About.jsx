import React from 'react'

export default function About() {
  return (
    <section style={{ 
      minHeight: '80vh', 
      padding: '0 5vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }}>
      <div style={{ width: '50%', maxWidth: '600px', textAlign: 'right' }}>
        <p style={{ 
          fontSize: '2.5rem', 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          lineHeight: '1.4',
          mixBlendMode: 'difference', 
          color: '#ffffff',
          zIndex: 10
        }}>
          I’m an award-winning creative developer with over 5 years of experience, based in <strong>Amsterdam</strong>, the Netherlands.
          <br /><br />
          I turn designs into <strong>rich experiences</strong>.
        </p>
      </div>
    </section>
  )
}
