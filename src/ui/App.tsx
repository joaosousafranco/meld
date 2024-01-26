import { Wallet, ethers, formatEther } from 'ethers'
import { useEffect, useState } from 'react'
import Web3 from 'web3'

// Network name : MELD Kanazawa
// RPC URL : testnet-rpc.meld.com
// Chain ID : 222000222
// Symbol : gMELD
// Block explorer : https://testnet.meldscan.io
// Contract: 0x0000000000ffe8b47b3e2130213b802212439497

// TASK:
// Be able to show a list of current available pools
// function getNumNodes() external view returns (uint256);
//
//
// Be able to show the list of staking positions of a user
// https://github.com/MELD-labs/meld-staking-public/blob/main/contracts/interfaces/IMeldStakingStorage.sol#L263
//
//
// Be able to create a new staking position
// https://github.com/MELD-labs/meld-staking-public/blob/main/contracts/interfaces/IMeldStakingDelegator.sol#L76

const CONTRACT_ADDRESS = '0x0000000000ffe8b47b3e2130213b802212439497'
const CONTRACT_ABI = [
  {
    inputs: [],
    name: 'getNumNodes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const MELD_KANAZAWA_RPC_URL = 'https://testnet-rpc.meld.com'

const WALLET_KEYS = {
  address: '0xd62AB755f46cd34E63Eea1C753d02BE71AB12107',
  privateKey: '81b6e8790aeeb60730d30d3d370bc10f303adef5d8783e598f3168ddb77d4418',
}

const ethersProvider = new ethers.JsonRpcProvider(MELD_KANAZAWA_RPC_URL)
const ethersWallet = new Wallet(WALLET_KEYS.privateKey, ethersProvider)

const getEthersContract = () => {
  // const signer = await ethersProvider.getSigner()
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, ethersWallet)

  return contract
}

const web3 = new Web3(MELD_KANAZAWA_RPC_URL)

const getWeb3Contract = () => new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

export const App = () => {
  const [addressBalance, setAddressBalance] = useState('')
  const [numNodes, setNumNodes] = useState('')

  useEffect(() => {
    ethersProvider.getBalance(ethersWallet.address).then((balance) => {
      setAddressBalance(formatEther(balance))
    })
  }, [])

  // useEffect(() => {
  //   const contract = getWeb3Contract()

  //   contract.methods
  //     .getNumNodes()
  //     .call()
  //     .then((total: unknown) => {
  //       setNumNodes(total as string)
  //     })
  // }, [])

  useEffect(() => {
    const contract = getEthersContract()

    contract.getNumNodes().then((total: unknown) => {
      setNumNodes(total as string)
    })
  }, [])

  return (
    <div>
      <h1>Hello World!</h1>
      <div>Balance: {addressBalance}</div>
      <div>Nodes: {numNodes}</div>
    </div>
  )
}
