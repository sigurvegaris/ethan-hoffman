'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const svcs = [
  {
    tab: 'Weddings',
    tag: 'Most Popular',
    headline: 'The soundtrack to your most important day',
    body: 'Ethan works closely with every couple to understand the vibe, then delivers a performance that feels completely tailored to you.',
    features: ['Ceremony & Reception Coverage', 'Custom Song Requests', 'Live Looping Performance', 'Add-Ons Available'],
    img: '/images/ethanwithguitar.png',
    position: 'center 15%',
    href: '/contact',
    cta: 'Book Ethan',
  },
  {
    tab: 'Private Events',
    tag: 'Intimate Settings',
    headline: 'The room will feel different when he plays',
    body: 'Whether a dinner party, milestone birthday, or upscale celebration, Ethan reads the room and shapes the energy in real time.',
    features: ['Dinner Parties', 'Birthday Celebrations', 'Upscale Gatherings', 'Fully Customizable'],
    img: '/images/ethanthreeguys.png',
    position: 'center 25%',
    href: '/contact',
    cta: 'Book Ethan',
  },
  {
    tab: 'Corporate Events',
    tag: 'Professional',
    headline: 'Entertainment that leaves an impression',
    body: 'Ethan has performed for major brands and corporate functions across Los Angeles. He transforms a standard event into something people talk about.',
    features: ['Brand Events & Launches', 'Fundraisers & Galas', 'Holiday Parties', 'Networking Events'],
    img: '/images/ethanwithcrowd.png',
    position: 'center 65%',
    href: '/contact',
    cta: 'Book Ethan',
  },
  {
    tab: 'Original Music',
    tag: 'Recording Artist',
    headline: 'Music written from real life',
    body: 'Beyond events, Ethan is a recording artist with original music on all major platforms. Soulful, honest, and deeply personal.',
    features: ['Available on Spotify', 'Available on Apple Music', 'Original Compositions', 'Live Originals at Events'],
    img: '/images/ethanmustang.png',
    position: 'center 85%',
    href: '/music',
    cta: 'Listen Now',
  },
]

const differentiators = [
  {
    number: '01',
    title: 'One Artist.\nFull Sound.',
    tag: 'Live Looping',
    body: 'Ethan layers beatbox, bass lines, harmonies, and textures using only his voice. Guests watch it happen live and cannot believe what they are hearing.',
  },
  {
    number: '02',
    title: 'Reads Every\nRoom.',
    tag: 'Adaptability',
    body: 'No two performances are the same. Ethan improvises, responds to the crowd, and shapes the energy in real time. That spontaneity is what makes people actually be present.',
  },
  {
    number: '03',
    title: 'Built for\nthe Moment.',
    tag: 'Experience',
    body: 'Luxury is not a price tag. It is the moment your guests look at each other because something just happened that none of them expected. That is what Ethan delivers.',
  },
]

