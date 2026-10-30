import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { stats } from '../lib/stats'
import { testimonials } from '../lib/testimonials'
import './services.css'

const email = 'booking@ethanhoffmanofficial.com'

// Book Live is short: who he plays for and how to book him, then what a
// night with him looks like and one host in their own words. The home page
// already carries the logo strip and quick quotes, so this page doesn't.
const night = [
  { when: 'as guests arrive', text: 'Warm, easy covers that let people talk, shaped to the room and the crowd.' },
  { when: 'through dinner', text: 'Requests, birthdays, first dances. He reads the table and builds the set around it.' },
  { when: 'the last hour', text: 'Loops, beatbox and the songs everyone knows, until the floor is full.' },
]
const featured = testimonials.find((t) => t.name === 'Ruben Barajas') ?? testimonials[0]
export default function Services() {
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
            <p className="sv-sub">Weddings, private parties and corporate events. Pop-soul vocals with his own sound system, sets from one to four hours.</p>
            <div className="sv-hero-actions">
              <Link href="/contact" className="sv-cta">book ethan</Link>
              <a href={`mailto:${email}`} className="sv-cta sv-cta-ghost sv-email">{email}</a>
            </div>
            <ul className="sv-facts">{stats.map((s) => <li key={s.label}><b>{s.n}</b> {s.label}</li>)}</ul>
          </div>
        </header>
        <section className="sv-night">
          <div className="sv-wrap">
            <p className="sv-label">a night with ethan</p>
            <ol className="sv-steps">
              {night.map((n, i) => (
                <li key={n.when}>
                  <span className="sv-step-n">{String(i + 1).padStart(2, '0')}</span>
                  <h2>{n.when}</h2>
                  <p>{n.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sv-word">
          <div className="sv-wrap">
            <blockquote>&ldquo;{featured.quote}&rdquo;</blockquote>
            <p className="sv-word-by"><b>{featured.name}</b> · {featured.role}</p>
            <div className="sv-word-links">
              <Link href="/testimonials">more reviews →</Link>
              <Link href="/venues">every venue he&apos;s played →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
