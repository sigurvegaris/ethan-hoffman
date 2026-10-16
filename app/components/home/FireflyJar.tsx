'use client'
import { useRef, useState } from 'react'
import { articles } from '../../lib/press'

// Every short quote from the press is a firefly drifting over the meadow.
// Catch one and it flies into the jar and says its line; tap a firefly in the
// jar to hear it again. Positions are fixed numbers, not Math.random, so the
// server and browser render the same thing.
const quotes = articles.flatMap((a) => a.quotes.map((q) => ({ q, who: a.outlet ?? a.author })))

const spots = quotes.map((_, i) => ({
  left: 6 + ((i * 37) % 56),
  top: 16 + ((i * 23) % 58),
  dur: 9 + ((i * 5) % 6),
  delay: -((i * 1.9) % 8),
  path: [
    [((i * 29) % 90) - 45, ((i * 17) % 70) - 35],
    [((i * 13) % 110) - 55, ((i * 31) % 60) - 20],
    [((i * 41) % 70) - 35, ((i * 19) % 80) - 50],
  ],
}))

// Where caught fireflies settle inside the jar, as % of the jar box.
const slots = [[38, 70], [62, 60], [50, 82], [30, 52], [68, 78], [48, 48], [58, 90], [36, 88]]

type Flight = { i: number; x0: number; y0: number; x1: number; y1: number; go: boolean }

export default function FireflyJar() {
  const wrap = useRef<HTMLDivElement>(null)
  const jar = useRef<HTMLDivElement>(null)
  const [caught, setCaught] = useState<number[]>([])
  const [shown, setShown] = useState<number | null>(null)
  const [flight, setFlight] = useState<Flight | null>(null)

  if (!quotes.length) return null
  const full = caught.length === quotes.length

  const slotOf = (n: number) => slots[n % slots.length]

  const catchFly = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    if (flight || !wrap.current || !jar.current) return
    const w = wrap.current.getBoundingClientRect()
    const f = e.currentTarget.getBoundingClientRect()
    const j = jar.current.getBoundingClientRect()
    const [sx, sy] = slotOf(caught.length)
    const next = {
      i,
      x0: f.left + f.width / 2 - w.left,
      y0: f.top + f.height / 2 - w.top,
      x1: j.left + (j.width * sx) / 100 - w.left,
      y1: j.top + (j.height * sy) / 100 - w.top,
      go: false,
    }
    setFlight(next)
    requestAnimationFrame(() => requestAnimationFrame(() => setFlight({ ...next, go: true })))
  }

  const land = (e: React.TransitionEvent) => {
    if (!flight || e.propertyName !== 'top') return
    setCaught((c) => [...c, flight.i])
    setShown(flight.i)
    setFlight(null)
  }

  return (
    <div className={`fj ${full ? 'is-full' : ''}`} ref={wrap}>
      <p className="fj-hint" aria-hidden={caught.length > 0}>
        {caught.length ? `${caught.length} of ${quotes.length}` : 'catch a firefly'}
      </p>

      {quotes.map((_, i) => {
        if (caught.includes(i) || flight?.i === i) return null
        const s = spots[i]
        return (
          <button
            key={i}
            type="button"
            className="fj-fly"
            aria-label="Catch a firefly to read something Ethan said"
            onClick={(e) => catchFly(i, e)}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
              ['--x1' as string]: `${s.path[0][0]}px`,
              ['--y1' as string]: `${s.path[0][1]}px`,
              ['--x2' as string]: `${s.path[1][0]}px`,
              ['--y2' as string]: `${s.path[1][1]}px`,
              ['--x3' as string]: `${s.path[2][0]}px`,
              ['--y3' as string]: `${s.path[2][1]}px`,
            }}
          >
            <i style={{ animationDelay: `${-((i * 0.8) % 3)}s` }} />
          </button>
        )
      })}

      {flight && (
        <span
          className={`fj-flying ${flight.go ? 'go' : ''}`}
          style={{ left: flight.go ? flight.x1 : flight.x0, top: flight.go ? flight.y1 : flight.y0 }}
          onTransitionEnd={land}
          aria-hidden="true"
        />
      )}

      <div className="fj-quote" aria-live="polite">
        {shown !== null && (
          <blockquote key={shown}>
            <p>“{quotes[shown].q}”</p>
            <footer>{quotes[shown].who}</footer>
          </blockquote>
        )}
      </div>

      <div className="fj-jar" ref={jar}>
        <svg viewBox="0 0 120 160" aria-hidden="true">
          <defs>
            <radialGradient id="fj-glow" cx="50%" cy="65%" r="60%">
              <stop offset="0%" stopColor="#fbeeb0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fbeeb0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect className="fj-light" x="14" y="34" width="92" height="118" rx="20" fill="url(#fj-glow)" style={{ opacity: Math.min(1, caught.length / quotes.length + 0.05) }} />
          <rect className="fj-lid" x="30" y="6" width="60" height="16" rx="4" />
          <path className="fj-lid-line" d="M33 12 H87 M33 17 H87" />
          <path className="fj-glass" d="M36 22 H84 V30 C100 32 106 40 106 54 V134 C106 146 98 152 86 152 H34 C22 152 14 146 14 134 V54 C14 40 20 32 36 30 Z" />
          <path className="fj-shine" d="M24 56 C22 80 22 110 26 132" />
        </svg>
        {caught.map((q, n) => {
          const [x, y] = slotOf(n)
          return (
            <button
              key={q}
              type="button"
              className={`fj-in ${shown === q ? 'is-shown' : ''}`}
              style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${-n * 0.7}s` }}
              aria-label={`Read again: ${quotes[q].q}`}
              onClick={() => setShown(q)}
            />
          )
        })}
      </div>

      {full && (
        <button type="button" className="fj-release" onClick={() => { setCaught([]); setShown(null) }}>
          let them go
        </button>
      )}
    </div>
  )
}
