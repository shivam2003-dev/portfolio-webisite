import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBlog, FaCode, FaInfoCircle } from 'react-icons/fa'

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
              Blog & Articles
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Thoughts &</span>
              <br />
              <span className="text-gray-300">Learnings</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sharing knowledge about DevOps, SRE practices, and infrastructure automation
            </p>
          </motion.div>

          {/* Blog Placeholder */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-12 rounded-2xl border border-primary-500/30 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <FaBlog className="text-6xl text-primary-400" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-200 mb-4">
              Blog Coming Soon!
            </h3>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm working on creating content about DevOps practices, infrastructure automation,
              Kubernetes, and my experiences as an SRE. Check back soon for articles!
            </p>

            {/* Instructions Card */}
            <motion.div
              variants={itemVariants}
              className="mt-12 p-8 bg-dark-800/50 rounded-xl border border-primary-500/20 text-left max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaInfoCircle className="text-2xl text-primary-400" />
                <h4 className="text-xl font-semibold text-gray-200">
                  How to Add Blog Posts Later
                </h4>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <FaCode className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">1. Create Blog Component Structure</p>
                    <p className="text-sm text-gray-400">
                      Create a blog data file (e.g., <code className="text-primary-400">src/data/blogPosts.js</code>) 
                      to store your blog posts with metadata (title, date, excerpt, content, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCode className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">2. Update Blog Component</p>
                    <p className="text-sm text-gray-400">
                      Modify <code className="text-primary-400">src/components/Blog.jsx</code> to map 
                      through your blog posts and display them in cards or a list format.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCode className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">3. Add Blog Post Pages (Optional)</p>
                    <p className="text-sm text-gray-400">
                      For individual blog post pages, consider adding React Router and creating 
                      a <code className="text-primary-400">BlogPost.jsx</code> component with 
                      markdown support (using libraries like react-markdown).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCode className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">4. Example Blog Post Structure</p>
                    <pre className="text-xs bg-dark-900 p-3 rounded mt-2 overflow-x-auto">
{`const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Kubernetes",
    date: "2024-01-15",
    excerpt: "Learn the basics of Kubernetes...",
    content: "...",
    tags: ["Kubernetes", "DevOps", "Cloud"]
  }
]`}
                    </pre>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCode className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">5. Styling & Features</p>
                    <p className="text-sm text-gray-400">
                      Add features like search, filtering by tags, reading time estimates, 
                      and social sharing buttons to enhance the blog experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Placeholder for Future Blog Posts */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {[1, 2].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect p-6 rounded-xl border border-primary-500/20 opacity-50"
                >
                  <div className="h-4 bg-dark-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-dark-700 rounded w-1/2 mb-4"></div>
                  <div className="h-32 bg-dark-700 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-dark-700 rounded w-20"></div>
                    <div className="h-6 bg-dark-700 rounded w-20"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog

