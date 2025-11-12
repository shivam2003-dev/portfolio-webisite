import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaBlog, FaCalendarAlt, FaClock, FaTag, FaArrowRight, FaGraduationCap, FaTimes } from 'react-icons/fa'
import { blogPosts } from '../data/blogPosts'
import { useState, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const location = useLocation()
  const [selectedTag, setSelectedTag] = useState(null)

  // Check if there's a filter tag in location state
  useEffect(() => {
    if (location.state?.filterTag) {
      setSelectedTag(location.state.filterTag)
      // Clear the state after using it
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

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

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return blogPosts
    return blogPosts.filter(post => post.tags.includes(selectedTag))
  }, [selectedTag])

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

          {/* Course Website Link */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <motion.a
              href="https://shivam2003-dev.github.io/mindstack/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 glass-effect px-8 py-4 rounded-xl border border-primary-500/30 hover:border-primary-500/50 transition-all group"
            >
              <FaGraduationCap className="text-2xl text-primary-400" />
              <div className="text-left">
                <div className="font-semibold text-gray-200 group-hover:text-primary-400 transition-colors">
                  Explore My Learning Platform
                </div>
                <div className="text-sm text-gray-400">mindstack - Comprehensive courses on ML, DevOps & more</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Tag Filter */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-gray-400 font-semibold">Filter by tag:</span>
              {selectedTag && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSelectedTag(null)}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary-600 transition-colors"
                >
                  <FaTimes />
                  Clear filter
                </motion.button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedTag === tag
                      ? 'bg-primary-500 text-white border-2 border-primary-400'
                      : 'glass-effect text-gray-400 border border-primary-500/20 hover:border-primary-500/50 hover:text-primary-400'
                  }`}
                >
                  <FaTag className="inline mr-1 text-xs" />
                  {tag}
                </motion.button>
              ))}
            </div>
            {selectedTag && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-gray-400"
              >
                Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} tagged with <span className="text-primary-400 font-semibold">"{selectedTag}"</span>
              </motion.p>
            )}
          </motion.div>

          {/* Blog Posts */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="space-y-6"
          >
              {filteredPosts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 glass-effect rounded-xl border border-primary-500/20"
                >
                  <p className="text-xl text-gray-400">No posts found with the selected tag.</p>
                  <button
                    onClick={() => setSelectedTag(null)}
                    className="mt-4 text-primary-400 hover:text-primary-300 underline"
                  >
                    Show all posts
                  </button>
                </motion.div>
              ) : (
                filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect p-8 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
                >
                  {/* Image Preview */}
                  {post.image && (
                    <div className="mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
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
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <motion.button
                            key={tagIndex}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedTag(tag)}
                            className="px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-400 hover:bg-primary-500/30 transition-colors cursor-pointer"
                          >
                            <FaTag className="inline mr-1 text-xs" />
                            {tag}
                          </motion.button>
                        ))}
                      </div>
                      
                      {/* Read More Button */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white hover:from-primary-400 hover:to-primary-500 transition-all"
                      >
                        Read Full Article
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </motion.article>
                ))
              )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
