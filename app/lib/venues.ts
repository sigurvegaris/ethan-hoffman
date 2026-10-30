// Past clients and venues, shared by the homepage, Book Live and Past Venues.
// Logos are cream silhouettes in public/images/logos so they read on the dark
// greens. `h` is the logo's display height at desktop size; wide wordmarks
// get less height so every logo carries about the same visual weight.

export type VenueLogo = { name: string; logo?: string; h: number; top?: boolean }

export const venueLogos: VenueLogo[] = [
  // Top tier: shown first and on the homepage strip.
  { name: 'Terranea Resort', logo: '/images/logos/terranea.png', h: 74, top: true },
  { name: 'The Strand House', logo: '/images/logos/strandhouse.png', h: 22, top: true },
  { name: 'The Rockefeller', logo: '/images/logos/rockefeller.png', h: 30, top: true },
  { name: 'Rolling Hills Country Club', logo: '/images/logos/rollinghills.png', h: 70, top: true },
  // Placeholder wordmark until a Tesla logo file is supplied.
  { name: 'Tesla', h: 30, top: true },
  { name: 'The Wiltern', logo: '/images/logos/thewiltern.png', h: 58, top: true },
  { name: 'Hollywood Improv', logo: '/images/logos/hollywoodimprov.png', h: 30 },
  { name: 'The Magnolia', logo: '/images/logos/themagnolia.png', h: 32 },
  { name: 'The Comedy Store', logo: '/images/logos/comedystore.png', h: 66 },
  { name: 'Hilton', logo: '/images/logos/hilton.png', h: 50 },
  { name: 'Marriott', logo: '/images/logos/marriot.png', h: 44 },
  { name: 'Shade Hotel', logo: '/images/logos/shade.png', h: 64 },
  { name: 'Hyatt', logo: '/images/logos/hyatt.png', h: 60 },
  { name: 'The Mint', logo: '/images/logos/themint.png', h: 62 },
  { name: 'The Lighthouse Cafe', logo: '/images/logos/lighthousecafe.png', h: 78 },
  { name: 'Torrance Memorial', logo: '/images/logos/torrancememorial.png', h: 66 },
  { name: 'USC', logo: '/images/logos/usc.png', h: 70 },
]

export const otherVenues = [
  'Tower 12',
  'Belle Epoque, Redondo Beach',
  'Jamaica Bay Inn, Marina Del Rey',
  'Renaissance LAX Hotel',
  'Freehand Hotel',
  'Harvard and Stone, Hollywood',
  "Henry's at Waterfront Hilton",
  'Renaissance ClubSport Aliso Viejo',
  'Bella Terra Huntington Beach',
  'Project Barley, Redondo Beach',
  'Employees Only',
  'Durango Cantina',
  'Coffee Cartel, Redondo Beach',
  'Quatsch Comedy Club, Berlin',
]
