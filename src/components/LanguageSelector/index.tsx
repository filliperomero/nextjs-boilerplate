import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Flag from './Flag'

const I18n: React.FC = () => {
  const { locale, pathname } = useRouter()

  return (
    <div className="flex items-center gap-3">
      <Link href={pathname} locale="pt-br">
        <Flag flag="brazil" isSelected={locale === 'pt-BR'} />
      </Link>
      <Link href={pathname} locale="en">
        <Flag flag="usa" isSelected={locale === 'en'} />
      </Link>
    </div>
  )
}

export default I18n
