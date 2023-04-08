const hre = require("hardhat");
const NUM_ITEMS = 1;
const OWNER_ADDRESS = "0x3Ec643e0a163D1E80F8a090a61DfD00b9030e29c";

async function main() {

      const GameItem = await hre.ethers.getContractFactory("GameItem");
      const gameItem = await GameItem.attach('0xe3515d63BCE48059146134176DBB18B9Db0D80D8')

      for (var i = 1; i <= NUM_ITEMS; i++) {
            await gameItem.mintItem(OWNER_ADDRESS, `https://bafkreiefuyqk4tsxw4fbs7v45lqh2iudr2bxvpinmsdqiv72sqbigs76qe.ipfs.nftstorage.link/`);
      }
}

main()
      .then(() => process.exit(0))
      .catch((error) => {
            console.error(error);
            process.exit(1);
      });
