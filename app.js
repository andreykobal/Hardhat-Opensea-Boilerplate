const express = require("express");
const { ethers } = require("hardhat");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const CONTRACT_ADDRESS = "0xe3515d63BCE48059146134176DBB18B9Db0D80D8";

async function mintItem(ownerAddress, tokenURI) {
  const GameItem = await ethers.getContractFactory("GameItem");
  const gameItem = await GameItem.attach(CONTRACT_ADDRESS);

  return gameItem.mintItem(ownerAddress, tokenURI);
}

app.post("/mint", async (req, res) => {
  try {
    const { ownerAddress, tokenURI } = req.body;

    if (!ownerAddress || !tokenURI) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await mintItem(ownerAddress, tokenURI);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});