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
    description: 'Brown tee with India in cream, a line from the song and Ethan’s signature.',
    image: '/images/merch/india-tee.webp',
    mock: 'tee-dark',
    tile: '#d9b48f',
  },
  {
    name: 'Portrait',
    kind: 'T-Shirt',
    description: 'Black tee with a halftone portrait of Ethan at the mic, his name and his signature in amber.',
    image: '/images/merch/photo-tee.webp',
    mock: 'tee-dark',
    tile: '#b7c2a6',
  },
  {
    name: 'Reach for It',
    kind: 'T-Shirt',
    description: 'Black tee with Ethan’s own drawing of a runner chasing a star, and his signature.',
    image: '/images/merch/star-tee.webp',
    mock: 'tee-dark',
    tile: '#e3c48e',
  },
  {
    name: 'Ethan Hoffman — The EP',
    kind: 'CD',
    mock: 'cd',
    tile: '#e8b9a0',
    description: 'The self-titled debut EP on CD.',
  },
]
