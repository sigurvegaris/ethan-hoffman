'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const frames = [
  { src: '/images/malibu/studio-color.webp', w: 2000, h: 1331, alt: 'A camera crew filming Ethan in the live room', note: 'Tuning the guitar before shooting' },
  { src: '/images/malibu/fence-dusk.webp', w: 1030, h: 1570, alt: 'Ethan outside the studio at dusk', note: 'Exploring Malibu farmland' },
  { src: '/images/malibu/control-room.webp', w: 2000, h: 1328, alt: 'Ethan listening back in the control room', note: 'Listening back in the studio' },
  { src: '/images/malibu/path-walk.webp', w: 1040, h: 1560, alt: 'Ethan walking down a dirt path', note: 'Getting lost in the trails' },
  { src: '/images/malibu/studio-bw.webp', w: 2000, h: 1332, alt: 'Ethan playing acoustic guitar in the live room', note: 'Sound checking for India' },
]

// On desktop the strip is pinned and slides sideways as you scroll down.
// On phones it is a plain swipeable row.
export default function Sessions() {
  const outer = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const o = outer.current, t = track.current
    if (!o || !t) return
    const wide = window.matchMedia('(min-width: 901px)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const size = () => {
      if (!wide.matches || still.matches) { o.style.height = ''; t.style.transform = ''; return }
      o.style.height = `${t.scrollWidth - window.innerWidth + window.innerHeight}px`
      update()
    }
    const update = () => {
      frame = 0
      if (!wide.matches || still.matches) return
      const r = o.getBoundingClientRect()
      const max = t.scrollWidth - window.innerWidth
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)))
      t.style.transform = `translate3d(${(-p * max).toFixed(1)}px, 0, 0)`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    size()
    const ro = new ResizeObserver(size)
    ro.observe(t)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', size)
    return () => { ro.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', size); if (frame) cancelAnimationFrame(frame) }
  }, [])

  return (
    <section className="ss" ref={outer}>
      <div className="ss-pin">
        <div className="ss-track" ref={track}>
          <div className="ss-intro">
            <p className="fh-label">dragonfly creek studios, malibu</p>
            <h2 className="ss-title"><span className="ss-num">8</span> session videos,<br /><span className="ss-num">2</span> nights,<br /><em><span className="ss-num">1</span> room.</em></h2>
            <p className="ss-sub">Every song on the EP arrives with its own live video. Until then, here he is on stage.</p>
            <Link href="/music" className="glass-btn">watch live performances</Link>
          </div>
          {frames.map((f, i) => (
            <figure key={f.src} className={`ss-frame ${f.h > f.w ? 'tall' : 'wide'}`} style={{ marginTop: i % 2 ? '9vh' : '0' }}>
              <div className="ss-img" data-lens={f.src.includes('-bw') ? undefined : true}>
                <Image src={f.src} alt={f.alt} width={f.w} height={f.h} sizes="(max-width: 900px) 80vw, 50vw" loading="eager" />
              </div>
              <figcaption><span>{String(i + 1).padStart(2, '0')}</span>{f.note}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
