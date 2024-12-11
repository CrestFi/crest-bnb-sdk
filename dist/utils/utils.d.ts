import { ethers } from "ethers";
import { Token } from "../contract";
export declare const getDecimals: (token: Token) => Promise<number>;
export declare const getOverrides: (overrides: ethers.Overrides | undefined) => Promise<ethers.Overrides>;
