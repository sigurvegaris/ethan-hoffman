import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const songs = {
  "Soul / R&B / Neo-Soul": [
    "Ain't No Sunshine - Bill Withers",
    "As - Stevie Wonder",
    "Because of You - Ne-Yo",
    "Best Part - Daniel Caesar",
    "Beyond - Leon Bridges",
    "Can I Call You Rose? - Thee Sacred Souls",
    "Can't Take My Eyes Off of You - Lauryn Hill",
    "Coming Home - Leon Bridges",
    "Doo Wop (That Thing) - Lauryn Hill",
    "Easy - The Commodores",
    "Easily - Bruno Major",
    "Ex-Factor - Lauryn Hill",
    "Get You - Daniel Caesar and Kali Uchis",
    "Higher Ground - Stevie Wonder",
    "Human Nature - Michael Jackson",
    "If I Ain't Got You - Alicia Keys",
    "Isn't She Lovely - Stevie Wonder",
    "Just the Two of Us - Bill Withers",
    "Lean on Me - Bill Withers",
    "Let Me Love You - Mario",
    "Lovely Day - Bill Withers",
    "Master Blaster (Jammin') - Stevie Wonder",
    "Never Too Much - Luther Vandross",
    "Ordinary People - John Legend",
    "River - Leon Bridges",
    "September - Earth, Wind and Fire",
    "Sexual Healing - Marvin Gaye",
    "Sir Duke - Stevie Wonder",
    "Snooze - SZA",
    "So Sick - Ne-Yo",
    "Stand By Me - Ben E. King",
    "Superstition - Stevie Wonder",
    "The Way You Make Me Feel - Michael Jackson",
    "What You Won't Do for Love - Bobby Caldwell",
    "What's Going On - Marvin Gaye",
  ],
  "Pop": [
    "10,000 Hours - Dan + Shay and Justin Bieber",
    "All of Me - John Legend",
    "As It Was - Harry Styles",
    "Better Now - Post Malone",
    "Birds of a Feather - Billie Eilish",
    "Dive - Ed Sheeran",
    "Espresso - Sabrina Carpenter",
    "Happy - Pharrell Williams",
    "Location - Khalid",
    "Lose Control - Teddy Swims",
    "Señorita - Shawn Mendes and Camila Cabello",
    "Stay With Me - Sam Smith",
    "Thinking Out Loud - Ed Sheeran",
    "Treasure - Bruno Mars",
  ],
  "Indie / Alternative": [
    "Crazy - Gnarls Barkley",
    "Falling Behind - Laufey",
    "Pink - Frank Ocean",
    "Redbone - Childish Gambino",
    "Riptide - Vance Joy",
    "Stick Season - Noah Kahan",
    "Too Sweet - Hozier",
    "Unaware - Allen Stone",
    "Wait for the Moment - Vulfpeck",
  ],
  "Singer-Songwriter / Acoustic": [
    "Banana Pancakes - Jack Johnson",
    "Better Together - Jack Johnson",
    "Blackbird - The Beatles",
    "Don't Know Why - Norah Jones",
    "Free Fallin' - John Mayer",
    "Gravity - John Mayer",
    "Hallelujah - Leonard Cohen",
    "How Sweet It Is (To Be Loved by You) - James Taylor",
    "Imagine - John Lennon",
    "In Your Atmosphere - John Mayer",
    "I'm Yours - Jason Mraz",
    "Let It Be - The Beatles",
    "Slow Dancing in a Burning Room - John Mayer",
    "The A Team - Ed Sheeran",
    "What a Wonderful World - Louis Armstrong",
    "You've Got a Friend in Me - Randy Newman",
  ],
  "Rock / Classic Rock": [
    "Africa - Toto",
    "Drops of Jupiter - Train",
    "Everybody Wants to Rule the World - Tears for Fears",
    "Kiss From a Rose - Seal",
    "Roxanne - The Police",
    "Take It Easy - Eagles",
    "Tiny Dancer - Elton John",
    "Vienna - Billy Joel",
    "Wonderwall - Oasis",
  ],
  "Reggae": [
    "Buffalo Soldier - Bob Marley",
    "Could You Be Loved - Bob Marley",
    "Is This Love - Bob Marley",
    "Jammin' - Bob Marley",
    "Three Little Birds - Bob Marley",
  ],
  "Country": [
    "Beautiful Crazy - Luke Combs",
    "Fast Car - Tracy Chapman",
    "Something in the Orange - Zach Bryan",
    "Sweet Home Alabama - Lynyrd Skynyrd",
    "Tennessee Whiskey - Chris Stapleton",
    "Whiskey and You - Chris Stapleton",
  ],
}

export default function Repertoire() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh', paddingTop: '6rem' }}>

        {/* Header */}
        <div style={{
          backgroundColor: '#1a1814',
          padding: '5rem 0',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: '600',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#c4622d',
            marginBottom: '1rem',
          }}>Song List</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '600',
            color: '#fdfaf5',
            marginBottom: '1rem',
          }}>Repertoire</h1>
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(253,250,245,0.5)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            100+ songs spanning soul, pop, classics, and originals. Don't see a song you love? Ethan takes requests and can learn songs for your event.
          </p>
        </div>

        {/* Song Categories */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {Object.entries(songs).map(([category, songList]) => (
              <div key={category} style={{
                backgroundColor: '#fff',
                padding: '2rem',
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
              }}>
                <p style={{
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#c4622d',
                  marginBottom: '1.2rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(196,168,130,0.3)',
                }}>{category}</p>
                {songList.map((song, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.6rem',
                  }}>
                    <div style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: '#c4a882',
                      flexShrink: 0,
                    }} />
                    <p style={{
                      fontSize: '0.82rem',
                      color: '#2d2926',
                      lineHeight: '1.5',
                    }}>{song}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Looping Note */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem 3rem',
            backgroundColor: '#2d2926',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#c4622d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.3rem',
            }}>♾</div>
            <div>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                color: '#fdfaf5',
                marginBottom: '0.3rem',
              }}>More than just a cover singer</p>
              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(253,250,245,0.5)',
                lineHeight: '1.7',
              }}>
                Ethan performs with a live looping station, building full arrangements on the spot by layering beatbox, bass lines, harmonies, and textures. Audiences love it. You get a full band experience from one artist.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '3rem',
            backgroundColor: '#1a1814',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.4rem',
              color: '#fdfaf5',
              marginBottom: '0.75rem',
            }}>Don't see your song?</p>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(253,250,245,0.5)',
              marginBottom: '2rem',
            }}>Ethan learns custom songs for weddings and special events.</p>
            <a href="/#contact" className="btn-primary">Request a Song</a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}