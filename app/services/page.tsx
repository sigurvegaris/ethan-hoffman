'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import VenueGrid from '../components/VenueGrid'
import VideoEmbed from '../components/VideoEmbed'
import { stats } from '../lib/stats'
import { testimonials } from '../lib/testimonials'
import { liveVideos } from '../lib/videos'
import { genreRepertoire } from '../lib/repertoire'
import './services.css'

const services = [
  {
    id: 'weddings',
    label: 'Weddings',
    headline: 'The Soundtrack to Your Most Important Day',
    description: `Your wedding deserves music that feels as personal as the moment itself. Ethan brings a warm, soulful energy to every part of your celebration, from the ceremony to the last dance. He works closely with each couple to understand the vibe, the story, and the songs that matter most, then delivers a performance that feels completely tailored to you.`,
    details: [
      'Wedding ceremonies and processionals',
      'Cocktail hour and reception',
      'Custom song arrangements',
      'Background and interactive sets',
      'Full sound system included',
    ],
    photo: '/images/ethanwearinggreen.webp',
    objectPosition: 'center bottom',
  },
  {
    id: 'private',
    label: 'Private Events',
    headline: 'Elevate Your Private Event with Live Music',
    description: `Whether it's an intimate dinner party, a milestone birthday, or an upscale celebration, Ethan is highly skilled at reading a room and shaping the musical flow to fit the moment perfectly. With an extensive repertoire of well-known cover songs and the ability to create custom pieces on the spot, every performance feels fresh and connected to the occasion.`,
    details: [
      'Birthday and anniversary parties',
      'Holiday and seasonal events',
      'Dinner parties and galas',
      'Exclusive and high-end private events',
      'Flexible set lengths and styles',
    ],
    photo: '/images/ethanblackandwhite.webp',
    objectPosition: 'center top',
  },
  {
    id: 'corporate',
    label: 'Corporate Events',
    headline: 'Professional Entertainment That Leaves an Impression',
    description: `Ethan has performed for major brands, fundraisers, and corporate functions across Los Angeles. He brings professionalism, polish, and a crowd-connecting energy that transforms a standard corporate event into something people actually talk about afterward.`,
    details: [
      'Corporate functions and galas',
      'Brand activations and launches',
      'Fundraisers and charity events',
      'University and institutional events',
      'Networking and cocktail receptions',
    ],
    photo: '/images/ethanpinkbackground.webp',
    objectPosition: 'center top',
  },
  {
    id: 'originals',
    label: 'Original Music',
    headline: 'Music Written From Real Life',
    description: `Beyond covers and events, Ethan is a recording artist with original music on Spotify and all major streaming platforms. His songs pull from real experiences: California living, chasing stages across the world, the tension between dreaming big and staying grounded.`,
    details: [
      'Original singles on Spotify and Apple Music',
      'Songwriter and co-writing sessions',
      'Sync and licensing opportunities',
      '70s and 80s inspired soul sound',
      'Live original music sets',
    ],
    photo: '/images/ethanwithcrowd.webp',
    objectPosition: 'center top',
  },
]


