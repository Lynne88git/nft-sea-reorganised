import React from 'react'
import Image from 'next/image'
import Close from '../../public/static/close.svg'
import { NFTCardType } from '../nft-collection/NFT_Collection'

export interface NFTCardModalProps {
  nft: NFTCardType
  tokenID: string
  tokenURI: string
  owner: string
  onClose: () => void
}

export const NFTCardModal = ({
  nft,
  tokenID,
  tokenURI,
  owner,
  onClose,
}: NFTCardModalProps) => {
  return (
    <div className="fixed z-100 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur"></div>
        <div className="relative bg-black rounded-xl p-8 z-20 grid grid-cols-3 gap-8 w-4/5 h-2/3">
          <div className="col-span-1">
            {/* <Image
              src={tokenURI}
              alt={tokenID}
              className="mx-auto m-4 object-cover h-[285px] rounded-sm"
              width={257}
              height={216}
            /> */}
            <div>
              <select
                id="select"
                name="select"
                className="py-2 c-width bg-customGray block mx-auto mt-1 rounded-sm border-gray-300 shadow-sm focus:border-black-300 focus:ring focus:ring-black-200 focus:ring-opacity-50"
              >
                <option>{owner}</option>
              </select>
            </div>
          </div>
          <div className="col-span-2">
            <div className="border-b border-white-200 border-opacity-20 pb-2 mb-4">
              <h2 className="font-medium text-2xl nft-title">{tokenID}</h2>

              <h6 className="font-medium text-base pt-4">Description</h6>
              <p className="text-gray-700 py-2 text-sm">{owner}</p>
            </div>
          </div>
          <button onClick={onClose} className="absolute z-50 top-4 right-4">
            <Image src={Close} alt="close" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
