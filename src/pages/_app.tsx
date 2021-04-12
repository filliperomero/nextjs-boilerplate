import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'

import Layout from '../components/Layout'

import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