// Testimonials glide past quickly; hovering (or touching) pauses them.
function TestimonialReel() {
  const reel = [...testimonials, ...testimonials]
  return (
    <div className="sv-reel" aria-label="Testimonials">
      <div className="sv-reel-track">
        {reel.map((t, i) => (
          <figure key={i} className="sv-quote" aria-hidden={i >= testimonials.length}>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption><b>{t.name}</b>{t.role}{t.venue ? ` · ${t.venue}` : ''}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function Repertoire() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="sv-rep">
      {genreRepertoire.map((g, i) => (
        <div key={g.genre} className={`sv-rep-g${open === i ? ' is-open' : ''}`}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <span>{g.genre}</span><em>{g.songs.length} songs</em><i aria-hidden="true">+</i>
          </button>
          <div className="sv-rep-list">
            <ul>{g.songs.map((x) => <li key={x.song + x.artist}>{x.song} <span>{x.artist}</span></li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  )
}

// Book Live mirrors the original site's homepage: headline and stats, past
// clients, who Ethan is, the four kinds of events, testimonials, "a sound
// you can count on", live videos and the song list.
export default function Services() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <>
      <Navbar />
      <main className="sv">
        <header className="sv-hero">
          <div className="sv-hero-photo">
            <Image src="/images/ethanwithcrowd.webp" alt="Ethan performing for a crowd" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          </div>
          <div className="sv-wrap sv-hero-copy">
            <p className="sv-label">los angeles · live music</p>
            <h1 className="sv-title">Ethan Hoffman&apos;s Soulful Live Music for <em>Private and Corporate Events</em></h1>
            <div className="sv-hero-actions">
              <Link href="/contact" className="sv-cta">book ethan</Link>
              <a href="#live" className="sv-cta sv-cta-ghost">watch live</a>
            </div>
          </div>
        </header>

        <section className="sv-stats-row">
          <div className="sv-wrap sv-stats">
            {stats.map((x) => <div key={x.label}><b>{x.n}</b><span>{x.label}</span></div>)}
          </div>
        </section>

        <section className="sv-clients">
          <div className="sv-wrap">
            <p className="sv-label">past clients &amp; venues include</p>
            <VenueGrid />
          </div>
        </section>

        <section className="sv-who">
          <div className="sv-wrap sv-who-grid">
            <div className="sv-who-photo">
              <Image src="/images/ethansingingorange.webp" alt="Ethan Hoffman singing" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="sv-who-copy">
              <p className="sv-label">who is ethan?</p>
              <h2>A vocalist who plays rooms, <em>not just songs.</em></h2>
              <p>It all started with a musical theater audition at 12 years old. Ethan&apos;s performance that day revealed a massive musical potential he was only beginning to recognize. It wasn&apos;t until he was performing at a university festival, 2,000-plus capacity theaters, and singing in a video that hit 140 million views before he really knew what others meant.</p>
              <p>Ethan has played over 300 gigs across Los Angeles and beyond at luxury hotels, private estates, hospital galas, corporate events, restaurant residencies, and opening at landmark venues like the Wiltern and Magnolia Theater. Whether he&apos;s putting a Pop-Soul spin on Stevie Wonder&apos;s &ldquo;Superstition&rdquo; or Bill Withers&apos; &ldquo;Lovely Day,&rdquo; audiences leave wanting more of a sound that feels brand new yet completely timeless, and curious to know the person behind the performance.</p>
              <Link href="/about" className="sv-more">meet ethan →</Link>
            </div>
          </div>
        </section>

        <section className="sv-body">
          <div className="sv-wrap">
            <p className="sv-label">the perfect vibe for every occasion</p>
            <div className="sv-tabs" role="tablist">
              {services.map((x, i) => (
                <button key={x.id} type="button" role="tab" aria-selected={i === active} className={`sv-tab ${i === active ? 'on' : ''}`} onClick={() => setActive(i)}>
                  {x.label.toLowerCase()}
                </button>
              ))}
            </div>

            <div className="sv-panel">
              <div className="sv-copy" key={s.id}>
                <h2>{s.headline}</h2>
                <p>{s.description}</p>
                <ul>{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
                <Link href="/contact" className="sv-btn">book ethan</Link>
              </div>
              <div className="sv-photo">
                {services.map((x, i) => (
                  <Image key={x.id} src={x.photo} alt={x.label} fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: x.objectPosition, opacity: i === active ? 1 : 0, transition: 'opacity 0.4s ease' }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sv-testimonials">
          <div className="sv-wrap">
            <p className="sv-label">testimonials</p>
            <h2 className="sv-h2">What people are saying</h2>
          </div>
          <TestimonialReel />
          <div className="sv-wrap"><Link href="/testimonials" className="sv-more">read more reviews →</Link></div>
        </section>

        <section className="sv-sound">
          <div className="sv-sound-grid">
            <div className="sv-sound-copy">
              <p className="sv-label">what do you say?</p>
              <h2 className="sv-h2">A Sound You Can <em>Count On</em></h2>
              <p>Ethan&apos;s voice carries the acoustic textures of Jason Mraz, the prolific storytelling of John Lennon, and the timeless warmth and soul of Bill Withers, blending into an entirely original artistry. This versatile mix of genres is reliable and appreciated across all demographics.</p>
              <p>Each set is curated to the venue, the audience, and whatever the moment calls for. The entire performance is shaped to hold attention from start to finish.</p>
              <p>Ethan is currently taking on new clients in 2026. To connect with him about your event and discuss availability, please click below.</p>
              <Link href="/contact" className="sv-cta">let&apos;s connect</Link>
            </div>
            <div className="sv-sound-photo">
              <Image src="/images/ethanincar.webp" alt="Ethan Hoffman" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section className="sv-live" id="live">
          <div className="sv-wrap">
            <p className="sv-label">live performances</p>
            <h2 className="sv-h2">See him in the room</h2>
            <div className="sv-videos">
              {liveVideos.map((v, i) => <VideoEmbed key={v.id} id={v.id} label={v.label} priority={i === 0} />)}
            </div>
          </div>
        </section>

        <section className="sv-songs" id="repertoire">
          <div className="sv-wrap">
            <p className="sv-label">repertoire</p>
            <h2 className="sv-h2">The song list</h2>
            <p className="sv-songs-sub">Eight hours of covers across every era. Tap a genre to open it, or <Link href="/repertoire">see the full list →</Link></p>
            <Repertoire />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
