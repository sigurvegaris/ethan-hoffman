'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    eventType: '', date: '', location: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const subject = `Booking Inquiry${formData.eventType ? ` — ${formData.eventType}` : ''}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.date}
Location: ${formData.location}

Message:
${formData.message}
    `.trim()
    window.location.href = `mailto:booking@ethanhoffmanofficial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inp = {
    width: '100%',
    padding: '0.85rem 1rem',
    border: 'none',
    borderBottom: '1px solid rgba(26,24,20,0.2)',
    backgroundColor: 'transparent',
    fontSize: '0.9rem',
    color: '#1a1814',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.3s ease',
  }

  const lbl = {
    display: 'block',
    fontSize: '0.65rem',
    fontWeight: '600' as const,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#c4622d',
    marginBottom: '0.4rem',
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Get In Touch</p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1rem' }}>Book Ethan</h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,245,0.5)', maxWidth: '500px', lineHeight: '1.8' }}>
              Ethan is known for being reliable, punctual, and deeply curated to every event. Expect a response within 24 hours.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '6rem 2rem 8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '6rem', alignItems: 'start' }}>

            {/* Left Info */}
            <div>
              {[
                { label: 'Email', value: 'booking@ethanhoffmanofficial.com', link: 'mailto:booking@ethanhoffmanofficial.com' },
                { label: 'Location', value: 'Los Angeles, CA', link: null },
                { label: 'Response Time', value: 'Within 24 hours', link: null },
                { label: 'Google Reviews', value: 'Ethan Hoffman Music', link: 'https://share.google/uLKpnc1llmBCJJqVu' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: i < 3 ? '1px solid rgba(196,168,130,0.3)' : 'none' }}>
                  <p style={{ fontSize: '0.62rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.4rem' }}>{item.label}</p>
                  {item.link
                    ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#2d2926', textDecoration: 'none', borderBottom: '1px solid rgba(196,98,45,0.3)' }}>{item.value}</a>
                    : <p style={{ fontSize: '0.9rem', color: '#2d2926' }}>{item.value}</p>
                  }
                </div>
              ))}
<div style={{ marginTop: '1rem' }}>
  <p style={{ fontSize: '0.62rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.2rem' }}>Follow Ethan</p>
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    {[
      {
        url: 'https://www.instagram.com/ethanhoffmanofficial/',
        label: 'Instagram',
        svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>,
      },
      {
        url: 'https://www.tiktok.com/@ethanhoffmanofficial',
        label: 'TikTok',
        svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>,
      },
      {
        url: 'https://www.facebook.com/ethanbhoffman',
        label: 'Facebook',
        svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
      },
      {
        url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6',
        label: 'Spotify',
        svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .52-.974c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 0 1 .256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.793c3.563-1.08 9.487-.871 13.234 1.297a.937.937 0 0 1-.074 1.653z"/></svg>,
      },
      {
        url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086',
        label: 'Apple Music',
        svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 1v16.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 16 17a3.5 3.5 0 0 1 3.5-3.5c.545 0 1.06.126 1.5.34V5.87L9 8.164V19.5A3.5 3.5 0 0 1 5.5 23 3.5 3.5 0 0 1 2 19.5 3.5 3.5 0 0 1 5.5 16c.545 0 1.06.126 1.5.34V6z"/></svg>,
      },
    ].map((s, i) => (
      <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
        title={s.label}
        style={{ color: '#6b6460', transition: 'color 0.3s ease', display: 'flex' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#c4622d')}
        onMouseLeave={e => (e.currentTarget.style.color = '#6b6460')}>
        {s.svg}
      </a>
    ))}
  </div>
</div>
            </div>

            {/* Right Form */}
            <div>
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '400', fontStyle: 'italic', color: '#1a1814', marginBottom: '0.75rem' }}>
                  Tell me about your event
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#6b6460', lineHeight: '1.7' }}>
                  Fill out the form below and Ethan or his team will be in touch shortly.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2.5rem' }}>

                {/* Full Name */}
                <div style={{ marginBottom: '2rem', gridColumn: '1 / -1' }}>
                  <label style={lbl}>Full Name</label>
                  <input name="name" style={inp} value={formData.name} onChange={handleChange} placeholder="Jane Smith" />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={lbl}>Email</label>
                  <input name="email" type="email" style={inp} value={formData.email} onChange={handleChange} placeholder="jane@email.com" />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={lbl}>Phone Number</label>
                  <input name="phone" type="tel" style={inp} value={formData.phone} onChange={handleChange} placeholder="(310) 000-0000" />
                </div>

                {/* Event Type */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={lbl}>Type of Event</label>
                  <select name="eventType" style={{ ...inp, appearance: 'none' as const }} value={formData.eventType} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Wedding</option>
                    <option>Private Event</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Date */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={lbl}>Date of Event</label>
                  <input name="date" type="date" style={inp} value={formData.date} onChange={handleChange} />
                </div>

                {/* Location */}
                <div style={{ marginBottom: '2rem', gridColumn: '1 / -1' }}>
                  <label style={lbl}>Location of Event</label>
                  <input name="location" style={inp} value={formData.location} onChange={handleChange} placeholder="Venue name or city" />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '2.5rem', gridColumn: '1 / -1' }}>
                  <label style={lbl}>How can I help?</label>
                  <textarea
                    name="message"
                    rows={5}
                    style={{ ...inp, borderBottom: 'none', border: '1px solid rgba(26,24,20,0.15)', resize: 'vertical', padding: '1rem' }}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share anything that would help Ethan understand your event — the vibe, the venue, what you're envisioning..."
                  />
                </div>

                {/* Submit */}
                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <button
                    onClick={handleSubmit}
                    style={{ padding: '0.9rem 3rem', backgroundColor: '#1a1814', color: '#fdfaf5', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', transition: 'background-color 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c4622d')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1814')}>
                    Send Inquiry
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(26,24,20,0.4)', lineHeight: '1.6' }}>
                    Opens your email app with all details pre-filled.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}