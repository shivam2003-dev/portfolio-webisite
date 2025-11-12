# 🚀 Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```
Visit `http://localhost:5173` to see your portfolio.

### 3. Build for Production
```bash
npm run build
```
The built files will be in the `dist` folder.

## GitHub Pages Deployment

### Initial Setup

1. **Create GitHub Repository**
   - Create a new repository on GitHub (e.g., `portfolio-webiste`)
   - Note: The repository name should match the `base` path in `vite.config.js`

2. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

3. **Push Your Code**
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-webiste.git
   git push -u origin main
   ```

4. **Copy Resume to Public Folder**
   ```bash
   cp "Shivam_s_Resumee (2).pdf" public/
   ```

5. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy on every push to `main`
   - Check the "Actions" tab in your repository to see the deployment status
   - Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-webiste/`

### Updating Base Path

If your repository name is different, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider:
   - Netlify: Drag and drop the `dist` folder
   - Vercel: Connect your GitHub repo and set build command to `npm run build`
   - Other providers: Upload the `dist` folder contents

## Customization

### Update Personal Information

1. **Hero Section**: `src/components/Hero.jsx`
   - Update name, role, company
   - Update social media links

2. **About Section**: `src/components/About.jsx`
   - Update experience years
   - Modify highlights and achievements

3. **Experience Section**: `src/components/Experience.jsx`
   - Update work experience details
   - Add/remove job entries

4. **Projects Section**: `src/components/Projects.jsx`
   - Update project details
   - Add/remove projects
   - Update GitHub links

5. **Contact Section**: `src/components/Contact.jsx`
   - Update contact information
   - Update social links

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  },
}
```

### Update Resume Link

Make sure your resume PDF is in the `public` folder and update the link in `src/components/Hero.jsx`:

```javascript
{ icon: FaFilePdf, href: '/Shivam_s_Resumee (2).pdf', label: 'Resume', download: true }
```

## Troubleshooting

### GitHub Pages Not Loading

1. Check that GitHub Actions workflow completed successfully
2. Verify the base path in `vite.config.js` matches your repository name
3. Ensure `.nojekyll` file exists in the `public` folder
4. Check repository Settings → Pages for any errors

### Build Errors

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check Node.js version (should be 18+):
   ```bash
   node --version
   ```

### Assets Not Loading

1. Ensure all assets are in the `public` folder
2. Use relative paths starting with `/` for public assets
3. Check browser console for 404 errors

## Performance Optimization

- Images: Optimize images before adding to `public` folder
- Code Splitting: Already configured with Vite
- Lazy Loading: Components use `useInView` for lazy loading
- Minification: Automatic in production build

## Support

For issues or questions:
- Check the [README.md](./README.md)
- Review GitHub Actions logs
- Check browser console for errors

---

Happy deploying! 🚀

