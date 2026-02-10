# Installation & Setup Guide

## Prerequisites
- Node.js 16+ and npm installed

## Installation Steps
1. **Install dependencies:**
   ```bash
   npm install
   ```

2**Start the development server:**
   ```bash
   npm run dev
   ```

3**Open your browser:**
   Navigate to http://localhost:3000

## Available Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run export` - Export static site to `out/` directory

## Project Structure

```
user-manual-docs/
├── pages/                          # Documentation pages
│   ├── index.mdx                   # Homepage
│   ├── _app.jsx                    # Custom App component
│   ├── _meta.json                  # Navigation configuration
│   ├── getting-started/            # Getting Started section
│   │   ├── _meta.json
│   │   ├── installation.mdx
│   │   ├── quick-start.mdx
│   │   └── configuration.mdx
│   ├── user-guide/                 # User Guide section
│   │   ├── _meta.json
│   │   ├── dashboard.mdx
│   │   ├── users.mdx
│   │   ├── content.mdx
│   │   └── moderation.mdx
│   ├── advanced/                   # Advanced Topics
│   │   ├── _meta.json
│   │   ├── customization.mdx
│   │   ├── performance.mdx
│   │   └── plugins.mdx
│   └── api-reference/              # API Documentation
│       ├── _meta.json
│       ├── overview.mdx
│       ├── authentication.mdx
│       └── endpoints.mdx
├── styles/                         # Stylesheets
│   └── globals.css
├── next.config.mjs                 # Next.js configuration
├── theme.config.jsx                # Nextra theme configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # Project README

```

## What's Included

### Documentation Sections:

1. **Getting Started**
   - Installation guide with system requirements
   - Quick start guide with step-by-step setup
   - Configuration guide for database, cache, email, etc.

2. **User Guide**
   - Dashboard overview with widgets and analytics
   - User management with roles and permissions
   - Content management for posts, photos, videos
   - Moderation tools for community safety

3. **Advanced**
   - Customization guide for themes and branding
   - Performance optimization tips
   - Plugins and extensions

4. **API Reference**
   - API overview and introduction
   - Authentication with API keys and OAuth
   - Complete endpoint documentation

### Features:

- ✅ Responsive design (mobile-friendly)
- ✅ Search functionality
- ✅ Dark mode support
- ✅ Table of contents on each page
- ✅ Breadcrumb navigation
- ✅ Syntax highlighting for code blocks
- ✅ MDX support (Markdown + React components)
- ✅ SEO optimized

## Customization

### Update Site Name and Logo

Edit `theme.config.jsx`:

```jsx
export default {
  logo: <span>Your Site Name</span>,
  project: {
    link: 'https://github.com/yourorg/yourrepo',
  },
  // ... other settings
}
```

### Add New Pages

1. Create a new `.mdx` file in the `pages/` directory
2. Add an entry to the corresponding `_meta.json` file
3. The page will automatically appear in navigation

Example - Adding a new page `pages/troubleshooting.mdx`:

```json
// In pages/_meta.json
{
  "index": "Introduction",
  "getting-started": "Getting Started",
  "user-guide": "User Guide",
  "advanced": "Advanced",
  "api-reference": "API Reference",
  "troubleshooting": "Troubleshooting"  // Add this
}
```

### Customize Theme Colors

Edit `theme.config.jsx` to change colors, fonts, and other styling options.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Export Static Site

```bash
npm run export
```

This creates a static site in the `out/` directory that can be hosted anywhere.

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Clear Cache

If you encounter build issues:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Dependencies Not Installing

Make sure you have Node.js 16+ installed:
```bash
node --version
npm --version
```

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Customize the content in MDX files
4. Update theme.config.jsx with your branding
5. Add more pages as needed
6. Deploy to your hosting platform

## Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **Nextra**: https://nextra.site
- **This project**: Check the README.md

Enjoy your new documentation site! 🎉
