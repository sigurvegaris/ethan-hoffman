'use client'
import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const comparisons = [
    'Billy Joel', 'Ed Sheeran', 'Frank Sinatra', 'Jack Johnson',
    'John Mayer', 'Justin Timberlake', 'Marvin Gaye', 'Mac Ayres', 'Stevie Wonder',
  ]

  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return
    let pos = 0
    const speed = 0.4
    const step = () => {
      pos -= speed
      if (Math.abs(pos) >= ticker.scrollWidth / 2) pos = 0
      ticker.style.transform = `translateX(${pos}px)`
      requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh' }}>

        {/* HEADER */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem' }}>
          <div className="container">
            <p style={{
              fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem',
            }}>About Ethan</p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600', color: '#fdfaf5', lineHeight: '1.1',
            }}>
              A Voice Built on Truth,<br />
              <em style={{ fontWeight: '400' }}>A Career Built on Stage</em>
            </h1>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="container" style={{ padding: '6rem 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '6rem', alignItems: 'start',
          }}>

            {/* Left — Photo */}
            <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
              <img
                src="/images/ethanalbumcover.png"
                alt="Ethan Hoffman"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                }}
              />
            </div>

            {/* Right — Copy (Ethan to rewrite in his own voice) */}
            <div>
              {/*
                ── ETHAN: Replace each paragraph below with your own words.
                   Keep roughly the same length per paragraph.
                   Do NOT change the surrounding div or style tags.
              */}

              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.5rem' }}>
                Ever since stepping foot on a stage at twelve years old, Ethan knew it was what he was meant to do. Performing has always felt natural, and over the years he has grown into a vocalist whose sound blends soul, pop, and acoustic grooves into a warm, modern style that feels both familiar and fresh.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.5rem' }}>
                It started with a flyer at Starbucks. Not a grand origin story, just a kid who randomly walked into an audition and realized he was actually pretty good at this. Four musical theater productions later, something had clicked. Performing wasn't a hobby. It was just him.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.5rem' }}>
                Fast forward to a USC comedy show, a spontaneous performance, and a video that hit 140 million views before he really knew what was happening. That was the nudge he needed. Since then he has played 300+ gigs across LA and beyond: hotel lobbies, private estates, sold-out nights at The Wiltern. Not bad for a Palos Verdes kid who found his calling on a coffee shop bulletin board.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '1.5rem' }}>
                On stage, Ethan performs with a looping station, building full arrangements live by layering beatbox, bass lines, harmony stacks, and additional textures, creating a full band experience using only his voice. His sound lives somewhere between Stevie Wonder and Jason Mraz: soulful, vocalist-heavy, and built around the moment. He improvises, he reads rooms, he pulls people in.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: '#6b6460', marginBottom: '3rem' }}>
                His originals go places too: California golden hours, a stint in India with no money and no plan, the kind of experiences that only work as songs when they are completely honest. He will tell you his voice does not work any other way.
              </p>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(196,168,130,0.3)', paddingTop: '2rem' }}>
                <p style={{
                  fontSize: '0.65rem', fontWeight: '600',
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: '#c4622d', marginBottom: '1rem',
                }}>Quick Facts</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { label: 'Hometown', value: 'Palos Verdes, CA' },
                    { label: 'Based In', value: 'Los Angeles, CA' },
                    { label: 'Education', value: 'USC Graduate' },
                    { label: 'Speciality', value: 'Live Looping' },
                  ].map((f, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a1814', marginBottom: '0.2rem' }}>{f.label}</p>
                      <p style={{ fontSize: '0.9rem', color: '#6b6460' }}>{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ARTIST COMPARISONS TICKER */}
        <div style={{
          backgroundColor: '#1a1814',
          padding: '5rem 0',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px',
            background: 'linear-gradient(to right, #1a1814, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px',
            background: 'linear-gradient(to left, #1a1814, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />

          <p style={{
            textAlign: 'center',
            fontSize: '0.65rem', fontWeight: '600',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#c4622d', marginBottom: '2.5rem',
          }}>Artists People Compare Him To</p>

          <div style={{ overflow: 'hidden', width: '100%' }}>
            <div ref={tickerRef} style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              willChange: 'transform',
              width: 'max-content',
            }}>
              {[...comparisons, ...comparisons, ...comparisons, ...comparisons].map((name, i) => (
                <div key={i} style={{
                  display: 'inline-flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0 1.5rem',
                }}>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                    fontWeight: '400',
                    color: i % 2 === 0 ? 'rgba(253,250,245,0.15)' : 'rgba(253,250,245,0.6)',
                    fontStyle: i % 3 === 0 ? 'italic' : 'normal',
                    whiteSpace: 'nowrap',
                  }}>{name}</span>
                  <span style={{ color: '#c4622d', fontSize: '0.5rem', flexShrink: 0 }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div style={{
          position: 'relative',
          backgroundColor: '#f5f0e8',
          padding: '7rem 0',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(8rem, 20vw, 18rem)',
            fontWeight: '700',
            color: 'rgba(196,168,130,0.08)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: '1',
          }}>300+ 140M+ 2</div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
              {[
                { number: '300+', label: 'Performances', sub: 'across LA and beyond' },
                { number: '140M+', label: 'Video Views', sub: 'and counting' },
                { number: '2', label: 'Sold-Out Wiltern Shows', sub: '2,000+ capacity each' },
              ].map((stat, i) => (
                <div key={i} style={{
                  textAlign: 'center', padding: '3rem 2rem',
                  borderLeft: i > 0 ? '1px solid rgba(196,168,130,0.3)' : 'none',
                }}>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: '600', color: '#c4622d',
                    lineHeight: '1', marginBottom: '0.5rem',
                  }}>{stat.number}</p>
                  <p style={{
                    fontSize: '0.75rem', fontWeight: '600',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: '#1a1814', marginBottom: '0.4rem',
                  }}>{stat.label}</p>
                  <p style={{
                    fontSize: '0.8rem', color: '#6b6460',
                    fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif',
                  }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    

      </main>
      <Footer />
    </>
  )
}