import Wallet from './Wallet'
const Profile = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      Your Account: Network: Balance:
      <Wallet />
    </div>
  )
}

export default Profile
