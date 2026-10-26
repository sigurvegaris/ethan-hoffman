'use client'
import Image from 'next/image'
import { singles, listenLinks } from '../lib/release'
import { useReleased } from '../lib/useReleased'
import './story.css'

const spotify = listenLinks.find((l) => l.label === 'Spotify')!

// Ethan's own words on why India is the first song out. Kept verbatim; only
// the closing line changes once the single is out.
export default function IndiaStory() {
  const out = useReleased(singles[0].releaseDate)
  return (
    <section className="st" id="india-story" aria-labelledby="st-title">
      <figure className="st-photo">
        <Image src="/images/malibu/path-walk.webp" alt="Ethan walking away down a dirt path" fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <figcaption>the story behind india</figcaption>
      </figure>

      <div className="st-text">
        <h2 id="st-title" className="st-pull">I think we&apos;re all <em>searching.</em></h2>

        <p>
          When I was a sophomore in college, I was going through a period of deep self-reflection and questioning
          how I had been living my whole life. I was very fortunate to grow up in California, but at the same time,
          it was an environment that, at least for me, encouraged complacency and discouraged self-inquiry.
        </p>
        <p>
          It was around this time that I started to explore various cultures and schools of thought that were all
          searching for the answers to life. I found myself interacting with many people from India while I was at
          USC, along with exploring spiritual books from India and the traditions and philosophies they reflected.
        </p>
        <p className="st-big">
          Many of us are searching for a place to relocate to, a belief system to devote ourselves to, or a person
          to commit to.
        </p>
        <p>
          I wanted to make a song that captures all of that in its own way. Not because another country is free of
          hardship, but because, at that point in my life, I was imagining what it would mean to leave California
          behind and live a different life.
        </p>
        <p className="st-close">
          {out ? <>This is &ldquo;India.&rdquo;</> : <>This is &ldquo;India,&rdquo; and it comes out on all platforms on November 1st.</>}
        </p>
        <p className="st-sign">— ethan</p>
        {out && <a className="mu-btn" href={spotify.url} target="_blank" rel="noopener noreferrer">listen now</a>}
      </div>
    </section>
  )
}
