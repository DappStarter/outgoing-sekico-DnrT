require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind hole hidden enrich swift gauge'; 
let testAccounts = [
"0xea27b6f55b8fe602cd12b21a2ac85b52922410651b3fe3db9dafccb61def71cf",
"0xb06759b6c0d7bd90ad7a8a79ecb2faebd9c271fa44a262a2016616a1fce73c65",
"0x634f8227faa828ecbde646d5a898326e88ec2fc87e621b01eb4aeee9ded630cb",
"0x2684c56c1c35ba409ec7b27d348617ec7ce3633000bd38d8b5c578e22f6e2861",
"0xb17b9baecd2b671abf3cf5db46a1ed07294756e2a1fe8e674ca97f8563b58d76",
"0x8180c3132b6d2f36477a464d676709db6348956b398d1b73032928e26aebd866",
"0xa6880d0cc7ac65eb513bd7219daf8f429f48196c7ccebbc7a36aa0a8b14503d4",
"0x4bef49af24df8b9e30b2c3b44ac0baf90bb5c1159162495ba824c573530de352",
"0xf4fbda3326da5ca927aa6f2a64084f8b0fe3b176bff97011ff3ab13fcbffe80a",
"0xd085441af63eb80744cfa18d4a751d9559ca46c01703b3d76e1eabb2770a24e3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

