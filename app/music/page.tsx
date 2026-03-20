'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
        .music-page {
          background-color: #1a1814;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .music-hero {
          background-color: #1a1814;
          padding: 8rem 0 5rem;
        }

        .music-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding-bottom: 6rem;
        }

        .music-featured {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 3rem;
          align-items: start;
          margin-bottom: 5rem;
        }

        .music-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .music-video-frame {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background-color: #2d2926;
        }

        .music-video-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .music-expect-card {
          padding: 2rem;
          border: 1px solid rgba(196,168,130,0.2);
        }

        .music-more-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

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
            <div>
              <div className="music-video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[0].id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={videos[0].label}
                />
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(253,250,245,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {videos[0].label}
              </p>
            </div>

            <div className="music-sidebar">
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
                  Stream on Spotify
                </p>
                <iframe
                  src="https://open.spotify.com/embed/artist/3wv3GWickdI3WcNEyV2zG6?utm_source=generator&theme=0"
                  width="100%"
                  height="200"
                  frameBorder="0"
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
                <div key={i}>
                  <div className="music-video-frame">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.label}
                    />
                  </div>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'rgba(253,250,245,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {video.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Press & Articles ── */}
        <div style={{ backgroundColor: '#1a1814', padding: '5rem 0', borderTop: '1px solid rgba(196,168,130,0.1)' }}>
          <div className="music-shell">
            <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem', textAlign: 'center' }}>
              Press
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '400', fontStyle: 'italic', color: '#fdfaf5', textAlign: 'center', marginBottom: '3rem' }}>
              As seen in
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { publication: 'Canvas Rebel', title: 'Meet Ethan Hoffman', href: 'https://canvasrebel.com/meet-ethan-hoffman/' },
                { publication: 'Gut Instinct Media', title: 'Unveiling the Soul of Ethan Hoffman: Beyond the Viral Fame', href: 'https://medium.com/@gutinstinctmedia/unveiling-the-soul-of-ethan-hoffman-beyond-the-viral-fame-a6ab70904fb3' },
                { publication: 'Voyage LA', title: 'Daily Inspiration: Meet Ethan Hoffman', href: 'https://voyagela.com/interview/daily-inspiration-meet-ethan-hoffman' },
              ].map((article, i) => (
                <a
                  key={i}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div style={{
                    padding: '2rem',
                    border: '1px solid rgba(196,168,130,0.3)',
                    backgroundColor: 'rgba(253,250,245,0.04)',
                    transition: 'border-color 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#c4622d'
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(196,98,45,0.08)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,168,130,0.3)'
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(253,250,245,0.04)'
                  }}
                  >
                    <p style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem' }}>
                      {article.publication}
                    </p>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: '400', color: 'rgba(253,250,245,0.9)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                      {article.title}
                    </p>
                    <p style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(253,250,245,0.55)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      Read Article <span>→</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}