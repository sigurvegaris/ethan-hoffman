import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Press from './components/Press'
import HeroRelease from './components/home/HeroRelease'
import Statement from './components/home/Statement'
import Releases from './components/home/Releases'
import EpTracklist from './components/home/EpTracklist'
import Sessions from './components/home/Sessions'
import FanNotebook from './components/home/FanNotebook'
import Collage from './components/home/Collage'
import BirthdayNudge from './components/home/BirthdayNudge'
import Parallax from './components/home/Parallax'
import './home.css'

const venueLogos = [
  { name: 'The Wiltern', file: 'thewilternlogo.png' },
  { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png' },
  { name: 'Marriott', file: 'marriotlogo.png' },
  { name: 'The Shade Hotel', file: 'shadelogo.png' },
  { name: 'The Magnolia', file: 'themagnolialogo.png' },
  { name: 'The Mint', file: 'themintlogo.png' },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="fh">
        <div className="fh-light" aria-hidden="true"><span /><span /><span /></div>

        <HeroRelease />
        <Statement />
        <Releases />
        <EpTracklist />
        <Sessions />
        <Press />
        <FanNotebook />
        <Collage />

        {/* Live bookings, kept small */}
        <section className="lv" id="bookings">
          <div className="fh-wrap lv-grid">
            <div>
              <p className="fh-label">book live</p>
              <h2 className="lv-title">And yes, <em>he plays live.</em></h2>
              <p className="lv-text">
                Voice, guitar, live looping and beatbox. Ethan has played 300+ events across Los Angeles, from
                weddings and private dinners to corporate galas and the Wiltern stage.
              </p>
              <div className="lv-actions">
                <Link href="/contact" className="glass-btn glass-btn-solid">book ethan</Link>
                <Link href="/services" className="glass-btn">weddings &amp; events</Link>
              </div>
            </div>
            <div className="lv-side">
              <div className="lv-stats">
                {[
                  { n: '180M', l: 'views across platforms' },
                  { n: '300+', l: 'events played' },
                  { n: '80k+', l: 'followers' },
                ].map((s) => (
                  <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>
                ))}
              </div>
              <blockquote className="lv-quote">
                “Incredible music, great vibe, added energy to the atmosphere and made everyone feel good.”
                <cite>laura schenasi · executive vp, tmmc</cite>
              </blockquote>
            </div>
          </div>
          <div className="fh-wrap lv-logos" aria-label="Past clients and venues">
            {venueLogos.map((v) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={v.name} src={`/images/${v.file}`} alt={v.name} loading="lazy" />
            ))}
          </div>
        </section>
      </main>
      <Parallax />
      <BirthdayNudge />
      <Footer />
    </>
  )
}
