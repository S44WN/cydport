import { Scroll } from '@react-three/drei'

export default function Interface() {
  return (
    <Scroll html style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        position: 'relative',
        padding: '10vh 5vw'
      }}>
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
          <span style={{ display: 'block', marginBottom: '0.5rem' }}>↗ info@cydstumpel.nl</span>
          Available for freelance work
        </div>
      </section>

      {/* Spacer to push content down after gallery scroll */}
      <div style={{ height: '100vh' }} />

      {/* Content Container */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10vh', // Gap between About and Other Works
        paddingBottom: '10vh'
      }}>
        
        {/* About Section */}
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

        {/* Other Work Section */}
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

        {/* Footer Section - Sticky at bottom of content */}
        <section style={{ 
          padding: '5vh 5vw 10vh 5vw', // Added bottom padding
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          // marginTop: 'auto' // Removed as it might not be needed in this flex column
        }}>
          {/* Social Icons (Left) */}
          <div style={{ display: 'flex', gap: '1rem', mixBlendMode: 'difference', color: '#ffffff' }}>
            {/* Simple text placeholders for icons as requested */}
            <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>◈</span>
            <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🐦</span>
            <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🐙</span>
            <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>💼</span>
            <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📷</span>
          </div>

          {/* Copyright (Right) */}
          <div style={{ textAlign: 'right', mixBlendMode: 'difference', color: '#ffffff' }}>
            <div style={{ 
              fontSize: '3rem', 
              fontFamily: "'Playfair Display', serif",
              marginBottom: '0.5rem'
            }}>
              © Saawn 2025
            </div>
            <div style={{ 
              fontSize: '1rem', 
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Creative Freelance Developer
            </div>
          </div>
        </section>
      </div>
    </Scroll>
  )
}
