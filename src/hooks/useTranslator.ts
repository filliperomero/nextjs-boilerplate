import { useTranslation } from 'react-i18next'

const Translator = (path: string): string => {
  const { t } = useTranslation()

  return t(path)
}

export default Translator
