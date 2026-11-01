'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReleased } from '../lib/useReleased'
import { liveVideos } from '../lib/videos'
import VideoEmbed from '../components/VideoEmbed'
import { ep, epTracks, singles, listenLinks, formatReleaseDate } from '../lib/release'

const spotify = listenLinks.find((l) => l.label === 'Spotify')!

const apple = listenLinks.find((l) => l.label === 'Apple Music')!

// Each released single gets a pair: its cover on the left, its video on the
// right. India is up now; Carefree's pair appears by itself on December 1.
// Swap `cover` for the finished artwork and set `videoId` (the YouTube id)
// when each video is live.
const pairs: { title: string; releaseDate: string; cover: string; pos: string; videoId: string | null }[] = [
  { title: singles[0].title, releaseDate: singles[0].releaseDate, cover: '/images/india-cover.webp', pos: 'center', videoId: null },
  { title: singles[1].title, releaseDate: singles[1].releaseDate, cover: '/images/malibu/oak-lying.webp', pos: 'center 60%', videoId: null },
]


function ReleasePair({ p }: { p: (typeof pairs)[number] }) {
  const out = useReleased(p.releaseDate)
  if (!out) return null
  return (
    <article className="mu-pair">
      <div className="mu-pair-cover">
        <div className="mu-cover">
          <Image src={p.cover} alt={`${p.title} cover`} fill sizes="(max-width: 900px) 90vw, 560px" style={{ objectFit: 'cover', objectPosition: p.pos }} />
          <span className="mu-cover-title">{p.title}</span>
        </div>
        <div className="mu-pair-links">
          <a className="mu-btn" href={spotify.url} target="_blank" rel="noopener noreferrer">Spotify</a>
          <a className="mu-btn mu-btn-ghost" href={apple.url} target="_blank" rel="noopener noreferrer">Apple Music</a>
        </div>
      </div>
      <div className="mu-pair-video">
        {p.videoId ? (
          <VideoEmbed id={p.videoId} label={`${p.title}, official video`} priority />
        ) : (
          <div className="mu-soon">
            <Image src="/images/malibu/studio-bw.webp" alt="" fill sizes="(max-width: 900px) 90vw, 640px" style={{ objectFit: 'cover' }} />
            <span>The {p.title} video<br />premieres soon</span>
          </div>
        )}
      </div>
    </article>
  )
}

