'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { articles } from '../lib/press'
import { stats } from '../lib/stats'
import './about.css'

// Structure and copy follow the original site's About page (three tabs, the
// "artists people compare him to" ticker, press), with the Malibu photos, a
// short timeline and a "right now" update added. Mostly text by design.
const tabs = [
  {
    label: 'Meet Ethan',
    photo: { src: '/images/malibu/oak-walk.webp', alt: 'Ethan walking under a wide oak canopy', pos: 'center 40%' },
    body: [
      'Ethan Hoffman is a highly sought-after pop-soul vocalist who performs at destination events, luxury hotels, popular venues, high-end restaurants, and more. On stage, Ethan performs with a microphone and a radiant spirit, captivating audiences while backed by professional instrumentation that is meticulously mixed and mastered. Every performance features vocal arrangements that take hours of craftsmanship to perfect. He has a strong instinct for reading the room and pulling people into the moment, shaping a sophisticated atmosphere for every guest.',
      'His sound captures the soul-booming vocals of Stevie Wonder and the relaxed coastal vibe of Jason Mraz, offering a vocalist-heavy experience rooted in authentic connection. Ethan is an old soul brought up in a new generation; you can hear that audibly through the music, and it’s a quality that all audiences can appreciate.',
    ],
  },
  {
    label: 'Musical Journey',
    photo: { src: '/images/ethanhandshakingguy.webp', alt: 'Ethan with Morgan Jay backstage at the Wiltern', pos: 'center', caption: 'Ethan (right) with Morgan Jay backstage before a sold-out night at the Wiltern Theater.' },
    body: [
      'Ethan grew up in Palos Verdes, and the South Bay is still home. His vocal talent was recognized at the age of 12 when he auditioned for his first musical theater production and immediately landed a lead role. This early success led him to win the South Bay Teen Idol competition, though he remained unsure how his passion would materialize beyond adolescence.',
      'In 2021, Ethan was accepted into the Marshall School of Business at the University of Southern California. While pursuing his business degree, he formed a band and began writing music again as a source of pure enjoyment, never realizing the scale of what was to come.',
      'The pivotal moment arrived in 2023 while sitting in the front row of a show by famous comedian Morgan Jay. When Morgan sang the question, “What’s your name, bro?” Ethan sang his response back so well that it surprised both Morgan and the crowd. The impromptu encounter was captured on video and surpassed 5 million views in just three hours. It served as the nudge Ethan needed to pursue music full time.',
      'Since that night, both of their social media platforms have grown massively, most notably with Morgan now having over 5 million followers on Instagram and 10 million followers on TikTok. Ethan has been honored to open for Morgan at iconic sold-out venues including the Wiltern Theater, Magnolia Theater, and the Comedy Store, as well as internationally in Berlin while studying abroad.',
      'Following the momentum of these high-profile experiences, Ethan is now consistently booked throughout the South Bay and Los Angeles for professional cover sets ranging from one to four hours. He brings years of natural talent and charisma to every stage, synthesizing a background that spans from his roots in musical theater to his global performances with Morgan Jay.',
    ],
  },
  {
    label: 'Original Artistry',
    photo: { src: '/images/malibu/studio-color.webp', alt: 'Ethan recording with his guitar at Dragonfly Creek Studios', pos: '30% 50%' },
    body: [
      'Ethan performs at ticketed events where fans and listeners come to hear his originals in a high-vibe environment. His original songwriting is highly existential and contemplative, exploring themes of love, loss, impermanence, and longing. In addition to his traditional vocal performances, Ethan utilizes a looping station to build full arrangements live. By layering beatboxing, bass lines, and harmony stacks, he creates a complete band experience using only his voice. He’s performed at legendary venues such as the Lighthouse Cafe (famously featured in the film La La Land), The Mint, Project Barley Redondo Beach, Thompson Hotel, and more.',
      'Ethan is deeply committed to his craft, ensuring he brings 100% of his effort to every single performance. In an increasing digital age with shortened attention spans, people are yearning for ways to feel human again. Ethan’s music provides just that.',
    ],
  },
]

// Timeline. More childhood photos can slot in by setting `photo` on an entry.
const timeline: { when: string; text: string; photo?: { src: string; alt: string } }[] = [
  { when: '2009', text: 'Before the stage, there was the living room.', photo: { src: '/images/ethan-2009.webp', alt: 'Ethan as a young kid in 2009, mid-shout in the living room' } },
  { when: 'age 12', text: 'A flyer in a Starbucks window for Bring It On: The Musical. He showed up to the audition in a Carolina Panthers jersey and blue flip-flops, and landed Twig, the lead.' },
  { when: '12 to 14', text: 'Blue mohawk, golden shoes. Bring It On, 13 the Musical, Fame, Peter Pan, Grease. He won South Bay Teen Idol and started writing his own songs.' },
  { when: 'high school', text: 'A guitar class in his senior year at the Army and Navy Academy in Carlsbad. For the first time he could accompany himself.' },
  { when: 'usc', text: 'Two rock bands, his first originals and a business degree from the Marshall School, class of 2025.' },
  { when: '2023', text: '“What’s your name, bro?” The Morgan Jay clip passes 5 million views in three hours.' },
  { when: 'now', text: 'His debut EP, recorded live at Dragonfly Creek Studios in Malibu.' },
]

