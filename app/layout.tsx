// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { AnimatePresence } from 'framer-motion'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ethan Hoffman | Singer-Songwriter',
  description: 'Ethan Hoffman is a soulful singer-songwriter from Los Angeles. New single "India" and his self-titled debut EP. Also available for live events.',
  keywords: 'Ethan Hoffman, India, singer-songwriter, Los Angeles, live looping vocalist, live music Los Angeles, wedding musician LA',
  openGraph: {
    title: 'Ethan Hoffman',
    description: 'Soulful singer-songwriter from Los Angeles. New single "India" and the self-titled debut EP.',
    images: ['/images/malibu/oak-walk.webp'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
{/* eslint-disable-next-line @next/next/no-page-custom-font */}
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
</head>
    <body>
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}