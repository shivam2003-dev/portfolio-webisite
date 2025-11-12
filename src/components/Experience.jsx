import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaShieldAlt,
  FaDatabase,
  FaServer,
  FaBell,
} from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiAnsible, SiArgo, SiGithubactions } from 'react-icons/si'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Site Reliability Engineer II',
      company: 'Kimbal Technologies',
      location: 'Delhi, India',
      period: 'Jun 2025 - Present',
      duration: 'Current',
      icon: FaBriefcase,
      achievements: [
        'Integrated AWS SNS with internal services for real-time alerts',
        'Implemented multi-level alerting in Zabbix (Email, Teams, PagerDuty)',
        'Built AWS Lambda automation via EventBridge for operational tasks',
        'Automated PostgreSQL backups to S3 with Ansible using pgBackRest',
      ],
      technologies: [FaAws, SiKubernetes, SiTerraform, SiAnsible, FaBell],
    },
    {
      title: 'Site Reliability Engineer',
      company: 'Kimbal Technologies',
      location: 'Delhi, India',
      period: 'Jun 2024 - Jun 2025',
      duration: '1 year',
      icon: FaBriefcase,
      achievements: [
        'Managed Kubernetes, Docker, Helm, and ArgoCD deployments for 10+ microservices',
        'Developed Terraform modules for AWS infrastructure provisioning',
        'Administered HashiCorp Vault for secrets management',
        'Deployed Wazuh for security monitoring across 10+ environments',
        'Set up SonarQube for code quality analysis',
        'Managed Nexus Repository for artifact distribution',
        'Handled database operations (PostgreSQL, MSSQL, Cassandra, Neo4j)',
        'Configured DNS and hybrid infrastructure management',
      ],
      technologies: [SiKubernetes, FaDocker, SiArgo, SiGithubactions, FaShieldAlt, FaDatabase],
    },
  ]

  const keyMetrics = [
    { label: 'Tasks Automated', value: '50-100+', icon: FaServer },
    { label: 'Microservices', value: '10+', icon: FaDocker },
    { label: 'Deployment Time Reduction', value: '60%', icon: SiGithubactions },
    { label: 'DR Drills Managed', value: '30+', icon: FaShieldAlt },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
              Professional Journey
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Work</span>
              <br />
              <span className="text-gray-300">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              1.5+ years of building and maintaining production infrastructure
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl border border-primary-500/20 text-center"
                >
                  <Icon className="text-3xl text-primary-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => {
              const ExpIcon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 ${
                    isEven ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8 md:text-right'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 transform -translate-x-1/2 z-10 ${
                      isEven ? 'md:left-1/2' : 'md:left-1/2'
                    }`}
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: isEven ? 10 : -10 }}
                    className={`glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all ${
                      isEven ? 'ml-16 md:ml-0 md:mr-auto' : 'ml-16 md:ml-auto md:mr-0'
                    } max-w-lg`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary-500/20 rounded-lg">
                        <ExpIcon className="text-2xl text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-200 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 mb-2">
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-primary-500/20 rounded text-primary-400">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">
                        Key Achievements:
                      </h4>
                      <ul
                        className={`space-y-2 ${
                          isEven ? 'text-left' : 'md:text-right'
                        }`}
                      >
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            animate={
                              inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: isEven ? -20 : 20 }
                            }
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                            className="flex items-start gap-2 text-gray-400"
                          >
                            <span className="text-primary-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700">
                      {exp.technologies.map((Tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-2 bg-primary-500/10 rounded-lg"
                        >
                          <Tech className="text-xl text-primary-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

