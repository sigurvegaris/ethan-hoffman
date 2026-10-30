import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VenueGrid from '../components/VenueGrid'
import VideoEmbed from '../components/VideoEmbed'
import { stats } from '../lib/stats'
import { testimonials } from '../lib/testimonials'
import { liveVideos } from '../lib/videos'
import './services.css'

const email = 'booking@ethanhoffmanofficial.com'

// Why book him, in four lines. Drawn from the original site's copy.
const reasons = [
  { title: 'He reads the room', text: 'Every set is shaped to the venue and the crowd in the moment, from dinner background to a full dance floor.' },
  { title: 'A full band from one voice', text: 'Live vocals over professionally mixed backing, plus a looping station for beatbox, bass lines and harmonies.' },
  { title: 'Eight hours of songs', text: 'Stevie Wonder to Bill Withers to today’s hits, so one artist carries the whole night.', link: { href: '/repertoire', label: 'see the song list →' } },
  { title: 'Easy to book', text: 'Prompt and professional, with his own sound system and sets from one to four hours.' },
]

const occasions = ['Weddings', 'Private events', 'Corporate events', 'Fundraisers & galas']

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

// Book Live, kept short: the pitch, the proof, one video and how to reach
// him. A "book ethan" bar stays on screen on phones.
export default function Services() {
  const featured = liveVideos[0]
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
            <p className="sv-sub">Pop-soul vocals and a full professional sound for {occasions.map((o) => o.toLowerCase()).slice(0, 3).join(', ')} across Southern California.</p>
            <div className="sv-hero-actions">
              <Link href="/contact" className="sv-cta">book ethan</Link>
              <a href="#live" className="sv-cta sv-cta-ghost">watch him live</a>
            </div>
          </div>
        </header>

        <section className="sv-proof">
          <div className="sv-wrap">
            <div className="sv-stats">
              {stats.map((x) => <div key={x.label}><b>{x.n}</b><span>{x.label}</span></div>)}
            </div>
            <p className="sv-label">past clients &amp; venues include</p>
            <VenueGrid />
          </div>
        </section>

        <section className="sv-why">
          <div className="sv-wrap sv-why-grid">
            <div className="sv-why-photo">
              <Image src="/images/ethansingingorange.webp" alt="Ethan Hoffman singing" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <p className="sv-label">why book ethan</p>
              <h2 className="sv-h2">A vocalist who plays rooms, <em>not just songs.</em></h2>
              <ul className="sv-reasons">
                {reasons.map((r) => (
                  <li key={r.title}>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    {r.link && <Link href={r.link.href}>{r.link.label}</Link>}
                  </li>
                ))}
              </ul>
              <p className="sv-occasions">{occasions.join(' · ')}</p>
            </div>
          </div>
        </section>

        <section className="sv-testimonials">
          <div className="sv-wrap">
            <p className="sv-label">testimonials</p>
            <h2 className="sv-h2">What hosts say</h2>
          </div>
          <TestimonialReel />
        </section>

        <section className="sv-live" id="live">
          <div className="sv-wrap sv-live-grid">
            <VideoEmbed id={featured.id} label={featured.label} priority />
            <div>
              <p className="sv-label">live performance</p>
              <h2 className="sv-h2">See him <em>in the room</em></h2>
              <p className="sv-live-copy">Covers with a pop-soul spin, built live with loops and beatbox.</p>
              <Link href="/music" className="sv-more">more performances →</Link>
            </div>
          </div>
        </section>

        <section className="sv-contact" id="book">
          <div className="sv-wrap sv-contact-box">
            <p className="sv-label">book ethan</p>
            <h2 className="sv-h2">Check his <em>availability</em></h2>
            <p>Now booking 2026 events. Send the date, venue and kind of event, and Ethan will get back to you.</p>
            <div className="sv-hero-actions sv-contact-actions">
              <Link href="/contact" className="sv-cta">send a booking request</Link>
              <a href={`mailto:${email}`} className="sv-cta sv-cta-ghost">{email}</a>
            </div>
          </div>
        </section>
      </main>
      <Link href="/contact" className="sv-sticky">book ethan</Link>
      <Footer />
    </>
  )
}
