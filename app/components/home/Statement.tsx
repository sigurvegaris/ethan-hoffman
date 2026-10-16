'use client'
import { Fragment, useEffect, useRef } from 'react'

// One sentence about the EP that lights up word by word as you scroll.
type Piece = { text: string; em?: boolean }

const pieces: Piece[] = [
  { text: 'Just his voice, his guitar,' },
  { text: 'and songs he has lived with', em: true },
  { text: 'for four years,' },
  { text: 'recorded live over two nights in Malibu.' },
]

export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const words = Array.from(el.querySelectorAll<HTMLElement>('[data-w]'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((w) => w.classList.add('lit'))
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)))
      const count = Math.round(progress * words.length)
      words.forEach((w, i) => w.classList.toggle('lit', i < count))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame) }
  }, [])

  return (
    <section className="st">
      <div className="fh-wrap">
        <p className="fh-label">the debut ep</p>
        <p className="st-line" ref={ref}>
          {pieces.map((p, i) => (
            <Fragment key={i}>
              {p.text.split(' ').map((w, j) => (
                <span key={j} data-w className={p.em ? 'st-em' : undefined}>{w} </span>
              ))}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}
