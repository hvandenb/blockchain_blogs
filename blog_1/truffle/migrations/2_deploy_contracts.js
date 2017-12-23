const TruffleConfig = require('../truffle');
const Unlock = require('../unlock');

var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer, network, addresses) {

  const config = TruffleConfig.networks[network];

  let deploy = function(){
    console.log('>> Deploying contracts');
    return deployer.deploy(ConvertLib).then(function(){
      return deployer.link(ConvertLib, MetaCoin)
    }).then(function(){
      return deployer.deploy(MetaCoin)
    }).catch(console.error);
  }

  return Unlock(web3, config, deploy);

};
