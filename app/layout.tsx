import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethan Hoffman | Live Wedding & Event Entertainment | Los Angeles',
  description: 'Ethan Hoffman is a soulful singer-songwriter and live performer based in Los Angeles, CA. Available for weddings, private events, and corporate functions.',
  keywords: 'Ethan Hoffman, wedding musician Los Angeles, live music LA, event entertainment, singer songwriter LA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}