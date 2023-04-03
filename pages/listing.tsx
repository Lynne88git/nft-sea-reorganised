import { NFTCollection } from '@/components/nft-collection/NFT_Collection'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import FetchNFTs, { Nft } from '../components/graph-queries/queries'
const Listing = () => {
  const router = useRouter()
  const [nfts, setNfts] = useState<Nft[]>([])

  useEffect(() => {
    const fetchNfts = async () => {
      const nfts = await FetchNFTs()
      setNfts(nfts)
    }
    fetchNfts()
  }, [])

  return (
    <div>
      <NFTCollection nfts={nfts} />
    </div>
  )
}

export default Listing
