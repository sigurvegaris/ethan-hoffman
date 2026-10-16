// How the jar fireflies fly, loosely after real ones (Photinus, the common
// summer firefly). They drift slowly and low, meandering, now and then
// hovering. Every few seconds one flashes, rising in a little "J" as it does.
// A firefly nearby may answer about two seconds later, and the first one goes
// to find it: they meet, circle each other for a moment, then part. Once in a
// while one chases another, which darts away.

export type Mode = 'wander' | 'court' | 'dance' | 'part' | 'chase' | 'flee' | 'hover'

export type Bug = {
  x: number
  y: number
  h: number // heading, radians
  sp: number // current speed, px/s
  phase: number
  flash: number // seconds of flash left
  nextFlash: number
  answerAt: number | null
  answerTo: number | null
  mode: Mode
  until: number
  other: number | null
}

export const FLASH = 0.55

export function makeBug(x: number, y: number, t: number): Bug {
  return {
    x, y,
    h: Math.random() * Math.PI * 2,
    sp: 30,
    phase: Math.random() * 10,
    flash: 0,
    nextFlash: t + 1 + Math.random() * 5,
    answerAt: null,
    answerTo: null,
    mode: 'wander',
    until: 0,
    other: null,
  }
}

const SPEED: Record<Mode, number> = { wander: 34, court: 48, dance: 32, part: 62, chase: 88, flee: 96, hover: 5 }

const angleTo = (a: Bug, b: Bug) => Math.atan2(b.y - a.y, b.x - a.x)
const dist = (a: Bug, b: Bug) => Math.hypot(b.x - a.x, b.y - a.y)
const turn = (from: number, to: number, max: number) => {
  let d = to - from
  while (d > Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2
  return from + Math.max(-max, Math.min(max, d))
}

/** Advance every live firefly by dt seconds inside a w×h meadow. */
export function step(bugs: Map<number, Bug>, live: number[], t: number, dt: number, w: number, h: number, scale = 1) {
  const pad = 46
  for (const i of live) {
    const s = bugs.get(i)!
    const other = s.other !== null && live.includes(s.other) ? bugs.get(s.other)! : null
    if (s.mode !== 'wander' && (t > s.until || (s.mode !== 'hover' && !other))) { s.mode = 'wander'; s.other = null }

    // Flashing, and answering a flash.
    if (s.flash > 0) s.flash = Math.max(0, s.flash - dt)
    if (t >= s.nextFlash) {
      s.flash = FLASH
      s.nextFlash = t + 4.5 + Math.random() * 3.5
      for (const j of live) {
        if (j === i) continue
        const o = bugs.get(j)!
        if (o.answerAt === null && o.mode === 'wander' && dist(s, o) < 320 * scale && Math.random() < 0.55) {
          o.answerAt = t + 1.6 + Math.random() * 0.8
          o.answerTo = i
        }
      }
    }
    if (s.answerAt !== null && t >= s.answerAt) {
      s.flash = FLASH
      s.answerAt = null
      const caller = s.answerTo !== null && live.includes(s.answerTo) ? bugs.get(s.answerTo)! : null
      if (caller && caller.mode === 'wander') { caller.mode = 'court'; caller.other = i; caller.until = t + 6 }
      s.answerTo = null
    }

    // Now and then: hover in place, or pick someone to chase.
    if (s.mode === 'wander') {
      const r = Math.random()
      if (r < 0.025 * dt) { s.mode = 'hover'; s.until = t + 1 + Math.random() * 1.5 }
      else if (r < 0.06 * dt) {
        let best: number | null = null, bd = 300 * scale
        for (const j of live) {
          if (j === i) continue
          const d = dist(s, bugs.get(j)!)
          if (d < bd) { bd = d; best = j }
        }
        if (best !== null) {
          const o = bugs.get(best)!
          s.mode = 'chase'; s.other = best; s.until = t + 2.5 + Math.random() * 1.5
          o.mode = 'flee'; o.other = i; o.until = s.until + 0.6
        }
      }
    }

    // Where it wants to go.
    let want = s.h + (Math.sin(t * 0.8 + s.phase) * 0.9 + (Math.random() - 0.5) * 1.6) * dt * 2
    if (other) {
      const d = dist(s, other)
      if (s.mode === 'court' || s.mode === 'chase') want = angleTo(s, other)
      if (s.mode === 'court' && d < 36 * scale) {
        s.mode = 'dance'; s.until = t + 2.4
        other.mode = 'dance'; other.other = i; other.until = s.until
      }
      if (s.mode === 'dance') {
        want = angleTo(s, other) + Math.PI / 2
        if (t > s.until - 0.05) { s.mode = 'part'; s.until = t + 1.4; want = angleTo(s, other) + Math.PI }
      }
      if (s.mode === 'part' || s.mode === 'flee') want = angleTo(s, other) + Math.PI + Math.sin(t * 3 + s.phase) * 0.5
    }

    // Keep inside the meadow.
    const cx = w / 2, cy = h / 2
    if (s.x < pad || s.x > w - pad || s.y < pad + 40 || s.y > h - pad) {
      want = Math.atan2(cy - s.y, cx - s.x)
      if (s.mode === 'flee') s.mode = 'wander'
    }

    // Too close to anyone it isn't dancing with: nudge apart.
    for (const j of live) {
      if (j === i || j === s.other) continue
      const o = bugs.get(j)!
      const d = dist(s, o)
      if (d < 24 * scale && d > 0) { s.x -= ((o.x - s.x) / d) * 20 * dt; s.y -= ((o.y - s.y) / d) * 20 * dt }
    }

    s.h = turn(s.h, want, (s.mode === 'chase' || s.mode === 'flee' ? 4 : 2.4) * dt)
    s.sp += (SPEED[s.mode] * scale - s.sp) * Math.min(1, dt * 2.5)

    // The J: a short dip, then a climb while the light is on.
    const lift = s.flash > 0 ? (s.flash > FLASH * 0.7 ? 22 : -70) * scale : 0
    s.x += Math.cos(s.h) * s.sp * dt
    s.y += Math.sin(s.h) * s.sp * dt * 0.75 + lift * dt
    s.x = Math.max(8, Math.min(w - 8, s.x))
    s.y = Math.max(8, Math.min(h - 8, s.y))
  }
}

/** 0..1 brightness of the tail: a dim ember between flashes, a full pulse when flashing. */
export function glowOf(s: Bug, t: number) {
  const ember = 0.32 + 0.1 * Math.sin(t * 2.2 + s.phase)
  return s.flash > 0 ? Math.max(ember, Math.sin(Math.PI * (1 - s.flash / FLASH))) : ember
}
