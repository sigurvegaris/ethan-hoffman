import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import Press from './components/Press'
import IndiaChapter from './components/home/IndiaChapter'
import FanNotebook from './components/home/FanNotebook'
import { featuredSingle, singles, ep, formatReleaseDate } from './lib/release'
import './home.css'

const shortDate = (iso: string) => formatReleaseDate(iso).replace(/, \d{4}$/, '').replace('November', 'Nov').replace('December', 'Dec').replace('January', 'Jan')

const tracks = [
  ...singles.map((s) => ({ name: s.title, date: shortDate(s.releaseDate), secret: false })),
  { name: '? ? ?', date: shortDate(ep.releaseDate), secret: true },
  { name: '? ? ?', date: shortDate(ep.releaseDate), secret: true },
]

const sessionFrames = [
  { src: '/images/malibu/studio-bw.webp', w: 2000, h: 1332, alt: 'Ethan playing acoustic guitar in the live room' },
  { src: '/images/malibu/control-room.webp', w: 2000, h: 1328, alt: 'Ethan listening back in the control room' },
  { src: '/images/malibu/fence-dusk.webp', w: 1030, h: 1570, alt: 'Ethan outside the studio at dusk' },
  { src: '/images/malibu/studio-color.webp', w: 2000, h: 1331, alt: 'Camera crew filming Ethan in the studio' },
  { src: '/images/malibu/bench.webp', w: 1034, h: 1560, alt: 'Ethan on a bench under an oak tree' },
]

const scrapbook = [
  { src: '/images/malibu/plaid-smile.webp', w: 1040, h: 1560, alt: 'Ethan smiling, sitting on a wall', caption: 'between takes' },
  { src: '/images/malibu/oak-lying.webp', w: 1042, h: 1566, alt: 'Ethan lying in the grass under a big oak', caption: 'under the big oak' },
  { src: '/images/malibu/grass-shoe.webp', w: 1040, h: 1556, alt: 'Ethan tying his shoe in the grass', caption: 'golden hour' },
  { src: '/images/malibu/path-walk.webp', w: 1040, h: 1560, alt: 'Ethan walking down a dirt path', caption: 'the long way back' },
]

