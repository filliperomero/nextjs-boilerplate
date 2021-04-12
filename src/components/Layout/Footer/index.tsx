import useTranslator from '@hooks/useTranslator'

const Footer: React.FC = () => {
  return (
    <footer className="flex h-16 w-full p-5">
      <p>{useTranslator('common', 'footerMessage')}</p>
    </footer>
  )
}

export default Footer
