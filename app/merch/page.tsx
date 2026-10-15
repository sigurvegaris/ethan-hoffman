'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MerchMock from '../components/MerchMock'
import { merch, type MerchItem } from '../lib/merch'
import { sendFanNote } from '../lib/notify'

function MerchCard({ item, i }: { item: MerchItem; i: number }) {
  const available = Boolean(item.buyUrl)
  return (
    <article className="mc">
      <div className="mc-tile" style={{ background: item.tile, ['--tilt' as string]: `${i % 2 ? 1.2 : -1.2}deg` }}>
        {item.image ? (
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 90vw, 30vw" style={{ objectFit: 'contain', padding: '8%' }} />
        ) : (
          <div className="mc-mock"><MerchMock mock={item.mock} /></div>
        )}
        {!available && <span className="mc-soon">coming soon</span>}
      </div>
      <h3 className="mc-name">{item.name.toLowerCase()}</h3>
      <p className="mc-meta">{item.price ?? item.kind.toLowerCase()}</p>
      <p className="mc-desc">{item.description}</p>
      {available && <a className="mc-buy" href={item.buyUrl} target="_blank" rel="noopener noreferrer">buy now</a>}
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
      <style>{`
        .mp { background: var(--green); color: var(--cream); min-height: 100vh; font-family: var(--f-body); }
        .mp-hero { background: #1f261c url('/images/malibu/fence-dusk.webp') center 58% / cover; position: relative; padding: 11rem 0 5rem; color: #f2ecdf; }
        .mp-hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(20,22,16,0.85), rgba(20,22,16,0.35)); }
        .mp-wrap { width: min(1180px, calc(100% - 3rem)); margin: 0 auto; position: relative; z-index: 1; }
        .mp-script { font-family: var(--f-hand); font-size: clamp(2rem, 4vw, 3rem); color: #c9a26a; margin: 0; }
        .mp-title { font-family: var(--f-display); font-weight: 600; font-style: italic; font-size: clamp(3.4rem, 9vw, 6.5rem); letter-spacing: -0.03em; line-height: 1; margin: 0 0 1rem; }
        .mp-sub { font-size: 1.1rem; max-width: 46ch; color: rgba(242,236,223,0.8); margin: 0; }
        .mp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4rem 3rem; padding: 5rem 0; }
        .mc-tile { position: relative; aspect-ratio: 1.15; transform: rotate(var(--tilt)); transition: transform 0.4s ease;
          clip-path: polygon(0% 2%, 4% 0%, 9% 1.5%, 15% 0.3%, 22% 1.8%, 30% 0.2%, 38% 1.4%, 47% 0%, 55% 1.6%, 63% 0.4%, 71% 1.9%, 80% 0.3%, 88% 1.5%, 95% 0%, 100% 1.8%, 99% 9%, 100% 18%, 98.6% 28%, 100% 38%, 98.8% 50%, 100% 61%, 98.7% 72%, 100% 83%, 98.9% 92%, 100% 98%, 95% 100%, 87% 98.5%, 79% 100%, 70% 98.4%, 61% 99.8%, 52% 98.3%, 43% 100%, 34% 98.6%, 25% 100%, 16% 98.4%, 8% 99.8%, 0% 98%, 1.2% 88%, 0% 77%, 1.4% 66%, 0% 55%, 1.2% 44%, 0% 33%, 1.5% 22%, 0% 12%);
          box-shadow: inset 0 0 60px rgba(0,0,0,0.06); }
        .mc-tile::after { content: ''; position: absolute; inset: 0; pointer-events: none; opacity: 0.35; mix-blend-mode: multiply; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E"); }
        .mc:hover .mc-tile { transform: rotate(0deg) scale(1.01); }
        .mc-mock { position: absolute; inset: 10% 12%; display: flex; align-items: center; justify-content: center; }
        .mc-mock svg { width: 100%; height: 100%; filter: drop-shadow(0 14px 18px rgba(0,0,0,0.18)); }
        .mc-soon { position: absolute; top: 1.4rem; right: 1.4rem; z-index: 2; font-family: var(--f-hand); font-size: 1.5rem; color: #1c1a15; background: #f2ecdf; padding: 0.15rem 0.8rem; transform: rotate(4deg); box-shadow: 0 4px 10px rgba(0,0,0,0.12); }
        .mc-name { font-family: var(--f-body); font-weight: 600; font-size: 1.05rem; letter-spacing: 0.26em; margin: 1.75rem 0 0.35rem; }
        .mc-meta { font-family: var(--f-mono); font-weight: 400; font-size: 0.8rem; letter-spacing: 0.26em; margin: 0 0 0.6rem; opacity: 0.8; }
        .mc-desc { font-size: 1rem; line-height: 1.6; color: var(--cream-dim); margin: 0; max-width: 46ch; }
        .mc-buy { display: inline-block; margin-top: 1rem; background: var(--cream); color: var(--green); text-decoration: none; padding: 0.7rem 2rem; font-weight: 500; }
        .mp-notify { border-top: 1px solid rgba(242,236,223,0.18); padding: 4rem 0 6rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
        .mp-notify h2 { font-family: var(--f-display); font-weight: 400; font-size: clamp(2rem, 4vw, 3rem); line-height: 1.05; margin: 0; }
        .mp-form { display: flex; gap: 0.5rem; }
        .mp-input { flex: 1; min-width: 0; border: 1px solid var(--cream); background: transparent; padding: 0.95rem 1.1rem; font-family: inherit; font-size: 0.95rem; letter-spacing: 0.08em; color: var(--cream); }
        .mp-btn { border: none; background: var(--cream); color: var(--green); padding: 0 1.6rem; font-family: inherit; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; cursor: pointer; }
        @media (max-width: 900px) {
          .mp-hero { padding: 8.5rem 0 3.5rem; }
          .mp-wrap { width: calc(100% - 2.5rem); }
          .mp-grid { grid-template-columns: 1fr; gap: 3.5rem; padding: 3.5rem 0; }
          .mp-notify { grid-template-columns: 1fr; padding: 3rem 0 4.5rem; }
          .mp-form { flex-direction: column; }
          .mp-btn { padding: 0.95rem; }
        }
      `}</style>

      <main className="mp">
        <header className="mp-hero">
          <div className="mp-wrap">
            <p className="mp-script">the first collection</p>
            <h1 className="mp-title">merch</h1>
            <p className="mp-sub">Made for the fans who were here first. Everything below is coming soon.</p>
          </div>
        </header>

        <div className="mp-wrap">
          <div className="mp-grid">
            {merch.map((item, i) => <MerchCard key={item.name} item={item} i={i} />)}
          </div>

          {anyComingSoon && (
            <section className="mp-notify">
              <h2>Be first in line when it drops.</h2>
              <div>
                {status === 'done' ? (
                  <p style={{ fontFamily: 'var(--f-hand)', fontSize: '1.8rem', margin: 0 }}>you&apos;re on the list ♡</p>
                ) : (
                  <form className="mp-form" onSubmit={notify}>
                    <input className="mp-input" type="email" required placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
                    <button className="mp-btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? '…' : 'Notify me'}</button>
                  </form>
                )}
                {status === 'error' && <p style={{ margin: '0.75rem 0 0' }}>That didn&apos;t go through. Try again?</p>}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
