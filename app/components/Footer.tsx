'use client'
import Link from 'next/link'

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ethanbhoffman/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@ethanhoffmanofficial',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>`,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/ethanbhoffman',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  },
  {
    label: 'Apple Music',
    url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/watch?v=iCRmtLvbcdw',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  },
]

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Music', href: '/music' },
  { label: 'Services', href: '/services' },
  { label: 'Venues', href: '/venues' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Shows', href: '/shows' },
  { label: 'Contact', href: '/contact' },
]

const contactItems = [
  { label: 'Email', value: 'booking@ethanhoffmanofficial.com', url: 'mailto:booking@ethanhoffmanofficial.com' },
  { label: 'Website', value: 'ethanhoffmanofficial.com', url: 'https://ethanhoffmanofficial.com' },
  { label: 'Google Business', value: 'Ethan Hoffman Music', url: 'https://share.google/uLKpnc1llmBCJJqVu' },
  { label: 'Location', value: 'Los Angeles, CA', url: null },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .eh-footer {
          background-color: #1a1814;
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(196,168,130,0.15);
          overflow-x: hidden;
        }

        .eh-footer-container {
          width: min(1200px, calc(100% - 2.5rem));
          margin: 0 auto;
        }

        .eh-footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(196,168,130,0.15);
        }

        .eh-footer-heading {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c4622d;
          margin: 0 0 1.2rem 0;
          font-family: Inter, sans-serif;
        }

        .eh-footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 1.25rem;
        }

        .eh-footer-social a {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(196,168,130,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(253,250,245,0.45);
          text-decoration: none;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .eh-footer-social a:hover {
          border-color: #c4622d;
          color: #c4622d;
          background-color: rgba(196,98,45,0.08);
        }

        .eh-footer-link {
          display: block;
          font-size: 0.85rem;
          color: rgba(253,250,245,0.55);
          text-decoration: none;
          margin-bottom: 0.7rem;
          transition: color 0.3s ease;
          width: fit-content;
        }

        .eh-footer-link:hover {
          color: #fdfaf5;
        }

        .eh-footer-contact-item {
          margin-bottom: 1rem;
        }

        .eh-footer-contact-label {
          font-size: 0.65rem;
          color: rgba(253,250,245,0.3);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 0.2rem 0;
          font-family: Inter, sans-serif;
        }

        .eh-footer-contact-value,
        .eh-footer-contact-value a {
          font-size: 0.82rem;
          color: rgba(253,250,245,0.62);
          text-decoration: none;
          transition: color 0.3s ease;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .eh-footer-contact-value a:hover {
          color: #fdfaf5;
        }

        .eh-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem 2rem;
          flex-wrap: wrap;
        }

        .eh-footer-bottom p {
          margin: 0;
          font-size: 0.75rem;
          color: rgba(253,250,245,0.3);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .eh-footer-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .eh-footer {
            padding: 3rem 0 1.75rem;
          }

          .eh-footer-container {
            width: min(1200px, calc(100% - 2rem));
          }

          .eh-footer-grid {
            gap: 2rem;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
          }

          .eh-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .eh-footer-social {
            gap: 0.7rem;
          }

          .eh-footer-social a {
            width: 36px;
            height: 36px;
          }

          .eh-footer-link {
            font-size: 0.82rem;
          }

          .eh-footer-bottom p {
            font-size: 0.72rem;
          }
        }
      `}</style>

      <footer className="eh-footer">
        <div className="eh-footer-container">
          <div className="eh-footer-grid">
            <div>
              <p
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#fdfaf5',
                  margin: '0 0 0.75rem 0',
                }}
              >
                Ethan Hoffman
              </p>

              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(253,250,245,0.42)',
                  lineHeight: '1.75',
                  margin: 0,
                }}
              >
                Soulful live music for weddings,
                <br />
                private events & corporate functions.
                <br />
                Based in Los Angeles, CA.
              </p>

              <div className="eh-footer-social">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    dangerouslySetInnerHTML={{ __html: s.icon }}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="eh-footer-heading">Quick Links</p>
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="eh-footer-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <p className="eh-footer-heading">Contact</p>
              {contactItems.map((item, i) => (
                <div key={i} className="eh-footer-contact-item">
                  <p className="eh-footer-contact-label">{item.label}</p>
                  {item.url ? (
                    <div className="eh-footer-contact-value">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    </div>
                  ) : (
                    <p className="eh-footer-contact-value" style={{ margin: 0 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="eh-footer-bottom">
            <p>© {new Date().getFullYear()} Ethan Hoffman. All rights reserved.</p>
            <p>Los Angeles, CA — Available Nationwide</p>
          </div>
        </div>
      </footer>
    </>
  )
}