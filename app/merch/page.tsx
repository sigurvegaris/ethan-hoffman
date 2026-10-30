'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MerchMock from '../components/MerchMock'
import { merch, type MerchItem } from '../lib/merch'
import { sendFanNote } from '../lib/notify'
import Parallax from '../about/Parallax'
import './merch.css'

function MerchCard({ item, i }: { item: MerchItem; i: number }) {
  const available = Boolean(item.buyUrl)
  return (
    <article className="mc">
      <div className="mc-tile" style={{ ['--tile' as string]: item.tile }}>
        {item.image ? (
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 90vw, 40vw" style={{ objectFit: 'contain', padding: '8%' }} />
        ) : (
          <div className="mc-mock"><MerchMock mock={item.mock} /></div>
        )}
        {!available && <span className="mc-soon">Coming soon</span>}
        <span className="mc-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
      </div>
      <div className="mc-info">
        <h3 className="mc-name">{item.name}</h3>
        <p className="mc-meta">{item.kind}{item.price ? ` · ${item.price}` : ''}</p>
      </div>
      <p className="mc-desc">{item.description}</p>
      {available && <a className="mc-buy" href={item.buyUrl} target="_blank" rel="noopener noreferrer">Buy now</a>}
    </article>
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

      <main className="mp">
        <Parallax scope=".mp" />
        <header className="mp-hero">
          <div className="mp-hero-photo" data-speed={-0.12}>
            <Image src="/images/malibu/fence-dusk.webp" alt="Ethan at dusk beside a white ranch fence" fill priority sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: 'cover', objectPosition: 'center 42%' }} />
          </div>
          <div className="mp-wrap mp-hero-copy">
            <p className="mp-label">The first collection</p>
            <h1 className="mp-title">Merch</h1>
            <p className="mp-sub">Made for the fans who were here first. Everything below is coming soon.</p>
          </div>
        </header>

        <div className="mp-wrap">
          <div className="mp-grid">
            {merch.map((item, i) => <MerchCard key={item.name} item={item} i={i} />)}
          </div>

          {anyComingSoon && (
            <section className="mp-notify">
              <div>
                <p className="mp-label">The waitlist</p>
                <h2>Be first in line <em>when it drops.</em></h2>
              </div>
              <div>
                {status === 'done' ? (
                  <p className="mp-done">You&apos;re on the list ♡</p>
                ) : (
                  <form className="mp-form" onSubmit={notify}>
                    <input className="mp-input" type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
                    <button className="mp-btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? '…' : 'Notify me'}</button>
                  </form>
                )}
                {status === 'error' && <p className="mp-error">That didn&apos;t go through. Try again?</p>}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