const comparisons = ['Billy Joel', 'Ed Sheeran', 'Frank Sinatra', 'Jack Johnson', 'John Mayer', 'Justin Timberlake', 'Marvin Gaye', 'Mac Ayres', 'Stevie Wonder']

const morePress = [
  { outlet: 'Canvas Rebel', title: 'Meet Ethan Hoffman', url: 'https://canvasrebel.com/meet-ethan-hoffman/' },
  { outlet: 'Gut Instinct Media', title: 'Unveiling the Soul of Ethan Hoffman: Beyond the Viral Fame', url: 'https://medium.com/@gutinstinctmedia/unveiling-the-soul-of-ethan-hoffman-beyond-the-viral-fame-a6ab70904fb3' },
  { outlet: 'Voyage LA', title: 'Daily Inspiration: Meet Ethan Hoffman', url: 'https://voyagela.com/interview/daily-inspiration-meet-ethan-hoffman' },
]

export default function About() {
  const [tab, setTab] = useState(0)
  const t = tabs[tab]
  const press = [
    ...articles.filter((a) => a.url).map((a) => ({ outlet: a.outlet ?? a.author, title: a.title, url: a.url! })),
    ...morePress,
  ]

  return (
    <>
      <Navbar />
      <main className="ab">
        <header className="ab-hero ab-wrap">
          <p className="ab-label">about ethan</p>
          <h1 className="ab-title">Soul. Stage. Stories. Sound. <em>Live.</em></h1>
        </header>

        <section className="ab-wrap ab-tabs-wrap">
          <div className="ab-tabs" role="tablist">
            {tabs.map((x, i) => (
              <button key={x.label} type="button" role="tab" aria-selected={i === tab} className={`ab-tab${i === tab ? ' on' : ''}`} onClick={() => setTab(i)}>
                {x.label}
              </button>
            ))}
          </div>
          <div className="ab-panel" key={tab}>
            <figure className="ab-photo">
              <div className="ab-ph">
                <Image src={t.photo.src} alt={t.photo.alt} fill sizes="(max-width: 900px) 100vw, 40vw" priority={tab === 0} style={{ objectFit: 'cover', objectPosition: t.photo.pos }} />
              </div>
              {'caption' in t.photo && <figcaption>{t.photo.caption}</figcaption>}
            </figure>
            <div className="ab-copy">
              {t.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className="ab-wrap ab-timeline" aria-labelledby="ab-tl">
          <p className="ab-label" id="ab-tl">how he got here</p>
          <ol>
            {timeline.map((x) => (
              <li key={x.when} className={x.photo ? 'has-photo' : ''}>
                <span className="ab-when">{x.when}</span>
                <p>{x.text}</p>
                {x.photo && (
                  <div className="ab-tl-ph">
                    <Image src={x.photo.src} alt={x.photo.alt} fill sizes="200px" style={{ objectFit: 'cover' }} />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="ab-now" aria-labelledby="ab-now-label">
          <div className="ab-wrap">
            <p className="ab-label" id="ab-now-label">right now</p>
            <div className="ab-now-grid">
              <div className="ab-now-copy">
                <h2>Where Ethan is <em>today</em></h2>
                <ul>
                  <li><b>His debut EP.</b> Recorded live over two nights in Malibu, arriving song by song before the full release on January 1.</li>
                  <li><b>India is out.</b> The first single, with its video on the way.</li>
                  <li><b>Writing for other artists.</b> Alongside his own record, he is writing songs for other performers.</li>
                  <li><b>Active on social media.</b> Covers, originals and loop-pedal sessions across Instagram, TikTok and YouTube.</li>
                </ul>
              </div>
              <div className="ab-now-stats">
                {stats.filter((s) => s.label !== 'events performed').map((s) => (
                  <div key={s.label}><b>{s.n}</b><span>{s.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ab-compare" aria-label="Artists people compare him to">
          <p className="ab-label ab-wrap">artists people compare him to</p>
          <div className="ab-ticker">
            <div className="ab-ticker-track">
              {[...comparisons, ...comparisons].map((n, i) => <span key={i}>{n}<i aria-hidden="true">✦</i></span>)}
            </div>
          </div>
        </section>

        <section className="ab-wrap ab-press" aria-labelledby="ab-press-label">
          <p className="ab-label" id="ab-press-label">press</p>
          <ul className="ab-press-list">
            {press.map((p) => (
              <li key={p.url}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <span className="ab-press-outlet">{p.outlet}</span>
                  <span className="ab-press-title">{p.title}</span>
                  <span className="ab-press-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="ab-cta">
            <Link href="/music" className="ab-btn">hear the new music</Link>
            <Link href="/services" className="ab-btn ab-btn-ghost">book him live</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
