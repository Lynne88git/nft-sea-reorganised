import Web3 from 'web3'

const contractAddress = '0x3D216932E996c025E1d417c0396b1105a68963c6'
const contractAbiUrl =
  'https://raw.githubusercontent.com/LinumLabs/web3-task-abi/dev/Musharka721.json'

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://goerli.infura.io/v3/b1f214a6ed164748bbb9be2961bb9b45'
  )
)

export async function getContractName() {
  try {
    const contractAbiResponse = await fetch(contractAbiUrl)
    const contractAbi = await contractAbiResponse.json()
    console.log(contractAbiResponse)
    const abiArray = JSON.parse(contractAbi)

    if (!abiArray) {
      throw new Error('Contract ABI is missing')
    }

    const contract = new web3.eth.Contract(abiArray, contractAddress)

    const contractName = await contract.methods.name().call()

    return contractName
  } catch (error) {
    console.error(error)
  }
}
