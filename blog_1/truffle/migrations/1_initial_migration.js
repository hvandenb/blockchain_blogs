const TruffleConfig = require('../truffle');
const Unlock = require('../unlock');

var Migrations = artifacts.require("./Migrations.sol");


module.exports = function(deployer, network, addresses) {

  const config = TruffleConfig.networks[network];

  let deploy = function(){
    console.log('>> Deploying migrations');
    deployer.deploy(Migrations).catch(console.error);
  }

  return Unlock(web3, config, deploy);

};
