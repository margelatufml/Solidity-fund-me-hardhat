//imports
const { ethers, run, network } = require("hardhat");
require("dotenv").config();
//main async fnc
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log("Waiting for contract to deployed...");
  await simpleStorage.deployed();
  console.log("Contract address");
  console.log(simpleStorage.address);
  //what happens when we deploy on the hardhat network
  //console.log(network.config);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value is:${currentValue}`);
  //Update current value
  const transactionRseponse = await simpleStorage.store(7);
  await transactionRseponse.wait(1);
  const updateValue = await simpleStorage.retrieve();
  console.log(`Update value is:${updateValue}`);
}

const verify = async function (contractAdress, args) {
  console.log("Verifycontract...");
  try {
    await run("verify:verify", {
      address: contractAdress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log(e);
    }
  }
};

//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
