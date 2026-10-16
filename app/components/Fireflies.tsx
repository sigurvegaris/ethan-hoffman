'use client'
import { useEffect, useRef, useState } from 'react'

// A handful of fireflies that wander over every page, blinking on and off at
// their own pace. Tap or click anywhere and a few new ones lift off from that
// spot. Positions come from fixed numbers, not Math.random, so the server and
// the browser render the same thing.
const flies = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 47 + 9) % 100,
  top: (i * 61 + 13) % 100,
  size: 3 + (i % 4),
  wander: 16 + ((i * 7) % 14),
  wanderDelay: -((i * 2.3) % 20),
  blink: 3.2 + ((i * 1.7) % 4),
  blinkDelay: -((i * 0.9) % 6),
  // Three waypoints per fly so each one loops its own lazy path.
  path: [
    [((i * 13) % 70) - 35, ((i * 29) % 60) - 40],
    [((i * 31) % 90) - 45, ((i * 17) % 70) - 25],
    [((i * 23) % 60) - 30, ((i * 41) % 80) - 50],
  ],
}))

type Burst = { id: number; x: number; y: number }

export default function Fireflies() {
  const [bursts, setBursts] = useState<Burst[]>([])
  const nextId = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onDown = (e: PointerEvent) => {
      const id = nextId.current++
      setBursts(b => [...b.slice(-4), { id, x: e.clientX, y: e.clientY }])
      window.setTimeout(() => setBursts(b => b.filter(x => x.id !== id)), 2600)
    }
    window.addEventListener('pointerdown', onDown)
    return () => window.removeEventListener('pointerdown', onDown)
  }, [])

  return (
    <div className="ff" aria-hidden="true">
      {flies.map((f, i) => (
        <span
          key={i}
          className="ff-fly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            animationDuration: `${f.wander}s`,
            animationDelay: `${f.wanderDelay}s`,
            ['--x1' as string]: `${f.path[0][0]}px`,
            ['--y1' as string]: `${f.path[0][1]}px`,
            ['--x2' as string]: `${f.path[1][0]}px`,
            ['--y2' as string]: `${f.path[1][1]}px`,
            ['--x3' as string]: `${f.path[2][0]}px`,
            ['--y3' as string]: `${f.path[2][1]}px`,
          }}
        >
          <i style={{ width: f.size, height: f.size, animationDuration: `${f.blink}s`, animationDelay: `${f.blinkDelay}s` }} />
        </span>
      ))}
      {bursts.map(b => (
        <span key={b.id} className="ff-burst" style={{ left: b.x, top: b.y }}>
          {[0, 1, 2, 3, 4].map(k => (
            <i key={k} style={{ ['--bx' as string]: `${(k - 2) * 18 + (k % 2 ? 6 : -6)}px`, ['--by' as string]: `${-50 - k * 14}px`, animationDelay: `${k * 0.08}s` }} />
          ))}
        </span>
      ))}
    </div>
  )
}
