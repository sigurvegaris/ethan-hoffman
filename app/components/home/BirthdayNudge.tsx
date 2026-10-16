'use client'
import { useEffect, useState } from 'react'
import { sendFanNote } from '../../lib/notify'

const KEY = 'eh-birthday-nudge'
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function dismissedBefore() {
  try { return window.localStorage.getItem(KEY) !== null } catch { return false }
}
function remember(value: string) {
  try { window.localStorage.setItem(KEY, value) } catch { /* private mode: fine */ }
}

// A small, dismissible card that slides in once a visitor has scrolled a
// good way down the page. Shown once per browser.
export default function BirthdayNudge() {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  useEffect(() => {
    if (dismissedBefore()) return
    const onScroll = () => {
      const progress = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
      if (progress > 0.45) { setVisible(true); window.removeEventListener('scroll', onScroll) }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => { setVisible(false); remember('dismissed') }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !month || !day) return
    setStatus('sending')
    try {
      await sendFanNote('Fan birthday', { name: name.trim(), message: `${name.trim()}'s birthday is ${month} ${day}.` })
      setStatus('done')
      remember('sent')
      setTimeout(() => setVisible(false), 3500)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={`bd ${visible ? 'is-open' : ''}`} role="dialog" aria-label="Tell Ethan your birthday" aria-hidden={!visible}>
      <button className="bd-x" type="button" onClick={close} aria-label="Close" tabIndex={visible ? 0 : -1}>×</button>
      {status === 'done' ? (
        <p className="bd-script" style={{ margin: '0.5rem 0' }}>it&apos;s in the book. talk soon, {name.trim()} ♡</p>
      ) : (
        <>
          <p className="bd-script">Wait! When&apos;s your birthday?</p>
          <p className="bd-sub">Ethan would love to celebrate you.</p>
          <form onSubmit={submit} className="bd-form">
            <input className="bd-input" placeholder="first name" value={name} onChange={(e) => setName(e.target.value)} maxLength={40} required aria-label="First name" tabIndex={visible ? 0 : -1} />
            <div className="bd-row">
              <select className="bd-input" value={month} onChange={(e) => setMonth(e.target.value)} required aria-label="Birthday month" tabIndex={visible ? 0 : -1}>
                <option value="">month</option>
                {months.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              <select className="bd-input" value={day} onChange={(e) => setDay(e.target.value)} required aria-label="Birthday day" tabIndex={visible ? 0 : -1}>
                <option value="">day</option>
                {Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <button className="bd-btn" type="submit" disabled={status === 'sending'} tabIndex={visible ? 0 : -1}>{status === 'sending' ? 'sending…' : 'celebrate me'}</button>
            {status === 'error' && <p className="bd-sub" style={{ marginTop: '0.5rem' }}>That didn&apos;t go through. Try again?</p>}
          </form>
        </>
      )}
    </div>
  )
}