export default function Music() {
  const epOut = useReleased(ep.releaseDate)

  const videos = liveVideos

  return (
    <>
      <Navbar />
      <style>{`
        .mu { background: var(--green); color: var(--cream); font-family: var(--f-body); overflow-x: hidden; }
        .mu-wrap { width: min(1180px, calc(100% - 3rem)); margin: 0 auto; }
        .mu-top { height: 6.5rem; }
        .mu-head { text-align: center; padding: 4.5rem 0 1rem; }
        .mu-script { font-family: var(--f-hand); font-size: clamp(2.4rem, 5vw, 3.6rem); line-height: 1; color: var(--amber); margin: 0 0 0.4rem; }
        .mu-title { font-family: var(--f-display); font-weight: 600; font-style: italic; font-size: clamp(3.4rem, 9vw, 6.5rem); letter-spacing: -0.03em; line-height: 1; margin: 0; }

        .mu-cover { position: relative; width: min(420px, 78vw); aspect-ratio: 1; overflow: hidden; box-shadow: 0 24px 50px rgba(28,26,21,0.25); }
        .mu-cover::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 85% 10%, rgba(255,170,90,0.35), transparent 55%), linear-gradient(to top, rgba(0,0,0,0.45), transparent 45%); }
        .mu-cover-title { position: absolute; left: 1.25rem; bottom: 1rem; z-index: 1; font-family: var(--f-display); font-size: clamp(2rem, 5vw, 3rem); color: #f2ecdf; line-height: 1; }
        .mu-name { font-weight: 600; font-size: 1.1rem; letter-spacing: 0.26em; margin: 2rem 0 0.35rem; }
        .mu-kind { font-family: var(--f-mono); font-size: 0.8rem; letter-spacing: 0.2em; opacity: 0.75; margin: 0 0 0.9rem; }
        .mu-note { font-size: 1rem; line-height: 1.6; color: var(--cream-dim); max-width: 44ch; margin: 0 0 1.5rem; }
        .mu-btn { display: inline-block; background: var(--cream); color: var(--green); text-decoration: none; padding: 0.8rem 2.4rem; font-weight: 500; letter-spacing: 0.04em; }
        .mu-pairs { display: grid; gap: 4.5rem; padding: 2.5rem 0 5rem; }
        .mu-pair { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: 2.5rem; align-items: center; }
        .mu-pair .mu-cover { width: 100%; }
        .mu-pair-links { display: flex; gap: 0.8rem; margin-top: 1.2rem; }
        .mu-pair-links .mu-btn { flex: 1; text-align: center; padding: 0.85rem 1rem; }
        .mu-soon { position: relative; aspect-ratio: 16 / 9; overflow: hidden; display: grid; place-items: center; text-align: center; }
        .mu-soon img { filter: brightness(0.45) saturate(0.6); }
        .mu-soon span { position: relative; font-family: var(--f-hand); font-size: clamp(2rem, 3.4vw, 2.8rem); line-height: 1.1; color: var(--haze); }
        .mu-btn-ghost { background: transparent; color: var(--cream); border: 1px solid var(--cream); }

        .mu-ep { border-top: 1px solid rgba(242,236,223,0.18); padding: 4.5rem 0; display: grid; grid-template-columns: 1fr 1.1fr; gap: 3rem; }
        .mu-ep h2 { font-family: var(--f-display); font-weight: 400; font-size: clamp(2.2rem, 4vw, 3.2rem); line-height: 1.05; margin: 0 0 1rem; }
        .mu-ep p { font-size: 1.05rem; line-height: 1.7; color: var(--cream-dim); margin: 0; }
        .mu-facts { list-style: none; padding: 0; margin: 0; }
        .mu-facts li { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(242,236,223,0.15); font-size: 1rem; }
        .mu-facts li span:first-child { letter-spacing: 0.2em; font-size: 0.85rem; font-weight: 600; }

        .mu-live { background: var(--green-3); color: #f2ecdf; padding: 5rem 0 6rem; }
        .mu-live h2 { font-family: var(--f-display); font-weight: 600; font-style: italic; font-size: clamp(2.6rem, 6vw, 4rem); letter-spacing: -0.02em; margin: 0; text-align: center; }
        .mu-live-sub { font-family: var(--f-hand); font-size: 1.6rem; color: #e2a75a; text-align: center; margin: 0.25rem 0 3rem; }
        .mu-featured { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2.5rem; align-items: start; margin-bottom: 3rem; }
        .mu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .mu-side h3 { font-family: var(--f-display); font-size: clamp(1.9rem, 3vw, 2.5rem); font-weight: 400; line-height: 1.05; margin: 0 0 0.5rem; color: #f2ecdf; }
        .mu-side h3 em { color: #1ed760; }
        .mu-side-note { font-size: 1rem; line-height: 1.55; color: var(--cream-dim); margin: 0 0 1.2rem; }
        .mu-spotify { display: flex; align-items: center; justify-content: center; gap: 0.7rem; margin-top: 1rem; padding: 0.95rem 1.4rem; border-radius: 999px; background: #1ed760; color: #0f140d; font-weight: 600; font-size: 1.05rem; text-decoration: none; transition: transform 0.2s ease, background 0.2s ease; }
        .mu-spotify:hover { background: #3be477; transform: translateY(-1px); }
        .mu-spotify svg { width: 22px; height: 22px; }
        .mu-more { font-family: var(--f-mono); font-size: 0.78rem; letter-spacing: 0.2em; color: #e2a75a; text-align: center; margin: 4rem 0 2rem; }

        @media (max-width: 900px) {
          .mu-wrap { width: calc(100% - 2.5rem); }
          .mu-top { height: 4.75rem; }
          .mu-head { padding-top: 3rem; }
          .mu-pair { grid-template-columns: 1fr; gap: 1.5rem; }
          .mu-pairs { gap: 3.5rem; padding-bottom: 3.5rem; }
          .mu-ep { grid-template-columns: 1fr; padding: 3.5rem 0; gap: 2rem; }
          .mu-featured { grid-template-columns: 1fr; }
          .mu-grid { grid-template-columns: 1fr; }
          .mu-live { padding: 3.5rem 0 4rem; }
        }
      `}</style>

      <main className="mu">
        <div className="mu-top" />
        <header className="mu-head mu-wrap">
          <p className="mu-script">New songs, one at a time</p>
          <h1 className="mu-title">Music</h1>
        </header>

        <section className="mu-wrap" aria-label="Releases">
          <div className="mu-pairs">
            {pairs.map((p) => <ReleasePair key={p.title} p={p} />)}
          </div>

          {/* EP details come back on release day (runtime etc. stay hidden until then). */}
          {epOut && (
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
                {epTracks.map((r) => (
                  <li key={r.title}><span>{r.title}</span><span>{formatReleaseDate(r.releaseDate)}</span></li>
                ))}
                <li><span>Runtime</span><span>{ep.runtime}</span></li>
                <li><span>Sessions</span><span>8 videos, 2 nights, Malibu</span></li>
              </ul>
            </div>
          )}
        </section>

        <section className="mu-live">
          <div className="mu-wrap">
            <h2>Live</h2>
            <p className="mu-live-sub">Covers, originals, freestyle rapping, looping, and more.</p>
            <div className="mu-featured">
              <VideoEmbed id={videos[0].id} label={videos[0].label} priority />
              <div className="mu-side">
                <h3>Listen on <em>Spotify</em></h3>
                <p className="mu-side-note">Every single, the EP as it drops, and the songs from these videos.</p>
                <iframe
                  src="https://open.spotify.com/embed/artist/3wv3GWickdI3WcNEyV2zG6?utm_source=generator&theme=0"
                  width="100%" height="352" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: '4px' }}
                  title="Ethan Hoffman on Spotify"
                />
                <a className="mu-spotify" href={spotify.url} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1 .25c-2.85-1.74-6.45-2.14-10.68-1.17a.75.75 0 1 1-.33-1.46c4.63-1.06 8.6-.6 11.77 1.34.36.22.47.68.25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.27-2-8.24-2.59-12.1-1.42a.94.94 0 1 1-.54-1.8c4.41-1.34 9.9-.69 13.62 1.6.44.27.58.85.31 1.3Zm.13-3.4C15.18 8.3 8.7 8.08 4.96 9.22a1.13 1.13 0 1 1-.65-2.16c4.3-1.3 11.44-1.05 15.95 1.63a1.13 1.13 0 0 1-1.16 1.94Z"/></svg>
                  Open Ethan on Spotify
                </a>
              </div>
            </div>
            <p className="mu-more">More performances</p>
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
