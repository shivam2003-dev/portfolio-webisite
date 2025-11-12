import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blogPosts'
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaUser } from 'react-icons/fa'
import Navigation from '../components/Navigation'
import ScrollProgress from '../components/ScrollProgress'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-900 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/#blog" className="text-primary-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // Simple markdown parser
  const renderMarkdown = (content) => {
    const lines = content.split('\n')
    const elements = []
    let inCodeBlock = false
    let codeBlockContent = []
    let codeBlockLanguage = ''
    let inList = false
    let listItems = []

    const closeList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-4 ml-6">
            {listItems}
          </ul>
        )
        listItems = []
        inList = false
      }
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      // Handle code blocks
      if (trimmed.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre key={`code-${index}`} className="bg-dark-800 p-4 rounded-lg overflow-x-auto my-4 border border-dark-700">
              <code className="text-gray-300 font-mono text-sm">{codeBlockContent.join('\n')}</code>
            </pre>
          )
          codeBlockContent = []
          inCodeBlock = false
        } else {
          // Start code block
          codeBlockLanguage = trimmed.substring(3).trim()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // Headers
      if (trimmed.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-4xl font-bold text-gray-200 mt-8 mb-4">
            {trimmed.substring(2)}
          </h1>
        )
        return
      }
      if (trimmed.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-3xl font-bold text-gray-200 mt-6 mb-3">
            {trimmed.substring(3)}
          </h2>
        )
        return
      }
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-2xl font-semibold text-gray-200 mt-5 mb-2">
            {trimmed.substring(4)}
          </h3>
        )
        return
      }
      if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-xl font-semibold text-gray-200 mt-4 mb-2">
            {trimmed.substring(5)}
          </h4>
        )
        return
      }

      // Empty lines
      if (trimmed === '') {
        elements.push(<br key={index} />)
        return
      }

      // Process inline markdown
      let processedLine = trimmed
      
      // Bold text
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary-400">$1</strong>')
      
      // Inline code
      processedLine = processedLine.replace(/`([^`]+)`/g, '<code class="bg-dark-800 px-2 py-1 rounded text-primary-400 font-mono text-sm">$1</code>')
      
      // Links
      processedLine = processedLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:underline">$1</a>')
      
      // Lists
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const listItem = trimmed.substring(2)
        let processedItem = listItem
        processedItem = processedItem.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary-400">$1</strong>')
        processedItem = processedItem.replace(/`([^`]+)`/g, '<code class="bg-dark-800 px-2 py-1 rounded text-primary-400 font-mono text-sm">$1</code>')
        processedItem = processedItem.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:underline">$1</a>')
        
        if (!inList) {
          closeList()
          inList = true
        }
        
        listItems.push(
          <li key={index} className="text-gray-300">
            <span dangerouslySetInnerHTML={{ __html: processedItem }} />
          </li>
        )
        return
      } else {
        // Close list if we encounter a non-list item
        if (inList) {
          closeList()
        }
      }

      // Regular paragraphs
      if (trimmed) {
        elements.push(
          <p key={index} className="mb-4 text-gray-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: processedLine }} />
        )
      }
    })

    return elements
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollProgress />
      <Navigation activeSection="blog" />
      
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-6 rounded-xl border border-primary-500/20 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-200 mb-4">All Posts</h3>
              <nav className="space-y-2">
                {blogPosts.map((blogPost) => (
                  <Link
                    key={blogPost.id}
                    to={`/blog/${blogPost.slug}`}
                    className={`block p-3 rounded-lg transition-all ${
                      blogPost.slug === slug
                        ? 'bg-primary-500/20 border border-primary-500/50 text-primary-400'
                        : 'text-gray-400 hover:bg-dark-800/50 hover:text-primary-400'
                    }`}
                  >
                    <div className="font-semibold text-sm">{blogPost.title}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatDate(blogPost.date)}
                    </div>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect p-8 md:p-12 rounded-xl border border-primary-500/20"
            >
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                  {post.title}
                </h1>
                
                {/* Image */}
                {post.image && (
                  <div className="mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                )}

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-2">
                    <FaUser className="text-primary-400" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-primary-400" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-primary-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => navigate('/#blog', { state: { filterTag: tag } })}
                      className="px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-sm text-primary-400 hover:bg-primary-500/30 transition-colors cursor-pointer"
                    >
                      <FaTag className="inline mr-1 text-xs" />
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </header>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                {renderMarkdown(post.content)}
              </div>
            </motion.div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

