"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clsnm = exports.formatPx = exports.getSeedForNounPart = exports.hashString = exports.counts = exports.nounsContract = void 0;
const abi_1 = require("./abi");
const ethers_1 = require("ethers");
const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");
const addresses = {
    nounsDescriptor: "0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
};
exports.nounsContract = new ethers_1.Contract(addresses.nounsDescriptor, abi_1.NounsDescriptorAbi, provider);
exports.counts = {
    glasses: 21,
    head: 234,
    body: 30,
    accessory: 137,
    background: 2,
};
/**
 *
 * @param string - The string to be hashed
 * @returns A number that represents the hash of the string
 */
const hashString = (string) => {
    if (typeof string != "string") {
        return 1;
    }
    let id = 0;
    for (let i = 0; i < string.length; i++) {
        id += string.charCodeAt(i);
    }
    return id;
};
exports.hashString = hashString;
/**
 *
 * @param parsedAddress - The 20 byte address of the account
 * @returns An array of 5 numbers that represent the seed for each noun part
 */
const getSeedForNounPart = (parsedAddress) => {
    const first = parsedAddress.slice(0, 8);
    const second = parsedAddress.slice(8, 16);
    const third = parsedAddress.slice(16, 24);
    const fourth = parsedAddress.slice(24, 32);
    const fifth = parsedAddress.slice(32, 40);
    const background = (0, exports.hashString)(first) % exports.counts.background;
    const body = (0, exports.hashString)(second) % exports.counts.body;
    const accessory = (0, exports.hashString)(third) % exports.counts.accessory;
    const head = (0, exports.hashString)(fourth) % exports.counts.head;
    const glasses = (0, exports.hashString)(fifth) % exports.counts.glasses;
    return [background, body, accessory, head, glasses];
};
exports.getSeedForNounPart = getSeedForNounPart;
/**
 *
 * @param px - The number of pixels to be formatted
 * @returns A string that represents the number of pixels
 */
const formatPx = (px) => {
    return `${px}px`;
};
exports.formatPx = formatPx;
/**
 *
 * @param classes - The classes to be joined
 * @returns
 */
function clsnm(...classes) {
    const mainClassArr = [];
    const clsArray = [...classes];
    for (const cls of clsArray) {
        if (typeof cls === "string" && cls.trim() !== "") {
            mainClassArr.push(cls);
        }
    }
    return mainClassArr.join(" ");
}
exports.clsnm = clsnm;
//# sourceMappingURL=utils.js.map