const venueLogos = [
  { name: 'The Wiltern', file: 'thewilternlogo.png' },
  { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png' },
  { name: 'Marriott', file: 'marriotlogo.png' },
  { name: 'The Shade Hotel', file: 'shadelogo.png' },
  { name: 'The Magnolia', file: 'themagnolialogo.png' },
  { name: 'USC', file: 'usclogo.png' },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="nb">

        {/* ── HERO ── */}
        <section className="nb-hero nb-grain">
          <div className="nb-hero-media">
            <Image
              src="/images/malibu/oak-walk.webp"
              alt="Ethan Hoffman walking under an oak tree in Malibu"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
          <div className="nb-hero-shade" />

          <a href="#india" className="nb-note">
            <span className="nb-note-text">new song “{featuredSingle.title}”</span>
            <span className="nb-note-sub">{shortDate(featuredSingle.releaseDate)} ✷</span>
            <svg viewBox="0 0 110 70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M100 6 C 92 40, 60 58, 14 56" />
              <path d="M26 46 L 13 56 L 27 64" />
            </svg>
          </a>

          <div className="nb-hero-inner">
            <p className="nb-label nb-hero-kicker">Singer-songwriter · Los Angeles</p>
            <h1 className="nb-hero-name">Ethan<br /><em>Hoffman</em></h1>
            <div className="nb-hero-row">
              <p className="nb-hero-line">Soulful, honest songs, written down one name at a time.</p>
              <div className="nb-actions">
                <a href="#india" className="nb-btn nb-btn-light">Listen</a>
                <a href="#notebook" className="nb-btn nb-btn-ghost">Sign the notebook</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── INDIA ── */}
        <IndiaChapter />

        {/* ── THE EP ── */}
        <section className="nb-ep">
          <div className="nb-wrap">
            <ScrollReveal>
              <div className="nb-page nb-ep-grid">
                <div>
                  <p className="nb-ep-title">{ep.title} — the EP</p>
                  <p className="nb-ep-sub">out {formatReleaseDate(ep.releaseDate)}</p>
                  <ol className="nb-tracks">
                    {tracks.map((t, i) => (
                      <li key={i} className={`nb-track ${t.secret ? 'is-secret' : ''}`}>
                        <span><span className="nb-track-n">{i + 1}.</span><span className="nb-track-name">{t.name}</span></span>
                        <span className="nb-track-date">{t.date}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="nb-secret-note">↑ two you haven’t heard yet</p>
                  <ul className="nb-ep-facts">
                    <li>— {ep.runtime}, start to finish</li>
                    <li>— a freestyled intro, and a few words before every song</li>
                    <li>— every song filmed live over two nights in Malibu</li>
                  </ul>
                </div>
                <figure className="nb-polaroid nb-tape nb-ep-photo" style={{ margin: 0 }}>
                  <Image src="/images/malibu/control-room.webp" alt="Ethan in the control room during the EP sessions" width={2000} height={1328} sizes="(max-width: 1024px) 360px, 380px" />
                  <figcaption>listening back</figcaption>
                </figure>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SESSIONS ── */}
        <section className="nb-sessions">
          <div className="nb-wrap nb-sessions-head">
            <h2 className="nb-sessions-title">Eight session videos.<br />Two nights. <em>One room in Malibu.</em></h2>
            <p className="nb-label" style={{ color: 'var(--amber)' }}>Arriving with every song</p>
          </div>
          <div className="nb-strip" role="list" aria-label="Photos from the Malibu sessions">
            {sessionFrames.map((f, i) => (
              <div key={f.src} className="nb-frame" role="listitem">
                <Image src={f.src} alt={f.alt} width={f.w} height={f.h} sizes="(max-width: 768px) 70vw, 640px" />
                <span className="nb-frame-num">{String(i + 1).padStart(2, '0')}A</span>
              </div>
            ))}
          </div>
          <div className="nb-wrap nb-sessions-foot">
            <p>until then, here he is live →</p>
            <Link href="/music" className="nb-btn nb-btn-ghost">Watch live performances</Link>
          </div>
        </section>

        {/* ── PRESS (hidden until articles are added) ── */}
        <Press />

        {/* ── FAN NOTEBOOK ── */}
        <FanNotebook />

        {/* ── SCRAPBOOK ── */}
        <section className="nb-scrap">
          <div className="nb-wrap nb-scrap-grid">
            {scrapbook.map((p) => (
              <figure key={p.src} className="nb-polaroid nb-tape" style={{ margin: 0 }}>
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 1024px) 45vw, 270px" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── ALSO LIVE (bookings) ── */}
        <section className="nb-live" id="bookings">
          <div className="nb-wrap">
            <div className="nb-live-grid">
              <div>
                <p className="nb-label" style={{ color: 'var(--amber)', marginBottom: '1rem' }}>Live bookings</p>
                <h2 className="nb-live-title">And yes, <em>he plays live.</em></h2>
                <p>
                  Live looping, beatboxing and a voice that changes the room. Ethan has played 300+ events across
                  Los Angeles, from weddings and private dinners to corporate galas and the Wiltern stage.
                </p>
                <div className="nb-actions">
                  <Link href="/contact" className="nb-btn nb-btn-rust">Book Ethan</Link>
                  <Link href="/services" className="nb-btn nb-btn-ghost">Weddings &amp; events</Link>
                </div>
              </div>
              <div className="nb-stats">
                {[
                  { n: '180M', l: 'Views across platforms' },
                  { n: '80k+', l: 'Followers' },
                  { n: '300+', l: 'Events performed' },
                  { n: '8+', l: 'Hours of repertoire' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="nb-stat-num">{s.n}</div>
                    <div className="nb-stat-label">{s.l}</div>
                  </div>
                ))}
                <blockquote className="nb-quote" style={{ margin: 0 }}>
                  “Incredible music, great vibe, added energy to the atmosphere and made everyone feel good.”
                  <cite>Laura Schenasi · Executive VP, TMMC</cite>
                </blockquote>
              </div>
            </div>
            <div className="nb-venues" aria-label="Past clients and venues">
              {venueLogos.map((v) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={v.name} src={`/images/${v.file}`} alt={v.name} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
