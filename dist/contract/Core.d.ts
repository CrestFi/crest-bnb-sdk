import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Core {
    type AmountStruct = {
        streamAmount: PromiseOrValue<BigNumberish>;
        releasedAmount: PromiseOrValue<BigNumberish>;
        unlockedAmount: PromiseOrValue<BigNumberish>;
        pausedAmount: PromiseOrValue<BigNumberish>;
    };
    type AmountStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        streamAmount: BigNumber;
        releasedAmount: BigNumber;
        unlockedAmount: BigNumber;
        pausedAmount: BigNumber;
    };
}
export interface CoreInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "bulkTransferWithdrawCount(bytes32)": FunctionFragment;
        "calculateMinimumDepositAmount(address,address[])": FunctionFragment;
        "calculateReleasableAmount(bytes32)": FunctionFragment;
        "calculateStreamBytes(address,uint256)": FunctionFragment;
        "cancelStream(bytes32)": FunctionFragment;
        "createStream(bytes32,uint256,address,address,uint256,uint256,bool,bool)": FunctionFragment;
        "createStreamTNS(bytes32,uint256,address,string,uint256,uint256,bool,bool)": FunctionFragment;
        "depositTokens(address,uint256,address)": FunctionFragment;
        "fundAllowance(address,address,address)": FunctionFragment;
        "fundApproval(address,address,uint256)": FunctionFragment;
        "fundTransferFrom(address,address,address,uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getTrustedForwarder()": FunctionFragment;
        "getWalletTokenBalance(address[],address[])": FunctionFragment;
        "getCrestFiWalletTokenBalance(address[],address[])": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "grantWhitelisterRole(address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "instantStream(bytes32,uint256,address,address,uint256,uint256,bool,bool)": FunctionFragment;
        "instantStreamTNS(bytes32,uint256,address,string,uint256,uint256,bool,bool)": FunctionFragment;
        "instantTokenTransfer(bytes32,address,uint256,address,bool)": FunctionFragment;
        "instantTokenTransferTNS(bytes32,address,uint256,string,bool)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pauseStream(bytes32)": FunctionFragment;
        "paused()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "resumeStream(bytes32)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "streams(bytes32)": FunctionFragment;
        "subTokenId(uint256,string)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "toggleContractPause()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateBulkTransferContract(address)": FunctionFragment;
        "updateStakingContract(address)": FunctionFragment;
        "updateStream(bytes32,bytes32,uint256,uint256,uint256)": FunctionFragment;
        "updateWhitelistedTokens(address[],bool[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "walletTokenBalances(address,address)": FunctionFragment;
        "wallets(address)": FunctionFragment;
        "whitelistedTokens(address)": FunctionFragment;
        "withdrawBulkInstantTransfer(uint256,uint256,address,address,address,bytes32[],bool)": FunctionFragment;
        "withdrawBulkTransferStream(uint256,uint256,address,address,address,uint256,uint256,uint8,bytes32[],uint256,bool)": FunctionFragment;
        "withdrawStream(bytes32,uint256,bool)": FunctionFragment;
        "withdrawTokens(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "bulkTransferWithdrawCount" | "calculateMinimumDepositAmount" | "calculateReleasableAmount" | "calculateStreamBytes" | "cancelStream" | "createStream" | "createStreamTNS" | "depositTokens" | "fundAllowance" | "fundApproval" | "fundTransferFrom" | "getRoleAdmin" | "getTrustedForwarder" | "getWalletTokenBalance" | "getCrestFiWalletTokenBalance" | "grantRole" | "grantWhitelisterRole" | "hasRole" | "initialize" | "instantStream" | "instantStreamTNS" | "instantTokenTransfer" | "instantTokenTransferTNS" | "isTrustedForwarder" | "owner" | "pauseStream" | "paused" | "proxiableUUID" | "renounceOwnership" | "renounceRole" | "resumeStream" | "revokeRole" | "streams" | "subTokenId" | "supportsInterface" | "toggleContractPause" | "transferOwnership" | "updateBulkTransferContract" | "updateStakingContract" | "updateStream" | "updateWhitelistedTokens" | "upgradeTo" | "upgradeToAndCall" | "walletTokenBalances" | "wallets" | "whitelistedTokens" | "withdrawBulkInstantTransfer" | "withdrawBulkTransferStream" | "withdrawStream" | "withdrawTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "bulkTransferWithdrawCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "calculateMinimumDepositAmount", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "calculateReleasableAmount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "calculateStreamBytes", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancelStream", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "createStream", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "createStreamTNS", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "depositTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "fundAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "fundApproval", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fundTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getTrustedForwarder", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWalletTokenBalance", values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getCrestFiWalletTokenBalance", values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grantWhitelisterRole", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "instantStream", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "instantStreamTNS", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "instantTokenTransfer", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "instantTokenTransferTNS", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseStream", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "resumeStream", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "streams", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "subTokenId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "toggleContractPause", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateBulkTransferContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateStakingContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateStream", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateWhitelistedTokens", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "walletTokenBalances", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "wallets", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelistedTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawBulkInstantTransfer", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawBulkTransferStream", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawStream", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawTokens", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bulkTransferWithdrawCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateMinimumDepositAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateReleasableAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateStreamBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createStreamTNS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWalletTokenBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCrestFiWalletTokenBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantWhitelisterRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantStreamTNS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantTokenTransferTNS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "streams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subTokenId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleContractPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBulkTransferContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateWhitelistedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "walletTokenBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wallets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawBulkInstantTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawBulkTransferStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStream", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokens", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "BulkTransferContractUpdated(address)": EventFragment;
        "BulkTransferInstantTransfer(uint256,address,address,uint256)": EventFragment;
        "BulkTransferStreamed(address,address,uint256,uint256)": EventFragment;
        "CreatedStream(bytes32,address,address,address,uint256,uint256,uint256,bytes32,uint8)": EventFragment;
        "CreatedCrestFiWallet(address)": EventFragment;
        "CreatedCrestFiWalletAndStreamed(address,bytes32,address,uint256,address)": EventFragment;
        "DepositedToken(address,address,address,uint256)": EventFragment;
        "FundApproval(address,address,address,uint256)": EventFragment;
        "FundTransfer(address,address,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "InstantTokenTransfer(bytes32,address,address,uint256,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "PausedStreaming(bytes32,uint256,uint256)": EventFragment;
        "ResumedStreaming(bytes32,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "StakingContractUpdated(address)": EventFragment;
        "StoppedStreaming(bytes32,address,uint256)": EventFragment;
        "TokenWhitelisted(address,address,bool)": EventFragment;
        "Unpaused(address)": EventFragment;
        "UpdatedStream(bytes32,bytes32,address,uint256,uint256,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
        "WalletWithdrawn(address,address,address,uint256)": EventFragment;
        "WithdrawnStream(bytes32,address,address,uint256)": EventFragment;
        "CrestFiWalletWithdrawn(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BulkTransferContractUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BulkTransferInstantTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BulkTransferStreamed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreatedStream"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreatedCrestFiWallet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreatedCrestFiWalletAndStreamed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositedToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundApproval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InstantTokenTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PausedStreaming"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ResumedStreaming"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingContractUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StoppedStreaming"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenWhitelisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedStream"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WalletWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawnStream"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CrestFiWalletWithdrawn"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface BulkTransferContractUpdatedEventObject {
    contractAddress: string;
}
export type BulkTransferContractUpdatedEvent = TypedEvent<[
    string
], BulkTransferContractUpdatedEventObject>;
export type BulkTransferContractUpdatedEventFilter = TypedEventFilter<BulkTransferContractUpdatedEvent>;
export interface BulkTransferInstantTransferEventObject {
    bulkTransferIndex: BigNumber;
    receiver: string;
    sender: string;
    recurringFrequency: BigNumber;
}
export type BulkTransferInstantTransferEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], BulkTransferInstantTransferEventObject>;
export type BulkTransferInstantTransferEventFilter = TypedEventFilter<BulkTransferInstantTransferEvent>;
export interface BulkTransferStreamedEventObject {
    receiver: string;
    sender: string;
    bulkTransferIndex: BigNumber;
    recurringFrequency: BigNumber;
}
export type BulkTransferStreamedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BulkTransferStreamedEventObject>;
export type BulkTransferStreamedEventFilter = TypedEventFilter<BulkTransferStreamedEvent>;
export interface CreatedStreamEventObject {
    streamName: string;
    streamSender: string;
    streamReceiver: string;
    streamingToken: string;
    streamStartTime: BigNumber;
    streamEndTime: BigNumber;
    streamingAmount: BigNumber;
    streamAddress: string;
    streamParam: number;
}
export type CreatedStreamEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number
], CreatedStreamEventObject>;
export type CreatedStreamEventFilter = TypedEventFilter<CreatedStreamEvent>;
export interface CreatedCrestFiWalletEventObject {
    owner: string;
}
export type CreatedCrestFiWalletEvent = TypedEvent<[
    string
], CreatedCrestFiWalletEventObject>;
export type CreatedCrestFiWalletEventFilter = TypedEventFilter<CreatedCrestFiWalletEvent>;
export interface CreatedCrestFiWalletAndStreamedEventObject {
    crestfiWallet: string;
    streamAddress: string;
    token: string;
    tokenAmount: BigNumber;
    receiver: string;
}
export type CreatedCrestFiWalletAndStreamedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string
], CreatedCrestFiWalletAndStreamedEventObject>;
export type CreatedCrestFiWalletAndStreamedEventFilter = TypedEventFilter<CreatedCrestFiWalletAndStreamedEvent>;
export interface DepositedTokenEventObject {
    sender: string;
    crestfiWallet: string;
    tokenAddress: string;
    amount: BigNumber;
}
export type DepositedTokenEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], DepositedTokenEventObject>;
export type DepositedTokenEventFilter = TypedEventFilter<DepositedTokenEvent>;
export interface FundApprovalEventObject {
    owner: string;
    spender: string;
    tokenAddress: string;
    value: BigNumber;
}
export type FundApprovalEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], FundApprovalEventObject>;
export type FundApprovalEventFilter = TypedEventFilter<FundApprovalEvent>;
export interface FundTransferEventObject {
    from: string;
    to: string;
    tokenAddress: string;
    value: BigNumber;
}
export type FundTransferEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], FundTransferEventObject>;
export type FundTransferEventFilter = TypedEventFilter<FundTransferEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface InstantTokenTransferEventObject {
    name: string;
    crestfiWallet: string;
    token: string;
    amount: BigNumber;
    receiver: string;
}
export type InstantTokenTransferEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string
], InstantTokenTransferEventObject>;
export type InstantTokenTransferEventFilter = TypedEventFilter<InstantTokenTransferEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PausedStreamingEventObject {
    streamAddress: string;
    pausedTime: BigNumber;
    releasableAmount: BigNumber;
}
export type PausedStreamingEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PausedStreamingEventObject>;
export type PausedStreamingEventFilter = TypedEventFilter<PausedStreamingEvent>;
export interface ResumedStreamingEventObject {
    streamAddress: string;
    pausedAmount: BigNumber;
}
export type ResumedStreamingEvent = TypedEvent<[
    string,
    BigNumber
], ResumedStreamingEventObject>;
export type ResumedStreamingEventFilter = TypedEventFilter<ResumedStreamingEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface StakingContractUpdatedEventObject {
    contractAddress: string;
}
export type StakingContractUpdatedEvent = TypedEvent<[
    string
], StakingContractUpdatedEventObject>;
export type StakingContractUpdatedEventFilter = TypedEventFilter<StakingContractUpdatedEvent>;
export interface StoppedStreamingEventObject {
    streamAddress: string;
    crestfiWallet: string;
    releasedAmount: BigNumber;
}
export type StoppedStreamingEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StoppedStreamingEventObject>;
export type StoppedStreamingEventFilter = TypedEventFilter<StoppedStreamingEvent>;
export interface TokenWhitelistedEventObject {
    token: string;
    whitelistWallet: string;
    whitelisted: boolean;
}
export type TokenWhitelistedEvent = TypedEvent<[
    string,
    string,
    boolean
], TokenWhitelistedEventObject>;
export type TokenWhitelistedEventFilter = TypedEventFilter<TokenWhitelistedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpdatedStreamEventObject {
    streamAddress: string;
    streamName: string;
    crestfiWallet: string;
    streamStartTime: BigNumber;
    streamEndTime: BigNumber;
    streamAmount: BigNumber;
}
export type UpdatedStreamEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], UpdatedStreamEventObject>;
export type UpdatedStreamEventFilter = TypedEventFilter<UpdatedStreamEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface WalletWithdrawnEventObject {
    receiver: string;
    owner: string;
    tokenAddress: string;
    amount: BigNumber;
}
export type WalletWithdrawnEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], WalletWithdrawnEventObject>;
export type WalletWithdrawnEventFilter = TypedEventFilter<WalletWithdrawnEvent>;
export interface WithdrawnStreamEventObject {
    streamAddress: string;
    crestfiWallet: string;
    receiver: string;
    releasedAmount: BigNumber;
}
export type WithdrawnStreamEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], WithdrawnStreamEventObject>;
export type WithdrawnStreamEventFilter = TypedEventFilter<WithdrawnStreamEvent>;
export interface CrestFiWalletWithdrawnEventObject {
    receiver: string;
    owner: string;
    tokenAddress: string;
    amount: BigNumber;
}
export type CrestFiWalletWithdrawnEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], CrestFiWalletWithdrawnEventObject>;
export type CrestFiWalletWithdrawnEventFilter = TypedEventFilter<CrestFiWalletWithdrawnEvent>;
export interface Core extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CoreInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        bulkTransferWithdrawCount(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateMinimumDepositAmount(crestfiWallet: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            minimumDeposit: BigNumber[];
            outgoingStreamBalance: BigNumber[];
        }>;
        calculateReleasableAmount(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            releaseAmount: BigNumber;
        }>;
        calculateStreamBytes(crestfiWallet: PromiseOrValue<string>, _streamCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        cancelStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositTokens(crestfiWalletAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundAllowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        fundApproval(spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<[string] & {
            forwarder: string;
        }>;
        getWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getCrestFiWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantWhitelisterRole(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_staking: PromiseOrValue<string>, _bulkTransfer: PromiseOrValue<string>, _tnsRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        instantStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        instantStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        instantTokenTransfer(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        instantTokenTransferTNS(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiverLabel: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pauseStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resumeStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        streams(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            Core.AmountStructOutput,
            BigNumber,
            BigNumber,
            string,
            boolean,
            boolean,
            number
        ] & {
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
        subTokenId(tokenId: PromiseOrValue<BigNumberish>, label: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        toggleContractPause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBulkTransferContract(bulkTransferContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateStakingContract(stakingContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateStream(streamBytes: PromiseOrValue<BytesLike>, streamName: PromiseOrValue<BytesLike>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateWhitelistedTokens(tokens: PromiseOrValue<string>[], isWhitelisted: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        walletTokenBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        wallets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            createTime: BigNumber;
            streamCount: BigNumber;
        }>;
        whitelistedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawBulkTransferStream(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawStream(streamBytes: PromiseOrValue<BytesLike>, withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTokens(amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    bulkTransferWithdrawCount(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateMinimumDepositAmount(crestfiWallet: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber[]
    ] & {
        minimumDeposit: BigNumber[];
        outgoingStreamBalance: BigNumber[];
    }>;
    calculateReleasableAmount(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    calculateStreamBytes(crestfiWallet: PromiseOrValue<string>, _streamCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    cancelStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositTokens(crestfiWalletAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundAllowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    fundApproval(spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getTrustedForwarder(overrides?: CallOverrides): Promise<string>;
    getWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getCrestFiWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantWhitelisterRole(user: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initialize(_staking: PromiseOrValue<string>, _bulkTransfer: PromiseOrValue<string>, _tnsRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    instantStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    instantStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    instantTokenTransfer(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    instantTokenTransferTNS(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiverLabel: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    pauseStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resumeStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    streams(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        Core.AmountStructOutput,
        BigNumber,
        BigNumber,
        string,
        boolean,
        boolean,
        number
    ] & {
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
    subTokenId(tokenId: PromiseOrValue<BigNumberish>, label: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    toggleContractPause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBulkTransferContract(bulkTransferContract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateStakingContract(stakingContract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateStream(streamBytes: PromiseOrValue<BytesLike>, streamName: PromiseOrValue<BytesLike>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateWhitelistedTokens(tokens: PromiseOrValue<string>[], isWhitelisted: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    walletTokenBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    wallets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        createTime: BigNumber;
        streamCount: BigNumber;
    }>;
    whitelistedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    withdrawBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawBulkTransferStream(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawStream(streamBytes: PromiseOrValue<BytesLike>, withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTokens(amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        bulkTransferWithdrawCount(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateMinimumDepositAmount(crestfiWallet: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            minimumDeposit: BigNumber[];
            outgoingStreamBalance: BigNumber[];
        }>;
        calculateReleasableAmount(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateStreamBytes(crestfiWallet: PromiseOrValue<string>, _streamCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        cancelStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        createStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        createStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        depositTokens(crestfiWalletAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fundAllowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fundApproval(spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fundTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<string>;
        getWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getCrestFiWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        grantWhitelisterRole(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initialize(_staking: PromiseOrValue<string>, _bulkTransfer: PromiseOrValue<string>, _tnsRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        instantStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        instantStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        instantTokenTransfer(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        instantTokenTransferTNS(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiverLabel: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        pauseStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        resumeStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        streams(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            Core.AmountStructOutput,
            BigNumber,
            BigNumber,
            string,
            boolean,
            boolean,
            number
        ] & {
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
        subTokenId(tokenId: PromiseOrValue<BigNumberish>, label: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        toggleContractPause(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateBulkTransferContract(bulkTransferContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateStakingContract(stakingContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateStream(streamBytes: PromiseOrValue<BytesLike>, streamName: PromiseOrValue<BytesLike>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateWhitelistedTokens(tokens: PromiseOrValue<string>[], isWhitelisted: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        walletTokenBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wallets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            createTime: BigNumber;
            streamCount: BigNumber;
        }>;
        whitelistedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        withdrawBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        withdrawBulkTransferStream(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        withdrawStream(streamBytes: PromiseOrValue<BytesLike>, withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        withdrawTokens(amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "BulkTransferContractUpdated(address)"(contractAddress?: PromiseOrValue<string> | null): BulkTransferContractUpdatedEventFilter;
        BulkTransferContractUpdated(contractAddress?: PromiseOrValue<string> | null): BulkTransferContractUpdatedEventFilter;
        "BulkTransferInstantTransfer(uint256,address,address,uint256)"(bulkTransferIndex?: null, receiver?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, recurringFrequency?: null): BulkTransferInstantTransferEventFilter;
        BulkTransferInstantTransfer(bulkTransferIndex?: null, receiver?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, recurringFrequency?: null): BulkTransferInstantTransferEventFilter;
        "BulkTransferStreamed(address,address,uint256,uint256)"(receiver?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, bulkTransferIndex?: null, recurringFrequency?: null): BulkTransferStreamedEventFilter;
        BulkTransferStreamed(receiver?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, bulkTransferIndex?: null, recurringFrequency?: null): BulkTransferStreamedEventFilter;
        "CreatedStream(bytes32,address,address,address,uint256,uint256,uint256,bytes32,uint8)"(streamName?: null, streamSender?: null, streamReceiver?: null, streamingToken?: null, streamStartTime?: null, streamEndTime?: null, streamingAmount?: null, streamAddress?: PromiseOrValue<BytesLike> | null, streamParam?: null): CreatedStreamEventFilter;
        CreatedStream(streamName?: null, streamSender?: null, streamReceiver?: null, streamingToken?: null, streamStartTime?: null, streamEndTime?: null, streamingAmount?: null, streamAddress?: PromiseOrValue<BytesLike> | null, streamParam?: null): CreatedStreamEventFilter;
        "CreatedCrestFiWallet(address)"(owner?: PromiseOrValue<string> | null): CreatedCrestFiWalletEventFilter;
        CreatedCrestFiWallet(owner?: PromiseOrValue<string> | null): CreatedCrestFiWalletEventFilter;
        "CreatedCrestFiWalletAndStreamed(address,bytes32,address,uint256,address)"(crestfiWallet?: PromiseOrValue<string> | null, streamAddress?: null, token?: null, tokenAmount?: null, receiver?: null): CreatedCrestFiWalletAndStreamedEventFilter;
        CreatedCrestFiWalletAndStreamed(crestfiWallet?: PromiseOrValue<string> | null, streamAddress?: null, token?: null, tokenAmount?: null, receiver?: null): CreatedCrestFiWalletAndStreamedEventFilter;
        "DepositedToken(address,address,address,uint256)"(sender?: PromiseOrValue<string> | null, crestfiWallet?: null, tokenAddress?: null, amount?: null): DepositedTokenEventFilter;
        DepositedToken(sender?: PromiseOrValue<string> | null, crestfiWallet?: null, tokenAddress?: null, amount?: null): DepositedTokenEventFilter;
        "FundApproval(address,address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, tokenAddress?: null, value?: null): FundApprovalEventFilter;
        FundApproval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, tokenAddress?: null, value?: null): FundApprovalEventFilter;
        "FundTransfer(address,address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenAddress?: null, value?: null): FundTransferEventFilter;
        FundTransfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenAddress?: null, value?: null): FundTransferEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "InstantTokenTransfer(bytes32,address,address,uint256,address)"(name?: null, crestfiWallet?: PromiseOrValue<string> | null, token?: null, amount?: null, receiver?: PromiseOrValue<string> | null): InstantTokenTransferEventFilter;
        InstantTokenTransfer(name?: null, crestfiWallet?: PromiseOrValue<string> | null, token?: null, amount?: null, receiver?: PromiseOrValue<string> | null): InstantTokenTransferEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "PausedStreaming(bytes32,uint256,uint256)"(streamAddress?: PromiseOrValue<BytesLike> | null, pausedTime?: null, releasableAmount?: null): PausedStreamingEventFilter;
        PausedStreaming(streamAddress?: PromiseOrValue<BytesLike> | null, pausedTime?: null, releasableAmount?: null): PausedStreamingEventFilter;
        "ResumedStreaming(bytes32,uint256)"(streamAddress?: PromiseOrValue<BytesLike> | null, pausedAmount?: null): ResumedStreamingEventFilter;
        ResumedStreaming(streamAddress?: PromiseOrValue<BytesLike> | null, pausedAmount?: null): ResumedStreamingEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "StakingContractUpdated(address)"(contractAddress?: PromiseOrValue<string> | null): StakingContractUpdatedEventFilter;
        StakingContractUpdated(contractAddress?: PromiseOrValue<string> | null): StakingContractUpdatedEventFilter;
        "StoppedStreaming(bytes32,address,uint256)"(streamAddress?: PromiseOrValue<BytesLike> | null, crestfiWallet?: null, releasedAmount?: null): StoppedStreamingEventFilter;
        StoppedStreaming(streamAddress?: PromiseOrValue<BytesLike> | null, crestfiWallet?: null, releasedAmount?: null): StoppedStreamingEventFilter;
        "TokenWhitelisted(address,address,bool)"(token?: PromiseOrValue<string> | null, whitelistWallet?: null, whitelisted?: null): TokenWhitelistedEventFilter;
        TokenWhitelisted(token?: PromiseOrValue<string> | null, whitelistWallet?: null, whitelisted?: null): TokenWhitelistedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "UpdatedStream(bytes32,bytes32,address,uint256,uint256,uint256)"(streamAddress?: PromiseOrValue<BytesLike> | null, streamName?: null, crestfiWallet?: null, streamStartTime?: null, streamEndTime?: null, streamAmount?: null): UpdatedStreamEventFilter;
        UpdatedStream(streamAddress?: PromiseOrValue<BytesLike> | null, streamName?: null, crestfiWallet?: null, streamStartTime?: null, streamEndTime?: null, streamAmount?: null): UpdatedStreamEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        "WalletWithdrawn(address,address,address,uint256)"(receiver?: PromiseOrValue<string> | null, owner?: null, tokenAddress?: null, amount?: null): WalletWithdrawnEventFilter;
        WalletWithdrawn(receiver?: PromiseOrValue<string> | null, owner?: null, tokenAddress?: null, amount?: null): WalletWithdrawnEventFilter;
        "WithdrawnStream(bytes32,address,address,uint256)"(streamAddress?: PromiseOrValue<BytesLike> | null, crestfiWallet?: null, receiver?: null, releasedAmount?: null): WithdrawnStreamEventFilter;
        WithdrawnStream(streamAddress?: PromiseOrValue<BytesLike> | null, crestfiWallet?: null, receiver?: null, releasedAmount?: null): WithdrawnStreamEventFilter;
        "CrestFiWalletWithdrawn(address,address,address,uint256)"(receiver?: PromiseOrValue<string> | null, owner?: null, tokenAddress?: null, amount?: null): CrestFiWalletWithdrawnEventFilter;
        CrestFiWalletWithdrawn(receiver?: PromiseOrValue<string> | null, owner?: null, tokenAddress?: null, amount?: null): CrestFiWalletWithdrawnEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        bulkTransferWithdrawCount(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateMinimumDepositAmount(crestfiWallet: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        calculateReleasableAmount(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateStreamBytes(crestfiWallet: PromiseOrValue<string>, _streamCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositTokens(crestfiWalletAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundAllowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fundApproval(spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;
        getWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getCrestFiWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantWhitelisterRole(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_staking: PromiseOrValue<string>, _bulkTransfer: PromiseOrValue<string>, _tnsRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        instantStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        instantStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        instantTokenTransfer(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        instantTokenTransferTNS(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiverLabel: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pauseStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resumeStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        streams(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        subTokenId(tokenId: PromiseOrValue<BigNumberish>, label: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        toggleContractPause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBulkTransferContract(bulkTransferContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateStakingContract(stakingContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateStream(streamBytes: PromiseOrValue<BytesLike>, streamName: PromiseOrValue<BytesLike>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateWhitelistedTokens(tokens: PromiseOrValue<string>[], isWhitelisted: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        walletTokenBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wallets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawBulkTransferStream(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawStream(streamBytes: PromiseOrValue<BytesLike>, withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTokens(amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bulkTransferWithdrawCount(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateMinimumDepositAmount(crestfiWallet: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateReleasableAmount(streamBytes: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateStreamBytes(crestfiWallet: PromiseOrValue<string>, _streamCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositTokens(crestfiWalletAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundAllowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundApproval(spender: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundTransferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCrestFiWalletTokenBalance(sender: PromiseOrValue<string>[], tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantWhitelisterRole(user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_staking: PromiseOrValue<string>, _bulkTransfer: PromiseOrValue<string>, _tnsRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        instantStream(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiver: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        instantStreamTNS(streamName: PromiseOrValue<BytesLike>, streamingAmount: PromiseOrValue<BigNumberish>, streamingToken: PromiseOrValue<string>, streamReceiverLabel: PromiseOrValue<string>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamCancelable: PromiseOrValue<boolean>, streamPausable: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        instantTokenTransfer(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        instantTokenTransferTNS(name: PromiseOrValue<BytesLike>, token: PromiseOrValue<string>, tokenAmount: PromiseOrValue<BigNumberish>, receiverLabel: PromiseOrValue<string>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resumeStream(streamBytes: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        streams(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        subTokenId(tokenId: PromiseOrValue<BigNumberish>, label: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toggleContractPause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBulkTransferContract(bulkTransferContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateStakingContract(stakingContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateStream(streamBytes: PromiseOrValue<BytesLike>, streamName: PromiseOrValue<BytesLike>, streamStartTime: PromiseOrValue<BigNumberish>, streamEndTime: PromiseOrValue<BigNumberish>, streamAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateWhitelistedTokens(tokens: PromiseOrValue<string>[], isWhitelisted: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        walletTokenBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wallets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawBulkTransferStream(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawStream(streamBytes: PromiseOrValue<BytesLike>, withdrawAmount: PromiseOrValue<BigNumberish>, crestfiWalletWithdraw: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTokens(amount: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
