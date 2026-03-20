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
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Ethan Hoffman is a highly sought-after pop-soul vocalist who performs at destination events, luxury hotels, popular venues, high-end restaurants, and more. On stage, Ethan performs with a microphone and a radiant spirit, captivating audiences while backed by professional instrumentation that is meticulously mixed and mastered. Every performance features vocal arrangements that take hours of craftsmanship to perfect. He possesses a unique ability to read the room and pull people into the moment, ensuring a sophisticated atmosphere for every guest.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460' }}>
            His sound captures the soul-booming vocals of Stevie Wonder and the relaxed coastal vibe of Jason Mraz, offering a vocalist-heavy experience that is deeply present. This blend of influences creates a warm, modern style that feels both familiar and fresh. By focusing on the emotional resonance of each note, Ethan ensures that his music serves as a bridge between the artist and the audience.
          </p>
        </>
      ),
    },
    {
      label: 'Musical Journey',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Ethan&apos;s vocal talent was recognized at the age of twelve when he auditioned for his first musical theater production and immediately landed a lead role. This early success led him to win the South Bay Teen Idol competition, though he remained unsure how his passion would materialize beyond adolescence.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            In 2021, Ethan was accepted into the Marshall School of Business at the University of Southern California. While pursuing his business degree, he formed a band and began writing music again as a source of pure enjoyment, never realizing the scale of what was to come.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            The pivotal moment arrived in 2023 while sitting in the front row of a show by famous comedian Morgan Jay. When Morgan sang the question, &ldquo;What&apos;s your name, bro?&rdquo; Ethan sang his response back, a move neither the crowd nor Morgan had ever seen. The organic interaction was captured on video and surpassed six million views in just three hours. It served as the nudge Ethan needed to pursue music full time.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Since that night, both of their social media platforms have grown massively, with Morgan now reaching over five million followers on Instagram and over ten million on TikTok. Ethan has been honored to open for Morgan at iconic sold-out venues including the Wiltern Theater, Magnolia Theater, the Hollywood Improv, and the Comedy Store, as well as internationally in Berlin while studying abroad.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460' }}>
            Following the momentum of these high-profile experiences, Ethan is now consistently booked throughout the South Bay and Los Angeles for professional cover sets ranging from one to four hours. He brings years of natural talent and professionally developed charisma to every stage, synthesizing a background that spans from his roots in musical theater to his global performances with Morgan Jay.
          </p>
        </>
      ),
    },
    {
      label: 'Original Artist',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.25rem' }}>
            Ethan regularly performs at ticketed events where fans and listeners come to hear him improvise on the spot and experience his originals in a high-vibe environment. His original songwriting is existential and contemplative, exploring themes of love, loss, impermanence, and yearning. In addition to his traditional vocal performances, Ethan utilizes a looping station to build full arrangements live. By layering beatboxing, bass lines, and harmony stacks, he creates a complete band experience using only his voice. He has showcased this artistry at legendary venues such as the Lighthouse Cafe, famously featured in the film La La Land, as well as The Mint and Project Barley in Redondo Beach.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460' }}>
            Ethan is deeply committed to his craft, ensuring he brings 100% of his effort to every single performance. In an increasing digital age with shortened attention spans, people are yearning for ways to feel human again. Ethan&apos;s music provides just that. From a twelve-year-old on the theater stage to the artist he is today, his passion for performing has remained exactly the same.
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
          padding: 6rem 0;
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 5rem;
          align-items: start;
        }

        .about-photo { width: 100%; aspect-ratio: 3 / 4; overflow: hidden; background: #ddd3c8; }
        .about-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }

        .about-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid rgba(26,24,20,0.15);
          margin-bottom: 2rem;
        }

        .about-tab {
          background: none;
          border: none;
          padding: 0.75rem 0.5rem;
          font-family: Inter, sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.35);
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: color 0.25s ease, border-color 0.25s ease;
          text-align: center;
        }
        .about-tab:hover { color: #1a1814; }
        .about-tab.active { color: #c4622d; border-bottom: 2px solid #c4622d; }

        .about-tab-content { animation: fadeIn 0.3s ease; min-height: 220px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

        .about-quick-facts { border-top: 1px solid rgba(196,168,130,0.3); padding-top: 2rem; margin-top: 2rem; }
        .about-facts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        .about-ticker-section { background-color: #1a1814; padding: 5rem 0; overflow: hidden; position: relative; }
        .about-ticker-fade-left, .about-ticker-fade-right { position: absolute; top: 0; bottom: 0; width: 150px; z-index: 2; pointer-events: none; }
        .about-ticker-fade-left { left: 0; background: linear-gradient(to right, #1a1814, transparent); }
        .about-ticker-fade-right { right: 0; background: linear-gradient(to left, #1a1814, transparent); }
        .about-ticker-outer { overflow: hidden; width: 100%; }
        .about-ticker-track { display: flex; flex-wrap: nowrap; white-space: nowrap; will-change: transform; width: max-content; }

        .about-stat-section { position: relative; background-color: #f5f0e8; padding: 7rem 0; overflow: hidden; }
        .about-stat-bg { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Playfair Display', serif; font-size: clamp(8rem, 20vw, 18rem); font-weight: 700; color: rgba(196,168,130,0.08); white-space: nowrap; pointer-events: none; user-select: none; line-height: 1; }
        .about-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .about-stat-card { text-align: center; padding: 3rem 2rem; }
        .about-stat-card + .about-stat-card { border-left: 1px solid rgba(196,168,130,0.3); }

        @media (max-width: 1024px) {
          .about-main-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-photo-wrap { max-width: 620px; }
        }

        @media (max-width: 768px) {
          .about-hero { padding: 7rem 0 3rem; }
          .about-shell { width: min(1200px, calc(100% - 2rem)); padding: 4rem 0; }
          .about-facts-grid { grid-template-columns: 1fr; }
          .about-ticker-section { padding: 4rem 0; }
          .about-ticker-fade-left, .about-ticker-fade-right { width: 56px; }
          .about-stat-section { padding: 5rem 0; }
          .about-stat-bg { display: none; }
          .about-stats-grid { grid-template-columns: 1fr; }
          .about-stat-card { padding: 2rem 1rem; }
          .about-stat-card + .about-stat-card { border-left: none; border-top: 1px solid rgba(196,168,130,0.3); }
        }

        @media (max-width: 480px) {
          .about-hero { padding: 6.5rem 0 2.5rem; }
          .about-shell { width: min(1200px, calc(100% - 1.5rem)); }
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
          <div className="about-main-grid">
            <div className="about-photo-wrap">
              <div className="about-photo">
                <img src="/images/ethanalbumcover.png" alt="Ethan Hoffman" />
              </div>
            </div>

            <div>
              {/* ── Tabs ── */}
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

              {/* ── Tab Content ── */}
              <div key={activeTab} className="about-tab-content">
                {tabs[activeTab].content}
              </div>

              {/* ── Quick Facts ── */}
              <div className="about-quick-facts">
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
                  Quick Facts
                </p>
                <div className="about-facts-grid">
                  {[
                    { label: 'Hometown', value: 'Palos Verdes, CA' },
                    { label: 'Based In', value: 'Los Angeles, CA' },
                    { label: 'Education', value: 'USC Graduate' },
                    { label: 'Speciality', value: 'Live Looping' },
                  ].map((f, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a1814', marginBottom: '0.2rem' }}>{f.label}</p>
                      <p style={{ fontSize: '0.9rem', color: '#6b6460' }}>{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Ticker ── */}
        <div className="about-ticker-section">
          <div className="about-ticker-fade-left" />
          <div className="about-ticker-fade-right" />
          <p style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '2.5rem' }}>
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
                    color: i % 2 === 0 ? 'rgba(253,250,245,0.15)' : 'rgba(253,250,245,0.6)',
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

        {/* ── Stats ── */}
        <div className="about-stat-section">
          <div className="about-stat-bg">300+ 180M+ 2</div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="about-stats-grid">
              {[
                { number: '300+', label: 'Performances', sub: 'across LA and beyond' },
                { number: '180M+', label: 'Video Views', sub: 'and counting' },
                { number: '2', label: 'Sold-Out Wiltern Shows', sub: '2,000+ capacity each' },
              ].map((stat, i) => (
                <div key={i} className="about-stat-card">
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '600', color: '#c4622d', lineHeight: '1', marginBottom: '0.5rem' }}>
                    {stat.number}
                  </p>
                  <p style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1814', marginBottom: '0.4rem' }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#6b6460', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
                    {stat.sub}
                  </p>
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