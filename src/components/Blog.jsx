import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FaBlog, FaCalendarAlt, FaClock, FaTag, FaArrowRight } from 'react-icons/fa'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

          {/* Blog Posts */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="space-y-6"
          >
              {blogPosts.map((post, index) => (
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
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-400"
                          >
                            {tag}
                          </span>
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
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
