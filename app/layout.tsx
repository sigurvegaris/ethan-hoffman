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
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,100,1;1,9..144,300..900,100,1&family=Nanum+Pen+Script&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
</head>
    <body>
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}