'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const socials = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ethanhoffmanofficial/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@ethanhoffmanofficial',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/ethanbhoffman',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.622.622 0 0 1 .207.857zm1.223-2.722a.779.779 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.779.779 0 1 1-.453-1.49c3.633-1.104 8.150-.569 11.233 1.327a.779.779 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.337a.935.935 0 0 1-.955 1.61z"/>
      </svg>
    ),
  },
  {
    label: 'Apple Music',
    url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.048-2.31-2.18-3.043a6.303 6.303 0 0 0-1.885-.737 10.935 10.935 0 0 0-1.97-.17H6.708c-.57 0-1.135.02-1.702.083a8.913 8.913 0 0 0-1.793.427A5.58 5.58 0 0 0 .986 2.523a5.757 5.757 0 0 0-1.166 2.21 9.33 9.33 0 0 0-.24 1.88C-.56 7.283-.56 7.953-.56 8.624v6.75c0 .672 0 1.34.06 2.01.05.637.17 1.265.355 1.876a5.71 5.71 0 0 0 1.165 2.21 5.58 5.58 0 0 0 2.228 1.523c.67.232 1.366.373 2.073.42.594.044 1.19.06 1.787.06h10.17c.597 0 1.193-.016 1.787-.06a8.864 8.864 0 0 0 2.073-.42 5.58 5.58 0 0 0 2.228-1.523 5.71 5.71 0 0 0 1.166-2.21c.185-.611.305-1.239.355-1.875.06-.67.06-1.34.06-2.01V8.624c0-.671 0-1.34-.06-2.01zM9.354 16.862H7.93V9.397l-1.564.54V8.55l2.832-1.02h.156v9.332zm7.737 0h-4.85v-1.137l2.494-2.665c.33-.362.565-.67.703-.928.14-.257.21-.516.21-.775 0-.33-.09-.595-.27-.79-.18-.198-.437-.296-.77-.296-.368 0-.656.12-.864.36-.207.24-.31.565-.31.977H11.88c0-.545.126-1.03.377-1.455.252-.425.606-.754 1.063-.988.457-.234.977-.35 1.56-.35.873 0 1.553.21 2.04.63.487.42.73 1.002.73 1.748 0 .408-.088.806-.264 1.193-.176.387-.49.838-.942 1.352l-1.786 1.932h3.433v1.193z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    eventType: '', date: '', location: '', message: '',
  })
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const subject = `Booking Inquiry${formData.eventType ? ` — ${formData.eventType}` : ''}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\nEvent Date: ${formData.date}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`.trim()
    window.location.href = `mailto:booking@ethanhoffmanofficial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.9rem 0',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? '#c4622d' : 'rgba(26,24,20,0.15)'}`,
    backgroundColor: 'transparent',
    fontSize: '0.88rem',
    color: '#1a1814',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: '"DM Sans", sans-serif',
    transition: 'border-color 0.25s ease',
    letterSpacing: '0.01em',
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-root { display: flex; min-height: 100vh; }

        .ct-left {
          position: sticky;
          top: 0;
          width: 420px;
          min-width: 420px;
          height: 100vh;
          background: #0e0c09;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          overflow: hidden;
        }

        .ct-left-inner {
          padding: 8rem 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .ct-lines {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .ct-staff-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.04);
        }

        .ct-big-initial {
          position: absolute;
          bottom: -2rem;
          right: -1rem;
          font-family: 'Playfair Display', serif;
          font-size: 22rem;
          font-weight: 600;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.04);
          line-height: 1;
          user-select: none;
          z-index: 1;
        }

        .ct-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c4622d;
          margin-bottom: 1.2rem;
        }

        .ct-main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 4vw, 4rem);
          font-weight: 500;
          color: #fdfaf5;
          line-height: 1.05;
          margin-bottom: 1.8rem;
          letter-spacing: -0.02em;
        }

        .ct-main-title em {
          font-style: italic;
          color: rgba(253,250,245,0.5);
        }

        .ct-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(253,250,245,0.4);
          line-height: 1.8;
          max-width: 280px;
          margin-bottom: 3rem;
        }

        .ct-info-block {
          margin-bottom: 2.5rem;
        }

        .ct-info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(253,250,245,0.25);
          margin-bottom: 0.3rem;
        }

        .ct-info-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(253,250,245,0.65);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }

        .ct-info-value:hover {
          color: #c4622d;
          border-bottom-color: rgba(196,98,45,0.4);
        }

        .ct-social-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .ct-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem 0.9rem;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .ct-social-btn:hover {
          border-color: #c4622d;
          color: #c4622d;
          background: rgba(196,98,45,0.06);
        }

        .ct-right {
          flex: 1;
          background: #f5f0e8;
          padding: 8rem 5rem 6rem;
          min-height: 100vh;
        }

        .ct-form-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 400;
          font-style: italic;
          color: #1a1814;
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .ct-form-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: #6b6460;
          line-height: 1.7;
          margin-bottom: 3.5rem;
        }

        .ct-field-label {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c4622d;
          margin-bottom: 0.2rem;
        }

        .ct-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 3rem;
        }

        .ct-span2 { grid-column: 1 / -1; }

        .ct-field-wrap { margin-bottom: 2.2rem; }

        .ct-divider {
          width: 40px;
          height: 1px;
          background: #c4622d;
          margin-bottom: 3rem;
          opacity: 0.5;
        }

        .ct-submit {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2.5rem;
          background: #1a1814;
          color: #fdfaf5;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: background 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .ct-submit::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: #c4622d;
          transition: width 0.3s ease;
          z-index: 0;
        }

        .ct-submit:hover::after { width: 100%; }

        .ct-submit span { position: relative; z-index: 1; }

        .ct-submit-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(26,24,20,0.35);
          line-height: 1.6;
          margin-top: 1rem;
        }

        select option { background: #f5f0e8; }

        @media (max-width: 900px) {
          .ct-root { flex-direction: column; }
          .ct-left { position: relative; width: 100%; min-width: unset; height: auto; }
          .ct-left-inner { padding: 7rem 2rem 3rem; }
          .ct-big-initial { font-size: 10rem; }
          .ct-right { padding: 4rem 2rem 5rem; }
          .ct-grid { grid-template-columns: 1fr; }
          .ct-span2 { grid-column: 1; }
        }
      `}</style>

      <Navbar />
      <main style={{ backgroundColor: '#0e0c09' }}>
        <div className="ct-root">

          {/* LEFT PANEL */}
          <div className="ct-left">
            <div className="ct-lines">
              {[18, 30, 42, 54, 66, 78].map(top => (
                <div key={top} className="ct-staff-line" style={{ top: `${top}%` }} />
              ))}
            </div>
            <div className="ct-big-initial">E</div>

            <div className="ct-left-inner">
              <div>
                <p className="ct-eyebrow">Get In Touch</p>
                <h1 className="ct-main-title">
                  Book<br />
                  <em>Ethan</em>
                </h1>
                <p className="ct-tagline">
                  Every event deserves a soundtrack built for it. Reach out and expect a response within 24 hours.
                </p>
              </div>

              <div>
                <div className="ct-info-block">
                  <p className="ct-info-label">Email</p>
                  <a href="mailto:booking@ethanhoffmanofficial.com" className="ct-info-value">
                    booking@ethanhoffmanofficial.com
                  </a>
                </div>

                <div className="ct-info-block">
                  <p className="ct-info-label">Based In</p>
                  <span className="ct-info-value" style={{ cursor: 'default' }}>Los Angeles, CA</span>
                </div>

                <div className="ct-info-block" style={{ marginBottom: '2.5rem' }}>
                  <p className="ct-info-label">Google Reviews</p>
                  <a href="https://share.google/uLKpnc1llmBCJJqVu" target="_blank" rel="noopener noreferrer" className="ct-info-value">
                    Ethan Hoffman Music ↗
                  </a>
                </div>

                <p className="ct-info-label" style={{ marginBottom: '0.8rem' }}>Follow</p>
                <div className="ct-social-row">
                  {socials.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="ct-social-btn">
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="ct-right">
            <h2 className="ct-form-title">Tell me about your event</h2>
            <p className="ct-form-sub">Fill out the form and Ethan or his team will be in touch shortly.</p>
            <div className="ct-divider" />

            <div className="ct-grid">

              <div className="ct-field-wrap ct-span2">
                <label className="ct-field-label">Full Name</label>
                <input
                  name="name" value={formData.name} onChange={handleChange}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  placeholder="Jane Smith"
                  style={fieldStyle('name')}
                />
              </div>

              <div className="ct-field-wrap">
                <label className="ct-field-label">Email</label>
                <input
                  name="email" type="email" value={formData.email} onChange={handleChange}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  placeholder="jane@email.com"
                  style={fieldStyle('email')}
                />
              </div>

              <div className="ct-field-wrap">
                <label className="ct-field-label">Phone Number</label>
                <input
                  name="phone" type="tel" value={formData.phone} onChange={handleChange}
                  onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                  placeholder="(310) 000-0000"
                  style={fieldStyle('phone')}
                />
              </div>

              <div className="ct-field-wrap">
                <label className="ct-field-label">Type of Event</label>
                <select
                  name="eventType" value={formData.eventType} onChange={handleChange}
                  onFocus={() => setFocused('eventType')} onBlur={() => setFocused(null)}
                  style={{ ...fieldStyle('eventType'), appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="">Select...</option>
                  <option>Wedding</option>
                  <option>Private Event</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="ct-field-wrap">
                <label className="ct-field-label">Date of Event</label>
                <input
                  name="date" type="date" value={formData.date} onChange={handleChange}
                  onFocus={() => setFocused('date')} onBlur={() => setFocused(null)}
                  style={fieldStyle('date')}
                />
              </div>

              <div className="ct-field-wrap ct-span2">
                <label className="ct-field-label">Location of Event</label>
                <input
                  name="location" value={formData.location} onChange={handleChange}
                  onFocus={() => setFocused('location')} onBlur={() => setFocused(null)}
                  placeholder="Venue name or city"
                  style={fieldStyle('location')}
                />
              </div>

              <div className="ct-field-wrap ct-span2">
                <label className="ct-field-label">How can I help?</label>
                <textarea
                  name="message" rows={5} value={formData.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  placeholder="Share anything that would help Ethan understand your event — the vibe, the venue, what you're envisioning..."
                  style={{
                    ...fieldStyle('message'),
                    borderBottom: 'none',
                    border: `1px solid ${focused === 'message' ? '#c4622d' : 'rgba(26,24,20,0.12)'}`,
                    resize: 'vertical',
                    padding: '1rem',
                    lineHeight: '1.7',
                  }}
                />
              </div>

              <div className="ct-span2">
                <button className="ct-submit" onClick={handleSubmit}>
                  <span>Send Inquiry</span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <p className="ct-submit-note">Opens your email app with all details pre-filled.</p>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}