import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BulkTransferInterface extends utils.Interface {
    functions: {
        "bulkCount(address)": FunctionFragment;
        "bulkTransfers(bytes32)": FunctionFragment;
        "calculateBulkBytes(address,uint256)": FunctionFragment;
        "cancelBulkTransfer(uint256)": FunctionFragment;
        "createBulkTransfer(bytes32,bytes32,uint256,uint8,uint256[],uint256)": FunctionFragment;
        "getBulkTransferName(address,uint256)": FunctionFragment;
        "getBulkTransferRecurringFrequency(address,uint256)": FunctionFragment;
        "getBulkTransferStartTime(address,uint256,uint256)": FunctionFragment;
        "getTrustedForwarder()": FunctionFragment;
        "initialize()": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateBulkTransfer(bytes32,uint256,bytes32,uint256,uint256,uint256[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "verifyBulkInstantTransfer(uint256,uint256,address,address,address,bytes32[])": FunctionFragment;
        "verifyBulkStreamTransfer(uint256,uint256,address,address,address,uint256,uint256,uint8,bytes32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bulkCount" | "bulkTransfers" | "calculateBulkBytes" | "cancelBulkTransfer" | "createBulkTransfer" | "getBulkTransferName" | "getBulkTransferRecurringFrequency" | "getBulkTransferStartTime" | "getTrustedForwarder" | "initialize" | "isTrustedForwarder" | "owner" | "proxiableUUID" | "renounceOwnership" | "transferOwnership" | "updateBulkTransfer" | "upgradeTo" | "upgradeToAndCall" | "verifyBulkInstantTransfer" | "verifyBulkStreamTransfer"): FunctionFragment;
    encodeFunctionData(functionFragment: "bulkCount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bulkTransfers", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "calculateBulkBytes", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancelBulkTransfer", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createBulkTransfer", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getBulkTransferName", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBulkTransferRecurringFrequency", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBulkTransferStartTime", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedForwarder", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateBulkTransfer", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "verifyBulkInstantTransfer", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "verifyBulkStreamTransfer", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    decodeFunctionResult(functionFragment: "bulkCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bulkTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateBulkBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelBulkTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createBulkTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBulkTransferName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBulkTransferRecurringFrequency", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBulkTransferStartTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBulkTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyBulkInstantTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyBulkStreamTransfer", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "CancelledBulkTransfer(address,bytes32)": EventFragment;
        "CreatedBulkTransfer(bytes32,address,uint256,uint8)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdatedBulkTransfer(bytes32,address,bytes32)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CancelledBulkTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreatedBulkTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedBulkTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
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
export interface CancelledBulkTransferEventObject {
    sender: string;
    bulkBytes: string;
}
export type CancelledBulkTransferEvent = TypedEvent<[
    string,
    string
], CancelledBulkTransferEventObject>;
export type CancelledBulkTransferEventFilter = TypedEventFilter<CancelledBulkTransferEvent>;
export interface CreatedBulkTransferEventObject {
    name: string;
    sender: string;
    bulkCount: BigNumber;
    transferType: number;
}
export type CreatedBulkTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    number
], CreatedBulkTransferEventObject>;
export type CreatedBulkTransferEventFilter = TypedEventFilter<CreatedBulkTransferEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpdatedBulkTransferEventObject {
    name: string;
    sender: string;
    bulkBytes: string;
}
export type UpdatedBulkTransferEvent = TypedEvent<[
    string,
    string,
    string
], UpdatedBulkTransferEventObject>;
export type UpdatedBulkTransferEventFilter = TypedEventFilter<UpdatedBulkTransferEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface BulkTransfer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BulkTransferInterface;
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
        bulkCount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        bulkTransfers(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            number,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            merkleRoots: string;
            transferType: number;
            startTime: BigNumber;
            recurringFrequency: BigNumber;
        }>;
        calculateBulkBytes(_sender: PromiseOrValue<string>, _bulkCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        cancelBulkTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createBulkTransfer(_name: PromiseOrValue<BytesLike>, _merkleRoot: PromiseOrValue<BytesLike>, _startTime: PromiseOrValue<BigNumberish>, _transferType: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], _recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBulkTransferName(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            streamName: string;
        }>;
        getBulkTransferRecurringFrequency(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            recurringFrequency: BigNumber;
        }>;
        getBulkTransferStartTime(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            startTime: BigNumber;
        }>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<[string] & {
            forwarder: string;
        }>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBulkTransfer(_name: PromiseOrValue<BytesLike>, bulkTransferIndex: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, startTime: PromiseOrValue<BigNumberish>, _recurringFrequency: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifyBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        verifyBulkStreamTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
    };
    bulkCount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    bulkTransfers(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        string,
        number,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        merkleRoots: string;
        transferType: number;
        startTime: BigNumber;
        recurringFrequency: BigNumber;
    }>;
    calculateBulkBytes(_sender: PromiseOrValue<string>, _bulkCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    cancelBulkTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createBulkTransfer(_name: PromiseOrValue<BytesLike>, _merkleRoot: PromiseOrValue<BytesLike>, _startTime: PromiseOrValue<BigNumberish>, _transferType: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], _recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBulkTransferName(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getBulkTransferRecurringFrequency(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getBulkTransferStartTime(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTrustedForwarder(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBulkTransfer(_name: PromiseOrValue<BytesLike>, bulkTransferIndex: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, startTime: PromiseOrValue<BigNumberish>, _recurringFrequency: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifyBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<boolean>;
    verifyBulkStreamTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        bulkCount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bulkTransfers(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            number,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            merkleRoots: string;
            transferType: number;
            startTime: BigNumber;
            recurringFrequency: BigNumber;
        }>;
        calculateBulkBytes(_sender: PromiseOrValue<string>, _bulkCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        cancelBulkTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createBulkTransfer(_name: PromiseOrValue<BytesLike>, _merkleRoot: PromiseOrValue<BytesLike>, _startTime: PromiseOrValue<BigNumberish>, _transferType: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], _recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getBulkTransferName(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getBulkTransferRecurringFrequency(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBulkTransferStartTime(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateBulkTransfer(_name: PromiseOrValue<BytesLike>, bulkTransferIndex: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, startTime: PromiseOrValue<BigNumberish>, _recurringFrequency: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        verifyBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<boolean>;
        verifyBulkStreamTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "CancelledBulkTransfer(address,bytes32)"(sender?: PromiseOrValue<string> | null, bulkBytes?: null): CancelledBulkTransferEventFilter;
        CancelledBulkTransfer(sender?: PromiseOrValue<string> | null, bulkBytes?: null): CancelledBulkTransferEventFilter;
        "CreatedBulkTransfer(bytes32,address,uint256,uint8)"(name?: null, sender?: PromiseOrValue<string> | null, bulkCount?: null, transferType?: null): CreatedBulkTransferEventFilter;
        CreatedBulkTransfer(name?: null, sender?: PromiseOrValue<string> | null, bulkCount?: null, transferType?: null): CreatedBulkTransferEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "UpdatedBulkTransfer(bytes32,address,bytes32)"(name?: null, sender?: PromiseOrValue<string> | null, bulkBytes?: null): UpdatedBulkTransferEventFilter;
        UpdatedBulkTransfer(name?: null, sender?: PromiseOrValue<string> | null, bulkBytes?: null): UpdatedBulkTransferEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        bulkCount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bulkTransfers(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateBulkBytes(_sender: PromiseOrValue<string>, _bulkCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelBulkTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createBulkTransfer(_name: PromiseOrValue<BytesLike>, _merkleRoot: PromiseOrValue<BytesLike>, _startTime: PromiseOrValue<BigNumberish>, _transferType: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], _recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBulkTransferName(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBulkTransferRecurringFrequency(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBulkTransferStartTime(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBulkTransfer(_name: PromiseOrValue<BytesLike>, bulkTransferIndex: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, startTime: PromiseOrValue<BigNumberish>, _recurringFrequency: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        verifyBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        verifyBulkStreamTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bulkCount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bulkTransfers(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateBulkBytes(_sender: PromiseOrValue<string>, _bulkCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelBulkTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createBulkTransfer(_name: PromiseOrValue<BytesLike>, _merkleRoot: PromiseOrValue<BytesLike>, _startTime: PromiseOrValue<BigNumberish>, _transferType: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], _recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBulkTransferName(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBulkTransferRecurringFrequency(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBulkTransferStartTime(bulkSender: PromiseOrValue<string>, bulkTransferIndex: PromiseOrValue<BigNumberish>, recurringFrequency: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBulkTransfer(_name: PromiseOrValue<BytesLike>, bulkTransferIndex: PromiseOrValue<BigNumberish>, merkleRoot: PromiseOrValue<BytesLike>, startTime: PromiseOrValue<BigNumberish>, _recurringFrequency: PromiseOrValue<BigNumberish>, _startTimes: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifyBulkInstantTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyBulkStreamTransfer(bulkTransferIndex: PromiseOrValue<BigNumberish>, transferingAmount: PromiseOrValue<BigNumberish>, transferingToken: PromiseOrValue<string>, transferSender: PromiseOrValue<string>, transferReceiver: PromiseOrValue<string>, transferStartTime: PromiseOrValue<BigNumberish>, transferEndTime: PromiseOrValue<BigNumberish>, streamParam: PromiseOrValue<BigNumberish>, proofs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
