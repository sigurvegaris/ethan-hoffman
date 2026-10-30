'use client'
import { useEffect } from 'react'

// Hovering a golden-hour photo opens a small circle that shows the same spot
// in black and white, following the cursor: a little of the other inside each.
// Any element marked data-lens gets it; the look lives in home.css.
export default function OppositeLens() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-lens]'))
    // Each photo gets a black-and-white twin on top, clipped to the circle.
    const layers = els.map((el) => {
      const img = el.querySelector('img')
      if (!img) return null
      const layer = document.createElement('div')
      layer.className = 'lens-layer'
      layer.setAttribute('aria-hidden', 'true')
      const twin = img.cloneNode() as HTMLImageElement
      twin.alt = ''
      twin.removeAttribute('style')
      layer.appendChild(twin)
      el.appendChild(layer)
      return layer
    })
    const move = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement
      const r = el.getBoundingClientRect()
      el.style.setProperty('--lx', `${e.clientX - r.left}px`)
      el.style.setProperty('--ly', `${e.clientY - r.top}px`)
      el.classList.add('lens-on')
    }
    const leave = (e: PointerEvent) => (e.currentTarget as HTMLElement).classList.remove('lens-on')
    els.forEach((el) => { el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave) })
    return () => {
      els.forEach((el) => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) })
      layers.forEach((l) => l?.remove())
    }
  }, [])
  return null
}
