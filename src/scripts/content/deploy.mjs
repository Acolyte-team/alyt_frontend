import { Web3} from "web3"
import ABI from "./abi.mjs"
import BYTECODE from "./bytecode.mjs"

const web3 = new Web3("https://json-rpc.testnet.swisstronik.com")

async function main(){
    const wallet = web3.wallet.add("0x45a71309065d92d987010d97253ab26b0406f338b8de46a9c4f267d305c5d1fa");
    const userProfileAddress = "0x6Ef18f47853BC4b1b29a7E4Fd15b31836B21f66B";

    const contract = new web3.eth.Contract(ABI)

    const deployer = contract.deploy({
        data: BYTECODE,
        arguments:[userProfileAddress]
    })

    const receipt = await deployer.send({from: wallet[0].address})

    console.log("Content address", receipt.options.address)


}

main()

