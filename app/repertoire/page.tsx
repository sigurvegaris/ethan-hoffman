'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const genreRepertoire = [
  {
    genre: 'Pop & Top 40',
    songs: [
      { song: '10,000 Hours', artist: 'Dan + Shay & Justin Bieber' },
      { song: 'All of Me', artist: 'John Legend' },
      { song: 'As It Was', artist: 'Harry Styles' },
      { song: 'Better Now', artist: 'Post Malone' },
      { song: 'Birds of a Feather', artist: 'Billie Eilish' },
      { song: 'Dive', artist: 'Ed Sheeran' },
      { song: 'Espresso', artist: 'Sabrina Carpenter' },
      { song: 'Happy', artist: 'Pharrell Williams' },
      { song: "I'm Yours", artist: 'Jason Mraz' },
      { song: 'Location', artist: 'Khalid' },
      { song: 'Lose Control', artist: 'Teddy Swims' },
      { song: 'Señorita', artist: 'Shawn Mendes & Camila Cabello' },
      { song: 'Snooze', artist: 'SZA' },
      { song: 'Stay With Me', artist: 'Sam Smith' },
      { song: 'The A Team', artist: 'Ed Sheeran' },
      { song: 'Thinking Out Loud', artist: 'Ed Sheeran' },
      { song: 'Too Sweet', artist: 'Hozier' },
    ],
  },
  {
    genre: 'Soul, R&B & Neo-Soul',
    songs: [
      { song: 'Because of You', artist: 'Ne-Yo' },
      { song: 'Best Part', artist: 'Daniel Caesar' },
      { song: 'Beyond', artist: 'Leon Bridges' },
      { song: 'Can I Call You Rose?', artist: 'Thee Sacred Souls' },
      { song: 'Can We Talk', artist: 'Tevin Campbell' },
      { song: "Can't Take My Eyes Off of You", artist: 'Lauryn Hill' },
      { song: 'Coming Home', artist: 'Leon Bridges' },
      { song: 'Easily', artist: 'Bruno Major' },
      { song: 'Ex-Factor', artist: 'Lauryn Hill' },
      { song: 'Falling Behind', artist: 'Laufey' },
      { song: 'Get You', artist: 'Daniel Caesar & Kali Uchis' },
      { song: 'Human Nature', artist: 'Michael Jackson' },
      { song: "If I Ain't Got You", artist: 'Alicia Keys' },
      { song: 'Japanese Denim', artist: 'Daniel Caesar' },
      { song: 'Let Me Love You', artist: 'Mario' },
      { song: 'Lovely Day', artist: 'Bill Withers' },
      { song: 'Never Too Much', artist: 'Luther Vandross' },
      { song: 'Ordinary People', artist: 'John Legend' },
      { song: 'Pink and White', artist: 'Frank Ocean' },
      { song: 'Redbone', artist: 'Childish Gambino' },
      { song: 'River', artist: 'Leon Bridges' },
      { song: 'So Sick', artist: 'Ne-Yo' },
      { song: 'The Way You Make Me Feel', artist: 'Michael Jackson' },
      { song: 'Unaware', artist: 'Allen Stone' },
      { song: "What You Won't Do for Love", artist: 'Bobby Caldwell' },
    ],
  },
  {
    genre: 'Classic Soul, Motown & Funk',
    songs: [
      { song: "Ain't No Sunshine", artist: 'Bill Withers' },
      { song: 'As', artist: 'Stevie Wonder' },
      { song: 'Crazy', artist: 'Gnarls Barkley' },
      { song: 'Doo Wop (That Thing)', artist: 'Lauryn Hill' },
      { song: 'Easy', artist: 'The Commodores' },
      { song: 'How Sweet It Is', artist: 'James Taylor' },
      { song: "Isn't She Lovely", artist: 'Stevie Wonder' },
      { song: "It Ain't Over 'Til It's Over", artist: 'Lenny Kravitz' },
      { song: 'Just the Two of Us', artist: 'Bill Withers' },
      { song: 'Lean on Me', artist: 'Bill Withers' },
      { song: "Master Blaster (Jammin')", artist: 'Stevie Wonder' },
      { song: 'September', artist: 'Earth, Wind & Fire' },
      { song: 'Sexual Healing', artist: 'Marvin Gaye' },
      { song: 'Superstition', artist: 'Stevie Wonder' },
      { song: 'Treasure', artist: 'Bruno Mars' },
      { song: 'Valerie', artist: 'Amy Winehouse' },
      { song: 'Wait for the Moment', artist: 'Vulfpeck' },
      { song: "What's Going On", artist: 'Marvin Gaye' },
    ],
  },
  {
    genre: 'Jazz Standards & Crooner',
    songs: [
      { song: 'At Last', artist: 'Etta James' },
      { song: "Don't Know Why", artist: 'Norah Jones' },
      { song: "Don't Worry, Be Happy", artist: 'Bobby McFerrin' },
      { song: 'Fly Me to the Moon', artist: 'Frank Sinatra' },
      { song: 'Hallelujah', artist: 'Leonard Cohen' },
      { song: 'Kiss From a Rose', artist: 'Seal' },
      { song: 'L-O-V-E', artist: 'Nat King Cole' },
      { song: 'What a Wonderful World', artist: 'Louis Armstrong' },
      { song: "You've Got a Friend in Me", artist: 'Randy Newman' },
    ],
  },
  {
    genre: 'Rock, Alternative & Classic Hits',
    songs: [
      { song: 'Africa', artist: 'Toto' },
      { song: 'Blackbird', artist: 'The Beatles' },
      { song: 'Drops of Jupiter', artist: 'Train' },
      { song: 'Everybody Wants to Rule the World', artist: 'Tears for Fears' },
      { song: "Free Fallin'", artist: 'John Mayer' },
      { song: 'Gravity', artist: 'John Mayer' },
      { song: 'Imagine', artist: 'John Lennon' },
      { song: 'Let It Be', artist: 'The Beatles' },
      { song: 'Roxanne', artist: 'The Police' },
      { song: 'Take It Easy', artist: 'Eagles' },
      { song: 'Tiny Dancer', artist: 'Elton John' },
      { song: 'Vienna', artist: 'Billy Joel' },
      { song: 'Wonderwall', artist: 'Oasis' },
    ],
  },
  {
    genre: 'Country, Folk, Acoustic & Reggae',
    songs: [
      { song: 'Banana Pancakes', artist: 'Jack Johnson' },
      { song: 'Beautiful Crazy', artist: 'Luke Combs' },
      { song: 'Better Together', artist: 'Jack Johnson' },
      { song: 'Fast Car', artist: 'Tracy Chapman' },
      { song: 'In Your Atmosphere', artist: 'John Mayer' },
      { song: 'Is This Love', artist: 'Bob Marley' },
      { song: "Jammin'", artist: 'Bob Marley' },
      { song: 'Riptide', artist: 'Vance Joy' },
      { song: 'Slow Dancing in a Burning Room', artist: 'John Mayer' },
      { song: 'Something in the Orange', artist: 'Zach Bryan' },
      { song: 'Stick Season', artist: 'Noah Kahan' },
      { song: 'Tennessee Whiskey', artist: 'Chris Stapleton' },
      { song: 'Three Little Birds', artist: 'Bob Marley' },
      { song: 'Whiskey and You', artist: 'Chris Stapleton' },
    ],
  },
]

