import { ErrorMessages } from "../constants/messages";
import { handleError, MyError } from "../constants/myError";
import {ethers, toBeHex} from "ethers";
import "dotenv/config"

export async function readEvents(contractAddress: string, abi: string[], eventName: string, fromBlock: number) {
    try {
        if (!process.env.JSON_RPC_URL) {
            console.log("Set JSON RPC URL!");
            throw new MyError(ErrorMessages.SERVER_CONFIG_ERROR);   
        }

        const provider = new ethers.JsonRpcProvider(process.env.JSON_RPC_URL);
        const contract = new ethers.Contract(contractAddress, abi, provider);

        const eventFilter = contract.filters[eventName];
        const endBlock = 'latest';
        const events = await contract.queryFilter(eventFilter, fromBlock, endBlock);

        console.log("Events =>", events);

        
    } catch(err) {
        console.log("Error Reading Events =>", err);
        handleError(err, ErrorMessages.NOT_READ_EVENTS);
    }
}

// readEvents("0xB8981C1E85f5Acfbf1760Cb4DB3933526d8a269e", ["event Transfer (address from, address to, uint256 value)"], "Transfer", 88802223);