import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { articles } from '../lib/press'
import './about.css'

// Ethan's story, told in chapters. Facts come from his interviews with
// Palos Verdes Pulse and Life on Jupiter, and the earlier site bio.
const chapters = [
  {
    when: 'age 12',
    title: 'A flyer in a Starbucks window',
    body: 'He saw a flyer for Bring It On: The Musical and thought, “I can do that.” He showed up to the audition in a Carolina Panthers jersey, soccer shorts and blue flip-flops while everyone else wore suits and dresses. He landed Twig, the lead who raps, in front of a casting director who had played the same role on Broadway.',
  },
  {
    when: '12 to 14',
    title: 'Blue mohawk, golden shoes',
    body: 'Bring It On, 13 the Musical, Fame, Peter Pan, Grease. He won South Bay Teen Idol, critics called him a “unicorn” and a “sparkler,” and he started writing his own songs. By 14 he knew music was the thing.',
  },
  {
    when: 'high school',
    title: 'A guitar class at a military academy',
    body: 'At the Army and Navy Academy in Carlsbad he learned structure, discipline and leadership. In his senior year a guitar class brought the music back: for the first time he could accompany himself.',
  },
  {
    when: 'usc',
    title: 'Two rock bands and a business degree',
    body: 'At USC’s Marshall School of Business he started two rock bands, released his first originals and wrote songs for students at the Thornton School of Music. He graduated in 2025.',
  },
  {
    when: '2023',
    title: '“What’s your name, bro?”',
    body: 'Front row at a Morgan Jay show, Morgan sang him the question and Ethan sang the answer back so well the room lost it. The clip passed 5 million views in three hours. He went on to open for Morgan at the Wiltern, the Magnolia, the Comedy Store and in Berlin.',
  },
  {
    when: 'now',
    title: 'Just him, the guitar, the voice and the song',
    body: 'His debut EP was recorded live over two nights at Dragonfly Creek Studios in Malibu, with songs he has lived with for nearly four years. The first single, India, is out November 1.',
  },
]

const sounds = ['soul', 'r&b', 'pop', 'funk', 'reggae', 'hip-hop', 'musical theater']
const heroes = ['Michael Jackson', 'Stevie Wonder', 'Bruno Mars', 'John Mayer', 'Bob Marley', 'Eminem', 'Ed Sheeran', 'Jon Batiste', 'Freddie Mercury']

const morePress = [
  { outlet: 'Canvas Rebel', title: 'Meet Ethan Hoffman', url: 'https://canvasrebel.com/meet-ethan-hoffman/' },
  { outlet: 'Gut Instinct Media', title: 'Unveiling the Soul of Ethan Hoffman: Beyond the Viral Fame', url: 'https://medium.com/@gutinstinctmedia/unveiling-the-soul-of-ethan-hoffman-beyond-the-viral-fame-a6ab70904fb3' },
  { outlet: 'Voyage LA', title: 'Daily Inspiration: Meet Ethan Hoffman', url: 'https://voyagela.com/interview/daily-inspiration-meet-ethan-hoffman' },
]

export default function About() {
  const press = [
    ...articles.filter((a) => a.url).map((a) => ({ outlet: a.outlet ?? a.author, title: a.title, url: a.url! })),
    ...morePress,
  ]

  return (
    <>
      <Navbar />
      <main className="ab">
        <header className="ab-hero">
          <div className="ab-wrap ab-hero-grid">
            <div>
              <p className="ab-label">about ethan</p>
              <h1 className="ab-title">“I can <em>do</em> that.”</h1>
              <p className="ab-hand">what 12-year-old ethan thought, staring at a flyer in a starbucks window</p>
              <p className="ab-lede">
                Ethan Hoffman is a 23-year-old singer, songwriter, guitarist and beatboxer from Palos Verdes.
                He has played more than 300 rooms, from the Wiltern to the Lighthouse Café, and he still trusts the
                same instinct that got him on stage the first time.
              </p>
            </div>
            <figure className="ab-polaroid ab-hero-photo">
              <div className="ab-polaroid-img">
                <Image src="/images/ethanincar.webp" alt="Ethan in a vintage car" fill priority sizes="(max-width: 900px) 80vw, 420px" style={{ objectFit: 'cover', objectPosition: 'center 55%' }} />
              </div>
              <figcaption>palos verdes kid</figcaption>
            </figure>
          </div>
        </header>

        <section className="ab-story">
          <div className="ab-wrap">
            <p className="ab-label">how he got here</p>
            <ol className="ab-chapters">
              {chapters.map((c) => (
                <li key={c.title} className="ab-chapter">
                  <span className="ab-when">{c.when}</span>
                  <div>
                    <h2>{c.title}</h2>
                    <p>{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ab-morgan">
          <div className="ab-wrap ab-morgan-grid">
            <figure className="ab-polaroid" style={{ ['--r' as string]: '-2.5deg' }}>
              <div className="ab-polaroid-img"><Image src="/images/ethanhandshakingguy.webp" alt="Ethan with Morgan Jay backstage at the Wiltern" fill sizes="(max-width: 900px) 80vw, 460px" style={{ objectFit: 'cover' }} /></div>
              <figcaption>backstage at the wiltern with morgan</figcaption>
            </figure>
            <figure className="ab-polaroid" style={{ ['--r' as string]: '2deg' }}>
              <div className="ab-polaroid-img"><Image src="/images/ethanthreeguys.webp" alt="Ethan with Morgan Jay and Tofer" fill sizes="(max-width: 900px) 80vw, 460px" style={{ objectFit: 'cover' }} /></div>
              <figcaption>with morgan jay and tofer, morgan&apos;s keys player</figcaption>
            </figure>
          </div>
        </section>

        <section className="ab-unicorn">
          <div className="ab-wrap ab-unicorn-grid">
            <div>
              <p className="ab-label">the unicorn</p>
              <blockquote className="ab-quote">
                “I initially didn’t like it, but now I embrace it. To me, it means being someone who does not fit
                neatly into one mold, socially, musically, or otherwise.”
              </blockquote>
              <p className="ab-cite">ethan, to life on jupiter</p>
            </div>
            <div className="ab-lists">
              <div>
                <h3>what it sounds like</h3>
                <p className="ab-tags">{sounds.map((s) => <span key={s}>{s}</span>)}</p>
              </div>
              <div>
                <h3>who he grew up on</h3>
                <ul>{heroes.map((h) => <li key={h}>{h}</li>)}</ul>
              </div>
              <div>
                <h3>off stage</h3>
                <p className="ab-off">
                  He runs Hoffman Home Tech, so a lot of South Bay seniors know him as the guy who comes over and fixes
                  their iPhones. He posts a 30-second tech tip on Nextdoor every week.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ab-press">
          <div className="ab-wrap">
            <p className="ab-label">read more about him</p>
            <ul className="ab-press-list">
              {press.map((p) => (
                <li key={p.url}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <span className="ab-press-outlet">{p.outlet}</span>
                    <span className="ab-press-title">{p.title}</span>
                    <span className="ab-press-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="ab-cta">
              <Link href="/music" className="ab-btn">hear the new music</Link>
              <Link href="/services" className="ab-btn ab-btn-ghost">book him live</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
