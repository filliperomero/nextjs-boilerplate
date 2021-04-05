import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { I18nextProvider } from 'react-i18next'

import i18n from '@config/i18n'
import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
