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
    position: 'center top',
    href: '/contact',
    cta: 'Book Ethan',
  },
  {
    tab: 'Private Events',
    tag: 'Intimate Settings',
    headline: 'The room will feel different when he plays',
    body: 'Whether a dinner party, milestone birthday, or upscale celebration, Ethan reads the room and shapes the energy in real time.',
    features: ['Dinner Parties', 'Birthday Celebrations', 'Upscale Gatherings', 'Fully Customizable'],
    img: '/images/ethanwithcrowd.png',
    position: 'center bottom',
    href: '/contact',
    cta: 'Book Ethan',
  },
  {
    tab: 'Corporate Events',
    tag: 'Professional',
    headline: 'Entertainment that leaves an impression',
    body: 'Ethan has performed for major brands and corporate functions across Los Angeles. He transforms a standard event into something people talk about.',
    features: ['Brand Events & Launches', 'Fundraisers & Galas', 'Holiday Parties', 'Networking Events'],
    img: '/images/ethansoloshot.png',
    position: 'center bottom',
    href: '/contact',
    cta: 'Book Ethan',
  },
  {
    tab: 'Original Music',
    tag: 'Recording Artist',
    headline: 'Music written from real life',
    body: 'Beyond events, Ethan is a recording artist with original music on all major platforms. Soulful, honest, and deeply personal.',
    features: ['Available on Spotify', 'Available on Apple Music', 'Original Compositions', 'Live Originals at Events'],
    img: '/images/ethanfighton.png',
    position: 'center top',
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
  { name: 'The Magnolia', file: 'themagnolialogo.png' },
  { name: 'The Shade Hotel', file: 'shadelogo.png' },
  { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png' },
  { name: 'The Lighthouse Cafe', file: 'lighthousecafelogo.png' },
  { name: 'Tower 12', file: 'tower12logo.png' },
]

function ServicesCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive(a => (a + 1) % svcs.length), 4500)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section id="services" style={{ backgroundColor: '#1a1814', padding: '4rem 0' }}>
      <style>{`
        .svc-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .svc-header {
          display: flex; justify-content: space-between;
          align-items: center; margin-bottom: 1.5rem;
        }
        .svc-view-btn {
          padding: 0.75rem 1.75rem; background-color: #c4622d;
          color: #fdfaf5; text-decoration: none;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          font-family: Inter, sans-serif; transition: background-color 0.3s ease;
          white-space: nowrap;
        }
        .svc-view-btn:hover { background-color: #a8521f; }
        .svc-tabs {
          display: flex; gap: 0;
          border-bottom: 1px solid rgba(196,168,130,0.15);
          margin-bottom: 1.5rem; flex-wrap: wrap;
        }
        .svc-tab {
          background: none; border: none; cursor: pointer;
          font-family: Inter, sans-serif; font-size: 0.68rem;
          font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 0.8rem 1.75rem; transition: all 0.3s ease;
          border-bottom: 2px solid transparent; margin-bottom: -1px;
          color: rgba(253,250,245,0.35);
        }
        .svc-tab:hover { color: rgba(253,250,245,0.7); }
        .svc-tab.active { color: #fdfaf5 !important; border-bottom: 2px solid #c4622d !important; }
        .svc-stage {
          position: relative; width: 100%;
          height: 68vh; min-height: 520px; overflow: hidden;
        }
        .svc-photo {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease;
        }
        .svc-dot-track {
          position: absolute; left: 1.25rem; top: 50%;
          transform: translateY(-50%);
          display: flex; flex-direction: column;
          gap: 0.6rem; z-index: 10;
        }
        .svc-dot {
          width: 10px; height: 10px; border-radius: 50%;
          border: none; cursor: pointer; padding: 0;
          transition: all 0.3s ease;
          background: rgba(253,250,245,0.35);
        }
        .svc-dot.active { background: #c4622d; transform: scale(1.3); }
        .svc-card {
          position: absolute; top: 50%; right: 4%;
          transform: translateY(-50%);
          background: #ffffff; width: 310px;
          padding: 2.25rem 2.25rem 2rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3); z-index: 10;
        }
        .svc-pill {
          display: inline-block; background: #c4622d; color: #fff;
          font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          font-family: Inter, sans-serif;
          padding: 0.38rem 0.9rem; margin-bottom: 1.1rem;
        }
        .svc-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem; font-weight: 600;
          color: #1a1814; line-height: 1.3; margin-bottom: 0.85rem;
        }
        .svc-card p {
          font-size: 0.82rem; line-height: 1.75;
          color: #7a736e; margin-bottom: 1.25rem;
        }
        .svc-features {
          list-style: none; padding: 0; margin: 0 0 1.5rem;
          border-top: 1px solid rgba(26,24,20,0.08);
        }
        .svc-features li {
          font-size: 0.82rem; color: #4a4440;
          padding: 0.55rem 0;
          border-bottom: 1px solid rgba(26,24,20,0.08);
        }
        .svc-learn-btn {
          display: block; text-align: center; padding: 0.85rem;
          border: 1.5px solid #1a1814; color: #1a1814;
          text-decoration: none; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          font-family: Inter, sans-serif; transition: all 0.3s ease;
          background: transparent;
        }
        .svc-learn-btn:hover { background: #c4622d; border-color: #c4622d; color: #fff; }
        .svc-progress {
          position: absolute; bottom: 0; left: 0;
          height: 2px; background: #c4622d;
          animation: svc-bar 4.5s linear infinite;
          z-index: 10;
        }
        @keyframes svc-bar { from { width: 0%; } to { width: 100%; } }
      `}</style>

      <div className="svc-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

        {/* Header */}
        <div className="svc-header">
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.4rem', fontFamily: 'Inter, sans-serif' }}>What Ethan Offers</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '400', color: '#fdfaf5', margin: 0 }}>
              The perfect vibe <em style={{ fontWeight: '300' }}>for every occasion</em>
            </h2>
          </div>
          <Link href="/contact" className="svc-view-btn">Book Now</Link>
        </div>

        {/* Tabs */}
        <div className="svc-tabs">
          {svcs.map((s, i) => (
            <button key={i} className={`svc-tab${i === active ? ' active' : ''}`}
              onClick={() => { setActive(i); setPaused(true) }}>
              {s.tab}
            </button>
          ))}
        </div>

        {/* Stage */}
        <div className="svc-stage">
          <img className="svc-photo" src={svcs[active].img} alt={svcs[active].tab}
            style={{ objectPosition: svcs[active].position || 'center top' }} />

          {!paused && <div key={active} className="svc-progress" />}

          <div className="svc-dot-track">
            {svcs.map((_, i) => (
              <button key={i} className={`svc-dot${i === active ? ' active' : ''}`}
                onClick={() => { setActive(i); setPaused(true) }} />
            ))}
          </div>

          <div className="svc-card">
            <span className="svc-pill">{svcs[active].tag}</span>
            <h3>{svcs[active].headline}</h3>
            <p>{svcs[active].body}</p>
            <ul className="svc-features">
              {svcs[active].features?.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <Link href={svcs[active].href} className="svc-learn-btn">{svcs[active].cta}</Link>
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
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', backgroundColor: '#1a1814',
        }}>
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            backgroundImage: 'url(/images/ethanphotositting.png)',
            backgroundSize: 'cover', backgroundPosition: 'center top',
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            background: 'linear-gradient(to bottom, rgba(26,24,20,0.5) 0%, rgba(26,24,20,0.45) 50%, rgba(26,24,20,0.92) 100%)',
          }} />
          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 2rem' }}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: '600', color: '#fdfaf5',
              lineHeight: '1.05', marginBottom: '1.2rem',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}>Ethan Hoffman</h1>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: '300', fontStyle: 'italic',
              color: 'rgba(253,250,245,0.85)', marginBottom: '2.5rem',
            }}>Soulful Live Music for Weddings and Private Events</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book Ethan</Link>
              <Link href="/music" className="btn-outline">Watch Live</Link>
            </div>
          </div>
        </section>

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

        {/* VENUE LOGOS */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814', padding: '5rem 0' }}>
            <div className="container">
              <p style={{
                textAlign: 'center', fontSize: '0.7rem', fontWeight: '600',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(253,250,245,0.3)', marginBottom: '3rem',
              }}>Past clients and venues include</p>
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap',
                gap: '2rem', marginBottom: '3rem', padding: '0 2rem',
              }}>
                {venueLogos.map((v, i) => (
                  <img key={i} src={`/images/${v.file}`} alt={v.name} style={{
                    height: '65px', width: 'auto', objectFit: 'contain',
                    opacity: 0.7, transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')} />
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/venues" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.8rem', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>View All Venues →</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* TESTIMONIALS */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p className="section-label" style={{ marginBottom: '1rem' }}>Testimonials</p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '600', color: '#1a1814', lineHeight: '1.2',
                }}>What People Are Saying About Ethan</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                {testimonials.map((t, i) => (
                  <div key={i} style={{ padding: '3rem', backgroundColor: '#fff', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
                    <p style={{ fontSize: '2rem', color: '#c4622d', fontFamily: 'Playfair Display, serif', opacity: 0.4, lineHeight: '1', marginBottom: '1rem' }}>"</p>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontStyle: 'italic', color: '#2d2926', lineHeight: '1.8', marginBottom: '1.5rem' }}>{t.quote}</p>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#1a1814', marginBottom: '0.2rem' }}>{t.name}</p>
                    <p style={{ fontSize: '0.75rem', color: '#c4622d', letterSpacing: '0.05em' }}>{t.event}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/testimonials" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.8rem', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>Read More Reviews →</Link>
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