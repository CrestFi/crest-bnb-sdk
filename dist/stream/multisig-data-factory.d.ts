import { BigNumber, BytesLike, ethers } from "ethers";
import { ICrestFiMultisigStream } from "./definitions";
export declare class CrestFiMultisigStream implements ICrestFiMultisigStream {
    private _contract;
    private iCore;
    constructor(signerOrProvider: ethers.Signer | ethers.providers.Provider, contractAddress?: string);
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToken(safeAddress: string, tokenAddress: string, amount: string): Promise<string[]>;
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToSafe(tokenAddress: string, amount: string, safeAddress: string, overrides?: ethers.Overrides): Promise<ethers.providers.TransactionReceipt>;
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @param reciever receiver of the token
     * @returns transaction data
     * @throws error if transaction fails
     */
    withdrawFromSafe(tokenAddress: string, amount: string, reciever: string): Promise<string>;
    /**
     * Withdraw token from the contract
     * @param token token address
     * @param amount amount of token to withdraw
     * @returns transaction data
     * @throws error if transaction fails
     * */
    withdrawToken(tokenAddress: string, amount: string): Promise<string>;
    /**
     * Initiate a stream
     * @param streamName Transaction Name
     * @param amount amount of token to stream
     * @param token token address
     * @param streamReceiver receiver of the stream
     * @param streamStartTime start time of the stream
     * @param streamEndTime end time of the stream
     * @param streamCancelable whether the stream is cancelable
     * @param streamPausable whether the stream is pausable
     * @returns transaction data
     * @throws error if transaction fails
     **/
    initStream(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean): Promise<string>;
    /**
     * Pause a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     **/
    pauseStream(streamBytes: BytesLike): Promise<string>;
    /**
     * Resume a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     * */
    resumeStream(streamBytes: BytesLike): Promise<string>;
    /**
     *  Cancel a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     **/
    cancelStream(streamBytes: BytesLike): Promise<string>;
    /**
     *  Update a stream
     * @param streamName Transaction Name
     * @param streamBytes id of the stream
     * @param startTime start time of the stream
     * @param endTime end time of the stream
     * @param amount amount of token to stream
     * @returns transaction data
     * @throws error if transaction fails
     **/
    updateStream(streamName: string, streamBytes: BytesLike, tokenAddress: string, startTime: number, endTime: number, amount: string): Promise<string>;
    /**
     * Withdraw from a stream
     * @param streamBytes id of the stream
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     * */
    withdrawStream(streamBytes: BytesLike, tokenAddress: string, amount: string, crestfiWalletWithdrawal: boolean): Promise<string>;
    /**
     * Instant token transfer
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param receiver receiver of the token
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     **/
    instantTokenTransfer(instantName: string, tokenAddress: string, amount: string, receiver: string, crestfiWalletWithdrawal: boolean): Promise<string>;
    /**
     * initialize stream with TNS
     * @param streamName Transaction Name
     * @param amount amount of token to stream
     * @param tokenAddress token address
     * @param streamReceiver receiver of the stream
     * @param streamStartTime start time of the stream
     * @param streamEndTime end time of the stream
     * @param streamCancelable whether the stream is cancelable
     * @param streamPausable whether the stream is pausable
     * @returns transaction data
     * @throws error if transaction fails
     */
    initStreamTNS(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean): Promise<string>;
    /**
     * Instant token transfer with TNS
     * @param name Transaction Name
     * @param receiverId receiver id
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param crestfiWalletWithdraw whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     * */
    instantTokenTransferTNS(name: string, receiverId: string, tokenAddress: string, amount: string, crestfiWalletWithdraw?: boolean): Promise<string>;
    /**
     * Transfers multiple tokens to the receiver at the same time
     * Can be used by gnosis safes multicall function
     * @param tokenAddresses token addresses
     * @param amounts amount of tokens to transfer
     * @param receiver  receiver of the token
     * @returns
     */
    drainAccountFromSafe(tokenAddresses: string[], amounts: string[], receiver: string): Promise<Promise<string>[]>;
    /**
     * Transfers multiple tokens from crestfi wallet to the receiver at the same time
     * Can be used by gnosis safes multicall function
     * @param tokenAddresses token addresses
     * @param amounts amount of tokens to transfer
     * @param receiver  receiver of the token
     * @returns
     */
    drainAccountFromCrestFiWallet(tokenAddresses: string[], amounts: string[], receiver: string): Promise<Promise<string>[]>;
    depositERC721(tokenId: number, tokenAddress: string, safeAddress: string): Promise<ethers.providers.TransactionResponse[]>;
    depositERC1155(tokenId: number, tokenAddress: string, safeAddress: string, amount: BigNumber): Promise<ethers.providers.TransactionResponse[]>;
    /**
     * Transfer ERC-721 token to the contract
     * @param token token address
     * @param tokenId token id
     * @returns transaction data
     * @throws error if transaction fails
     */
    transferERC721(tokenId: number, tokenAddress: string, to: string, safeAddress: string): Promise<string>;
    transferERC1155(tokenAddress: string, tokenIds: number[], amounts: BigNumber[], to: string, safeAddress: string): Promise<string>;
}
