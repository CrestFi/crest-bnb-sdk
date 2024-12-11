import { BigNumber, ContractReceipt, ethers, Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import { ICrestFiStaking } from "./definitions";
export declare class CrestFiStakingClient implements ICrestFiStaking {
    private _contract;
    constructor(signerOrProvider: Signer | Provider, contractAddress?: string);
    stakeToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    unStakeToken(tokenAddress: string, amount: string): Promise<ContractReceipt>;
    whitelistAddress(token: string, walletAddresses: {
        address: string;
        streamFee: string;
    }[]): Promise<ContractReceipt>;
    getStreamFee(staker: string, token: string): Promise<BigNumber>;
    setStreamFeeTiers(feesAndTokenAmounts: {
        fee: string;
        amount: string;
        token: string;
    }[], overrides?: ethers.Overrides): Promise<ContractReceipt>;
    getAllStreamFeeTier(): Promise<{
        streamFee: BigNumber;
        stakingTier: BigNumber;
    }[]>;
    getCorrespondingStreamFee(index: number): Promise<BigNumber>;
    getStakedAmount(staker: string): Promise<BigNumber>;
    /**
     *
     * @param address grant role
     * @returns
     */
    grantRole(address: string): Promise<ContractReceipt>;
}
