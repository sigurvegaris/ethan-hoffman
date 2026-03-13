// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { AnimatePresence } from 'framer-motion'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ethan Hoffman | Live Music for Weddings & Private Events',
  description: 'Soulful live music for weddings, private events, and corporate functions in Los Angeles. Featuring live looping, 100+ songs across 6 genres.',
  keywords: 'live music Los Angeles, wedding musician LA, private event musician, live looping vocalist',
  openGraph: {
    title: 'Ethan Hoffman | Live Music',
    description: 'Soulful live music for weddings & private events in Los Angeles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}