'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
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
const youtube = listenLinks.find((l) => l.label === 'YouTube')!

export default function HeroRelease() {
  const out = useReleased(featuredSingle.releaseDate)
  const day = formatReleaseDate(featuredSingle.releaseDate).replace(/, \d{4}$/, '').replace('November', 'nov.')

  return (
    <section className="hr nb-grain nb-dust">
      <div className="hr-photo">
        <Image src="/images/malibu/bench.webp" alt="Ethan Hoffman on a bench under an oak tree" fill priority sizes="(max-width: 1024px) 100vw, 58vw" style={{ objectFit: 'cover', objectPosition: 'center 62%' }} />
        <div className="hr-leak" />
      </div>
      <div className="hr-shade" />

      <div className="hr-lockup">
        <p className="hr-script">{out ? 'the new single' : 'the first single'}</p>
        <h1 className="hr-title">{featuredSingle.title}</h1>
        <p className="hr-when">{out ? <>out <span>now</span></> : <>out <span>{day} 1st</span></>}</p>
        {!out && <Countdown to={featuredSingle.releaseDate} />}
        <div className="hr-buttons">
          <a className="hr-btn" href={spotify.url} target="_blank" rel="noopener noreferrer">{out ? 'listen now' : 'follow on spotify'}</a>
          <a className="hr-btn" href={out ? youtube.url : '#notebook'} {...(out ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{out ? 'watch the session' : 'get notified'}</a>
        </div>
      </div>
    </section>
  )
}
