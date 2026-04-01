import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import FunFacts from '@/components/FunFacts'
import GitHubStats from '@/components/GitHubStats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Testimonials />
      <FunFacts />
      <GitHubStats />
      <Contact />
      <Footer />
    </main>
  )
}

