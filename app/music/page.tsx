'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReleased } from '../lib/useReleased'
import { singles, ep, listenLinks, formatReleaseDate } from '../lib/release'

const spotify = listenLinks.find((l) => l.label === 'Spotify')!

// Placeholder covers built from the Malibu photos until the real single and EP
// art is ready. Swap `cover` for the finished artwork when it lands.
const releases = [
  { title: singles[0].title, kind: 'single', releaseDate: singles[0].releaseDate, note: singles[0].note, cover: '/images/malibu/studio-color.webp', pos: '30% 50%', mono: false },
  { title: singles[1].title, kind: 'single', releaseDate: singles[1].releaseDate, note: singles[1].note, cover: '/images/malibu/oak-lying.webp', pos: 'center 60%', mono: false },
  { title: ep.title, kind: 'the ep', releaseDate: ep.releaseDate, note: ep.note, cover: '/images/malibu/plaid-smile.webp', pos: 'center 45%', mono: true },
]

function VideoEmbed({ id, label, priority = false }: { id: string; label: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div>
      <div className="mu-frame" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={label}
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={label} loading={priority ? 'eager' : 'lazy'} />
            <span className="mu-play" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </>
        )}
      </div>
      <p className="mu-vlabel">{label.toLowerCase()}</p>
    </div>
  )
}

function ReleaseSlide({ r }: { r: (typeof releases)[number] }) {
  const out = useReleased(r.releaseDate)
  return (
    <div className="mu-slide">
      <div className="mu-cover">
        <Image src={r.cover} alt="" fill sizes="(max-width: 768px) 80vw, 420px" style={{ objectFit: 'cover', objectPosition: r.pos, filter: r.mono ? 'grayscale(1) contrast(1.08)' : undefined }} />
        <span className="mu-cover-title">{r.title}</span>
      </div>
      <p className="mu-name">{r.title.toLowerCase()}</p>
      <p className="mu-kind">{r.kind} · {out ? 'out now' : formatReleaseDate(r.releaseDate).toLowerCase()}</p>
      <p className="mu-note">{r.note}</p>
      {out ? (
        <a className="mu-btn" href={spotify.url} target="_blank" rel="noopener noreferrer">listen now</a>
      ) : (
        <Link className="mu-btn mu-btn-ghost" href="/#notebook">get notified</Link>
      )}
    </div>
  )
}

