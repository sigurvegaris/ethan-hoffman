'use client'
import { useEffect, useRef, useState } from 'react'
import YinYang from './YinYang'

// A small yin yang in the corner that turns as you scroll down the page, its
// two dots glowing like fireflies. Tap it to float back to the top.
export default function YinYangTop() {
  const ref = useRef<HTMLButtonElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setShown(window.scrollY > window.innerHeight * 0.6)
      ref.current?.style.setProperty('--spin', `${window.scrollY * 0.25}deg`)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame) }
  }, [])

  return (
    <button
      ref={ref}
      type="button"
      className={`yyt ${shown ? 'is-shown' : ''}`}
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <YinYang className="yyt-svg" />
    </button>
  )
}
