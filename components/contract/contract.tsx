import { ethers } from 'ethers'
import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import dotenv from 'dotenv'
dotenv.config()

// Load the environment variables
const NEXT_PUBLIC_ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
const NEXT_PRIVATE_KEY_METAMASK = process.env.NEXT_PRIVATE_KEY_METAMASK
const NEXT_PUBLIC_NFT_ADDRESS = process.env.NEXT_PUBLIC_NFT_ADDRESS

if (!NEXT_PUBLIC_ALCHEMY_API_KEY) {
  throw new Error('NEXT_PUBLIC_ALCHEMY_API_KEY is not defined')
}

if (!NEXT_PRIVATE_KEY_METAMASK) {
  throw new Error('NEXT_PRIVATE_KEY_METAMASK is not defined')
}

if (!NEXT_PUBLIC_NFT_ADDRESS) {
  throw new Error('NEXT_PUBLIC_NFT_ADDRESS is not defined')
}

// Set up the Alchemy provider
const alchemyWeb3 = createAlchemyWeb3(
  `https://eth-goerli.alchemyapi.io/v2/${NEXT_PUBLIC_ALCHEMY_API_KEY}`
)

// Set up the Web3Provider and contract object
const provider = new ethers.providers.Web3Provider(alchemyWeb3)
const contractAddress = NEXT_PUBLIC_NFT_ADDRESS
const abi = JSON.parse(
  '{"abi":[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}'
)
const contract = new ethers.Contract(contractAddress, abi, provider)

// Set up the wallet object with the private key
const wallet = new ethers.Wallet(NEXT_PRIVATE_KEY_METAMASK, provider)

// Set the default account to use with the contract
contract.connect(wallet)

export async function getContractName() {
  try {
    const contractName = await contract.name()
    return contractName
  } catch (error) {
    console.error(error)
  }
}
