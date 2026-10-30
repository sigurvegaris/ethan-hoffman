'use client'
import { useEffect } from 'react'

// Drifts every element marked data-speed as the page scrolls, so photos sit
// at different depths. Positive speeds lag behind the scroll, negative ones
// lead it. Off for people who prefer reduced motion.
export default function Parallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-speed]'))
    let frame = 0
    const update = () => {
      frame = 0
      const mid = window.innerHeight / 2
      const small = window.innerWidth <= 900
      for (const el of els) {
        if (small) { el.style.transform = ''; continue }
        const speed = Number(el.dataset.speed) || 0
        const box = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect()
        const offset = (box.top + box.height / 2 - mid) * speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      }
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  return null
}
