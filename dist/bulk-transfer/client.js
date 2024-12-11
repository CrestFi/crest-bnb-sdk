"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrestFiBulkClient = void 0;
const ethers_1 = require("ethers");
const merkle_tree_1 = require("@openzeppelin/merkle-tree");
const contract_1 = require("../contract");
const constants_1 = require("../utils/constants");
const utils_1 = require("../utils/utils");
class CrestFiBulkClient {
    constructor(signer, bulkContractAddress = constants_1.BULK_CONTRACT_ADDRESS, coreContractAddress = constants_1.CORE_CONTRACT_ADDRESS) {
        this._contract = contract_1.BulkTransfer__factory.connect(bulkContractAddress, signer);
        this._core_contract = contract_1.Core__factory.connect(coreContractAddress, signer);
    }
    /**
     * Get Stream Attributes
     * @param ownerAddress
     * @returns Stream Attributes:
     * @throws error if contract call fails
     */
    getStreamAttribute(ownerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = yield this._core_contract.wallets(ownerAddress);
            return wallet;
        });
    }
    /**
     * get Stream Bytes of a owner address
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     * */
    getLatestStreamBytes(ownerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const streamCount = (yield this.getStreamAttribute(ownerAddress))
                .streamCount;
            return yield this._core_contract.calculateStreamBytes(ownerAddress, streamCount.sub(1));
        });
    }
    getBulkTransferRoot(bulkTransferBytes) {
        return __awaiter(this, void 0, void 0, function* () {
            const bulkTransferRoot = yield this._contract.bulkTransfers(bulkTransferBytes);
            return bulkTransferRoot.merkleRoots;
        });
    }
    /**
     * Get Streamed Amount
     * @param streamBytes stream bytes
     * @returns streamed amount
     * @throws error if contract call fails
     * */
    getWithdrawableAmounts(streamBytes) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawAmounts = yield this._core_contract.calculateReleasableAmount(streamBytes);
            return withdrawAmounts;
        });
    }
    /**
     * Get Lateest Bulk Count
     * @param userAddress user address
     * @returns bulk count
     * @throws error if contract call fails
     * */
    getLatestBulkCount(userAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const bulkCount = yield this._contract.bulkCount(userAddress);
            return bulkCount;
        });
    }
    /**
     * Get Lateest Bulk Bytes
     * @param userAddress user address
     * @returns bulk bytes
     * @throws error if contract call fails
     * */
    calculateLatestBulkBytes(userAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const bulkCount = yield this._contract.bulkCount(userAddress);
            const bytes1 = yield this._contract.calculateBulkBytes(userAddress, bulkCount);
            return bytes1;
        });
    }
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
    updateBulkTransfer(bulkName, bulkTransferIndex, merkleRoot, startTimes, recurringFrequency, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            const bulkNameBytes = ethers_1.ethers.utils.formatBytes32String(bulkName);
            let createBulkTransfer = yield this._contract.updateBulkTransfer(bulkNameBytes, bulkTransferIndex, merkleRoot, startTimes[0], ethers_1.BigNumber.from(recurringFrequency), startTimes, _overrides);
            let createBulkTransferTxn = yield createBulkTransfer.wait();
            return createBulkTransferTxn;
        });
    }
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
    getBulkStreamRoot(tokenAddress, amounts, receivers, startTimes, endTimes, streamParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = [];
            const sender = yield this._contract.signer.getAddress();
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = amounts.map((amount) => ethers_1.ethers.utils.parseEther(amount));
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = amounts.map((amount) => ethers_1.ethers.utils.parseUnits(amount, decimals));
            }
            const smallestStreamStartTime = Math.min(...startTimes);
            const merkleData = [];
            const bulkTransferIndex = yield this._contract.bulkCount(sender);
            for (let i = 0; i < amounts.length; i++) {
                merkleData.push({
                    bulkTransferIndex: ethers_1.BigNumber.from(bulkTransferIndex.add(1)),
                    startTime: ethers_1.BigNumber.from(startTimes[i]),
                    endTime: ethers_1.BigNumber.from(endTimes[i]),
                    amount: ethers_1.BigNumber.from(parsedAmount[i]),
                    token: tokenAddress,
                    sender: yield this._contract.signer.getAddress(),
                    receiver: receivers[i],
                    streamParam: streamParams[i],
                });
            }
            const merkleArray = merkleData.map((data) => [
                data.bulkTransferIndex,
                data.startTime,
                data.endTime,
                data.amount,
                data.token.toString(),
                data.sender.toString(),
                data.receiver.toString(),
                data.streamParam,
            ]);
            const bulkTree = merkle_tree_1.StandardMerkleTree.of(merkleArray, [
                "uint256",
                "uint256",
                "uint256",
                "uint256",
                "address",
                "address",
                "address",
                "uint8",
            ]);
            return [bulkTree, smallestStreamStartTime];
        });
    }
    /**
     * Get Bulk Instant Transfer Root
     * @param tokenAddress Token Address
     * @param amounts Amounts
     * @param receivers Receivers
     * @returns Merkle Tree
     * @throws error if contract call fails
     * */
    getBulkInstantTransferRoot(tokenAddress, amounts, receivers) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = [];
            const sender = yield this._contract.signer.getAddress();
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = amounts.map((amount) => ethers_1.ethers.utils.parseEther(amount));
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = amounts.map((amount) => ethers_1.ethers.utils.parseUnits(amount, decimals));
            }
            const merkleData = [];
            const bulkTransferIndex = yield this._contract.bulkCount(sender);
            console.log("bulkTransferIndex", bulkTransferIndex.toString());
            for (let i = 0; i < amounts.length; i++) {
                merkleData.push({
                    bulkTransferIndex: bulkTransferIndex.add(1).toString(),
                    transferingAmount: parsedAmount[i].toString(),
                    token: tokenAddress,
                    sender: yield this._contract.signer.getAddress(),
                    receiver: receivers[i],
                });
            }
            const merkleArray = merkleData.map((data) => [
                data.bulkTransferIndex,
                data.transferingAmount,
                data.token.toString(),
                data.sender.toString(),
                data.receiver.toString(),
            ]);
            const bulkTree = merkle_tree_1.StandardMerkleTree.of(merkleArray, [
                "uint256",
                "uint256",
                "address",
                "address",
                "address",
            ]);
            return bulkTree;
        });
    }
    /**
     * Update Bulk Stream
     * @param tokenAddress Token Address
     * @param amounts Amounts
     * @param receivers Receivers
     * @param bulkTransferIndex Bulk Count
     * @returns Merkle Tree
     * @throws error if contract call fails
     * */
    updateBulkInstantTransferRoot(tokenAddress, amounts, receivers, bulkTransferIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = [];
            const sender = yield this._contract.signer.getAddress();
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = amounts.map((amount) => ethers_1.ethers.utils.parseEther(amount));
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = amounts.map((amount) => ethers_1.ethers.utils.parseUnits(amount, decimals));
            }
            const merkleData = [];
            console.log("bulkTransferIndex", bulkTransferIndex.toString());
            for (let i = 0; i < amounts.length; i++) {
                merkleData.push({
                    bulkTransferIndex: bulkTransferIndex.toString(),
                    transferingAmount: parsedAmount[i].toString(),
                    token: tokenAddress,
                    sender: yield this._contract.signer.getAddress(),
                    receiver: receivers[i],
                });
            }
            const merkleArray = merkleData.map((data) => [
                data.bulkTransferIndex,
                data.transferingAmount,
                data.token.toString(),
                data.sender.toString(),
                data.receiver.toString(),
            ]);
            const bulkTree = merkle_tree_1.StandardMerkleTree.of(merkleArray, [
                "uint256",
                "uint256",
                "address",
                "address",
                "address",
            ]);
            return bulkTree;
        });
    }
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
    initBlulkStream(bulkStreamName, bulkTreeRoot, smallestStreamStartTime, startTimes, recurringFrequency, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            if (Number(startTimes[0]) > smallestStreamStartTime) {
                throw new Error("startTime must be smaller than the smallest startTime in the bulk transfer");
            }
            const bulkStreamNameBytes = ethers_1.ethers.utils.formatBytes32String(bulkStreamName);
            const tx = yield this._contract.createBulkTransfer(bulkStreamNameBytes, bulkTreeRoot, startTimes[0], 0, startTimes, ethers_1.BigNumber.from(recurringFrequency), _overrides);
            return tx.wait();
        });
    }
    /**
     * Initialize Bulk Instant Transfer
     * @param bulkInstantName Transactin Name
     * @param bulkTree Merkle Tree
     * @param startTime Start Time
     * @param overrides
     * @returns Transaction Receipt
     * @throws error if contract call fails
     * */
    initBlulkInstantTransfer(bulkInstantName, bulkTreeRoot, startTimes, recurringFrequency, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            const bulkInstantNameBytes = ethers_1.ethers.utils.formatBytes32String(bulkInstantName);
            const tx = yield this._contract.createBulkTransfer(bulkInstantNameBytes, bulkTreeRoot, startTimes[0], 1, startTimes, ethers_1.BigNumber.from(recurringFrequency), _overrides);
            return tx.wait();
        });
    }
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
    withdrawBulkStream(index, amount, tokenAddress, sender, receiver, startTime, endTime, streamParam, proofs, withdrawAmount, crestfiWalletWithdraw, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            const startTimeBN = ethers_1.BigNumber.from(startTime);
            const endTimeBN = ethers_1.BigNumber.from(endTime);
            const amountBN = ethers_1.BigNumber.from(amount);
            const tx = yield this._core_contract.withdrawBulkTransferStream(ethers_1.BigNumber.from(index), amountBN, tokenAddress, sender, receiver, startTimeBN, endTimeBN, ethers_1.BigNumber.from(streamParam), proofs, withdrawAmount, crestfiWalletWithdraw, _overrides);
            return tx.wait();
        });
    }
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
    verifyBulkInstantTransfer(index, amount, tokenAddress, sender, receiver, proofs) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount;
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const tx = yield this._contract.verifyBulkInstantTransfer(index, parsedAmount, tokenAddress, sender, receiver, proofs);
            return tx;
        });
    }
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
    withdrawBulkInstantTransfer(index, amount, tokenAddress, sender, receiver, proofs, crestfiWalletTransfer, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            const amountBN = ethers_1.BigNumber.from(amount);
            const tx = yield this._core_contract.withdrawBulkInstantTransfer(index, amountBN, tokenAddress, sender, receiver, proofs, crestfiWalletTransfer, _overrides);
            return tx.wait();
        });
    }
    cancelBulkInstantTransfer(index, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            const tx = yield this._contract.cancelBulkTransfer(index, _overrides);
            return tx.wait();
        });
    }
}
exports.CrestFiBulkClient = CrestFiBulkClient;
//# sourceMappingURL=client.js.map