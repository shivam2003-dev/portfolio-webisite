# 🚀 Shivam Kumar - Portfolio Website

A stunning, scroll-based storytelling portfolio website for a DevOps/SRE engineer, built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Scroll-Based Storytelling**: Smooth, animated sections that reveal as you scroll
- **Highly Animated**: Framer Motion animations throughout for a premium feel
- **Responsive Design**: Fully responsive and optimized for all devices
- **Modern UI/UX**: Beautiful glassmorphism effects, gradients, and particle backgrounds
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-webiste
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Sections

1. **Hero** - Introduction with animated background and social links
2. **About** - Personal story and professional highlights
3. **Skills** - Technical expertise with animated progress bars
4. **Experience** - Work history with timeline visualization
5. **Projects** - Featured projects and contributions
6. **Blog** - Placeholder section with instructions for adding blog posts
7. **Contact** - Contact information and social links

## 📝 Adding Blog Posts

The blog section includes detailed instructions on how to add blog posts later. Here's a quick overview:

1. Create a blog data file (`src/data/blogPosts.js`)
2. Update the Blog component to map through posts
3. Optionally add React Router for individual post pages
4. Style and enhance with features like search and filtering

See `src/components/Blog.jsx` for detailed instructions.

## 🚀 Deployment

This project is configured for GitHub Pages deployment with CI/CD.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Select "GitHub Actions" as the source
3. The workflow will automatically deploy on push to `main` branch

### Manual Deployment

```bash
npm run build
# Deploy the dist folder to your hosting provider
```

## 🔧 Configuration

- Update social links in `src/components/Hero.jsx` and `src/components/Contact.jsx`
- Modify personal information in component files
- Customize colors in `tailwind.config.js`
- Update base path in `vite.config.js` if needed

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shivam Kumar**
- GitHub: [@shivam2003-dev](https://github.com/shivam2003-dev)
- LinkedIn: [shivam-kumar2003](https://www.linkedin.com/in/shivam-kumar2003/)
- Email: shivam.sk2003@gmail.com

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

