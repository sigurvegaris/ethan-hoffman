'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mainLinks = [
  { href: '/music', label: 'music' },
  { href: '/shows', label: 'shows' },
  { href: '/merch', label: 'merch' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'book live' },
]

const moreLinks = [
  { href: '/repertoire', label: 'repertoire' },
  { href: '/venues', label: 'past venues' },
  { href: '/testimonials', label: 'testimonials' },
  { href: '/contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <style>{`
        .eh-nav { position: fixed; inset: 0 0 auto 0; z-index: 1000; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; padding: 1.25rem 2.5rem; transition: background 0.35s ease, padding 0.35s ease, backdrop-filter 0.35s ease; background: linear-gradient(to bottom, rgba(14,18,12,0.5), rgba(14,18,12,0)); }
        .eh-nav.scrolled { background: rgba(20,26,18,0.55); backdrop-filter: blur(16px) saturate(1.1); -webkit-backdrop-filter: blur(16px) saturate(1.1); padding-top: 0.85rem; padding-bottom: 0.85rem; }
        .eh-wordmark { font-family: var(--f-display); font-size: 1.75rem; line-height: 1; color: #f2ecdf; text-decoration: none; letter-spacing: -0.01em; white-space: nowrap; }
        .eh-wordmark span, .eh-wordmark em { display: inline-block; transition: font-style 0s, opacity 0.35s ease; }
        .eh-wordmark em { font-style: italic; }
        /* The two names trade styles on hover: each one becomes the other. */
        .eh-wordmark:hover span { font-style: italic; }
        .eh-wordmark:hover em { font-style: normal; }
        .eh-links { display: flex; align-items: center; gap: 2rem; }
        .eh-link { font-family: var(--f-body); font-size: 1.05rem; font-weight: 500; color: #f2ecdf; text-decoration: none; position: relative; padding: 0.2rem 0; }
        .eh-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: -2px; height: 1.5px; background: #e2a75a; transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease; }
        .eh-link:hover::after, .eh-link.active::after { transform: scaleX(1); }
        .eh-signup { font-family: var(--f-body); font-size: 1rem; font-weight: 500; background: #f2ecdf; color: #1c1a15; text-decoration: none; padding: 0.5rem 1.6rem; transition: background 0.2s ease; }
        .eh-signup:hover { background: #e2a75a; }
        .eh-burger { display: none; width: 44px; height: 44px; align-items: center; justify-content: center; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; }
        .eh-burger span { width: 26px; height: 1.5px; background: #f2ecdf; transition: transform 0.3s ease, opacity 0.3s ease; }
        .eh-burger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .eh-burger.open span:nth-child(2) { opacity: 0; }
        .eh-burger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        .eh-sheet { position: fixed; inset: 0; z-index: 999; background: #1f261c; color: #f2ecdf; display: flex; flex-direction: column; justify-content: center; padding: 6rem 2rem 3rem; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
        .eh-sheet.open { opacity: 1; pointer-events: auto; }
        .eh-sheet-main { display: flex; flex-direction: column; gap: 0.35rem; }
        .eh-sheet-main a { font-family: var(--f-display); font-size: clamp(2.8rem, 12vw, 4rem); line-height: 1.05; color: #f2ecdf; text-decoration: none; }
        .eh-sheet-main a:hover, .eh-sheet-main a.active { font-style: italic; color: #e2a75a; }
        .eh-sheet-more { display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; margin-top: 2.5rem; }
        .eh-sheet-more a { font-family: var(--f-body); font-size: 1rem; color: rgba(242,236,223,0.7); text-decoration: none; }
        .eh-sheet-note { font-family: var(--f-hand); font-size: 1.6rem; color: #e2a75a; margin-top: 2.5rem; text-decoration: none; transform: rotate(-2deg); display: inline-block; }

        @media (max-width: 1024px) {
          .eh-nav { padding: 1rem 1.25rem; }
          .eh-nav.scrolled { padding-top: 0.7rem; padding-bottom: 0.7rem; }
          .eh-links { display: none; }
          .eh-burger { display: flex; }
          .eh-wordmark { font-size: 1.5rem; }
        }
      `}</style>

      <nav className={`eh-nav ${scrolled || open ? 'scrolled' : ''}`} aria-label="Main">
        <Link href="/" className="eh-wordmark" onClick={close}><span>Ethan</span> <em>Hoffman</em></Link>

        <div className="eh-links">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`eh-link ${pathname === l.href ? 'active' : ''}`}>{l.label}</Link>
          ))}
          <Link href="/mailing-list" className="eh-signup">sign up</Link>
        </div>

        <button type="button" className={`eh-burger ${open ? 'open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`eh-sheet ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="eh-sheet-main">
          <Link href="/" onClick={close} className={pathname === '/' ? 'active' : ''} tabIndex={open ? 0 : -1}>home</Link>
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className={pathname === l.href ? 'active' : ''} tabIndex={open ? 0 : -1}>{l.label}</Link>
          ))}
        </div>
        <div className="eh-sheet-more">
          {moreLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>{l.label}</Link>
          ))}
        </div>
        <Link href="/mailing-list" onClick={close} className="eh-sheet-note" tabIndex={open ? 0 : -1}>join the mailing list →</Link>
      </div>
    </>
  )
}
