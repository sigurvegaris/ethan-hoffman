'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const subject = `Booking Inquiry — ${formData.eventType || 'Event'}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.date}
Location: ${formData.location}

Message:
${formData.message}
    `

    window.location.href = `mailto:booking@ethanhoffmanofficial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Navbar />

      <style>{`

      .contact-page{
        background:#f5f0e8;
        min-height:100vh;
      }

      .contact-hero{
        background:#1a1814;
        padding:8rem 0 5rem;
      }

      .contact-shell{
        width:min(1200px,calc(100% - 3rem));
        margin:0 auto;
        padding:6rem 0 8rem;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0;
        align-items: start;
        max-width: 760px;
        margin: 0 auto;
      }

      .contact-form-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:0 2rem;
      }

      input,select,textarea{
        width:100%;
        padding:.85rem 1rem;
        border:none;
        border-bottom:1px solid rgba(26,24,20,.2);
        background:transparent;
        font-size:.9rem;
        color:#1a1814;
        outline:none;
        font-family:Inter,sans-serif;
      }

      textarea{
        border:1px solid rgba(26,24,20,.15);
        padding:1rem;
        resize:vertical;
      }

      label{
        display:block;
        font-size:.65rem;
        font-weight:600;
        letter-spacing:.2em;
        text-transform:uppercase;
        color:#c4622d;
        margin-bottom:.4rem;
      }

      .submit-row{
        grid-column:1/-1;
        display:flex;
        align-items:center;
        gap:1.5rem;
        margin-top:1rem;
      }

      .submit-btn{
        padding:.95rem 2.25rem;
        background:#1a1814;
        color:#fdfaf5;
        border:none;
        cursor:pointer;
        font-size:.7rem;
        font-weight:600;
        letter-spacing:.2em;
        text-transform:uppercase;
      }

      .submit-btn:hover{
        background:#c4622d;
      }

      .mobile-contact-header{
        display:none;
        margin-bottom:2rem;
      }

      .mobile-contact-header p{
        font-family:'Playfair Display',serif;
        font-size:1.8rem;
        font-style:italic;
        color:#1a1814;
        margin-bottom:.3rem;
      }

      .mobile-contact-header span{
        font-size:.85rem;
        color:#6b6460;
      }

      @media(max-width:1024px){
        .contact-grid{
          grid-template-columns:1fr;
          gap:3rem;
        }
      }

      @media(max-width:768px){
        .mobile-contact-header{
          display:block;
        }

        .contact-form-intro{
          display:none;
        }

        .contact-form-grid{
          grid-template-columns:1fr;
        }

        .submit-row{
          flex-direction:column;
          align-items:flex-start;
        }

        .submit-btn{
          width:100%;
        }
      }

      `}</style>

      <main className="contact-page">

        <div className="contact-hero">
          <div className="container">

            <p style={{
              fontSize:'.7rem',
              fontWeight:'600',
              letterSpacing:'.3em',
              textTransform:'uppercase',
              color:'#c4622d',
              marginBottom:'1rem'
            }}>
              Get In Touch
            </p>

            <h1 style={{
              fontFamily:'Playfair Display,serif',
              fontSize:'clamp(2.5rem,5vw,4rem)',
              fontWeight:'600',
              color:'#fdfaf5',
              lineHeight:'1.1',
              marginBottom:'1rem'
            }}>
              Book Ethan
            </h1>

            <p style={{
              fontSize:'.95rem',
              color:'rgba(253,250,245,.5)',
              maxWidth:'500px',
              lineHeight:'1.8'
            }}>
              Ethan is known for being reliable, punctual, and deeply curated to every event. Expect a response within 24 hours.
            </p>

          </div>
        </div>

        <div className="contact-shell">
          <div className="contact-grid">
            <div className="contact-form">

              <div className="mobile-contact-header">
                <p>Let&apos;s Talk</p>
                <span>Tell Ethan about your event</span>
              </div>

              <div className="contact-form-intro" style={{marginBottom:'3rem'}}>
                <h2 style={{
                  fontFamily:'Playfair Display,serif',
                  fontSize:'clamp(1.5rem,2.5vw,2rem)',
                  fontWeight:'400',
                  fontStyle:'italic',
                  color:'#1a1814',
                  marginBottom:'.75rem'
                }}>
                  Tell me about your event
                </h2>
                <p style={{fontSize:'.85rem',color:'#6b6460',lineHeight:'1.7'}}>
                  Fill out the form below and Ethan or his team will be in touch shortly.
                </p>
              </div>

              <div className="contact-form-grid">

                <div style={{marginBottom:'2rem',gridColumn:'1/-1'}}>
                  <label>Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith"/>
                </div>

                <div style={{marginBottom:'2rem'}}>
                  <label>Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="jane@email.com"/>
                </div>

                <div style={{marginBottom:'2rem'}}>
                  <label>Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="(310) 000-0000"/>
                </div>

                <div style={{marginBottom:'2rem'}}>
                  <label>Type of Event</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Wedding</option>
                    <option>Private Event</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{marginBottom:'2rem'}}>
                  <label>Date of Event</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange}/>
                </div>

                <div style={{marginBottom:'2rem',gridColumn:'1/-1'}}>
                  <label>Location of Event</label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="Venue name or city"/>
                </div>

                <div style={{marginBottom:'2.5rem',gridColumn:'1/-1'}}>
                  <label>How can I help?</label>
                  <textarea rows={5} name="message" value={formData.message} onChange={handleChange}/>
                </div>

                <div className="submit-row">
                  <button className="submit-btn" onClick={handleSubmit}>Send Inquiry</button>
                  <p style={{fontSize:'.75rem',color:'rgba(26,24,20,.4)'}}>
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