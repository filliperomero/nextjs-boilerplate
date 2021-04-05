import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import LanguageSelector from '../components/LanguageSelector'
import DarkModeIcon from '../assets/moon.svg'
import LightModeIcon from '../assets/sun.svg'

import useTranslator from '../hooks/useTranslator'

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="mt-28 flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-10 dark:text-purple-600">Next JS - Template</h1>
      <p className="mb-16 text-lg">{useTranslator('home.message')}</p>
      <LanguageSelector />
      <p className="mb-5 mt-5 text-xl dark:text-purple-600">{useTranslator('home.helloWorld')}</p>
      <button
        type="button"
        className="p-3 h-12 w-12 focus:outline-none"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  )
}

export default Home
