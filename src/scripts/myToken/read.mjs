import { Web3 } from "web3";
import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import ABI from "./abi.mjs";

const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/"); // Any RPC node you wanted to connect with
web3.registerPlugin(new SwisstronikPlugin());

async function main() {
  const ERC20_CONTRACT_ADDRESS = "0x2e79CC77048e48C85ccc14959A8b6963ADcF5376";
  const contract = new web3.eth.Contract(ABI, ERC20_CONTRACT_ADDRESS);
  const totalSupply = await contract.methods.balanceOf("0xA8a56c6C79Eb4581Bc57D19B38613c82FCDfAa4E").call();
  console.log(web3.utils.fromWei(totalSupply,"ether"));
}

main()






// import { Web3} from "web3"
// import ABI from "./abi.mjs"
// import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";

// const web3 = new Web3("https://json-rpc.testnet.swisstronik.com")
// web3.registerPlugin(new SwisstronikPlugin());


// async function main(){
// // create contract instance
// const contract = new web3.eth.Contract(ABI, "0x2e79CC77048e48C85ccc14959A8b6963ADcF5376")

// // make call
// const result = await contract.methods.name().call()
// console.log(result)

// console.log("Counter value:", result)


// }

// main()