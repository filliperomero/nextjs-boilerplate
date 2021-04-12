import NextHead from 'next/head'

type IHeadProps = {
  title?: string
  description?: string
}

const Head: React.FC<IHeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
    </NextHead>
  )
}

export default Head
