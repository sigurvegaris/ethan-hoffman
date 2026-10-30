'use client'
import { useState } from 'react'
import { venueLogos, otherVenues, type VenueLogo } from '../lib/venues'
import './venue-grid.css'

export function Logo({ v, scale = 1 }: { v: VenueLogo; scale?: number }) {
  if (!v.logo) return <span className="vg-word" style={{ fontSize: `${v.h * 0.9 * scale}px` }}>{v.name.toUpperCase()}</span>
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={v.logo} alt={v.name} className="vg-logo" style={{ height: `${v.h * scale}px` }} loading="lazy" />
}

// Past clients: 17 logos plus a tile that opens the rest of the list, so the
// grid fills evenly at 6, 3 and 2 across.
export default function VenueGrid() {
  const [open, setOpen] = useState(false)
  return (
    <div className="vg">
      <div className="vg-grid">
        {venueLogos.map((v) => (
          <div key={v.name} className={`vg-tile${v.top ? ' is-top' : ''}`} title={v.name}>
            <Logo v={v} />
          </div>
        ))}
        <button type="button" className="vg-more" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span>{open ? 'show less' : `and ${otherVenues.length} more`}</span>
          <i aria-hidden="true">{open ? '↑' : '↓'}</i>
        </button>
      </div>
      <div className={`vg-list${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {otherVenues.map((v) => <li key={v}>{v}</li>)}
        </ul>
      </div>
    </div>
  )
}
