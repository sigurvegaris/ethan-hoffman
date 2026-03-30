'use client'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const comparisons = [
    'Billy Joel', 'Ed Sheeran', 'Frank Sinatra', 'Jack Johnson',
    'John Mayer', 'Justin Timberlake', 'Marvin Gaye', 'Mac Ayres', 'Stevie Wonder',
  ]

  const tickerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: 'Meet Ethan',
      photo: '/images/ethanincar.jpg',
      photoPosition: 'center 60%',
      photoCaption: null,
      photo2: null,
      photo2Caption: null,
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Ethan Hoffman is a highly sought-after pop-soul vocalist who performs at destination events, luxury hotels, popular venues, high-end restaurants, and more. On stage, Ethan performs with a microphone and a radiant spirit, captivating audiences while backed by professional instrumentation that is meticulously mixed and mastered. Every performance features vocal arrangements that take hours of craftsmanship to perfect. He has a strong instinct for reading the room and pulling people into the moment, shaping a sophisticated atmosphere for every guest.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460' }}>
            His sound captures the soul-booming vocals of Stevie Wonder and the relaxed coastal vibe of Jason Mraz, offering a vocalist-heavy experience rooted in authentic connection. Ethan is an old soul brought up in a new generation; you can hear that audibly through the music, and it&apos;s a quality that all audiences can appreciate.
          </p>
        </>
      ),
    },
    {
      label: 'Musical Journey',
      photo: '/images/ethanhandshakingguy.png',
      photoPosition: 'center center',
      photoCaption: 'Ethan (right) with Morgan (left) backstage at the Wiltern Theater before a sold-out night at the Wiltern Theater.',
      photo2: '/images/ethanthreeguys.jpg',
      photo2Caption: 'Ethan (left), with Morgan Jay (center) and Tofer (right), the lead keyboardist for Morgan.',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Ethan&apos;s vocal talent was recognized at the age of 12 when he auditioned for his first musical theater production and immediately landed a lead role. This early success led him to win the South Bay Teen Idol competition, though he remained unsure how his passion would materialize beyond adolescence.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            In 2021, Ethan was accepted into the Marshall School of Business at the University of Southern California. While pursuing his business degree, he formed a band and began writing music again as a source of pure enjoyment, never realizing the scale of what was to come.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            The pivotal moment arrived in 2023 while sitting in the front row of a show by famous comedian Morgan Jay. When Morgan sang the question, &ldquo;What&apos;s your name, bro?&rdquo; Ethan sang his response back so well that it surprised both Morgan and the crowd. The impromptu encounter was captured on video and surpassed 5 million views in just three hours. It served as the nudge Ethan needed to pursue music full time.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Since that night, both of their social media platforms have grown massively, most notably with Morgan now having over 5 million followers on Instagram and 10 million followers on TikTok. Ethan has been honored to open for Morgan at iconic sold-out venues including the Wiltern Theater, Magnolia Theater, and the Comedy Store, as well as internationally in Berlin while studying abroad.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460' }}>
            Following the momentum of these high-profile experiences, Ethan is now consistently booked throughout the South Bay and Los Angeles for professional cover sets ranging from one to four hours. He brings years of natural talent and charisma to every stage, synthesizing a background that spans from his roots in musical theater to his global performances with Morgan Jay.
          </p>
        </>
      ),
    },
    {
      label: 'Original Artistry',
      photo: '/images/ethanpinkbackground.jpg',
      photoPosition: 'center 10%',
      photoCaption: null,
      photo2: null,
      photo2Caption: null,
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Ethan performs at ticketed events where fans and listeners come to hear his originals in a high-vibe environment. His original songwriting is highly existential and contemplative, exploring themes of love, loss, impermanence, and longing. In addition to his traditional vocal performances, Ethan utilizes a looping station to build full arrangements live. By layering beatboxing, bass lines, and harmony stacks, he creates a complete band experience using only his voice. He&apos;s performed at legendary venues such as the Lighthouse Cafe (famously featured in the film La La Land), The Mint, Project Barley Redondo Beach, Thompson Hotel, and more.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460' }}>
            Ethan is deeply committed to his craft, ensuring he brings 100% of his effort to every single performance. In an increasing digital age with shortened attention spans, people are yearning for ways to feel human again. Ethan&apos;s music provides just that.
          </p>
        </>
      ),
    },
  ]

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return
    let pos = 0
    let frameId: number | null = null
    const speed = 0.4
    const step = () => {
      pos -= speed
      if (Math.abs(pos) >= ticker.scrollWidth / 2) pos = 0
      ticker.style.transform = `translateX(${pos}px)`
      frameId = requestAnimationFrame(step)
    }
    frameId = requestAnimationFrame(step)
    return () => { if (frameId) cancelAnimationFrame(frameId) }
  }, [])

  return (
    <>
      <Navbar />

      <style>{`
        .about-page { background-color: #f5f0e8; min-height: 100vh; overflow-x: hidden; }
        .about-hero { background-color: #1a1814; padding: 8rem 0 5rem; }

        .about-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 5rem 0 7rem;
        }

        /* ── Big bold tabs ── */
        .about-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 2px solid rgba(26,24,20,0.1);
          margin-bottom: 4rem;
        }

        .about-tab {
          background: none;
          border: none;
          padding: 0.75rem 0.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 700;
          font-style: normal;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.2);
          cursor: pointer;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
          transition: color 0.25s ease, border-color 0.25s ease;
          text-align: center;
        }
        .about-tab:hover { color: rgba(196,98,45,0.5); }
        .about-tab.active { color: #c4622d; border-bottom: 3px solid #c4622d; }

        /* ── Content grid: photo left, text right ── */
        .about-tab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          animation: fadeInUp 0.3s ease;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .about-tab-photo {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .about-tab-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-photo-caption {
          margin-top: 0.6rem;
          font-size: 0.72rem;
          color: rgba(26,24,20,0.4);
          font-style: italic;
          line-height: 1.5;
        }

        .about-facts {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(196,168,130,0.3);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* ── Ticker ── */
        .about-ticker-section { background-color: #f5f0e8; padding: 3rem 0 2rem; overflow: hidden; position: relative; }
        .about-ticker-fade-left, .about-ticker-fade-right { position: absolute; top: 0; bottom: 0; width: 150px; z-index: 2; pointer-events: none; }
        .about-ticker-fade-left { left: 0; background: linear-gradient(to right, #f5f0e8, transparent); }
        .about-ticker-fade-right { right: 0; background: linear-gradient(to left, #f5f0e8, transparent); }
        .about-ticker-outer { overflow: hidden; width: 100%; }
        .about-ticker-track { display: flex; flex-wrap: nowrap; white-space: nowrap; will-change: transform; width: max-content; }

        /* ── Stats ── */
        .about-stat-section { background-color: #f5f0e8; padding: 6rem 0; }
        .about-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .about-stat-card { text-align: center; padding: 3rem 2rem; }
        .about-stat-card + .about-stat-card { border-left: 1px solid rgba(196,168,130,0.3); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-tab-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-tab-photo { aspect-ratio: 4/3; max-width: 560px; }
        }

        @media (max-width: 768px) {
          .about-hero { padding: 7rem 0 3rem; }
          .about-shell { width: min(1200px, calc(100% - 2rem)); padding: 3.5rem 0 5rem; }
          .about-tab { font-size: 1.2rem; padding-right: 1.5rem; }
          .about-facts { grid-template-columns: 1fr; }
          .about-ticker-section { padding: 4rem 0; }
          .about-ticker-fade-left, .about-ticker-fade-right { width: 56px; }
          .about-stat-section { padding: 4rem 0; }
          .about-stats-grid { grid-template-columns: 1fr; }
          .about-stat-card { padding: 2rem 1rem; }
          .about-stat-card + .about-stat-card { border-left: none; border-top: 1px solid rgba(196,168,130,0.3); }
        }

        @media (max-width: 480px) {
          .about-hero { padding: 6.5rem 0 2.5rem; }
          .about-shell { width: min(1200px, calc(100% - 1.5rem)); }
          .about-tab { font-size: 1rem; padding-right: 1.25rem; }
        }
      `}</style>

      <main className="about-page">

        <div className="about-hero">
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
              About Ethan
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1' }}>
              A Voice Built on Truth,<br />
              <em style={{ fontWeight: '400' }}>A Career Built on Stage</em>
            </h1>
          </div>
        </div>

        <div className="about-shell">

          {/* ── Big bold tabs ── */}
          <div className="about-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`about-tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── Tab content ── */}
          <div key={activeTab} className="about-tab-grid">

            {/* Photo */}
            <div>
              <div className="about-tab-photo" style={{ aspectRatio: '4/3' }}>
                <img
                  src={tabs[activeTab].photo}
                  alt={tabs[activeTab].label}
                  style={{ objectPosition: tabs[activeTab].photoPosition }}
                />
              </div>
              {tabs[activeTab].photoCaption && (
                <p className="about-photo-caption">{tabs[activeTab].photoCaption}</p>
              )}
              {tabs[activeTab].photo2 && (
                <>
                  <div className="about-tab-photo" style={{ marginTop: '1.25rem', aspectRatio: '4/3' }}>
                    <img
                      src={tabs[activeTab].photo2!}
                      alt={tabs[activeTab].label}
                      style={{ objectPosition: 'center center' }}
                    />
                  </div>
                  {tabs[activeTab].photo2Caption && (
                    <p className="about-photo-caption">{tabs[activeTab].photo2Caption}</p>
                  )}
                </>
              )}
            </div>

            {/* Text */}
            <div>
              {tabs[activeTab].content}

              {/* Quick facts only on Meet Ethan */}
              {activeTab === 0 && (
                <div className="about-facts">
                  <p style={{ gridColumn: '1/-1', fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.5rem' }}>
                    Quick Facts
                  </p>
                  {[
                    { label: 'Based In', value: 'Los Angeles, CA' },
                    { label: 'Graduated From', value: 'USC Marshall School of Business' },
                  ].map((f, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a1814', marginBottom: '0.2rem' }}>{f.label}</p>
                      <p style={{ fontSize: '0.9rem', color: '#6b6460' }}>{f.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ── Ticker ── */}
        <div className="about-ticker-section">
          <div className="about-ticker-fade-left" />
          <div className="about-ticker-fade-right" />
          <p style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.5rem' }}>
            Artists People Compare Him To
          </p>
          <div className="about-ticker-outer">
            <div ref={tickerRef} className="about-ticker-track">
              {[...comparisons, ...comparisons, ...comparisons, ...comparisons].map((name, i) => (
                <div key={i} style={{ display: 'inline-flex', flexShrink: 0, alignItems: 'center', gap: '1rem', padding: '0 1.5rem' }}>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                    fontWeight: '400',
                    color: i % 2 === 0 ? 'rgba(26,24,20,0.2)' : 'rgba(26,24,20,0.6)',
                    fontStyle: i % 3 === 0 ? 'italic' : 'normal',
                    whiteSpace: 'nowrap',
                  }}>
                    {name}
                  </span>
                  <span style={{ color: '#c4622d', fontSize: '0.5rem', flexShrink: 0 }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}