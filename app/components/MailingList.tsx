'use client'
import { useState } from 'react'

export default function MailingList() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    const subject = 'Inner Circle Signup'
    const body = `New mailing list signup:\n\nEmail: ${email}`
    window.location.href = `mailto:ethanhoffmanofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section style={{
      backgroundColor: '#c4622d',
      padding: '5rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* Left */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: '600',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(253,250,245,0.7)',
              marginBottom: '1rem',
            }}>Stay Connected</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '600',
              color: '#fdfaf5',
              lineHeight: '1.2',
              marginBottom: '1rem',
            }}>
              Join the Inner Circle
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(253,250,245,0.8)',
              lineHeight: '1.8',
            }}>
              Receive Ethan's new releases, show announcements, and exclusive updates straight to your inbox.
            </p>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div style={{
                padding: '2rem',
                backgroundColor: 'rgba(253,250,245,0.1)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.3rem',
                  color: '#fdfaf5',
                  marginBottom: '0.5rem',
                }}>You're in! 🎸</p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(253,250,245,0.7)' }}>
                  Welcome to the Inner Circle.
                </p>
              </div>
            ) : (
<div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>                <div style={{ display: 'flex', gap: '0' }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    style={{
                      flex: 1,
                      padding: '1rem 1.5rem',
                      border: 'none',
                      backgroundColor: 'rgba(253,250,245,0.15)',
                      color: '#fdfaf5',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: '#1a1814',
                      color: '#fdfaf5',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'background-color 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d2926')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1814')}
                  >
                    Join Now
                  </button>
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'rgba(253,250,245,0.6)',
                }}>
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mailing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}