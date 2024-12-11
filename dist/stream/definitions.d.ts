import { BigNumber, BytesLike, ContractReceipt, ethers } from 'ethers';
export interface ICrestFiStream {
    /**
     * Get Signer Address
     * @returns signer address
     */
    getSignerAddress(): Promise<string>;
    /**
     * get Stream Bytes of a owner address
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     *
     */
    getLatestStreamBytes(ownerAddress: string): Promise<BytesLike>;
    /**
     * Get Streamed Amount
     * @param streamBytes stream bytes
     * @returns streamed amount
     * @throws error if contract call fails
     *
     */
    getWithdrawableAmounts(streamBytes: BytesLike): Promise<BigNumber>;
    /**
     * Get Stream Details
     * @param streamBytes stream bytes
     * @returns Stream Details:
     *       receiver: string;
     *       token: string;
     *       startTime: BigNumber;
     *       endTime: BigNumber;
     *       amounts: Core.AmountStructOutput;
     *       pausedTime: BigNumber;
     *       withdrawTime: BigNumber;
     *       originCrestFiWallet: string;
     *       canceled: boolean;
     *       paused: boolean;
     *       streamParam: number;
     * @throws error if contract call fails
     *
     */
    getStreamDetails(streamBytes: BytesLike): {};
    /**
     * Grant Whitelister Role
     * @param whitelister address of the whitelister
     * @throws error if contract call fails
     *
     */
    grantWhitelisterRole(whitelister: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Whitelist Token
     * @param token token address
     * @throws error if contract call fails
     *
     */
    whitelistToken(tokens: string[], overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Get Stream Attributes
     * @param ownerAddress
     * @returns Stream Attributes:
     * streamCount: BigNumber;
     * streamCreateTime: BigNumber;
     * @throws error if contract call fails
     */
    getStreamAttribute(ownerAddress: string): {};
    /**
     * Get CrestFi Wallet Token Balance
     * @param owner owner address
     * @param tokenAddresses token address
     * @returns wallet token balances
     * @throws error if contract call fails
     *
     */
    getWalletTokenBalance(owner: string, tokenAddresses: string[]): {};
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Withdraw token from the contract
     * @param token token address
     * @param amount amount of token to withdraw
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    withdrawToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
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
     *
     */
    initStream(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Pause a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    pauseStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Resume a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    resumeStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     *  Cancel a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    cancelStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     *  Update a stream
     * @param streamName Transaction Name
     * @param streamBytes id of the stream
     * @param startTime start time of the stream
     * @param endTime end time of the stream
     * @param amount amount of token to stream
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    updateStream(streamName: string, streamBytes: BytesLike, tokenAddress: string, startTime: number, endTime: number, amount: string, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Withdraw from a stream
     * @param streamBytes id of the stream
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    withdrawStream(streamBytes: BytesLike, tokenAddress: string, amount: string, crestfiWalletWithdrawal: boolean, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Instant token transfer
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param receiver receiver of the token
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    instantTokenTransfer(instantName: string, tokenAddress: string, amount: string, receiver: string, crestfiWalletWithdrawal: boolean, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Gets vault token balance
     * @param sender address of sender
     * @param tokenAddresses array of tokenaddress of which balance is to be retrieved
     * @param overrides call overrides
     * @returns array of balances
     */
    getCrestFiWalletTokenBalances(sender: string, tokenAddresses: string[]): Promise<BigNumber[]>;
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
    initStreamTNS(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean, overrides?: ethers.Overrides): Promise<ContractReceipt>;
    /**
     * Instant token transfer with TNS
     * @param name Transaction Name
     * @param receiverId receiver id
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param crestfiWalletWithdraw whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     *
     */
    instantTokenTransferTNS(name: string, receiverId: string, tokenAddress: string, amount: string, crestfiWalletWithdraw: boolean): {};
}
export interface ICrestFiMultisigStream {
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction data
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
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction data
     * @throws error if transaction fails
     */
    depositToken(safeAddress: string, tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<string[]>;
    /**
     * Withdraw token from the contract
     * @param token token address
     * @param amount amount of token to withdraw
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    withdrawToken(tokenAddress: string, amount: string, overrides?: ethers.Overrides): Promise<string>;
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
     *
     */
    initStream(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean, overrides?: ethers.Overrides): Promise<string>;
    /**
     * Pause a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    pauseStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<string>;
    /**
     * Resume a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    resumeStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<string>;
    /**
     *  Cancel a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    cancelStream(streamBytes: BytesLike, overrides?: ethers.Overrides): Promise<string>;
    /**
     *  Update a stream
     * @param streamName Transaction Name
     * @param streamBytes id of the stream
     * @param startTime start time of the stream
     * @param endTime end time of the stream
     * @param amount amount of token to stream
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    updateStream(streamName: string, streamBytes: BytesLike, tokenAddress: string, startTime: number, endTime: number, amount: string, overrides?: ethers.Overrides): Promise<string>;
    /**
     * Withdraw from a stream
     * @param streamBytes id of the stream
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    withdrawStream(streamBytes: BytesLike, tokenAddress: string, amount: string, crestfiWalletWithdrawal: boolean, overrides?: ethers.Overrides): Promise<string>;
    /**
     * Instant token transfer
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param receiver receiver of the token
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    instantTokenTransfer(instantName: string, tokenAddress: string, amount: string, receiver: string, crestfiWalletWithdrawal: boolean, overrides?: ethers.Overrides): Promise<string>;
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
    initStreamTNS(streamName: string, amount: string, tokenAddress: string, receiver: string, startTime: number, endTime: number, canCancel: boolean, canPause: boolean, overrides?: ethers.Overrides): Promise<string>;
    /**
     * Instant token transfer with TNS
     * @param name Transaction Name
     * @param receiverId receiver id
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param crestfiWalletWithdraw whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     *
     */
    instantTokenTransferTNS(name: string, receiverId: string, tokenAddress: string, amount: string, crestfiWalletWithdraw: boolean): {};
}
