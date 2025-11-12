import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaFolderOpen, 
  FaBlog, 
  FaEnvelope 
} from 'react-icons/fa'

const navItems = [
  { id: 'hero', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'projects', label: 'Projects', icon: FaFolderOpen },
  { id: 'blog', label: 'Blog', icon: FaBlog },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
]

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-gradient"
          >
            SK
          </motion.div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary-400 bg-primary-500/20'
                      : 'text-gray-400 hover:text-primary-400 hover:bg-dark-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="text-sm" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-lg border border-primary-500/50"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Menu */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-primary-400 text-2xl"
          >
            ☰
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

