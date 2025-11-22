import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const { progress, active } = useProgress()
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!active && progress === 100) {
      // Add a small delay before hiding to ensure smooth transition
      const timeout = setTimeout(() => setFinished(true), 500)
      return () => clearTimeout(timeout)
    }
    if (active) {
      setFinished(false)
    }
  }, [active, progress])

  if (finished) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        transition: 'opacity 1s ease-in-out',
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          fontFamily: 'Inter, sans-serif',
          color: '#ffffff',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          letterSpacing: '0.2em',
        }}
      >
        LOADING
      </div>
      <div
        style={{
          width: '200px',
          height: '2px',
          background: '#333',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progress}%`,
            background: '#ffffff',
            transition: 'width 0.2s',
          }}
        />
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          color: '#666',
          marginTop: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  )
}
