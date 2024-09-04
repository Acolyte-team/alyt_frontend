import { Web3 } from "web3";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import ABI from "./abi.mjs";


const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/"); // Any RPC node you wanted to connect with
web3.registerPlugin(new SwisstronikPlugin());

async function main() {
  const USERPROFILE_CONTRACT_ADDRESS = "0x6Ef18f47853BC4b1b29a7E4Fd15b31836B21f66B";
  const contract = new web3.eth.Contract(ABI, USERPROFILE_CONTRACT_ADDRESS);
  const userProfile = await contract.methods.getUserProfile().call();
  console.log(userProfile);
//   const totalSupply = await contract.methods.balanceOf().call();
//   console.log(totalSupply);
}

main()


