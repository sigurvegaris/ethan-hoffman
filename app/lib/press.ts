// Articles about Ethan. Add one entry per article; the homepage Press section
// stays hidden until there is at least one.
export type Article = {
  outlet: string
  title: string
  url: string
  author?: string
  quotes: string[] // short, quotable excerpts pulled from the article
}

export const articles: Article[] = []
