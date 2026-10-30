import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mailing List | Ethan Hoffman',
  description: 'Be the first to hear new music, show dates and notes from Ethan Hoffman.',
}

export default function MailingListLayout({ children }: { children: React.ReactNode }) {
  return children
}
