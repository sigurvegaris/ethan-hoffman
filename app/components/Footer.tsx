'use client'
export default function Footer() {
    return (
      <footer style={{
        backgroundColor: '#1a1814',
        padding: '4rem 0 2rem',
        borderTop: '1px solid rgba(196,168,130,0.15)',
      }}>
        <div className="container">
  
          {/* Top Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '4rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(196,168,130,0.15)',
          }}>
  
            {/* Brand */}
            <div>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#fdfaf5',
                marginBottom: '0.75rem',
              }}>Ethan Hoffman</p>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(253,250,245,0.4)',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
              }}>
                Soulful live music for weddings,<br />
                private events & corporate functions.<br />
                Based in Los Angeles, CA.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { label: 'IG', url: 'https://www.instagram.com/ethanbhoffman/' },
                  { label: 'TT', url: 'https://www.tiktok.com/@ethanhoffmanofficial' },
                  { label: 'FB', url: 'https://www.facebook.com/ethanbhoffman' },
                  { label: 'SP', url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6' },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(196,168,130,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(253,250,245,0.5)',
                    textDecoration: 'none',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#c4622d'
                    e.currentTarget.style.color = '#c4622d'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(196,168,130,0.3)'
                    e.currentTarget.style.color = 'rgba(253,250,245,0.5)'
                  }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <p style={{
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c4622d',
                marginBottom: '1.2rem',
              }}>Quick Links</p>
              {['About', 'Music', 'Services', 'Venues', 'Testimonials', 'Shows', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  color: 'rgba(253,250,245,0.5)',
                  textDecoration: 'none',
                  marginBottom: '0.6rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fdfaf5')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.5)')}>
                  {link}
                </a>
              ))}
            </div>
  
            {/* Contact Info */}
            <div>
              <p style={{
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c4622d',
                marginBottom: '1.2rem',
              }}>Contact</p>
              {[
                { label: 'Website', value: 'ethanhoffmanofficial.com', url: 'http://ethanhoffmanofficial.com' },
                { label: 'Google Business', value: 'Ethan Hoffman Music', url: 'https://share.google/uLKpnc1llmBCJJqVu' },
                { label: 'Location', value: 'Los Angeles, CA', url: null },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <p style={{
                    fontSize: '0.65rem',
                    color: 'rgba(253,250,245,0.3)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}>{item.label}</p>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: '0.85rem',
                      color: 'rgba(253,250,245,0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fdfaf5')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,250,245,0.6)')}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.6)' }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          {/* Bottom Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <p style={{
              fontSize: '0.75rem',
              color: 'rgba(253,250,245,0.3)',
            }}>
              © {new Date().getFullYear()} Ethan Hoffman. All rights reserved.
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: 'rgba(253,250,245,0.3)',
            }}>
              Los Angeles, CA — Available Nationwide
            </p>
          </div>
  
        </div>
      </footer>
    )
  }