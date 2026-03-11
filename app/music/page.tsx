'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Music() {
  const videos = [
    { id: 'iCRmtLvbcdw', label: 'Live Performance — Los Angeles' },
    { id: 'Uu51n-4IRKU', label: 'Live Performance' },
    { id: 'DBc9dzliZ-w', label: 'Live Performance' },
    { id: 'BtW2ebXZt1o', label: 'Live Performance' },
  ]

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#1a1814', minHeight: '100vh' }}>

        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Music and Performance</p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1' }}>See Ethan Live</h1>
          </div>
        </div>

        <div className="container" style={{ padding: '0 2rem 6rem' }}>

          {/* Featured Video + Spotify */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', alignItems: 'start', marginBottom: '5rem' }}>
            <div>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', backgroundColor: '#2d2926' }}>
                <iframe
                  src="https://www.youtube.com/embed/iCRmtLvbcdw"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen title="Ethan Hoffman Live Performance"
                />
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(253,250,245,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live Performance — Los Angeles</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Stream on Spotify</p>
                <iframe
                  src="https://open.spotify.com/embed/artist/3wv3GWickdI3WcNEyV2zG6?utm_source=generator&theme=0"
                  width="100%" height="200" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy" style={{ borderRadius: '4px' }} title="Ethan Hoffman on Spotify"
                />
              </div>
              <div style={{ padding: '2rem', border: '1px solid rgba(196,168,130,0.2)' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.2rem' }}>What to Expect</p>
                {[
                  'Soulful, vocalist-led performances',
                  'Live looping & beatboxing',
                  'Crowd improvisation & interaction',
                  'Covers + original music',
                  '70s, 80s & modern hits',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c4622d', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.7)', lineHeight: '1.5' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More Videos — all embedded */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '2rem', textAlign: 'center' }}>More Performances</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {videos.slice(1).map((video, i) => (
                <div key={i}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', backgroundColor: '#2d2926' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.label}
                    />
                  </div>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'rgba(253,250,245,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{video.label}</p>
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
