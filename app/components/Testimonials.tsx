'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const testimonials = [
  {
    quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform — he transformed the atmosphere completely.",
    name: 'Sarah and James K.',
    role: 'Wedding Reception',
    venue: 'The Shade Hotel, Manhattan Beach',
  },
  {
    quote: "Ethan Hoffman has been a joy to work with. He is truly a professional artist — prompt, polite, talented, entertaining, and most importantly, has great character and integrity.",
    name: 'Tony Nguyen',
    role: 'Talent Booker',
    venue: '',
  },
  {
    quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
    name: 'Michelle T.',
    role: 'Corporate Event',
    venue: 'Renaissance LAX Hotel',
  },
  {
    quote: "Incredible music, great vibe, added energy to the atmosphere and made everyone feel good… his music makes me happy and I love singing along! He is kind and relates to his audience. He adds a great deal to any event!",
    name: 'Laura Schenasi',
    role: 'Executive VP',
    venue: 'TMMC',
  },
  {
    quote: "Ethan Hoffman truly elevated our fundraising reception! His soulful melodies and upbeat tunes brought such a warm and joyful atmosphere to the event. Ethan brings an infectious energy to his set — he literally had me from the first notes he strummed! You couldn't wipe the smile from my face!",
    name: 'Lisa Takata',
    role: 'Special Events Manager',
    venue: '',
  },
]

export default function Testimonials() {
  return (
    <>
      <Navbar />

      <style>{`
        .t-page { background: #1a1814; min-height: 100vh; overflow-x: hidden; }

        .t-hero {
          padding: 8rem 0 5rem;
          background: #1a1814;
        }

        .t-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
        }

        /* ── Bento-style grid ── */
        .t-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 2px;
        }

        .t-card {
          background: #1f1c18;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
        }

        .t-card.featured {
          background: #c4622d;
          grid-column: 1 / -1;
          min-height: 280px;
          padding: 4rem;
        }

        .t-card.photo {
          background: #0d0b09;
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
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(253,250,245,0.6);
          font-family: Inter, sans-serif;
        }

        .t-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          line-height: 0.5;
          color: rgba(253,250,245,0.15);
          margin-bottom: 1.5rem;
          user-select: none;
        }

        .t-card.featured .t-quote-mark {
          color: rgba(253,250,245,0.3);
        }

        .t-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          font-style: italic;
          font-weight: 400;
          color: rgba(253,250,245,0.85);
          line-height: 1.8;
          margin: 0 0 2rem 0;
          flex: 1;
        }

        .t-card.featured .t-quote {
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          color: #fdfaf5;
        }

        .t-attribution {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .t-card.featured .t-attribution {
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        .t-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(196,98,45,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          color: #c4622d;
        }

        .t-card.featured .t-avatar {
          background: rgba(255,255,255,0.2);
          color: #fdfaf5;
        }

        .t-name {
          font-family: Inter, sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fdfaf5;
          margin: 0 0 0.2rem 0;
        }

        .t-role {
          font-family: Inter, sans-serif;
          font-size: 0.65rem;
          color: rgba(253,250,245,0.5);
          margin: 0;
          letter-spacing: 0.04em;
        }

        .t-card.featured .t-role { color: rgba(255,255,255,0.7); }

        /* ── CTA ── */
        .t-cta {
          text-align: center;
          padding: 6rem 2rem;
          background: #111009;
        }

        @media (max-width: 768px) {
          .t-hero { padding: 7rem 0 3rem; }
          .t-grid { grid-template-columns: 1fr; }
          .t-card.featured { padding: 2.5rem; }
          .t-card { padding: 2rem; min-height: 260px; }
          .t-card.photo { min-height: 300px; }
        }

        @media (max-width: 480px) {
          .t-hero { padding: 6.5rem 0 2.5rem; }
          .t-shell { width: min(1200px, calc(100% - 1.5rem)); }
        }
      `}</style>

      <main className="t-page">

        {/* ── HERO ── */}
        <div className="t-hero">
          <div className="t-shell">
            <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>
              What People Say
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1', marginBottom: '1rem' }}>
              Testimonials
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,245,0.45)', maxWidth: '480px', lineHeight: '1.8', fontFamily: 'Inter, sans-serif' }}>
              From weddings and galas to corporate events and ticketed shows — here&apos;s what clients and bookers have to say.
            </p>
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="t-shell" style={{ paddingBottom: '0' }}>

          {/* Row 1: Featured wide quote */}
          <div className="t-grid">
            <div className="t-card featured">
              <div className="t-quote-mark">"</div>
              <p className="t-quote">{testimonials[0].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[0].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[0].name}</p>
                  <p className="t-role">{testimonials[0].role}{testimonials[0].venue ? ` · ${testimonials[0].venue}` : ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Quote + Photo */}
          <div className="t-grid">
            <div className="t-card">
              <div className="t-quote-mark">"</div>
              <p className="t-quote">{testimonials[1].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[1].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[1].name}</p>
                  <p className="t-role">{testimonials[1].role}</p>
                </div>
              </div>
            </div>
            <div className="t-card photo">
              <img src="/images/ethanwithcrowd.jpg" alt="Ethan Hoffman performing live" />
              <span className="photo-label">Live Performance</span>
            </div>
          </div>

          {/* Row 3: Photo + Quote */}
          <div className="t-grid">
            <div className="t-card photo">
              <img src="/images/ethansingingorange.jpg" alt="Ethan Hoffman at event" style={{ objectPosition: 'center 30%' }} />
              <span className="photo-label">Private Event</span>
            </div>
            <div className="t-card">
              <div className="t-quote-mark">"</div>
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

          {/* Row 4: Two quotes side by side */}
          <div className="t-grid">
            <div className="t-card">
              <div className="t-quote-mark">"</div>
              <p className="t-quote">{testimonials[3].quote}</p>
              <div className="t-attribution">
                <div className="t-avatar">{testimonials[3].name[0]}</div>
                <div>
                  <p className="t-name">{testimonials[3].name}</p>
                  <p className="t-role">{testimonials[3].role}{testimonials[3].venue ? ` · ${testimonials[3].venue}` : ''}</p>
                </div>
              </div>
            </div>
            <div className="t-card">
              <div className="t-quote-mark">"</div>
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

        </div>

        {/* ── CTA ── */}
        <div className="t-cta">
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontStyle: 'italic', color: 'rgba(253,250,245,0.6)', marginBottom: '1.5rem' }}>
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