'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sendFanNote } from '../lib/notify'
import { socialLinks } from '../lib/social'

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

// India easter egg: "los angeles" is a way out. Tap it for a one-way ticket.
function LeavingCalifornia() {
  const [open, setOpen] = useState(false)
  return (
    <span className="eh-lc">
      <button type="button" className="eh-lc-city" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="eh-lc-a">los angeles</span>
        <span className="eh-lc-b" aria-hidden="true">leaving california</span>
      </button>
      {open && (
        <span className="eh-lc-ticket" role="note">
          <span className="eh-lc-row"><b>LAX</b><i>✈</i><b>DEL</b></span>
          <span className="eh-lc-grid">
            <span><em>passenger</em>you</span>
            <span><em>class</em>one way</span>
            <span><em>fare</em>no money</span>
            <span><em>seat</em>no bed</span>
          </span>
          <span className="eh-lc-foot">destination: sweet india</span>
        </span>
      )}
    </span>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  // The mailing list page has the full form, so the footer doesn't repeat it there.
  const onListPage = usePathname() === '/mailing-list'

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
        .eh-foot { background: #1f261c; color: #f2ecdf; padding: 5.5rem 0 2rem; font-family: var(--f-body); position: relative; overflow: hidden; }
        .eh-foot-wrap { width: min(1180px, calc(100% - 3rem)); margin: 0 auto; }
        .eh-foot-top { display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: start; }
        .eh-foot-mark { font-family: var(--f-display); font-size: clamp(3.4rem, 9vw, 7.5rem); line-height: 0.85; letter-spacing: -0.03em; margin: 0; }
        .eh-foot-mark em { font-style: italic; color: #e2a75a; }
        .eh-foot-tag { font-family: var(--f-hand); font-size: 1.6rem; color: rgba(242,236,223,0.75); margin: 1rem 0 0; }
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
        .eh-lc { position: relative; }
        .eh-lc-city { font: inherit; letter-spacing: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; display: inline-grid; }
        .eh-lc-city > span { grid-area: 1 / 1; transition: opacity 0.35s ease, transform 0.35s ease; }
        .eh-lc-b { opacity: 0; transform: translateY(6px); color: #e2a75a; }
        .eh-lc-city:hover .eh-lc-a, .eh-lc-city[aria-expanded='true'] .eh-lc-a { opacity: 0; transform: translateY(-6px); }
        .eh-lc-city:hover .eh-lc-b, .eh-lc-city[aria-expanded='true'] .eh-lc-b { opacity: 1; transform: none; }
        .eh-lc-ticket {
          position: absolute; left: 0; bottom: calc(100% + 14px); z-index: 5; width: 250px; padding: 1rem 1.1rem 0.9rem;
          background: #f2ecdf; color: #1c1a15; letter-spacing: 0.08em; border-radius: 10px; box-shadow: 0 18px 40px rgba(0,0,0,0.4);
          -webkit-mask: radial-gradient(circle 8px at 0 68%, transparent 98%, #000) , radial-gradient(circle 8px at 100% 68%, transparent 98%, #000);
          -webkit-mask-composite: source-in; mask: radial-gradient(circle 8px at 0 68%, transparent 98%, #000), radial-gradient(circle 8px at 100% 68%, transparent 98%, #000);
          mask-composite: intersect; animation: eh-lc-in 0.35s ease;
        }
        .eh-lc-row { display: flex; align-items: center; justify-content: space-between; font-family: var(--f-display); font-size: 1.9rem; letter-spacing: 0.02em; }
        .eh-lc-row i { font-style: normal; font-size: 1rem; color: #d2703a; }
        .eh-lc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1rem; margin: 0.7rem 0 0.9rem; font-size: 0.72rem; }
        .eh-lc-grid span { display: flex; flex-direction: column; }
        .eh-lc-grid em { font-style: normal; font-size: 0.58rem; opacity: 0.55; text-transform: uppercase; }
        .eh-lc-foot { display: block; padding-top: 0.7rem; border-top: 1px dashed rgba(28,26,21,0.35); font-family: var(--f-hand); font-size: 1.35rem; letter-spacing: 0; color: #d2703a; }
        @keyframes eh-lc-in { from { opacity: 0; transform: translateY(8px) rotate(-2deg); } }
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
          {!onListPage && <div>
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
          </div>}
        </div>

        <nav className="eh-foot-links" aria-label="Footer">
          {quickLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>

        <div className="eh-foot-bottom">
          <span>© {new Date().getFullYear()} ethan hoffman · <LeavingCalifornia /></span>
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
