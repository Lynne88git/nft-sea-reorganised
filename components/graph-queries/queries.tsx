import gql from 'graphql-tag'
import client from './client'

async function FetchNFTs() {
  try {
    const response = await client.query({
      query: gql`
        query {
          nfts {
            id
            tokenURI
            owner
          }
        }
      `,
    })
    console.log(response.data.nfts)
    return response.data.nfts
  } catch (error) {
    console.error(error)
  }
}

export interface Nft {
  id: string
  tokenURI: string
  owner: string
}

export default FetchNFTs
