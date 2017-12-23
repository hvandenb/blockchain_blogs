const TruffleConfig = require('../truffle');

var Migrations = artifacts.require("./Migrations.sol");


module.exports = function(deployer, network, addresses) {

  const config = TruffleConfig.networks[network];

  let deploy = function(){
    console.log('>> Deploying migrations');
    deployer.deploy(Migrations).catch(console.error);
  }

  let checkBalance = function(account){
    return web3.eth.getBalance(account, function(error, balance){
      if (error){
        throw error;
      }

      if (parseInt(balance.toString(10)) > 0) {
        return deploy();
      } else {
        return checkBalance(account);
      }
   });
  }

  if (config.from && config.password) {

     console.log('>> Unlocking account ' + config.from);
     web3.personal.unlockAccount(config.from, config.password, 36000)
     return checkBalance(config.from);

  } else {
    console.log("No account info, attempt deploy anyway")
    return deploy();
  }

};
