import { useEffect, useState } from 'react'
import { useEthers } from '@usedapp/core'
import Image from 'next/image'
import FetchNFTs, { Nft } from '../graph-queries/queries'
import { NFTCardModal, NFTCardModalProps } from '../modals/NFTCardModal'

export interface NFTCollectionProps {
  nfts: Nft[]
}

export interface NFTCardType {
  id: string
  tokenURI: string
  owner: string
}

export const NFTCollection = ({}: NFTCollectionProps) => {
  const [selectedNFT, setSelectedNFT] = useState<Nft | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nfts, setNfts] = useState<Nft[]>([])

  useEffect(() => {
    const fetchNfts = async () => {
      const nfts = await FetchNFTs()
      setNfts(nfts)
    }
    fetchNfts()
  }, [])

  const { account, chainId } = useEthers()

  const openModal = (nft: Nft) => {
    setSelectedNFT(nft)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedNFT(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white bg-opacity-10 rounded-lg border border-white w-4/5 p-4 mx-auto text-center mb-8">
          <h1 className="text-center lg-heading mb-4">Listing Owned NFTs</h1>
          <div className="max-w-xs mx-auto"></div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-4/5 mx-auto text-left">
          {nfts.map((nft: Nft) => (
            <div
              key={nft.id}
              className="card bg-white bg-opacity-10 rounded-lg border border-white"
              onClick={() => openModal(nft)}
            >
              <div className="card bg-white bg-opacity-10 rounded-lg border border-white">
                Token ID: {nft.id}
                Token URI: {nft.tokenURI}
                Owner: {nft.owner}
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedNFT && (
          <NFTCardModal
            nft={selectedNFT}
            onClose={closeModal}
            tokenID={selectedNFT.id}
            tokenURI={selectedNFT.tokenURI}
            owner={selectedNFT.owner}
          />
        )}
      </div>
    </>
  )
}

export default NFTCollection
