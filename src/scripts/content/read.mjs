import { Web3 } from "web3";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import ABI from "./abi.mjs";

const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/"); // Any RPC node you wanted to connect with
web3.registerPlugin(new SwisstronikPlugin());

async function main() {
  const content_address = "";
  const contract = new web3.eth.Contract(ABI, content_address);
  const totalSupply = await contract.methods.getContent("0xA8a56c6C79Eb4581Bc57D19B38613c82FCDfAa4E").call();
  console.log(web3.utils.fromWei(totalSupply,"ether"));
}

main()