interface SongItemProps {
  song: string
  artist: string
}

interface GenreSectionProps {
  genre: string
  songs: SongItemProps[]
}

function SongItem({ song, artist }: SongItemProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <span style={{ fontSize: '0.95rem', color: '#1a1814', lineHeight: '1.5' }}>{song}</span>
      <span style={{ color: 'rgba(26,24,20,0.25)', fontSize: '0.8rem', flexShrink: 0 }}>—</span>
      <span style={{ fontSize: '0.9rem', color: '#6b6460', lineHeight: '1.5' }}>{artist}</span>
    </div>
  )
}

function GenreSection({ genre, songs }: GenreSectionProps) {
  const half = Math.ceil(songs.length / 2)
  const columns = [songs.slice(0, half), songs.slice(half)]

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <p
        style={{
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c4622d',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid rgba(196,98,45,0.2)',
        }}
      >
        {genre}
      </p>

      <div className="repertoire-song-grid">
        {columns.map((col, i) => (
          <div key={i}>
            {col.map((s, j) => (
              <SongItem key={j} {...s} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Repertoire() {
  return (
    <>
      <Navbar />

      <style>{`
        .repertoire-page {
          background-color: #f5f0e8;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .repertoire-hero {
          background-color: #1a1814;
          padding: 8rem 0 5rem;
          text-align: center;
        }

        .repertoire-intro {
          background-color: #f5f0e8;
          padding: 2.5rem 0;
        }

        .repertoire-intro-shell {
          width: min(1100px, calc(100% - 3rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 3rem;
          align-items: center;
        }

        .repertoire-list-section {
          background-color: #fdfaf5;
          padding: 3rem 0 5rem;
        }

        .repertoire-list-shell {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
        }

        .repertoire-song-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 3rem;
        }

        .repertoire-cta {
          text-align: center;
          padding: 4rem 3rem;
          background-color: #1a1814;
        }

        @media (max-width: 900px) {
          .repertoire-intro-shell {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .repertoire-song-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        @media (max-width: 768px) {
          .repertoire-hero {
            padding: 7rem 0 3rem;
          }

          .repertoire-intro {
            padding: 2rem 0;
          }

          .repertoire-intro-shell,
          .repertoire-list-shell {
            width: min(1200px, calc(100% - 2rem));
          }

          .repertoire-list-section {
            padding: 2.5rem 0 4rem;
          }

          .repertoire-cta {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .repertoire-hero {
            padding: 6.5rem 0 2.5rem;
          }

          .repertoire-intro-shell,
          .repertoire-list-shell {
            width: min(1200px, calc(100% - 1.5rem));
          }
        }
      `}</style>

      <main className="repertoire-page">
        <div className="repertoire-hero">
          <div className="container">
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#c4622d',
                marginBottom: '1rem',
              }}
            >
              Song List
            </p>

            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: '400',
                fontStyle: 'italic',
                color: '#fdfaf5',
                marginBottom: '1rem',
              }}
            >
              Repertoire
            </h1>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(253,250,245,0.4)',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: '1.8',
              }}
            >
              100+ songs across six genres. Soul, Pop, Classics, Jazz, Rock, and Reggae. Don&apos;t see your song? Ethan takes requests and can learn songs for your event.
            </p>
          </div>
        </div>

        <div className="repertoire-intro">
          <div className="repertoire-intro-shell">
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '0.75rem' }}>
                About the Setlist
              </p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: '600', color: '#1a1814', lineHeight: '1.2', marginBottom: '0.75rem' }}>
                Every arrangement is built from scratch
              </h2>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#6b6460', marginBottom: '0.5rem' }}>
                Ethan performs with a live looping station, layering beatbox, bass lines, harmonies, and textures in real time — built on the spot, every single time.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#6b6460' }}>
                Don&apos;t see a song you love? Ethan regularly learns custom songs for events. Just ask.
              </p>
            </div>

            <div style={{ overflow: 'hidden', aspectRatio: '16 / 7', borderRadius: '2px' }}>
              <img
                src="/images/ethanfighton.jpg"
                alt="Ethan Hoffman performing"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'grayscale(20%)' }}
              />
            </div>
          </div>
        </div>

        <div className="repertoire-list-section">
          <div className="repertoire-list-shell">
            <div style={{ marginBottom: '2rem' }}>
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#6b6460',
                  textAlign: 'center',
                  marginBottom: '2.5rem',
                }}
              >
                Performance Repertoire by Genre
              </p>

              {genreRepertoire.map((section, i) => (
                <GenreSection key={i} genre={section.genre} songs={section.songs} />
              ))}
            </div>

            <div className="repertoire-cta">
              <p
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.6rem',
                  color: '#fdfaf5',
                  marginBottom: '0.75rem',
                }}
              >
                Don&apos;t see your song?
              </p>

              <p style={{ fontSize: '0.9rem', color: 'rgba(253,250,245,0.5)', marginBottom: '2rem' }}>
                Ethan learns custom songs for weddings and special events.
              </p>

              <Link href="/contact" className="btn-primary">
                Request a Song
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}