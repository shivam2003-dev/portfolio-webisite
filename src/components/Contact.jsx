import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/shivam2003-dev',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-600 hover:to-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/shivam-kumar2003/',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: '#',
      color: 'from-pink-600 to-purple-600',
      hoverColor: 'hover:from-pink-500 hover:to-purple-500',
    },
    {
      name: 'Email',
      icon: HiOutlineMail,
      href: 'mailto:shivam.sk2003@gmail.com',
      color: 'from-primary-500 to-primary-700',
      hoverColor: 'hover:from-primary-400 hover:to-primary-600',
    },
  ]

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Delhi, India 🇮🇳',
    },
    {
      icon: HiOutlineMail,
      label: 'Email',
      value: 'shivam.sk2003@gmail.com',
      href: 'mailto:shivam.sk2003@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'shivam-kumar2003',
      href: 'https://www.linkedin.com/in/shivam-kumar2003/',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              className="inline-block text-primary-400 text-lg font-mono mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Let's</span>
              <br />
              <span className="text-gray-300">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Open for freelance work, consulting, technical mentorship, and collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className={`flex items-center gap-4 glass-effect p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all ${
                          info.href ? 'cursor-pointer' : 'cursor-default'
                        }`}
                      >
                        <div className="p-3 bg-primary-500/20 rounded-lg">
                          <Icon className="text-2xl text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                          <div className="text-lg font-semibold text-gray-200">
                            {info.value}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                  Available For
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'SRE Consulting',
                    'Infrastructure Setup',
                    'Kubernetes Implementation',
                    'CI/CD Pipeline Design',
                    'Cloud Migration',
                    'Technical Mentorship',
                  ].map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-400"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Social Links & CTA */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') || social.href.startsWith('mailto') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all text-center group ${social.hoverColor}`}
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          className="inline-block mb-3"
                        >
                          <Icon className={`text-4xl text-primary-400 group-hover:text-primary-300 transition-colors`} />
                        </motion.div>
                        <div className="text-sm font-semibold text-gray-300">
                          {social.name}
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-8 rounded-xl border border-primary-500/30 text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  Let's Build Something Amazing
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
                <motion.a
                  href="mailto:shivam.sk2003@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  <FaEnvelope />
                  <span>Send Me an Email</span>
                </motion.a>
                <p className="text-sm text-gray-500 mt-4">
                  Response time: &lt; 24 hours ⚡
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center border-t border-dark-700 pt-8"
          >
            <p className="text-gray-400 mb-4">
              Built with ❤️ using React, Tailwind CSS, and Framer Motion
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Shivam Kumar. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

