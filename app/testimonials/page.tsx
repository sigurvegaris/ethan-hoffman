import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const testimonials = [
  {
    quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform, he transformed the atmosphere completely.",
    name: "Sarah and James K.",
    event: "Wedding Reception, The Shade Hotel, Manhattan Beach",
  },
  {
    quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
    name: "Michelle T.",
    event: "Corporate Event, Renaissance LAX Hotel",
  },
  {
    quote: "I booked Ethan for my husband's surprise 50th birthday and he absolutely delivered. He learned a few of our favorite songs specifically for the night, improvised with guests, and had everyone on their feet. It was magical.",
    name: "Diana R.",
    event: "Private Party, Marina Del Rey",
  },
  {
    quote: "What sets Ethan apart is how present he is. He's not just playing songs, he's genuinely connecting with every person in the room. Our cocktail hour felt like a private concert. Our guests are still talking about it.",
    name: "Lauren and Chris M.",
    event: "Wedding Cocktail Hour, Torrance Marriott",
  },
  {
    quote: "Ethan performed at our fundraiser and elevated the entire evening. He was professional, punctual, and incredibly warm with our guests. We will absolutely be booking him again for future events.",
    name: "Dr. Amanda S.",
    event: "Private Fundraiser, Torrance Memorial Medical Center",
  },
  {
    quote: "I've seen a lot of live performers in this city. Ethan is the real deal. His voice gives you chills and his stage presence is completely natural. Booking him was the best decision we made for our event.",
    name: "Cory L.",
    event: "Private Event, Hollywood, CA",
  },
]

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{
              fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
            }}>Kind Words</p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1',
            }}>People who have trusted the work</h1>
          </div>
        </div>

        <div className="container" style={{ padding: '5rem 2rem' }}>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem', marginBottom: '5rem',
          }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                padding: '3rem', backgroundColor: '#fff',
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
              }}>
                <p style={{
                  fontSize: '2rem', color: '#c4622d',
                  fontFamily: 'Playfair Display, serif',
                  opacity: 0.4, lineHeight: '1', marginBottom: '1rem',
                }}>"</p>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1rem', fontStyle: 'italic',
                  color: '#2d2926', lineHeight: '1.8', marginBottom: '1.5rem',
                }}>{t.quote}</p>
                <p style={{
                  fontSize: '0.85rem', fontWeight: '600',
                  color: '#1a1814', marginBottom: '0.2rem',
                }}>{t.name}</p>
                <p style={{
                  fontSize: '0.75rem', color: '#c4622d',
                  letterSpacing: '0.05em',
                }}>{t.event}</p>
              </div>
            ))}
          </div>

          {/* Pull Quote */}
          <div style={{
            padding: '4rem', backgroundColor: '#1a1814', textAlign: 'center',
            marginBottom: '4rem',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontStyle: 'italic', color: '#fdfaf5',
              lineHeight: '1.6', fontWeight: '400',
            }}>
              "Ethan had the entire room silent within seconds."
            </p>
            <p style={{
              marginTop: '1rem', fontSize: '0.7rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d',
            }}>Venue Manager, The Wiltern Theatre</p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem', color: '#1a1814', marginBottom: '1rem',
            }}>Ready to create your own experience?</p>
            <p style={{
              fontSize: '0.9rem', color: '#6b6460',
              marginBottom: '2rem', lineHeight: '1.7',
            }}>
              Ethan responds to every inquiry within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary">Book Ethan</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}