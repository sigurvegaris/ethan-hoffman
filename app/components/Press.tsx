import Image from 'next/image'
import { articles } from '../lib/press'

// One big quote over a green-graded photo, with the rest drifting past in a
// slow marquee underneath. Hidden until app/lib/press.ts has an article.
export default function Press() {
  if (!articles.length) return null
  const [lead, ...rest] = articles
  const ticker = articles.flatMap((a) => a.quotes.map((q) => ({ q, who: a.outlet ?? a.author })))
  const loop = [...ticker, ...ticker]

  return (
    <section className="pr" id="press">
      <div className="pr-bg" aria-hidden="true">
        <Image src="/images/malibu/path-walk.webp" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
      </div>
      <div className="fh-wrap pr-inner">
        <p className="fh-label">in the press</p>
        <blockquote className="pr-quote">
          <p>“{lead.headline}”</p>
          <footer>
            {lead.url ? <a href={lead.url} target="_blank" rel="noopener noreferrer">{lead.outlet ?? lead.author}</a> : lead.outlet ?? lead.author}
            <span> · words by {lead.author}</span>
          </footer>
        </blockquote>
        {rest.map((a) => (
          <blockquote key={a.title} className="pr-quote pr-quote-2">
            <p>“{a.headline}”</p>
            <footer>
              {a.url ? <a href={a.url} target="_blank" rel="noopener noreferrer">{a.outlet ?? a.author}</a> : a.outlet ?? a.author}
              <span> · words by {a.author}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="pr-marquee" aria-label="More quotes from Ethan">
        <div className="pr-marquee-track">
          {loop.map((t, i) => (
            <span key={i} aria-hidden={i >= ticker.length}>
              “{t.q}” <em>{t.who}</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
