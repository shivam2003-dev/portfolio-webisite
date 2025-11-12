import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBlog, FaCalendarAlt, FaClock, FaTag, FaExternalLinkAlt, FaBook, FaGraduationCap, FaFileAlt, FaRoute } from 'react-icons/fa'
import { blogPosts, resources } from '../data/blogPosts'
import { useState } from 'react'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [activeTab, setActiveTab] = useState('posts')

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
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.span
              className="inline-block text-primary-400 text-lg font-mono mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
            >
              Blog & Resources
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Thoughts &</span>
              <br />
              <span className="text-gray-300">Learnings</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sharing knowledge about DevOps, AI/ML, infrastructure automation, and my learning journey
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'posts'
                  ? 'bg-primary-500 text-white'
                  : 'glass-effect text-gray-400 hover:text-primary-400'
              }`}
            >
              <FaBlog className="inline mr-2" />
              Blog Posts
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'resources'
                  ? 'bg-primary-500 text-white'
                  : 'glass-effect text-gray-400 hover:text-primary-400'
              }`}
            >
              <FaBook className="inline mr-2" />
              Resources & Journey
            </motion.button>
          </motion.div>

          {/* Blog Posts Tab */}
          {activeTab === 'posts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect p-8 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-200 mb-3">
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaClock />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaTag />
                          {post.author}
                        </span>
                      </div>
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="mt-6 text-gray-300 leading-relaxed">
                    {post.content.split('\n').map((line, lineIndex) => {
                      const trimmed = line.trim()
                      if (trimmed.startsWith('# ')) {
                        return <h1 key={lineIndex} className="text-3xl font-bold text-gray-200 mt-6 mb-4">{trimmed.substring(2)}</h1>
                      }
                      if (trimmed.startsWith('## ')) {
                        return <h2 key={lineIndex} className="text-2xl font-bold text-gray-200 mt-5 mb-3">{trimmed.substring(3)}</h2>
                      }
                      if (trimmed.startsWith('### ')) {
                        return <h3 key={lineIndex} className="text-xl font-semibold text-gray-200 mt-4 mb-2">{trimmed.substring(4)}</h3>
                      }
                      if (trimmed.startsWith('```')) {
                        return null // Skip code block markers for now
                      }
                      if (trimmed && !trimmed.startsWith('```')) {
                        // Simple markdown parsing
                        let processedLine = trimmed
                        processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary-400">$1</strong>')
                        processedLine = processedLine.replace(/`(.*?)`/g, '<code class="bg-dark-800 px-2 py-1 rounded text-primary-400 font-mono text-sm">$1</code>')
                        processedLine = processedLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:underline">$1</a>')
                        return <p key={lineIndex} className="mb-3" dangerouslySetInnerHTML={{ __html: processedLine }} />
                      }
                      return <br key={lineIndex} />
                    })}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* My Journey */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-3xl text-primary-400" />
                  <h3 className="text-3xl font-bold text-gray-200">My AI & ML Journey</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.journey[0].links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all block"
                    >
                      <h4 className="text-xl font-semibold text-gray-200 mb-2">{link.name}</h4>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* AI & ML Resources */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <FaBook className="text-3xl text-primary-400" />
                  <h3 className="text-3xl font-bold text-gray-200">AI & ML Resources</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {resources.aiMl[0].links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-200 group-hover:text-primary-400 transition-colors">
                          {link.name}
                        </h4>
                        <FaExternalLinkAlt className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Research Papers & Articles */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <FaFileAlt className="text-3xl text-primary-400" />
                  <h3 className="text-3xl font-bold text-gray-200">Research Papers & Articles</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {resources.research[0].links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-200 group-hover:text-primary-400 transition-colors">
                          {link.name}
                        </h4>
                        <FaExternalLinkAlt className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Learning Roadmap */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <FaRoute className="text-3xl text-primary-400" />
                  <h3 className="text-3xl font-bold text-gray-200">Learning Roadmap</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {resources.roadmap[0].links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all block"
                    >
                      <h4 className="text-xl font-semibold text-gray-200 mb-2">{link.name}</h4>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
