import type { MerchItem } from '../lib/merch'

const TEE = 'M70 18 L104 6 Q120 22 136 6 L170 18 L206 52 L182 78 L166 66 L166 214 L74 214 L74 66 L58 78 L34 52 Z'

// Simple drawn stand-ins for merch until real renderings are added.
export default function MerchMock({ mock }: { mock: MerchItem['mock'] }) {
  if (mock === 'tee-dark' || mock === 'tee-light') {
    const dark = mock === 'tee-dark'
    return (
      <svg viewBox="0 0 240 220" role="img" aria-label={dark ? 'Black tee mockup' : 'Cream tee mockup'}>
        <path d={TEE} fill={dark ? '#1f1f1f' : '#f4efe4'} stroke={dark ? '#000' : '#d8cfbd'} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M104 6 Q120 22 136 6" fill="none" stroke={dark ? '#3a3a3a' : '#d8cfbd'} strokeWidth="3" />
        {dark ? (
          <g>
            <rect x="96" y="60" width="48" height="56" fill="#cdb79a" />
            <circle cx="120" cy="82" r="11" fill="#9e8466" />
            <rect x="106" y="94" width="28" height="22" rx="10" fill="#9e8466" />
            <text x="120" y="132" textAnchor="middle" fill="#f4efe4" fontFamily="Times New Roman, serif" fontSize="9">making it up as we go</text>
            <text x="120" y="148" textAnchor="middle" fill="#f4efe4" fontFamily="Caveat, cursive" fontSize="13">Ethan</text>
          </g>
        ) : (
          <g fill="#3a3a3a" fontFamily="Caveat, cursive" fontSize="6.5" opacity="0.85">
            <text x="120" y="56" textAnchor="middle" fontFamily="Times New Roman, serif" fontSize="8">thanks to my day one fans</text>
            {Array.from({ length: 12 }, (_, row) => (
              <text key={row} x="120" y={70 + row * 10} textAnchor="middle">
                {row === 5 ? 'your name could be here · ♡' : 'your name · your name · your name · your name'}
              </text>
            ))}
          </g>
        )}
      </svg>
    )
  }
  if (mock === 'cd') {
    return (
      <svg viewBox="0 0 240 220" role="img" aria-label="CD mockup">
        <circle cx="150" cy="110" r="70" fill="#d9d9d9" />
        <circle cx="150" cy="110" r="70" fill="url(#cdShine)" />
        <circle cx="150" cy="110" r="14" fill="#f4efe4" stroke="#bbb" />
        <rect x="40" y="40" width="140" height="140" fill="#1b1d18" />
        <text x="110" y="150" textAnchor="middle" fill="#c9a26a" fontFamily="Abril Fatface, serif" fontSize="20">Ethan</text>
        <text x="110" y="170" textAnchor="middle" fill="#c9a26a" fontFamily="Abril Fatface, serif" fontSize="20">Hoffman</text>
        <defs>
          <linearGradient id="cdShine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#c7d6e6" stopOpacity="0.2" />
            <stop offset="1" stopColor="#f0d8f0" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 240 220" role="img" aria-label="Bracelet mockup">
      {Array.from({ length: 22 }, (_, i) => {
        const a = (i / 22) * Math.PI * 2
        return <circle key={i} cx={120 + Math.cos(a) * 62} cy={110 + Math.sin(a) * 50} r="9" fill={i % 7 === 0 ? '#c4622d' : i % 2 ? '#f4efe4' : '#2f3a28'} stroke="#00000022" />
      })}
      <text x="120" y="116" textAnchor="middle" fill="#1c1a15" fontFamily="Caveat, cursive" fontSize="22">day one</text>
    </svg>
  )
}
