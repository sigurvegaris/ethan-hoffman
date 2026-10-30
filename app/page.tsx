import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Press from './components/Press'
import HeroRelease from './components/home/HeroRelease'
import Releases from './components/home/Releases'
import LiveStrip from './components/home/LiveStrip'
import Sessions from './components/home/Sessions'
import FanNotebook from './components/home/FanNotebook'
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
        <LiveStrip />
        <Releases />
        <Sessions />
        <Press />
        <FanNotebook />
      </main>
      <Parallax />
      <OppositeLens />
      <BirthdayNudge />
      <Footer />
    </>
  )
}
