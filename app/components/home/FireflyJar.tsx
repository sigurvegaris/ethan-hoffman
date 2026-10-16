'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { articles } from '../../lib/press'

// A little game: every short press quote is a firefly drifting over the
// meadow. Tap one (or scoop it by dragging the jar into it) and it stops,
// glows and says its line, then flies into the jar wherever you have put it.
// Tap a firefly in the jar to hear it again. Wander paths are fixed numbers,
// not Math.random, so the server and browser render the same thing.
const quotes = articles.flatMap((a) => a.quotes.map((q) => ({ q, who: a.outlet ?? a.author })))

const SPEAK_MS = 3200

const spots = quotes.map((_, i) => ({
  left: 18 + ((i * 37) % 52),
  top: 26 + ((i * 23) % 44),
  dur: 7 + ((i * 3) % 4),
  delay: -((i * 1.9) % 7),
  // Wide loops so they roam the whole meadow, not just hover in place.
  path: [
    [((i * 97) % 440) - 220, ((i * 53) % 260) - 130],
    [((i * 61) % 400) - 200, ((i * 89) % 240) - 90],
    [((i * 131) % 360) - 180, ((i * 37) % 280) - 170],
  ],
}))

// Where caught fireflies settle inside the jar, as % of the jar box.
const slots = [[40, 72], [60, 62], [50, 84], [33, 56], [66, 80], [47, 50], [56, 74], [36, 86]]

type Pt = { x: number; y: number }
type Held = { i: number; at: Pt; to?: Pt; phase: 'speaking' | 'flying' }

function Fly({ className }: { className?: string }) {
  return (
    <span className={`fj-bug ${className ?? ''}`}>
      <span className="fj-halo" />
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g transform="rotate(-28 10 10)"><ellipse className="fj-wing" cx="10" cy="7" rx="3.2" ry="6.2" /></g>
        <g transform="rotate(28 14 10)"><ellipse className="fj-wing fj-wing-r" cx="14" cy="7" rx="3.2" ry="6.2" /></g>
        <ellipse cx="12" cy="11.5" rx="2.4" ry="4.6" fill="#2e2618" />
        <ellipse cx="12" cy="6.4" rx="2.3" ry="1.7" fill="#8a3b22" />
        <circle cx="12" cy="5.2" r="1.1" fill="#1c160c" />
        <ellipse className="fj-tail" cx="12" cy="16.4" rx="2.6" ry="3.2" />
      </svg>
    </span>
  )
}

