'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const generalRepertoire = [
  { song: 'A Thousand Years', artist: 'Christina Perri' },
  { song: 'All of Me', artist: 'John Legend' },
  { song: 'As It Was', artist: 'Harry Styles' },
  { song: 'Attention', artist: 'Charlie Puth' },
  { song: 'Bad Guy', artist: 'Billie Eilish' },
  { song: 'Banana Pancakes', artist: 'Jack Johnson' },
  { song: 'Beautiful Crazy', artist: 'Luke Combs' },
  { song: 'Best Part', artist: 'Daniel Caesar' },
  { song: 'Better Together', artist: 'Jack Johnson' },
  { song: 'Birds of a Feather', artist: 'Billie Eilish' },
  { song: 'Blackbird', artist: 'The Beatles' },
  { song: "Can't Help Falling", artist: 'Elvis Presley' },
  { song: "Can't Stop the Feeling", artist: 'Justin Timberlake' },
  { song: 'Closer', artist: 'The Chainsmokers' },
  { song: 'Coming Home', artist: 'Leon Bridges' },
  { song: 'Cruel Summer', artist: 'Taylor Swift' },
  { song: "Don't Start Now", artist: 'Dua Lipa' },
  { song: 'Dive', artist: 'Ed Sheeran' },
  { song: 'Easy', artist: 'The Commodores' },
  { song: 'Espresso', artist: 'Sabrina Carpenter' },
  { song: 'Everything', artist: 'Michael Buble' },
  { song: 'Falling Behind', artist: 'Laufey' },
  { song: "Free Fallin'", artist: 'John Mayer' },
  { song: 'Get You', artist: 'Daniel Caesar' },
  { song: 'Golden Hour', artist: 'JVKE' },
  { song: 'Gravity', artist: 'John Mayer' },
  { song: 'Hallelujah', artist: 'Leonard Cohen' },
  { song: 'Happy', artist: 'Pharrell Williams' },
  { song: 'Harvest Moon', artist: 'Neil Young' },
  { song: 'Here Comes the Sun', artist: 'The Beatles' },
  { song: 'Higher Ground', artist: 'Stevie Wonder' },
  { song: 'Human Nature', artist: 'Michael Jackson' },
  { song: 'I Want You Back', artist: 'The Jackson 5' },
  { song: "If I Ain't Got You", artist: 'Alicia Keys' },
  { song: 'Imagine', artist: 'John Lennon' },
  { song: "I'm Yours", artist: 'Jason Mraz' },
  { song: "Isn't She Lovely", artist: 'Stevie Wonder' },
  { song: 'Just the Way You Are', artist: 'Bruno Mars' },
  { song: 'Kiss From a Rose', artist: 'Seal' },
  { song: 'Lean on Me', artist: 'Bill Withers' },
  { song: 'Location', artist: 'Khalid' },
  { song: 'Lose Control', artist: 'Teddy Swims' },
  { song: 'Love Yourself', artist: 'Justin Bieber' },
  { song: 'Lover', artist: 'Taylor Swift' },
  { song: 'Lovely Day', artist: 'Bill Withers' },
  { song: 'Marry Me', artist: 'Train' },
  { song: 'Marry You', artist: 'Bruno Mars' },
  { song: 'Mr. Brightside', artist: 'The Killers' },
  { song: 'Never Too Much', artist: 'Luther Vandross' },
  { song: 'Ordinary People', artist: 'John Legend' },
  { song: 'Perfect', artist: 'Ed Sheeran' },
  { song: 'Redbone', artist: 'Childish Gambino' },
  { song: 'Rewrite the Stars', artist: 'The Greatest Showman' },
  { song: 'Riptide', artist: 'Vance Joy' },
  { song: 'River', artist: 'Leon Bridges' },
  { song: 'Roxanne', artist: 'The Police' },
  { song: 'September', artist: 'Earth, Wind & Fire' },
  { song: 'Señorita', artist: 'Shawn Mendes' },
  { song: 'Sexual Healing', artist: 'Marvin Gaye' },
  { song: 'Slow Dancing in a Burning Room', artist: 'John Mayer' },
  { song: 'Snooze', artist: 'SZA' },
  { song: 'Stand By Me', artist: 'Ben E. King' },
  { song: 'Stay With Me', artist: 'Sam Smith' },
  { song: 'Stick Season', artist: 'Noah Kahan' },
  { song: 'Superstition', artist: 'Stevie Wonder' },
  { song: 'Tennessee Whiskey', artist: 'Chris Stapleton' },
  { song: 'The A Team', artist: 'Ed Sheeran' },
  { song: 'Thinking Out Loud', artist: 'Ed Sheeran' },
  { song: 'Tiny Dancer', artist: 'Elton John' },
  { song: 'Too Sweet', artist: 'Hozier' },
  { song: 'Treasure', artist: 'Bruno Mars' },
  { song: 'Unaware', artist: 'Allen Stone' },
  { song: 'Vienna', artist: 'Billy Joel' },
  { song: 'What a Wonderful World', artist: 'Louis Armstrong' },
  { song: 'Wonderwall', artist: 'Oasis' },
  { song: "You've Got a Friend in Me", artist: 'Randy Newman' },
]

