'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { featuredSingle, listenLinks, heroClip } from '../../lib/release'
import { useReleased } from '../../lib/useReleased'
import { socialLinks } from '../../lib/social'

const spotify = listenLinks.find((l) => l.label === 'Spotify')!

export default function HeroRelease() {
  const out = useReleased(featuredSingle.releaseDate)
  // India easter egg: dither between the two buttons long enough and the
  // song answers. "I've dealt with indecision too many times to count."
  const [dither, setDither] = useState({ last: -1, n: 0 })
  const hover = (i: number) => () => setDither((d) => (d.last === i ? d : { last: i, n: d.n + 1 }))

  return (
    <section className="hr">
      <div className="hr-photo">
        <Image src="/images/malibu/oak-walk.webp" alt="Ethan Hoffman walking down a path under the oak trees" fill priority quality={90} sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 72%' }} />
      </div>
      {heroClip && (
        <video className="hr-clip" autoPlay muted loop playsInline preload="auto" poster="/video/india-hero-poster.jpg" aria-hidden="true">
          <source src={heroClip} type="video/mp4" />
          <source src={heroClip.replace('.mp4', '.webm')} type="video/webm" />
        </video>
      )}
      <div className="hr-haze" aria-hidden="true" />

      <div className="hr-lockup">
        <p className="hr-kicker">{out ? 'The new single · Out now' : 'The first single · Coming soon'}</p>
        <h1 className="hr-title">{featuredSingle.title}</h1>
        <div className="hr-row">
          <div className="hr-buttons">
            <a className="hr-btn" onPointerEnter={hover(0)} href={spotify.url} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
            <Link className="hr-btn" onPointerEnter={hover(1)} href="/contact">Book Ethan</Link>
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
