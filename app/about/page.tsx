import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Parallax from './Parallax'
import { articles } from '../lib/press'
import './about.css'

type Photo = { src: string; alt: string; caption: string; pos?: string }

// Ethan's story, told in chapters. Facts come from his interviews with
// Palos Verdes Pulse and Life on Jupiter, and the earlier site bio.
// `layout` decides how each chapter's photographs sit around the text.
const chapters: {
  when: string
  title: string
  body: string
  layout: 'arch-right' | 'tall-left' | 'small-right' | 'pair-left' | 'backstage' | 'studio'
  photos: Photo[]
}[] = [
  {
    when: 'age 12',
    title: 'A flyer in a Starbucks window',
    body: 'He saw a flyer for Bring It On: The Musical and thought, “I can do that.” He showed up to the audition in a Carolina Panthers jersey, soccer shorts and blue flip-flops while everyone else wore suits and dresses. He landed Twig, the lead who raps, in front of a casting director who had played the same role on Broadway.',
    layout: 'arch-right',
    photos: [{ src: '/images/ethanincar.webp', alt: 'Ethan in a vintage car', caption: 'palos verdes kid', pos: 'center 60%' }],
  },
  {
    when: '12 to 14',
    title: 'Blue mohawk, golden shoes',
    body: 'Bring It On, 13 the Musical, Fame, Peter Pan, Grease. He won South Bay Teen Idol, critics called him a “unicorn” and a “sparkler,” and he started writing his own songs. By 14 he knew music was the thing.',
    layout: 'tall-left',
    photos: [{ src: '/images/malibu/grass-shoe.webp', alt: 'Ethan sitting in the grass beneath an oak, tying his shoe', caption: 'under the oak, malibu', pos: 'center 70%' }],
  },
  {
    when: 'high school',
    title: 'A guitar class at a military academy',
    body: 'At the Army and Navy Academy in Carlsbad he learned structure, discipline and leadership. In his senior year a guitar class brought the music back: for the first time he could accompany himself.',
    layout: 'small-right',
    photos: [{ src: '/images/malibu/bench.webp', alt: 'Ethan sitting on a park bench under the trees', caption: 'the bench', pos: 'center 62%' }],
  },
  {
    when: 'usc',
    title: 'Two rock bands and a business degree',
    body: 'At USC’s Marshall School of Business he started two rock bands, released his first originals and wrote songs for students at the Thornton School of Music. He graduated in 2025.',
    layout: 'pair-left',
    photos: [
      { src: '/images/malibu/path-walk.webp', alt: 'Ethan walking down a dirt path lined with sage', caption: 'the long way round', pos: 'center 55%' },
      { src: '/images/malibu/plaid-smile.webp', alt: 'Ethan smiling in a plaid shirt', caption: 'plaid', pos: 'center 52%' },
    ],
  },
  {
    when: '2023',
    title: '“What’s your name, bro?”',
    body: 'Front row at a Morgan Jay show, Morgan sang him the question and Ethan sang the answer back so well the room lost it. The clip passed 5 million views in three hours. He went on to open for Morgan at the Wiltern, the Magnolia, the Comedy Store and in Berlin.',
    layout: 'backstage',
    photos: [
      { src: '/images/ethanhandshakingguy.webp', alt: 'Ethan with Morgan Jay backstage at the Wiltern', caption: 'backstage at the wiltern with morgan' },
      { src: '/images/ethanthreeguys.webp', alt: 'Ethan with Morgan Jay and Tofer', caption: 'with morgan jay and tofer, morgan’s keys player' },
    ],
  },
  {
    when: 'now',
    title: 'Just him, the guitar, the voice and the song',
    body: 'His debut EP was recorded live over two nights at Dragonfly Creek Studios in Malibu, with songs he has lived with for nearly four years. The first single, India, is out November 1.',
    layout: 'studio',
    photos: [
      { src: '/images/malibu/studio-color.webp', alt: 'Ethan recording with his guitar in a warm-lit studio', caption: 'dragonfly creek studios, malibu', pos: 'center 55%' },
      { src: '/images/malibu/studio-bw.webp', alt: 'Ethan alone with his guitar in the live room, black and white', caption: 'take one', pos: 'center 60%' },
    ],
  },
]

const sounds = ['soul', 'r&b', 'pop', 'funk', 'reggae', 'hip-hop', 'musical theater']
const heroes = ['Michael Jackson', 'Stevie Wonder', 'Bruno Mars', 'John Mayer', 'Bob Marley', 'Eminem', 'Ed Sheeran', 'Jon Batiste', 'Freddie Mercury']

const morePress = [
  { outlet: 'Canvas Rebel', title: 'Meet Ethan Hoffman', url: 'https://canvasrebel.com/meet-ethan-hoffman/' },
  { outlet: 'Gut Instinct Media', title: 'Unveiling the Soul of Ethan Hoffman: Beyond the Viral Fame', url: 'https://medium.com/@gutinstinctmedia/unveiling-the-soul-of-ethan-hoffman-beyond-the-viral-fame-a6ab70904fb3' },
  { outlet: 'Voyage LA', title: 'Daily Inspiration: Meet Ethan Hoffman', url: 'https://voyagela.com/interview/daily-inspiration-meet-ethan-hoffman' },
]

