'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#1a1814',
    }}>
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}>
        <iframe
          src="https://www.youtube.com/embed/iCRmtLvbcdw?autoplay=1&mute=1&loop=1&playlist=iCRmtLvbcdw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -20%) scale(1.8)',
            width: '100%',
            height: '100%',
            border: 'none',
            pointerEvents: 'none',
          }}
          allow="autoplay; fullscreen"
          title="Ethan Hoffman Live Performance"
        />
      </div>

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(26,24,20,0.5) 0%, rgba(26,24,20,0.3) 50%, rgba(26,24,20,0.85) 100%)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: '0 2rem',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1.2s ease',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          fontWeight: '600',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#c4622d',
          marginBottom: '1.2rem',
        }}>
          Los Angeles, CA
        </p>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: '600',
          color: '#fdfaf5',
          lineHeight: '1.05',
          marginBottom: '1.2rem',
          letterSpacing: '-0.01em',
        }}>
          Ethan Hoffman
        </h1>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          fontWeight: '300',
          fontStyle: 'italic',
          color: 'rgba(253,250,245,0.85)',
          marginBottom: '2.5rem',
          letterSpacing: '0.02em',
        }}>
          Soulful Live Music for Weddings & Private Events
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#contact" className="btn-primary">Book Ethan</a>
          <a href="#music" className="btn-outline">Watch Live</a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <p style={{
          color: 'rgba(253,250,245,0.5)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}></p>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(253,250,245,0.5), transparent)',
          animation: 'scrollPulse 2s ease infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}