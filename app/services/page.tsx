'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    id: 'weddings',
    label: 'Weddings',
    headline: 'The Soundtrack to Your Most Important Day',
    description: `Your wedding deserves music that feels as personal as the moment itself. Ethan brings a warm, soulful energy to every part of your celebration, from the ceremony to the last dance. He works closely with each couple to understand the vibe, the story, and the songs that matter most, then delivers a performance that feels completely tailored to you.`,
    details: [
      'Wedding ceremonies and processionals',
      'Cocktail hour and reception',
      'Custom song arrangements',
      'Background and interactive sets',
      'Full sound system included',
    ],
    photo: '/images/ethanwithguitar.jpg',
    objectPosition: 'center bottom',
  },
  {
    id: 'private',
    label: 'Private Events',
    headline: 'Elevate Your Private Event with Live Music',
    description: `Whether it's an intimate dinner party, a milestone birthday, or an upscale celebration, Ethan is highly skilled at reading a room and shaping the musical flow to fit the moment perfectly. With an extensive repertoire of well-known cover songs and the ability to create custom pieces on the spot, every performance feels fresh and connected to the occasion.`,
    details: [
      'Birthday and anniversary parties',
      'Holiday and seasonal events',
      'Dinner parties and galas',
      'Exclusive and high-end private events',
      'Flexible set lengths and styles',
    ],
    photo: '/images/ethanthreeguys.jpg',
    objectPosition: 'center top',
  },
  {
    id: 'corporate',
    label: 'Corporate Events',
    headline: 'Professional Entertainment That Leaves an Impression',
    description: `Ethan has performed for major brands, fundraisers, and corporate functions across Los Angeles. He brings professionalism, polish, and a crowd-connecting energy that transforms a standard corporate event into something people actually talk about afterward.`,
    details: [
      'Corporate functions and galas',
      'Brand activations and launches',
      'Fundraisers and charity events',
      'University and institutional events',
      'Networking and cocktail receptions',
    ],
    photo: '/images/ethanwithcrowd.jpg',
    objectPosition: 'center top',
  },
  {
    id: 'originals',
    label: 'Original Music',
    headline: 'Music Written From Real Life',
    description: `Beyond covers and events, Ethan is a recording artist with original music on Spotify and all major streaming platforms. His songs pull from real experiences: California living, chasing stages across the world, the tension between dreaming big and staying grounded.`,
    details: [
      'Original singles on Spotify and Apple Music',
      'Songwriter and co-writing sessions',
      'Sync and licensing opportunities',
      '70s and 80s inspired soul sound',
      'Live original music sets',
    ],
    photo: '/images/ethansoloshot.jpg',
    objectPosition: 'center top',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <>
      <Navbar />

      <style>{`
        .services-page {
          background-color: #f5f0e8;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .services-hero {
          background-color: #f5f0e8;
          padding: 8rem 0 5rem;
        }

        .services-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding-bottom: 6rem;
        }

        .services-tabs {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.5rem;
          align-items: stretch;
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(196,168,130,0.4);
          width: 100%;
        }

        .services-tab {
          width: 100%;
          min-width: 0;
          background: none;
          border: none;
          padding: 1rem 0.75rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          color: #6b6460;
          font-family: Inter, sans-serif;
          text-align: center;
          line-height: 1.45;
          white-space: normal;
          word-break: keep-all;
          overflow-wrap: normal;
          hyphens: none;
          border-bottom: 2px solid transparent;
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .services-tab:hover { color: #c4622d; }
        .services-tab.active { color: #c4622d; border-bottom: 2px solid #c4622d; }

        .services-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .services-image-wrap {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd3c8;
        }

        .services-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.4s ease;
        }

        .services-details { margin-bottom: 2.5rem; }

        .services-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.8rem;
        }

        @media (max-width: 1024px) {
          .services-content { grid-template-columns: 1fr; gap: 2.5rem; }
          .services-copy { order: 2; }
          .services-media { order: 1; }
        }

        @media (max-width: 900px) {
          .services-tabs {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-bottom: 2.5rem;
          }
          .services-tab { font-size: 0.66rem; letter-spacing: 0.06em; padding: 1rem 0.75rem; }
        }

        @media (max-width: 768px) {
          .services-hero { padding: 7rem 0 3rem; }
          .services-shell { width: min(1200px, calc(100% - 2rem)); padding-bottom: 4rem; }
          .services-image-wrap { aspect-ratio: 4 / 4.5; }
          .services-details { margin-bottom: 2rem; }
        }

        @media (max-width: 480px) {
          .services-hero { padding: 6.5rem 0 2.5rem; }
          .services-shell { width: min(1200px, calc(100% - 1.5rem)); }
          .services-tab { font-size: 0.64rem; letter-spacing: 0.05em; padding: 0.9rem 0.55rem; }
        }
      `}</style>

      <main className="services-page">
        <div className="services-hero">
          <div className="container">
            <p style={{
              fontSize: '0.7rem',
              fontWeight: '600',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c4622d',
              marginBottom: '1rem',
            }}>
              What Ethan Offers
            </p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600',
              color: '#1a1814',
              lineHeight: '1.1',
            }}>
              Every Event, Elevated
            </h1>
          </div>
        </div>

        <div className="services-shell">
          <div className="services-tabs">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`services-tab ${active === i ? 'active' : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="services-content">
            <div className="services-copy">
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '600',
                color: '#1a1814',
                lineHeight: '1.3',
                marginBottom: '1.5rem',
              }}>
                {services[active].headline}
              </h3>

              <p style={{
                fontSize: '1rem',
                lineHeight: '1.85',
                color: '#6b6460',
                marginBottom: '2rem',
              }}>
                {services[active].description}
              </p>

              <div className="services-details">
                {services[active].details.map((d, i) => (
                  <div key={i} className="services-detail-item">
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#c4622d',
                      flexShrink: 0,
                      marginTop: '0.45rem',
                    }} />
                    <p style={{ fontSize: '0.9rem', color: '#2d2926', lineHeight: '1.55' }}>
                      {d}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Book Ethan
              </Link>
            </div>

            <div className="services-media">
              <div className="services-image-wrap">
                <img
                  src={services[active].photo}
                  alt={services[active].label}
                  className="services-image"
                  style={{ objectPosition: services[active].objectPosition }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}