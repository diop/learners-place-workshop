const Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/CTNrMRz6lyyxOxddWG7y')

const acct1 = '0x50Ebe9ad50DCf1Be1A35570E29587fa9F6eCDB46'
const acct2 = '0x4526762d9FD955b56A85480239e7102c1484C222'

// To not reveal private keys export them to environment variables.
// Example: $ export PRIVATE_KEY_1 ='Private Key'
// console.log(process.env.PRIVATE_KEY_1)
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

web3.eth.getTransactionCount(acct1, (err, txCount) => {
    //  Build a transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: acct2,
        value: web3.utis.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice:  web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    // console.log(txobject)

    // Sign a transaction
    const tx = new Tx(txObject)
    tx.sign(privageKey1).serialize()

    const serializedTransaction = tx.serialize
    const raw = '0x' + serializedTransaction.toString('hex')

    // Broadcast a transaction
    web3.eth.sendSignedtransaction(raw, (err, txHash) => {
        console.log('Transaction Hash: ', txHash)
    }) 
})

// console.log(web3.eth.accounts.create())