function Figure({ photo, className, speed, sizes, index }: { photo: Photo; className: string; speed?: number; sizes: string; index?: string }) {
  return (
    <figure className={`ab-fig ${className}`} data-speed={speed}>
      <div className="ab-ph">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} style={{ objectFit: 'cover', objectPosition: photo.pos ?? 'center' }} />
      </div>
      <figcaption>{index && <span>{index}</span>}{photo.caption}</figcaption>
    </figure>
  )
}

export default function About() {
  const press = [
    ...articles.filter((a) => a.url).map((a) => ({ outlet: a.outlet ?? a.author, title: a.title, url: a.url! })),
    ...morePress,
  ]

  return (
    <>
      <Navbar />
      <main className="ab">
        <Parallax scope=".ab" />

        <header className="ab-hero">
          <div className="ab-hero-photo" data-speed={-0.12}>
            <Image src="/images/malibu/oak-walk.webp" alt="Ethan walking toward the camera under a wide oak canopy" fill priority sizes="(max-width: 900px) 100vw, 64vw" style={{ objectFit: 'cover', objectPosition: 'center 46%' }} />
          </div>
          <div className="ab-wrap ab-hero-copy">
            <p className="ab-label">about ethan</p>
            <h1 className="ab-title">“I can <em>do</em> that.”</h1>
            <p className="ab-aside">what 12-year-old ethan thought, staring at a flyer in a starbucks window</p>
            <p className="ab-lede">
              Ethan Hoffman is a 23-year-old singer, songwriter, guitarist and beatboxer from Palos Verdes.
              He has played more than 300 rooms, from the Wiltern to the Lighthouse Café, and he still trusts the
              same instinct that got him on stage the first time.
            </p>
          </div>
          <p className="ab-scroll" aria-hidden="true">scroll — his story</p>
        </header>

        <section className="ab-story" aria-labelledby="ab-story-label">
          <div className="ab-wrap">
            <p className="ab-label" id="ab-story-label">how he got here</p>
            <ol className="ab-chapters">
              {chapters.map((c, i) => {
                const n = String(i + 1).padStart(2, '0')
                const [a, b] = c.photos
                return (
                  <li key={c.title} className={`ab-ch ab-ch--${c.layout}`}>
                    <div className="ab-ch-text">
                      <p className="ab-ch-num">{n} / 06</p>
                      <p className="ab-when">{c.when}</p>
                      <h2>{c.title}</h2>
                      <p className="ab-ch-body">{c.body}</p>
                    </div>
                    {c.layout === 'studio' ? (
                      <>
                        <div className="ab-studio-bleed">
                          <div className="ab-studio-img" data-speed={-0.08}>
                            <Image src={a.src} alt={a.alt} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: a.pos }} />
                          </div>
                          <p className="ab-studio-cap">{a.caption}</p>
                        </div>
                        <Figure photo={b} className="ab-fig--inset" speed={0.1} sizes="(max-width: 900px) 70vw, 30vw" />
                      </>
                    ) : (
                      <>
                        <Figure photo={a} className="ab-fig--a" speed={b ? -0.06 : 0.08} sizes="(max-width: 900px) 90vw, 46vw" index={`fig. ${n}`} />
                        {b && <Figure photo={b} className="ab-fig--b" speed={0.14} sizes="(max-width: 900px) 60vw, 26vw" />}
                      </>
                    )}
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="ab-unicorn" aria-labelledby="ab-unicorn-label">
          <div className="ab-wrap ab-unicorn-grid">
            <figure className="ab-unicorn-photo" data-speed={-0.08}>
              <div className="ab-ph">
                <Image src="/images/malibu/fence-dusk.webp" alt="Ethan at dusk beside a white ranch fence" fill sizes="(max-width: 900px) 80vw, 34vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
              </div>
            </figure>
            <div className="ab-unicorn-copy">
              <p className="ab-label" id="ab-unicorn-label">the unicorn</p>
              <blockquote className="ab-quote">
                “I initially didn’t like it, but now I <em>embrace</em> it. To me, it means being someone who does not fit
                neatly into one mold, socially, musically, or otherwise.”
              </blockquote>
              <p className="ab-cite">ethan, to life on jupiter</p>
            </div>
          </div>

          <div className="ab-wrap ab-lists">
            <div>
              <h3>what it sounds like</h3>
              <p className="ab-tags">{sounds.map((s) => <span key={s}>{s}</span>)}</p>
            </div>
            <div>
              <h3>who he grew up on</h3>
              <ul className="ab-heroes">{heroes.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
            <div>
              <h3>off stage</h3>
              <p className="ab-off">
                He runs Hoffman Home Tech, so a lot of South Bay seniors know him as the guy who comes over and fixes
                their iPhones. He posts a 30-second tech tip on Nextdoor every week.
              </p>
            </div>
          </div>
        </section>

        <section className="ab-press" aria-labelledby="ab-press-label">
          <div className="ab-wrap">
            <p className="ab-label" id="ab-press-label">read more about him</p>
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
          </div>
        </section>

        <section className="ab-close">
          <div className="ab-close-photo" data-speed={-0.1}>
            <Image src="/images/malibu/oak-lying.webp" alt="Ethan lying in the grass beneath a great oak" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 62%' }} />
          </div>
          <div className="ab-wrap ab-cta">
            <Link href="/music" className="ab-btn">hear the new music</Link>
            <Link href="/services" className="ab-btn ab-btn-ghost">book him live</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
