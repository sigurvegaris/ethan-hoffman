'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const featuredVenues = [
  { name: 'The Wiltern', logo: '/images/thewilternlogo.png', color: true, size: 65 },
  { name: 'Hollywood Improv', logo: '/images/hollywoodimprovlogo.png', color: true, size: 65 },
  { name: 'Magnolia Theater', logo: '/images/themagnolialogo.png', color: true, size: 65 },
  { name: 'The Comedy Store', logo: '/images/thecomedystorelogo.png', color: true, size: 65 },
  { name: 'Hilton', logo: '/images/hiltonlogo.png', color: true, size: 65 },
  { name: 'Marriott', logo: '/images/marriotlogo.png', color: false, size: 65 },
  { name: 'The Shade Hotel', logo: '/images/shadelogo.png', color: false, size: 65 },
  { name: 'Hyatt', logo: '/images/hyattlogo.png', color: false, size: 65 },
  { name: 'The Mint', logo: '/images/themintlogo.png', color: false, size: 150 },
  { name: 'The Lighthouse Cafe', logo: '/images/lighthousecafelogo.png', color: true, size: 100 },
  { name: 'Torrance Memorial', logo: '/images/torrancememoriallogo.png', color: false, size: 110 },
  { name: 'USC', logo: '/images/usclogo.png', color: false, size: 90 },
]

const otherVenues = [
  'Tower 12',
  'Belle Epoque, Redondo Beach',
  'Jamaica Bay Inn, Marina Del Rey',
  'Renaissance LAX Hotel',
  'Freehand Hotel',
  'Harvard and Stone, Hollywood',
  "Henry's at Waterfront Hilton",
  'Renaissance ClubSport Aliso Viejo',
  'Bella Terra Huntington Beach',
  'Project Barley, Redondo Beach',
  'Employees Only',
  'Durango Cantina',
  'Coffee Cartel, Redondo Beach',
  'Quatsch Comedy Club, Berlin',
]

interface Venue {
  name: string
  logo: string
  color: boolean
  size: number
}

function VenueTile({ venue }: { venue: Venue }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="venue-tile"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ backgroundColor: hovered ? '#3a3530' : '#2d2926' }}
    >
      <div
        className="venue-logo-wrap"
        style={{
          opacity: hovered ? 0 : 1,
          transform: hovered ? 'scale(0.94)' : 'scale(1)',
        }}
      >
        {venue.logo ? (
          <img
            src={venue.logo}
            alt={venue.name}
            className="venue-logo"
            style={{
              maxHeight: `${venue.size}px`,
              filter: venue.color ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        ) : (
          <p
            style={{
              color: 'rgba(253,250,245,0.65)',
              fontSize: '0.9rem',
              fontWeight: '500',
              textAlign: 'center',
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.03em',
            }}
          >
            {venue.name}
          </p>
        )}
      </div>

      <div
        className="venue-hover-overlay"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        }}
      >
        <div style={{ width: '20px', height: '1px', backgroundColor: '#c4622d', marginBottom: '0.4rem' }} />
        <p
          style={{
            color: '#fdfaf5',
            fontSize: '0.78rem',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.4',
          }}
        >
          {venue.name}
        </p>
      </div>
    </div>
  )
}

export default function Venues() {
  return (
    <>
      <Navbar />

      <style>{`
        .venues-page {
          background-color: #2d2926;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .venues-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 5rem 0;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          background-color: rgba(196,168,130,0.12);
          border: 1px solid rgba(196,168,130,0.12);
          margin-bottom: 5rem;
        }

        .venue-tile {
          position: relative;
          overflow: hidden;
          min-height: 160px;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          transition: background-color 0.3s ease;
        }

        .venue-logo-wrap {
          width: 100%;
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .venue-logo {
          display: block;
          width: auto;
          height: auto;
          max-width: 82%;
          object-fit: contain;
          object-position: center;
          margin: 0 auto;
        }

        .venue-hover-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .other-venues-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem 1rem;
        }

        .other-venue-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .other-venues-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .venues-shell {
            width: min(1200px, calc(100% - 2rem));
            padding: 4rem 0;
          }

          .featured-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-bottom: 3.5rem;
          }

          .venue-tile {
            min-height: 120px;
            padding: 0.75rem;
          }

          .venue-logo-wrap {
            height: 54px;
          }

          .venue-logo {
            max-width: 76%;
          }

          .other-venues-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .venues-shell {
            width: min(1200px, calc(100% - 1.5rem));
          }

          .venue-tile {
            min-height: 104px;
            padding: 0.6rem;
          }

          .venue-logo-wrap {
            height: 42px;
          }

          .venue-logo {
            max-width: 72%;
          }

          .venue-hover-overlay p {
            font-size: 0.68rem !important;
            letter-spacing: 0.08em !important;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          .venue-hover-overlay {
            display: none;
          }

          .venue-logo-wrap {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <main className="venues-page">
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{
              fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
            }}>
              Credibility
            </p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1rem',
            }}>
              Past Clients & Venues
            </h1>
            <p style={{
              fontSize: '0.95rem', color: 'rgba(253,250,245,0.5)',
              maxWidth: '500px', lineHeight: '1.8',
            }}>
              Over 300 performances across Los Angeles and beyond. Many of these venues were recurring bookings, some as many as 15 times.
            </p>
          </div>
        </div>

        <div className="venues-shell">
          <p style={{
            fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem', textAlign: 'center',
          }}>
            Featured Venues
          </p>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic',
            color: 'rgba(253,250,245,0.35)', textAlign: 'center', marginBottom: '2rem',
          }}>
            Notable stages and events where Ethan has performed across Los Angeles and beyond.
          </p>

          <div className="featured-grid">
            {featuredVenues.map((venue, i) => (
              <VenueTile key={i} venue={venue} />
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(196,168,130,0.2)', paddingTop: '3rem' }}>
            <p style={{
              fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem', textAlign: 'center',
            }}>
              More Venues
            </p>

            <p style={{
              color: 'rgba(253,250,245,0.35)', textAlign: 'center', marginBottom: '2rem',
              fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem',
            }}>
              A selection of notable venues where Ethan has performed — many as recurring bookings.
            </p>

            <div className="other-venues-grid">
              {otherVenues.map((venue, i) => (
                <div key={i} className="other-venue-item">
                  <div style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    backgroundColor: '#c4622d', flexShrink: 0, marginTop: '0.45rem',
                  }} />
                  <p style={{ fontSize: '0.82rem', color: 'rgba(253,250,245,0.6)', lineHeight: '1.5' }}>
                    {venue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            textAlign: 'center', marginTop: '4rem',
            paddingTop: '3rem', borderTop: '1px solid rgba(196,168,130,0.2)',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem',
              fontStyle: 'italic', color: 'rgba(253,250,245,0.5)', marginBottom: '1.5rem',
            }}>
              Adding a new venue to the list?
            </p>
            <Link href="/contact" className="btn-primary">
              Inquire About Your Venue
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}