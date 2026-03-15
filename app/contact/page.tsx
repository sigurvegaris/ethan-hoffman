'use client'
import { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_lyv95pi'
const EMAILJS_TEMPLATE_ID = 'template_ju1hwpq'
const EMAILJS_PUBLIC_KEY  = 'CWiWuWYTSB04n1ev2'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in at least your name and email.')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:      formData.name,
          email:     formData.email,
          phone:     formData.phone,
          eventType: formData.eventType,
          date:      formData.date,
          location:  formData.location,
          message:   formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', eventType: '', date: '', location: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />

      <style>{`
        .contact-page { background: #f5f0e8; min-height: 100vh; }
        .contact-hero { background: #1a1814; padding: 8rem 0 5rem; }

        .contact-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 6rem 0 8rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        /* Form on left, details on right */
        .contact-form { order: 1; }
        .contact-details { order: 2; }

        .contact-detail-item {
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(26,24,20,0.1);
        }
        .contact-detail-item:first-of-type {
          border-top: 1px solid rgba(26,24,20,0.1);
        }

        .contact-social-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .contact-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 2rem; }

        input, select, textarea {
          width: 100%;
          padding: .85rem 1rem;
          border: none;
          border-bottom: 1px solid rgba(26,24,20,.2);
          background: transparent;
          font-size: .9rem;
          color: #1a1814;
          outline: none;
          font-family: Inter, sans-serif;
        }
        textarea { border: 1px solid rgba(26,24,20,.15); padding: 1rem; resize: vertical; }

        label {
          display: block;
          font-size: .65rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #c4622d;
          margin-bottom: .4rem;
        }

        .submit-row { grid-column: 1/-1; display: flex; align-items: center; gap: 1.5rem; margin-top: 1rem; }

        .submit-btn {
          padding: .95rem 2.25rem;
          background: #1a1814;
          color: #fdfaf5;
          border: none;
          cursor: pointer;
          font-size: .7rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          transition: background 0.3s ease;
        }
        .submit-btn:hover { background: #c4622d; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .success-banner {
          grid-column: 1/-1;
          background: rgba(196,98,45,0.08);
          border: 1px solid rgba(196,98,45,0.3);
          padding: 1.25rem 1.5rem;
          margin-top: 1rem;
        }
        .error-banner {
          grid-column: 1/-1;
          background: rgba(200,50,50,0.08);
          border: 1px solid rgba(200,50,50,0.3);
          padding: 1.25rem 1.5rem;
          margin-top: 1rem;
        }

        .mobile-contact-header { display: none; margin-bottom: 2rem; }
        .mobile-contact-header p { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-style: italic; color: #1a1814; margin-bottom: .3rem; }
        .mobile-contact-header span { font-size: .85rem; color: #6b6460; }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        @media (max-width: 768px) {
          .contact-hero { padding: 7rem 0 3rem; }
          .contact-shell { width: min(1200px, calc(100% - 2rem)); padding: 3rem 0 5rem; }
          .mobile-contact-header { display: block; }
          .contact-form-intro { display: none; }
          .contact-form-grid { grid-template-columns: 1fr; }
          .submit-row { flex-direction: column; align-items: flex-start; }
          .submit-btn { width: 100%; }
        }

        @media (max-width: 480px) {
          .contact-shell { width: min(1200px, calc(100% - 1.5rem)); }
        }
      `}</style>

      <main className="contact-page">

        {/* ── HERO ── */}
        <div className="contact-hero">
          <div className="container">
            <p style={{ fontSize: '.7rem', fontWeight: '600', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
              Get In Touch
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1rem' }}>
              Book Ethan
            </h1>
            <p style={{ fontSize: '.95rem', color: 'rgba(253,250,245,.5)', maxWidth: '500px', lineHeight: '1.8' }}>
              Ethan is known for being reliable, punctual, and deeply curated to every event. Expect a response within 24 hours.
            </p>
          </div>
        </div>

        <div className="contact-shell">
          <div className="contact-grid">

            {/* ── RIGHT: CONTACT DETAILS ── */}
            <div className="contact-details">
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: '400', fontStyle: 'italic', color: '#1a1814', lineHeight: '1.35', marginBottom: '0.75rem' }}>
                Let&apos;s make your event unforgettable.
              </p>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.8', color: '#6b6460', marginBottom: '2rem' }}>
                Fill out the form and Ethan or his team will follow up within 24 hours to discuss availability, pricing, and details.
              </p>

              <div className="contact-detail-item">
                <p style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.35rem' }}>Response Time</p>
                <p style={{ fontSize: '0.95rem', color: '#1a1814', fontWeight: '500', margin: 0 }}>Within 24 hours</p>
              </div>

              <div className="contact-detail-item">
                <p style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.35rem' }}>Booking Email</p>
                <a href="mailto:booking@ethanhoffmanofficial.com" style={{ fontSize: '0.9rem', color: '#1a1814', textDecoration: 'none', fontWeight: '500', wordBreak: 'break-all', display: 'block' }}>
                  booking@ethanhoffmanofficial.com
                </a>
              </div>

              <div className="contact-detail-item">
                <p style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.35rem' }}>Based In</p>
                <p style={{ fontSize: '0.95rem', color: '#1a1814', fontWeight: '500', margin: '0 0 0.2rem' }}>Los Angeles, CA</p>
                <p style={{ fontSize: '0.8rem', color: '#6b6460', margin: 0 }}>Available for travel nationwide</p>
              </div>

              <div className="contact-detail-item">
                <p style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem' }}>Follow Ethan</p>
                <div className="contact-social-links">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/ethanbhoffman/', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>` },
                    { label: 'TikTok', href: 'https://www.tiktok.com/@ethanhoffmanofficial', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>` },
                    { label: 'Facebook', href: 'https://www.facebook.com/ethanbhoffman', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
                    { label: 'Spotify', href: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>` },
                    { label: 'Apple Music', href: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>` },
                    { label: 'YouTube', href: 'https://www.youtube.com/watch?v=iCRmtLvbcdw', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>` },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#1a1814', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1a1814')}
                    >
                      <span dangerouslySetInnerHTML={{ __html: s.icon }} style={{ display: 'flex', flexShrink: 0 }} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: FORM ── */}
            <div className="contact-form">

              <div className="mobile-contact-header">
                <p>Let&apos;s Talk</p>
                <span>Tell Ethan about your event</span>
              </div>

              <div className="contact-form-intro" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: '400', fontStyle: 'italic', color: '#1a1814', marginBottom: '.75rem' }}>
                  Tell me about your event
                </h2>
                <p style={{ fontSize: '.85rem', color: '#6b6460', lineHeight: '1.7' }}>
                  Fill out the form below and Ethan or his team will be in touch shortly.
                </p>
              </div>

              <div className="contact-form-grid">

                <div style={{ marginBottom: '2rem', gridColumn: '1/-1' }}>
                  <label>Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith" />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label>Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@email.com" />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label>Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="(310) 000-0000" />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label>Type of Event</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Wedding</option>
                    <option>Private Event</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label>Date of Event</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div style={{ marginBottom: '2rem', gridColumn: '1/-1' }}>
                  <label>Location of Event</label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="Venue name or city" />
                </div>

                <div style={{ marginBottom: '2.5rem', gridColumn: '1/-1' }}>
                  <label>How can I help?</label>
                  <textarea rows={5} name="message" value={formData.message} onChange={handleChange} />
                </div>

                <div className="submit-row">
                  <button className="submit-btn" onClick={handleSubmit} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  <p style={{ fontSize: '.75rem', color: 'rgba(26,24,20,.4)' }}>
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                {status === 'success' && (
                  <div className="success-banner">
                    <p style={{ fontSize: '0.85rem', color: '#c4622d', fontWeight: '600', margin: '0 0 0.25rem 0' }}>Message sent!</p>
                    <p style={{ fontSize: '0.8rem', color: '#6b6460', margin: 0 }}>Thanks for reaching out. Ethan will be in touch within 24 hours.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="error-banner">
                    <p style={{ fontSize: '0.85rem', color: '#c43030', fontWeight: '600', margin: '0 0 0.25rem 0' }}>Something went wrong.</p>
                    <p style={{ fontSize: '0.8rem', color: '#6b6460', margin: 0 }}>Please try again or email directly at booking@ethanhoffmanofficial.com</p>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}