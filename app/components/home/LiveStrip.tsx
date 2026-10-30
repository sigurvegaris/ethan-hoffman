import Link from 'next/link'
import { venueLogos } from '../../lib/venues'
import { stats } from '../../lib/stats'
import { testimonials } from '../../lib/testimonials'
import { Logo } from '../VenueGrid'

// Straight under the hero, like the original site: the numbers, the rooms he
// has played and what bookers say, so his credibility lands first.
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
      <div className="ls-reel" aria-label="What bookers say">
        <div className="ls-reel-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure key={i} className="ls-quote" aria-hidden={i >= testimonials.length}>
              <blockquote>&ldquo;{t.pull}&rdquo;</blockquote>
              <figcaption><b>{t.name}</b> · {t.venue || t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="fh-wrap ls-reviews"><Link href="/testimonials">read all reviews →</Link></div>
    </section>
  )
}
