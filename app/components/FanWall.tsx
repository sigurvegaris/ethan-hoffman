'use client'
import { useState } from 'react'
import { dayOneFans, listeningFrom } from '../lib/fans'
import { sendFanNote } from '../lib/notify'

export default function FanWall() {
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const names = dayOneFans.length ? [...dayOneFans, ...dayOneFans] : []

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setStatus('sending')
    try {
      await sendFanNote('Day One fan wall', {
        name: name.trim(),
        location: place.trim(),
        message: `${name.trim()}${place.trim() ? ` from ${place.trim()}` : ''} wants to be on the Day One wall.`,
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="fan-wall">
      <style>{`
        .fan-wall { background: #ebe3d5; padding: 7rem 0; overflow: hidden; }
        .fan-inner { width: min(1100px, calc(100% - 3rem)); margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; gap: 4rem; align-items: center; }
        .fan-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.75rem; }
        .fan-chip { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #6b6460; border: 1px solid rgba(26,24,20,0.15); padding: 0.45rem 0.8rem; }
        .fan-card { background: #fdfaf5; border: 1px solid rgba(196,98,45,0.25); padding: 2.25rem; box-shadow: 0 20px 50px rgba(26,24,20,0.08); }
        .fan-input { width: 100%; padding: 0.9rem 1rem; border: 1px solid rgba(26,24,20,0.2); background: transparent; font-size: 0.95rem; color: #1a1814; margin-bottom: 0.75rem; }
        .fan-note { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.6rem; line-height: 1.35; color: #1a1814; margin: 0; }
        .fan-marquee { margin-top: 5rem; border-top: 1px solid rgba(26,24,20,0.1); border-bottom: 1px solid rgba(26,24,20,0.1); padding: 1.25rem 0; white-space: nowrap; }
        .fan-marquee-track { display: inline-block; animation: fan-scroll 90s linear infinite; }
        .fan-marquee-track span { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.3rem; color: #6b6460; padding: 0 1.25rem; }
        @keyframes fan-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .fan-marquee-track { animation: none; } }
        @media (max-width: 900px) {
          .fan-wall { padding: 4rem 0; }
          .fan-inner { grid-template-columns: 1fr; gap: 2.5rem; width: calc(100% - 2.5rem); }
          .fan-card { padding: 1.5rem; }
          .fan-marquee { margin-top: 3rem; }
        }
      `}</style>
      <div className="fan-inner">
        <div>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Day One</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: '600', color: '#1a1814', lineHeight: '1.15', marginBottom: '1.25rem' }}>
            Every name gets<br /><em style={{ fontWeight: '400' }}>written down.</em>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', margin: 0 }}>
            Ethan reads the comments and keeps the names of the people who show up for the music. Leave yours here
            and it goes on the list, and maybe on the back of the Day One shirt.
          </p>
          <div className="fan-chips" aria-label="Fans are listening from">
            {listeningFrom.map((c) => <span key={c} className="fan-chip">{c}</span>)}
          </div>
        </div>

        <div className="fan-card">
          {status === 'done' ? (
            <p className="fan-note">
              Thank you, {name.trim()}{place.trim() ? ` from ${place.trim()}` : ''}. You&apos;re on the list.
              <br /><span style={{ fontSize: '1.1rem', color: '#c4622d' }}>— Ethan</span>
            </p>
          ) : (
            <form onSubmit={submit}>
              <input className="fan-input" required maxLength={40} placeholder="Your first name" value={name} onChange={(e) => setName(e.target.value)} aria-label="First name" />
              <input className="fan-input" maxLength={60} placeholder="Where are you listening from?" value={place} onChange={(e) => setPlace(e.target.value)} aria-label="Where are you listening from" />
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.25rem' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Add My Name'}
              </button>
              {status === 'error' && <p style={{ color: '#c4622d', fontSize: '0.8rem', marginTop: '0.75rem' }}>That didn&apos;t go through. Try again?</p>}
            </form>
          )}
        </div>
      </div>

      {names.length > 0 && (
        <div className="fan-marquee" aria-label="Day One fans">
          <div className="fan-marquee-track">
            {names.map((n, i) => <span key={i}>{n}</span>)}
          </div>
        </div>
      )}
    </section>
  )
}
