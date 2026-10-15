import { articles } from '../lib/press'

// Pull quotes from articles about Ethan, laid out as clippings on the
// homepage's paper background. Hidden until app/lib/press.ts has an article.
export default function Press() {
  if (!articles.length) return null
  return (
    <section className="ps" id="press">
      <style>{`
        .ps { padding: 6.5rem 0; }
        .ps-label { font-family: var(--f-mono); font-size: 0.8rem; letter-spacing: 0.2em; color: var(--amber); margin: 0 0 1.5rem; }
        .ps-article + .ps-article { margin-top: 5rem; }
        .ps-headline { font-family: var(--f-display); font-weight: 400; font-style: italic; font-size: clamp(2rem, 4.2vw, 3.4rem); line-height: 1.08; color: var(--cream); margin: 0; max-width: 26ch; text-wrap: balance; }
        .ps-headline::before { content: '“'; color: var(--amber); }
        .ps-headline::after { content: '”'; color: var(--amber); }
        .ps-byline { font-family: var(--f-hand); font-size: 1.5rem; color: var(--cream-dim); margin: 1.25rem 0 0; }
        .ps-byline a { color: inherit; }
        .ps-clips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3.5rem; }
        .ps-clip { position: relative; background: #fbf8f1; padding: 2rem 1.6rem 1.6rem; box-shadow: 0 10px 24px rgba(28,26,21,0.1); transform: rotate(var(--r)); }
        .ps-clip::before { content: ''; position: absolute; top: -12px; left: 50%; width: 90px; height: 24px; transform: translateX(-50%) rotate(-3deg); background: rgba(226,167,90,0.45); }
        .ps-clip p { font-family: var(--f-display); font-style: italic; font-weight: 350; font-size: 1.2rem; line-height: 1.45; color: var(--ink); margin: 0; }
        .ps-clip span { display: block; margin-top: 1rem; font-family: var(--f-mono); font-size: 0.75rem; letter-spacing: 0.2em; color: #8a8173; }
        @media (max-width: 900px) {
          .ps { padding: 4.5rem 0; }
          .ps-clips { grid-template-columns: 1fr; gap: 2.25rem; }
        }
      `}</style>
      <div className="nb-wrap">
        <p className="ps-label">in the press</p>
        {articles.map((a) => (
          <article key={a.title} className="ps-article">
            <h2 className="ps-headline">{a.headline}</h2>
            <p className="ps-byline">
              from {a.url ? <a href={a.url} target="_blank" rel="noopener noreferrer">“{a.title}”</a> : <>“{a.title}”</>}, by {a.author}{a.outlet ? `, ${a.outlet}` : ''}
            </p>
            <div className="ps-clips">
              {a.quotes.map((q, i) => (
                <figure key={i} className="ps-clip" style={{ ['--r' as string]: `${[-1.5, 1, -0.5][i % 3]}deg`, margin: 0 }}>
                  <p>“{q}”</p>
                  <span>ethan, to {a.author.split(' ')[0].toLowerCase()}</span>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
