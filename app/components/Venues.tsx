'use client'
export default function Venues() {
    const venues = [
      'The Wiltern Theatre',
      'The Magnolia Theatre',
      'The Mint',
      'The Shade Hotel Manhattan Beach',
      'Quatsch Comedy Club — Berlin, Germany',
      'The Comedy Store',
      'The Hollywood Improv',
      'Torrance Memorial Medical Center',
      'USC — Welcome Back Weekend',
      'Thomson Hollywood by Hyatt',
      'Beachlife Grotto — Hilton',
      'Torrance Marriott',
      'Tower 12 — Hermosa Beach',
      'The Lighthouse Café — Hermosa Beach',
      'Belle Époque — Redondo Beach',
      'Jamaica Bay Inn — Marina Del Rey',
      'Renaissance LAX Hotel',
      'Freehand Hotel',
      'Harvard & Stone — Hollywood',
      'Henry\'s at Waterfront Hilton',
      'Renaissance ClubSport Aliso Viejo',
      'Bella Terra Huntington Beach',
      'Project Barley — Redondo Beach',
      'Employees Only',
      'Durango Cantina',
      'Coffee Cartel — Redondo Beach',
    ]
  
    return (
      <section id="venues" style={{
        backgroundColor: '#2d2926',
        padding: '7rem 0',
      }}>
        <div className="container">
  
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Credibility</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: '600',
              color: '#fdfaf5',
              lineHeight: '1.2',
              marginBottom: '1rem',
            }}>
              Past Clients & Venues
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(253,250,245,0.5)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}>
              200+ performances across Los Angeles and beyond. Many of these venues were recurring bookings — some as many as 15 times.
            </p>
          </div>
  
          {/* Logo Placeholder Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(196,168,130,0.15)',
            marginBottom: '4rem',
            border: '1px solid rgba(196,168,130,0.15)',
          }}>
            {[
              { name: 'The Wiltern Theatre', note: 'Logo PNG' },
              { name: 'The Shade Hotel', note: 'Logo PNG' },
              { name: 'The Mint', note: 'Logo PNG' },
              { name: 'The Comedy Store', note: 'Logo PNG' },
              { name: 'The Hollywood Improv', note: 'Logo PNG' },
              { name: 'Torrance Memorial', note: 'Logo PNG' },
              { name: 'USC', note: 'Logo PNG' },
              { name: 'Thomson by Hyatt', note: 'Logo PNG' },
              { name: 'Hilton', note: 'Logo PNG' },
              { name: 'Marriott', note: 'Logo PNG' },
              { name: 'The Lighthouse Café', note: 'Logo PNG' },
              { name: 'Tower 12', note: 'Logo PNG' },
            ].map((venue, i) => (
              <div key={i} style={{
                backgroundColor: '#2d2926',
                padding: '2rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minHeight: '100px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a1814')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2d2926')}
              >
                <p style={{
                  color: 'rgba(253,250,245,0.6)',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  fontFamily: 'Playfair Display, serif',
                }}>{venue.name}</p>
                <p style={{
                  color: 'rgba(196,98,45,0.5)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>{venue.note}</p>
              </div>
            ))}
          </div>
  
          {/* Full Venue List */}
          <div style={{
            borderTop: '1px solid rgba(196,168,130,0.2)',
            paddingTop: '3rem',
          }}>
            <p style={{
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c4622d',
              marginBottom: '2rem',
              textAlign: 'center',
            }}>Full Venue List</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
            }}>
              {venues.map((venue, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#c4622d',
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'rgba(253,250,245,0.6)',
                    lineHeight: '1.5',
                  }}>{venue}</p>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    )
  }