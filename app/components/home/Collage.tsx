import Image from 'next/image'

// Golden-hour photos scattered at different sizes and depths. The Parallax
// component moves anything marked data-speed.
const shots = [
  { src: '/images/malibu/plaid-smile.webp', alt: 'Ethan smiling, sitting on a wall', note: 'between takes', cls: 'c1', speed: -0.08 },
  { src: '/images/malibu/grass-shoe.webp', alt: 'Ethan sitting in the grass under the oak', note: 'the big oak', cls: 'c2', speed: 0.12 },
  { src: '/images/malibu/bench.webp', alt: 'Ethan on a bench in the shade', note: 'afternoon', cls: 'c3', speed: -0.18 },
  { src: '/images/malibu/fence-dusk.webp', alt: 'Ethan at dusk by a white fence', note: 'dusk, day two', cls: 'c4', speed: 0.06 },
]

export default function Collage() {
  return (
    <section className="cl" aria-label="Photos from Malibu">
      <div className="fh-wrap cl-stage">
        <h2 className="cl-word" data-speed="0.2">malibu</h2>
        {shots.map((s) => (
          <figure key={s.src} className={`cl-shot ${s.cls}`}>
            <div data-speed={s.speed}>
              <div className="cl-img" data-lens>
                <Image src={s.src} alt={s.alt} fill sizes="(max-width: 900px) 50vw, 32vw" style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>{s.note}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
