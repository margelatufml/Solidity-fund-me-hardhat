require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/blockNumber");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
const GOERELI_RPC_URL = process.env.GOERELI_RPC_URL || "RPC_example";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "key_exmpl";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "API_EXPL";
const COIN_KEY = process.env.COIN_KEY || "API_EXPL";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goereli: { url: GOERELI_RPC_URL, accounts: [PRIVATE_KEY], chainId: 5 },
  },
  solidity: "0.8.8",
  etherscan: { apiKey: ETHERSCAN_API_KEY },
  // localhost: {
  //   url: "http://127.0.0.1:8545/",
  //   //accounts: [PRIVATE_KEY],
  //   chainId: 31337,
  // },
  gasReporter: {
    enabled: true,
    outputFile: "gas-rep.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COIN_KEY,
    token: "MATIC",
  },
};
