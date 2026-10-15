'use client'
import { useState } from 'react'
import { dayOneFans, listeningFrom } from '../../lib/fans'
import { sendFanNote } from '../../lib/notify'

export default function FanNotebook() {
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const shown = dayOneFans.slice(-12)

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
        message: [
          `${n}${place.trim() ? ` from ${place.trim()}` : ''} signed the Day One notebook.`,
          birthday ? `Birthday: ${birthday}` : '',
        ].filter(Boolean).join('\n'),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="notebook" className="nb-fans">
      <div className="nb-wrap nb-fans-grid">
        <div>
          <p className="nb-label" style={{ color: 'var(--rust)', marginBottom: '1.25rem' }}>Day one</p>
          <h2 className="nb-fans-title">Every name gets <em>written down.</em></h2>
          <p className="nb-lede">
            Ethan reads the comments and writes down the names of the people who show up for the music.
            Sign the notebook and you’re in it, and maybe on the back of the Day One shirt.
          </p>
          <p className="nb-label" style={{ color: 'var(--ink-soft)', marginTop: '2rem' }}>Listening from</p>
          <div className="nb-places">
            {listeningFrom.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>

        <div className="nb-page nb-sign">
          <p className="nb-sign-head">the notebook —</p>
          {(shown.length > 0 || status === 'done') && (
            <div className="nb-sign-names">
              {shown.map((n, i) => <div key={i}>{n}</div>)}
              {status === 'done' && <div className="nb-sign-new">{name.trim()}{place.trim() ? `, ${place.trim()}` : ''}</div>}
            </div>
          )}

          {status === 'done' ? (
            <p className="nb-thanks">thank you, {name.trim()}. you’re in the book. — e</p>
          ) : (
            <form onSubmit={submit}>
              <input className="nb-field" required maxLength={40} placeholder="your first name" value={name} onChange={(e) => setName(e.target.value)} aria-label="First name" />
              <div className="nb-field-row">
                <input className="nb-field" maxLength={60} placeholder="where you’re listening from" value={place} onChange={(e) => setPlace(e.target.value)} aria-label="Where you're listening from" />
                <input className="nb-field" maxLength={20} placeholder="birthday (optional)" value={birthday} onChange={(e) => setBirthday(e.target.value)} aria-label="Birthday, optional" />
              </div>
              <input className="nb-field" type="email" maxLength={80} placeholder="email, for new music (optional)" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email, optional" />
              <div className="nb-sign-foot">
                <span className="nb-small">{status === 'error' ? 'That didn’t go through. Try again?' : 'No spam. Just new music and the occasional note from Ethan.'}</span>
                <button type="submit" className="nb-btn nb-btn-ink" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Signing…' : 'Sign the notebook'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
