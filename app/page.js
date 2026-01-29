import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingParticles from '@/components/FloatingParticles'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <ScrollProgress />
      <FloatingParticles />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
