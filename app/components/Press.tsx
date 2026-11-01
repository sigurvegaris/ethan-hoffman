import Image from 'next/image'
import { articles } from '../lib/press'

// Press quotes laid out like clippings on a wall: the two headline quotes
// large, the shorter ones smaller, all in the bold italic display face. Each one names its
// publication, linked to the article.
type Clip = { q: string; outlet: string; url?: string; size: 'xl' | 'l' | 'm' | 's' }

export default function Press() {
  if (!articles.length) return null
  const src = (i: number) => ({ outlet: articles[i]?.outlet ?? articles[i]?.author ?? '', url: articles[i]?.url })
  const [a, b] = articles
  const raw: (Clip | null)[] = [
    { q: a.headline, ...src(0), size: 'xl' },
    b ? { q: b.quotes[1], ...src(1), size: 's' } : null,
    { q: a.quotes[0], ...src(0), size: 'm' },
    b ? { q: b.headline, ...src(1), size: 'l' } : null,
    b ? { q: b.quotes[0], ...src(1), size: 'm' } : null,
    { q: a.quotes[1], ...src(0), size: 's' },
    b ? { q: b.quotes[2], ...src(1), size: 'm' } : null,
  ]
  const clips = raw.filter((c): c is Clip => !!c && !!c.q)

  return (
    <section className="pr" id="press">
      <div className="pr-bg" aria-hidden="true">
        <Image src="/images/malibu/path-walk.webp" alt="" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
      </div>
      <div className="fh-wrap pr-inner">
        <p className="fh-label">In the press</p>
        <div className="pr-wall">
          {clips.map((c, i) => (
            <blockquote key={i} className={`pr-clip pr-${c.size}`}>
              <p>&ldquo;{c.q}&rdquo;</p>
              <footer>{c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer">{c.outlet}</a> : c.outlet}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
