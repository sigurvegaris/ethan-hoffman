'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileExperienceOpen, setMobileExperienceOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const experienceRef = useRef<HTMLDivElement | null>(null)
  const servicesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    const handleResize = () => setIsMobile(window.innerWidth <= 1024)

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node

      if (experienceRef.current && !experienceRef.current.contains(target)) {
        setExperienceOpen(false)
      }

      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false)
      }
    }

    handleResize()
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false)
      setMobileExperienceOpen(false)
      setMobileServicesOpen(false)
    }
  }, [isMobile])

  const closeAllMenus = () => {
    setMenuOpen(false)
    setExperienceOpen(false)
    setServicesOpen(false)
    setMobileExperienceOpen(false)
    setMobileServicesOpen(false)
  }

  const linkStyle: React.CSSProperties = {
    color: 'rgba(253,250,245,0.82)',
    textDecoration: 'none',
    fontSize: '0.72rem',
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'Inter, sans-serif',
    padding: 0,
  }

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(100% + 1rem)',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(26,24,20,0.98)',
    border: '1px solid rgba(196,168,130,0.2)',
    backdropFilter: 'blur(10px)',
    minWidth: '210px',
    padding: '0.5rem 0',
    zIndex: 100,
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  }

  const dropdownLink: React.CSSProperties = {
    display: 'block',
    padding: '0.75rem 1.25rem',
    color: 'rgba(253,250,245,0.72)',
    textDecoration: 'none',
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease, background-color 0.2s ease',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, sans-serif',
  }

  return (
    <>
      <style>{`
        .eh-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          background: rgba(26,24,20,0.9);
          backdrop-filter: blur(10px);
          transition: all 0.35s ease;
        }

        .eh-nav.scrolled {
          padding: 0.95rem 1.5rem;
          border-bottom: 1px solid rgba(196,168,130,0.18);
          background: rgba(26,24,20,0.94);
        }

        .eh-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: #fdfaf5;
          text-decoration: none;
          letter-spacing: 0.04em;
          flex-shrink: 0;
          position: relative;
          z-index: 1002;
        }

        .eh-desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .eh-mobile-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          padding: 0;
          position: relative;
          z-index: 10002;
        }

        .eh-mobile-lines {
          position: relative;
          width: 24px;
          height: 18px;
        }

        .eh-mobile-lines span {
          position: absolute;
          left: 0;
          width: 24px;
          height: 2px;
          background: #fdfaf5;
          transition: transform 0.28s ease, opacity 0.28s ease, top 0.28s ease;
        }

        .eh-mobile-lines span:nth-child(1) { top: 0; }
        .eh-mobile-lines span:nth-child(2) { top: 8px; }
        .eh-mobile-lines span:nth-child(3) { top: 16px; }

        .eh-mobile-toggle.open .eh-mobile-lines span:nth-child(1) {
          top: 8px;
          transform: rotate(45deg);
        }

        .eh-mobile-toggle.open .eh-mobile-lines span:nth-child(2) {
          opacity: 0;
        }

        .eh-mobile-toggle.open .eh-mobile-lines span:nth-child(3) {
          top: 8px;
          transform: rotate(-45deg);
        }

        .eh-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(26,24,20,0.985);
          backdrop-filter: blur(10px);
          overflow-y: auto;
          padding: 6.5rem 1.25rem 2rem;
        }

        .eh-mobile-inner {
          width: min(720px, 100%);
          margin: 0 auto;
        }

        .eh-mobile-section {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 1rem 0;
        }

        .eh-mobile-top-link,
        .eh-mobile-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: none;
          border: none;
          padding: 0;
          text-decoration: none;
          cursor: pointer;
          text-align: left;
          color: #fdfaf5;
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.35rem, 6vw, 2rem);
          font-weight: 400;
        }

        .eh-mobile-chevron {
          font-size: 0.95rem;
          color: rgba(253,250,245,0.6);
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .eh-mobile-chevron.open {
          transform: rotate(180deg);
        }

        .eh-mobile-submenu {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          padding: 1rem 0 0.25rem;
        }

        .eh-mobile-submenu a {
          color: rgba(253,250,245,0.62);
          text-decoration: none;
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
        }

        .eh-mobile-cta-wrap {
          padding-top: 1.5rem;
        }

        .eh-mobile-cta {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 0.95rem 1.25rem;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .eh-nav {
            padding: 1rem 1.25rem;
          }

          .eh-nav.scrolled {
            padding: 0.9rem 1.25rem;
          }

          .eh-desktop-nav {
            display: none;
          }

          .eh-mobile-toggle {
            display: inline-flex;
          }

          .eh-logo {
            font-size: 1.1rem;
            max-width: calc(100% - 64px);
          }
        }

        @media (max-width: 480px) {
          .eh-logo {
            font-size: 1rem;
            letter-spacing: 0.03em;
          }
        }
      `}</style>

      <nav className={`eh-nav ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="eh-logo" onClick={closeAllMenus}>
          Ethan Hoffman
        </Link>

        {!isMobile && (
          <div className="eh-desktop-nav">
            <Link
              href="/"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c4622d'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(253,250,245,0.82)'
              }}
            >
              Home
            </Link>

            <div ref={experienceRef} style={{ position: 'relative' }}>
              <button
                type="button"
                style={linkStyle}
                onClick={() => {
                  setExperienceOpen((o) => !o)
                  setServicesOpen(false)
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c4622d'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(253,250,245,0.82)'
                }}
              >
                Experience ▾
              </button>

              {experienceOpen && (
                <div style={dropdownStyle}>
                  <Link
                    href="/about"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    About Ethan
                  </Link>

                  <Link
                    href="/music"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    Music & Media
                  </Link>

                  <Link
                    href="/shows"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    Upcoming Shows
                  </Link>
                </div>
              )}
            </div>

            <div ref={servicesRef} style={{ position: 'relative' }}>
              <button
                type="button"
                style={linkStyle}
                onClick={() => {
                  setServicesOpen((o) => !o)
                  setExperienceOpen(false)
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c4622d'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(253,250,245,0.82)'
                }}
              >
                Services ▾
              </button>

              {servicesOpen && (
                <div style={dropdownStyle}>
                  <Link
                    href="/services"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    Weddings & Events
                  </Link>

                  <Link
                    href="/venues"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    Venues
                  </Link>

                  <Link
                    href="/repertoire"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    Repertoire
                  </Link>

                  <Link
                    href="/testimonials"
                    style={dropdownLink}
                    onClick={closeAllMenus}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c4622d'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(253,250,245,0.72)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    Testimonials
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c4622d'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(253,250,245,0.82)'
              }}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: '0.6rem 1.3rem', fontSize: '0.7rem' }}
            >
              Book Ethan
            </Link>
          </div>
        )}

        {isMobile && (
          <button
            type="button"
            className={`eh-mobile-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="eh-mobile-lines">
              <span />
              <span />
              <span />
            </div>
          </button>
        )}
      </nav>

      {menuOpen && isMobile && (
        <div className="eh-mobile-menu">
          <div className="eh-mobile-inner">
            <div className="eh-mobile-section">
              <Link href="/" className="eh-mobile-top-link" onClick={closeAllMenus}>
                <span>Home</span>
              </Link>
            </div>

            <div className="eh-mobile-section">
              <button
                type="button"
                className="eh-mobile-accordion-btn"
                onClick={() => setMobileExperienceOpen((o) => !o)}
              >
                <span>Experience</span>
                <span className={`eh-mobile-chevron ${mobileExperienceOpen ? 'open' : ''}`}>
                  ▾
                </span>
              </button>

              {mobileExperienceOpen && (
                <div className="eh-mobile-submenu">
                  <Link href="/about" onClick={closeAllMenus}>About Ethan</Link>
                  <Link href="/music" onClick={closeAllMenus}>Music & Media</Link>
                  <Link href="/shows" onClick={closeAllMenus}>Upcoming Shows</Link>
                </div>
              )}
            </div>

            <div className="eh-mobile-section">
              <button
                type="button"
                className="eh-mobile-accordion-btn"
                onClick={() => setMobileServicesOpen((o) => !o)}
              >
                <span>Services</span>
                <span className={`eh-mobile-chevron ${mobileServicesOpen ? 'open' : ''}`}>
                  ▾
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="eh-mobile-submenu">
                  <Link href="/services" onClick={closeAllMenus}>Weddings & Events</Link>
                  <Link href="/venues" onClick={closeAllMenus}>Venues</Link>
                  <Link href="/repertoire" onClick={closeAllMenus}>Repertoire</Link>
                  <Link href="/testimonials" onClick={closeAllMenus}>Testimonials</Link>
                </div>
              )}
            </div>

            <div className="eh-mobile-section">
              <Link href="/contact" className="eh-mobile-top-link" onClick={closeAllMenus}>
                <span>Contact</span>
              </Link>
            </div>

            <div className="eh-mobile-cta-wrap">
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="btn-primary eh-mobile-cta"
              >
                Book Ethan
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}