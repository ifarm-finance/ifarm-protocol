const dotenv = require('dotenv');
let HDWalletProvider = require("truffle-hdwallet-provider");
dotenv.config();

const infuraProvider = (network) => {
  return new HDWalletProvider(process.env.MNEMONIC || '', `https://${network}.infura.io/v3/${process.env.PROJECT_ID}`)
};

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //

  // Modify to the correct migration directory when using
  // migrations_directory: "./migrations/ignore_migrations",
  migrations_directory: "./migrations/",
  networks: {
    development: {
      host: "8.129.187.233",
      port: 28545,
      network_id: "*"
    },
    test: {
      host: "8.129.187.233",
      port: 28545,
      network_id: "*"
    },
    local: {
      host: '127.0.0.1',
      port: 8545,
      // gasPrice: 100000000000, // 100 gwei
      gas: 6721975,
      network_id: '*',
    },
    ropsten: {
      provider: infuraProvider('ropsten'),
      network_id: "*",  // match any network
      gas: 6721975,
      networkCheckTimeout: 60000,
    },
  },
  //
  compilers: {
    solc: {
      version: "0.6.12",
      "optimizer": {
        "enabled": true,
        "runs": 200
      }
    }
  }
};
