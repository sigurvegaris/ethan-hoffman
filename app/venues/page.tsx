'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const venues = [
  'The Wiltern Theatre',
  'The Magnolia Theatre',
  'The Mint',
  'The Shade Hotel Manhattan Beach',
  'Quatsch Comedy Club, Berlin, Germany',
  'The Comedy Store',
  'The Hollywood Improv',
  'Torrance Memorial Medical Center',
  'USC Welcome Back Weekend',
  'Thomson Hollywood by Hyatt',
  'Beachlife Grotto, Hilton',
  'Torrance Marriott',
  'Tower 12, Hermosa Beach',
  'The Lighthouse Cafe, Hermosa Beach',
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
]

const featuredVenues = [
    { name: 'The Wiltern Theatre', logo: '/images/wilternlogo.png', color: true },
    { name: 'The Shade Hotel', logo: null, color: false },
    { name: 'The Mint', logo: '/images/themintlogo.png', color: true },
    { name: 'The Comedy Store', logo: '/images/comedystorelogo.png', color: false },
    { name: 'The Hollywood Improv', logo: '/images/hollywoodimprovlogo.png', color: true },
    { name: 'Torrance Memorial', logo: '/images/torrancememoriallogo.png', color: false },
    { name: 'USC', logo: '/images/usclogo.png', color: false },
    { name: 'Thomson by Hyatt', logo: '/images/hyattlogo.png', color: false },
    { name: 'Hilton', logo: '/images/hiltonlogo.png', color: false },
    { name: 'Marriott', logo: '/images/marriotlogo.png', color: false },
    { name: 'The Lighthouse Cafe', logo: '/images/lighthousecafelogo.png', color: true },
    { name: 'Tower 12', logo: '/images/tower12logo.png', color: false },
  ]

export default function Venues() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#2d2926', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{
              fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
            }}>Credibility</p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1',
              marginBottom: '1rem',
            }}>Past Clients and Venues</h1>
            <p style={{
              fontSize: '0.95rem', color: 'rgba(253,250,245,0.5)',
              maxWidth: '500px', lineHeight: '1.8',
            }}>
              Over 300 performances across Los Angeles and beyond. Many of these venues were recurring bookings, some as many as 15 times.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '5rem 2rem' }}>

          {/* Featured Logo Grid */}
          <p style={{
            fontSize: '0.65rem', fontWeight: '600',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#c4622d', marginBottom: '2rem', textAlign: 'center',
          }}>Featured Venues</p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', backgroundColor: 'rgba(196,168,130,0.15)',
            border: '1px solid rgba(196,168,130,0.15)',
            marginBottom: '5rem',
          }}>
            {featuredVenues.map((venue, i) => (
              <div key={i} style={{
                backgroundColor: '#2d2926',
                padding: '2.5rem 1.5rem',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                minHeight: '120px',
                transition: 'background-color 0.3s ease',
              }}>
                {venue.logo ? (
                  <img
                    src={venue.logo}
                    alt={venue.name}
                    style={{
                        maxHeight: '65px',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: venue.color ? 'none' : 'brightness(0) invert(1)',
                        opacity: 0.75,
                        transition: 'opacity 0.3s ease',
                      }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
                  />
                ) : (
                  <p style={{
                    color: 'rgba(253,250,245,0.7)',
                    fontSize: '0.85rem', fontWeight: '500',
                    textAlign: 'center',
                    fontFamily: 'Playfair Display, serif',
                  }}>{venue.name}</p>
                )}
              </div>
            ))}
          </div>

          {/* Other Venues */}
          <div style={{
            borderTop: '1px solid rgba(196,168,130,0.2)',
            paddingTop: '3rem',
          }}>
            <p style={{
              fontSize: '0.65rem', fontWeight: '600',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c4622d', marginBottom: '2rem', textAlign: 'center',
            }}>Other Venues</p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem',
            }}>
              {venues.map((venue, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    backgroundColor: '#c4622d', flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: '0.82rem', color: 'rgba(253,250,245,0.6)', lineHeight: '1.5',
                  }}>{venue}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}