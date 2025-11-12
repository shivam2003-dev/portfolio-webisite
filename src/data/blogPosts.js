export const blogPosts = [
  {
    id: 1,
    title: 'Why Momentum Really Works',
    date: '2025-11-12',
    excerpt: 'A simplified explanation of how momentum optimization accelerates gradient descent and why it works so effectively.',
    content: `
# Why Momentum Really Works

## The Problem with Gradient Descent

Gradient descent is like walking down a hill - you follow the steepest path downward. It's simple and reliable, but it can be painfully slow. As you get closer to the bottom, progress often grinds to a halt, especially in regions with "pathological curvature" - think narrow valleys, trenches, or ravines where the landscape isn't scaled properly.

## What is Momentum?

Momentum is a simple but powerful tweak to gradient descent. Instead of just using the current gradient, momentum gives the algorithm a "short-term memory" by combining the current gradient with previous gradients:

\`\`\`
z^(k+1) = β·z^k + ∇f(w^k)
w^(k+1) = w^k - α·z^(k+1)
\`\`\`

Where:
- **β** (beta) is the momentum coefficient, typically 0.99
- **α** (alpha) is the step size
- **z** is the momentum term that accumulates gradients

## Why Does It Work?

### 1. **Acceleration Through Valleys**
Momentum acts like a heavy ball rolling down a hill. Once it starts moving in a direction, it maintains that momentum, allowing it to barrel through narrow valleys and small humps that would slow down regular gradient descent.

### 2. **Dampening Oscillations**
In steep canyons, gradient descent oscillates back and forth. Momentum smooths these oscillations by averaging gradients over time, leading to more stable convergence.

### 3. **Quadratic Speedup**
Momentum can provide up to a quadratic speedup on many functions - similar to the speedup you get from Fast Fourier Transform or Quicksort. This is a significant improvement!

### 4. **Larger Step Sizes**
Momentum allows you to use larger step sizes safely. The accumulated momentum helps push through regions where gradient descent would be too cautious.

## The Key Insight

The magic happens because momentum accumulates information from past gradients. When you're in a consistent direction (like a valley), the momentum builds up, accelerating progress. When gradients change direction frequently, momentum helps average them out, reducing oscillations.

## Real-World Analogy

Think of gradient descent as a person walking down a hill - careful, steady, but slow. Momentum is like that same person on a skateboard - they can build up speed, coast through flat areas, and maintain direction even when the gradient changes slightly.

## Conclusion

Momentum isn't just a "hack" to speed things up - it's a principled optimization technique that leverages the structure of the optimization landscape. By maintaining a memory of past gradients, it can navigate complex terrains more efficiently than vanilla gradient descent.

**Reference:** [Why Momentum Really Works - Distill.pub](https://distill.pub/2017/momentum/)
    `,
    tags: ['Machine Learning', 'Optimization', 'Deep Learning', 'Gradient Descent'],
    readTime: '5 min read',
    author: 'Shivam Kumar',
  },
]

export const resources = {
  journey: [
    {
      title: 'My AI & ML Journey',
      description: 'Documenting my learning path in artificial intelligence and machine learning',
      links: [
        { name: 'Learning Roadmap', url: '#', description: 'Step-by-step guide to learning AI/ML' },
        { name: 'Projects Portfolio', url: '#', description: 'Hands-on projects and implementations' },
        { name: 'Course Notes', url: '#', description: 'Notes from courses and tutorials' },
      ],
    },
  ],
  aiMl: [
    {
      title: 'AI & ML Resources',
      description: 'Curated resources for learning and staying updated',
      links: [
        { name: 'Hugging Face', url: 'https://huggingface.co', description: 'Transformers library and model hub' },
        { name: 'Papers With Code', url: 'https://paperswithcode.com', description: 'Latest research papers with implementations' },
        { name: 'Fast.ai', url: 'https://www.fast.ai', description: 'Practical deep learning courses' },
        { name: 'Andrew Ng Courses', url: 'https://www.coursera.org/instructor/andrewng', description: 'Machine learning and deep learning courses' },
      ],
    },
  ],
  research: [
    {
      title: 'Research Papers & Articles',
      description: 'Important papers and articles I follow',
      links: [
        { name: 'ArXiv ML', url: 'https://arxiv.org/list/cs.LG/recent', description: 'Latest machine learning papers' },
        { name: 'Distill.pub', url: 'https://distill.pub', description: 'Clear explanations of ML concepts' },
        { name: 'Google AI Blog', url: 'https://ai.googleblog.com', description: 'Google AI research updates' },
        { name: 'OpenAI Blog', url: 'https://openai.com/blog', description: 'OpenAI research and updates' },
      ],
    },
  ],
  roadmap: [
    {
      title: 'Learning Roadmap',
      description: 'Structured learning paths',
      links: [
        { name: 'ML Fundamentals', url: '#', description: 'Statistics, linear algebra, calculus basics' },
        { name: 'Deep Learning', url: '#', description: 'Neural networks, CNNs, RNNs, Transformers' },
        { name: 'LLMs & NLP', url: '#', description: 'Large language models and natural language processing' },
        { name: 'MLOps', url: '#', description: 'Deploying and managing ML models in production' },
      ],
    },
  ],
}

