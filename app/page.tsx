'use client'
import { useState } from 'react'
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

const services = [
  {
    tab: 'Weddings',
    headline: 'The soundtrack to your most important day',
    body: "Your wedding deserves music that feels as personal as the moment itself. Ethan works closely with every couple to understand the vibe and the songs that matter most, then delivers a performance that feels completely tailored to you. From the first note of the ceremony to the last dance of the night.",
    href: '/services',
  },
  {
    tab: 'Private Events',
    headline: 'The room will feel different when he plays',
    body: "Whether it's an intimate dinner party, a milestone birthday, or an upscale celebration, Ethan reads the room and shapes the musical flow to fit the moment. Guests stop talking. They start listening. Then they start moving.",
    href: '/services',
  },
  {
    tab: 'Corporate Events',
    headline: 'Professional entertainment that leaves an impression',
    body: "Ethan has performed for major brands, fundraisers, and corporate functions across Los Angeles. He brings polish and a crowd-connecting energy that transforms a standard corporate event into something people actually talk about afterward.",
    href: '/services',
  },
  {
    tab: 'Original Music',
    headline: 'Music written from real life',
    body: "Beyond covers and events, Ethan is a recording artist with original music on Spotify and all major platforms. Soulful, honest, and deeply personal. His songs pull from real experiences: California living, traveling abroad with nothing but a guitar, the tension between chasing a dream and staying grounded.",
    href: '/music',
  },
]

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{
          position: 'relative', height: '100vh', minHeight: '700px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', backgroundColor: '#1a1814',
        }}>
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            backgroundImage: 'url(/images/ethanphotositting.png)',
            backgroundSize: 'cover', backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            background: 'linear-gradient(to bottom, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.5) 50%, rgba(26,24,20,0.92) 100%)',
          }} />
          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 2rem' }}>
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
              color: 'rgba(253,250,245,0.85)', marginBottom: '2.5rem',
            }}>Soulful Live Music for Weddings and Private Events</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book Ethan</Link>
              <Link href="/music" className="btn-outline">Watch Live</Link>
            </div>
          </div>
        </section>

    

        {/* WHO IS ETHAN */}
        <ScrollReveal delay={100}>
          <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img src="/images/ethansingingorange.png" alt="Ethan Hoffman"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }} />
                  </div>
                  <div style={{
                    position: 'absolute', top: '1.5rem', left: '1.5rem',
                    right: '-1.5rem', bottom: '-1.5rem',
                    border: '1px solid rgba(196,98,45,0.3)', zIndex: -1,
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
                  <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.2rem' }}>
                    It started with a flyer at Starbucks. Not a grand origin story, just a kid who randomly walked into an audition and realized he was actually pretty good at this. Fast forward to a USC comedy show, a spontaneous performance, and a video that hit 140 million views before he really knew what was happening.
                  </p>
                  <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '2rem' }}>
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
                    Full Story <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

