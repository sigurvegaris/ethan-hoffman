// Articles about Ethan. Add one entry per article; the homepage Press section
// stays hidden until there is at least one.
export type Article = {
  title: string
  author: string
  outlet?: string // publication name, when known
  url?: string // link to the published piece, when there is one
  headline: string // the big pull quote
  quotes: string[] // shorter excerpts, shown as clippings
}

export const articles: Article[] = [
  {
    title: 'Meet Palos Verdes Singer-Songwriter Ethan Hoffman',
    author: 'Amy Bergant',
    outlet: 'Palos Verdes Pulse',
    url: 'https://www.palosverdespulse.com/blog/ethan-hoffman-singer-songwriter-palos-verdes',
    headline: 'Being a musician was not something I consciously decided to become. I have always felt like I was born to do it.',
    quotes: [
      'When I first stepped onto the stage at the Norris Theater when I was 12, I had a blue mohawk and golden hip-hop shoes.',
      'I have never been limited to one sound, nor have I ever fit into any box, musical or otherwise.',
      'There’s nothing more timeless than sitting in front of people and sharing your art with them.',
    ],
  },
]