function Jar({ glow, full, open }: { glow: number; full: boolean; open: boolean }) {
  return (
    <svg className="fj-jar-svg" viewBox="0 0 140 204" aria-hidden="true">
      <defs>
        <linearGradient id="fj-glass" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.12" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="0.5" stopColor="#dfe8d8" stopOpacity="0.02" />
          <stop offset="0.86" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="fj-brass" x1="0" x2="1">
          <stop offset="0" stopColor="#5e4a2a" />
          <stop offset="0.22" stopColor="#d9c18b" />
          <stop offset="0.45" stopColor="#8a7242" />
          <stop offset="0.72" stopColor="#cdb279" />
          <stop offset="1" stopColor="#4f3e22" />
        </linearGradient>
        <radialGradient id="fj-warm" cx="50%" cy="62%" r="62%">
          <stop offset="0" stopColor="#fbeeb0" stopOpacity="0.75" />
          <stop offset="0.55" stopColor="#f1dc9c" stopOpacity="0.22" />
          <stop offset="1" stopColor="#f1dc9c" stopOpacity="0" />
        </radialGradient>
        <filter id="fj-soft"><feGaussianBlur stdDeviation="1.4" /></filter>
        <filter id="fj-shadow"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>
      {/* Shadow on the ground, and warm light spilling around the jar */}
      <ellipse cx="70" cy="198" rx="54" ry="6" fill="#000" opacity="0.5" filter="url(#fj-shadow)" />
      <ellipse cx="70" cy="120" rx="90" ry="100" fill="url(#fj-warm)" opacity={glow * 0.55} />
      {/* Glass body */}
      <path className="fj-glass" d="M40 40 H100 V50 C121 54 128 66 128 84 V176 C128 190 118 196 104 196 H36 C22 196 12 190 12 176 V84 C12 66 19 54 40 50 Z" />
      <rect x="18" y="64" width="104" height="126" rx="18" fill="url(#fj-warm)" opacity={glow} />
      {/* A few blades of grass, the way you would set up a firefly jar */}
      <g className="fj-grass">
        <path d="M46 194 C44 176 38 164 30 156" />
        <path d="M54 194 C56 172 62 160 72 150" />
        <path d="M62 194 C60 180 52 172 48 166" />
        <path d="M88 194 C86 176 92 164 102 158" />
        <path d="M96 194 C98 182 106 176 112 174" />
      </g>
      <ellipse cx="70" cy="188" rx="52" ry="6" fill="#fff" opacity="0.06" stroke="#fff" strokeOpacity="0.16" />
      {/* Glass thickness and reflections */}
      <path d="M17 86 V174 M123 86 V174" stroke="#fff" strokeOpacity="0.12" strokeWidth="1" />
      <path d="M24 72 C28 62 36 57 46 55" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="21" y="86" width="5" height="86" rx="2.5" fill="#fff" opacity="0.26" filter="url(#fj-soft)" />
      <rect x="29" y="92" width="2" height="42" rx="1" fill="#fff" opacity="0.18" />
      <rect x="113" y="96" width="3" height="62" rx="1.5" fill="#fff" opacity="0.12" filter="url(#fj-soft)" />
      <text x="70" y="132" textAnchor="middle" className="fj-emboss">day one</text>
      {/* Threaded glass lip */}
      <rect x="38" y="32" width="64" height="16" rx="3" fill="url(#fj-glass)" stroke="#f0ebdc" strokeOpacity="0.45" />
      <path d="M40 37 L100 35 M40 42 L100 40" stroke="#fff" strokeOpacity="0.18" />
      {/* Brass screw lid with holes poked in it */}
      <g className={`fj-lid ${open ? 'is-open' : full ? 'is-tight' : ''}`}>
        <rect x="33" y="14" width="74" height="22" rx="3.5" fill="url(#fj-brass)" />
        {Array.from({ length: 17 }, (_, k) => (
          <line key={k} x1={37 + k * 4} y1="16" x2={37 + k * 4} y2="34" stroke="#000" strokeOpacity="0.18" strokeWidth="0.8" />
        ))}
        <ellipse cx="70" cy="14" rx="37" ry="5.5" fill="#b89e66" stroke="#000" strokeOpacity="0.25" />
        <ellipse cx="70" cy="13.4" rx="30" ry="3.6" fill="#a68b55" />
        {[56, 63, 70, 77, 84].map((x, k) => <ellipse key={x} cx={x} cy={k % 2 ? 12 : 14.6} rx="1.3" ry="0.7" fill="#1c160c" />)}
        <rect x="35" y="17" width="70" height="2.5" fill="#fff" opacity="0.22" />
      </g>
    </svg>
  )
}

