'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { singles, ep, formatReleaseDate } from '../../lib/release'
import { useReleased } from '../../lib/useReleased'

const shortDate = (iso: string) => formatReleaseDate(iso).replace(/, \d{4}$/, '').toLowerCase()

// Hovering a song shows a photo from the session that floats with the cursor.
const tracks = [
  { name: singles[0].title, releaseDate: singles[0].releaseDate, img: '/images/malibu/studio-color.webp', secret: false },
  { name: singles[1].title, releaseDate: singles[1].releaseDate, img: '/images/malibu/oak-lying.webp', secret: false },
  { name: 'untitled', releaseDate: ep.releaseDate, img: '/images/malibu/studio-bw.webp', secret: true },
  { name: 'untitled', releaseDate: ep.releaseDate, img: '/images/malibu/fence-dusk.webp', secret: true },
]

function Row({ t, i, onEnter }: { t: (typeof tracks)[number]; i: number; onEnter: (i: number) => void }) {
  const out = useReleased(t.releaseDate)
  return (
    <li className={`ep-row ${t.secret ? 'is-secret' : ''}`} onMouseEnter={() => onEnter(i)}>
      <span className="ep-n">{String(i + 1).padStart(2, '0')}</span>
      <span className="ep-name">{t.name}</span>
      <span className="ep-date">{t.secret ? 'with the ep' : out ? 'out now' : shortDate(t.releaseDate)}</span>
    </li>
  )
}

export default function EpTracklist() {
  const box = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const move = (e: React.MouseEvent) => {
    const r = box.current?.getBoundingClientRect()
    if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <section className="ep" id="ep">
      <div className="fh-wrap ep-grid">
        <div className="ep-head">
          <p className="fh-label">{ep.title.toLowerCase()} · the ep · {formatReleaseDate(ep.releaseDate).toLowerCase()}</p>
          <h2 className="ep-title">Two you know.<br /><em>Two you don&apos;t yet.</em></h2>
          <ul className="ep-facts">
            <li><b>{ep.runtime.split(' ')[0]}</b> minutes, start to finish</li>
            <li><b>1</b> freestyled intro</li>
            <li><b>8</b> session videos</li>
          </ul>
        </div>
        <div className="ep-list" ref={box} onMouseMove={move} onMouseLeave={() => setActive(null)}>
          <ol>
            {tracks.map((t, i) => <Row key={i} t={t} i={i} onEnter={setActive} />)}
          </ol>
          <p className="ep-note">a few spoken words before every song</p>
          <div className={`ep-float ${active !== null ? 'on' : ''}`} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -60%)` }} aria-hidden="true">
            {tracks.map((t, i) => (
              <Image key={i} src={t.img} alt="" fill sizes="280px" style={{ objectFit: 'cover', opacity: active === i ? 1 : 0, filter: t.secret ? 'blur(10px) grayscale(0.6)' : undefined }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
