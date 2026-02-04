import React from 'react'
import TagManager from 'react-gtm-module'

const config = {
  logo: <img src="/logo.png" alt="document" height="32px" width={112} />,
  logoLink: '/',
  project: {
    link: 'https://github.com/metafoxapp/user-manual-docs',
  },

  docsRepositoryBase: 'https://github.com/metafoxapp/user-manual-docs/tree/develop',

  footer: {
    content: (
        <>
          <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WB52HRS"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <span>
          Copyright {new Date().getFullYear()} © &nbsp;
              <a href="https://phpfox.com" target="_blank">
            phpFox LLC
          </a>
          . All rights reserved.
        </span>
        </>
    ),
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s – phpFox User Manual'
    }
  },

  head: () => {
    React.useEffect(() => {
      TagManager.initialize({
        gtmId: "GTM-WB52HRS",
      });
    }, [])

    return (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="phpFox User Manual and Documentation"/>
          <meta property="og:title" content="phpFox User Manual"/>
          <meta property="og:description" content="Comprehensive user manual for phpFox social networking platform"/>
        </>
    )
  },

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
    content: 'Edit this page →'
  },

  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },

  darkMode: true,
}

export default config

