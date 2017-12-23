var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer, network, addresses) {
  deployer.deploy(ConvertLib).catch(console.error);
  deployer.link(ConvertLib, MetaCoin).catch(console.error);
  deployer.deploy(MetaCoin).catch(console.error);
};
