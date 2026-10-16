// Ethan's yin yang, drawn on a 100×100 grid so it scales anywhere. The light
// half holds the top lobe and the dark half the bottom one; each lobe carries
// a dot of the opposite half. Parts are classed so each use can style them.
export const YIN_LIGHT = 'M50,0 A50,50 0 0 1 50,100 A25,25 0 0 0 50,50 A25,25 0 0 1 50,0 Z'
export const YIN_DARK = 'M50,0 A50,50 0 0 0 50,100 A25,25 0 0 0 50,50 A25,25 0 0 1 50,0 Z'

type Props = {
  className?: string
  title?: string
  /** Extra classes per part, e.g. to mark a half as released or highlighted. */
  parts?: { light?: string; dark?: string; dotTop?: string; dotBottom?: string }
}

export default function YinYang({ className, title, parts = {} }: Props) {
  return (
    <svg className={className} viewBox="-2 -2 104 104" role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <path className={`yy-light ${parts.light ?? ''}`} d={YIN_LIGHT} />
      <path className={`yy-dark ${parts.dark ?? ''}`} d={YIN_DARK} />
      <circle className={`yy-dot yy-dot-top ${parts.dotTop ?? ''}`} cx="50" cy="25" r="6.5" />
      <circle className={`yy-dot yy-dot-bottom ${parts.dotBottom ?? ''}`} cx="50" cy="75" r="6.5" />
      <circle className="yy-ring" cx="50" cy="50" r="50" />
    </svg>
  )
}
