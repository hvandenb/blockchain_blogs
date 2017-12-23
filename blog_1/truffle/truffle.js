module.exports = {
  networks: {
    development: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*",
      from: process.env.TRUFFLE_ACCOUNT,
      password: process.env.TRUFFLE_ACCOUNT_PASSWORD
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
