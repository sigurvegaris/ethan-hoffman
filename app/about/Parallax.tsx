'use client'
import { useEffect } from 'react'

// Gently drifts every [data-speed] element inside `scope` as the page scrolls.
// A speed of 0.1 moves an element 10% of its distance from the viewport centre.
// Off under prefers-reduced-motion.
export default function Parallax({ scope }: { scope: string }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = document.querySelector(scope)
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-speed]'))
    let frame = 0

    const update = () => {
      frame = 0
      const mid = window.innerHeight / 2
      for (const el of els) {
        const speed = parseFloat(el.dataset.speed || '0')
        const box = el.parentElement?.getBoundingClientRect()
        if (!box || box.bottom < -200 || box.top > window.innerHeight + 200) continue
        const offset = Math.max(-140, Math.min(140, (box.top + box.height / 2 - mid) * speed))
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      }
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      els.forEach((el) => { el.style.transform = '' })
    }
  }, [scope])

  return null
}
