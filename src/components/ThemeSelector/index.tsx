import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import LightModeIcon from '../../assets/sun.svg'
import DarkModeIcon from '../../assets/moon.svg'

const ThemeSelector: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      className="h-8 w-8 focus:outline-none"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && theme === 'dark' ? (
        <LightModeIcon className="hover:text-gray-300" />
      ) : (
        <DarkModeIcon className="hover:text-gray-800" />
      )}
    </button>
  )
}

export default ThemeSelector