export default function FireflyJar() {
  const field = useRef<HTMLDivElement>(null)
  const jarEl = useRef<HTMLDivElement>(null)
  const flyEls = useRef<(HTMLButtonElement | null)[]>([])
  const drag = useRef<{ dx: number; dy: number; sx: number; sy: number; moved: boolean } | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const [size, setSize] = useState({ w: 0, h: 0, jw: 150, jh: 218 })
  const [freeing, setFreeing] = useState<{ q: number; vars: Record<string, string>; delay: number }[] | null>(null)
  const [jar, setJar] = useState<Pt | null>(null)
  const [caught, setCaught] = useState<number[]>([])
  const caughtRef = useRef<number[]>([])
  const [held, setHeld] = useState<Held | null>(null)
  const heldRef = useRef<Held | null>(null)
  const [reread, setReread] = useState<number | null>(null)
  const [round, setRound] = useState(0)

  useEffect(() => { caughtRef.current = caught }, [caught])
  useEffect(() => { heldRef.current = held }, [held])

  // Measure the meadow and park the jar bottom-right until someone moves it.
  useEffect(() => {
    const f = field.current
    if (!f) return
    const measure = () => {
      const w = f.clientWidth, h = f.clientHeight
      const jw = jarEl.current?.offsetWidth ?? 150, jh = jarEl.current?.offsetHeight ?? 220
      setSize({ w, h, jw, jh })
      setJar((p) => {
        const def = w < 700 ? { x: (w - jw) / 2, y: h - jh - 24 } : { x: w - jw - Math.max(32, (w - 1240) / 2), y: h - jh - 32 }
        if (!p) return def
        return { x: Math.min(Math.max(0, p.x), w - jw), y: Math.min(Math.max(0, p.y), h - jh) }
      })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(f)
    return () => { ro.disconnect(); window.clearTimeout(timer.current) }
  }, [])

  const rel = (r: DOMRect): Pt => {
    const f = field.current!.getBoundingClientRect()
    return { x: r.left + r.width / 2 - f.left, y: r.top + r.height / 2 - f.top }
  }

  const send = useCallback(() => {
    const h = heldRef.current
    if (!h || h.phase !== 'speaking' || !jarEl.current) return
    window.clearTimeout(timer.current)
    const j = jarEl.current.getBoundingClientRect()
    const f = field.current!.getBoundingClientRect()
    const [sx, sy] = slots[caughtRef.current.length % slots.length]
    const next: Held = { ...h, phase: 'flying', to: { x: j.left - f.left + (j.width * sx) / 100, y: j.top - f.top + (j.height * sy) / 100 } }
    heldRef.current = next
    setHeld(next)
  }, [])

  const grab = useCallback((i: number) => {
    if (heldRef.current) { if (heldRef.current.i === i) send(); return }
    const el = flyEls.current[i]
    if (!el || !field.current) return
    setReread(null)
    const next: Held = { i, at: rel(el.getBoundingClientRect()), phase: 'speaking' }
    heldRef.current = next
    setHeld(next)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(send, SPEAK_MS)
  }, [send])

  const land = (e: React.TransitionEvent) => {
    const h = heldRef.current
    if (!h || h.phase !== 'flying' || e.propertyName !== 'top') return
    caughtRef.current = [...caughtRef.current, h.i]
    setCaught(caughtRef.current)
    heldRef.current = null
    setHeld(null)
  }

  // Dragging the jar. A press that barely moves counts as a tap, which
  // re-reads whichever caught firefly is under the finger.
  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!jar) return
    e.currentTarget.setPointerCapture(e.pointerId)
    const f = field.current!.getBoundingClientRect()
    drag.current = { dx: e.clientX - f.left - jar.x, dy: e.clientY - f.top - jar.y, sx: e.clientX, sy: e.clientY, moved: false }
  }
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || !jarEl.current) return
    if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 6) return
    d.moved = true
    const f = field.current!.getBoundingClientRect()
    const jw = jarEl.current.offsetWidth, jh = jarEl.current.offsetHeight
    setJar({
      x: Math.min(Math.max(0, e.clientX - f.left - d.dx), f.width - jw),
      y: Math.min(Math.max(0, e.clientY - f.top - d.dy), f.height - jh),
    })
    // Scoop: any wild firefly inside the jar's mouth or body gets caught.
    if (heldRef.current) return
    const j = jarEl.current.getBoundingClientRect()
    const box = { l: j.left + j.width * 0.12, r: j.right - j.width * 0.12, t: j.top + j.height * 0.05, b: j.bottom - j.height * 0.1 }
    flyEls.current.forEach((el, i) => {
      if (!el || heldRef.current) return
      const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2
      if (cx > box.l && cx < box.r && cy > box.t && cy < box.b) grab(i)
    })
  }
  const up = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    drag.current = null
    if (!d || d.moved) return
    const hit = document.elementsFromPoint(e.clientX, e.clientY).find((n) => (n as HTMLElement).dataset?.q)
    if (hit) setReread(Number((hit as HTMLElement).dataset.q))
  }

  // Letting them go: the lid pops off and each firefly climbs out of the
  // mouth of the jar, one after another, and flies back to where it was.
  const letGo = () => {
    if (!jar) return
    setReread(null)
    const mouth = { x: jar.x + size.jw / 2, y: jar.y + size.jh * 0.08 }
    setFreeing(caught.map((q, n) => {
      const [sx, sy] = slots[n % slots.length]
      const from = { x: jar.x + (size.jw * sx) / 100, y: jar.y + (size.jh * sy) / 100 }
      const to = { x: (spots[q].left / 100) * size.w, y: (spots[q].top / 100) * size.h }
      const side = n % 2 ? 1 : -1
      return {
        q,
        delay: 350 + n * 260,
        vars: {
          '--fx': `${from.x}px`, '--fy': `${from.y}px`,
          '--mx': `${mouth.x}px`, '--my': `${mouth.y}px`,
          '--ox': `${mouth.x + side * (40 + n * 12)}px`, '--oy': `${Math.max(20, mouth.y - 90 - n * 10)}px`,
          '--tx': `${to.x}px`, '--ty': `${to.y}px`,
        },
      }
    }))
  }
  const done = () => {
    setFreeing(null)
    setCaught([])
    setRound((r) => r + 1)
  }

  if (!quotes.length) return null
  const full = caught.length === quotes.length
  const glow = Math.min(1, caught.length / quotes.length)
  const bubbleAt = (p: Pt) => {
    const w = Math.min(420, size.w - 32)
    const left = Math.min(Math.max(16, p.x - w / 2), size.w - w - 16)
    const above = p.y > 230
    return { left, width: w, ...(above ? { bottom: size.h - p.y + 34 } : { top: p.y + 34 }) }
  }
  const jarBubble = jar ? { x: jar.x + size.jw / 2, y: jar.y } : null

  return (
    <div className={`fj ${full ? 'is-full' : ''}`} ref={field}>
      <div className="fj-hud">
        <p className="fj-title">{freeing ? 'There they go.' : full ? 'You caught every one.' : 'Catch what he said.'}</p>
        <div className="fj-count" aria-label={`${caught.length} of ${quotes.length} caught`}>
          {quotes.map((_, i) => <span key={i} className={i < caught.length ? 'on' : ''} />)}
        </div>
        <p className="fj-tip">{freeing ? 'catch them again' : full ? 'tap one in the jar to hear it again' : 'tap a firefly, or drag the jar to scoop one'}</p>
      </div>

      {quotes.map((_, i) => {
        if (caught.includes(i) || held?.i === i) return null
        const s = spots[i]
        return (
          <button
            key={`${round}-${i}`}
            ref={(el) => { flyEls.current[i] = el }}
            type="button"
            className="fj-fly"
            aria-label="Catch this firefly to hear something Ethan said"
            onClick={() => grab(i)}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
              ['--x1' as string]: `calc(${s.path[0][0]}px * var(--k, 1))`,
              ['--y1' as string]: `calc(${s.path[0][1]}px * var(--k, 1))`,
              ['--x2' as string]: `calc(${s.path[1][0]}px * var(--k, 1))`,
              ['--y2' as string]: `calc(${s.path[1][1]}px * var(--k, 1))`,
              ['--x3' as string]: `calc(${s.path[2][0]}px * var(--k, 1))`,
              ['--y3' as string]: `calc(${s.path[2][1]}px * var(--k, 1))`,
            }}
          >
            <Fly />
          </button>
        )
      })}

      {held && (
        <span
          className={`fj-held ${held.phase === 'flying' ? 'is-flying' : ''}`}
          style={{ left: held.phase === 'flying' ? held.to!.x : held.at.x, top: held.phase === 'flying' ? held.to!.y : held.at.y }}
          onClick={send}
          onTransitionEnd={land}
        >
          <Fly />
        </span>
      )}

      {held && size.w > 0 && (
        <div className={`fj-say ${held.phase === 'flying' ? 'is-gone' : ''}`} style={bubbleAt(held.at)} aria-live="polite" onClick={send}>
          <p>“{quotes[held.i].q}”</p>
          <footer>{quotes[held.i].who}</footer>
          <span className="fj-timer" style={{ animationDuration: `${SPEAK_MS}ms` }} />
        </div>
      )}

      {!held && reread !== null && jarBubble && size.w > 0 && (
        <div key={reread} className="fj-say" style={bubbleAt({ x: jarBubble.x, y: jarBubble.y + 10 })} aria-live="polite" onClick={() => setReread(null)}>
          <p>“{quotes[reread].q}”</p>
          <footer>{quotes[reread].who}</footer>
        </div>
      )}

      <div
        ref={jarEl}
        className={`fj-jar ${jar ? 'is-placed' : ''}`}
        style={jar ? { left: jar.x, top: jar.y } : undefined}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={() => { drag.current = null }}
        role="img"
        aria-label={`A firefly jar with ${caught.length} fireflies in it. Drag it around to scoop fireflies.`}
      >
        <Jar glow={freeing ? 0 : glow} full={full} open={!!freeing} />
        {!freeing && caught.map((q, n) => {
          const [x, y] = slots[n % slots.length]
          return (
            <span key={q} data-q={q} className={`fj-in ${reread === q ? 'is-on' : ''}`} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${-n * 0.9}s`, animationDuration: `${3.4 + (n % 3) * 0.6}s` }}>
              <Fly />
            </span>
          )
        })}
      </div>

      {freeing && freeing.map((f, n) => (
        <span
          key={f.q}
          className="fj-free"
          style={{ ...f.vars, animationDelay: `${f.delay}ms` }}
          onAnimationEnd={n === freeing.length - 1 ? (e) => { if (e.target === e.currentTarget) done() } : undefined}
          aria-hidden="true"
        >
          <Fly />
        </span>
      ))}

      {caught.length > 0 && !held && !freeing && (
        <button type="button" className="fj-release" onClick={letGo}>
          let them go
        </button>
      )}
    </div>
  )
}
