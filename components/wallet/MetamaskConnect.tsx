import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import Image from 'next/image'
import Metamask from '../../public/static/metamask.svg'
import Personal from 'web3-eth-personal'
import { getAbiString } from '../abi/ABI'
import { useEthers, Goerli } from '@usedapp/core'
import { WalletInstallation } from './WalletInstallation'

interface Window {
  ethereum?: any
}

const provider = new Web3(Web3.givenProvider)
const address = '0x3D216932E996c025E1d417c0396b1105a68963c6'
const personal = new Personal(Web3.givenProvider)

export default function MetamaskConnect() {
  const { activateBrowserWallet, deactivate, account, chainId, switchNetwork } =
    useEthers()
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isWindowDefined, setIsWindowDefined] = useState<boolean>(false)

  async function connectToContract() {
    try {
      const abiString = await getAbiString()
      if (!abiString) {
        throw new Error('ABI string is undefined')
      }
      const contract = new provider.eth.Contract(JSON.parse(abiString), address)
      console.log('Contract address:', address)
      const accounts = await provider.eth.requestAccounts()
      const message = 'Sign in with MetaMask'
      const signature = await personal.sign(message, accounts[0], '')
      const userAccounts = await provider.eth.getAccounts()
      const userAccount = userAccounts[0]
      console.log('User account:', userAccount)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setIsWindowDefined(!!window)
  }, [])

  useEffect(() => {
    setIsConnected(!!account)
  }, [account])

  return (
    <>
      {isWindowDefined &&
        !isConnected &&
        ((window as Window).ethereum ? (
          <button
            className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
            onClick={() => {
              activateBrowserWallet()
              connectToContract()
            }}
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
        ) : (
          <WalletInstallation />
        ))}
      {isConnected && chainId === Goerli.chainId && (
        <button
          className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
          onClick={() => deactivate()}
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
      )}
      {isConnected && chainId !== Goerli.chainId && (
        <>
          <p className="text-red">You need to switch to the Goerli Network.</p>
          <button
            className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
            onClick={() => switchNetwork(Goerli.chainId)}
          >
            Switch Network
          </button>
        </>
      )}
    </>
  )
}
