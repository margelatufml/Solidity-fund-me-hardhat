const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    //constblocktask=async functioon()
    //async functionblocktash()
    const BlockNumb = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number ${BlockNumb}`);
  }
);
module.exports = {};
