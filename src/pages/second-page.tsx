import { GetServerSideProps } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import useTranslator from '../hooks/useTranslator'

const SecondPage: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white items-center pt-24">
      <h1 className="text-3xl mb-10 dark:text-purple-600">
        {useTranslator('second-page', 'title')}
      </h1>
      <p className="text-lg">{useTranslator('second-page', 'bodyMessage')}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['second-page']))
    }
  }
}

export default SecondPage
