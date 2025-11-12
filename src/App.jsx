import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-900">
      {/* Debug: Test if React is rendering */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'red', color: 'white', padding: '10px' }}>
        React is working!
      </div>
      
      <ParticleBackground />
      <ScrollProgress />
      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="blog">
          <Blog />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App

