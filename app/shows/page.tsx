import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const shows = [
  {
    date: 'FEB 22',
    day: 'Sunday',
    title: 'Live in Hollywood',
    venue: 'Hollywood, CA',
    time: '8:15 PM',
    set: '30-Minute Set',
  },
  {
    date: 'FEB 24',
    day: 'Tuesday',
    title: 'Full Original Set, Redondo Beach',
    venue: 'Redondo Beach, CA',
    time: 'TBA',
    set: '90-Minute Original Set',
  },
]

export default function Shows() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#1a1814', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{
              fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
            }}>Catch Him Live</p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1',
              marginBottom: '1rem',
            }}>Upcoming Shows</h1>
            <p style={{
              fontSize: '0.95rem', color: 'rgba(253,250,245,0.5)',
              maxWidth: '500px', lineHeight: '1.8',
            }}>
              Come and experience it live. No recording can truly capture the depth and energy of Ethan's musicality in the moment.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '5rem 2rem' }}>

          {/* Shows List */}
          <div style={{
            maxWidth: '800px', margin: '0 auto',
            display: 'flex', flexDirection: 'column',
            gap: '1px',
            backgroundColor: 'rgba(196,168,130,0.15)',
            border: '1px solid rgba(196,168,130,0.15)',
            marginBottom: '4rem',
          }}>
            {shows.map((show, i) => (
              <div key={i} style={{
                backgroundColor: '#1a1814',
                padding: '2rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '2rem', alignItems: 'center',
                transition: 'background-color 0.3s ease',
              }}>
                <div style={{ textAlign: 'center', minWidth: '70px' }}>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem', fontWeight: '600',
                    color: '#c4622d', lineHeight: '1', marginBottom: '0.2rem',
                  }}>{show.date}</p>
                  <p style={{
                    fontSize: '0.65rem', color: 'rgba(253,250,245,0.4)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{show.day}</p>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.1rem', color: '#fdfaf5', marginBottom: '0.4rem',
                  }}>{show.title}</p>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(253,250,245,0.5)' }}>{show.venue}</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(253,250,245,0.5)' }}>{show.time}</p>
                    <p style={{ fontSize: '0.75rem', color: '#c4622d' }}>{show.set}</p>
                  </div>
                </div>
                <Link href="/contact" style={{
                  padding: '0.6rem 1.5rem',
                  border: '1px solid rgba(196,98,45,0.5)',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.7rem', fontWeight: '600',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap', transition: 'all 0.3s ease',
                }}>Get Info</Link>
              </div>
            ))}
          </div>

          {/* Bands in Town Placeholder */}
          <div style={{
            maxWidth: '800px', margin: '0 auto',
            padding: '2rem',
            border: '1px dashed rgba(196,168,130,0.3)',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(253,250,245,0.3)',
              marginBottom: '0.5rem',
            }}>Coming Soon</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.4)' }}>
              Bands in Town integration for ticket sales coming soon
            </p>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center', marginTop: '5rem',
            padding: '4rem 2rem',
            border: '1px solid rgba(196,168,130,0.15)',
            maxWidth: '600px', margin: '5rem auto 0',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem', color: '#fdfaf5', marginBottom: '1rem',
            }}>Want Ethan at your event?</p>
            <p style={{
              fontSize: '0.9rem', color: 'rgba(253,250,245,0.5)',
              marginBottom: '2rem', lineHeight: '1.7',
            }}>
              Private bookings and custom events available year round.
            </p>
            <Link href="/contact" className="btn-primary">Book Ethan</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}