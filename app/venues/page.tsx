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
  { name: 'The Wiltern Theatre', note: 'Logo PNG' },
  { name: 'The Shade Hotel', note: 'Logo PNG' },
  { name: 'The Mint', note: 'Logo PNG' },
  { name: 'The Comedy Store', note: 'Logo PNG' },
  { name: 'The Hollywood Improv', note: 'Logo PNG' },
  { name: 'Torrance Memorial', note: 'Logo PNG' },
  { name: 'USC', note: 'Logo PNG' },
  { name: 'Thomson by Hyatt', note: 'Logo PNG' },
  { name: 'Hilton', note: 'Logo PNG' },
  { name: 'Marriott', note: 'Logo PNG' },
  { name: 'The Lighthouse Cafe', note: 'Logo PNG' },
  { name: 'Tower 12', note: 'Logo PNG' },
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
                padding: '2.5rem 1rem',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem', minHeight: '120px',
                transition: 'background-color 0.3s ease',
              }}>
                <p style={{
                  color: 'rgba(253,250,245,0.7)',
                  fontSize: '0.85rem', fontWeight: '500',
                  textAlign: 'center',
                  fontFamily: 'Playfair Display, serif',
                }}>{venue.name}</p>
                <p style={{
                  color: 'rgba(196,98,45,0.6)',
                  fontSize: '0.6rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>{venue.note}</p>
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