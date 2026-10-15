'use client'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import FanWall from './components/FanWall'
import Press from './components/Press'
import ReleaseBanner, { useReleased } from './components/ReleaseBanner'
import { featuredSingle, formatReleaseDate } from './lib/release'

const venueLogos = [
  { name: 'The Wiltern', file: 'thewilternlogo.png', nudge: -6, height: 58 },
  { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png', nudge: 0, height: 58 },
  { name: 'Marriott', file: 'marriotlogo.png', nudge: 0, height: 58 },
  { name: 'The Shade Hotel', file: 'shadelogo.png', nudge: 0, height: 80 },
  { name: 'The Magnolia', file: 'themagnolialogo.png', nudge: 0, height: 64 },
  { name: 'USC', file: 'usclogo.png', nudge: 0, height: 72 },
]

export default function Home() {
  const singleOut = useReleased(featuredSingle.releaseDate)
  const singleDate = formatReleaseDate(featuredSingle.releaseDate).replace(/, \d{4}$/, '')

  return (
    <>
      <Navbar />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        img { display: block; max-width: 100%; }
        .page-container { background: #1a1814; touch-action: pan-y; }

        .hero-section { position: relative; min-height: 100svh; background: #1a1814; }
        .hero-overlay { position: absolute; inset: 0; z-index: 2; background: linear-gradient(to right, rgba(26,24,20,0.9) 0%, rgba(26,24,20,0.55) 58%, rgba(26,24,20,0.18) 100%); pointer-events: none; }
        .hero-content { position: relative; z-index: 3; min-height: 100svh; display: flex; flex-direction: column; justify-content: center; padding: 8rem 4rem 4rem; max-width: 760px; }
        .hero-topline { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
        .hero-release-pill { align-self: flex-start; display: inline-flex; align-items: center; gap: 0.6rem; margin-bottom: 1.75rem; padding: 0.55rem 1rem; border: 1px solid rgba(196,98,45,0.7); background: rgba(26,24,20,0.55); color: #fdfaf5; text-decoration: none; font-family: Inter, sans-serif; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; transition: background 0.2s ease; }
        .hero-release-pill:hover { background: #c4622d; }
        .hero-release-dot { width: 6px; height: 6px; border-radius: 50%; background: #c4622d; box-shadow: 0 0 0 4px rgba(196,98,45,0.25); }
        .hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; width: 100%; max-width: 360px; }

        .stats-wrap { background: #111009; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .stats-item { padding: 2rem 1.5rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.06); }
        .stats-item:last-child { border-right: none; }

        .trusted-row { padding: 2.5rem 3rem 3.5rem; background: #c4622d; text-align: center; }
        .trusted-logos { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); align-items: center; justify-items: center; gap: 1.5rem 1rem; width: 100%; max-width: 1100px; margin: 0 auto; }
        .trusted-logo-cell { width: 100%; display: flex; align-items: center; justify-content: center; padding: 0.75rem 1.25rem; }
        .trusted-logo { display: block; width: auto; object-fit: contain; opacity: 0.9; transition: opacity 0.3s ease, transform 0.3s ease; filter: brightness(0) invert(1); }
        .trusted-logo:hover { opacity: 1; transform: translateY(-1px); }
        .about-grid, .testimonial-grid, .cta-grid { display: grid; gap: 3rem; }
        .about-grid { grid-template-columns: 1fr 1fr; align-items: center; }
        .testimonial-grid { grid-template-columns: 1fr 1fr; gap: 2px; }
        .cta-grid { grid-template-columns: 1fr 1fr; min-height: 600px; align-items: stretch; }
        .cta-copy { padding: 6rem 4rem; display: flex; flex-direction: column; justify-content: center; }
        .cta-image { position: relative; min-height: 420px; overflow: hidden; align-self: stretch; margin-top: 7.5rem; }



        @media (max-width: 1024px) {
          .hero-content { padding: 7rem 2rem 3rem; max-width: 620px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-item:nth-child(2) { border-right: none; }
          .stats-item:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .trusted-row { gap: 1.5rem; padding: 2rem 1.5rem; }
          .trusted-logos { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
          .about-grid, .testimonial-grid, .cta-grid { grid-template-columns: 1fr; }
          .cta-copy { padding: 4rem 2rem; }
        }

        @media (max-width: 768px) {
          .hero-overlay { background: linear-gradient(to top, rgba(26,24,20,0.97) 0%, rgba(26,24,20,0.75) 38%, rgba(26,24,20,0.35) 65%, rgba(26,24,20,0.08) 100%); }
          .hero-content { min-height: 100svh; padding: 0 1.25rem 3rem; max-width: none; justify-content: flex-end; }
          .hero-topline { gap: 0.5rem; margin-bottom: 0.75rem; }
          .hero-actions { max-width: none; flex-direction: column; }
          .hero-actions a { width: 100%; text-align: center; padding: 1rem 1.5rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-item { padding: 2rem 1.25rem; border-right: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); }
          .stats-item:nth-child(2n) { border-right: none; }
          .stats-item:nth-last-child(-n+2) { border-bottom: none; }
          .trusted-row { padding: 2rem 1.25rem 2.5rem; }
          .trusted-logos { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 1.75rem 1rem; max-width: 100%; }
          .trusted-logo-cell { height: 56px; }
          .trusted-logo-cell:last-child { grid-column: auto !important; justify-self: center; }
          .trusted-logo { height: 34px; }
          .about-grid { gap: 2rem; }
          .testimonial-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .cta-grid { grid-template-columns: 1fr; min-height: auto; }
          .cta-copy { padding: 3.5rem 1.25rem; }
          .cta-image { min-height: 300px; order: -1; }
          .site-section { padding: 3.5rem 0 !important; }
        }

        @media (max-width: 480px) {
          .hero-content { padding: 0 1rem 2.5rem; }
          .stats-item { padding: 1.75rem 1rem; }
          .trusted-logos { gap: 0.75rem; }
          .trusted-logo { height: 28px; max-width: 100px; }
          .cta-copy { padding: 2.75rem 1rem; }
          .cta-image { min-height: 240px; }
          .about-grid { gap: 1.5rem; }
          .testimonial-grid { gap: 1rem; }
        }

        @media (max-width: 360px) {
          .stats-grid { grid-template-columns: 1fr; }
          .stats-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .stats-item:last-child { border-bottom: none; }
          .trusted-logos { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      <main className="page-container">

        {/* ── HERO ── */}
        <section className="hero-section">
          <Image
            src="/images/ethanphotositting.webp"
            alt="Ethan Hoffman performing live"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top', zIndex: 1 }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <a href="#new-music" className="hero-release-pill">
              <span className="hero-release-dot" />
              {singleOut ? `“${featuredSingle.title}” Out Now` : `“${featuredSingle.title}” · Coming ${singleDate}`}
              <span aria-hidden="true">→</span>
            </a>
            <div className="hero-topline">
              <div style={{ width: '2rem', height: '1px', backgroundColor: '#c4622d' }} />
              <p style={{ fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(253,250,245,0.65)', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                Los Angeles · Singer-Songwriter
              </p>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(3.2rem, 16vw, 10rem)', fontWeight: '700', color: '#fdfaf5', lineHeight: '0.95', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Ethan<br />Hoffman
            </h1>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 4vw, 1.3rem)', fontWeight: '300', fontStyle: 'italic', color: 'rgba(253,250,245,0.72)', margin: '0 0 2rem 0' }}>
              Soulful, honest songs written from real life
            </p>
            <div className="hero-actions">
              <Link href="/music" style={{ display: 'inline-block', padding: '0.9rem 1.5rem', backgroundColor: '#c4622d', color: '#fdfaf5', textDecoration: 'none', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                Listen
              </Link>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.9rem 1.5rem', backgroundColor: 'transparent', color: '#fdfaf5', textDecoration: 'none', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', border: '1px solid rgba(253,250,245,0.45)' }}>
                Book Ethan
              </Link>
            </div>
          </div>
        </section>

        {/* ── NEW RELEASE ── */}
        <ReleaseBanner />

        {/* ── STATS ── */}
        <div className="stats-wrap">
          <div className="stats-grid">
            {[
              { number: '180M', label: 'Views Across Platforms' },
              { number: '80k+', label: 'Followers Across Platforms' },
              { number: '300+', label: 'Events Performed' },
              { number: '8+',   label: 'Hours of Repertoire' },
            ].map((s, i) => (
              <div key={i} className="stats-item">
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: '400', color: '#fdfaf5', lineHeight: '1', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>{s.number}</p>
                <p style={{ fontSize: '0.55rem', fontWeight: '600', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <ScrollReveal delay={100}>
          <section className="site-section" style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div className="about-grid">
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src="/images/ethansingingorange.webp"
                      alt="Ethan Hoffman"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '-0.5rem', bottom: '-0.5rem', border: '1px solid rgba(196,98,45,0.3)', zIndex: -1 }} />
                </div>
                <div>
                  <p className="section-label" style={{ marginBottom: '1rem' }}>Who is Ethan?</p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '600', color: '#1a1814', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    A vocalist who plays rooms,<br /><em style={{ fontWeight: '400' }}>not just songs.</em>
                  </h2>
                  <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.2rem' }}>
                    It all started with a musical theater audition at 12 years old. Ethan&apos;s performance that day revealed a massive musical potential he was only beginning to recognize. It wasn&apos;t until he was performing at a university festival, 2,000-plus capacity theaters, and singing in a video that hit 140 million views before he really knew what others meant.
                  </p>
                  <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '2rem' }}>
                    Ethan has played over 300 gigs across Los Angeles and beyond at luxury hotels, private estates, hospital galas, corporate events, restaurant residencies, and opening at landmark venues like the Wiltern and Magnolia Theater. Whether he&apos;s putting a Pop-Soul spin on Stevie Wonder&apos;s &ldquo;Superstition&rdquo; or Bill Withers&apos; &ldquo;Lovely Day,&rdquo; audiences leave wanting more of a sound that feels brand new yet completely timeless, and curious to know the person behind the performance.
                  </p>
                  <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#c4622d', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Meet Ethan <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── PRESS ── */}
        <Press />

        {/* ── FAN WALL ── */}
        <ScrollReveal delay={100}><FanWall /></ScrollReveal>

        {/* ── LIVE BOOKINGS ── */}
        <section id="bookings">
          <div className="trusted-row">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', textAlign: 'center', margin: '0 0 1.25rem 0' }}>
              Past Clients &amp; Venues Include
            </p>
            <div style={{ width: '3rem', height: '1px', background: 'rgba(255,255,255,0.3)', margin: '0 auto 2rem' }} />
            <div className="trusted-logos">
              {venueLogos.map((v, i) => (
                <div key={i} className="trusted-logo-cell">
                  <img
                    src={`/images/${v.file}`}
                    alt={v.name}
                    className="trusted-logo"
                    loading="lazy"
                    style={{
                      height: `${v.height}px`,
                      width: 'auto',
                      filter: 'brightness(0) invert(1)',
                      transform: v.nudge ? `translateY(${v.nudge}px)` : undefined,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814', padding: '8rem 0', overflow: 'hidden' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{ fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', fontFamily: 'Inter, sans-serif', margin: '0 0 1rem 0' }}>Testimonials</p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.15', margin: 0, letterSpacing: '-0.02em' }}>What people are saying</h2>
              </div>
              <div className="testimonial-grid">
                {[
                  { quote: "Ethan Hoffman has been a joy to work with. He is truly a professional artist: prompt, polite, talented, entertaining, and most importantly, has great character and integrity.", name: 'Tony Nguyen', event: 'Talent Booker', venue: '' },
                  { quote: "Incredible music, great vibe, added energy to the atmosphere and made everyone feel good… his music makes me happy and I love singing along! He is kind and relates to his audience. He adds a great deal to any event!", name: 'Laura Schenasi', event: 'Executive VP', venue: 'TMMC' },
                ].map((t, i) => (
                  <div key={i} style={{ padding: '2.25rem', backgroundColor: i === 0 ? 'rgba(196,168,130,0.06)' : 'rgba(196,98,45,0.06)', borderTop: `2px solid ${i === 0 ? 'rgba(196,168,130,0.2)' : '#c4622d'}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '5rem', lineHeight: '0.5', color: i === 0 ? 'rgba(196,168,130,0.15)' : 'rgba(196,98,45,0.2)', marginBottom: '1rem', userSelect: 'none' }}>"</div>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', fontStyle: 'italic', fontWeight: '400', color: 'rgba(253,250,245,0.8)', lineHeight: '1.8', margin: '0 0 2rem 0' }}>{t.quote}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: i === 0 ? 'rgba(196,168,130,0.2)' : 'rgba(196,98,45,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: i === 0 ? '#c4a882' : '#c4622d' }}>{t.name[0]}</span>
                      </div>
                      <div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: '700', color: '#fdfaf5', margin: '0 0 0.2rem 0' }}>{t.name}</p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: '#c4622d', margin: 0, letterSpacing: '0.05em' }}>{t.event}{t.venue ? ` · ${t.venue}` : ''}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                <Link href="/testimonials" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#c4622d', textDecoration: 'none', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                  Read More Reviews <span>→</span>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── CTA ── */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814', overflow: 'hidden' }}>
            <div className="cta-grid" style={{ gap: 0 }}>
              <div className="cta-copy">
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Live Bookings</p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '400', fontStyle: 'italic', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '2rem' }}>Bring Ethan to Your Event</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(253,250,245,0.6)', marginBottom: '1.5rem' }}>
                  Ethan&apos;s voice carries the acoustic textures of Jason Mraz, the prolific storytelling of John Lennon, and the timeless warmth and soul of Bill Withers, blending into an entirely original artistry. This versatile mix of genres is reliable and appreciated across all demographics.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(253,250,245,0.6)', marginBottom: '1.5rem' }}>
                  Each set is curated to the venue, the audience, and whatever the moment calls for. The entire performance is shaped to hold attention from start to finish.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(253,250,245,0.6)', marginBottom: '2.5rem' }}>
                  Ethan is currently taking on new clients in 2026. To connect with him about your event and discuss availability, please click below.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary">Let&apos;s Connect</Link>
                  <Link href="/services" style={{ color: '#c4622d', textDecoration: 'none', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    Weddings, Private &amp; Corporate <span>→</span>
                  </Link>
                </div>
              </div>
              <div className="cta-image">
                <Image
                  src="/images/ethanincar.webp"
                  alt="Ethan Hoffman"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  )
}