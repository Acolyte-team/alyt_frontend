// import {Web3 } from "web3"

import { Web3 } from "web3";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import ABI from "./abi.mjs";

// const web3 = new Web3(window.ethereum)
const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/"); // Any RPC node you wanted to connect with
web3.registerPlugin(new SwisstronikPlugin());

async function main() {
  const ERC20_CONTRACT_ADDRESS = "0x2e79CC77048e48C85ccc14959A8b6963ADcF5376";
   const USERPROFILE_CONTRACT_ADDRESS = "0x6Ef18f47853BC4b1b29a7E4Fd15b31836B21f66B";

  const wallet = web3.eth.wallet.add("0x45a71309065d92d987010d97253ab26b0406f338b8de46a9c4f267d305c5d1fa");
// request accounts
//const accounts = await web3.eth.requestAccounts()
//accounts[0]

  const contract = new web3.eth.Contract(ABI, ERC20_CONTRACT_ADDRESS,USERPROFILE_CONTRACT_ADDRESS);
  const to = "0xA8a56c6C79Eb4581Bc57D19B38613c82FCDfAa4E";
  const value = web3.utils.toWei("1000000","ether");
  const receipt = await contract.methods.createAccount(to, value).send({ from: wallet[0].address });
  console.log(receipt.transactionHash);
}

main();
