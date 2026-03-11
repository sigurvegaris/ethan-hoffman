'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [tab, setTab] = useState<'wedding' | 'corporate'>('wedding')

  const [weddingForm, setWeddingForm] = useState({
    firstName: '', lastName: '', fianceFirst: '', fianceLast: '',
    phone: '', email: '', instagram: '', weddingDate: '',
    ceremonyTime: '', venue: '', planner: '', indoor: '',
    story: '', guests: '', services: [] as string[],
    aisleWalk: '', budget: '', additional: '', howFound: '',
  })

  const [corporateForm, setCorporateForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    instagram: '', eventDate: '', startTime: '', endTime: '',
    venue: '', duration: '', indoor: '', eventKind: '',
    guests: '', volume: '', budget: '', additional: '', howFound: '',
  })

  const inp = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1px solid rgba(26,24,20,0.15)',
    backgroundColor: '#fdfaf5', fontSize: '0.875rem',
    color: '#1a1814', outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif',
  }
  const lbl = {
    display: 'block', fontSize: '0.78rem',
    color: '#1a1814', marginBottom: '0.4rem', fontWeight: '500',
  }
  const row = {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '1.25rem', marginBottom: '1.25rem',
  }
  const field = { marginBottom: '1.25rem' }

  const handleWeddingService = (service: string) => {
    setWeddingForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleWeddingSubmit = () => {
    const subject = `Wedding Inquiry — ${weddingForm.firstName} ${weddingForm.lastName}`
    const body = `
First Name: ${weddingForm.firstName}
Last Name: ${weddingForm.lastName}
Fiance's First Name: ${weddingForm.fianceFirst}
Fiance's Last Name: ${weddingForm.fianceLast}
Phone: ${weddingForm.phone}
Email: ${weddingForm.email}
Instagram: ${weddingForm.instagram}
Wedding Date: ${weddingForm.weddingDate}
Ceremony Start Time: ${weddingForm.ceremonyTime}
Wedding Venue: ${weddingForm.venue}
Wedding Planner: ${weddingForm.planner}
Indoor/Outdoor: ${weddingForm.indoor}
Story: ${weddingForm.story}
Guests: ${weddingForm.guests}
Services: ${weddingForm.services.join(', ')}
Aisle Song: ${weddingForm.aisleWalk}
Budget: ${weddingForm.budget}
Additional: ${weddingForm.additional}
How Found: ${weddingForm.howFound}
    `.trim()
    window.location.href = `mailto:Booking@EthanHoffmanOfficial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleCorporateSubmit = () => {
    const subject = `Corporate/Private Inquiry — ${corporateForm.firstName} ${corporateForm.lastName}`
    const body = `
First Name: ${corporateForm.firstName}
Last Name: ${corporateForm.lastName}
Phone: ${corporateForm.phone}
Email: ${corporateForm.email}
Instagram: ${corporateForm.instagram}
Event Date: ${corporateForm.eventDate}
Start Time: ${corporateForm.startTime}
End Time: ${corporateForm.endTime}
Venue: ${corporateForm.venue}
Performance Duration: ${corporateForm.duration}
Indoor/Outdoor: ${corporateForm.indoor}
Event Kind: ${corporateForm.eventKind}
Guests: ${corporateForm.guests}
Volume: ${corporateForm.volume}
Budget: ${corporateForm.budget}
Additional: ${corporateForm.additional}
How Found: ${corporateForm.howFound}
    `.trim()
    window.location.href = `mailto:Booking@EthanHoffmanOfficial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const req = <span style={{ color: '#c4622d' }}>*</span>

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

        <div className="container" style={{ padding: '5rem 2rem 8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* Left Info Panel */}
            <div>
              {[
                { label: 'Email', value: 'Booking@EthanHoffmanOfficial.com', icon: '✉', link: 'mailto:Booking@EthanHoffmanOfficial.com' },
                { label: 'Location', value: 'Los Angeles, CA', icon: '◎', link: null },
                { label: 'Response Time', value: 'Within 24 hours', icon: '◷', link: null },
                { label: 'Google Business', value: 'Ethan Hoffman Music', icon: '★', link: 'https://share.google/uLKpnc1llmBCJJqVu' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '1.8rem', paddingBottom: '1.8rem', borderBottom: i < 3 ? '1px solid rgba(196,168,130,0.3)' : 'none' }}>
                  <span style={{ fontSize: '1.1rem', color: '#c4622d', marginTop: '0.1rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.3rem' }}>{item.label}</p>
                    {item.link
                      ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: '#2d2926', textDecoration: 'none', borderBottom: '1px solid rgba(196,98,45,0.3)' }}>{item.value}</a>
                      : <p style={{ fontSize: '0.85rem', color: '#2d2926' }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.2rem' }}>Follow Ethan</p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'Instagram', url: 'https://www.instagram.com/ethanhoffmanofficial/' },
                    { label: 'TikTok', url: 'https://www.tiktok.com/@ethanhoffmanofficial' },
                    { label: 'Facebook', url: 'https://www.facebook.com/ethanbhoffman' },
                    { label: 'Spotify', url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6' },
                    { label: 'Apple Music', url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086' },
                  ].map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ padding: '0.45rem 0.9rem', border: '1px solid rgba(196,168,130,0.5)', fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6460', textDecoration: 'none', transition: 'all 0.3s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#c4622d'; e.currentTarget.style.color = '#c4622d' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(196,168,130,0.5)'; e.currentTarget.style.color = '#6b6460' }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Tabbed Form */}
            <div style={{ backgroundColor: '#fff', padding: '3rem', boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>

              {/* Event type question */}
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: '400', color: '#1a1814', textAlign: 'center', marginBottom: '1.5rem' }}>
                What kind of event are you having?
              </h2>

              {/* Tabs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: '2.5rem' }}>
                <button onClick={() => setTab('wedding')} style={{ padding: '0.85rem', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s ease', backgroundColor: tab === 'wedding' ? '#2d2926' : 'rgba(26,24,20,0.07)', color: tab === 'wedding' ? '#fdfaf5' : 'rgba(26,24,20,0.35)' }}>
                  Wedding
                </button>
                <button onClick={() => setTab('corporate')} style={{ padding: '0.85rem', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s ease', backgroundColor: tab === 'corporate' ? '#2d2926' : 'rgba(26,24,20,0.07)', color: tab === 'corporate' ? '#fdfaf5' : 'rgba(26,24,20,0.35)' }}>
                  Corporate & Private
                </button>
              </div>

              {/* WEDDING FORM */}
              {tab === 'wedding' && (
                <div>
                  <div style={row}>
                    <div><label style={lbl}>Your First Name {req}</label><input style={inp} value={weddingForm.firstName} onChange={e => setWeddingForm(p => ({ ...p, firstName: e.target.value }))} /></div>
                    <div><label style={lbl}>Your Last Name {req}</label><input style={inp} value={weddingForm.lastName} onChange={e => setWeddingForm(p => ({ ...p, lastName: e.target.value }))} /></div>
                  </div>
                  <div style={row}>
                    <div><label style={lbl}>Fiance's First Name {req}</label><input style={inp} value={weddingForm.fianceFirst} onChange={e => setWeddingForm(p => ({ ...p, fianceFirst: e.target.value }))} /></div>
                    <div><label style={lbl}>Fiance's Last Name {req}</label><input style={inp} value={weddingForm.fianceLast} onChange={e => setWeddingForm(p => ({ ...p, fianceLast: e.target.value }))} /></div>
                  </div>
                  <div style={row}>
                    <div><label style={lbl}>Phone Number {req}</label><input style={inp} value={weddingForm.phone} onChange={e => setWeddingForm(p => ({ ...p, phone: e.target.value }))} /></div>
                    <div><label style={lbl}>Email {req}</label><input style={inp} type="email" value={weddingForm.email} onChange={e => setWeddingForm(p => ({ ...p, email: e.target.value }))} /></div>
                  </div>
                  <div style={field}><label style={lbl}>Instagram Handles</label><input style={inp} placeholder="@" value={weddingForm.instagram} onChange={e => setWeddingForm(p => ({ ...p, instagram: e.target.value }))} /></div>
                  <div style={row}>
                    <div><label style={lbl}>Wedding Date {req}</label><input style={inp} type="date" value={weddingForm.weddingDate} onChange={e => setWeddingForm(p => ({ ...p, weddingDate: e.target.value }))} /></div>
                    <div><label style={lbl}>Ceremony Start Time {req}</label><input style={inp} placeholder="e.g. 4:00 PM" value={weddingForm.ceremonyTime} onChange={e => setWeddingForm(p => ({ ...p, ceremonyTime: e.target.value }))} /></div>
                  </div>
                  <div style={row}>
                    <div><label style={lbl}>Wedding Venue {req}</label><input style={inp} value={weddingForm.venue} onChange={e => setWeddingForm(p => ({ ...p, venue: e.target.value }))} /></div>
                    <div><label style={lbl}>Wedding Planner</label><input style={inp} value={weddingForm.planner} onChange={e => setWeddingForm(p => ({ ...p, planner: e.target.value }))} /></div>
                  </div>
                  <div style={field}>
                    <label style={lbl}>Will the performance be indoors or outdoors?</label>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '0.4rem' }}>
                      {['Indoor', 'Outdoor', 'Combination'].map(opt => (
                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer', color: '#1a1814' }}>
                          <input type="radio" name="wIndoor" value={opt} checked={weddingForm.indoor === opt} onChange={e => setWeddingForm(p => ({ ...p, indoor: e.target.value }))} />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div style={field}><label style={lbl}>Tell me your story! How did you meet? First date? Proposal?</label><textarea style={{ ...inp, height: '100px', resize: 'vertical' }} value={weddingForm.story} onChange={e => setWeddingForm(p => ({ ...p, story: e.target.value }))} /></div>
                  <div style={field}><label style={lbl}>How many guests are you expecting? {req}</label><input style={inp} value={weddingForm.guests} onChange={e => setWeddingForm(p => ({ ...p, guests: e.target.value }))} /></div>
                  <div style={field}>
                    <label style={lbl}>Which services are you looking to book? {req}</label>
                    {['Ceremony music', 'Cocktail hour', 'Reception dinner music', 'First dance'].map(s => (
                      <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', cursor: 'pointer', color: '#1a1814', marginBottom: '0.5rem' }}>
                        <input type="checkbox" checked={weddingForm.services.includes(s)} onChange={() => handleWeddingService(s)} />
                        {s}
                      </label>
                    ))}
                  </div>
                  <div style={field}><label style={lbl}>Is there a specific song you want to walk down the aisle to?</label><input style={inp} value={weddingForm.aisleWalk} onChange={e => setWeddingForm(p => ({ ...p, aisleWalk: e.target.value }))} /></div>
                  <div style={field}><label style={lbl}>What's your total wedding budget? {req}</label><input style={inp} placeholder="$150,000" value={weddingForm.budget} onChange={e => setWeddingForm(p => ({ ...p, budget: e.target.value }))} /></div>
                  <div style={field}><label style={lbl}>Additional details or questions</label><textarea style={{ ...inp, height: '100px', resize: 'vertical' }} value={weddingForm.additional} onChange={e => setWeddingForm(p => ({ ...p, additional: e.target.value }))} /></div>
                  <div style={field}>
                    <label style={lbl}>How'd you find me? {req}</label>
                    <select style={inp} value={weddingForm.howFound} onChange={e => setWeddingForm(p => ({ ...p, howFound: e.target.value }))}>
                      <option value="">Select</option>
                      <option>Instagram</option><option>TikTok</option><option>Google</option>
                      <option>YouTube</option><option>Referral from a friend</option>
                      <option>Wedding planner</option><option>Venue recommendation</option><option>Other</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                    <button onClick={handleWeddingSubmit} style={{ padding: '0.85rem 3rem', backgroundColor: '#2d2926', color: '#fdfaf5', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', transition: 'background-color 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c4622d')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2d2926')}>
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {/* CORPORATE FORM */}
              {tab === 'corporate' && (
                <div>
                  <div style={row}>
                    <div><label style={lbl}>Your First Name {req}</label><input style={inp} value={corporateForm.firstName} onChange={e => setCorporateForm(p => ({ ...p, firstName: e.target.value }))} /></div>
                    <div><label style={lbl}>Your Last Name {req}</label><input style={inp} value={corporateForm.lastName} onChange={e => setCorporateForm(p => ({ ...p, lastName: e.target.value }))} /></div>
                  </div>
                  <div style={row}>
                    <div><label style={lbl}>Phone Number {req}</label><input style={inp} value={corporateForm.phone} onChange={e => setCorporateForm(p => ({ ...p, phone: e.target.value }))} /></div>
                    <div><label style={lbl}>Email {req}</label><input style={inp} type="email" value={corporateForm.email} onChange={e => setCorporateForm(p => ({ ...p, email: e.target.value }))} /></div>
                  </div>
                  <div style={field}><label style={lbl}>Personal/Company Instagram Handle</label><input style={inp} placeholder="@" value={corporateForm.instagram} onChange={e => setCorporateForm(p => ({ ...p, instagram: e.target.value }))} /></div>
                  <div style={row}>
                    <div><label style={lbl}>What day is your event? {req}</label><input style={inp} type="date" value={corporateForm.eventDate} onChange={e => setCorporateForm(p => ({ ...p, eventDate: e.target.value }))} /></div>
                    <div><label style={lbl}>What time does your event start? {req}</label><input style={inp} placeholder="e.g. 6:00 PM" value={corporateForm.startTime} onChange={e => setCorporateForm(p => ({ ...p, startTime: e.target.value }))} /></div>
                  </div>
                  <div style={row}>
                    <div><label style={lbl}>Which venue is your event at? {req}</label><input style={inp} value={corporateForm.venue} onChange={e => setCorporateForm(p => ({ ...p, venue: e.target.value }))} /></div>
                    <div><label style={lbl}>How long would you like me to perform? {req}</label><input style={inp} placeholder="2 hours" value={corporateForm.duration} onChange={e => setCorporateForm(p => ({ ...p, duration: e.target.value }))} /></div>
                  </div>
                  <div style={field}>
                    <label style={lbl}>Will the performance be indoors or outdoors?</label>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '0.4rem' }}>
                      {['Indoor', 'Outdoor', 'Combination'].map(opt => (
                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer', color: '#1a1814' }}>
                          <input type="radio" name="cIndoor" value={opt} checked={corporateForm.indoor === opt} onChange={e => setCorporateForm(p => ({ ...p, indoor: e.target.value }))} />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div style={field}><label style={lbl}>What kind of event is it? {req}</label><textarea style={{ ...inp, height: '90px', resize: 'vertical' }} placeholder="Are we celebrating something? Fundraising for a charity?" value={corporateForm.eventKind} onChange={e => setCorporateForm(p => ({ ...p, eventKind: e.target.value }))} /></div>
                  <div style={field}><label style={lbl}>How many guests are you expecting? {req}</label><input style={inp} value={corporateForm.guests} onChange={e => setCorporateForm(p => ({ ...p, guests: e.target.value }))} /></div>
                  <div style={field}>
                    <label style={lbl}>How loud or quiet would you like the music to be? {req}</label>
                    <select style={inp} value={corporateForm.volume} onChange={e => setCorporateForm(p => ({ ...p, volume: e.target.value }))}>
                      <option value="">Select</option>
                      <option>Background / Ambient</option>
                      <option>Moderate</option>
                      <option>Loud and energetic</option>
                    </select>
                  </div>
                  <div style={field}><label style={lbl}>What's your total event budget? {req}</label><input style={inp} placeholder="$150,000" value={corporateForm.budget} onChange={e => setCorporateForm(p => ({ ...p, budget: e.target.value }))} /></div>
                  <div style={field}><label style={lbl}>Any additional questions?</label><textarea style={{ ...inp, height: '90px', resize: 'vertical' }} placeholder='"Can you provide a microphone for speeches?"' value={corporateForm.additional} onChange={e => setCorporateForm(p => ({ ...p, additional: e.target.value }))} /></div>
                  <div style={field}>
                    <label style={lbl}>How'd you find me? {req}</label>
                    <select style={inp} value={corporateForm.howFound} onChange={e => setCorporateForm(p => ({ ...p, howFound: e.target.value }))}>
                      <option value="">Select</option>
                      <option>Instagram</option><option>TikTok</option><option>Google</option>
                      <option>YouTube</option><option>Referral from a friend</option>
                      <option>Venue recommendation</option><option>Other</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                    <button onClick={handleCorporateSubmit} style={{ padding: '0.85rem 3rem', backgroundColor: '#2d2926', color: '#fdfaf5', border: 'none', cursor: 'pointer', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', transition: 'background-color 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c4622d')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2d2926')}>
                      Submit
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}