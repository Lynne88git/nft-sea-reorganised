import Image from 'next/image'
import Metamask from '../../public/static/metamask.svg'
import { useEthers } from '@usedapp/core'
import { useState, useEffect } from 'react'
import ABI from '../abi/ABI'

interface Window {
  ethereum?: any
}

export default function WalletConnectMetamask() {
  const { activateBrowserWallet, deactivate, account, library } = useEthers()
  const [hasMetamask, setHasMetamask] = useState<boolean>(false)
  const [abi, setAbi] = useState<any>()

  useEffect(() => {
    setHasMetamask(!!(window as Window).ethereum)
    ABI().then(ABI => setAbi(ABI))
  }, [])

  async function connect(): Promise<void> {
    await activateBrowserWallet()
  }

  async function disconnect(): Promise<void> {
    await deactivate()
  }

  const contractAddress =
    'https://goerli.etherscan.io/address/0x3D216932E996c025E1d417c0396b1105a68963c6'

  return (
    <div>
      {hasMetamask ? (
        account ? (
          <div>
            <p>Connected! Address: {account}</p>
            <button
              className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
              onClick={() => disconnect()}
            >
              <Image
                src={Metamask}
                alt="connect-metamask"
                className="mr-2"
                width={20}
                height={20}
              />
              Disconnect
            </button>
          </div>
        ) : (
          <button
            className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
            onClick={() => connect()}
          >
            <Image
              src={Metamask}
              alt="connect-metamask"
              className="mr-2"
              width={20}
              height={20}
            />
            Connect MetaMask
          </button>
        )
      ) : (
        <p>Please install Metamask</p>
      )}
      {account && abi ? <button>Execute</button> : ''}
    </div>
  )
}
