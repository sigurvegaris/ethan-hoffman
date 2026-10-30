'use client'
import { useEffect, useRef } from 'react'

// Bandsintown only scans the page for widgets when its script first loads, so
// arriving here through a site link (no full page load) left the dates empty.
// Mounting the script fresh every time makes it build the list on every visit.
export default function Bandsintown() {
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = box.current
    if (!el) return
    el.innerHTML = ''
    const w = document.createElement('div')
    w.className = 'bit-widget-initializer'
    const attrs: Record<string, string> = {
      'data-artist-name': 'Ethan Hoffman',
      'data-artist-id': '15553686',
      'data-display-local-dates': 'false',
      'data-display-past-dates': 'false',
      'data-auto-style': 'false',
      'data-text-color': '#ffffff',
      'data-link-color': '#e2a75a',
      'data-background-color': 'transparent',
      'data-display-limit': '10',
      'data-link-text-color': '#1c1a15',
      'data-language': 'en',
      'data-popup-background-color': '#1f261c',
      'data-display-lineup': 'false',
      'data-display-start-time': 'false',
      'data-share-on-social-media': 'false',
    }
    Object.entries(attrs).forEach(([k, v]) => w.setAttribute(k, v))
    el.appendChild(w)
    const s = document.createElement('script')
    s.src = 'https://widget.bandsintown.com/main.min.js'
    s.async = true
    el.appendChild(s)
    return () => { el.innerHTML = '' }
  }, [])
  return <div id="bit-widget-container" ref={box} />
}