const otherSongs = [
  { song: 'Agape', artist: "Bear's Den" },
  { song: 'Africa', artist: 'Toto' },
  { song: 'All We Know', artist: 'The Chainsmokers' },
  { song: 'Angela', artist: 'The Lumineers' },
  { song: 'Buffalo Soldier', artist: 'Bob Marley' },
  { song: 'Call Me Maybe', artist: 'Carly Rae Jepsen' },
  { song: 'Could You Be Loved', artist: 'Bob Marley' },
  { song: 'Crazy', artist: 'Gnarls Barkley' },
  { song: 'Drops of Jupiter', artist: 'Train' },
  { song: 'Fast Car', artist: 'Tracy Chapman' },
  { song: 'Fire', artist: '3LAU' },
  { song: 'Forever Like That', artist: 'Ben Rector' },
  { song: "Friday I'm in Love", artist: 'The Cure' },
  { song: 'Hamilton Medley', artist: 'Hamilton Musical' },
  { song: 'Hava Nagila', artist: 'Traditional' },
  { song: 'Is This Love', artist: 'Bob Marley' },
  { song: "Jammin'", artist: 'Bob Marley' },
  { song: 'Magic', artist: 'Coldplay' },
  { song: 'Marry Me', artist: 'Jason Derulo' },
  { song: 'Obsession', artist: 'Jon Bellion' },
  { song: 'Safe and Sound', artist: 'Capital Cities' },
  { song: 'Shape of You', artist: 'Ed Sheeran' },
  { song: 'Somebody', artist: 'Depeche Mode' },
  { song: 'Something in the Orange', artist: 'Zach Bryan' },
  { song: 'Stolen', artist: 'Dashboard Confessional' },
  { song: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd' },
  { song: 'Take It Easy', artist: 'Eagles' },
  { song: 'Take The World', artist: 'Johnnyswim' },
  { song: 'Three Little Birds', artist: 'Bob Marley' },
  { song: 'Whiskey and You', artist: 'Chris Stapleton' },
]

const christmasSongs = [
  { song: 'All I Want For Christmas Is You', artist: 'Mariah Carey' },
  { song: "Baby It's Cold Outside", artist: 'Frank Loesser' },
  { song: 'Carol of the Bells', artist: 'Traditional' },
  { song: 'O Holy Night', artist: 'Traditional' },
  { song: 'Santa Tell Me', artist: 'Ariana Grande' },
]

const disneySongs = [
  { song: 'A Whole New World', artist: 'Aladdin' },
  { song: 'Can You Feel the Love Tonight', artist: 'Lion King' },
  { song: 'Colors of the Wind', artist: 'Pocahontas' },
  { song: "How Far I'll Go", artist: 'Moana' },
  { song: 'I Lava You', artist: 'Lava' },
  { song: 'I See The Light', artist: 'Tangled' },
  { song: 'Reflection', artist: 'Mulan' },
  { song: 'Remember Me', artist: 'Coco' },
  { song: 'Tale as Old as Time', artist: 'Beauty and the Beast' },
  { song: 'When You Wish Upon A Star', artist: 'Pinocchio' },
  { song: "You've Got A Friend in Me", artist: 'Toy Story' },
]

function SongItem({ song, artist }: { song: string; artist: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.6rem' }}>
      <span style={{ fontSize: '0.82rem', color: 'rgba(26,24,20,0.4)', lineHeight: '1.5' }}>{song}</span>
      <span style={{ color: 'rgba(26,24,20,0.2)', fontSize: '0.7rem', flexShrink: 0 }}>|</span>
      <span style={{ fontSize: '0.82rem', color: '#1a1814', fontWeight: '600', lineHeight: '1.5' }}>{artist}</span>
    </div>
  )
}

function SongColumn({ songs }: { songs: { song: string; artist: string }[] }) {
  const third = Math.ceil(songs.length / 3)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 3rem' }}>
      {[songs.slice(0, third), songs.slice(third, third * 2), songs.slice(third * 2)].map((col, i) => (
        <div key={i}>{col.map((s, j) => <SongItem key={j} {...s} />)}</div>
      ))}
    </div>
  )
}

