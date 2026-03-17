import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
    // Extract title from pageProps (Nextra provides this)
    const pageTitle = (pageProps as any)?.pageOpts?.title || 
                     (pageProps as any)?.title || 
                     (pageProps as any)?.frontMatter?.title
    
    const fullTitle = pageTitle 
        ? `${pageTitle} – phpFox User Manual`
        : 'phpFox User Manual'
    
    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content="phpFox User Manual and Documentation" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