export default function Music() {
  const [index, setIndex] = useState(0)
  const go = (d: number) => setIndex((i) => (i + d + releases.length) % releases.length)

  const videos = [
    { id: 'Uu51n-4IRKU', label: 'Live Performance' },
    { id: 'DBc9dzliZ-w', label: 'Live Performance' },
    { id: 'iCRmtLvbcdw', label: 'Live Performance, Los Angeles' },
    { id: 'BtW2ebXZt1o', label: 'Live Performance' },
  ]

  return (
    <>
      <Navbar />
      <style>{`
        .mu { background: #e8e2d6; color: #26304a; font-family: 'Jost', 'Inter', sans-serif; overflow-x: hidden; }
        .mu-wrap { width: min(1180px, calc(100% - 3rem)); margin: 0 auto; }
        .mu-top { background: #1f261c; height: 6.5rem; }
        .mu-head { text-align: center; padding: 4.5rem 0 1rem; }
        .mu-script { font-family: 'Pinyon Script', 'Caveat', cursive; font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: #b08a52; margin: 0; }
        .mu-title { font-family: 'Jost', 'Inter', sans-serif; font-weight: 600; font-size: clamp(3rem, 8vw, 5.5rem); letter-spacing: 0.06em; line-height: 1; margin: 0; }

        .mu-carousel { position: relative; display: grid; grid-template-columns: 64px 1fr 64px; align-items: center; padding: 2.5rem 0 5rem; }
        .mu-arrow { width: 52px; height: 52px; border-radius: 50%; border: 1px solid rgba(38,48,74,0.3); background: transparent; color: #26304a; font-size: 1.4rem; cursor: pointer; transition: background 0.2s ease, color 0.2s ease; }
        .mu-arrow:hover { background: #26304a; color: #e8e2d6; }
        .mu-slide { display: flex; flex-direction: column; align-items: center; text-align: center; animation: muIn 0.45s ease; }
        @keyframes muIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .mu-cover { position: relative; width: min(420px, 78vw); aspect-ratio: 1; overflow: hidden; box-shadow: 0 24px 50px rgba(28,26,21,0.25); }
        .mu-cover::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 85% 10%, rgba(255,170,90,0.35), transparent 55%), linear-gradient(to top, rgba(0,0,0,0.45), transparent 45%); }
        .mu-cover-title { position: absolute; left: 1.25rem; bottom: 1rem; z-index: 1; font-family: 'Abril Fatface', Georgia, serif; font-size: clamp(2rem, 5vw, 3rem); color: #f2ecdf; line-height: 1; }
        .mu-name { font-weight: 600; font-size: 1.1rem; letter-spacing: 0.26em; margin: 2rem 0 0.35rem; }
        .mu-kind { font-size: 0.9rem; letter-spacing: 0.2em; opacity: 0.75; margin: 0 0 0.9rem; }
        .mu-note { font-size: 1rem; line-height: 1.6; color: #4a4f60; max-width: 44ch; margin: 0 0 1.5rem; }
        .mu-btn { display: inline-block; background: #26304a; color: #f2ecdf; text-decoration: none; padding: 0.8rem 2.4rem; font-weight: 500; letter-spacing: 0.04em; }
        .mu-btn-ghost { background: transparent; color: #26304a; border: 1px solid #26304a; }
        .mu-dots { display: flex; justify-content: center; gap: 0.6rem; margin-top: 1.75rem; }
        .mu-dot { flex: 0 0 9px; width: 9px; height: 9px; min-height: 0; min-width: 0; box-sizing: border-box; border-radius: 50%; border: 1px solid #26304a; background: transparent; padding: 0; cursor: pointer; }
        .mu-dot.on { background: #26304a; }

        .mu-ep { border-top: 1px solid rgba(38,48,74,0.18); padding: 4.5rem 0; display: grid; grid-template-columns: 1fr 1.1fr; gap: 3rem; }
        .mu-ep h2 { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: clamp(2.2rem, 4vw, 3.2rem); line-height: 1.05; margin: 0 0 1rem; }
        .mu-ep p { font-size: 1.05rem; line-height: 1.7; color: #4a4f60; margin: 0; }
        .mu-facts { list-style: none; padding: 0; margin: 0; }
        .mu-facts li { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(38,48,74,0.15); font-size: 1rem; }
        .mu-facts li span:first-child { letter-spacing: 0.2em; font-size: 0.85rem; font-weight: 600; }

        .mu-live { background: #1f261c; color: #f2ecdf; padding: 5rem 0 6rem; }
        .mu-live h2 { font-family: 'Jost', 'Inter', sans-serif; font-weight: 600; font-size: clamp(2.2rem, 5vw, 3.5rem); letter-spacing: 0.06em; margin: 0; text-align: center; }
        .mu-live-sub { font-family: 'Caveat', cursive; font-size: 1.6rem; color: #e2a75a; text-align: center; margin: 0.25rem 0 3rem; }
        .mu-featured { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2.5rem; align-items: start; margin-bottom: 3rem; }
        .mu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .mu-frame { position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: #2d2926; cursor: pointer; }
        .mu-frame img, .mu-frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border: 0; display: block; }
        .mu-play { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; border-radius: 50%; background: #f2ecdf; color: #1c1a15; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(0,0,0,0.35); transition: transform 0.2s ease; }
        .mu-frame:hover .mu-play { transform: translate(-50%, -50%) scale(1.08); }
        .mu-vlabel { margin: 0.75rem 0 0; font-size: 0.85rem; letter-spacing: 0.2em; color: rgba(242,236,223,0.6); }
        .mu-side h3 { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.24em; margin: 0 0 1rem; color: #e2a75a; }
        .mu-expect { list-style: none; padding: 0; margin: 2rem 0 0; }
        .mu-expect li { padding: 0.55rem 0; border-bottom: 1px solid rgba(242,236,223,0.12); color: rgba(242,236,223,0.8); }

        @media (max-width: 900px) {
          .mu-wrap { width: calc(100% - 2.5rem); }
          .mu-top { height: 4.75rem; }
          .mu-head { padding-top: 3rem; }
          .mu-carousel { grid-template-columns: 1fr; padding-bottom: 3.5rem; }
          .mu-arrow { display: none; }
          .mu-ep { grid-template-columns: 1fr; padding: 3.5rem 0; gap: 2rem; }
          .mu-featured { grid-template-columns: 1fr; }
          .mu-grid { grid-template-columns: 1fr; }
          .mu-live { padding: 3.5rem 0 4rem; }
        }
      `}</style>

      <main className="mu">
        <div className="mu-top" />
        <header className="mu-head mu-wrap">
          <p className="mu-script">new songs, one at a time</p>
          <h1 className="mu-title">music</h1>
        </header>

        <section className="mu-wrap" aria-label="Releases">
          <div className="mu-carousel">
            <button type="button" className="mu-arrow" onClick={() => go(-1)} aria-label="Previous release">←</button>
            <ReleaseSlide key={index} r={releases[index]} />
            <button type="button" className="mu-arrow" onClick={() => go(1)} aria-label="Next release">→</button>
          </div>
          <div className="mu-dots" style={{ marginTop: '-3.5rem', marginBottom: '3.5rem' }}>
            {releases.map((r, i) => (
              <button key={r.title} type="button" className={`mu-dot ${i === index ? 'on' : ''}`} onClick={() => setIndex(i)} aria-label={`Show ${r.title}`} />
            ))}
          </div>

          <div className="mu-ep">
            <div>
              <h2>The debut EP, <em>Ethan Hoffman</em>.</h2>
              <p>
                {ep.runtime} of music, opening with a freestyled intro and tied together by spoken interludes
                before each track. Every song was filmed live over two nights in a Malibu studio, so each one
                arrives with its own session video.
              </p>
            </div>
            <ul className="mu-facts">
              {releases.map((r) => (
                <li key={r.title}><span>{r.title.toLowerCase()}</span><span>{formatReleaseDate(r.releaseDate)}</span></li>
              ))}
              <li><span>runtime</span><span>{ep.runtime}</span></li>
              <li><span>sessions</span><span>8 videos, 2 nights, Malibu</span></li>
            </ul>
          </div>
        </section>

        <section className="mu-live">
          <div className="mu-wrap">
            <h2>live</h2>
            <p className="mu-live-sub">loops, beatbox and whatever the room gives him</p>
            <div className="mu-featured">
              <VideoEmbed id={videos[0].id} label={videos[0].label} priority />
              <div className="mu-side">
                <h3>stream on spotify</h3>
                <iframe
                  src="https://open.spotify.com/embed/artist/3wv3GWickdI3WcNEyV2zG6?utm_source=generator&theme=0"
                  width="100%" height="200" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: '4px' }}
                  title="Ethan Hoffman on Spotify"
                />
                <ul className="mu-expect">
                  {['Soulful, vocalist-led performances', 'Live looping and beatboxing', 'Crowd improvisation', 'Covers and original music'].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
            <div className="mu-grid">
              {videos.slice(1).map((v) => <VideoEmbed key={v.id} id={v.id} label={v.label} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
