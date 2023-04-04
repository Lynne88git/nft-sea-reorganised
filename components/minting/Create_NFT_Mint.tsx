import { ethers } from 'ethers'

export async function Create_NFT_Mint(
  tokenURI: string,
  signer: ethers.Signer,
  contractAddress: string
) {
  try {
    const network = await signer.provider?.getNetwork()
    if (!network) {
      throw new Error('Unable to determine network')
    }

    const transactionCount = await signer.getTransactionCount('latest')
    const chainId = network.chainId
    const gasPrice = await signer.getGasPrice()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    const mintTx = await contract.populateTransaction.mint(
      signer.getAddress(),
      tokenURI
    )

    const txParams = {
      nonce: ethers.utils.hexlify(transactionCount),
      gasPrice: ethers.utils.hexlify(gasPrice),
      gasLimit: ethers.utils.hexlify(
        await signer.estimateGas(mintTx, { from: signer.getAddress() })
      ),
      chainId: chainId,
      to: contractAddress,
      value: '0x0',
      data: mintTx.data,
    }

    console.log('Creating NFT mint transaction...')

    const signedTx = await signer.signTransaction(txParams)
    const tx = await signer.provider?.sendTransaction(signedTx)

    console.log(`Transaction hash: ${tx?.hash}`)

    console.log('NFT minted successfully!')
  } catch (error) {
    console.error('Failed to mint NFT:', error)
  }
}
