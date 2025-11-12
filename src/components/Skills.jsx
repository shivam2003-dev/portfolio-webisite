import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaCode,
} from 'react-icons/fa'
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiPostgresql,
  SiPrometheus,
  SiGrafana,
  SiArgo,
  SiHelm,
  SiJenkins,
  SiVault,
  SiJavascript,
  SiYaml,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Container & Orchestration',
      icon: FaDocker,
      skills: [
        { name: 'Kubernetes', icon: SiKubernetes, level: 95 },
        { name: 'Docker', icon: FaDocker, level: 98 },
        { name: 'Helm', icon: SiHelm, level: 90 },
        { name: 'ArgoCD', icon: SiArgo, level: 92 },
      ],
    },
    {
      title: 'Cloud Platforms',
      icon: FaAws,
      skills: [
        { name: 'AWS', icon: FaAws, level: 95 },
        { name: 'EKS', icon: SiKubernetes, level: 90 },
        { name: 'EC2/S3/VPC', icon: FaAws, level: 88 },
        { name: 'Lambda', icon: FaAws, level: 85 },
      ],
    },
    {
      title: 'Infrastructure as Code',
      icon: SiTerraform,
      skills: [
        { name: 'Terraform', icon: SiTerraform, level: 93 },
        { name: 'Ansible', icon: SiAnsible, level: 90 },
        { name: 'CloudFormation', icon: FaAws, level: 80 },
      ],
    },
    {
      title: 'CI/CD & DevOps',
      icon: SiGithubactions,
      skills: [
        { name: 'GitHub Actions', icon: SiGithubactions, level: 95 },
        { name: 'Jenkins', icon: SiJenkins, level: 85 },
        { name: 'Git', icon: FaGitAlt, level: 98 },
      ],
    },
    {
      title: 'Monitoring & Observability',
      icon: SiPrometheus,
      skills: [
        { name: 'Prometheus', icon: SiPrometheus, level: 88 },
        { name: 'Grafana', icon: SiGrafana, level: 85 },
        { name: 'CloudWatch', icon: FaAws, level: 90 },
        { name: 'Zabbix', icon: FaCode, level: 92 },
      ],
    },
    {
      title: 'Programming & Scripting',
      icon: FaPython,
      skills: [
        { name: 'Python', icon: FaPython, level: 90 },
        { name: 'Bash', icon: FaCode, level: 95 },
        { name: 'JavaScript', icon: SiJavascript, level: 80 },
        { name: 'YAML', icon: SiYaml, level: 95 },
        { name: 'PowerShell', icon: FaCode, level: 85 },
      ],
    },
    {
      title: 'Databases',
      icon: SiPostgresql,
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 88 },
        { name: 'MSSQL', icon: FaCode, level: 80 },
        { name: 'Cassandra', icon: FaCode, level: 75 },
      ],
    },
    {
      title: 'Security & Tools',
      icon: SiVault,
      skills: [
        { name: 'HashiCorp Vault', icon: SiVault, level: 90 },
        { name: 'Wazuh', icon: FaCode, level: 85 },
        { name: 'SonarQube', icon: FaCode, level: 88 },
        { name: 'Linux', icon: FaLinux, level: 95 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
              Technical Expertise
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Skills &</span>
              <br />
              <span className="text-gray-300">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building and maintaining modern infrastructure
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <CategoryIcon className="text-2xl text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            inView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <SkillIcon className="text-lg text-primary-400" />
                              <span className="text-gray-300">{skill.name}</span>
                            </div>
                            <span className="text-primary-400 text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                duration: 1,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

