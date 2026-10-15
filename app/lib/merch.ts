// Merch catalog. While `buyUrl` is empty an item shows as "Coming Soon";
// add a checkout link (Stripe Payment Link, Shopify, etc.) to start selling it.
// Drop renderings into /public/images/merch/ and set `image` to show them.

export type MerchItem = {
  name: string
  kind: string
  description: string
  image?: string
  mock: 'tee-light' | 'tee-dark' | 'cd' | 'bracelet' // drawn stand-in until a rendering is added
  tile: string // torn-paper backdrop colour
  price?: string
  buyUrl?: string
}

export const merch: MerchItem[] = [
  {
    name: 'Making It Up As We Go',
    kind: 'T-Shirt',
    description: 'Childhood photo cover art, white serif type and Ethan’s signature.',
    mock: 'tee-dark',
    tile: '#a9c4d8',
  },
  {
    name: 'Day One Fans',
    kind: 'T-Shirt',
    mock: 'tee-light',
    tile: '#c9cfa8',
    description: 'Hundreds of real fan names from the comments, printed across the back. A thank-you to the people who were here first.',
  },
  {
    name: 'Ethan Hoffman — The EP',
    kind: 'CD',
    mock: 'cd',
    tile: '#e8b9a0',
    description: 'The self-titled debut EP on CD.',
  },
  {
    name: 'Signature Bracelet',
    kind: 'Bracelet',
    mock: 'bracelet',
    tile: '#d9cbb0',
    description: 'A small everyday reminder of the music.',
  },
]
