import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const songs = {
  "Pop & Top 40": [
    "Thinking Out Loud – Ed Sheeran",
    "Can't Help Falling in Love – Elvis Presley",
    "Make You Feel My Love – Adele",
    "All of Me – John Legend",
    "Just the Way You Are – Bruno Mars",
    "Count on Me – Bruno Mars",
    "I'm Yours – Jason Mraz",
    "Lucky – Jason Mraz",
    "Use Somebody – Kings of Leon",
    "Wonderwall – Oasis",
    "Stay With Me – Sam Smith",
    "Fast Car – Tracy Chapman",
    "Shallow – Lady Gaga & Bradley Cooper",
    "A Thousand Years – Christina Perri",
    "Perfect – Ed Sheeran",
  ],
  "Soul & R&B": [
    "Isn't She Lovely – Stevie Wonder",
    "Superstition – Stevie Wonder",
    "Sir Duke – Stevie Wonder",
    "Higher Ground – Stevie Wonder",
    "Let's Stay Together – Al Green",
    "Ain't No Sunshine – Bill Withers",
    "Lean on Me – Bill Withers",
    "Signed, Sealed, Delivered – Stevie Wonder",
    "What's Going On – Marvin Gaye",
    "Sexual Healing – Marvin Gaye",
    "Stand By Me – Ben E. King",
    "Soul Man – Sam & Dave",
    "Respect – Aretha Franklin",
  ],
  "70s & 80s Classics": [
    "Africa – Toto",
    "Don't Stop Believin' – Journey",
    "Sweet Home Alabama – Lynyrd Skynyrd",
    "Brown Eyed Girl – Van Morrison",
    "Here Comes the Sun – The Beatles",
    "Blackbird – The Beatles",
    "Wagon Wheel – Old Crow Medicine Show",
    "Take Me Home, Country Roads – John Denver",
    "Fire and Rain – James Taylor",
    "You've Got a Friend – James Taylor",
    "Jolene – Dolly Parton",
    "Roxanne – The Police",
    "Every Breath You Take – The Police",
    "Heroes – David Bowie",
  ],
  "Modern & Indie": [
    "Holocene – Bon Iver",
    "Stubborn Love – The Lumineers",
    "Ho Hey – The Lumineers",
    "Home – Edward Sharpe",
    "Budapest – George Ezra",
    "Riptide – Vance Joy",
    "Banana Pancakes – Jack Johnson",
    "Better Together – Jack Johnson",
    "Flake – Jack Johnson",
    "Skinny Love – Bon Iver",
    "Skinny Love – Birdy",
    "Let Her Go – Passenger",
    "Photograph – Ed Sheeran",
  ],
  "Original Music": [
    "California Golden – Ethan Hoffman",
    "No Bed – Ethan Hoffman",
    "Coming Home – Ethan Hoffman",
    "One More Time – Ethan Hoffman",
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

          {/* CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
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