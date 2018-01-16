'use strict';

//console.log('Hello world');
console.log('i am 133t u r n00b');

const IOTA = require('iota.lib.js')

// for a list of nodes go to https://iotanode.host/ I am using my personal node on AWS in Oregon// 
const iota = new IOTA({
	host: 'http://52.42.145.71',
	port: 14265
})

iota.api.getNodeInfo((error, nodeInfo) => {
	if (error) {
		console.error('getNodeInfo error', error)
	} else {
		console.log('getNodeInfo result', nodeInfo)
	}
})