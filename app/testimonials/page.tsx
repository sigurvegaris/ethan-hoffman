'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const testimonials = [
  {
    quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform, he transformed the atmosphere completely.",
    name: 'Sarah and James K.',
    event: 'Wedding Reception, The Shade Hotel, Manhattan Beach',
  },
  {
    quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
    name: 'Michelle T.',
    event: 'Corporate Event, Renaissance LAX Hotel',
  },
  {
    quote: "I booked Ethan for my husband's surprise 50th birthday and he absolutely delivered. He learned a few of our favorite songs specifically for the night, improvised with guests, and had everyone on their feet. It was magical.",
    name: 'Diana R.',
    event: 'Private Party, Marina Del Rey',
  },
  {
    quote: "What sets Ethan apart is how present he is. He's not just playing songs, he's genuinely connecting with every person in the room. Our cocktail hour felt like a private concert. Our guests are still talking about it.",
    name: 'Lauren and Chris M.',
    event: 'Wedding Cocktail Hour, Torrance Marriott',
  },
  {
    quote: 'Ethan performed at our fundraiser and elevated the entire evening. He was professional, punctual, and incredibly warm with our guests. We will absolutely be booking him again for future events.',
    name: 'Dr. Amanda S.',
    event: 'Private Fundraiser, Torrance Memorial Medical Center',
  },
  {
    quote: "I've seen a lot of live performers in this city. Ethan is the real deal. His voice gives you chills and his stage presence is completely natural. Booking him was the best decision we made for our event.",
    name: 'Cory L.',
    event: 'Private Event, Hollywood, CA',
  },
]

export default function Testimonials() {
  return (
    <>
      <Navbar />

      <style>{`
        .testimonials-page {
          background-color: #f5f0e8;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .testimonials-hero {
          background-color: #1a1814;
          padding: 8rem 0 5rem;
        }

        .testimonials-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 5rem 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .testimonial-card {
          padding: 2.25rem;
          background-color: #fff;
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
          height: 100%;
        }

        .pull-quote {
          padding: 4rem;
          background-color: #1a1814;
          text-align: center;
          margin-bottom: 4rem;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .testimonials-hero {
            padding: 7rem 0 3rem;
          }

          .testimonials-shell {
            width: min(1200px, calc(100% - 2rem));
            padding: 4rem 0;
          }

          .testimonial-card {
            padding: 1.5rem;
          }

          .pull-quote {
            padding: 2.25rem 1.5rem;
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-hero {
            padding: 6.5rem 0 2.5rem;
          }

          .testimonials-shell {
            width: min(1200px, calc(100% - 1.5rem));
          }

          .testimonial-card {
            padding: 1.25rem;
          }

          .pull-quote {
            padding: 2rem 1.1rem;
          }
        }
      `}</style>

      <main className="testimonials-page">
        <div className="testimonials-hero">
          <div className="container">
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#c4622d',
                marginBottom: '1rem',
              }}
            >
              Kind Words
            </p>

            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '600',
                color: '#fdfaf5',
                lineHeight: '1.1',
              }}
            >
              People who have trusted the work
            </h1>
          </div>
        </div>

        <div className="testimonials-shell">
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p
                  style={{
                    fontSize: '2rem',
                    color: '#c4622d',
                    fontFamily: 'Playfair Display, serif',
                    opacity: 0.4,
                    lineHeight: '1',
                    marginBottom: '1rem',
                  }}
                >
                  "
                </p>

                <p
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: '#2d2926',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem',
                  }}
                >
                  {t.quote}
                </p>

                <p
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#1a1814',
                    marginBottom: '0.2rem',
                  }}
                >
                  {t.name}
                </p>

                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#c4622d',
                    letterSpacing: '0.05em',
                    lineHeight: '1.5',
                  }}
                >
                  {t.event}
                </p>
              </div>
            ))}
          </div>

          <div className="pull-quote">
            <p
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                fontStyle: 'italic',
                color: '#fdfaf5',
                lineHeight: '1.6',
                fontWeight: '400',
              }}
            >
              "Ethan had the entire room silent within seconds."
            </p>

            <p
              style={{
                marginTop: '1rem',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c4622d',
                lineHeight: '1.5',
              }}
            >
              Venue Manager, The Wiltern Theatre
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem',
                color: '#1a1814',
                marginBottom: '1rem',
              }}
            >
              Ready to create your own experience?
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#6b6460',
                marginBottom: '2rem',
                lineHeight: '1.7',
              }}
            >
              Ethan responds to every inquiry within 24 hours.
            </p>

            <Link href="/contact" className="btn-primary">
              Book Ethan
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}