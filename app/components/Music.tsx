'use client'

export default function Music() {
  return (
    <section id="music" style={{
      backgroundColor: '#1a1814',
      padding: '7rem 0',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Music & Performance</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '600',
            color: '#fdfaf5',
            lineHeight: '1.2',
          }}>
            See Ethan Live
          </h2>
        </div>

        {/* Video + Spotify Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '5rem',
        }}>

          {/* YouTube Embed */}
          <div>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              backgroundColor: '#2d2926',
            }}>
              <iframe
                src="https://www.youtube.com/embed/iCRmtLvbcdw"
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Ethan Hoffman Live Performance"
              />
            </div>
            <p style={{
              marginTop: '1rem',
              fontSize: '0.75rem',
              color: 'rgba(253,250,245,0.4)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Live Performance — Los Angeles
            </p>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Spotify Embed */}
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
                loading="lazy"
                style={{ borderRadius: '4px' }}
                title="Ethan Hoffman on Spotify"
              />
            </div>

            {/* What to Expect */}
            <div style={{
              padding: '2rem',
              border: '1px solid rgba(196,168,130,0.2)',
            }}>
              <p style={{
                fontSize: '0.65rem', fontWeight: '600',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#c4622d', marginBottom: '1.2rem',
              }}>What to Expect</p>
              {[
                'Soulful, vocalist-led performances',
                'Live looping & beatboxing',
                'Crowd improvisation & interaction',
                'Covers + original music',
                '70s, 80s & modern hits',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center',
                  gap: '0.75rem', marginBottom: '0.75rem',
                }}>
                  <div style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    backgroundColor: '#c4622d', flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'rgba(253,250,245,0.7)',
                    lineHeight: '1.5',
                  }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Shots Grid */}
        <div>
          <p style={{
            fontSize: '0.65rem', fontWeight: '600',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#c4622d', marginBottom: '2rem', textAlign: 'center',
          }}>Live Shots</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}>
            {[
              { file: 'ethanwithcrowd.png', pos: 'center top' },
              { file: 'ethansingingorange.png', pos: 'center 30%' },
              { file: 'ethanfighton.png', pos: 'center top' },
              { file: 'ethansingingblack.png', pos: 'center top' },
              { file: 'ethansoloshot.png', pos: 'center top' },
              { file: 'ethanmustang.png', pos: 'center center' },
            ].map((photo, i) => (
              <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={`/images/${photo.file}`}
                  alt={`Ethan Hoffman live ${i + 1}`}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: photo.pos,
                    transition: 'transform 0.5s ease',
                    display: 'block',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}