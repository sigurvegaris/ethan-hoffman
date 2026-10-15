'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { featuredSingle, listenLinks, formatReleaseDate } from '../../lib/release'
import { useReleased } from '../../lib/useReleased'

function useNow() {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    const tick = () => setNow(Date.now())
    const first = setTimeout(tick, 0)
    const id = setInterval(tick, 1000)
    return () => { clearTimeout(first); clearInterval(id) }
  }, [])
  return now
}

function Countdown({ to }: { to: string }) {
  const now = useNow()
  const left = now === null ? null : Math.max(0, new Date(to).getTime() - now)
  const cells = [
    { unit: 'days', value: left === null ? null : Math.floor(left / 86400000) },
    { unit: 'hours', value: left === null ? null : Math.floor(left / 3600000) % 24 },
    { unit: 'min', value: left === null ? null : Math.floor(left / 60000) % 60 },
    { unit: 'sec', value: left === null ? null : Math.floor(left / 1000) % 60 },
  ]
  return (
    <div className="nb-count" aria-label={`Countdown to ${formatReleaseDate(to)}`}>
      {cells.map((c) => (
        <div key={c.unit} className="nb-count-cell">
          <div className="nb-count-num">{c.value === null ? '--' : String(c.value).padStart(2, '0')}</div>
          <div className="nb-count-unit">{c.unit}</div>
        </div>
      ))}
    </div>
  )
}

export default function IndiaChapter() {
  const out = useReleased(featuredSingle.releaseDate)
  const date = formatReleaseDate(featuredSingle.releaseDate).replace(/, \d{4}$/, '')

  return (
    <section id="india" className="nb-india">
      <div className="nb-wrap nb-india-grid">
        <figure className="nb-polaroid nb-tape nb-india-photo" style={{ margin: 0 }}>
          <Image src="/images/malibu/studio-color.webp" alt="Ethan recording India in the Malibu studio" width={2000} height={1331} sizes="(max-width: 1024px) 90vw, 520px" />
          <figcaption>night one, malibu</figcaption>
        </figure>

        <div>
          <p className="nb-label nb-chapter">Chapter one · the first single</p>
          <h2 className="nb-big"><em>{featuredSingle.title}</em></h2>
          {out ? (
            <p className="nb-out">out now ♡</p>
          ) : (
            <Countdown to={featuredSingle.releaseDate} />
          )}
          <p className="nb-lede">
            {out
              ? 'The first song from the self-titled EP is here, with the full session video filmed live in Malibu.'
              : `The first song from Ethan’s self-titled EP arrives ${date}, with the full session video on Instagram and YouTube.`}
          </p>
          <div className="nb-links">
            {listenLinks.map((l) => (
              <a key={l.label} className="nb-link" href={l.url} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
            ))}
            <Link className="nb-link nb-link-merch" href="/merch">merch →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
