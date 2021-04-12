import { useTranslation } from 'next-i18next'

const Translator = (namespace: string, path: string): string => {
  const { t } = useTranslation(namespace)

  return t(path)
}

export default Translator
