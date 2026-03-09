import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Music() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#1a1814', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{
              fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
            }}>Music and Performance</p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1',
            }}>
              See Ethan Live
            </h1>
          </div>
        </div>

        {/* Video + Spotify */}
        <div className="container" style={{ padding: '4rem 2rem 6rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '3rem', alignItems: 'start',
            marginBottom: '5rem',
          }}>

            {/* YouTube */}
            <div>
              <div style={{
                position: 'relative', paddingBottom: '56.25%',
                height: 0, overflow: 'hidden', backgroundColor: '#2d2926',
              }}>
                <iframe
                  src="https://www.youtube.com/embed/iCRmtLvbcdw"
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '100%', height: '100%', border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Ethan Hoffman Live Performance"
                />
              </div>
              <p style={{
                marginTop: '1rem', fontSize: '0.75rem',
                color: 'rgba(253,250,245,0.4)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Live Performance, Los Angeles</p>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Spotify */}
              <div>
                <p style={{
                  fontSize: '0.65rem', fontWeight: '600',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#c4622d', marginBottom: '1rem',
                }}>Stream on Spotify</p>
                <iframe
                  src="https://open.spotify.com/embed/artist/3wv3GWickdI3WcNEyV2zG6?utm_source=generator&theme=0"
                  width="100%" height="200" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy" style={{ borderRadius: '4px' }}
                  title="Ethan Hoffman on Spotify"
                />
              </div>

              {/* Apple Music */}
              <div>
                <p style={{
                  fontSize: '0.65rem', fontWeight: '600',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#c4622d', marginBottom: '1rem',
                }}>Stream on Apple Music</p>
                <a href="https://music.apple.com/us/artist/ethan-hoffman/1725423086"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.5rem',
                    backgroundColor: '#2d2926',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                  }}>
                  <span style={{ fontSize: '1.5rem' }}>🎵</span>
                  <div>
                    <p style={{ color: '#fdfaf5', fontSize: '0.85rem', fontWeight: '600' }}>Ethan Hoffman</p>
                    <p style={{ color: 'rgba(253,250,245,0.5)', fontSize: '0.75rem' }}>Listen on Apple Music</p>
                  </div>
                </a>
              </div>

              {/* What to Expect */}
              <div style={{ padding: '2rem', border: '1px solid rgba(196,168,130,0.2)' }}>
                <p style={{
                  fontSize: '0.65rem', fontWeight: '600',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#c4622d', marginBottom: '1.2rem',
                }}>What to Expect</p>
                {[
                  'Soulful, vocalist-led performances',
                  'Live looping and beatboxing',
                  'Crowd improvisation and interaction',
                  'Covers and original music',
                  '70s, 80s and modern hits',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center',
                    gap: '0.75rem', marginBottom: '0.75rem',
                  }}>
                    <div style={{
                      width: '4px', height: '4px', borderRadius: '50%',
                      backgroundColor: '#c4622d', flexShrink: 0,
                    }} />
                    <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.7)', lineHeight: '1.5' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Shots */}
          <div>
            <p style={{
              fontSize: '0.65rem', fontWeight: '600',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c4622d', marginBottom: '2rem', textAlign: 'center',
            }}>Live Shots</p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem',
            }}>
              {[
                'High-energy crowd moment',
                'Close-up vocal performance',
                'Full stage wide shot',
                'Looping station close-up',
                'Intimate venue performance',
                'Outdoor or festival shot',
              ].map((label, i) => (
                <div key={i} style={{
                  aspectRatio: '4/3', backgroundColor: '#2d2926',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.5rem', padding: '1rem',
                }}>
                  <p style={{ color: 'rgba(253,250,245,0.2)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Photo Placeholder</p>
                  <p style={{ color: 'rgba(253,250,245,0.4)', fontSize: '0.8rem', textAlign: 'center' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Looping Note */}
          <div style={{
            marginTop: '4rem', padding: '2rem 3rem',
            backgroundColor: '#2d2926',
            display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              backgroundColor: '#c4622d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, fontSize: '1.3rem',
            }}>♾</div>
            <div>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#fdfaf5', marginBottom: '0.3rem' }}>
                More than just a cover singer
              </p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.5)', lineHeight: '1.7' }}>
                Ethan performs with a live looping station, building full arrangements on the spot by layering beatbox, bass lines, harmonies, and textures. You get a full band experience from one artist. Audiences love it every time.
              </p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}