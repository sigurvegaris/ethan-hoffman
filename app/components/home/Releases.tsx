'use client'
import Image from 'next/image'
import { singles, ep, listenLinks, formatReleaseDate } from '../../lib/release'
import { useReleased } from '../../lib/useReleased'

// Placeholder covers built from the Malibu photos until the real single and EP
// art is ready. Swap `cover` for the finished artwork when it lands.
const covers: Record<string, { src: string; pos: string; mono?: boolean }> = {
  India: { src: '/images/india-cover.webp', pos: 'center' },
  Carefree: { src: '/images/malibu/oak-lying.webp', pos: 'center 60%' },
  EP: { src: '/images/malibu/plaid-smile.webp', pos: 'center 45%', mono: true },
}

const spotify = listenLinks.find((l) => l.label === 'Spotify')!

type Rel = { key: string; title: string; kind: string; releaseDate: string; disc: string }

function Sleeve({ r }: { r: Rel }) {
  const out = useReleased(r.releaseDate)
  const cover = covers[r.key]
  return (
    <article className="rl-item">
      <div className="rl-art">
        <div className="rl-disc" style={{ ['--label' as string]: r.disc }}><span /></div>
        <div className="rl-sleeve">
          <Image src={cover.src} alt="" fill sizes="(max-width: 768px) 80vw, 340px" style={{ objectFit: 'cover', objectPosition: cover.pos, filter: cover.mono ? 'grayscale(1) contrast(1.08)' : undefined }} />
          <span className="rl-sleeve-title">{r.title}</span>
        </div>
      </div>
      <p className="rl-name">{r.title} · {r.kind}</p>
      <p className="rl-date">{out ? 'Out now' : formatReleaseDate(r.releaseDate)}</p>
      {out && <a className="rl-listen" href={spotify.url} target="_blank" rel="noopener noreferrer">Listen →</a>}
    </article>
  )
}

export default function Releases() {
  const items: Rel[] = [
    { key: 'India', title: singles[0].title, kind: 'Single', releaseDate: singles[0].releaseDate, disc: '#c4622d' },
    { key: 'Carefree', title: singles[1].title, kind: 'Single', releaseDate: singles[1].releaseDate, disc: '#e2a75a' },
    { key: 'EP', title: ep.title, kind: 'The EP', releaseDate: ep.releaseDate, disc: '#f2ecdf' },
  ]
  return (
    <section className="rl" id="music">
      <div className="fh-wrap">
        <div className="rl-head">
          <h2 className="rl-heading">Music</h2>
          <p className="fh-label rl-sub">One song a month, then the whole thing</p>
        </div>
        <div className="rl-grid">
          {items.map((r) => <Sleeve key={r.key} r={r} />)}
        </div>
      </div>
    </section>
  )
}
