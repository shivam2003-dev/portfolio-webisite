import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaServer, FaRobot, FaChartLine } from 'react-icons/fa'
import { 
  SiKubernetes, 
  SiDocker, 
  SiTerraform, 
  SiAnsible, 
  SiGithubactions,
  SiPython,
  SiAws,
} from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'DevOps HomeLab',
      description: 'Complete home lab infrastructure setup for learning and experimenting with DevOps tools and practices. Features containerization, orchestration, and monitoring solutions.',
      image: '🚀',
      category: 'Infrastructure',
      technologies: [SiKubernetes, SiDocker, SiTerraform, SiAnsible],
      links: {
        github: 'https://github.com/shivam2003-dev',
      },
      icon: FaServer,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'WhatsApp Summary Bot',
      description: 'Intelligent bot that automatically summarizes WhatsApp conversations using AI/ML techniques. Built with automation and natural language processing capabilities.',
      image: '💬',
      category: 'Automation',
      technologies: [SiPython, SiGithubactions],
      links: {
        github: 'https://github.com/shivam2003-dev',
      },
      icon: FaRobot,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Flamegraph',
      description: 'Performance profiling and visualization tool for analyzing system bottlenecks and optimizing application performance. Essential for SRE troubleshooting.',
      image: '🔥',
      category: 'Monitoring',
      technologies: [SiPython, SiAws],
      links: {
        github: 'https://github.com/shivam2003-dev',
      },
      icon: FaChartLine,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Infrastructure Automation',
      description: 'Terraform modules for AWS infrastructure provisioning and management. Enhanced reusability and consistency across multiple environments.',
      image: '🏗️',
      category: 'IaC',
      technologies: [SiTerraform, SiAws, SiGithubactions],
      links: {
        github: 'https://github.com/shivam2003-dev',
      },
      icon: FaServer,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'GitOps with ArgoCD',
      description: 'Declarative Kubernetes deployments for 10+ microservices. Reduced deployment time by 60% through automated GitOps workflows.',
      image: '☸️',
      category: 'DevOps',
      technologies: [SiKubernetes, SiDocker, SiGithubactions],
      links: {
        github: 'https://github.com/shivam2003-dev',
      },
      icon: FaServer,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Multi-Level Monitoring',
      description: 'Zabbix integration with PagerDuty, Teams, and email alerting. Comprehensive monitoring solution for production environments.',
      image: '📊',
      category: 'Monitoring',
      technologies: [SiAws, SiPython],
      links: {
        github: 'https://github.com/shivam2003-dev',
      },
      icon: FaChartLine,
      color: 'from-teal-500 to-cyan-500',
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
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
              Featured Work
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Projects &</span>
              <br />
              <span className="text-gray-300">Contributions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing infrastructure automation, DevOps practices, and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all h-full flex flex-col">
                    {/* Project Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                          <ProjectIcon className="text-2xl text-white" />
                        </div>
                        <span className="px-3 py-1 bg-primary-500/20 rounded-full text-xs font-semibold text-primary-400">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-200 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 flex-1">
                      {project.technologies.map((Tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-2 bg-dark-700/50 rounded-lg"
                        >
                          <Tech className="text-xl text-primary-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-dark-700">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <FaGithub />
                          <span className="text-sm font-medium">Code</span>
                        </motion.a>
                      )}
                      {project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          <span className="text-sm font-medium">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-xl -z-10`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/shivam2003-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 glass-effect border border-primary-500/50 rounded-lg font-semibold text-primary-400 hover:bg-primary-500/10 transition-all"
            >
              <FaGithub />
              <span>View All Projects on GitHub</span>
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

