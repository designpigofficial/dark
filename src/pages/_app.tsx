import Head from 'next/head'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import customTheme from '../chakra-ui/customTheme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
