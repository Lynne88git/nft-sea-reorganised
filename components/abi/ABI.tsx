import { create } from 'ipfs-http-client'

const projectId = process.env.NEXT_INFURA_PROJECT_ID

const ipfs = create({
  url: 'https://ipfs.infura.io:5001/api/v0',
  headers: {
    authorization: `Bearer ${projectId}`,
  },
})

const ABI = async () => {
  try {
    const hash = 'Qmb5F5wo8fWEKuztnRJ4wPNk4DZYY8ioCGsbMAMKt82p7t' // replace with your own hash
    const chunks = []

    for await (const chunk of ipfs.cat(hash)) {
      chunks.push(chunk)
    }

    const data = JSON.parse(Buffer.concat(chunks).toString())

    return data
  } catch (error) {
    console.error('Error retrieving ABI from IPFS:', error)
    return null
  }
}

export default ABI
