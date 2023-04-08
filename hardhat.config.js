require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const privateKey = process.env.MNEMONIC
const maticUrl = process.env.MATIC_APP_ID
const polyScan = process.env.POLYGONSCAN
module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      chainId: 137,
      url: `https://rpc-mainnet.maticvigil.com/v1/${maticUrl}`,
      accounts: [privateKey],
      gasPrice: 200000000000 // optional, you can remove this if you want Hardhat to estimate the gas price

    }
  },
  //* Keep name as 'etherscan' to avoid errors.
  etherscan: {
    url: 'https://polygonscan.com/',
    apiKey: polyScan
  }
};
