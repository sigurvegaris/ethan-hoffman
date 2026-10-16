'use client'

import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Shows() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: 'var(--green)', minHeight: '100vh', overflowX: 'hidden' }}>
        {/* HEADER */}
        <div
          style={{
            backgroundColor: 'var(--green)',
            padding: '10rem 0 4rem',
            borderBottom: '1px solid rgba(242,236,223,0.12)',
          }}
        >
          <div className="container">
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--amber)',
                marginBottom: '1rem',
              }}
            >
              Live Performances
            </p>

            <h1
              style={{
                fontFamily: 'var(--f-display)',
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                fontWeight: '500',
                color: 'var(--cream)',
                lineHeight: '1.05',
                marginBottom: '1rem',
              }}
            >
              Upcoming <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Shows</em>
            </h1>

            <p
              style={{
                color: 'var(--cream-dim)',
                fontFamily: 'var(--f-display)',
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
              font-family: var(--f-body);
              background: transparent !important;
            }

            .bit-event {
              border-bottom: 1px solid rgba(242,236,223,0.12) !important;
              padding: 1.5rem 0 !important;
              background: transparent !important;
            }

            .bit-date {
              color: var(--amber) !important;
              font-family: var(--f-display);
            }

            .bit-venue,
            .bit-location {
              color: var(--cream-dim) !important;
            }

            .bit-offers a {
              background: var(--rust) !important;
              color: var(--cream) !important;
              border: none !important;
              border-radius: 0 !important;
              font-family: var(--f-mono);
              font-size: 0.68rem !important;
              letter-spacing: 0.15em !important;
              text-transform: uppercase !important;
              font-weight: 600 !important;
              transition: background 0.3s ease !important;
            }

            .bit-offers a:hover {
              background: #b85e2e !important;
            }

            .bit-no-events-title {
              color: var(--cream-dim) !important;
              font-family: var(--f-display);
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
  data-artist-id="15553686"
  data-display-local-dates="false"
  data-display-past-dates="false"
  data-auto-style="false"
  data-text-color="#f2ecdf"
  data-link-color="#d2703a"
  data-background-color="transparent"
  data-display-limit="10"
  data-link-text-color="#f2ecdf"
  data-language="en"
  data-popup-background-color="#1f261c"
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
            borderTop: '1px solid rgba(242,236,223,0.12)',
            paddingTop: '4rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '1rem',
            }}
          >
            Stay in the Loop
          </p>

          <h2
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'var(--cream)',
              marginBottom: '1rem',
            }}
          >
            Want Ethan at your event?
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--cream-dim)',
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
                border: '1px solid rgba(242,236,223,0.3)',
                color: 'var(--cream)',
                textDecoration: 'none',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'var(--f-mono)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'var(--amber)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(242,236,223,0.3)')
              }
            >
              Follow on Instagram
            </a>

            <Link
              href="/contact"
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: 'var(--rust)',
                color: 'var(--cream)',
                textDecoration: 'none',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'var(--f-mono)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#b85e2e')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--rust)')
              }
            >
              Book a Private Show
            </Link>
          </div>
        </div>
      </main>
      {/* Fix Free button redirect */}
      <Script
  id="bit-fix"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      function fixFreeButtons() {
        const allLinks = document.querySelectorAll('.bit-offers a, .bit-event a, #bit-widget-container a');
        allLinks.forEach(function(link) {
          const text = (link.innerText || link.textContent || '').trim().toLowerCase();
          if (text === 'free' || text === 'free event' || link.className.includes('free')) {
            link.removeAttribute('href');
            link.onclick = function(e) {
              e.preventDefault();
              e.stopImmediatePropagation();
              window.open('https://www.bandsintown.com/a/15553686-ethan-hoffman', '_blank');
              return false;
            };
          }
        });
      }

      setTimeout(fixFreeButtons, 1500);
      setTimeout(fixFreeButtons, 3000);
      setTimeout(fixFreeButtons, 5000);
    `,
  }}
/>

      <Footer />

      <Script
        src="https://widget.bandsintown.com/main.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}
