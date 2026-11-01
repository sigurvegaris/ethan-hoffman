'use client'
import { useState } from 'react'

// A YouTube video that shows its thumbnail until tapped, so pages don't load
// several players up front. Styles (.mu-frame etc.) live in globals.css.
export default function VideoEmbed({ id, label, priority = false }: { id: string; label: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div>
      <div className="mu-frame" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={label}
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={label} loading={priority ? 'eager' : 'lazy'} />
            <span className="mu-play" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </>
        )}
      </div>
      <p className="mu-vlabel">{label}</p>
    </div>
  )
}
