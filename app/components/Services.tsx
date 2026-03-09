'use client'
import { useState } from 'react'

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
    photo: 'Ethan performing at elegant wedding reception',
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
    photo: 'Ethan performing at intimate private party',
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
    photo: 'Ethan performing at corporate event',
  },
  {
    id: 'originals',
    label: 'Original Music',
    headline: 'Music Written From Real Life',
    description: `Beyond covers and events, Ethan is a recording artist with original music on Spotify and all major streaming platforms. His songs pull from real experiences: California living, traveling abroad with nothing but a guitar, the tension between chasing a dream and staying grounded. Soulful, honest, and deeply personal.`,
    details: [
      'Original singles on Spotify and Apple Music',
      'Songwriter and co-writing sessions',
      'Sync and licensing opportunities',
      '70s and 80s inspired soul sound',
      'Live original music sets',
    ],
    photo: 'Ethan in studio or intimate original performance',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" style={{
      backgroundColor: '#f5f0e8',
      padding: '7rem 0',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>What Ethan Offers</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '600',
            color: '#1a1814',
            lineHeight: '1.2',
          }}>
            Every Event, Elevated
          </h2>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0',
          marginBottom: '4rem',
          borderBottom: '1px solid rgba(196,168,130,0.4)',
          flexWrap: 'wrap',
        }}>
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: 'none',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                color: active === i ? '#c4622d' : '#6b6460',
                borderBottom: active === i ? '2px solid #c4622d' : '2px solid transparent',
                marginBottom: '-1px',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* Left — Text */}
          <div>
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

            <div style={{ marginBottom: '2.5rem' }}>
              {services[active].details.map((d, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#c4622d',
                    flexShrink: 0,
                  }} />
                  <p style={{ fontSize: '0.9rem', color: '#2d2926' }}>{d}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Book Ethan</a>
          </div>

          {/* Right — Photo Placeholder */}
          <div style={{
            aspectRatio: '4/3',
            backgroundColor: '#2d2926',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.75rem',
            padding: '2rem',
          }}>
            <p style={{
              color: 'rgba(253,250,245,0.2)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>Photo Placeholder</p>
            <p style={{
              color: 'rgba(253,250,245,0.4)',
              fontSize: '0.85rem',
              textAlign: 'center',
            }}>{services[active].photo}</p>
          </div>

        </div>
      </div>
    </section>
  )
}