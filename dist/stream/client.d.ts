import { BigNumber, BytesLike, ContractReceipt, ethers } from "ethers";
import { Core } from "../contract";
import { ICrestFiStream } from "./definitions";
export declare class CrestFiStreamClient implements ICrestFiStream {
    private _contract;
    /**
     * Constructs an client instance to interact with evm bridge contract
     * @param contractAddress address of the bridge contract address
     * @param signer evm signer
     * @param sourceChain wormhole chain id of deployed evm contract
     **/
    constructor(signerOrProvider: ethers.Signer | ethers.providers.Provider, contractAddress?: string);
    /**
     * Retrieves the signer address.
     * @returns signer address
     */
    getSignerAddress(): Promise<string>;
    /**
     * Retrieves the stream bytes for the latest stream of an owner address
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     * */
    getLatestStreamBytes(ownerAddress: string): Promise<BytesLike>;
    /**
     * Retrieves the stream bytes for the next stream of an owner address.
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     * */
    getNextStreamBytes(ownerAddress: string): Promise<BytesLike>;
    /**
     * Get Streamed Amount
     * @param streamBytes stream bytes
     * @returns streamed amount
     * @throws error if contract call fails
     * */
    getWithdrawableAmounts(streamBytes: BytesLike): Promise<BigNumber>;
    /**
     * Get Stream Details
     * @param streamBytes stream bytes
     * @returns Stream Details:
        receiver: string;
        token: string;
        startTime: BigNumber;
        endTime: BigNumber;
        amounts: Core.AmountStructOutput;
        pausedTime: BigNumber;
        withdrawTime: BigNumber;
        originCrestFiWallet: string;
        canceled: boolean;
        paused: boolean;
        streamParam: number;
     * @throws error if contract call fails
     * */
    getStreamDetails(streamBytes: BytesLike): Promise<[string, string, string, BigNumber, BigNumber, Core.AmountStructOutput, BigNumber, BigNumber, string, boolean, boolean, number] & {
        name: string;
        receiver: string;
        token: string;
        startTime: BigNumber;
        endTime: BigNumber;
        amounts: Core.AmountStructOutput;
        pausedTime: BigNumber;
        withdrawTime: BigNumber;
        originCrestFiWallet: string;
        canceled: boolean;
        paused: boolean;
        streamParam: number;
    }>;
    /**
     * Grants the whitelister role to an address.
     * @param whitelister address of the whitelister
     * @throws error if contract call fails
     * */
    grantWhitelisterRole(whitelister: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Whitelist Token
     * @param tokens token address
     * @throws error if contract call fails
     * */
    whitelistToken(tokens: string[], overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Delete Whitelisted Token
     * @param tokens token address
     * @throws error if contract call fails
     * */
    unWhilelistToken(tokens: string[], overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Retrieves the stream attributes for an owner address.
     * @param ownerAddress
     * @returns Stream Attributes:
     * streamCount: BigNumber;
     * streamCreateTime: BigNumber;
     * @throws error if contract call fails
     */
    getStreamAttribute(ownerAddress: string): Promise<[BigNumber, BigNumber] & {
        createTime: BigNumber;
        streamCount: BigNumber;
    }>;
    /**
     * Get Wallet Token Balance
     * @param owner owner address
     * @param tokenAddresses token address
     * @returns wallet token balances
     * @throws error if contract call fails
     * */
    getWalletTokenBalance(owner: string, tokenAddresses: string[]): Promise<BigNumber[]>;
    /**
     * Get Wallet Token Balance of multiple owners
     * @param owner owner address
     * @param tokenAddresses token address
     * @returns wallet token balances
     * @throws error if contract call fails
     * */
    getWalletTokenBalanceNew(owner: string[], tokenAddresses: string[]): Promise<{
        [key: string]: BigNumber[];
    }>;
    /**
     * Retrieves the token balances of an owner's CrestFi wallet.
     * @param sender address of sender
     * @param tokenAddresses array of tokenaddress of which balance is to be retrieved
     * @param overrides call overrides
     * @returns array of balances
     */
    getCrestFiWalletTokenBalances(sender: string, tokenAddresses: string[]): Promise<BigNumber[]>;
    /**
     * Retrieves the token balances of multiple owners' CrestFi wallets.
     * @param sender address of sender
     * @param tokenAddresses array of tokenaddress of which balance is to be retrieved
     * @param overrides call overrides
     * @returns array of balances
     */
    getCrestFiWalletTokenBalanceNew(owners: string[], tokenAddresses: string[]): Promise<{
        [key: string]: BigNumber[];
    }>;
    /**
     * Deposit token to the crestfi wallet
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Withdraw token from the crestfi wallet
     * @param token token address
     * @param amount amount of token to withdraw
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    withdrawToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
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
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    initStream(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Pause a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    pauseStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Resume a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    resumeStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     *  Cancel a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    cancelStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     *  Update a stream
     * @param streamName Transaction Name
     * @param streamBytes id of the stream
     * @param startTime start time of the stream
     * @param endTime end time of the stream
     * @param amount amount of token to stream
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    updateStream(streamName: string, streamBytes: BytesLike, tokenAddress: string, startTime: number, endTime: number, amount: string, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Withdraw from a stream
     * @param streamBytes id of the stream
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    withdrawStream(streamBytes: BytesLike, tokenAddress: string, amount: string, crestfiWalletWithdrawal: boolean, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Instant token transfer
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param receiver receiver of the token
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    instantTokenTransfer(instantName: string, tokenAddress: string, amount: string, receiver: string, crestfiWalletWithdrawal: boolean, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Get total amount currently being streamed
     * @param ownerAddress address of the owner
     * @param tokenAddress token address in array
     * @returns
     */
    getStreamingAmount(ownerAddress: string, tokenAddress: string[]): Promise<BigNumber[]>;
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
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    initStreamTNS(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Instant token transfer with TNS
     * @param name Transaction Name
     * @param receiverId receiver id
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param crestfiWalletWithdraw whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    instantTokenTransferTNS(name: string, receiverId: string, tokenAddress: string, amount: string, crestfiWalletWithdraw?: boolean): Promise<ContractReceipt>;
}
