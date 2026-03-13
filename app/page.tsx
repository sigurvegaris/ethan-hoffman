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
  { name: 'The Wiltern', file: 'thewilternlogo.png' },
  { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png' },
  { name: 'The Magnolia', file: 'themagnolialogo.png' },
  { name: 'The Comedy Store', file: 'thecomedystorelogo.png' },
  { name: 'USC', file: 'usclogo.png' },

]

function ServicesCarousel() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)

  const switchTo = (i: number) => {
    if (i === active) return
    setPrev(active)
    setFading(true)
    setTimeout(() => {
      setActive(i)
      setFading(false)
      setPrev(null)
    }, 350)
    setPaused(true)
  }

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setPrev(active)
      setFading(true)
      setTimeout(() => {
        setActive(a => {
          const next = (a + 1) % svcs.length
          return next
        })
        setFading(false)
        setPrev(null)
      }, 350)
    }, 4500)
    return () => clearInterval(t)
  }, [paused, active])

  return (
    <section id="services" style={{ backgroundColor: '#1a1814' }}>
      <style>{`
        .svc-header {
          display: flex; align-items: flex-start;
          justify-content: space-between;
          padding: 4rem 4rem 0;
        }
        .svc-tabs {
          display: flex; gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 0 4rem;
          margin-top: 2rem;
        }
        .svc-tab {
          background: none; border: none; cursor: pointer;
          font-family: Inter, sans-serif; font-size: 0.62rem;
          font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 1rem 2rem 1rem 0; margin-right: 2rem;
          color: rgba(255,255,255,0.3);
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative; bottom: -1px;
        }
        .svc-tab:hover { color: rgba(255,255,255,0.7); }
        .svc-tab.active {
          color: #fdfaf5 !important;
          border-bottom: 2px solid #c4622d !important;
          font-weight: 700;
        }
        .svc-image-wrap {
          position: relative;
          margin: 0 4rem 4rem;
          height: 580px;
          overflow: hidden;
        }
        .svc-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          object-position: center;
          transition: opacity 0.35s ease;
        }
        .svc-img.visible { opacity: 1; }
        .svc-img.hidden { opacity: 0; }
        .svc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to left, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.3) 50%, rgba(10,8,6,0.0) 100%);
        }
        .svc-card {
          position: absolute; right: 3rem; top: 50%;
          transform: translateY(-50%);
          width: 320px;
          transition: opacity 0.35s ease;
        }
        .svc-card.visible { opacity: 1; }
        .svc-card.hidden { opacity: 0; }
        .svc-tag {
          display: inline-block;
          background: #c4622d; color: #fdfaf5;
          font-size: 0.55rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          font-family: Inter, sans-serif;
          padding: 0.35rem 0.75rem;
          margin-bottom: 1.25rem;
        }
        .svc-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem; font-weight: 600;
          color: #fdfaf5; line-height: 1.2;
          margin: 0 0 1rem 0;
        }
        .svc-card p {
          font-size: 0.875rem; line-height: 1.75;
          color: rgba(253,250,245,0.65);
          margin: 0 0 1.5rem 0;
        }
        .svc-features {
          list-style: none; padding: 0; margin: 0 0 1.75rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .svc-features li {
          font-size: 0.8rem; color: rgba(253,250,245,0.7);
          font-family: Inter, sans-serif;
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .svc-cta {
          display: inline-block;
          color: #fdfaf5; text-decoration: none;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          font-family: Inter, sans-serif;
          display: flex; align-items: center; gap: 0.5rem;
          transition: gap 0.3s ease;
        }
        .svc-cta:hover { gap: 0.9rem; color: #c4622d; }
      `}</style>

      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

        {/* Header */}
        <div className="svc-header">
          <div>
            <p style={{
              fontSize: '0.6rem', fontWeight: '600',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#c4622d', fontFamily: 'Inter, sans-serif', margin: '0 0 0.75rem 0',
            }}>What Ethan Offers</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: '400', color: '#fdfaf5',
              lineHeight: '1.15', margin: 0,
            }}>
              The perfect vibe <em>for every occasion</em>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="svc-tabs">
          {svcs.map((s, i) => (
            <button key={i}
              className={`svc-tab${i === active ? ' active' : ''}`}
              onClick={() => switchTo(i)}>
              {s.tab}
            </button>
          ))}
        </div>

        {/* Image + overlay card */}
        <div className="svc-image-wrap">
        {svcs.map((s, i) => (
  <img key={i} src={s.img} alt={s.tab}
    style={{ objectPosition: s.position }}
    className={`svc-img ${i === active ? 'visible' : 'hidden'}`} />
))}
          <div className="svc-overlay" />

          <div className={`svc-card ${fading ? 'hidden' : 'visible'}`}>
            {svcs[active].tag && <span className="svc-tag">{svcs[active].tag}</span>}
            <h3>{svcs[active].headline}</h3>
            <p>{svcs[active].body}</p>
            <ul className="svc-features">
              {svcs[active].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <Link href={svcs[active].href} className="svc-cta">
              {svcs[active].cta} <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

 {/* HERO */}
<section style={{
  position: 'relative', height: '100vh', minHeight: '700px',
  overflow: 'hidden', backgroundColor: '#1a1814',
}}>
  <div style={{
    position: 'absolute', inset: 0, zIndex: 1,
    backgroundImage: 'url(/images/ethanphotositting.png)',
    backgroundSize: 'cover', backgroundPosition: 'center top',
  }} />
  <div style={{
    position: 'absolute', inset: 0, zIndex: 2,
    background: 'linear-gradient(to right, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.5) 60%, rgba(26,24,20,0.15) 100%)',
  }} />

  <div style={{
    position: 'relative', zIndex: 3,
    height: '100%', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '0 4rem',
    paddingTop: '8rem',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <div style={{ width: '2rem', height: '1px', backgroundColor: '#c4622d' }} />
      <p style={{
        fontSize: '0.6rem', fontWeight: '600',
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: 'rgba(253,250,245,0.65)', fontFamily: 'Inter, sans-serif', margin: 0,
      }}>Los Angeles · Live Music</p>
    </div>

    <h1 style={{
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(4.5rem, 10vw, 10rem)',
      fontWeight: '700', color: '#fdfaf5',
      lineHeight: '0.95', marginBottom: '1.5rem',
      letterSpacing: '-0.02em',
    }}>
      Ethan<br />Hoffman
    </h1>

    <p style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
      fontWeight: '300', fontStyle: 'italic',
      color: 'rgba(253,250,245,0.7)', margin: '0 0 2rem 0',
    }}>Soulful live music for weddings &amp; private events</p>

    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Link href="/contact" style={{
        display: 'inline-block', padding: '0.75rem 1.75rem',
        backgroundColor: '#c4622d', color: '#fdfaf5',
        textDecoration: 'none', fontSize: '0.65rem', fontWeight: '700',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
      }}>Book Ethan</Link>
      <Link href="/music" style={{
        display: 'inline-block', padding: '0.75rem 1.75rem',
        backgroundColor: 'transparent', color: '#fdfaf5',
        textDecoration: 'none', fontSize: '0.65rem', fontWeight: '700',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
        border: '1px solid rgba(253,250,245,0.45)',
      }}>Watch Live</Link>
    </div>
  </div>

  <div style={{
    position: 'absolute', bottom: '2.5rem', right: '3.5rem',
    zIndex: 3, textAlign: 'right',
  }}>
    <p style={{
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: '600', color: 'rgba(253,250,245,0.08)',
      lineHeight: '1', letterSpacing: '-0.02em', margin: 0,
    }}>300+</p>
    <p style={{
      fontSize: '0.55rem', fontWeight: '600',
      letterSpacing: '0.25em', textTransform: 'uppercase',
      color: 'rgba(253,250,245,0.2)', fontFamily: 'Inter, sans-serif', margin: 0,
    }}>Events Performed</p>
  </div>
</section>

{/* STATS BAR */}
<div style={{ backgroundColor: '#111009' }}>

  {/* Numbers row */}
  <div style={{
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  }}>
    {[
      { number: '300+', label: 'Events Performed' },
      { number: '140M', label: 'Video Views' },
      { number: '6+', label: 'Hours of Repertoire' },
      { number: '24hr', label: 'Response Time' },
    ].map((s, i) => (
      <div key={i} style={{
        padding: '3rem 2rem', textAlign: 'center',
        borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.5rem, 4vw, 4rem)',
          fontWeight: '400', color: '#fdfaf5',
          lineHeight: '1', margin: '0 0 0.6rem 0',
          letterSpacing: '-0.02em',
        }}>{s.number}</p>
        <p style={{
          fontSize: '0.55rem', fontWeight: '600',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', margin: 0,
        }}>{s.label}</p>
      </div>
    ))}
  </div>

  {/* Trusted By logos row */}
  <div style={{
    display: 'flex', alignItems: 'center',
    padding: '2rem 3rem', gap: '0',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  }}>
    <p style={{
      fontSize: '0.55rem', fontWeight: '700',
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif',
      whiteSpace: 'nowrap', flexShrink: 0, margin: '0 4rem 0 0',
    }}>Trusted By</p>
    <div style={{
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flex: 1, flexWrap: 'wrap', gap: '2rem',
    }}>
      {venueLogos.map((v, i) => (
        <img key={i} src={`/images/${v.file}`} alt={v.name} style={{
          height: '60px', width: 'auto', objectFit: 'contain',
          filter: i === 4 ? 'brightness(0) invert(1)' : 'none',
          opacity: 0.85, transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')} />
      ))}
    </div>
  </div>

</div>

        {/* WHO IS ETHAN */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img src="/images/ethansingingorange.png" alt="Ethan Hoffman"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }} />
                  </div>
                  <div style={{
                    position: 'absolute', top: '1.5rem', left: '1.5rem',
                    right: '-1.5rem', bottom: '-1.5rem',
                    border: '1px solid rgba(196,98,45,0.3)', zIndex: -1,
                  }} />
                </div>
                <div>
                  <p className="section-label" style={{ marginBottom: '1rem' }}>Who is Ethan</p>
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
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
                  }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '0.8rem')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '0.5rem')}>
                    Full Story <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* WHAT SETS ETHAN APART */}
        <section style={{ backgroundColor: '#1a1814', overflow: 'hidden', position: 'relative' }}>
          <style>{`
            .wse-section { padding: 10rem 0; position: relative; }
            .wse-marquee-track {
              position: absolute; top: 50%; left: 0;
              transform: translateY(-50%);
              white-space: nowrap;
              animation: wse-scroll 25s linear infinite;
              pointer-events: none; z-index: 0;
            }
            .wse-marquee-text {
              font-family: 'Playfair Display', serif;
              font-size: clamp(8rem, 18vw, 18rem);
              font-weight: 700; color: transparent;
              -webkit-text-stroke: 1px rgba(196,168,130,0.06);
              letter-spacing: -0.02em; line-height: 1;
              display: inline-block; padding-right: 4rem;
            }
            @keyframes wse-scroll {
              from { transform: translateY(-50%) translateX(0); }
              to { transform: translateY(-50%) translateX(-50%); }
            }
            .wse-item {
              position: relative; z-index: 2;
              display: grid; grid-template-columns: 80px 1fr 1fr;
              align-items: center; gap: 3rem; padding: 3.5rem 0;
              border-top: 1px solid rgba(196,168,130,0.08);
              cursor: default; transition: border-color 0.5s ease;
            }
            .wse-item:last-child { border-bottom: 1px solid rgba(196,168,130,0.08); }
            .wse-item:hover { border-color: rgba(196,98,45,0.2); }
            .wse-num {
              font-family: 'Playfair Display', serif;
              font-size: 5rem; font-weight: 700;
              color: rgba(196,168,130,0.08); line-height: 1;
              letter-spacing: -0.03em;
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); display: block;
            }
            .wse-item:hover .wse-num { color: #c4622d; transform: scale(1.15) translateX(4px); }
            .wse-title {
              font-family: 'Playfair Display', serif;
              font-size: clamp(2.5rem, 5vw, 5rem);
              font-weight: 600; line-height: 1.0; letter-spacing: -0.025em;
              background: linear-gradient(135deg, rgba(253,250,245,0.15) 0%, rgba(253,250,245,0.08) 100%);
              -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .wse-item:hover .wse-title {
              background: linear-gradient(135deg, #fdfaf5 0%, rgba(253,250,245,0.75) 100%);
              -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
              letter-spacing: -0.02em;
            }
            .wse-right { display: flex; flex-direction: column; align-items: flex-end; gap: 1rem; }
            .wse-tag {
              font-size: 0.6rem; font-weight: 700; letter-spacing: 0.3em;
              text-transform: uppercase; font-family: Inter, sans-serif;
              color: rgba(196,98,45,0); border: 1px solid rgba(196,98,45,0);
              padding: 0.45rem 1.1rem;
              transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              transform: translateY(8px);
            }
            .wse-item:hover .wse-tag { color: #c4622d; border-color: rgba(196,98,45,0.35); transform: translateY(0); }
            .wse-body {
              font-size: 0.82rem; line-height: 1.9;
              color: rgba(253,250,245,0); text-align: right; max-width: 340px;
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); transform: translateY(12px);
            }
            .wse-item:hover .wse-body { color: rgba(253,250,245,0.45); transform: translateY(0); }
            .wse-line {
              position: absolute; left: 0; bottom: -1px;
              height: 1px; width: 0;
              background: linear-gradient(to right, #c4622d, rgba(196,98,45,0));
              transition: width 0.7s cubic-bezier(0.16, 1, 0.3, 1); z-index: 3;
            }
            .wse-item:hover .wse-line { width: 100%; }
            @media (max-width: 768px) {
              .wse-item { grid-template-columns: 50px 1fr; gap: 1.5rem; }
              .wse-right { display: none; }
              .wse-num { font-size: 3rem; }
              .wse-title { font-size: clamp(2rem, 8vw, 3rem); }
            }
          `}</style>

          <div className="wse-marquee-track">
            {['ETHAN HOFFMAN ', 'ETHAN HOFFMAN ', 'ETHAN HOFFMAN ', 'ETHAN HOFFMAN '].map((t, i) => (
              <span key={i} className="wse-marquee-text">{t}</span>
            ))}
          </div>

          <div className="wse-section">
            <div className="container">
              <div style={{ marginBottom: '5rem', position: 'relative', zIndex: 2 }}>
                <p style={{ fontSize: '0.62rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d' }}>
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

        {/* SERVICES CAROUSEL */}
        <ScrollReveal delay={100}>
          <ServicesCarousel />
        </ScrollReveal>

       {/* TESTIMONIALS */}
<ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#1a1814', padding: '8rem 0', overflow: 'hidden' }}>
    <div className="container">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <p style={{
          fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#c4622d',
          fontFamily: 'Inter, sans-serif', margin: '0 0 1rem 0',
        }}>Testimonials</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '600', color: '#fdfaf5',
          lineHeight: '1.15', margin: 0, letterSpacing: '-0.02em',
        }}>What people are saying</h2>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {[
          {
            quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform, he transformed the atmosphere completely.",
            name: 'Sarah and James K.',
            event: 'Wedding Reception',
            venue: 'The Shade Hotel, Manhattan Beach',
          },
          {
            quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
            name: 'Michelle T.',
            event: 'Corporate Event',
            venue: 'Renaissance LAX Hotel',
          },
        ].map((t, i) => (
<div key={i} style={{
  padding: '3.5rem',
  backgroundColor: i === 0 ? 'rgba(196,168,130,0.06)' : 'rgba(196,98,45,0.06)',
  borderTop: `2px solid ${i === 0 ? 'rgba(196,168,130,0.2)' : '#c4622d'}`,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}}>
            {/* Big quote mark */}
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '8rem', lineHeight: '0.5',
              color: i === 0 ? 'rgba(196,168,130,0.15)' : 'rgba(196,98,45,0.2)',
              marginBottom: '1.5rem', userSelect: 'none',
            }}>"</div>

            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
              fontStyle: 'italic', fontWeight: '400',
              color: 'rgba(253,250,245,0.8)',
              lineHeight: '1.8', margin: '0 0 2.5rem 0',
            }}>{t.quote}</p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                backgroundColor: i === 0 ? 'rgba(196,168,130,0.2)' : 'rgba(196,98,45,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1rem', color: i === 0 ? '#c4a882' : '#c4622d',
                }}>{t.name[0]}</span>
              </div>
              <div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                  fontWeight: '700', color: '#fdfaf5', margin: '0 0 0.2rem 0',
                }}>{t.name}</p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
                  color: '#c4622d', margin: 0, letterSpacing: '0.05em',
                }}>{t.event} · {t.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/testimonials" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          color: '#c4622d', textDecoration: 'none',
          fontSize: '0.65rem', fontWeight: '700',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif', transition: 'gap 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.gap = '1rem')}
        onMouseLeave={e => (e.currentTarget.style.gap = '0.6rem')}>
          Read More Reviews <span>→</span>
        </Link>
      </div>

    </div>
  </section>
</ScrollReveal>

        {/* WE MAKE IT UNFORGETTABLE */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
              <div style={{ padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
                  What do you say
                </p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: '400', fontStyle: 'italic',
                  color: '#fdfaf5', lineHeight: '1.1', marginBottom: '2rem',
                }}>We make it unforgettable</h2>
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
              <div style={{
                backgroundImage: 'url(/images/ethanincar.png)',
                backgroundSize: 'cover', backgroundPosition: 'center 60%',
              }} />
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  )
}