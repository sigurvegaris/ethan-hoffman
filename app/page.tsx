import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Press from './components/Press'
import HeroRelease from './components/home/HeroRelease'
import Statement from './components/home/Statement'
import Releases from './components/home/Releases'
import EpTracklist from './components/home/EpTracklist'
import Sessions from './components/home/Sessions'
import FanNotebook from './components/home/FanNotebook'
import Collage from './components/home/Collage'
import BirthdayNudge from './components/home/BirthdayNudge'
import Parallax from './components/home/Parallax'
import OppositeLens from './components/home/OppositeLens'
import './home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="fh">
        <div className="fh-light" aria-hidden="true"><span /><span /><span /></div>

        <HeroRelease />
        <Statement />
        <Releases />
        <EpTracklist />
        <Sessions />
        <Press />
        <FanNotebook />
        <Collage />
      </main>
      <Parallax />
      <OppositeLens />
      <BirthdayNudge />
      <Footer />
    </>
  )
}