const venueLogos = [
  { name: 'The Wiltern', file: 'thewilternlogo.png', invert: false, scale: 1 },
  { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png', invert: false, scale: 1 },
  { name: 'The Magnolia', file: 'themagnolialogo.png', invert: false, scale: 1 },
  { name: 'The Mint', file: 'themintlogo.png', invert: false, scale: 1.6 },
  { name: 'Marriott', file: 'marriotlogo.png', invert: false, scale: 1 },
  { name: 'USC', file: 'usclogo.png', invert: true, scale: 1 },
]

function ServicesCarousel() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)

  const switchTo = (i: number) => {    if (i === active) return
    setFading(true)
    setTimeout(() => {
      setActive(i)
      setFading(false)
    }, 300)
    setPaused(true)
  }

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive((a) => (a + 1) % svcs.length)
        setFading(false)
      }, 300)
    }, 4500)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section id="services" className="services-section">
      <style>{`
        .services-section {
          background: #1a1814;
        }

        .svc-shell {
          padding: 0 0 4rem 0;
        }

        .svc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 4rem 4rem 0;
        }

        .svc-tabs {
          display: flex;
          gap: 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 0 4rem 1rem;
          margin-top: 2rem;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .svc-tabs::-webkit-scrollbar { display: none; }

        .svc-tab {
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          font-family: Inter, sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          padding: 0 0 0.75rem 0;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
        }

        .svc-tab.active {
          color: #fdfaf5;
          border-bottom: 2px solid #c4622d;
        }

        .svc-image-wrap {
          position: relative;
          margin: 0 4rem;
          height: 580px;
          overflow: hidden;
        }

        .svc-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.35s ease;
        }

        .svc-img.visible { opacity: 1; }
        .svc-img.hidden { opacity: 0; }

        .svc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to left, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.38) 52%, rgba(10,8,6,0.08) 100%);
        }

        .svc-card {
          position: absolute;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          width: min(320px, calc(100% - 3rem));
          z-index: 3;
          transition: opacity 0.35s ease;
        }

        .svc-card.visible { opacity: 1; }
        .svc-card.hidden { opacity: 0; }

        /* Desktop card (inside image-wrap overlay) always shown on desktop, hidden on mobile */
        .svc-card-desktop { display: block; }
        /* Mobile card (below image) hidden on desktop, shown on mobile */
        .svc-card-mobile { display: none; }

        .svc-tag {
          display: inline-block;
          background: #c4622d;
          color: #fdfaf5;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
          padding: 0.35rem 0.75rem;
          margin-bottom: 1.25rem;
        }

        .svc-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #fdfaf5;
          line-height: 1.2;
          margin: 0 0 1rem 0;
        }

        .svc-card p {
          font-size: 0.9rem;
          line-height: 1.75;
          color: rgba(253,250,245,0.7);
          margin: 0 0 1.5rem 0;
        }

        .svc-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.75rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .svc-features li {
          font-size: 0.8rem;
          color: rgba(253,250,245,0.75);
          font-family: Inter, sans-serif;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .svc-features li::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c4622d;
          flex-shrink: 0;
        }

        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #fdfaf5;
          text-decoration: none;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
          transition: gap 0.3s ease, color 0.3s ease;
        }

        .svc-cta:hover { gap: 0.9rem; color: #c4622d; }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .svc-header { padding: 3rem 1.5rem 0; }
          .svc-tabs { padding: 0 1.5rem 1rem; margin-top: 1.5rem; }

          .svc-image-wrap {
            margin: 0 1.5rem;
            height: auto;
            min-height: 620px;
          }

          .svc-overlay {
            background: linear-gradient(to top, rgba(10,8,6,0.97) 0%, rgba(10,8,6,0.75) 42%, rgba(10,8,6,0.15) 100%);
          }

          .svc-card {
            left: 1.5rem;
            right: 1.5rem;
            bottom: 1.5rem;
            top: auto;
            width: auto;
            transform: none;
          }

          .svc-card h3 { font-size: 1.45rem; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .svc-shell { padding: 0 0 3rem 0; }

          .svc-header { padding: 2.5rem 1.25rem 0; }

          .svc-tabs {
            padding: 0 1.25rem 0;
            gap: 0;
            margin-top: 1.25rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: none;
            overflow: visible;
          }

          .svc-tab {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            text-align: center;
            font-size: 0.6rem;
          }

          .svc-tab:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.1);
          }

          .svc-tab.active {
            border-bottom: 1px solid #c4622d;
          }

          /* On mobile, stack the image + card vertically instead of overlay */
          .svc-image-wrap {
            margin: 0;
            height: 52vw;
            min-height: 220px;
            max-height: 320px;
          }

          .svc-overlay {
            background: linear-gradient(to bottom, rgba(10,8,6,0.05) 0%, rgba(10,8,6,0.55) 100%);
          }

          /* Card becomes a separate block below the image */
          .svc-card {
            position: static;
            transform: none;
            width: auto;
            padding: 1.5rem 1.25rem;
            background: rgba(26,24,20,0.98);
            border-top: 2px solid #c4622d;
          }

          .svc-card h3 { font-size: 1.3rem; }

          .svc-card p {
            font-size: 0.88rem;
            line-height: 1.7;
            margin-bottom: 1.25rem;
          }

          .svc-features li {
            font-size: 0.78rem;
            padding: 0.6rem 0;
          }

          .svc-tag { margin-bottom: 0.9rem; }

          /* Swap cards on mobile */
          .svc-card-desktop { display: none; }
          .svc-card-mobile {
            display: block;
            padding: 1.5rem 1.25rem;
            background: #131210;
            border-top: 2px solid #c4622d;
          }
        }

        @media (max-width: 400px) {
          .svc-image-wrap {
            min-height: 200px;
          }
        }
      `}</style>

      <div
        className="svc-shell"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="svc-header">
          <div>
            <p style={{
              fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#c4622d', fontFamily: 'Inter, sans-serif',
              margin: '0 0 0.75rem 0',
            }}>
              What Ethan Offers
            </p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: '400', color: '#fdfaf5', lineHeight: '1.15', margin: 0,
            }}>
              The perfect vibe <em>for every occasion</em>
            </h2>
          </div>
        </div>

        <div className="svc-tabs">
          {svcs.map((s, i) => (
            <button
              key={i}
              className={`svc-tab ${i === active ? 'active' : ''}`}
              onClick={() => switchTo(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className="svc-image-wrap">
          {svcs.map((s, i) => (
            <img
              key={i}
              src={s.img}
              alt={s.tab}
              style={{ objectPosition: s.position }}
              className={`svc-img ${i === active ? 'visible' : 'hidden'}`}
            />
          ))}
          <div className="svc-overlay" />

          {/* Desktop only: card overlaid on image */}
          <div className={`svc-card svc-card-desktop ${fading ? 'hidden' : 'visible'}`}>
            {svcs[active].tag && <span className="svc-tag">{svcs[active].tag}</span>}
            <h3>{svcs[active].headline}</h3>
            <p>{svcs[active].body}</p>
            <ul className="svc-features">
              {svcs[active].features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <Link href={svcs[active].href} className="svc-cta">
              {svcs[active].cta} <span>→</span>
            </Link>
          </div>
        </div>

        {/* Mobile only: card below the image */}
        <div className={`svc-card svc-card-mobile ${fading ? 'hidden' : 'visible'}`}>
          {svcs[active].tag && <span className="svc-tag">{svcs[active].tag}</span>}
          <h3>{svcs[active].headline}</h3>
          <p>{svcs[active].body}</p>
          <ul className="svc-features">
            {svcs[active].features.map((f, j) => (
              <li key={j}>{f}</li>
            ))}
          </ul>
          <Link href={svcs[active].href} className="svc-cta">
            {svcs[active].cta} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        img { display: block; max-width: 100%; }

        .page-container {
          overflow-x: hidden;
          background: #1a1814;
        }

        /* ─── HERO ─────────────────────────────────── */
        .hero-section {
          position: relative;
          min-height: 100svh;
          background: #1a1814;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: url('/images/ethanphotositting.png');
          background-size: cover;
          background-position: center top;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to right, rgba(26,24,20,0.9) 0%, rgba(26,24,20,0.55) 58%, rgba(26,24,20,0.18) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 3;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8rem 4rem 4rem;
          max-width: 760px;
        }

        .hero-topline {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .hero-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          width: 100%;
          max-width: 360px;
        }

        /* ─── STATS ────────────────────────────────── */
        .stats-wrap { background: #111009; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .stats-item {
          padding: 3rem 2rem;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stats-item:last-child { border-right: none; }

        /* ─── TRUSTED ROW ──────────────────────────── */
        .trusted-row {
          padding: 2.5rem 3rem 3rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }

        .trusted-logos {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          align-items: center;
          justify-items: center;
          gap: 1rem 2rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .trusted-logo-cell {
          width: 100%;
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.5rem;
        }

        .trusted-logo {
          width: 100%;
          height: auto;
          max-height: 90px;
          max-width: 220px;
          object-fit: contain;
          opacity: 0.55;
          transition: opacity 0.3s ease, transform 0.3s ease;
          filter: brightness(0) invert(1);
        }
        .trusted-logo:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ─── ABOUT / TESTIMONIAL / CTA GRIDS ─────── */
        .about-grid, .testimonial-grid, .cta-grid { display: grid; gap: 3rem; }
        .about-grid   { grid-template-columns: 1fr 1fr; align-items: center; }
        .testimonial-grid { grid-template-columns: 1fr 1fr; gap: 2px; }
        .cta-grid     { grid-template-columns: 1fr 1fr; min-height: 600px; }

        .cta-copy {
          padding: 6rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cta-image {
          min-height: 420px;
          background-image: url('/images/ethanincar.png');
          background-size: cover;
          background-position: center 60%;
        }

        /* ─── WSE (WHAT SETS ETHAN) ────────────────── */
        .wse-section { padding: 10rem 0; position: relative; }

        .wse-marquee-track {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          white-space: nowrap;
          animation: wse-scroll 25s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .wse-marquee-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(196,168,130,0.06);
          letter-spacing: -0.02em;
          line-height: 1;
          display: inline-block;
          padding-right: 4rem;
        }

        @keyframes wse-scroll {
          from { transform: translateY(-50%) translateX(0); }
          to   { transform: translateY(-50%) translateX(-50%); }
        }

        .wse-item {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          align-items: center;
          gap: 3rem;
          padding: 3.5rem 0;
          border-top: 1px solid rgba(196,168,130,0.08);
          transition: border-color 0.5s ease;
        }
        .wse-item:last-child { border-bottom: 1px solid rgba(196,168,130,0.08); }
        .wse-item:hover { border-color: rgba(196,98,45,0.2); }

        .wse-num {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 700;
          color: rgba(196,168,130,0.08);
          line-height: 1;
          letter-spacing: -0.03em;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wse-item:hover .wse-num { color: #c4622d; transform: scale(1.15) translateX(4px); }

        .wse-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, rgba(253,250,245,0.15) 0%, rgba(253,250,245,0.08) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wse-item:hover .wse-title {
          background: linear-gradient(135deg, #fdfaf5 0%, rgba(253,250,245,0.75) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wse-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }

        .wse-tag {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
          color: rgba(196,98,45,0);
          border: 1px solid rgba(196,98,45,0);
          padding: 0.45rem 1.1rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(8px);
        }
        .wse-item:hover .wse-tag { color: #c4622d; border-color: rgba(196,98,45,0.35); transform: translateY(0); }

        .wse-body {
          font-size: 0.82rem;
          line-height: 1.9;
          color: rgba(253,250,245,0);
          text-align: right;
          max-width: 340px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(12px);
        }
        .wse-item:hover .wse-body { color: rgba(253,250,245,0.45); transform: translateY(0); }

        .wse-line {
          position: absolute;
          left: 0; bottom: -1px;
          height: 1px; width: 0;
          background: linear-gradient(to right, #c4622d, rgba(196,98,45,0));
          transition: width 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 3;
        }
        .wse-item:hover .wse-line { width: 100%; }

        /* ─── TABLET (≤1024px) ─────────────────────── */
        @media (max-width: 1024px) {
          .hero-content { padding: 7rem 2rem 3rem; max-width: 620px; }

          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-item:nth-child(2) { border-right: none; }
          .stats-item:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.06); }

          .trusted-row { grid-template-columns: 1fr; gap: 1.5rem; padding: 2rem 1.5rem; }
          .trusted-logos { grid-template-columns: repeat(3, minmax(0, 1fr)); }

          .about-grid, .testimonial-grid, .cta-grid { grid-template-columns: 1fr; }
          .cta-copy { padding: 4rem 2rem; }

          .wse-item { grid-template-columns: 56px 1fr; gap: 1.25rem; align-items: start; }
          .wse-right { grid-column: 2 / 3; align-items: flex-start; margin-top: 0.75rem; }
          .wse-tag { color: #c4622d; border-color: rgba(196,98,45,0.3); transform: none; }
          .wse-body { color: rgba(253,250,245,0.55); text-align: left; transform: none; max-width: none; }
        }

        /* ─── MOBILE (≤768px) ──────────────────────── */
        @media (max-width: 768px) {
          /* Hero */
          .hero-bg { background-position: 50% top; }
          .hero-overlay {
            background: linear-gradient(
              to top,
              rgba(26,24,20,0.97) 0%,
              rgba(26,24,20,0.75) 38%,
              rgba(26,24,20,0.35) 65%,
              rgba(26,24,20,0.08) 100%
            );
          }
          .hero-content {
            min-height: 100svh;
            padding: 0 1.25rem 3rem;
            max-width: none;
            justify-content: flex-end;
          }
          .hero-topline { gap: 0.5rem; margin-bottom: 0.75rem; }
          .hero-actions { max-width: none; flex-direction: column; }
          .hero-actions a { width: 100%; text-align: center; padding: 1rem 1.5rem; }

          /* Stats */
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-item {
            padding: 2rem 1.25rem;
            border-right: 1px solid rgba(255,255,255,0.06);
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .stats-item:nth-child(2n) { border-right: none; }
          .stats-item:nth-last-child(-n+2) { border-bottom: none; }

          /* Trusted */
          .trusted-row { padding: 2rem 1.25rem 2.5rem; }
          .trusted-logos {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.25rem 1rem;
            max-width: 480px;
          }
          .trusted-logo-cell { min-height: 56px; }
          .trusted-logo { max-height: 52px; }

          /* About */
          .about-grid { gap: 2rem; }

          /* Testimonials */
          .testimonial-grid { grid-template-columns: 1fr; gap: 1.5rem; }

          /* CTA */
          .cta-grid { grid-template-columns: 1fr; min-height: auto; }
          .cta-copy { padding: 3.5rem 1.25rem; }
          .cta-image { min-height: 300px; order: -1; }

          /* WSE */
          .wse-section { padding: 5rem 0; }
          .wse-num { font-size: 2.75rem; }
          .wse-title { font-size: clamp(1.8rem, 8vw, 2.7rem); line-height: 1.05; }
          .wse-marquee-track { display: none; }
          .wse-item { padding: 2rem 0; gap: 1rem; }
        }

        /* ─── SMALL MOBILE (≤480px) ────────────────── */
        @media (max-width: 480px) {
          .hero-content { padding: 0 1rem 2.5rem; }

          .stats-item { padding: 1.75rem 1rem; }

          .trusted-logos { gap: 0.75rem; }
          .trusted-logo { max-height: 34px; max-width: 110px; }

          .cta-copy { padding: 2.75rem 1rem; }
          .cta-image { min-height: 240px; }

          .about-grid { gap: 1.5rem; }
          .testimonial-grid { gap: 1rem; }
        }

        /* ─── VERY SMALL (≤360px) ──────────────────── */
        @media (max-width: 360px) {
          .stats-grid { grid-template-columns: 1fr; }
          .stats-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .stats-item:last-child { border-bottom: none; }

          .trusted-logos { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      <main className="page-container">

        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-bg" />
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-topline">
              <div style={{ width: '2rem', height: '1px', backgroundColor: '#c4622d' }} />
              <p style={{
                fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: 'rgba(253,250,245,0.65)',
                fontFamily: 'Inter, sans-serif', margin: 0,
              }}>
                Los Angeles · Live Music
              </p>
            </div>

            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3.2rem, 16vw, 10rem)',
              fontWeight: '700', color: '#fdfaf5',
              lineHeight: '0.95', marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}>
              Ethan<br />Hoffman
            </h1>

            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 4vw, 1.3rem)',
              fontWeight: '300', fontStyle: 'italic',
              color: 'rgba(253,250,245,0.72)',
              margin: '0 0 2rem 0',
            }}>
              Soulful live music for weddings &amp; private events
            </p>

            <div className="hero-actions">
              <Link href="/contact" style={{
                display: 'inline-block', padding: '0.9rem 1.5rem',
                backgroundColor: '#c4622d', color: '#fdfaf5', textDecoration: 'none',
                fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em',
                textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
              }}>
                Book Ethan
              </Link>
              <Link href="/music" style={{
                display: 'inline-block', padding: '0.9rem 1.5rem',
                backgroundColor: 'transparent', color: '#fdfaf5', textDecoration: 'none',
                fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em',
                textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
                border: '1px solid rgba(253,250,245,0.45)',
              }}>
                Watch Live
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS + TRUSTED ── */}
        <div className="stats-wrap">
          <div className="stats-grid">
            {[
              { number: '300+', label: 'Events Performed' },
              { number: '140M', label: 'Video Views' },
              { number: '6+',   label: 'Hours of Repertoire' },
              { number: '24hr', label: 'Response Time' },
            ].map((s, i) => (
              <div key={i} className="stats-item">
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: '400', color: '#fdfaf5',
                  lineHeight: '1', margin: '0 0 0.5rem 0',
                  letterSpacing: '-0.02em',
                }}>
                  {s.number}
                </p>
                <p style={{
                  fontSize: '0.55rem', fontWeight: '600',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', margin: 0,
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="trusted-row">
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: '400',
              color: 'rgba(255,255,255,0.15)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '0 0 1.25rem 0',
              lineHeight: 1.2,
            }}>
              Past clients &amp; venues include
            </h3>
            <div style={{
              width: '4rem',
              height: '1px',
              background: 'rgba(255,255,255,0.12)',
              margin: '0 auto 2rem',
            }} />
            <div className="trusted-logos">
              {venueLogos.map((v, i) => (
                <div key={i} className="trusted-logo-cell">
                  <img
                    src={`/images/${v.file}`}
                    alt={v.name}
                    className="trusted-logo"
                    style={{
                      filter: 'brightness(0) invert(1)',
                      transform: `scale(${v.scale})`,
                      transformOrigin: 'center',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <ScrollReveal delay={100}>
          <section className="site-section" style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div className="about-grid">
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden' }}>
                    <img
                      src="/images/ethansingingorange.png"
                      alt="Ethan Hoffman"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }}
                    />
                  </div>
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    right: '-0.5rem', bottom: '-0.5rem',
                    border: '1px solid rgba(196,98,45,0.3)', zIndex: -1,
                  }} />
                </div>

                <div>
                  <p className="section-label" style={{ marginBottom: '1rem' }}>Who is Ethan</p>
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: '600', color: '#1a1814',
                    lineHeight: '1.2', marginBottom: '1.5rem',
                  }}>
                    A vocalist who plays rooms,<br />
                    <em style={{ fontWeight: '400' }}>not just songs.</em>
                  </h2>
                  <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.2rem' }}>
                    It started with a flyer at Starbucks. Not a grand origin story, just a kid who randomly walked into an audition and realized he was actually pretty good at this. Fast forward to a USC comedy show, a spontaneous performance, and a video that hit 140 million views before he really knew what was happening.
                  </p>
                  <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '2rem' }}>
                    Since then he has played 300+ gigs across LA and beyond: hotel lobbies, private estates, sold-out nights at The Wiltern. He performs with a live looping station, building full band arrangements on the spot using only his voice. Audiences love it.
                  </p>
                  <Link href="/about" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    color: '#c4622d', textDecoration: 'none',
                    fontSize: '0.8rem', fontWeight: '600',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    Full Story <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── WHAT SETS ETHAN APART ── */}
        <section style={{ backgroundColor: '#1a1814', overflow: 'hidden', position: 'relative' }}>
          <div className="wse-marquee-track">
            {['ETHAN HOFFMAN ', 'ETHAN HOFFMAN ', 'ETHAN HOFFMAN ', 'ETHAN HOFFMAN '].map((t, i) => (
              <span key={i} className="wse-marquee-text">{t}</span>
            ))}
          </div>

          <div className="wse-section">
            <div className="container">
              <div style={{ marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
                <p style={{
                  fontSize: '0.62rem', fontWeight: '600',
                  letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d',
                }}>
                  What Sets Ethan Apart
                </p>
              </div>

              {differentiators.map((item, i) => (
                <div key={i} className="wse-item">
                  <span className="wse-num">{item.number}</span>
                  <h3 className="wse-title" dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, '<br/>') }} />
                  <div className="wse-right">
                    <span className="wse-tag">{item.tag}</span>
                    <p className="wse-body">{item.body}</p>
                  </div>
                  <div className="wse-line" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES CAROUSEL ── */}
        <ScrollReveal delay={100}>
          <ServicesCarousel />
        </ScrollReveal>

        {/* ── TESTIMONIALS ── */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814', padding: '8rem 0', overflow: 'hidden' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{
                  fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: '#c4622d',
                  fontFamily: 'Inter, sans-serif', margin: '0 0 1rem 0',
                }}>
                  Testimonials
                </p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
                  fontWeight: '600', color: '#fdfaf5',
                  lineHeight: '1.15', margin: 0, letterSpacing: '-0.02em',
                }}>
                  What people are saying
                </h2>
              </div>

              <div className="testimonial-grid">
                {[
                  {
                    quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform, he transformed the atmosphere completely.",
                    name: 'Sarah and James K.', event: 'Wedding Reception', venue: 'The Shade Hotel, Manhattan Beach',
                  },
                  {
                    quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
                    name: 'Michelle T.', event: 'Corporate Event', venue: 'Renaissance LAX Hotel',
                  },
                ].map((t, i) => (
                  <div key={i} style={{
                    padding: '2.25rem',
                    backgroundColor: i === 0 ? 'rgba(196,168,130,0.06)' : 'rgba(196,98,45,0.06)',
                    borderTop: `2px solid ${i === 0 ? 'rgba(196,168,130,0.2)' : '#c4622d'}`,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  }}>
                    <div style={{
                      fontFamily: 'Playfair Display, serif', fontSize: '5rem',
                      lineHeight: '0.5',
                      color: i === 0 ? 'rgba(196,168,130,0.15)' : 'rgba(196,98,45,0.2)',
                      marginBottom: '1rem', userSelect: 'none',
                    }}>"</div>

                    <p style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                      fontStyle: 'italic', fontWeight: '400',
                      color: 'rgba(253,250,245,0.8)',
                      lineHeight: '1.8', margin: '0 0 2rem 0',
                    }}>
                      {t.quote}
                    </p>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <div style={{
                        width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                        backgroundColor: i === 0 ? 'rgba(196,168,130,0.2)' : 'rgba(196,98,45,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{
                          fontFamily: 'Playfair Display, serif', fontSize: '1rem',
                          color: i === 0 ? '#c4a882' : '#c4622d',
                        }}>
                          {t.name[0]}
                        </span>
                      </div>
                      <div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: '700', color: '#fdfaf5', margin: '0 0 0.2rem 0' }}>{t.name}</p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: '#c4622d', margin: 0, letterSpacing: '0.05em' }}>
                          {t.event} · {t.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                <Link href="/testimonials" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.65rem', fontWeight: '700',
                  letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
                }}>
                  Read More Reviews <span>→</span>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── CTA ── */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814' }}>
            <div className="cta-grid">
              <div className="cta-copy">
                <p style={{
                  fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
                }}>
                  What do you say
                </p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: '400', fontStyle: 'italic',
                  color: '#fdfaf5', lineHeight: '1.1', marginBottom: '2rem',
                }}>
                  We make it unforgettable
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(253,250,245,0.6)', marginBottom: '1.5rem' }}>
                  Your guests will remember the food, the flowers, the venue. But what they will truly never forget is how the room felt when Ethan started playing. That stillness. That electricity. That moment when everyone collectively stops and just listens.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(253,250,245,0.6)', marginBottom: '2.5rem' }}>
                  That is what Ethan delivers at every single event. Not just music. A moment.
                </p>
                <Link href="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Let's Connect
                </Link>
              </div>
              <div className="cta-image" />
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  )
}