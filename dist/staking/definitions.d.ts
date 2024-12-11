import { BigNumber, ContractReceipt, ethers } from "ethers";
export interface ICrestFiStaking {
    /**
     * Stake Token
     * @param staker staker address
     * @param tokenAddress token address
     * @param amount amount to stake
     * @throws error if contract call fails
     * */
    stakeToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Unstake Token
     * @param staker staker address
     * @param tokenAddress token address
     * @param amount amount to unstake
     * @throws error if contract call fails
     * */
    unStakeToken(staker: string, tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Sets stream fee for whitelisted wallet addresses for given token address
     * @param token token address to whitelist
     * @param walletAddresses wallet addresses with its corresponding stream fee
     */
    whitelistAddress(token: string, walletAddresses: {
        address: string;
        streamFee: string;
    }[]): Promise<ContractReceipt>;
    /**
     * Get Stream Fee for given token
     * @param staker staker address
     * @returns stream fee
     * @throws error if contract call fails
     * */
    getStreamFee(staker: string, token: string): Promise<BigNumber>;
    /**
     * Get number of token staked
     * @param staker staker address
     * @returns
     */
    getStakedAmount(staker: string): Promise<BigNumber>;
    /**
     * Set Stream Fee Tiers
     * @param staker staker address
     * @param fee fee to set
     * @throws error if contract call fails
     * */
    setStreamFeeTiers(feesAndTokenAmounts: {
        fee: string;
        amount: string;
        token: string;
    }[], overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Gets all staking fees with its corresponding stream fee
     */
    getAllStreamFeeTier(): Promise<{
        streamFee: BigNumber;
        stakingTier: BigNumber;
    }[]>;
    /**
     * Gets stream fee at given index
     * @param index index of stream fee
     */
    getCorrespondingStreamFee(index: number): Promise<BigNumber>;
}
