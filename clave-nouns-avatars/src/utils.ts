import { NounsDescriptorAbi } from "./abi";
import { Contract, ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth"
);

const addresses = {
  nounsDescriptor: "0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
};

export const nounsContract = new Contract(
  addresses.nounsDescriptor,
  NounsDescriptorAbi,
  provider
);

export const counts = {
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
export const hashString = (string: string): number => {
  if (typeof string != "string") {
    return 1;
  }
  let id = 0;
  for (let i = 0; i < string.length; i++) {
    id += string.charCodeAt(i);
  }
  return id;
};

/**
 *
 * @param parsedAddress - The 20 byte address of the account
 * @returns An array of 5 numbers that represent the seed for each noun part
 */
export const getSeedForNounPart = (parsedAddress: string): Array<number> => {
  const first = parsedAddress.slice(0, 8);
  const second = parsedAddress.slice(8, 16);
  const third = parsedAddress.slice(16, 24);
  const fourth = parsedAddress.slice(24, 32);
  const fifth = parsedAddress.slice(32, 40);

  const background = hashString(first) % counts.background;
  const body = hashString(second) % counts.body;
  const accessory = hashString(third) % counts.accessory;
  const head = hashString(fourth) % counts.head;
  const glasses = hashString(fifth) % counts.glasses;

  return [background, body, accessory, head, glasses];
};

/**
 *
 * @param px - The number of pixels to be formatted
 * @returns A string that represents the number of pixels
 */
export const formatPx = (px: number): string => {
  return `${px}px`;
};
