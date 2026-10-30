import { venueLogos } from '../../lib/venues'
import { stats } from '../../lib/stats'
import { Logo } from '../VenueGrid'

// Straight under the hero, like the original site: the numbers and the rooms
// he has played.
export default function LiveStrip() {
  const top = venueLogos.filter((v) => v.top)
  return (
    <section className="ls" aria-label="Live bookings">
      <div className="fh-wrap">
        <div className="ls-stats">
          {stats.map((s) => (
            <div key={s.label}><b>{s.n}</b><span>{s.label}</span></div>
          ))}
        </div>
        <p className="fh-label ls-label">past clients &amp; venues include</p>
        <div className="ls-logos">
          {top.map((v) => <div key={v.name} className="ls-logo"><Logo v={v} scale={0.72} /></div>)}
        </div>
      </div>
    </section>
  )
}
