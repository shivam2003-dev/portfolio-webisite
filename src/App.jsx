import React, { useState, useEffect } from 'react'
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

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          minHeight: '100vh', 
          background: '#0f172a', 
          color: 'white', 
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: '#ef4444', marginBottom: '20px' }}>Something went wrong</h1>
          <p>{this.state.error?.toString()}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              marginTop: '20px', 
              padding: '10px 20px', 
              background: '#0ea5e9', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error('Error in scroll handler:', error)
      setHasError(true)
    }
  }, [])

  // If there's an error, show a simple fallback
  if (hasError) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#0f172a', 
        color: 'white', 
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: '#0ea5e9' }}>Shivam Kumar</h1>
        <p>Site Reliability Engineer II</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900" style={{ backgroundColor: '#0f172a', minHeight: '100vh', height: '100%' }}>
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
    </ErrorBoundary>
  )
}

export default App

