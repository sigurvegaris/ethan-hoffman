// Merch catalog. While `buyUrl` is empty an item shows as "Coming Soon";
// add a checkout link (Stripe Payment Link, Shopify, etc.) to start selling it.
// Drop renderings into /public/images/merch/ and set `image` to show them.

export type MerchItem = {
  name: string
  kind: string
  description: string
  image?: string
  mock: 'tee-light' | 'tee-dark' | 'cd' | 'bracelet' // drawn stand-in until a rendering is added
  tile: string // tile colour, blended into the forest greens
  price?: string
  buyUrl?: string
}

export const merch: MerchItem[] = [
  {
    name: 'Sweet India',
    kind: 'T-Shirt',
    description: 'Brown tee with India in white, a line from the song and Ethan’s signature.',
    image: '/images/merch/sweet-india-tee.webp',
    mock: 'tee-dark',
    tile: '#d9b48f',
  },
  {
    name: 'The Sessions',
    kind: 'T-Shirt',
    description: 'Black tee with stills from the India session video, his name and his signature.',
    image: '/images/merch/sessions-tee.webp',
    mock: 'tee-dark',
    tile: '#b7c2a6',
  },
  {
    name: 'Ethan Hoffman — The EP',
    kind: 'CD',
    mock: 'cd',
    tile: '#e8b9a0',
    description: 'The self-titled debut EP on CD.',
  },
]
