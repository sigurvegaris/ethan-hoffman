import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Music from './components/Music'
import Services from './components/Services'
import Venues from './components/Venues'
import Testimonials from './components/Testimonials'
import Shows from './components/Shows'
import MailingList from './components/MailingList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal><Stats /></ScrollReveal>
      <ScrollReveal delay={100}><About /></ScrollReveal>
      <ScrollReveal delay={100}><Music /></ScrollReveal>
      <ScrollReveal delay={100}><Services /></ScrollReveal>
      <ScrollReveal delay={100}><Venues /></ScrollReveal>
      <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={100}><Shows /></ScrollReveal>
      <ScrollReveal delay={100}><Contact /></ScrollReveal>
      <ScrollReveal delay={100}><MailingList /></ScrollReveal>
      <Footer />
    </main>
  )
}