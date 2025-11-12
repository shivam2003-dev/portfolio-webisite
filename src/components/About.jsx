import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRocket, FaShieldAlt, FaCogs, FaChartLine } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: FaRocket,
      title: 'Infrastructure Automation',
      description: 'Automated 50-100+ tasks from system maintenance to cloud provisioning',
    },
    {
      icon: FaCogs,
      title: 'CI/CD Excellence',
      description: 'Built pipelines for 10+ microservices, reducing deployment time by 60%',
    },
    {
      icon: FaShieldAlt,
      title: 'Security First',
      description: 'Deployed Wazuh across 10+ environments with comprehensive monitoring',
    },
    {
      icon: FaChartLine,
      title: 'Disaster Recovery',
      description: 'Managed 30+ successful DR drills for utility and discom clients',
    },
  ]

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
              About Me
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Building the Future</span>
              <br />
              <span className="text-gray-300">of Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a Site Reliability Engineer passionate about creating robust, scalable systems
              that power mission-critical applications.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Text */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">
                    Who I Am
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    With <span className="text-primary-400 font-semibold">1.5+ years</span> of
                    experience in Site Reliability Engineering, I specialize in building secure,
                    scalable, and automated infrastructure solutions. Currently working at{' '}
                    <span className="text-primary-400">Kimbal Technologies</span> as an SRE II,
                    I've automated countless processes and built systems that handle production
                    workloads with high availability.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">
                    What I Do
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    My day-to-day involves managing Kubernetes clusters, building CI/CD pipelines,
                    implementing GitOps workflows, and ensuring our infrastructure is secure and
                    compliant. I work extensively with AWS, Terraform, Ansible, and various
                    monitoring tools to maintain and improve system reliability.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="glass-effect px-6 py-3 rounded-lg">
                    <div className="text-primary-400 font-semibold">1.5+ Years</div>
                    <div className="text-gray-400 text-sm">Experience</div>
                  </div>
                  <div className="glass-effect px-6 py-3 rounded-lg">
                    <div className="text-primary-400 font-semibold">50-100+</div>
                    <div className="text-gray-400 text-sm">Tasks Automated</div>
                  </div>
                  <div className="glass-effect px-6 py-3 rounded-lg">
                    <div className="text-primary-400 font-semibold">10+</div>
                    <div className="text-gray-400 text-sm">Microservices</div>
                  </div>
                  <div className="glass-effect px-6 py-3 rounded-lg">
                    <div className="text-primary-400 font-semibold">30+</div>
                    <div className="text-gray-400 text-sm">DR Drills</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-500/20 rounded-lg">
                        <Icon className="text-2xl text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl border border-primary-500/30 text-center"
          >
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gray-200 leading-relaxed"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              "Site Reliability Engineering is about building systems
              <br />
              that are <span className="text-primary-400">reliable</span>,{' '}
              <span className="text-primary-400">scalable</span>, and{' '}
              <span className="text-primary-400">maintainable</span>."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

