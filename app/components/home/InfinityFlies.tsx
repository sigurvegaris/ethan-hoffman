// A string of fireflies spaced all the way around an infinity sign, flying it
// slowly over the trees in the hero. Each one blinks on its own, so the sign
// shimmers instead of looking drawn.
const COUNT = 34
const LOOP = 18 // seconds for one full trip around the sign

export default function InfinityFlies() {
  return (
    <div className="inf" aria-hidden="true">
      {Array.from({ length: COUNT }, (_, i) => (
        <span
          key={i}
          className="inf-fly"
          style={{
            animationDelay: `${(-i * LOOP) / COUNT}s`,
            ['--s' as string]: `${3 + ((i * 7) % 3)}px`,
          }}
        >
          <i style={{ animationDelay: `${-((i * 1.37) % 3)}s`, animationDuration: `${2.2 + ((i * 3) % 5) * 0.35}s` }} />
        </span>
      ))}
    </div>
  )
}
