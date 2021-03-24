import { Layout } from '@/components/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '@/theme/theme'
import { AppMetaTags } from '@/components/MetaTags/AppMetaTags'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppMetaTags />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}


export default MyApp