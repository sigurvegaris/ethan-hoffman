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

export default function MailingList() {
  const [form, setForm] = useState({ email: '', name: '', country: 'United States', postal: '', consent: false })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendFanNote('Mailing list sign-up', {
        name: form.name,
        email: form.email,
        location: [form.postal, form.country].filter(Boolean).join(', '),
        message: `New mailing list sign-up.\n\nEmail: ${form.email}\nFirst name: ${form.name || '(not given)'}\nCountry: ${form.country}\nPostal code: ${form.postal || '(not given)'}`,
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
            <h1 className="ml-title">mailing<br /><em>list</em></h1>
            <p className="ml-lede">Be the first to know about new music, show dates, merch drops and the occasional note from Ethan.</p>

            {status === 'done' ? (
              <div className="ml-done" role="status">
                <p className="ml-done-big">you&apos;re on the list{form.name ? `, ${form.name}` : ''}.</p>
                <p className="ml-done-small">Keep an eye on your inbox. India is out November 1.</p>
                <Link className="ml-btn" href="/">back home</Link>
              </div>
            ) : (
              <form className="ml-form" onSubmit={submit}>
                <label className="ml-field ml-wide">
                  <span>email address *</span>
                  <input type="email" required autoComplete="email" value={form.email} onChange={set('email')} />
                </label>
                <label className="ml-field">
                  <span>first name</span>
                  <input type="text" autoComplete="given-name" value={form.name} onChange={set('name')} />
                </label>
                <label className="ml-field">
                  <span>postal code</span>
                  <input type="text" autoComplete="postal-code" value={form.postal} onChange={set('postal')} />
                </label>
                <label className="ml-field ml-wide">
                  <span>country / region</span>
                  <select autoComplete="country-name" value={form.country} onChange={set('country')}>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
                <label className="ml-check ml-wide">
                  <input type="checkbox" required checked={form.consent} onChange={set('consent')} />
                  <span>Yes, send me emails from Ethan about new music, shows and merch. You can unsubscribe any time.</span>
                </label>
                <button className="ml-btn ml-wide" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'signing you up…' : 'submit'}
                </button>
                {status === 'error' && <p className="ml-error ml-wide">That didn&apos;t go through. Try again?</p>}
              </form>
            )}

            <p className="ml-contact">
              Booking a show or reaching Ethan&apos;s team? <Link href="/contact">Get in touch →</Link>
            </p>
          </section>

          <figure className="ml-photo">
            <Image src="/images/malibu/bench.webp" alt="Ethan sitting on a bench under a big oak" fill priority sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: 'center 62%' }} />
            <figcaption>saved you a seat</figcaption>
          </figure>
        </div>
      </main>
      <Footer />
    </>
  )
}
