'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { testimonials } from '../lib/testimonials'


export default function Testimonials() {
  return (
    <>
      <Navbar />

      <style>{`
        .t-page { background: var(--green); min-height: 100vh; overflow-x: hidden; }

        .t-hero {
          padding: 10rem 0 4rem;
          background: var(--green);
        }

        .t-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
        }

        /* ── Bento-style grid ── */
        .t-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: transparent;
          margin-bottom: 1rem;
        }

        .t-card {
          background: var(--green-2);
          border: 1px solid rgba(242,236,223,0.12);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
        }

        .t-card.featured {
          background: var(--green-3);
          border-color: rgba(226,167,90,0.35);
          grid-column: 1 / -1;
          min-height: 280px;
          padding: 4rem;
        }

        .t-card.photo {
          background: var(--green-3);
          padding: 0;
          overflow: hidden;
          position: relative;
        }

        .t-card.photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          opacity: 0.75;
          transition: opacity 0.4s ease;
        }

        .t-card.photo:hover img { opacity: 0.9; }

        .t-card.photo .photo-label {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cream);
          font-family: var(--f-mono);
        }

        .t-quote-mark {
          font-family: var(--f-display);
          font-size: 4rem;
          line-height: 0.5;
          color: rgba(226,167,90,0.45);
          margin-bottom: 1.5rem;
          user-select: none;
        }

        .t-card.featured .t-quote-mark {
          color: var(--amber);
        }

        .t-quote {
          font-family: var(--f-display);
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          font-style: italic;
          font-weight: 400;
          color: var(--cream-dim);
          line-height: 1.8;
          margin: 0 0 2rem 0;
          flex: 1;
        }

        .t-card.featured .t-quote {
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          color: var(--cream);
        }

        .t-attribution {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(242,236,223,0.12);
        }

        .t-card.featured .t-attribution {
          border-top: 1px solid rgba(226,167,90,0.3);
        }

        .t-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(226,167,90,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: var(--f-display);
          font-size: 1rem;
          color: var(--amber);
        }

        .t-card.featured .t-avatar {
          background: var(--amber);
          color: var(--green-3);
        }

        .t-name {
          font-family: var(--f-body);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--cream);
          margin: 0 0 0.2rem 0;
        }

        .t-role {
          font-family: var(--f-mono);
          font-size: 0.68rem;
          color: var(--cream-dim);
          margin: 0;
          letter-spacing: 0.08em;
        }

        .t-card.featured .t-role { color: var(--amber); }

        /* ── CTA ── */
        .t-cta {
          text-align: center;
          padding: 6rem 2rem;
          margin-top: 4rem;
          background: var(--green-3);
          border-top: 1px solid rgba(242,236,223,0.12);
        }

        @media (max-width: 768px) {
          .t-hero { padding: 8.5rem 0 3rem; }
          .t-grid { grid-template-columns: 1fr; }
          .t-card.featured { padding: 2.5rem; }
          .t-card { padding: 2rem; min-height: 260px; }
          .t-card.photo { min-height: 300px; }
        }

        @media (max-width: 480px) {
          .t-hero { padding: 8rem 0 2.5rem; }
          .t-shell { width: min(1200px, calc(100% - 1.5rem)); }
        }
      `}</style>

      <main className="t-page">

        {/* ── HERO ── */}
        <div className="t-hero">
          <div className="t-shell">
            <p style={{ fontFamily: 'var(--f-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '1rem' }}>
              What People Say
            </p>
            <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: '500', color: 'var(--cream)', lineHeight: '1.05', marginBottom: '1rem' }}>
              Testimonials
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-dim)', maxWidth: '480px', lineHeight: '1.8', fontFamily: 'var(--f-body)' }}>
              From grad parties to corporate gatherings and ticketed shows, here&apos;s what clients and bookers have to say.
            </p>
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="t-shell" style={{ paddingBottom: '0' }}>

          {/* Row 1: Tony featured full width */}
          <div className="t-grid">
            <div className="t-card featured">
              <div className="t-quote-mark">&ldquo;</div>
              <p className="t-quote">{testimonials[0].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[0].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[0].name}</p>
                  <p className="t-role">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Two quotes */}
          <div className="t-grid">
            <div className="t-card">
              <div className="t-quote-mark">&ldquo;</div>
              <p className="t-quote">{testimonials[1].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[1].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[1].name}</p>
                  <p className="t-role">{testimonials[1].role}{testimonials[1].venue ? ` · ${testimonials[1].venue}` : ''}</p>
                </div>
              </div>
            </div>
            <div className="t-card">
              <div className="t-quote-mark">&ldquo;</div>
              <p className="t-quote">{testimonials[2].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[2].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[2].name}</p>
                  <p className="t-role">{testimonials[2].role}{testimonials[2].venue ? ` · ${testimonials[2].venue}` : ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Ruben featured full width */}
          <div className="t-grid">
            <div className="t-card featured">
              <div className="t-quote-mark">&ldquo;</div>
              <p className="t-quote">{testimonials[4].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[4].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[4].name}</p>
                  <p className="t-role">{testimonials[4].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: One full width */}
          <div className="t-grid">
            <div className="t-card" style={{ gridColumn: '1 / -1' }}>
              <div className="t-quote-mark">&ldquo;</div>
              <p className="t-quote">{testimonials[3].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[3].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[3].name}</p>
                  <p className="t-role">{testimonials[3].role}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── CTA ── */}
        <div className="t-cta">
          <p style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '1.5rem' }}>
            Ready to create your own moment?
          </p>
          <Link href="/contact" className="btn-primary">
            Book Ethan
          </Link>
        </div>

      </main>

      <Footer />
    </>
  )
}