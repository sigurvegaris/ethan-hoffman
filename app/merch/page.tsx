'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { merch, type MerchItem } from '../lib/merch'
import { sendFanNote } from '../lib/notify'

function MerchCard({ item }: { item: MerchItem }) {
  const available = Boolean(item.buyUrl)
  return (
    <div className="merch-card">
      <div className="merch-visual">
        {item.image ? (
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
        ) : (
          <div className="merch-placeholder">
            <span className="merch-placeholder-kind">{item.kind}</span>
            <span className="merch-placeholder-name">{item.name}</span>
          </div>
        )}
        {!available && <span className="merch-badge">Coming Soon</span>}
      </div>
      <p className="merch-kind">{item.kind}{item.price ? ` · ${item.price}` : ''}</p>
      <h3 className="merch-name">{item.name}</h3>
      <p className="merch-desc">{item.description}</p>
      {available && (
        <a href={item.buyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
          Buy Now
        </a>
      )}
    </div>
  )
}

export default function Merch() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const anyComingSoon = merch.some((m) => !m.buyUrl)

  const notify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      await sendFanNote('Merch waitlist', { email, message: `Please let ${email} know when merch drops.` })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <style>{`
        .merch-page { background: #1a1814; min-height: 100vh; }
        .merch-hero { padding: 8rem 0 4rem; border-bottom: 1px solid rgba(196,168,130,0.1); }
        .merch-shell { width: min(1200px, calc(100% - 3rem)); margin: 0 auto; padding: 4rem 0 6rem; }
        .merch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .merch-card { display: flex; flex-direction: column; }
        .merch-visual { position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: #2d2926; margin-bottom: 1.25rem; }
        .merch-placeholder { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; background: linear-gradient(160deg, #2d2926 0%, #1a1814 65%, #3a1f12 100%); border: 1px solid rgba(196,168,130,0.15); }
        .merch-placeholder-kind { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; color: #c4622d; margin-bottom: 0.5rem; }
        .merch-placeholder-name { font-family: 'Playfair Display', serif; font-size: 1.6rem; line-height: 1.1; color: rgba(253,250,245,0.85); }
        .merch-badge { position: absolute; top: 1rem; left: 1rem; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #fdfaf5; background: #c4622d; padding: 0.4rem 0.7rem; }
        .merch-kind { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(253,250,245,0.45); margin: 0 0 0.4rem; }
        .merch-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: #fdfaf5; margin: 0 0 0.5rem; }
        .merch-desc { font-size: 0.85rem; line-height: 1.65; color: rgba(253,250,245,0.6); margin: 0; }
        .merch-notify { margin-top: 5rem; padding: 3rem; border: 1px solid rgba(196,168,130,0.2); display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
        .merch-form { display: flex; gap: 0.5rem; }
        .merch-input { flex: 1; min-width: 0; padding: 0.9rem 1rem; background: transparent; border: 1px solid rgba(253,250,245,0.25); color: #fdfaf5; font-size: 0.9rem; }
        .merch-input::placeholder { color: rgba(253,250,245,0.4); }
        @media (max-width: 1024px) { .merch-grid { grid-template-columns: repeat(2, 1fr); } .merch-notify { grid-template-columns: 1fr; } }
        @media (max-width: 768px) {
          .merch-hero { padding: 7rem 0 3rem; }
          .merch-shell { width: calc(100% - 2rem); padding: 3rem 0 4rem; }
          .merch-grid { gap: 1.25rem; }
          .merch-placeholder-name { font-size: 1.15rem; }
          .merch-notify { padding: 1.75rem; margin-top: 3.5rem; }
          .merch-form { flex-direction: column; }
        }
        @media (max-width: 480px) { .merch-grid { grid-template-columns: 1fr; } }
      `}</style>

      <main className="merch-page">
        <div className="merch-hero">
          <div className="container">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>
              Merch
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1rem' }}>
              {anyComingSoon ? 'Coming Soon' : 'Shop'}
            </h1>
            <p style={{ color: 'rgba(253,250,245,0.55)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '560px' }}>
              The first Ethan Hoffman collection, made for the fans who have been here from day one.
            </p>
          </div>
        </div>

        <div className="merch-shell">
          <div className="merch-grid">
            {merch.map((item) => <MerchCard key={item.name} item={item} />)}
          </div>

          {anyComingSoon && (
            <div className="merch-notify">
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem' }}>
                  Be First in Line
                </p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fdfaf5', lineHeight: '1.2', margin: 0 }}>
                  Get a note the moment merch drops.
                </p>
              </div>
              {status === 'done' ? (
                <p style={{ color: 'rgba(253,250,245,0.8)', fontSize: '0.95rem', margin: 0 }}>You&apos;re on the list. Ethan will let you know.</p>
              ) : (
                <form className="merch-form" onSubmit={notify}>
                  <input
                    type="email" required placeholder="Your email" value={email}
                    onChange={(e) => setEmail(e.target.value)} className="merch-input" aria-label="Email address"
                  />
                  <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Notify Me'}
                  </button>
                  {status === 'error' && <p style={{ color: '#e8a07c', fontSize: '0.8rem', margin: 0 }}>Something went wrong. Try again?</p>}
                </form>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
