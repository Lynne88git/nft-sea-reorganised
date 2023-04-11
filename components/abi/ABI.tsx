import axios from 'axios'

export async function getAbiString() {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/LinumLabs/web3-task-abi/dev/Musharka721.json'
    )
    const abiString = JSON.stringify(response.data.abi)
    return abiString
  } catch (error) {
    console.error(error)
  }
}
