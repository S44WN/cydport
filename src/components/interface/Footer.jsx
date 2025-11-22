import React from 'react'

export default function Footer() {
  return (
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
  )
}
