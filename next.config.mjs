import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  // Next.js 15 configuration
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Static export for deployment
  trailingSlash: true,
  distDir: 'out',
})
