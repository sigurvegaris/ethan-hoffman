'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Venues() {
  const featuredVenues = [
    { name: 'The Wiltern Theatre', logo: '/images/thewilternlogo.png' },
    { name: 'The Magnolia Theatre', logo: '/images/themagnolialogo.png' },
    { name: 'The Comedy Store', logo: '/images/thecomedystorelogo.png' },
    { name: 'The Hollywood Improv', logo: '/images/hollywoodimprovlogo.png' },
    { name: 'Hilton', logo: '/images/hiltonlogo.png' },
    { name: 'Marriott', logo: '/images/marriottlogo.png' },
    { name: 'Shade Hotel', logo: '/images/shadehotellogo.png' },
    { name: 'Hyatt', logo: '/images/hyattlogo.png' },
    { name: 'The Mint', logo: '/images/themintlogo.png' },
    { name: 'The Lighthouse Cafe', logo: '/images/thelighthousecafelogo.png' },
    { name: 'Torrance Memorial', logo: '/images/torrancememoriallogo.png' },
    { name: 'USC', logo: '/images/usclogo.png' },
  ]

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
          padding: 7rem 0;
        }

        .venues-intro {
          text-align: center;
          margin-bottom: 4rem;
        }

        .venues-featured-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          background-color: rgba(196,168,130,0.15);
          border: 1px solid rgba(196,168,130,0.15);
          margin-bottom: 4rem;
        }

        .venues-featured-card {
          background-color: #2d2926;
          min-height: 170px;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .venues-featured-card:hover {
          background-color: #1a1814;
        }

        .venues-logo-box {
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .venues-logo-box img {
          display: block;
          width: auto;
          height: auto;
          max-width: 82%;
          max-height: 60px;
          object-fit: contain;
          object-position: center;
          margin: 0 auto;
        }

        .venues-other-section {
          border-top: 1px solid rgba(196,168,130,0.2);
          padding-top: 3rem;
        }

        .venues-other-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.85rem 1.25rem;
        }

        .venues-other-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        @media (max-width: 1024px) {
          .venues-featured-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .venues-other-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .venues-shell {
            width: min(1200px, calc(100% - 2rem));
            padding: 5rem 0;
          }

          .venues-intro {
            margin-bottom: 3rem;
          }

          .venues-featured-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-bottom: 3rem;
          }

          .venues-featured-card {
            min-height: 120px;
            padding: 0.75rem;
          }

          .venues-logo-box {
            height: 52px;
          }

          .venues-logo-box img {
            max-width: 78%;
            max-height: 42px;
          }

          .venues-other-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .venues-shell {
            width: min(1200px, calc(100% - 1.5rem));
            padding: 4rem 0;
          }

          .venues-featured-card {
            min-height: 100px;
            padding: 0.65rem;
          }

          .venues-logo-box {
            height: 44px;
          }

          .venues-logo-box img {
            max-width: 74%;
            max-height: 34px;
          }
        }
      `}</style>

      <main className="venues-page">
        <section id="venues">
          <div className="venues-shell">
            <div className="venues-intro">
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#c4622d',
                  marginBottom: '1rem',
                }}
              >
                Featured Venues
              </p>

              <h1
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '600',
                  color: '#fdfaf5',
                  lineHeight: '1.2',
                  marginBottom: '1rem',
                }}
              >
                Past Clients and Venues
              </h1>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(253,250,245,0.5)',
                  maxWidth: '680px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                }}
              >
                Notable stages and events where Ethan has performed across Los Angeles and beyond.
              </p>
            </div>

            <div className="venues-featured-grid">
              {featuredVenues.map((venue, i) => (
                <div key={i} className="venues-featured-card">
                  <div className="venues-logo-box">
                    <img src={venue.logo} alt={venue.name} />
                  </div>
                </div>
              ))}
            </div>

            <div className="venues-other-section">
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#c4622d',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                Other Venues
              </p>

              <div className="venues-other-grid">
                {venues.map((venue, i) => (
                  <div key={i} className="venues-other-item">
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#c4622d',
                        flexShrink: 0,
                        marginTop: '0.45rem',
                      }}
                    />
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'rgba(253,250,245,0.6)',
                        lineHeight: '1.55',
                      }}
                    >
                      {venue}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}