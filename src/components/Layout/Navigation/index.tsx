import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import LanguageSelector from '../../LanguageSelector'

import DarkModeIcon from '@assets/svg/Moon'
import LightModeIcon from '@assets/svg/Sun'
import NextjsIcon from '@assets/svg/Nextjs'

const Navigation: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <nav className="flex py-3 px-10 justify-between items-center bg-green-700">
      <div className="flex flex-row items-center">
        <NextjsIcon className="h-12 w-12" />
        <p className="ml-5">Next.js Boilerplate</p>
      </div>
      <div className="flex gap-8">
        <Link href="/">
          <a className="dark:hover:text-purple-500 hover:text-white">Home</a>
        </Link>
        <Link href="/second-page">
          <a className="dark:hover:text-purple-500 hover:text-white">Second Page</a>
        </Link>
      </div>
      <div className="flex items-center gap-16">
        <LanguageSelector />
        <button
          type="button"
          className="h-8 w-8 focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </nav>
  )
}

export default Navigation
