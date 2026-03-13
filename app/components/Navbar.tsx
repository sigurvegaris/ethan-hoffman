'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const experienceRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth <= 1024)
    const handleClick = (e: MouseEvent) => {
      if (experienceRef.current && !experienceRef.current.contains(e.target as Node)) setExperienceOpen(false)
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
    }
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClick)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const linkStyle = {
    color: 'rgba(253,250,245,0.8)',
    textDecoration: 'none',
    fontSize: '0.72rem',
    fontWeight: '500',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'Inter, sans-serif',
    padding: 0,
  }

  const dropdownStyle = {
    position: 'absolute' as const,
    top: 'calc(100% + 1rem)',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(26,24,20,0.98)',
    border: '1px solid rgba(196,168,130,0.2)',
    backdropFilter: 'blur(10px)',
    minWidth: '180px',
    padding: '0.5rem 0',
    zIndex: 100,
  }

  const dropdownLink = {
    display: 'block',
    padding: '0.65rem 1.25rem',
    color: 'rgba(253,250,245,0.7)',
    textDecoration: 'none',
    fontSize: '0.7rem',
    fontWeight: '500',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap' as const,
  }

  const mobileLinkStyle = {
    color: '#fdfaf5',
    textDecoration: 'none',
    fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
    fontFamily: 'Playfair Display, serif',
    fontWeight: '400' as const,
  }

  const mobileSubLink = {
    color: 'rgba(253,250,245,0.5)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    fontFamily: 'Inter, sans-serif',
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        backgroundColor: 'rgba(26,24,20,0.92)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(196,168,130,0.2)' : 'none',
      }}>

        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.4rem', fontWeight: '600',
          color: '#fdfaf5', textDecoration: 'none',
          letterSpacing: '0.05em', flexShrink: 0,
        }}>
          Ethan Hoffman
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>

            <Link href="/" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.8)')}>
              Home
            </Link>

            {/* Experience Dropdown */}
            <div ref={experienceRef} style={{ position: 'relative' }}>
              <button
                style={linkStyle}
                onClick={() => { setExperienceOpen(o => !o); setServicesOpen(false) }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.8)')}>
                Experience ▾
              </button>
              {experienceOpen && (
                <div style={dropdownStyle}>
                  <Link href="/about" style={dropdownLink}
                    onClick={() => setExperienceOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    About Ethan
                  </Link>
                  <Link href="/music" style={dropdownLink}
                    onClick={() => setExperienceOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    Music & Media
                  </Link>
                  <Link href="/shows" style={dropdownLink}
                    onClick={() => setExperienceOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    Upcoming Shows
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div ref={servicesRef} style={{ position: 'relative' }}>
              <button
                style={linkStyle}
                onClick={() => { setServicesOpen(o => !o); setExperienceOpen(false) }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.8)')}>
                Services ▾
              </button>
              {servicesOpen && (
                <div style={dropdownStyle}>
                  <Link href="/services" style={dropdownLink}
                    onClick={() => setServicesOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    Weddings & Events
                  </Link>
                  <Link href="/venues" style={dropdownLink}
                    onClick={() => setServicesOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    Venues
                  </Link>
                  <Link href="/repertoire" style={dropdownLink}
                    onClick={() => setServicesOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    Repertoire
                  </Link>
                  <Link href="/testimonials" style={dropdownLink}
                    onClick={() => setServicesOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.7)')}>
                    Testimonials
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.8)')}>
              Contact
            </Link>

            <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}>
              Book Ethan
            </Link>

          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fdfaf5' }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(26,24,20,0.99)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '4rem 2rem',
          overflowY: 'auto',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: 'fixed', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: '#fdfaf5', fontSize: '2rem', cursor: 'pointer', zIndex: 10000 }}>
            ✕
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>Home</Link>

          {/* Experience group */}
          <Link href="/about" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>Experience</Link>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={mobileSubLink}>About Ethan</Link>
            <Link href="/music" onClick={() => setMenuOpen(false)} style={mobileSubLink}>Music & Media</Link>
            <Link href="/shows" onClick={() => setMenuOpen(false)} style={mobileSubLink}>Upcoming Shows</Link>
          </div>

          {/* Services group */}
          <Link href="/services" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>Services</Link>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/venues" onClick={() => setMenuOpen(false)} style={mobileSubLink}>Venues</Link>
            <Link href="/repertoire" onClick={() => setMenuOpen(false)} style={mobileSubLink}>Repertoire</Link>
            <Link href="/testimonials" onClick={() => setMenuOpen(false)} style={mobileSubLink}>Testimonials</Link>
          </div>

          <Link href="/contact" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>Contact</Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: '0.5rem', padding: '0.85rem 2.5rem' }}>
            Book Ethan
          </Link>
        </div>
      )}
    </>
  )
}