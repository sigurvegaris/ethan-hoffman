'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Shows() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#1a1814', minHeight: '100vh' }}>

        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Catch Him Live</p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1' }}>Upcoming Shows</h1>
          </div>
        </div>

        <div className="container" style={{ padding: '0 2rem 8rem' }}>
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '5rem 2rem',
            border: '1px solid rgba(196,168,130,0.15)',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem',
              color: '#fdfaf5',
              marginBottom: '1rem',
            }}>No shows currently scheduled</p>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(253,250,245,0.4)',
              lineHeight: '1.8',
              marginBottom: '2.5rem',
              maxWidth: '450px',
              margin: '0 auto 2.5rem',
            }}>
              Follow Ethan on Instagram or TikTok to be the first to know about upcoming performances, or get in touch directly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/ethanbhoffman/" target="_blank" rel="noopener noreferrer" style={{
                padding: '0.85rem 2rem',
                border: '1px solid rgba(196,168,130,0.3)',
                color: '#fdfaf5', textDecoration: 'none',
                fontSize: '0.7rem', fontWeight: '600',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c4622d'; e.currentTarget.style.color = '#c4622d' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(196,168,130,0.3)'; e.currentTarget.style.color = '#fdfaf5' }}>
                Follow on Instagram
              </a>
              <a href="/contact" style={{
                padding: '0.85rem 2rem',
                backgroundColor: '#c4622d',
                color: '#fdfaf5', textDecoration: 'none',
                fontSize: '0.7rem', fontWeight: '600',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a8521f')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c4622d')}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}