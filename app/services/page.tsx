'use client'
import { useState, useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    id: 'weddings',
    number: '01',
    label: 'Weddings',
    headline: 'The Soundtrack to Your Most Important Day',
    description: `Your wedding deserves music that feels as personal as the moment itself. Ethan brings a warm, soulful energy to every part of your celebration — from ceremony to last dance. He works closely with each couple to understand the vibe, the story, and the songs that matter most.`,
    details: [
      'Ceremonies & processionals',
      'Cocktail hour & reception',
      'Custom song arrangements',
      'Full sound system included',
      'Background & interactive sets',
    ],
    photo: '/images/ethanwithguitar.png',
    objectPosition: 'center bottom',
    accent: '#c4622d',
  },
  {
    id: 'private',
    number: '02',
    label: 'Private Events',
    headline: 'Elevate Your Celebration With Live Music',
    description: `Whether it's an intimate dinner party, a milestone birthday, or an upscale celebration, Ethan reads the room and shapes the musical flow to fit the moment. Every performance feels fresh and connected to the occasion.`,
    details: [
      'Birthdays & anniversaries',
      'Holiday & seasonal events',
      'Dinner parties & galas',
      'Exclusive high-end events',
      'Flexible set lengths & styles',
    ],
    photo: '/images/ethanthreeguys.png',
    objectPosition: 'center top',
    accent: '#8b6914',
  },
  {
    id: 'corporate',
    number: '03',
    label: 'Corporate Events',
    headline: 'Professional Entertainment That Leaves an Impression',
    description: `Ethan has performed for major brands, fundraisers, and corporate functions across Los Angeles. He brings professionalism and a crowd-connecting energy that transforms a standard corporate event into something people actually talk about afterward.`,
    details: [
      'Corporate functions & galas',
      'Brand activations & launches',
      'Fundraisers & charity events',
      'University & institutional events',
      'Networking & cocktail receptions',
    ],
    photo: '/images/ethanwithcrowd.png',
    objectPosition: 'center top',
    accent: '#3a5a3a',
  },
  {
    id: 'originals',
    number: '04',
    label: 'Original Music',
    headline: 'Music Written From Real Life',
    description: `Beyond covers and events, Ethan is a recording artist with original music on Spotify and all major streaming platforms. His songs pull from real experiences — California living, chasing stages, the tension between dreaming big and staying grounded.`,
    details: [
      'Original singles on Spotify & Apple Music',
      'Songwriter & co-writing sessions',
      'Sync & licensing opportunities',
      '70s & 80s inspired soul sound',
      'Live original music sets',
    ],
    photo: '/images/ethansoloshot.png',
    objectPosition: 'center top',
    accent: '#4a3060',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [displayed, setDisplayed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const switchTo = (i: number) => {
    if (i === active || animating) return
    setAnimating(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDisplayed(i)
      setActive(i)
      setAnimating(false)
    }, 320)
  }

  useEffect(() => {
    setDisplayed(0)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  const s = services[displayed]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .svc-root {
          background: #0e0c09;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .svc-bg-photo {
          position: absolute;
          inset: 0;
          transition: opacity 0.5s ease;
        }

        .svc-bg-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .svc-bg-photo::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(10,8,5,0.97) 0%,
            rgba(10,8,5,0.88) 42%,
            rgba(10,8,5,0.35) 100%
          );
        }

        .svc-layout {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .svc-nav-strip {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 5.5rem 4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding-bottom: 0;
        }

        .svc-nav-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1.2rem 2rem 1.2rem 0;
          margin-right: 2rem;
          cursor: pointer;
          border: none;
          background: none;
          position: relative;
          transition: opacity 0.25s;
        }

        .svc-nav-item::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: transparent;
          transition: background 0.3s ease;
        }

        .svc-nav-item.active::after {
          background: var(--accent);
        }

        .svc-nav-num {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          font-family: 'Inter', monospace;
          color: rgba(255,255,255,0.25);
          transition: color 0.25s;
        }

        .svc-nav-item.active .svc-nav-num,
        .svc-nav-item:hover .svc-nav-num {
          color: rgba(255,255,255,0.5);
        }

        .svc-nav-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.3);
          transition: color 0.25s;
        }

        .svc-nav-item.active .svc-nav-label {
          color: #fdfaf5;
        }

        .svc-nav-item:hover .svc-nav-label {
          color: rgba(255,255,255,0.7);
        }

        .svc-body {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 4rem 4rem 5rem;
          gap: 5rem;
        }

        .svc-left {
          flex: 0 0 auto;
          width: min(520px, 50vw);
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.32s ease, transform 0.32s ease;
        }

        .svc-left.exit {
          opacity: 0;
          transform: translateY(12px);
        }

        .svc-ghost-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(7rem, 14vw, 13rem);
          font-weight: 600;
          font-style: italic;
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.06);
          user-select: none;
          margin-bottom: -1rem;
          letter-spacing: -0.02em;
        }

        .svc-label-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .svc-accent-line {
          width: 32px;
          height: 2px;
          border-radius: 1px;
          flex-shrink: 0;
        }

        .svc-label-text {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          color: rgba(253,250,245,0.5);
        }

        .svc-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #fdfaf5;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .svc-desc {
          font-size: 0.95rem;
          line-height: 1.85;
          color: rgba(253,250,245,0.45);
          margin-bottom: 2.5rem;
          font-family: 'Inter', sans-serif;
        }

        .svc-details {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .svc-detail-row {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .svc-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .svc-detail-text {
          font-size: 0.85rem;
          color: rgba(253,250,245,0.65);
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.01em;
        }

        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          color: #fdfaf5;
          border: 1px solid rgba(253,250,245,0.2);
          transition: border-color 0.25s, background 0.25s;
          position: relative;
          overflow: hidden;
        }

        .svc-cta:hover {
          border-color: rgba(253,250,245,0.5);
          background: rgba(253,250,245,0.05);
        }

        .svc-cta-arrow {
          width: 14px;
          height: 14px;
          opacity: 0.5;
        }

        .svc-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
          opacity: 1;
          transition: opacity 0.32s ease;
        }

        .svc-right.exit {
          opacity: 0;
        }

        .svc-photo-frame {
          width: 100%;
          max-width: 380px;
          aspect-ratio: 3/4;
          overflow: hidden;
          position: relative;
        }

        .svc-photo-frame::before {
          content: '';
          position: absolute;
          top: -12px;
          right: -12px;
          width: 60%;
          height: 60%;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-right: 1px solid rgba(255,255,255,0.1);
          z-index: 1;
          pointer-events: none;
        }

        .svc-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(15%) contrast(1.05);
          display: block;
        }

        .svc-pagination {
          display: flex;
          gap: 0.5rem;
          padding-right: 0.25rem;
        }

        .svc-pip {
          width: 20px;
          height: 2px;
          border-radius: 1px;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: background 0.25s, width 0.25s;
        }

        .svc-pip.active {
          width: 32px;
          background: var(--accent);
        }

        .svc-corner-label {
          position: absolute;
          bottom: 3rem;
          right: 4rem;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.15);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          user-select: none;
        }

        @media (max-width: 900px) {
          .svc-nav-strip { padding: 2rem 2rem 0; }
          .svc-nav-item { padding: 1rem 1.2rem 1rem 0; margin-right: 0.5rem; }
          .svc-nav-num { display: none; }
          .svc-body { flex-direction: column; padding: 3rem 2rem 4rem; gap: 3rem; }
          .svc-left { width: 100%; }
          .svc-right { align-items: flex-start; }
          .svc-photo-frame { max-width: 280px; aspect-ratio: 4/3; }
          .svc-ghost-num { font-size: 5rem; }
          .svc-corner-label { display: none; }
        }
      `}</style>

      <Navbar />
      <main
        className="svc-root"
        style={{ '--accent': s.accent } as React.CSSProperties}
      >
        {/* Background photo */}
        <div className="svc-bg-photo" style={{ opacity: animating ? 0 : 1 }}>
          <img src={s.photo} alt="" style={{ objectPosition: s.objectPosition }} />
        </div>

        <div className="svc-layout">

          {/* Service nav strip */}
          <nav className="svc-nav-strip">
            {services.map((sv, i) => (
              <button
                key={sv.id}
                className={`svc-nav-item ${active === i ? 'active' : ''}`}
                style={{ '--accent': sv.accent } as React.CSSProperties}
                onClick={() => switchTo(i)}
              >
                <span className="svc-nav-num">{sv.number}</span>
                <span className="svc-nav-label">{sv.label}</span>
              </button>
            ))}
          </nav>

          {/* Main body */}
          <div className="svc-body">

            <div className={`svc-left ${animating ? 'exit' : ''}`}>
              <div className="svc-ghost-num">{s.number}</div>

              <div className="svc-label-row">
                <div className="svc-accent-line" style={{ background: s.accent }} />
                <span className="svc-label-text">{s.label}</span>
              </div>

              <h2 className="svc-headline">{s.headline}</h2>
              <p className="svc-desc">{s.description}</p>

              <div className="svc-details">
                {s.details.map((d, i) => (
                  <div key={i} className="svc-detail-row">
                    <div className="svc-dot" style={{ background: s.accent }} />
                    <span className="svc-detail-text">{d}</span>
                  </div>
                ))}
              </div>

              <a href="/contact" className="svc-cta">
                Book Ethan
                <svg className="svc-cta-arrow" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className={`svc-right ${animating ? 'exit' : ''}`}>
              <div className="svc-photo-frame">
                <img src={s.photo} alt={s.label} style={{ objectPosition: s.objectPosition }} />
              </div>
              <div className="svc-pagination">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className={`svc-pip ${active === i ? 'active' : ''}`}
                    style={active === i ? { background: s.accent } : {}}
                    onClick={() => switchTo(i)}
                  />
                ))}
              </div>
            </div>

          </div>

          <span className="svc-corner-label">Ethan Hoffman — Live Music</span>
        </div>
      </main>
      <Footer />
    </>
  )
}