'use client'

import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Shows() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: '#1a1814', minHeight: '100vh' }}>
        {/* HEADER */}
        <div
          style={{
            backgroundColor: '#1a1814',
            padding: '8rem 0 4rem',
            borderBottom: '1px solid rgba(196,168,130,0.1)',
          }}
        >
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
              Live Performances
            </p>

            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '600',
                color: '#fdfaf5',
                lineHeight: '1.1',
                marginBottom: '1rem',
              }}
            >
              Upcoming Shows
            </h1>

            <p
              style={{
                color: 'rgba(253,250,245,0.5)',
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.2rem',
              }}
            >
              Catch Ethan live — tickets and details below
            </p>
          </div>
        </div>

        {/* BANDSINTOWN WIDGET */}
        <div className="container" style={{ padding: '5rem 2rem' }}>
          <style>{`
            #bit-widget-container {
              width: 100%;
            }

            .bit-widget {
              font-family: Inter, sans-serif !important;
              background: transparent !important;
            }

            .bit-event {
              border-bottom: 1px solid rgba(196,168,130,0.12) !important;
              padding: 1.5rem 0 !important;
              background: transparent !important;
            }

            .bit-date {
              color: #c4622d !important;
              font-family: 'Playfair Display', serif !important;
            }

            .bit-venue,
            .bit-location {
              color: rgba(253,250,245,0.7) !important;
            }

            .bit-offers a {
              background: #c4622d !important;
              border: none !important;
              border-radius: 0 !important;
              font-family: Inter, sans-serif !important;
              font-size: 0.68rem !important;
              letter-spacing: 0.15em !important;
              text-transform: uppercase !important;
              font-weight: 600 !important;
              transition: background 0.3s ease !important;
            }

            .bit-offers a:hover {
              background: #a8521f !important;
            }

            .bit-no-events-title {
              color: rgba(253,250,245,0.5) !important;
              font-family: 'Playfair Display', serif !important;
              font-size: 1.5rem !important;
            }

            .bit-follow-section {
              display: none !important;
            }
          `}</style>

          <div id="bit-widget-container">
            <div
              className="bit-widget-initializer"
              data-artist-name="Ethan Hoffman"
              data-display-local-dates="false"
              data-display-past-dates="false"
              data-auto-style="false"
              data-text-color="#fdfaf5"
              data-link-color="#c4622d"
              data-background-color="transparent"
              data-display-limit="10"
              data-link-text-color="#ffffff"
              data-language="en"
              data-popup-background-color="#1a1814"
              data-display-lineup="false"
              data-display-start-time="false"
              data-share-on-social-media="false"
            />
          </div>
        </div>

        {/* NO SHOWS FALLBACK CTA */}
        <div
          className="container"
          style={{
            padding: '0 2rem 6rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(196,168,130,0.1)',
            paddingTop: '4rem',
          }}
        >
          <p
            style={{
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c4622d',
              marginBottom: '1rem',
            }}
          >
            Stay in the Loop
          </p>

          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: '400',
              fontStyle: 'italic',
              color: '#fdfaf5',
              marginBottom: '1rem',
            }}
          >
            Want Ethan at your event?
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'rgba(253,250,245,0.5)',
              maxWidth: '480px',
              margin: '0 auto 2rem',
            }}
          >
            Follow on Instagram for real-time updates, or get in touch to book a
            private performance.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.instagram.com/ethanhoffmanofficial/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.85rem 2rem',
                border: '1px solid rgba(196,168,130,0.3)',
                color: '#fdfaf5',
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = '#c4622d')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(196,168,130,0.3)')
              }
            >
              Follow on Instagram
            </a>

            <Link
              href="/contact"
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: '#c4622d',
                color: '#fdfaf5',
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#a8521f')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#c4622d')
              }
            >
              Book a Private Show
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <Script
        src="https://widget.bandsintown.com/main.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}
