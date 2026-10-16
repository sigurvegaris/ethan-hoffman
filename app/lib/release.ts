// Release plan for the self-titled EP. Update dates and links here and every
// page that shows the rollout (home banner, music page) follows.

export type Single = {
  title: string
  releaseDate: string // ISO, Pacific time
  note: string
}

// Midnight Pacific on release day. November 1 is still PDT (-07:00);
// December and January are PST (-08:00).
export const singles: Single[] = [
  { title: 'India', releaseDate: '2026-11-01T00:00:00-07:00', note: 'Single + full session video' },
  { title: 'Carefree', releaseDate: '2026-12-01T00:00:00-08:00', note: 'Single' },
]

export const ep = {
  title: 'Ethan Hoffman',
  releaseDate: '2027-01-01T00:00:00-08:00',
  note: 'The self-titled EP, with every session video released together',
  runtime: '27 minutes',
}

export const featuredSingle = singles[0]

// Streaming + social links shown on the release banner. Swap the India-specific
// URLs in once the single is live on each platform.
export const listenLinks = [
  { label: 'Spotify', url: 'https://open.spotify.com/artist/3wv3GWickdI3WcNEyV2zG6' },
  { label: 'Apple Music', url: 'https://music.apple.com/us/artist/ethan-hoffman/1725423086' },
  { label: 'YouTube', url: 'https://www.youtube.com/watch?v=iCRmtLvbcdw' },
  { label: 'Instagram', url: 'https://www.instagram.com/ethanhoffmanofficial/' },
]

export function isReleased(isoDate: string, now: Date = new Date()) {
  return now.getTime() >= new Date(isoDate).getTime()
}

export function formatReleaseDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles',
  })
}
