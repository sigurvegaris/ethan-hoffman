'use client'
import { useSyncExternalStore } from 'react'
import Link from 'next/link'
import { featuredSingle, listenLinks, isReleased, formatReleaseDate } from '../lib/release'

// Flips from "Coming" to "Out Now" on release day. The check runs after mount so
// the statically built page never disagrees with the visitor's clock.
// Add ?release=out (or ?release=soon) to any URL to preview either state.
const noopSubscribe = () => () => {}

export function useReleased(isoDate: string) {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      const override = new URLSearchParams(window.location.search).get('release')
      return override === 'out' ? true : override === 'soon' ? false : isReleased(isoDate)
    },
    () => false,
  )
}

export default function ReleaseBanner() {
  const released = useReleased(featuredSingle.releaseDate)
  const dateLabel = formatReleaseDate(featuredSingle.releaseDate).replace(/, \d{4}$/, '')

  return (
    <section id="new-music" className="release-banner">
      <style>{`
        .release-banner { background: #c4622d; color: #fdfaf5; padding: 3rem 0; }
        .release-inner { width: min(1200px, calc(100% - 3rem)); margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 400px); gap: 3rem; align-items: center; }
        .release-eyebrow { font-family: Inter, sans-serif; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(253,250,245,0.75); margin: 0 0 0.6rem; }
        .release-title { font-family: 'Playfair Display', serif; font-size: clamp(2.1rem, 4.6vw, 3.6rem); font-weight: 700; line-height: 1; letter-spacing: -0.02em; margin: 0; }
        .release-title em { font-weight: 400; white-space: nowrap; }
        .release-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(1rem, 2.5vw, 1.25rem); color: rgba(253,250,245,0.85); margin: 0.75rem 0 0; }
        .release-links { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: flex-end; max-width: 420px; }
        .release-link { font-family: Inter, sans-serif; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #fdfaf5; text-decoration: none; padding: 0.75rem 1.1rem; border: 1px solid rgba(253,250,245,0.5); transition: background 0.2s ease, color 0.2s ease; }
        .release-link:hover { background: #fdfaf5; color: #c4622d; }
        .release-link.solid { background: #1a1814; border-color: #1a1814; }
        .release-link.solid:hover { background: #fdfaf5; color: #1a1814; border-color: #fdfaf5; }
        @media (max-width: 768px) {
          .release-banner { padding: 2.5rem 0; }
          .release-inner { grid-template-columns: 1fr; width: calc(100% - 2.5rem); gap: 1.5rem; }
          .release-links { justify-content: flex-start; max-width: none; }
          .release-link { flex: 1 1 calc(50% - 0.6rem); text-align: center; }
        }
      `}</style>
      <div className="release-inner">
        <div>
          <p className="release-eyebrow">{released ? 'New Single' : 'New Single · From the Debut EP'}</p>
          <h2 className="release-title">
            {featuredSingle.title} <em>{released ? '— Out Now' : `— Coming ${dateLabel}`}</em>
          </h2>
          <p className="release-sub">
            {released
              ? 'Stream it everywhere and watch the full session video.'
              : 'The first song from Ethan’s self-titled EP, with the full session video on Instagram and YouTube.'}
          </p>
        </div>
        <div className="release-links">
          {listenLinks.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="release-link">
              {released ? l.label : `Follow on ${l.label}`}
            </a>
          ))}
          <Link href="/merch" className="release-link solid">Merch</Link>
        </div>
      </div>
    </section>
  )
}
