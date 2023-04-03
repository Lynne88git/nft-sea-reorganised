// import { useContractFunction } from '@usedapp/core'
// import { contractAddress } from '.'

// export const useCreate_NFT = () => {
//   const { state, send } = useContractFunction(contractAddress, 'create_NFT')
//   const loading =
//     state.status === 'PendingSignature' || state.status === 'Mining'
//   const success = state.status === 'Success'
//   const error = state.status === 'Fail' || state.status === 'Exception'
//   return {
//     loading,
//     success,
//     error,
//     send,
//   }
// }
