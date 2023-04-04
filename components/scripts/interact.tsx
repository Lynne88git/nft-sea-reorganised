// import { getDefaultProvider } from 'ethers'
// import dotenv from 'dotenv'
// dotenv.config()



// const NEXT_PUBLIC_ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
// const NEXT_PRIVATE_KEY_METAMASK = process.env.NEXT_PRIVATE_KEY_METAMASK
// const NEXT_PUBLIC_NFT_ADDRESS = process.env.NEXT_PUBLIC_NFT_ADDRESS

// const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json')
// interact.js
// const ABI =
//   'https://github.com/LinumLabs/web3-task-abi/blob/dev/Musharka721.json'

// // provider - Alchemy
// const alchemyProvider = new ethers.providers.AlchemyProvider(
//   (network = 'goerli'),
//   NEXT_PUBLIC_ALCHEMY_API_KEY
// )

// // signer - you
// const signer = new ethers.Wallet(NEXT_PRIVATE_KEY_METAMASK, alchemyProvider)

// // contract instance
// const helloWorldContract = new ethers.Contract(
//   NEXT_PUBLIC_NFT_ADDRESS,
//   contract.ABI,
//   signer
// )

// async function main() {
//   const message = await helloWorldContract.message()
//   console.log('The message is: ' + message)

//   console.log('Updating the message...')
//   const tx = await helloWorldContract.update('this is the new message')
//   await tx.wait()

//   const newMessage = await helloWorldContract.message()
//   console.log('The new message is: ' + newMessage)
// }

// main()

// //npx typechain --target=ethers --etherscan-api-key b42146b063c7d6ee1358846c198246239e9360e8 --endpoint https://goerli.etherscan.io/address/0x3D216932E996c025E1d417c0396b1105a68963c6
