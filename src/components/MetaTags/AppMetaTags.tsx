import { theme } from '@/theme/theme'
import Head from 'next/head'

export const AppMetaTags = () => {
  return (
    <Head>
      <meta name="theme-color" content={theme.colors.gray['700']} />
    </Head>
  )
}