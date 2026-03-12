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
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'Instagram', url: 'https://www.instagram.com/ethanhoffmanofficial/' },
                    { label: 'TikTok', url: 'https://www.tiktok.com/@ethanhoffmanofficial' },
                    { label: 'Facebook', url: 'https://www.facebook.com/ethanbhoffman' },
                    { label: 'Spotify', url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6' },
                    { label: 'Apple Music', url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086' },
                  ].map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                      style={{ padding: '0.45rem 0.9rem', border: '1px solid rgba(196,168,130,0.5)', fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6460', textDecoration: 'none', transition: 'all 0.3s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#c4622d'; e.currentTarget.style.color = '#c4622d' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(196,168,130,0.5)'; e.currentTarget.style.color = '#6b6460' }}>
                      {s.label}
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