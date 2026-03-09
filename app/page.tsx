'use client'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const testimonials = [
  {
    quote: "Ethan had the entire room silent within the first thirty seconds. By the end of the night, guests were asking us how we found him. He didn't just perform, he transformed the atmosphere completely.",
    name: "Sarah and James K.",
    event: "Wedding Reception, The Shade Hotel, Manhattan Beach",
  },
  {
    quote: "We've hired a lot of musicians for our corporate events over the years. Ethan is in a different league. He read the room perfectly, kept the energy exactly where we needed it, and received more compliments than any performer we've ever booked.",
    name: "Michelle T.",
    event: "Corporate Event, Renaissance LAX Hotel",
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

{/* HERO */}
<section style={{
  position: 'relative',
  height: '100vh',
  minHeight: '700px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: '#1a1814',
}}>
  {/* Background Photo */}
  <div style={{
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    backgroundImage: 'url(/images/ethanphotositting.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  }} />

  {/* Gradient Overlay */}
  <div style={{
  position: 'absolute', inset: 0,
  background: 'linear-gradient(to bottom, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.5) 50%, rgba(26,24,20,0.92) 100%)',
  zIndex: 2,
  }} />

  {/* Text Content */}
  <div style={{
    position: 'relative', zIndex: 3,
    textAlign: 'center', padding: '0 2rem',
  }}>
<h1 style={{
  fontFamily: 'Playfair Display, serif',
  fontSize: 'clamp(3rem, 8vw, 7rem)',
  fontWeight: '600', color: '#fdfaf5',
  lineHeight: '1.05', marginBottom: '1.2rem',
  textShadow: '0 2px 20px rgba(0,0,0,0.5)',
}}>Ethan Hoffman</h1>
    <p style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
      fontWeight: '300', fontStyle: 'italic',
      color: 'rgba(253,250,245,0.85)',
      marginBottom: '2.5rem',
    }}>
      Soulful Live Music for Weddings and Private Events
    </p>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Link href="/contact" className="btn-primary">Book Ethan</Link>
      <Link href="/music" className="btn-outline">Watch Live</Link>
    </div>
  </div>
</section>

        {/* STATS */}
        <ScrollReveal>
          <section style={{ backgroundColor: '#1a1814', padding: '4rem 0' }}>
            <div className="container">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem', textAlign: 'center',
              }}>
                {[
                  { number: '170M+', label: 'Total Views' },
                  { number: '80K+', label: 'Followers' },
                  { number: '300+', label: 'Performances' },
                  { number: '2', label: 'Sold-Out Wiltern Shows' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '2rem 1rem',
                    borderLeft: i !== 0 ? '1px solid rgba(196,168,130,0.2)' : 'none',
                  }}>
                    <p style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: '600', color: '#c4622d',
                      marginBottom: '0.5rem', lineHeight: '1',
                    }}>{stat.number}</p>
                    <p style={{
                      fontSize: '0.7rem', fontWeight: '500',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'rgba(253,250,245,0.5)',
                    }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

{/* WHO IS ETHAN */}
<ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem', alignItems: 'center',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%', aspectRatio: '3/4',
            overflow: 'hidden',
          }}>
            <img
              src="/images/ethansingingorange.png"
              alt="Ethan Hoffman"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <div style={{
            position: 'absolute',
            top: '1.5rem', left: '1.5rem',
            right: '-1.5rem', bottom: '-1.5rem',
            border: '1px solid rgba(196,98,45,0.3)',
            zIndex: -1,
          }} />
        </div>
        <div>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Who is Ethan</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '600', color: '#1a1814',
            lineHeight: '1.2', marginBottom: '1.5rem',
          }}>
            A vocalist who plays rooms,<br />
            <em style={{ fontWeight: '400' }}>not just songs.</em>
          </h2>
          <p style={{
            fontSize: '1rem', lineHeight: '1.85',
            color: '#6b6460', marginBottom: '1.2rem',
          }}>
            It started with a flyer at Starbucks. Not a grand origin story, just a kid who randomly walked into an audition and realized he was actually pretty good at this. Fast forward to a USC comedy show, a spontaneous performance, and a video that hit 140 million views before he really knew what was happening.
          </p>
          <p style={{
            fontSize: '1rem', lineHeight: '1.85',
            color: '#6b6460', marginBottom: '2rem',
          }}>
            Since then he has played 300+ gigs across LA and beyond: hotel lobbies, private estates, sold-out nights at The Wiltern. He performs with a live looping station, building full band arrangements on the spot using only his voice. Audiences love it.
          </p>
          <Link href="/about" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#c4622d', textDecoration: 'none',
            fontSize: '0.8rem', fontWeight: '600',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}
          onMouseEnter={e => (e.currentTarget.style.gap = '0.8rem')}
          onMouseLeave={e => (e.currentTarget.style.gap = '0.5rem')}>
            Full Story
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>

        {/* WHAT MAKES HIM DIFFERENT */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814', padding: '7rem 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p className="section-label" style={{ marginBottom: '1rem' }}>The Experience</p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '600', color: '#fdfaf5', lineHeight: '1.2',
                }}>Three things that set Ethan apart</h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
              }}>
                {[
                  {
                    number: '01',
                    title: 'Live Looping',
                    body: "Ethan builds full band arrangements on the spot, layering beatbox, bass lines, harmonies, and textures using only his voice and a looping station. You get a full band experience from one artist. Audiences love it every time.",
                  },
                  {
                    number: '02',
                    title: 'Real Improvisation',
                    body: "He doesn't just play songs. He reads the room, responds to the crowd, and shapes the musical flow in real time. No two performances are the same. That spontaneity is exactly what makes people stop and listen.",
                  },
                  {
                    number: '03',
                    title: 'A Voice Built on Truth',
                    body: "Rooted in the soul of Stevie Wonder and the storytelling of Jason Mraz, Ethan's voice only works when it's genuine. Every performance carries real weight because every note comes from a real place.",
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '2.5rem',
                    border: '1px solid rgba(196,168,130,0.15)',
                    transition: 'border-color 0.3s ease',
                  }}>
                    <p style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '2.5rem', fontWeight: '600',
                      color: '#c4622d', opacity: 0.4,
                      marginBottom: '1rem', lineHeight: '1',
                    }}>{item.number}</p>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem', color: '#fdfaf5',
                      marginBottom: '1rem',
                    }}>{item.title}</h3>
                    <p style={{
                      fontSize: '0.9rem', color: 'rgba(253,250,245,0.5)',
                      lineHeight: '1.8',
                    }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* SERVICES PREVIEW */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p className="section-label" style={{ marginBottom: '1rem' }}>What Ethan Offers</p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '600', color: '#1a1814', lineHeight: '1.2',
                }}>Every Event, Elevated</h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem', marginBottom: '3rem',
              }}>
                {[
                  { title: 'Weddings', desc: 'From ceremony to last dance, every moment scored perfectly.', href: '/services' },
                  { title: 'Private Events', desc: 'Birthdays, galas, dinner parties. Elevated by live music.', href: '/services' },
                  { title: 'Corporate Events', desc: 'Professional, polished, and impossible to forget.', href: '/services' },
                  { title: 'Original Music', desc: 'Soulful originals streaming on Spotify and Apple Music.', href: '/music' },
                ].map((s, i) => (
                  <Link key={i} href={s.href} style={{
                    padding: '2.5rem 2rem',
                    backgroundColor: '#fff',
                    textDecoration: 'none',
                    display: 'block',
                    boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderTop: '3px solid transparent',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderTopColor = '#c4622d'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderTopColor = 'transparent'
                    e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem', color: '#1a1814',
                      marginBottom: '0.75rem',
                    }}>{s.title}</h3>
                    <p style={{
                      fontSize: '0.85rem', color: '#6b6460',
                      lineHeight: '1.7',
                    }}>{s.desc}</p>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.8rem', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  View All Services →
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* VENUE LOGOS STRIP */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#2d2926', padding: '5rem 0' }}>
            <div className="container">
              <p style={{
                textAlign: 'center',
                fontSize: '0.7rem', fontWeight: '600',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(253,250,245,0.3)', marginBottom: '3rem',
              }}>Past clients and venues include</p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '1px',
                backgroundColor: 'rgba(196,168,130,0.1)',
                marginBottom: '2rem',
              }}>
                {['The Wiltern', 'The Comedy Store', 'Hollywood Improv', 'Torrance Memorial', 'USC', 'Marriott'].map((v, i) => (
                  <div key={i} style={{
                    backgroundColor: '#2d2926',
                    padding: '1.5rem 1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <p style={{
                      color: 'rgba(253,250,245,0.4)',
                      fontSize: '0.75rem', textAlign: 'center',
                      fontFamily: 'Playfair Display, serif',
                    }}>{v}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/venues" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.8rem', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  View All Venues →
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* TESTIMONIALS */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p className="section-label" style={{ marginBottom: '1rem' }}>Testimonials</p>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '600', color: '#1a1814', lineHeight: '1.2',
                }}>What People Are Saying About Ethan</h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem', marginBottom: '3rem',
              }}>
                {testimonials.map((t, i) => (
                  <div key={i} style={{
                    padding: '3rem',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                  }}>
                    <p style={{
                      fontSize: '2rem', color: '#c4622d',
                      fontFamily: 'Playfair Display, serif',
                      opacity: 0.4, lineHeight: '1',
                      marginBottom: '1rem',
                    }}>"</p>
                    <p style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1rem', fontStyle: 'italic',
                      color: '#2d2926', lineHeight: '1.8',
                      marginBottom: '1.5rem',
                    }}>{t.quote}</p>
                    <p style={{
                      fontSize: '0.85rem', fontWeight: '600',
                      color: '#1a1814', marginBottom: '0.2rem',
                    }}>{t.name}</p>
                    <p style={{
                      fontSize: '0.75rem', color: '#c4622d',
                      letterSpacing: '0.05em',
                    }}>{t.event}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/testimonials" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.8rem', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  Read More Reviews →
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* BOOKING CTA */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#1a1814', padding: '7rem 0' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>What do you say</p>
<h2 style={{
  fontFamily: 'Playfair Display, serif',
  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
  fontWeight: '600', color: '#fdfaf5',
  lineHeight: '1.2', marginBottom: '1.5rem',
}}>
  Ready to give your guests<br />
  <em style={{ fontWeight: '400' }}>a night they won't forget?</em>
</h2>
<p style={{
  fontSize: '1rem', color: 'rgba(253,250,245,0.6)',
  maxWidth: '480px', lineHeight: '1.8',
  margin: '0 auto 2.5rem',
}}>
  Ethan is known for being reliable, punctual, and deeply curated to every event he performs at. You can expect a response within 24 hours.
</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Get In Touch</Link>
                <Link href="/services" className="btn-outline">View Services</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  )
}