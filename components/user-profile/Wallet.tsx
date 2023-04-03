import { useEthers } from '@usedapp/core'

const Wallet = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()

  return (
    <div>
      <h3>dApp Wallet</h3>
      {account ? (
        <p>Your account: {account}</p>
      ) : (
        <p>
          Please Connect wallet
          <button onClick={() => activateBrowserWallet}>Connect Wallet</button>
        </p>
      )}
    </div>
  )
}

export default Wallet
