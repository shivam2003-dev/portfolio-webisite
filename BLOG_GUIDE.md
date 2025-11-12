# Blog Post Guide

## How to Add a New Blog Post

### Step 1: Add to `src/data/blogPosts.js`

Add a new blog post object to the `blogPosts` array:

```javascript
{
  id: 2, // Unique ID (increment from last)
  slug: 'your-blog-post-slug', // URL-friendly version (e.g., 'getting-started-with-kubernetes')
  title: 'Your Blog Post Title',
  date: '2025-11-15', // Format: YYYY-MM-DD
  excerpt: 'A short description that appears in the blog list',
  image: '/images/your-image.png', // Optional: path to image in public folder, or null
  content: `
# Your Blog Title

Your content here in markdown format.

## Section 1

You can use:
- **Bold text** with \*\*bold\*\*
- *Italic text* with \*italic\*
- \`code\` with backticks
- [Links](https://example.com)
- Lists with - or *

### Code Blocks

\`\`\`
Your code here
\`\`\`

## Section 2

More content...
  `,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  readTime: '5 min read',
  author: 'Shivam Kumar',
}
```

### Step 2: Add Images (Optional)

1. Place your image in the `public/images/` folder
2. Reference it in the blog post: `image: '/images/your-image.png'`
3. Or use external URLs: `image: 'https://example.com/image.png'`

### Step 3: Markdown Formatting

The blog supports:
- **Headers**: `# H1`, `## H2`, `### H3`, `#### H4`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Code**: `` `code` ``
- **Code Blocks**: ` ```language code ``` `
- **Links**: `[text](url)`
- **Lists**: `- item` or `* item`

### Step 4: Test Locally

1. Run `npm run dev`
2. Navigate to `http://localhost:5173/portfolio-webisite/#blog`
3. Click on your new blog post
4. Verify formatting looks good

### Example Blog Post

```javascript
{
  id: 2,
  slug: 'understanding-kubernetes-pods',
  title: 'Understanding Kubernetes Pods',
  date: '2025-11-15',
  excerpt: 'A deep dive into Kubernetes pods and how they work in container orchestration.',
  image: '/images/kubernetes-pods.png',
  content: `
# Understanding Kubernetes Pods

Kubernetes pods are the smallest deployable units in Kubernetes...

## What is a Pod?

A pod is a group of one or more containers...

### Container Communication

Containers in the same pod can communicate via:

- **localhost**: They share the same network namespace
- **Shared volumes**: They can share storage
- **IPC**: Inter-process communication

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: app
    image: nginx:latest
\`\`\`

## Conclusion

Pods are fundamental to understanding Kubernetes...
  `,
  tags: ['Kubernetes', 'DevOps', 'Containers'],
  readTime: '8 min read',
  author: 'Shivam Kumar',
}
```

## Blog Post Structure

- **id**: Unique identifier (number)
- **slug**: URL-friendly identifier (used in URLs)
- **title**: Blog post title
- **date**: Publication date (YYYY-MM-DD)
- **excerpt**: Short description (shown in blog list)
- **image**: Image path or null
- **content**: Full blog content in markdown
- **tags**: Array of tag strings
- **readTime**: Estimated reading time
- **author**: Author name

## Tips

1. **Keep slugs unique**: Use lowercase, hyphens instead of spaces
2. **Write good excerpts**: 1-2 sentences that summarize the post
3. **Use images**: Visual content makes posts more engaging
4. **Tag appropriately**: Use 3-5 relevant tags
5. **Format consistently**: Use proper markdown formatting

## Adding Images

1. Create `public/images/` folder if it doesn't exist
2. Add your image file (PNG, JPG, etc.)
3. Reference it: `image: '/images/filename.png'`
4. Images will automatically be displayed in both the blog list and post page

