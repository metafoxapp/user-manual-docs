import React from 'react'

const config = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>phpFox User Manual</span>,

  project: {
    link: 'https://github.com/metafoxapp/user-manual-docs',
  },

  docsRepositoryBase: 'https://github.com/metafoxapp/user-manual-docs/tree/develop',

  footer: {
    content: (
      <span>
        {new Date().getFullYear()} © phpFox Documentation
      </span>
    ),
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s – phpFox User Manual'
    }
  },

  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="phpFox User Manual and Documentation" />
      <meta property="og:title" content="phpFox User Manual" />
      <meta property="og:description" content="Comprehensive user manual for phpFox social networking platform" />
    </>
  ),

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  toc: {
    backToTop: true,
  },

  search: {
    placeholder: 'Search documentation...',
  },

  editLink: {
    content: 'Edit this page on GitHub →'
  },

  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },

  darkMode: true,
}

export default config

