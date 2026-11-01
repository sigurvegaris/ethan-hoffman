import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VenueGrid from '../components/VenueGrid'

export default function Venues() {
  return (
    <>
      <Navbar />
      <style>{`
        .venues-page { background-color: var(--green); min-height: 100vh; overflow-x: hidden; }
        .venues-shell { width: min(1200px, calc(100% - 3rem)); margin: 0 auto; padding: 5rem 0; }
        .venues-note { max-width: 46ch; margin: 2rem auto 0; text-align: center; font-family: var(--f-display); font-style: italic; font-size: 1.1rem; line-height: 1.5; color: var(--cream-dim); }
        @media (max-width: 768px) {
          .venues-shell { width: calc(100% - 2rem); padding: 3.5rem 0; }
          .venues-hero { padding: 8.5rem 0 3rem !important; }
        }
      `}</style>

      <main className="venues-page">
        <div className="venues-hero" style={{ backgroundColor: 'var(--green)', padding: '10rem 0 4rem', borderBottom: '1px solid rgba(242,236,223,0.12)' }}>
          <div className="container">
            <p style={{ fontFamily: 'var(--f-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '1rem' }}>
              Credibility
            </p>
            <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: '500', color: 'var(--cream)', lineHeight: '1.05', marginBottom: '1rem' }}>
              Past Clients & <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Venues</em>
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-dim)', maxWidth: '500px', lineHeight: '1.8' }}>
              Over 300 performances across Los Angeles and beyond. Many of these venues were recurring bookings, some as many as 15 times.
            </p>
          </div>
        </div>

        <div className="venues-shell">
          <VenueGrid />
          <p className="venues-note">
            This is just a preview. Many venues aren&apos;t listed here, and it doesn&apos;t include the private and corporate events he&apos;s played, which are private by nature.
          </p>

          <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(242,236,223,0.12)' }}>
            <p style={{ fontFamily: 'var(--f-display)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '1.5rem' }}>
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
