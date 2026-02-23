'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      backgroundColor: scrolled ? 'rgba(26,24,20,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      borderBottom: scrolled ? '1px solid rgba(196,168,130,0.2)' : 'none',
    }}>
      {/* Logo */}
      <a href="/" style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#fdfaf5',
        textDecoration: 'none',
        letterSpacing: '0.05em',
      }}>
        Ethan Hoffman
      </a>

      {/* Desktop Nav */}
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'center',
      }} className="desktop-nav">
{['About', 'Music', 'Services', 'Venues', 'Testimonials', 'Shows'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: 'rgba(253,250,245,0.8)',
            textDecoration: 'none',
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.8)')}>
            {item}
          </a>
        ))}
<a href="/repertoire" style={{
          color: 'rgba(253,250,245,0.8)',
          textDecoration: 'none',
          fontSize: '0.75rem',
          fontWeight: '500',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.8)')}>
          Repertoire
        </a>
        <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}>
          Book Ethan
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
        className="hamburger"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: '#fdfaf5',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </button>

    {/* Mobile Menu */}
    {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(26,24,20,0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          zIndex: 999,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute',
            top: '1.5rem',
            right: '2rem',
            background: 'none',
            border: 'none',
            color: '#fdfaf5',
            fontSize: '2rem',
            cursor: 'pointer',
          }}>×</button>

          {['About', 'Music', 'Services', 'Venues', 'Testimonials', 'Shows', 'Contact'].map((item) => (
            <a key={item} href={item === 'Contact' ? '#contact' : `#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#fdfaf5',
                textDecoration: 'none',
                fontSize: '1.8rem',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '400',
              }}>
              {item}
            </a>
          ))}

          <a href="/repertoire"
            onClick={() => setMenuOpen(false)}
            style={{
              color: '#fdfaf5',
              textDecoration: 'none',
              fontSize: '1.8rem',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '400',
            }}>
            Repertoire
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}