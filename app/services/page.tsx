'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
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

const venues = ['The Wiltern', 'Magnolia Theater', 'The Hollywood Improv', 'The Lighthouse Café', 'Shade Hotel', 'Strand House', 'The Mint', 'Thompson Hotel']

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
            <p className="sv-label">book live</p>
            <h1 className="sv-title">Live music that <em>reads the room.</em></h1>
            <p className="sv-hand">voice, guitar, loops and beatbox. one person, a whole band&apos;s worth.</p>
            <div className="sv-stats">
              <div><b>300+</b><span>events played</span></div>
              <div><b>1 to 4</b><span>hour sets</span></div>
              <div><b>LA</b><span>&amp; the south bay</span></div>
            </div>
          </div>
        </header>

        <section className="sv-body">
          <div className="sv-wrap">
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

        <section className="sv-venues">
          <div className="sv-wrap">
            <p className="sv-label">rooms he&apos;s played</p>
            <p className="sv-venue-list">{venues.map((v) => <span key={v}>{v}</span>)}</p>
            <div className="sv-links">
              <Link href="/repertoire">see the song list →</Link>
              <Link href="/venues">all past venues →</Link>
              <Link href="/testimonials">what hosts say →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
