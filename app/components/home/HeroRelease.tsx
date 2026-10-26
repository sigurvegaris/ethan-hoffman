'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { featuredSingle, listenLinks, formatReleaseDate } from '../../lib/release'
import { useReleased } from '../../lib/useReleased'
import { socialLinks } from '../../lib/social'

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
    { unit: 'hrs', value: left === null ? null : Math.floor(left / 3600000) % 24 },
    { unit: 'min', value: left === null ? null : Math.floor(left / 60000) % 60 },
    { unit: 'sec', value: left === null ? null : Math.floor(left / 1000) % 60 },
  ]
  return (
    <div className="hr-count" aria-label={`Countdown to ${formatReleaseDate(to)}`}>
      {cells.map((c) => (
        <span key={c.unit}><b>{c.value === null ? '--' : String(c.value).padStart(2, '0')}</b>{c.unit}</span>
      ))}
    </div>
  )
}

const spotify = listenLinks.find((l) => l.label === 'Spotify')!

export default function HeroRelease() {
  const out = useReleased(featuredSingle.releaseDate)
  // India easter egg: dither between the two buttons long enough and the
  // song answers. "I've dealt with indecision too many times to count."
  const [dither, setDither] = useState({ last: -1, n: 0 })
  const hover = (i: number) => () => setDither((d) => (d.last === i ? d : { last: i, n: d.n + 1 }))
  const day = formatReleaseDate(featuredSingle.releaseDate).replace(/, \d{4}$/, '').toLowerCase().replace('november', 'nov.')

  return (
    <section className="hr">
      <div className="hr-photo">
        <Image src="/images/malibu/oak-walk.webp" alt="Ethan Hoffman walking down a path under the oak trees" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 72%' }} />
      </div>
      <div className="hr-haze" aria-hidden="true" />

      <div className="hr-lockup">
        <p className="hr-kicker">{out ? 'the new single · out now' : `the first single · out ${day}`}</p>
        <h1 className="hr-title">{featuredSingle.title}</h1>
        <div className="hr-row">
          {!out && <Countdown to={featuredSingle.releaseDate} />}
          <div className="hr-buttons">
            <a className="hr-btn" onPointerEnter={hover(0)} href={spotify.url} target="_blank" rel="noopener noreferrer">listen on spotify</a>
            <Link className="hr-btn" onPointerEnter={hover(1)} href="/contact">book ethan</Link>
            <p className={`hr-indecision${dither.n >= 7 ? ' is-on' : ''}`} aria-hidden="true">too many times to count</p>
          </div>
          <div className="hr-social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} dangerouslySetInnerHTML={{ __html: s.icon }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