function TwoColSongs({ songs }: { songs: { song: string; artist: string }[] }) {
  const half = Math.ceil(songs.length / 2)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 3rem' }}>
      {[songs.slice(0, half), songs.slice(half)].map((col, i) => (
        <div key={i}>{col.map((s, j) => <SongItem key={j} {...s} />)}</div>
      ))}
    </div>
  )
}

export default function Repertoire() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ backgroundColor: '#1a1814', padding: '8rem 0 5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem' }}>Song List</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: '400', fontStyle: 'italic',
            color: '#fdfaf5', marginBottom: '1rem',
          }}>Repertoire</h1>
          <p style={{ fontSize: '0.9rem', color: 'rgba(253,250,245,0.4)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.8' }}>
            100+ songs spanning soul, pop, classics, and originals. Don't see your song? Ethan takes requests and can learn songs for your event.
          </p>
        </div>

        {/* Intro Section */}
        <div style={{ backgroundColor: '#f5f0e8', padding: '6rem 0' }}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto', padding: '0 2rem',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '5rem', alignItems: 'center',
          }}>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.5rem' }}>About the Setlist</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: '600', color: '#1a1814',
                lineHeight: '1.2', marginBottom: '1.5rem',
              }}>Every arrangement is built from scratch</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: '#6b6460', marginBottom: '1.5rem' }}>
                Ethan performs with a live looping station, layering beatbox, bass lines, harmonies, and textures in real time. Each song is arranged specifically for live performance, so what you hear is built on the spot, every single time.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.9', color: '#6b6460' }}>
                Don't see a song you love? Ethan regularly learns custom songs for weddings and special events. Just ask.
              </p>
            </div>
            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src="/images/ethanfighton.png"
                alt="Ethan Hoffman performing"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'grayscale(20%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Song Lists */}
        <div style={{ backgroundColor: '#fdfaf5', padding: '6rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

            {/* General Repertoire */}
            <div style={{ marginBottom: '5rem' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6460', textAlign: 'center', marginBottom: '3rem' }}>General Performance Repertoire</p>
              <SongColumn songs={generalRepertoire} />
            </div>

            {/* Other + Disney */}
            <div style={{ borderTop: '1px solid rgba(196,168,130,0.3)', paddingTop: '4rem', marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6460', textAlign: 'center', marginBottom: '2rem' }}>Other</p>
                <TwoColSongs songs={otherSongs} />
              </div>
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6460', textAlign: 'center', marginBottom: '2rem' }}>Disney & Pixar</p>
                <TwoColSongs songs={disneySongs} />
              </div>
            </div>

            {/* Christmas */}
            <div style={{ borderTop: '1px solid rgba(196,168,130,0.3)', paddingTop: '4rem', marginBottom: '5rem' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6460', textAlign: 'center', marginBottom: '2rem' }}>Christmas</p>
              <TwoColSongs songs={christmasSongs} />
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', padding: '4rem 3rem', backgroundColor: '#1a1814' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#fdfaf5', marginBottom: '0.75rem' }}>Don't see your song?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(253,250,245,0.5)', marginBottom: '2rem' }}>Ethan learns custom songs for weddings and special events.</p>
              <a href="/contact" className="btn-primary">Request a Song</a>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}