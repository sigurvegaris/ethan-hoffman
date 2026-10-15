'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReleased } from '../lib/useReleased'
import { singles, ep, formatReleaseDate, type Single } from '../lib/release'

function VideoEmbed({ id, label, priority = false }: { id: string; label: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  return (
    <div>
      <div className="music-video-frame" style={{ cursor: 'pointer' }} onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={label}
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={label}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading={priority ? 'eager' : 'lazy'}
            />
            {/* Play button */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.3)',
              transition: 'background 0.2s ease',
            }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                backgroundColor: '#c4622d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <p style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'rgba(253,250,245,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </p>
    </div>
  )
}

function RolloutStep({ item, index }: { item: Single; index: number }) {
  const out = useReleased(item.releaseDate)
  return (
    <div className="ep-step">
      <span className="ep-step-num">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <p className="ep-step-date">{formatReleaseDate(item.releaseDate)}</p>
        <p className="ep-step-title">{item.title}</p>
        <p className="ep-step-note">{item.note}</p>
      </div>
      <span className={`ep-step-status ${out ? 'out' : ''}`}>{out ? 'Out Now' : 'Coming'}</span>
    </div>
  )
}

function EpSection() {
  const rollout: Single[] = [...singles, { title: `${ep.title} (EP)`, releaseDate: ep.releaseDate, note: ep.note }]
  return (
    <section className="ep-section">
      <div className="ep-cover" aria-label="Ethan Hoffman EP cover, coming soon">
        <span className="ep-cover-name">Ethan<br />Hoffman</span>
        <span className="ep-cover-tag">The EP · {new Date(ep.releaseDate).getFullYear()}</span>
      </div>
      <div>
        <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
          The Debut EP
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1.25rem' }}>
          Ethan Hoffman
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'rgba(253,250,245,0.65)', marginBottom: '2rem', maxWidth: '560px' }}>
          Six songs and {ep.runtime} of music, opening with a freestyled intro and tied together by spoken
          interludes before each track. Every song was filmed live over two nights in a Malibu studio, so each
          one arrives with its own session video.
        </p>
        <div className="ep-steps">
          {rollout.map((item, i) => <RolloutStep key={item.title} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}

export default function Music() {
  const videos = [
    { id: 'Uu51n-4IRKU', label: 'Live Performance' },
    { id: 'DBc9dzliZ-w', label: 'Live Performance' },
    { id: 'iCRmtLvbcdw', label: 'Live Performance — Los Angeles' },
    { id: 'BtW2ebXZt1o', label: 'Live Performance' },
  ]

  return (
    <>
      <Navbar />

      <style>{`
        .music-page { background-color: #1a1814; min-height: 100vh; overflow-x: hidden; }
        .music-hero { background-color: #1a1814; padding: 8rem 0 5rem; }
        .music-shell { width: min(1200px, calc(100% - 3rem)); margin: 0 auto; padding-bottom: 6rem; }
        .music-featured { display: grid; grid-template-columns: 1.4fr 1fr; gap: 3rem; align-items: start; margin-bottom: 5rem; }
        .music-sidebar { display: flex; flex-direction: column; gap: 1rem; }
        .music-video-frame { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background-color: #2d2926; }
        .music-video-frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
        .music-expect-card { padding: 2rem; border: 1px solid rgba(196,168,130,0.2); }
        .music-more-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .ep-section { display: grid; grid-template-columns: minmax(260px, 0.8fr) 1.2fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem; padding-bottom: 5rem; border-bottom: 1px solid rgba(196,168,130,0.12); }
        .ep-cover { aspect-ratio: 1; background: linear-gradient(160deg, #2d2926 0%, #1a1814 60%, #3a1f12 100%); border: 1px solid rgba(196,168,130,0.2); display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; }
        .ep-cover-name { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 5vw, 3.6rem); font-weight: 700; line-height: 0.95; color: #fdfaf5; letter-spacing: -0.02em; }
        .ep-cover-tag { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; color: #c4622d; }
        .ep-steps { display: flex; flex-direction: column; }
        .ep-step { display: grid; grid-template-columns: 44px 1fr auto; gap: 1rem; align-items: center; padding: 1.1rem 0; border-top: 1px solid rgba(196,168,130,0.12); }
        .ep-step:last-child { border-bottom: 1px solid rgba(196,168,130,0.12); }
        .ep-step-num { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: rgba(196,168,130,0.3); }
        .ep-step-date { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(253,250,245,0.45); margin: 0 0 0.25rem; }
        .ep-step-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: #fdfaf5; margin: 0 0 0.15rem; }
        .ep-step-note { font-size: 0.8rem; color: rgba(253,250,245,0.55); margin: 0; }
        .ep-step-status { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(253,250,245,0.55); border: 1px solid rgba(253,250,245,0.2); padding: 0.4rem 0.75rem; white-space: nowrap; }
        .ep-step-status.out { color: #fdfaf5; background: #c4622d; border-color: #c4622d; }

        @media (max-width: 1024px) {
          .music-featured { grid-template-columns: 1fr; gap: 2rem; }
          .music-more-grid { grid-template-columns: repeat(2, 1fr); }
          .ep-section { grid-template-columns: 1fr; gap: 2rem; }
          .ep-cover { max-width: 420px; }
        }
        @media (max-width: 768px) {
          .music-hero { padding: 7rem 0 3rem; }
          .music-shell { width: min(1200px, calc(100% - 2rem)); padding-bottom: 4rem; }
          .music-featured { margin-bottom: 3.5rem; }
          .music-sidebar { gap: 1.5rem; }
          .music-expect-card { padding: 1.5rem; }
          .music-more-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }
        @media (max-width: 480px) {
          .music-hero { padding: 6.5rem 0 2.5rem; }
          .music-shell { width: min(1200px, calc(100% - 1.5rem)); }
          .music-expect-card { padding: 1.25rem; }
        }
      `}</style>

      <main className="music-page">
        <div className="music-hero">
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
              Music and Performance
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1' }}>
              New Music &amp; Live Sessions
            </h1>
          </div>
        </div>

        <div className="music-shell">
          <EpSection />

          <div className="music-featured">
            <VideoEmbed id={videos[0].id} label={videos[0].label} priority={true} />

            <div className="music-sidebar">
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
                  Stream on Spotify
                </p>
                <iframe
                  src="https://open.spotify.com/embed/artist/3wv3GWickdI3WcNEyV2zG6?utm_source=generator&theme=0"
                  width="100%" height="200" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: '4px' }}
                  title="Ethan Hoffman on Spotify"
                />
              </div>

              <div className="music-expect-card">
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.2rem' }}>
                  What to Expect
                </p>
                {[
                  'Soulful, vocalist-led performances',
                  'Live looping & beatboxing',
                  'Crowd improvisation & interaction',
                  'Covers + original music',
                  '70s, 80s & modern hits',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: i === 4 ? '0' : '0.8rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c4622d', flexShrink: 0, marginTop: '0.45rem' }} />
                    <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.7)', lineHeight: '1.55' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '2rem', textAlign: 'center' }}>
              More Performances
            </p>
            <div className="music-more-grid">
              {videos.slice(1).map((video, i) => (
                <VideoEmbed key={i} id={video.id} label={video.label} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}