import { Layout } from '@/components/Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { theme } from '@/theme/theme';
import { AppMetaTags } from '@/components/MetaTags/AppMetaTags';
import Head from 'next/head';
import { GlobalStyles } from '@/components/GlobalStyles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <AppMetaTags />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
