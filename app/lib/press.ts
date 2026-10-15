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
    title: 'SPOTLIGHT: Ethan Hoffman is Rediscovering His Instincts',
    author: 'Sydney Merchant',
    outlet: 'Life on Jupiter',
    url: 'https://www.lifeonjupitermag.com/articles/spotlight-ethan-hoffman',
    headline: 'The first thing people notice when listening to my music is that I’m free in my expression.',
    quotes: [
      'It is just me, the guitar, the voice, and the song.',
      'I initially didn’t like it, but now I embrace it. To me, it means being someone who does not fit neatly into one mold.',
      'I know there are many things I am yet to experience, and thus many songs I am yet to write.',
    ],
  },
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
