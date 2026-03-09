'use client'

export default function About() {
  const comparisons = [
    'Billy Joel',
    'Ed Sheeran',
    'Frank Sinatra',
    'Jack Johnson',
    'John Mayer',
    'Justin Timberlake',
    'Marvin Gaye',
    'Mac Ayres',
    'Stevie Wonder',
  ]

  return (
    <section id="about" style={{
      backgroundColor: '#f5f0e8',
      padding: '7rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}>

          {/* Left — Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              backgroundColor: '#c4a882',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2d2926',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <p style={{ color: 'rgba(253,250,245,0.3)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Photo Placeholder
                </p>
                <p style={{ color: 'rgba(253,250,245,0.5)', fontSize: '0.85rem', textAlign: 'center', padding: '0 2rem' }}>
                  Ethan Hoffman Portrait / Headshot
                </p>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              right: '-1.5rem',
              bottom: '-1.5rem',
              border: '1px solid rgba(196,98,45,0.3)',
              zIndex: -1,
            }} />
          </div>

          {/* Right — Text */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>About Ethan</p>

            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: '600',
              color: '#1a1814',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
            }}>
              A Voice Built on Truth,<br />
              <em style={{ fontWeight: '400' }}>A Career Built on Stage</em>
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.85',
              color: '#6b6460',
              marginBottom: '1.2rem',
            }}>
              Ever since stepping foot on a stage at twelve years old, Ethan knew it was what he was meant to do. Performing has always felt natural, and over the years he has grown into a vocalist whose sound blends soul, pop, and acoustic grooves into a warm, modern style that feels both familiar and fresh. Inspired by artists like Jason Mraz, Stevie Wonder, Bob Marley, Bill Withers, and Marvin Gaye, Ethan delivers a premium, instantly recognizable sound rooted in melody, message, and feel.
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.85',
              color: '#6b6460',
              marginBottom: '1.2rem',
            }}>
              In 2023, a video of Ethan performing garnered over 140 million views, opening doors to stages around the world. Since then, he has played over 300 shows across Los Angeles and beyond, from Southern California all the way to Berlin, Germany, including sold out shows at 2,000+ capacity venues in LA. His sets move seamlessly between powerful original songs, live improvised originals, and fresh takes on well loved covers.
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.85',
              color: '#6b6460',
              marginBottom: '2rem',
            }}>
              On stage, Ethan performs with a looping station, building full arrangements live by layering beatbox, bass lines, harmony stacks, and additional textures, creating a full band experience using only his voice. This combination of spontaneity, musicality, and connection makes him an ideal fit for weddings, corporate events, private parties, and any occasion that calls for elevated, unforgettable live music.
            </p>

            {/* Common Comparisons */}
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(196,168,130,0.4)',
            }}>
              <p style={{
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#c4622d',
                marginBottom: '1rem',
              }}>Artists People Compare Him To</p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {comparisons.map((name, i) => (
                  <span key={i} style={{
                    padding: '0.35rem 0.9rem',
                    border: '1px solid rgba(196,168,130,0.5)',
                    fontSize: '0.78rem',
                    color: '#2d2926',
                    fontFamily: 'Inter, sans-serif',
                    backgroundColor: 'rgba(196,168,130,0.08)',
                  }}>{name}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}