require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth snow comfort install climb sure teach'; 
let testAccounts = [
"0xfa1733de5d3658e917eeae3784a63e0560e0fcba2b3a29202f28659aac92a99a",
"0x17c87b61375831d977509b785985b08f88e9b20445c80813ed3524bd7d250e7a",
"0xb20f2b48f099730b8e04cb39ccb22603b3d8e8547cd886a4618b7c7c88f15cc5",
"0x414e5b58651e908907995e28f5b939cbbbaf77a2010208ed64c940912e463fe3",
"0xebacb9078515a5995bd4a546824d187ea78d6e52aace9c2eab400507a4b1ffe4",
"0xaa4918e1dbe4eb66665329ce537598b1b834e644b5961ba63faaedf9185d75c5",
"0x7e917537923fc49098da234086058e120a8837de41d85968f5709d581b93abe0",
"0x6921ae56de0d61d9498379b3480274a14bd81ec6e19c0c64916790cb59ce03e3",
"0x5d7b97fae45304ad29c4014cfe873f3355c9039f667d824907b1d8f7541d7f37",
"0xa542ed4679184484f43dfbd9e5288e12fd6aedf3fc742fa11ad9640c360a31e2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


