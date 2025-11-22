import React from 'react'

export default function OtherWork() {
  return (
    <section style={{ 
      minHeight: '100vh', 
      padding: '0 5vw'
    }}>
      <h2 style={{
        fontSize: '5rem',
        fontFamily: "'Playfair Display', serif",
        marginBottom: '4rem',
        mixBlendMode: 'difference',
        color: '#ffffff'
      }}>
        other <br /> work
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
            color: '#ffffff'
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
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{project.name}</h3>
            </div>
            <div style={{ flex: 2, opacity: 0.7 }}>
              <span style={{ fontFamily: "'Inter', sans-serif" }}>{project.desc}</span>
            </div>
            <div style={{ flex: 0.5, textAlign: 'right' }}>
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
        ))}
      </div>
    </section>
  )
}
