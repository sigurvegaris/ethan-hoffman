'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { singles, ep, formatReleaseDate } from '../../lib/release'
import { useReleased } from '../../lib/useReleased'
import YinYang from '../YinYang'

const shortDate = (iso: string) => formatReleaseDate(iso).replace(/, \d{4}$/, '').toLowerCase()

// Hovering a song shows a photo from the session that floats with the cursor.
const tracks = [
  { name: singles[0].title, releaseDate: singles[0].releaseDate, img: '/images/malibu/studio-color.webp', secret: false },
  { name: singles[1].title, releaseDate: singles[1].releaseDate, img: '/images/malibu/oak-lying.webp', secret: false },
  { name: 'untitled', releaseDate: ep.releaseDate, img: '/images/malibu/studio-bw.webp', secret: true },
  { name: 'untitled', releaseDate: ep.releaseDate, img: '/images/malibu/fence-dusk.webp', secret: true },
]

function Row({ t, i, onEnter }: { t: (typeof tracks)[number]; i: number; onEnter: (i: number) => void }) {
  const out = useReleased(t.releaseDate)
  return (
    <li className={`ep-row ${t.secret ? 'is-secret' : ''}`} onMouseEnter={() => onEnter(i)}>
      <span className="ep-n">{String(i + 1).padStart(2, '0')}</span>
      <span className="ep-name">{t.name}</span>
      <span className="ep-date">{t.secret ? 'with the ep' : out ? 'out now' : shortDate(t.releaseDate)}</span>
    </li>
  )
}

// The EP as a yin yang: India is the light half, Carefree the dark half, and
// the two songs nobody has heard yet are the dots, glowing like fireflies
// until January 1, when the circle closes. It turns slowly as you scroll.
function EpYinYang({ active }: { active: number | null }) {
  const ref = useRef<HTMLDivElement>(null)
  const india = useReleased(singles[0].releaseDate)
  const carefree = useReleased(singles[1].releaseDate)
  const whole = useReleased(ep.releaseDate)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      el.style.setProperty('--spin', `${(window.innerHeight - r.top) * 0.18}deg`)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame) }
  }, [])

  const cls = (out: boolean, i: number) => `${out ? 'is-out' : ''} ${active === i ? 'is-on' : ''}`
  return (
    <div className={`ep-yy ${whole ? 'is-whole' : ''}`} ref={ref}>
      <YinYang
        className="ep-yy-svg"
        title="India and Carefree as the two halves of a yin yang, with the two unreleased songs as its dots"
        parts={{ light: cls(india, 0), dark: cls(carefree, 1), dotTop: cls(whole, 2), dotBottom: cls(whole, 3) }}
      />
      <p className="ep-yy-cap">
        {whole
          ? 'Two halves, one record. The circle is closed.'
          : 'India and Carefree are two halves of one record. The other two are the dots. On January 1 the circle closes.'}
      </p>
    </div>
  )
}

export default function EpTracklist() {
  const box = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const move = (e: React.MouseEvent) => {
    const r = box.current?.getBoundingClientRect()
    if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <section className="ep" id="ep">
      <div className="fh-wrap ep-grid">
        <div className="ep-head">
          <p className="fh-label">{ep.title.toLowerCase()} · the ep · {formatReleaseDate(ep.releaseDate).toLowerCase()}</p>
          <h2 className="ep-title">Two you know.<br /><em>Two you don&apos;t yet.</em></h2>
          <ul className="ep-facts">
            <li><b>{ep.runtime.split(' ')[0]}</b> minutes, start to finish</li>
            <li><b>1</b> freestyled intro</li>
            <li><b>8</b> session videos</li>
          </ul>
          <EpYinYang active={active} />
        </div>
        <div className="ep-list" ref={box} onMouseMove={move} onMouseLeave={() => setActive(null)}>
          <ol>
            {tracks.map((t, i) => <Row key={i} t={t} i={i} onEnter={setActive} />)}
          </ol>
          <p className="ep-note">a few spoken words before every song</p>
          <div className={`ep-float ${active !== null ? 'on' : ''}`} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -60%)` }} aria-hidden="true">
            {tracks.map((t, i) => (
              <Image key={i} src={t.img} alt="" fill sizes="280px" style={{ objectFit: 'cover', opacity: active === i ? 1 : 0, filter: t.secret ? 'blur(10px) grayscale(0.6)' : undefined }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
