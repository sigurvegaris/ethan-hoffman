import Link from 'next/link'
import Image from 'next/image'
import Navbar from './components/Navbar'
import './home.css'

// India easter egg: a wrong turn asks the song's question.
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="nf">
        <div className="nf-photo">
          <Image src="/images/malibu/path-walk.webp" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 45%' }} />
        </div>
        <div className="nf-copy">
          <p className="nf-code">404 · this page doesn&apos;t exist</p>
          <h1 className="nf-title">What if we&apos;re all just <em>living wrong?</em></h1>
          <Link className="hr-btn nf-btn" href="/">Take me home</Link>
        </div>
      </main>
    </>
  )
}
