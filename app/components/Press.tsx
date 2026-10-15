import { articles } from '../lib/press'

export default function Press() {
  if (!articles.length) return null
  return (
    <section style={{ backgroundColor: '#1a1814', padding: '7rem 0' }}>
      <style>{`
        .press-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2px; }
        .press-card { padding: 2.5rem; background: rgba(196,168,130,0.06); border-top: 2px solid #c4622d; display: flex; flex-direction: column; gap: 1.25rem; }
        @media (max-width: 768px) { .press-card { padding: 1.75rem; } }
      `}</style>
      <div className="container">
        <p style={{ fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', textAlign: 'center', margin: '0 0 1rem' }}>Press</p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: '600', color: '#fdfaf5', textAlign: 'center', margin: '0 0 3.5rem' }}>In their words</h2>
        <div className="press-grid">
          {articles.map((a) => (
            <article key={a.url} className="press-card">
              {a.quotes.map((q, i) => (
                <p key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', lineHeight: '1.6', color: 'rgba(253,250,245,0.85)', margin: 0 }}>&ldquo;{q}&rdquo;</p>
              ))}
              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fdfaf5', margin: '0 0 0.25rem' }}>{a.outlet}{a.author ? ` · ${a.author}` : ''}</p>
                <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4622d', textDecoration: 'none' }}>
                  Read “{a.title}” →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
