import React from 'react'

export default function Footer() {
  return (
    <footer style={{ 
      // backgroundColor: '#E6E6E6', // Removed to match page background (black)
      padding: '2rem 2rem 0 2rem',
      display: 'flex',
      flexDirection: 'column',
      color: '#ffffff', // White text
    }}>
      {/* Top Bar with Border */}
      <div style={{ 
        borderTop: '1px solid #ffffff', // White border
        paddingTop: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontFamily: "'Playfair Display', serif",
        fontSize: '1rem',
        fontWeight: 'bold'
      }}>
        {/* Left: Copyright */}
        <div>
          © Saawn. All rights reserved.
        </div>

        {/* Right: Social Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>

      {/* Large SVG Logo */}
      <div style={{ marginTop: '2rem', width: '100%', lineHeight: 0 }}>
        <img 
          src="./saawn.svg" 
          alt="Saawn" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block',
            opacity: 0.2 // Subtle opacity for the large background logo feel
          }} 
        />
      </div>
    </footer>
  )
}
