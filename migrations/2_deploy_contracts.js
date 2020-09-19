const  RBT = artifacts.require("RBTToken");

module.exports = function(deployer) {
  const amount  = '1' + '0'.repeat(27);
  deployer.deploy(RBT, amount);
};
