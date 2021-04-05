import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Flag from './Flag'

const I18n: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { i18n } = useTranslation()
  const selectedLanguage = i18n.language

  // mounted is necessary when using LanguageDetector package
  useEffect(() => setMounted(true), [])

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="flex gap-3 mb-4">
      {mounted && (
        <>
          <Flag
            flag="brazil"
            isSelected={selectedLanguage === 'pt-BR'}
            onClick={() => handleChangeLanguage('pt-BR')}
          />
          <Flag
            flag="usa"
            isSelected={selectedLanguage === 'en-US'}
            onClick={() => handleChangeLanguage('en-US')}
          />
        </>
      )}
    </div>
  )
}

export default I18n
