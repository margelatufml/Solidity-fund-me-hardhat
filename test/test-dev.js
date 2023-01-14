const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
  let SimpleStorageFactory;
  let SimpleStorage;

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await SimpleStorageFactory.deploy();
  });
  it("Should start with a favourite numb of 0", async function () {
    const currentValue = await SimpleStorage.retrieve();
    const expectValue = "0";
    //assert
    //expect
    assert.equal(currentValue.toString(), expectValue);
    //expect(currentValue.toString(), expectValue);
  });

  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transactionRseponse = await SimpleStorage.store(expectedValue);
    await transactionRseponse.wait(1);

    const currentValue = await SimpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should verify if a person can be add", async function () {
    const addperson = await SimpleStorage.addPerson("ANA", "9");
    await addperson.wait(1);
    if (SimpleStorage.People) {
      console.log(`Exist the person:SimpleStorage.People`);
    }
  });
});
