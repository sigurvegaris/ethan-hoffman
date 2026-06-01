'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

        @media (max-width: 1024px) {
          .music-featured { grid-template-columns: 1fr; gap: 2rem; }
          .music-more-grid { grid-template-columns: repeat(2, 1fr); }
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
              See Ethan Live
            </h1>
          </div>
        </div>

        <div className="music-shell">
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