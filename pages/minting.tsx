import CreateNFTForm from '../components/minting/Create_NFT_Form'
import { useRouter } from 'next/router'

const Minting = () => {
  const router = useRouter()

  return (
    <div>
      <CreateNFTForm />
    </div>
  )
}

export default Minting

{
}
