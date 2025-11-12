import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram, FaArrowDown } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px',
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/shivam2003-dev', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivam-kumar2003/', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: HiOutlineMail, href: 'mailto:shivam.sk2003@gmail.com', label: 'Email' },
    { icon: FaFilePdf, href: '/portfolio-webisite/Shivam_s_Resumee (2).pdf', label: 'Resume', download: true },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block text-primary-400 text-lg font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋 Hello, I'm
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient glow-text">Shivam Kumar</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-300 mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Site Reliability Engineer II
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-400">
              @ <span className="text-primary-400">Kimbal Technologies</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building secure, scalable, and automated infrastructure
            <br />
            that powers mission-critical systems at scale.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass-effect p-4 rounded-full text-primary-400 hover:text-primary-300 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="text-2xl" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect border border-primary-500/50 rounded-lg font-semibold text-primary-400 hover:bg-primary-500/10 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-primary-400 hover:text-primary-300 transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowDown className="text-2xl animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

