import Link from 'next/link'

import LanguageSelector from '../../LanguageSelector'
import ThemeSelector from '../../ThemeSelector'

import NextjsIcon from '../../../assets/nextjs.svg'

const Navigation: React.FC = () => {
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
        <ThemeSelector />
      </div>
    </nav>
  )
}

export default Navigation
