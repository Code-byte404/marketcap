require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

console.log('url=',process.env.SPEEDY_NODE)
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts: [process.env.ACCOUNT],
    },
  },
};
