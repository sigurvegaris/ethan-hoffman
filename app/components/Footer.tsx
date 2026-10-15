'use client'
import { useState } from 'react'
import Link from 'next/link'
import { sendFanNote } from '../lib/notify'

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ethanhoffmanofficial/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@ethanhoffmanofficial',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>`,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/ethanbhoffman',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  },
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  },
  {
    label: 'Apple Music',
    url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/watch?v=iCRmtLvbcdw',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  },
]

const contactItems = [
  { label: 'Email', value: 'booking@ethanhoffmanofficial.com', url: 'mailto:booking@ethanhoffmanofficial.com' },
  { label: 'Website', value: 'ethanhoffmanofficial.com', url: 'https://ethanhoffmanofficial.com' },
  { label: 'Google Business', value: 'Ethan Hoffman Music', url: 'https://share.google/uLKpnc1llmBCJJqVu' },
  { label: 'Location', value: 'Los Angeles, CA', url: null },
]

const quickLinks = [
  { label: 'music', href: '/music' },
  { label: 'shows', href: '/shows' },
  { label: 'merch', href: '/merch' },
  { label: 'about', href: '/about' },
  { label: 'book live', href: '/services' },
  { label: 'repertoire', href: '/repertoire' },
  { label: 'past venues', href: '/venues' },
  { label: 'testimonials', href: '/testimonials' },
  { label: 'contact', href: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      await sendFanNote('Mailing list', { email, message: `${email} signed up for the mailing list.` })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="eh-foot">
      <style>{`
        .eh-foot { background: #1f261c; color: #f2ecdf; padding: 5.5rem 0 2rem; font-family: 'Jost', 'Inter', sans-serif; position: relative; overflow: hidden; }
        .eh-foot-wrap { width: min(1180px, calc(100% - 3rem)); margin: 0 auto; }
        .eh-foot-top { display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: start; }
        .eh-foot-mark { font-family: 'Instrument Serif', Georgia, serif; font-size: clamp(3.4rem, 9vw, 7.5rem); line-height: 0.85; letter-spacing: -0.03em; margin: 0; }
        .eh-foot-mark em { font-style: italic; color: #e2a75a; }
        .eh-foot-tag { font-family: 'Caveat', cursive; font-size: 1.6rem; color: rgba(242,236,223,0.75); margin: 1rem 0 0; }
        .eh-foot-label { font-size: 1rem; font-weight: 500; margin: 0 0 0.9rem; }
        .eh-foot-form { display: flex; gap: 0.5rem; }
        .eh-foot-input { flex: 1; min-width: 0; background: transparent; border: 1px solid rgba(242,236,223,0.7); color: #f2ecdf; padding: 0.95rem 1.1rem; font-family: inherit; font-size: 0.95rem; letter-spacing: 0.08em; }
        .eh-foot-input::placeholder { color: rgba(242,236,223,0.5); }
        .eh-foot-btn { background: #f2ecdf; color: #1c1a15; border: none; padding: 0 1.6rem; font-family: inherit; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; cursor: pointer; }
        .eh-foot-btn:hover { background: #e2a75a; }
        .eh-foot-fine { font-size: 0.78rem; letter-spacing: 0.06em; line-height: 1.7; color: rgba(242,236,223,0.55); margin: 0.9rem 0 0; }
        .eh-foot-links { display: flex; flex-wrap: wrap; gap: 0.6rem 1.75rem; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(242,236,223,0.12); }
        .eh-foot-links a { color: rgba(242,236,223,0.8); text-decoration: none; font-size: 1rem; }
        .eh-foot-links a:hover { color: #e2a75a; }
        .eh-foot-bottom { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap; margin-top: 2.5rem; font-size: 0.78rem; letter-spacing: 0.18em; color: rgba(242,236,223,0.5); }
        .eh-foot-bottom a { color: inherit; text-decoration: none; }
        .eh-foot-bottom a:hover { color: #f2ecdf; }
        .eh-foot-contact { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; }
        .eh-foot-social { display: flex; gap: 1rem; }
        .eh-foot-social a { color: rgba(242,236,223,0.8); display: flex; }
        .eh-foot-social a:hover { color: #e2a75a; }
        @media (max-width: 900px) {
          .eh-foot { padding-top: 4rem; }
          .eh-foot-wrap { width: calc(100% - 2.5rem); }
          .eh-foot-top { grid-template-columns: 1fr; gap: 2.5rem; }
          .eh-foot-form { flex-direction: column; }
          .eh-foot-btn { padding: 0.95rem 1.6rem; }
          .eh-foot-links { margin-top: 3rem; }
        }
      `}</style>
      <div className="eh-foot-wrap">
        <div className="eh-foot-top">
          <div>
            <p className="eh-foot-mark">Ethan<br /><em>Hoffman</em></p>
            <p className="eh-foot-tag">thanks for being here. — e</p>
          </div>
          <div>
            <p className="eh-foot-label">sign up for the mailing list</p>
            {status === 'done' ? (
              <p className="eh-foot-tag" style={{ marginTop: 0 }}>you&apos;re on the list ♡</p>
            ) : (
              <form className="eh-foot-form" onSubmit={subscribe}>
                <input className="eh-foot-input" type="email" required placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
                <button className="eh-foot-btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? '…' : 'Subscribe'}</button>
              </form>
            )}
            <p className="eh-foot-fine">
              {status === 'error' ? 'That didn’t go through. Try again?' : 'New music, show dates and the occasional note from Ethan. Nothing else.'}
            </p>
          </div>
        </div>

        <nav className="eh-foot-links" aria-label="Footer">
          {quickLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>

        <div className="eh-foot-bottom">
          <span>© {new Date().getFullYear()} ethan hoffman · los angeles</span>
          <span className="eh-foot-contact">
            {contactItems.filter((c) => c.url && c.label === 'Email').map((c) => <a key={c.label} href={c.url!}>{c.value}</a>)}
          </span>
          <span className="eh-foot-social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} dangerouslySetInnerHTML={{ __html: s.icon }} />
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}
