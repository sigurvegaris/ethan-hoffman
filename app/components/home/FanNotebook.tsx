'use client'
import { useState } from 'react'
import Image from 'next/image'
import { dayOneFans, listeningFrom } from '../../lib/fans'
import { sendFanNote } from '../../lib/notify'

// Fireflies drifting over the oak at dusk. Positions are fixed numbers, not
// random, so the server and browser render the same thing.
const flies = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 92,
  delay: (i * 0.7) % 9,
  dur: 7 + ((i * 3) % 7),
  size: 3 + (i % 3),
}))

export default function FanNotebook() {
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const glowing = [...dayOneFans.slice(-10), ...listeningFrom]

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const n = name.trim()
    if (!n) return
    setStatus('sending')
    try {
      await sendFanNote('Day One notebook', {
        name: n,
        email: email.trim(),
        location: place.trim(),
        message: `${n}${place.trim() ? ` from ${place.trim()}` : ''} signed up as a Day One fan.`,
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="day-one" className="d1">
      <div className="d1-bg" aria-hidden="true">
        <Image src="/images/malibu/oak-lying.webp" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
      </div>
      <div className="d1-flies" aria-hidden="true">
        {flies.map((f, i) => (
          <span key={i} style={{ left: `${f.left}%`, top: `${f.top}%`, width: f.size, height: f.size, animationDelay: `${f.delay}s`, animationDuration: `${f.dur}s` }} />
        ))}
        {glowing.map((w, i) => (
          <em key={w} style={{ left: `${(i * 29 + 6) % 84}%`, top: `${(i * 41 + 12) % 80}%`, animationDelay: `${i * 1.3}s` }}>{w}</em>
        ))}
      </div>

      <div className="fh-wrap d1-inner">
        <div className="d1-card">
          <p className="fh-label">day one</p>
          {status === 'done' ? (
            <>
              <h2 className="d1-title">You&apos;re in, <em>{name.trim()}.</em></h2>
              <p className="d1-text">Ethan reads every name. Yours might end up on the back of the Day One shirt.</p>
            </>
          ) : (
            <>
              <h2 className="d1-title">Ethan writes down <em>every name.</em></h2>
              <p className="d1-text">
                He reads the comments and keeps the names of the people who show up for the music.
                Add yours, and you might end up on the back of the Day One shirt.
              </p>
              <form onSubmit={submit} className="d1-form">
                <input className="d1-input" required maxLength={40} placeholder="first name" value={name} onChange={(e) => setName(e.target.value)} aria-label="First name" />
                <input className="d1-input" maxLength={60} placeholder="where you’re listening from" value={place} onChange={(e) => setPlace(e.target.value)} aria-label="Where you're listening from" />
                <input className="d1-input" type="email" maxLength={80} placeholder="email, for new music (optional)" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email, optional" />
                <button type="submit" className="glass-btn glass-btn-solid d1-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'adding you…' : 'add my name'}
                </button>
                {status === 'error' && <p className="d1-small">That didn&apos;t go through. Try again?</p>}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
