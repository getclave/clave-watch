import { Contract } from "ethers";
export declare const nounsContract: Contract;
export declare const counts: {
    glasses: number;
    head: number;
    body: number;
    accessory: number;
    background: number;
};
/**
 *
 * @param string - The string to be hashed
 * @returns A number that represents the hash of the string
 */
export declare const hashString: (string: string) => number;
/**
 *
 * @param parsedAddress - The 20 byte address of the account
 * @returns An array of 5 numbers that represent the seed for each noun part
 */
export declare const getSeedForNounPart: (parsedAddress: string) => Array<number>;
/**
 *
 * @param px - The number of pixels to be formatted
 * @returns A string that represents the number of pixels
 */
export declare const formatPx: (px: number) => string;
/**
 *
 * @param classes - The classes to be joined
 * @returns
 */
export declare function clsnm(...classes: Array<string | boolean | null | undefined>): string;
//# sourceMappingURL=utils.d.ts.map