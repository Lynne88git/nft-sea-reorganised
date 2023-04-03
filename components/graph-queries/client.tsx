import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/linumlabs/token-tracer-721',
  cache: new InMemoryCache(),
})
export default client
