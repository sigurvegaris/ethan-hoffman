'use client'
export default function Shows() {
    const shows = [
      {
        date: 'FEB 22',
        day: 'Sunday',
        title: 'Live in Hollywood',
        venue: 'Hollywood, CA',
        time: '8:15 PM',
        set: '30-Minute Set',
        tickets: '#contact',
      },
      {
        date: 'FEB 24',
        day: 'Tuesday',
        title: 'Full Original Set — Redondo Beach',
        venue: 'Redondo Beach, CA',
        time: 'TBA',
        set: '90-Minute Original Set',
        tickets: '#contact',
      },
    ]
  
    return (
      <section id="shows" style={{
        backgroundColor: '#1a1814',
        padding: '7rem 0',
      }}>
        <div className="container">
  
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Catch Him Live</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: '600',
              color: '#fdfaf5',
              lineHeight: '1.2',
              marginBottom: '1rem',
            }}>
              Upcoming Shows
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(253,250,245,0.5)',
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              Come experience it live. No recording captures what happens in the room.
            </p>
          </div>
  
          {/* Shows List */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            backgroundColor: 'rgba(196,168,130,0.15)',
            border: '1px solid rgba(196,168,130,0.15)',
            marginBottom: '4rem',
          }}>
            {shows.map((show, i) => (
              <div key={i} style={{
                backgroundColor: '#1a1814',
                padding: '2rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '2rem',
                alignItems: 'center',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d2926')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1814')}
              >
                {/* Date */}
                <div style={{ textAlign: 'center', minWidth: '70px' }}>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: '#c4622d',
                    lineHeight: '1',
                    marginBottom: '0.2rem',
                  }}>{show.date}</p>
                  <p style={{
                    fontSize: '0.65rem',
                    color: 'rgba(253,250,245,0.4)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>{show.day}</p>
                </div>
  
                {/* Info */}
                <div>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.1rem',
                    color: '#fdfaf5',
                    marginBottom: '0.4rem',
                  }}>{show.title}</p>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'rgba(253,250,245,0.5)',
                      letterSpacing: '0.05em',
                    }}>{show.venue}</p>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'rgba(253,250,245,0.5)',
                    }}>{show.time}</p>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#c4622d',
                      letterSpacing: '0.05em',
                    }}>{show.set}</p>
                  </div>
                </div>
  
                {/* CTA */}
                <a href={show.tickets} style={{
                  padding: '0.6rem 1.5rem',
                  border: '1px solid rgba(196,98,45,0.5)',
                  color: '#c4622d',
                  textDecoration: 'none',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#c4622d'
                  e.currentTarget.style.color = '#fdfaf5'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#c4622d'
                }}>
                  Get Info
                </a>
              </div>
            ))}
          </div>
  
          {/* Bands in Town Placeholder */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            border: '1px dashed rgba(196,168,130,0.3)',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(253,250,245,0.3)',
              marginBottom: '0.5rem',
            }}>Placeholder</p>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(253,250,245,0.4)',
            }}>Bands in Town widget will be embedded here for ticket sales integration</p>
          </div>
  
        </div>
      </section>
    )
  }