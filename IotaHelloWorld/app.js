'use strict';

//console.log('Hello world');
console.log('i am 133t u r n00b');

const IOTA = require('iota.lib.js')

// for a list of nodes go to https://iotanode.host/ I am using my personal node on AWS in Oregon
const iota = new IOTA({
	//host: 'http://52.42.145.71', doesnt currently work with iota.api.sendTransfer
    host: 'http://node.iotawallet.info', // iota testnet node
	port: 14265
})

iota.api.getNodeInfo((error, nodeInfo) => {
	if (error) {
		console.error('getNodeInfo error', error)
	} else {
		console.log('getNodeInfo result', nodeInfo)
	}
})

var seed = 'W99RJ9M9A9IKOHB9BFGDKLP9CORGD9HHKQ99BNEWUVI9QVQOOVH9GQN9DDFHQJMJT9O9BQOWOMY9EJX9Y' // make your own seed
var options = {
    index: 3,
    checksum: true
}




iota.api.getNewAddress(seed, options, function (error, address) {
    // attach the address to the tangle with message
    var transfer = [{
        address: address,
        value: 0,
        message: iota.utils.toTrytes('Hello World!'),
        tag: ''
    }]

    // depth for the tip selection
    var depth = 4;

    // on the mainnet, minWeightMagnitude is 18
    var minWeightMagnitude = 18;

    // sendTransfer API wrapper function 
    // includes prepareTransfers, 
    //          attachToTangle, 
    //          broadcast,
    //          storeTransactions 
    iota.api.sendTransfer(seed, depth, minWeightMagnitude, transfer, function (e, attached) {
        if (!e) {
            console.log("successfully attached", attached);
        }
        else console.log("failed sad face");
    })
});


