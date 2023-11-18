"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nounsContract = void 0;
const abi_1 = require("./abi");
const ethers_1 = require("ethers");
const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");
const addresses = {
    nounsDescriptor: "0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
    nounsSeeder: "0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515",
};
exports.nounsContract = new ethers_1.Contract(addresses.nounsDescriptor, abi_1.NounsDescriptorAbi, provider);
//# sourceMappingURL=utils.js.map