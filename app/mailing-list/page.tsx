'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { sendFanNote } from '../lib/notify'
import './mailing-list.css'

const countries = [
  'United States', 'Canada', 'Mexico', 'United Kingdom', 'Ireland', 'Australia', 'New Zealand',
  'Germany', 'France', 'Netherlands', 'Spain', 'Italy', 'Sweden', 'Norway', 'Denmark',
  'Brazil', 'Philippines', 'Japan', 'South Korea', 'India', 'Somewhere else',
]

type BlankProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; invalid?: boolean; small?: boolean }

// A fill-in-the-blank line that grows with what's typed.
function Blank({ label, invalid, small, placeholder = '', value, ...rest }: BlankProps) {
  const typed = String(value ?? '')
  // A hidden copy of the text sizes the blank (see .ml-blank::before).
  return (
    <span className={`ml-blank${invalid ? ' is-miss' : ''}${small ? ' is-small' : ''}`} data-v={typed || placeholder}>
      <input size={1} aria-label={label} placeholder={placeholder} value={value} aria-invalid={invalid || undefined} {...rest} />
    </span>
  )
}

export default function MailingList() {
  const [form, setForm] = useState({ email: '', name: '', country: 'United States', consent: false })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [miss, setMiss] = useState<'email' | 'consent' | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value })
    setMiss(null)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) { setMiss('email'); return }
    if (!form.consent) { setMiss('consent'); return }
    setStatus('sending')
    try {
      await sendFanNote('Mailing list sign-up', {
        name: form.name,
        email: form.email,
        location: form.country,
        message: `New mailing list sign-up.\n\nEmail: ${form.email}\nFirst name: ${form.name || '(not given)'}\nCountry: ${form.country}`,
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main className="ml">
        <div className="ml-wrap">
          <section className="ml-copy">
            <h1 className="ml-title">Mailing<br /><em>List</em></h1>
            <p className="ml-lede">Be the first to know about new music, show dates, merch drops and the occasional note from Ethan.</p>

            {status === 'done' ? (
              <div className="ml-done" role="status">
                <p className="ml-done-big">You&apos;re on the list{form.name ? `, ${form.name}` : ''}.</p>
                <p className="ml-done-small">Keep an eye on your inbox. India is out November 1.</p>
                <Link className="ml-btn" href="/">Back home</Link>
              </div>
            ) : (
              <form className="ml-note" onSubmit={submit} noValidate>
                <p className="ml-note-to">Dear Ethan,</p>
                <p className="ml-sentence">
                  My name is <Blank label="First name" placeholder="Your first name" autoComplete="given-name" value={form.name} onChange={set('name')} />
                  {' '}and I want to hear it first. You can write to me at{' '}
                  <Blank label="Email address" type="email" placeholder="you@email.com" autoComplete="email" value={form.email} onChange={set('email')} invalid={miss === 'email'} />.
                  {' '}I&apos;m listening from{' '}
                  <span className="ml-blank ml-blank-select">
                    <select aria-label="Country or region" autoComplete="country-name" value={form.country} onChange={set('country')}>
                      {countries.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </span>.
                </p>

                <label className={`ml-firefly${form.consent ? ' is-on' : ''}${miss === 'consent' ? ' is-miss' : ''}`}>
                  <input type="checkbox" checked={form.consent} onChange={set('consent')} />
                  <span className="ml-firefly-bug" aria-hidden="true"><span className="ml-sig" data-sig="EH">EH</span></span>
                  <span className="ml-firefly-text">
                    <b>{form.consent ? 'Signed. You\'re in.' : 'Tap his signature to say yes'}</b>
                    Emails from Ethan about new music, shows and merch. Unsubscribe any time.
                  </span>
                </label>

                {miss && (
                  <p className="ml-nudge" role="alert">
                    {miss === 'email' ? 'Just need an email so he can write you back ↑' : 'Tap the signature first ↑'}
                  </p>
                )}
                {status === 'error' && <p className="ml-nudge" role="alert">That didn&apos;t send. Try again?</p>}

                <button className="ml-btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send it'}
                </button>
                <p className="ml-sign">— With love, {form.name.trim() || 'a friend'}</p>
              </form>
            )}

            <p className="ml-contact">
              Booking a show or reaching Ethan&apos;s team? <Link href="/contact">Get in touch →</Link>
            </p>
          </section>

          <figure className="ml-photo">
            <Image src="/images/malibu/bench.webp" alt="Ethan sitting on a bench under a big oak" fill priority sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: 'center 62%' }} />
          </figure>
        </div>
      </main>
      <Footer />
    </>
  )
}
