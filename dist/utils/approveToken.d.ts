import { BigNumber, ethers } from 'ethers';
import { Token } from '../contract';
/**
 * Approve token to the contract
 * @param signer evm signer
 * @param spender address of spender
 * @param token token contract instance
 * @param amount amount to approve
 * @throws error if contract call fails
 * */
export declare function approveToken(signer: ethers.Signer, spender: string, token: Token, amount: BigNumber, overrides?: ethers.Overrides): Promise<void>;
/**
 * Approve token to the contract
 * @param signer evm signer
 * @param spender address of spender
 * @param token token contract instance
 * @param amount amount to approve
 * @throws error if contract call fails
 * */
export declare function getApproveTokenData(spender: string, token: Token, amount: BigNumber): Promise<string>;
