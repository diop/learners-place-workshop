# Ethereum Bootcamp October 10th 2018
Learners Place Ethereum Blockchain Workshop

## Curriculum
1 Day Workshop Curriculum.

### Solidity and Smart Contracts
[Remix IDE](https://remix.ethereum.org/)

* [ERC-20 EIP](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
* [ERC-721 EIP](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)

### Ethereum Blockchain Transactions
+ [Infura Blockchain as a Service](https://infura.io/)
+ [Etherscan Accounts](https://etherscan.io/accounts)

+ It's absolutely crucial to know how transactions work in Ethereum.

* Build a transaction

```js
web3.eth.getTransactionCount(acct1, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: acct2,
        value: web3.utis.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice:  web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    web3.eth.sendSignedtransaction(raw, (err, txHash) => {
        console.log('Transaction Hash: ', txHash)
    }) 
})
```
* Sign a transaction
* Broadcast a transaction

```js
$ npm install ethereumjs-tx
$ const Web3 = require('web3')
$ const web3 = new Web3('http://127.0.0.1:7545')
$ const acct1 = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
$ const acct2 = '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
$ web3.eth.sendTransaction({ from: acct1, to: acct, value: web3.utils.toWei('1', 'ether') })
$ web3.eth.getBalance(acct1)
$ web3.eth.personal.unlockAccount --> On Geth
```

+ When you send transaction on Ganache, those accounts are unlocked. You need to sign your transaction first before you can
broadcast them.

+ Keep the private keys in envirnment variables for security.

```js
$ const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1)
$ const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2)
```

### Writing Secure Smart Contracts
+ [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity)
+ [Mocha](https://mochajs.org/)
+ [Chai](https://www.chaijs.com/)

### Web3.js aka enough Javascript to be dangerous.
+ [Web3 1.0 ES6](https://github.com/ethereum/web3.js/tree/1.0ES6)
+ [Web3 Docs](https://web3js.readthedocs.io/en/1.0/index.html)

``` $ node -v ``` to check NodeJS version

+ To play with Web3 via NodeJS:

```js
$ const Web3 = require('web3')
$ const url = 'https://mainnet.infura.io/CTNrMRz6lyyxOxddWG7y'
$ const web3 = new Web3(url)
$ const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
$ web3.eth.getBalance(address, (err, bal) => { balance = bal})
$ web3.utils.fromWei(balance, 'ether')
$ balance
$ web3.eth.accounts.create()
```

+ To get the balance from your local Ganache instance:

```js
$ web3.eth.getBalance('GANACHE_ACCOUNT_ADDRESS', (err, wei) => {balance = web3.utils.fromWei(wei, 'ether')})
$ balance 
```

+ ```web3.eth.Contract``` creates an abstraction of our Smart Contract we can abstract with in Javascript.
+ to interact with a contract on the main Blockchain. Same steps to connect to infura plus:

```js
$ const abi = ABI_FROM_ETHERSCAN
$ abi
$ const contractAddress = CONTRACT_ADDRESS
$ const contract = new web3.eth.Contract(abi, contractAddress)
$ contract
$ contract.methods
$ contracts.methods.name().call((err, result) => { console.log(result) })
$ contracts.methods.symbol().call((err, result) => { console.log(result) })
$ contract.methods.totalSupply().call((err, result) => { console.log(result) })
$ const accountAddress = ACCOUNT_ADDRESS_FROM_HOLDERS_LIST
```


### Dapp Frontends
[Truffle Frameworks](https://truffleframework.com/truffle)  

### Ipfs
[IPFS](https://ipfs.io/)

### Protocols
+ [0x](https://0xproject.com/)
+ [Dharma](https://dharma.io/)

© Copyright 2018 Fodé Diop - MIT License

