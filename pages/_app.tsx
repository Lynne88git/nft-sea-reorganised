import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DAppProvider, Config, Goerli, Mainnet } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { ApolloProvider } from '@apollo/client'
import Layout from '@/components/layout/Layout'
import client from '../components/graph-queries/client'

const config: Config = {}

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    network: [Goerli],
    readOnlyChainId: Goerli.chainId,
    readOnlyUrls: {
      [Goerli.chainId]:
        'https://goerli.infura.io/v3/b1f214a6ed164748bbb9be2961bb9b45',
    },
  }

  return (
    <DAppProvider config={config}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </DAppProvider>
  )
}
