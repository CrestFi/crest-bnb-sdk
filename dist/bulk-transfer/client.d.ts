import { BigNumber, BytesLike, ethers, Signer } from "ethers";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import { ICrestFiBulkTransfer } from "./definitions";
export declare class CrestFiBulkClient implements ICrestFiBulkTransfer {
    private _contract;
    private _core_contract;
    constructor(signer: Signer | ethers.providers.Provider, bulkContractAddress?: string, coreContractAddress?: string);
    /**
     * Get Stream Attributes
     * @param ownerAddress
     * @returns Stream Attributes:
     * @throws error if contract call fails
     */
    getStreamAttribute(ownerAddress: string): Promise<[BigNumber, BigNumber] & {
        createTime: BigNumber;
        streamCount: BigNumber;
    }>;
    /**
     * get Stream Bytes of a owner address
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     * */
    getLatestStreamBytes(ownerAddress: string): Promise<BytesLike>;
    getBulkTransferRoot(bulkTransferBytes: string): Promise<string>;
    /**
     * Get Streamed Amount
     * @param streamBytes stream bytes
     * @returns streamed amount
     * @throws error if contract call fails
     * */
    getWithdrawableAmounts(streamBytes: BytesLike): Promise<BigNumber>;
    /**
     * Get Lateest Bulk Count
     * @param userAddress user address
     * @returns bulk count
     * @throws error if contract call fails
     * */
    getLatestBulkCount(userAddress: string): Promise<BigNumber>;
    /**
     * Get Lateest Bulk Bytes
     * @param userAddress user address
     * @returns bulk bytes
     * @throws error if contract call fails
     * */
    calculateLatestBulkBytes(userAddress: string): Promise<string>;
    /**
     * Update Bulk Transfer
     * @param bulkName Transaction Name
     * @param bulkBytes Bulk Stream Bytes/id
     * @param merkleRoot Merkle Root
     * @param startTime New Start Time
     * @param smallestStreamStartTime Smallest Stream Start Time
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    updateBulkTransfer(bulkName: string, bulkTransferIndex: number, merkleRoot: string, startTimes: BigNumber[], recurringFrequency: number, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Get Bulk Stream Root
     * @param tokenAddress Token Address
     * @param amounts Amounts
     * @param receivers Receivers
     * @param startTimes Start Times
     * @param endTimes End Times
     * @param streamParams Stream Params (0: pausable, 1: cancelable, 2: pausable & cancelable, 3: none)
     * @returns Merkle Tree and Smallest Stream Start Time
     * @throws error if contract call fails
     * */
    getBulkStreamRoot(tokenAddress: string, amounts: string[], receivers: string[], startTimes: number[], endTimes: number[], streamParams: number[]): Promise<[StandardMerkleTree<any>, number]>;
    /**
     * Get Bulk Instant Transfer Root
     * @param tokenAddress Token Address
     * @param amounts Amounts
     * @param receivers Receivers
     * @returns Merkle Tree
     * @throws error if contract call fails
     * */
    getBulkInstantTransferRoot(tokenAddress: string, amounts: string[], receivers: string[]): Promise<StandardMerkleTree<any>>;
    /**
     * Update Bulk Stream
     * @param tokenAddress Token Address
     * @param amounts Amounts
     * @param receivers Receivers
     * @param bulkTransferIndex Bulk Count
     * @returns Merkle Tree
     * @throws error if contract call fails
     * */
    updateBulkInstantTransferRoot(tokenAddress: string, amounts: string[], receivers: string[], bulkTransferIndex: BigNumber): Promise<StandardMerkleTree<any>>;
    /**
     * Initialize Bulk Stream
     * @param bulkStreamName Transactin Name
     * @param bulkTree Merkle Tree
     * @param startTime Start Time
     * @param smallestStreamStartTime Smallest Stream Start Time
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    initBlulkStream(bulkStreamName: string, bulkTreeRoot: string, smallestStreamStartTime: number, startTimes: BigNumber[], recurringFrequency: number, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /**
     * Initialize Bulk Instant Transfer
     * @param bulkInstantName Transactin Name
     * @param bulkTree Merkle Tree
     * @param startTime Start Time
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    initBlulkInstantTransfer(bulkInstantName: string, bulkTreeRoot: string, startTimes: BigNumber[], recurringFrequency: number, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /** Withdraw Bulk Stream
     * @param index Bulk Stream Index
     * @param amount Amount
     * @param tokenAddress Token Address
     * @param sender Sender
     * @param receiver Receiver
     * @param startTime Start Time
     * @param endTime End Time
     * @param streamParam Stream Param (0: pausable, 1: cancelable, 2: pausable & cancelable, 3: none)
     * @param proofs Merkle Proofs
     * @param withdrawAmount Withdraw Amount
     * @param crestfiWalletWithdraw CrestFi Wallet Withdraw
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    withdrawBulkStream(index: number, amount: string, tokenAddress: string, sender: string, receiver: string, startTime: number, endTime: number, streamParam: number, proofs: string[], withdrawAmount: BigNumber, crestfiWalletWithdraw: boolean, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    /** Withdraw Bulk Instant Transfer
     * @param index Bulk Stream Index
     * @param amount Amount
     * @param tokenAddress Token Address
     * @param sender Sender
     * @param receiver Receiver
     * @param proofs Merkle Proofs
     * @param crestfiWalletTransfer CrestFi Wallet Transfer
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    verifyBulkInstantTransfer(index: number, amount: string, tokenAddress: string, sender: string, receiver: string, proofs: string[]): Promise<boolean>;
    /** Withdraw Bulk Instant Transfer
     * @param index Bulk Stream Index
     * @param amount Amount
     * @param tokenAddress Token Address
     * @param sender Sender
     * @param receiver Receiver
     * @param proofs Merkle Proofs
     * @param crestfiWalletTransfer CrestFi Wallet Transfer
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    withdrawBulkInstantTransfer(index: number, amount: string, tokenAddress: string, sender: string, receiver: string, proofs: string[], crestfiWalletTransfer: boolean, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
    cancelBulkInstantTransfer(index: number, overrides?: ethers.Overrides): Promise<ethers.ContractReceipt>;
}
