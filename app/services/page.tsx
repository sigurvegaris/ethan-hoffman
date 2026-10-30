import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LiveStrip from '../components/home/LiveStrip'
import { stats } from '../lib/stats'
import '../home.css'
import './services.css'

const email = 'booking@ethanhoffmanofficial.com'

// Book Live is one screen: who he plays for, how to book him, then the
// venues and what hosts say. Everything longer lives on About and Music.
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
        <LiveStrip />
      </main>
      <Footer />
    </>
  )
}
