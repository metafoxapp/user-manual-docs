import React from 'react'
import type { AppProps } from 'next/app'

function findTitleInMap(pageMap: any[], path: string): string | undefined {
    for (const item of pageMap) {
        if (item.route === path) {
            if (item.frontMatter?.title) return item.frontMatter.title
            if (item.title) return item.title
        }
        if (item.children) {
            const t = findTitleInMap(item.children, path)
            if (t) return t
        }
    }
}

export default function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        if (typeof window === 'undefined') return
        try {
            const internal = (globalThis as any)[Symbol.for('__nextra_internal__')]
            const pageMap = internal?.pageMap
            const path = window.location.pathname.replace(/\/+$/, '') || '/'

            let title: string | undefined
            if (pageMap) title = findTitleInMap(pageMap, path)

            // try common fallbacks from pageProps
            if (!title) {
                title = (pageProps as any)?.pageOpts?.title || (pageProps as any)?.title || (pageProps as any)?.frontMatter?.title
            }

            if (title) {
                document.title = `${title} - phpFox User Manual`
                return
            }

            // final fallback: read first H1 on the page after render
            // setTimeout(() => {
            //     const h1 = document.querySelector('main h1, h1')
            //     if (h1 && h1.textContent) {
            //         document.title = `${h1.textContent.trim()} - phpFox User Manual`
            //     }
            // }, 40)
        } catch (e) {
            // silent
        }
    }, [pageProps])

    return <Component {...pageProps} />
}