'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const featuredVenues = [
  // Row 1 — highest profile
  { name: 'The Wiltern', logo: '/images/thewilternlogo.png', color: true, size: 65 },
  { name: 'Hollywood Improv', logo: '/images/hollywoodimprovlogo.png', color: true, size: 65 },
  { name: 'Magnolia Theater', logo: '/images/themagnolialogo.png', color: true, size: 65 },
  { name: 'The Comedy Store', logo: '/images/thecomedystorelogo.png', color: true, size: 65 },
  // Row 2
  { name: 'Hilton', logo: '/images/hiltonlogo.png', color: true, size: 65 },
  { name: 'Marriott', logo: '/images/marriotlogo.png', color: false, size: 65 },
  { name: 'The Shade Hotel', logo: '/images/shadelogo.png', color: false, size: 65 },
  { name: 'Hyatt', logo: '/images/hyattlogo.png', color: false, size: 65 },
  // Row 3
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

function VenueTile({ venue }: { venue: { name: string; logo: string | null; color: boolean; size: number } }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#3a3530' : '#2d2926',
        padding: '2.5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '160px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease',
        cursor: 'default',
      }}>

      {/* Logo */}
      <div style={{
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: hovered ? 0 : 1,
        transform: hovered ? 'scale(0.92)' : 'scale(1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%',
      }}>
        {venue.logo ? (
          <img
            src={venue.logo}
            alt={venue.name}
            style={{
              maxHeight: `${venue.size}px`,
              maxWidth: '170px',
              objectFit: 'contain',
              filter: venue.color ? 'none' : 'brightness(0) invert(1)',
              opacity: 1,
            }}
          />
        ) : (
          <p style={{
            color: 'rgba(253,250,245,0.65)',
            fontSize: '0.9rem',
            fontWeight: '500',
            textAlign: 'center',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '0.03em',
          }}>{venue.name}</p>
        )}
      </div>

      {/* Hover name overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        padding: '1rem',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <div style={{
          width: '20px', height: '1px',
          backgroundColor: '#c4622d',
          marginBottom: '0.4rem',
        }} />
        <p style={{
          color: '#fdfaf5',
          fontSize: '0.78rem',
          fontWeight: '600',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
        }}>{venue.name}</p>
      </div>
    </div>
  )
}

export default function Venues() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#2d2926', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Credibility</p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1rem' }}>Past Clients & Venues</h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,245,0.5)', maxWidth: '500px', lineHeight: '1.8' }}>
              Over 300 performances across Los Angeles and beyond. Many of these venues were recurring bookings, some as many as 15 times.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '5rem 2rem' }}>

          {/* Featured Logo Grid */}
          <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem', textAlign: 'center' }}>Featured Venues</p>
<p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(253,250,245,0.35)', textAlign: 'center', marginBottom: '2rem' }}>
  Notable stages and events where Ethan has performed across Los Angeles and beyond.
</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(196,168,130,0.12)',
            border: '1px solid rgba(196,168,130,0.12)',
            marginBottom: '5rem',
          }}>
            {featuredVenues.map((venue, i) => (
              <VenueTile key={i} venue={venue} />
            ))}
          </div>

          {/* Other Venues */}
          <div style={{ borderTop: '1px solid rgba(196,168,130,0.2)', paddingTop: '3rem' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem', textAlign: 'center' }}>More Venues</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(253,250,245,0.35)', textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
              A selection of notable venues where Ethan has performed — many as recurring bookings.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {otherVenues.map((venue, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c4622d', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.82rem', color: 'rgba(253,250,245,0.6)', lineHeight: '1.5' }}>{venue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(196,168,130,0.2)' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontStyle: 'italic', color: 'rgba(253,250,245,0.5)', marginBottom: '1.5rem' }}>
              Adding a new venue to the list?
            </p>
            <a href="/contact" className="btn-primary">
              Inquire About Your Venue
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
