const TruffleConfig = require('../truffle');
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

  let checkBalance = function(account){
    return web3.eth.getBalance(account, function(error, balance){
      if (error){
        throw error;
      }

      if (parseInt(balance.toString(10)) > 0) {
        return  deploy()
      } else {
        return checkBalance(account);
      }
   });
  }

  if (config.from && config.password) {
     return checkBalance(config.from);

  } else {
    console.log("No account info, attempt deploy anyway")
    return deploy();
  }

};
