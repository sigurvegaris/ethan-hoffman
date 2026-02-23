'use client'
import { useState } from 'react'

const testimonials = [
  {
    quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform — he transformed the atmosphere completely.",
    name: "Sarah & James K.",
    event: "Wedding Reception — The Shade Hotel, Manhattan Beach",
  },
  {
    quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
    name: "Michelle T.",
    event: "Corporate Event — Renaissance LAX Hotel",
  },
  {
    quote: "I booked Ethan for my husband's surprise 50th birthday and he absolutely delivered. He learned a few of our favorite songs specifically for the night, improvised with guests, and had everyone on their feet. It was magical.",
    name: "Diana R.",
    event: "Private Party — Marina Del Rey",
  },
  {
    quote: "What sets Ethan apart is how present he is. He's not just playing songs — he's genuinely connecting with every person in the room. Our cocktail hour felt like a private concert. Our guests are still talking about it.",
    name: "Lauren & Chris M.",
    event: "Wedding Cocktail Hour — Torrance Marriott",
  },
  {
    quote: "Ethan performed at our fundraiser and elevated the entire evening. He was professional, punctual, and incredibly warm with our guests. We will absolutely be booking him again for future events.",
    name: "Dr. Amanda S.",
    event: "Private Fundraiser — Torrance Memorial Medical Center",
  },
  {
    quote: "I've seen a lot of live performers in this city. Ethan is the real deal. His voice gives you chills and his stage presence is completely natural. Booking him was the best decision we made for our event.",
    name: "Cory L.",
    event: "Private Event — Hollywood, CA",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((active + 1) % testimonials.length)

  return (
    <section id="testimonials" style={{
      backgroundColor: '#f5f0e8',
      padding: '7rem 0',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>What People Say</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '600',
            color: '#1a1814',
            lineHeight: '1.2',
          }}>
            Testimonials
          </h2>
        </div>

        {/* Main Testimonial */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 2rem',
        }}>
          <div style={{
            fontSize: '4rem',
            color: '#c4622d',
            lineHeight: '1',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            opacity: 0.4,
          }}>"</div>

          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontStyle: 'italic',
            color: '#2d2926',
            lineHeight: '1.8',
            marginBottom: '2rem',
            fontWeight: '400',
          }}>
            {testimonials[active].quote}
          </p>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#1a1814',
            letterSpacing: '0.05em',
            marginBottom: '0.3rem',
          }}>
            {testimonials[active].name}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            color: '#c4622d',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            {testimonials[active].event}
          </p>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '3rem',
        }}>
          <button onClick={prev} style={{
            background: 'none',
            border: '1px solid rgba(196,168,130,0.5)',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b6460',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#c4622d'
            e.currentTarget.style.color = '#c4622d'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(196,168,130,0.5)'
            e.currentTarget.style.color = '#6b6460'
          }}>
            ←
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: i === active ? '#c4622d' : 'rgba(196,168,130,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }} />
            ))}
          </div>

          <button onClick={next} style={{
            background: 'none',
            border: '1px solid rgba(196,168,130,0.5)',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b6460',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#c4622d'
            e.currentTarget.style.color = '#c4622d'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(196,168,130,0.5)'
            e.currentTarget.style.color = '#6b6460'
          }}>
            →
          </button>
        </div>

        {/* Pull Quote */}
        <div style={{
          marginTop: '5rem',
          padding: '3rem',
          backgroundColor: '#1a1814',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontStyle: 'italic',
            color: '#fdfaf5',
            lineHeight: '1.6',
            fontWeight: '400',
          }}>
            "Ethan had the entire room silent within seconds."
          </p>
          <p style={{
            marginTop: '1rem',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#c4622d',
          }}>Venue Manager — The Wiltern Theatre</p>
        </div>

      </div>
    </section>
  )
}