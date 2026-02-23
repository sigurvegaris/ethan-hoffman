'use client'

export default function About() {
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
                {/* PHOTO PLACEHOLDER: Replace with Ethan portrait/headshot */}
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
                    Ethan Hoffman — Portrait / Headshot
                  </p>
                </div>
              </div>
  
              {/* Decorative border */}
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
                It started with a flyer at Starbucks. A kid who had never thought of himself as a musician saw an audition notice, walked in, and discovered something that would define the rest of his life. Four musical theater productions later, Ethan Hoffman knew — performing wasn't something he did. It was who he was.
              </p>
  
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.85',
                color: '#6b6460',
                marginBottom: '1.2rem',
              }}>
                Years later, a viral moment at a USC comedy show — a video that would go on to reach over 140 million views — catapulted Ethan into the spotlight and confirmed what he already felt: it was time to pursue music full time. Since then, he has played 200+ gigs across Los Angeles and beyond, from intimate hotel lobbies to sold-out nights at The Wiltern Theatre.
              </p>
  
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.85',
                color: '#6b6460',
                marginBottom: '2rem',
              }}>
                Rooted in the soulful warmth of Stevie Wonder and the honest storytelling of Jason Mraz, Ethan's sound is vocalist-first, improv-heavy, and deeply authentic. His original music pulls from real life — California sunshine, living abroad in India with nothing but a guitar and a dream. His voice, he'll tell you, only works when it's truthful.
              </p>
  
              <div style={{
                display: 'flex',
                gap: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(196,168,130,0.4)',
              }}>
                {[
                  { label: 'Inspired By', value: 'Stevie Wonder, Jason Mraz' },
                  { label: 'Based In', value: 'Los Angeles, CA' },
                  { label: 'Specialties', value: 'Weddings, Private Events' },
                ].map((item, i) => (
                  <div key={i}>
                    <p style={{
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#c4622d',
                      marginBottom: '0.3rem',
                    }}>{item.label}</p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#2d2926',
                      fontWeight: '500',
                    }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <style>{`
          @media (max-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>
    )
  }