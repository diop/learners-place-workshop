require('dotenv').config()
const Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/CTNrMRz6lyyxOxddWG7y')

const acct1 = '0x4526762d9FD955b56A85480239e7102c1484C222'
const acct2 = '0x9870d54f9606e9103F91fcE6241033923fb2fCEd'

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
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice:  web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    // console.log(txobject)

    // Sign a transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    // Broadcast a transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('Transaction Hash: ', txHash)
    }) 
})

// console.log(web3.eth.accounts.create())