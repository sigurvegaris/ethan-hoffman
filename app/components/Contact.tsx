'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const subject = `Booking Inquiry${formData.eventType ? ` — ${formData.eventType.charAt(0).toUpperCase() + formData.eventType.slice(1)}` : ''}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.date}

Message:
${formData.message}`

    window.location.href = `mailto:ethanhoffmanofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" style={{
      backgroundColor: '#f5f0e8',
      padding: '7rem 0',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Get In Touch</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '600',
            color: '#1a1814',
            lineHeight: '1.2',
            marginBottom: '1rem',
          }}>
            Book Ethan
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#6b6460',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            Ethan is known for being reliable, punctual, and deeply curated to every event he performs at. He consistently exceeds expectations — and you can expect a response within 24 hours.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '5rem',
          alignItems: 'start',
        }}>

          {/* Left — Info */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              {[
                { label: 'Email', value: 'ethanhoffmanofficial@gmail.com', icon: '✉', link: 'mailto:ethanhoffmanofficial@gmail.com' },
                { label: 'Location', value: 'Los Angeles, CA', icon: '◎' },
                { label: 'Response Time', value: 'Within 24 hours', icon: '◷' },
                { label: 'Google Business', value: 'Ethan Hoffman Music', icon: '★', link: 'https://share.google/uLKpnc1llmBCJJqVu' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1.2rem',
                  alignItems: 'flex-start',
                  marginBottom: '1.8rem',
                  paddingBottom: '1.8rem',
                  borderBottom: i < 3 ? '1px solid rgba(196,168,130,0.3)' : 'none',
                }}>
                  <span style={{
                    fontSize: '1.1rem',
                    color: '#c4622d',
                    marginTop: '0.1rem',
                    flexShrink: 0,
                  }}>{item.icon}</span>
                  <div>
                    <p style={{
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#c4622d',
                      marginBottom: '0.3rem',
                    }}>{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: '0.9rem',
                        color: '#2d2926',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(196,98,45,0.3)',
                      }}>{item.value}</a>
                    ) : (
                      <p style={{ fontSize: '0.9rem', color: '#2d2926' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p style={{
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#c4622d',
                marginBottom: '1.2rem',
              }}>Follow Ethan</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Instagram', url: 'https://www.instagram.com/ethanbhoffman/' },
                  { label: 'TikTok', url: 'https://www.tiktok.com/@ethanhoffmanofficial' },
                  { label: 'Facebook', url: 'https://www.facebook.com/ethanbhoffman' },
                  { label: 'Spotify', url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6' },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid rgba(196,168,130,0.5)',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6b6460',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#c4622d'
                    e.currentTarget.style.color = '#c4622d'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(196,168,130,0.5)'
                    e.currentTarget.style.color = '#6b6460'
                  }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            backgroundColor: '#fff',
            padding: '3rem',
            boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Jane Smith' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'jane@email.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#6b6460',
                      marginBottom: '0.5rem',
                    }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid rgba(196,168,130,0.4)',
                        backgroundColor: '#fdfaf5',
                        fontSize: '0.9rem',
                        color: '#2d2926',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6b6460',
                    marginBottom: '0.5rem',
                  }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(310) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid rgba(196,168,130,0.4)',
                      backgroundColor: '#fdfaf5',
                      fontSize: '0.9rem',
                      color: '#2d2926',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6b6460',
                    marginBottom: '0.5rem',
                  }}>Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid rgba(196,168,130,0.4)',
                      backgroundColor: '#fdfaf5',
                      fontSize: '0.9rem',
                      color: '#2d2926',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                      appearance: 'none',
                    }}
                  >
                    <option value="">Select type...</option>
                    <option value="wedding">Wedding</option>
                    <option value="private">Private Event</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#6b6460',
                  marginBottom: '0.5rem',
                }}>Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(196,168,130,0.4)',
                    backgroundColor: '#fdfaf5',
                    fontSize: '0.9rem',
                    color: '#2d2926',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#6b6460',
                  marginBottom: '0.5rem',
                }}>Tell Ethan About Your Event</label>
                <textarea
                  name="message"
                  placeholder="Share details about your event, venue, vibe, and anything else that would help Ethan prepare..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(196,168,130,0.4)',
                    backgroundColor: '#fdfaf5',
                    fontSize: '0.9rem',
                    color: '#2d2926',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', padding: '1rem' }}
              >
                Send Inquiry
              </button>

              <p style={{
                fontSize: '0.75rem',
                color: '#6b6460',
                textAlign: 'center',
                lineHeight: '1.6',
              }}>
                Clicking "Send Inquiry" will open your email app with all details pre-filled and send directly to Ethan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}