{/* WHAT MAKES HIM DIFFERENT */}
<ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#f5f0e8', padding: '8rem 0', overflow: 'hidden' }}>
    <div className="container">
      <p className="section-label" style={{ marginBottom: '4rem' }}>What Sets Ethan Apart</p>

      {/* DESKTOP LAYOUT */}
      <div className="differentiators-desktop" style={{ position: 'relative' }}>

        {/* Row 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 0.1fr 1fr',
          alignItems: 'end',
          marginBottom: '-1rem',
        }}>
          <div>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              fontWeight: '700',
              color: 'rgba(45,41,38,0.7)',
              lineHeight: '0.9',
              letterSpacing: '-0.02em',
            }}>One<br />Artist.</p>
          </div>
          <div />
          <div style={{ textAlign: 'right', paddingBottom: '2rem' }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: '700',
              color: 'rgba(196,168,130,0.3)',
              lineHeight: '0.9',
              letterSpacing: '-0.02em',
            }}>Experience<br />Oriented.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'start',
          gap: '3rem',
          marginBottom: '1rem',
        }}>
          <div style={{ paddingTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.8rem', color: '#c4622d',
                flexShrink: 0, marginTop: '3px',
              }}>01</span>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.85', color: '#6b6460' }}>
                Ethan performs with a live looping station, layering beatbox, bass lines, harmonies, and textures using only his voice. Guests watch it happen live and cannot believe what they are hearing. A full band experience from one person.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: '700',
              color: 'rgba(45,41,38,0.7)',
              lineHeight: '0.9',
              letterSpacing: '-0.02em',
            }}>Reads<br />Every<br />Room.</p>
          </div>
          <div style={{ paddingTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.85', color: '#6b6460', textAlign: 'right' }}>
                Luxury is not a price tag. It is the moment your guests gasp, reach for their phones, and look at each other because something just happened that none of them expected. That is what Ethan delivers every single night.
              </p>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.8rem', color: '#c4622d',
                flexShrink: 0, marginTop: '3px',
              }}>03</span>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'start',
          gap: '3rem',
        }}>
          <div>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              fontWeight: '700',
              color: 'rgba(196,168,130,0.3)',
              lineHeight: '0.9',
              letterSpacing: '-0.02em',
            }}>Full<br />Band.</p>
          </div>
          <div style={{ paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.8rem', color: '#c4622d',
                flexShrink: 0, marginTop: '3px',
              }}>02</span>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.85', color: '#6b6460' }}>
                No two performances are the same. Ethan improvises, responds to the crowd, and shapes the energy in real time. That spontaneity is exactly what makes people put their phones down and actually be present.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              fontWeight: '700',
              color: 'rgba(45,41,38,0.7)',
              lineHeight: '0.9',
              letterSpacing: '-0.02em',
            }}>Built<br />on<br />Truth.</p>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="differentiators-mobile" style={{ display: 'none' }}>
        {[
          {
            number: '01',
            title: 'One Artist.\nFull Band.',
            body: 'Ethan performs with a live looping station, layering beatbox, bass lines, harmonies, and textures using only his voice. Guests watch it happen live and cannot believe what they are hearing. A full band experience from one person.',
          },
          {
            number: '02',
            title: 'Reads Every\nRoom.',
            body: 'No two performances are the same. Ethan improvises, responds to the crowd, and shapes the energy in real time. That spontaneity is exactly what makes people put their phones down and actually be present.',
          },
          {
            number: '03',
            title: 'Built on\nTruth.',
            body: 'Luxury is not a price tag. It is the moment your guests gasp, reach for their phones, and look at each other because something just happened that none of them expected. That is what Ethan delivers every single night.',
          },
        ].map((item, i) => (
          <div key={i} style={{
            borderTop: '1px solid rgba(196,168,130,0.3)',
            paddingTop: '2.5rem',
            marginBottom: '2.5rem',
          }}>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '0.8rem', color: '#c4622d',
              display: 'block', marginBottom: '0.75rem',
            }}>{item.number}</span>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
              fontWeight: '700',
              color: 'rgba(45,41,38,0.75)',
              lineHeight: '1',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              whiteSpace: 'pre-line',
            }}>{item.title}</p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.85', color: '#6b6460' }}>{item.body}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
</ScrollReveal>

    {/* IT'S ALL ABOUT THE EXPERIENCE
<ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#1a1814', minHeight: '600px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>
      <div style={{
        padding: '6rem 4rem',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <p style={{
          fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
        }}>It's all about the</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.5rem, 4vw, 4rem)',
          fontWeight: '400', fontStyle: 'italic',
          color: '#fdfaf5', lineHeight: '1.1', marginBottom: '2rem',
        }}>Experience</h2>
        <p style={{
          fontSize: '1rem', lineHeight: '1.85',
          color: 'rgba(253,250,245,0.6)', marginBottom: '1.5rem',
        }}>
          Your guests will remember the food, the flowers, the venue. But what they will truly never forget is how the room felt when Ethan started playing. That stillness. That electricity. That moment when everyone collectively stops and just listens.
        </p>
        <p style={{
          fontSize: '1rem', lineHeight: '1.85',
          color: 'rgba(253,250,245,0.6)', marginBottom: '2.5rem',
        }}>
          That is what Ethan delivers at every single event. Not just music. A moment.
        </p>
        <Link href="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
          Let's Connect
        </Link>
      </div>
      <div style={{
        backgroundImage: 'url(/images/ethansingingorange.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        minHeight: '500px',
      }} />
    </div>
  </section>
</ScrollReveal> */}

     {/* SERVICES — Tabbed */}
<ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#f5f0e8', padding: '7rem 0' }}>
    <div className="container">
      <div style={{ marginBottom: '3rem' }}>
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>What Ethan Offers</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          fontWeight: '600', color: '#1a1814', lineHeight: '1.2',
          marginBottom: '2.5rem',
        }}>The perfect vibe<br /><em style={{ fontWeight: '400' }}>for every occasion</em></h2>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '0',
          borderBottom: '1px solid rgba(196,168,130,0.3)',
          flexWrap: 'wrap',
        }}>
          {services.map((s, i) => (
            <button key={i} onClick={() => setActiveService(i)} style={{
              background: 'none', border: 'none',
              padding: '0.85rem 2rem',
              fontSize: '0.7rem', fontWeight: '600',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              color: activeService === i ? '#1a1814' : 'rgba(107,100,96,0.6)',
              borderBottom: activeService === i ? '2px solid #c4622d' : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'all 0.3s ease',
              backgroundColor: activeService === i ? 'rgba(196,98,45,0.05)' : 'transparent',
            }}>{s.tab}</button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '5rem', alignItems: 'center',
      }}>
        <div>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: '600', color: '#1a1814',
            lineHeight: '1.3', marginBottom: '1.5rem',
          }}>{services[activeService].headline}</h3>
          <p style={{
            fontSize: '1rem', lineHeight: '1.85',
            color: '#6b6460', marginBottom: '2rem',
          }}>{services[activeService].body}</p>
          <Link href={services[activeService].href} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#c4622d', textDecoration: 'none',
            fontSize: '0.8rem', fontWeight: '600',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}
          onMouseEnter={e => (e.currentTarget.style.gap = '0.8rem')}
          onMouseLeave={e => (e.currentTarget.style.gap = '0.5rem')}>
            Learn More <span>→</span>
          </Link>
        </div>

        <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
          <img
            src={[
              '/images/ethanwithguitar.png',
              '/images/ethanthreeguys.png',
              '/images/ethanwithcrowd.png',
              '/images/ethansoloshot.png',
            ][activeService]}
            alt={services[activeService].tab}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 0%',
              transition: 'opacity 0.4s ease',
            }}
          />
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>
     {/* VENUE LOGOS STRIP */}
<ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#1a1814', padding: '5rem 0' }}>
    <div className="container">
      <p style={{
        textAlign: 'center', fontSize: '0.7rem', fontWeight: '600',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(253,250,245,0.3)', marginBottom: '3rem',
      }}>Past clients and venues include</p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '3rem',
        padding: '0 2rem',
      }}>
        {[
          // { name: 'The Wiltern', file: 'wilternlogo.png' },
          { name: 'The Comedy Store', file: 'comedystorelogo.png' },
          // { name: 'Hollywood Improv', file: 'hollywoodimprovlogo.png' },
          { name: 'Torrance Memorial', file: 'torrancememoriallogo.png' },
          { name: 'USC', file: 'usclogo.png' },
          { name: 'Marriott', file: 'marriotlogo.png' },
        ].map((v, i) => (
          <img
            key={i}
            src={`/images/${v.file}`}
            alt={v.name}
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)',
              opacity: 0.45,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/venues" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          color: '#c4622d', textDecoration: 'none',
          fontSize: '0.8rem', fontWeight: '600',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>View All Venues →</Link>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                {testimonials.map((t, i) => (
                  <div key={i} style={{ padding: '3rem', backgroundColor: '#fff', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
                    <p style={{
                      fontSize: '2rem', color: '#c4622d',
                      fontFamily: 'Playfair Display, serif',
                      opacity: 0.4, lineHeight: '1', marginBottom: '1rem',
                    }}>"</p>
                    <p style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1rem', fontStyle: 'italic',
                      color: '#2d2926', lineHeight: '1.8', marginBottom: '1.5rem',
                    }}>{t.quote}</p>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#1a1814', marginBottom: '0.2rem' }}>{t.name}</p>
                    <p style={{ fontSize: '0.75rem', color: '#c4622d', letterSpacing: '0.05em' }}>{t.event}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/testimonials" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#c4622d', textDecoration: 'none',
                  fontSize: '0.8rem', fontWeight: '600',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>Read More Reviews →</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

  {/* IT'S ALL ABOUT THE EXPERIENCE */}
  <ScrollReveal delay={100}>
  <section style={{ backgroundColor: '#1a1814', minHeight: '600px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>
      <div style={{
        padding: '6rem 4rem',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <p style={{
          fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
        }}>What do you say</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.5rem, 4vw, 4rem)',
          fontWeight: '400', fontStyle: 'italic',
          color: '#fdfaf5', lineHeight: '1.1', marginBottom: '2rem',
        }}>We make it unforgettable</h2>
        <p style={{
          fontSize: '1rem', lineHeight: '1.85',
          color: 'rgba(253,250,245,0.6)', marginBottom: '1.5rem',
        }}>
          Your guests will remember the food, the flowers, the venue. But what they will truly never forget is how the room felt when Ethan started playing. That stillness. That electricity. That moment when everyone collectively stops and just listens.
        </p>
        <p style={{
          fontSize: '1rem', lineHeight: '1.85',
          color: 'rgba(253,250,245,0.6)', marginBottom: '2.5rem',
        }}>
          That is what Ethan delivers at every single event. Not just music. A moment.
        </p>
        <Link href="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
          Let's Connect
        </Link>
      </div>
      <div style={{
        backgroundImage: 'url(/images/ethanincar.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        minHeight: '500px',
      }} />
    </div>
  </section>
</ScrollReveal>

      </main>
      <Footer />
    </>
  )
}