import { NounsDescriptorAbi } from "./abi";
import { Contract, ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth"
);

const addresses = {
  nounsDescriptor: "0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
  nounsSeeder: "0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515",
};

export const nounsContract = new Contract(
  addresses.nounsDescriptor,
  NounsDescriptorAbi,
  provider
);
