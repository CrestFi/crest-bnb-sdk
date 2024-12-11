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
exports.CrestFiMultisigStream = void 0;
const ethers_1 = require("ethers");
const contract_1 = require("../contract");
const utils_1 = require("../utils");
class CrestFiMultisigStream {
    constructor(signerOrProvider, contractAddress = utils_1.CORE_CONTRACT_ADDRESS) {
        this._contract = contract_1.Core__factory.connect(contractAddress, signerOrProvider);
        this.iCore = new ethers_1.ethers.utils.Interface(this._contract.interface.fragments);
    }
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToken(safeAddress, tokenAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            let ApproveTokenData = "";
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
                const address = this._contract.address;
                ApproveTokenData = yield (0, utils_1.getApproveTokenData)(address, token, parsedAmount);
            }
            const depositTokenData = this.iCore.encodeFunctionData("depositTokens", [
                safeAddress,
                parsedAmount,
                tokenAddress,
            ]);
            return [ApproveTokenData, depositTokenData];
        });
    }
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToSafe(tokenAddress, amount, safeAddress, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const _overrides = yield (0, utils_1.getOverrides)(overrides);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
                const receipt = (yield this._contract.signer.sendTransaction({
                    to: safeAddress,
                    value: parsedAmount,
                })).wait();
                return receipt;
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
                const receipt = yield (yield token.transfer(safeAddress, parsedAmount, _overrides)).wait();
                return receipt;
            }
        });
    }
    /**
     * Deposit token to the contract
     * @param token token address
     * @param amount amount of token to deposit
     * @param reciever receiver of the token
     * @returns transaction data
     * @throws error if transaction fails
     */
    withdrawFromSafe(tokenAddress, amount, reciever) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                const data = "0x";
                return data;
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
                const transferData = token.interface.encodeFunctionData("transfer", [
                    reciever,
                    parsedAmount,
                ]);
                return transferData;
            }
        });
    }
    /**
     * Withdraw token from the contract
     * @param token token address
     * @param amount amount of token to withdraw
     * @returns transaction data
     * @throws error if transaction fails
     * */
    withdrawToken(tokenAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const data = this.iCore.encodeFunctionData("withdrawTokens", [
                parsedAmount,
                tokenAddress,
            ]);
            return data;
        });
    }
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
    initStream(streamName, amount, tokenAddress, receiver, startTime, endTime, canCancel, canPause) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const streamNameBytes = ethers_1.utils.formatBytes32String(streamName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const data = this.iCore.encodeFunctionData("createStream", [
                streamNameBytes,
                parsedAmount,
                tokenAddress,
                receiver,
                startTime,
                endTime,
                canCancel,
                canPause,
            ]);
            return data;
        });
    }
    /**
     * Pause a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     **/
    pauseStream(streamBytes) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.iCore.encodeFunctionData("pauseStream", [streamBytes]);
            return data;
        });
    }
    /**
     * Resume a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     * */
    resumeStream(streamBytes) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.iCore.encodeFunctionData("resumeStream", [streamBytes]);
            return data;
        });
    }
    /**
     *  Cancel a stream
     * @param streamBytes id of the stream
     * @returns transaction data
     * @throws error if transaction fails
     **/
    cancelStream(streamBytes) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.iCore.encodeFunctionData("cancelStream", [streamBytes]);
            return data;
        });
    }
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
    updateStream(streamName, streamBytes, tokenAddress, startTime, endTime, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const streamNameBytes = ethers_1.utils.formatBytes32String(streamName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const data = this.iCore.encodeFunctionData("updateStream", [
                streamBytes,
                streamNameBytes,
                startTime,
                endTime,
                parsedAmount,
            ]);
            return data;
        });
    }
    /**
     * Withdraw from a stream
     * @param streamBytes id of the stream
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     * */
    withdrawStream(streamBytes, tokenAddress, amount, crestfiWalletWithdrawal) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const data = this.iCore.encodeFunctionData("withdrawStream", [
                streamBytes,
                parsedAmount,
                crestfiWalletWithdrawal,
            ]);
            return data;
        });
    }
    /**
     * Instant token transfer
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param receiver receiver of the token
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction data
     * @throws error if transaction fails
     **/
    instantTokenTransfer(instantName, tokenAddress, amount, receiver, crestfiWalletWithdrawal) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const instantNameBytes = ethers_1.utils.formatBytes32String(instantName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const data = this.iCore.encodeFunctionData("instantTokenTransfer", [
                instantNameBytes,
                tokenAddress,
                parsedAmount,
                receiver,
                crestfiWalletWithdrawal,
            ]);
            return data;
        });
    }
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
    initStreamTNS(streamName, amount, tokenAddress, receiver, startTime, endTime, canCancel, canPause) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const streamNameBytes = ethers_1.utils.formatBytes32String(streamName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_1.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            const data = this.iCore.encodeFunctionData("createStreamTNS", [
                streamNameBytes,
                parsedAmount,
                tokenAddress,
                receiver,
                startTime,
                endTime,
                canCancel,
                canPause,
            ]);
            return data;
        });
    }
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
    instantTokenTransferTNS(name, receiverId, tokenAddress, amount, crestfiWalletWithdraw = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedName = ethers_1.ethers.utils.formatBytes32String(name);
            const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
            const decimals = yield (0, utils_1.getDecimals)(token);
            const parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            const data = this.iCore.encodeFunctionData("instantTokenTransferTNS", [
                parsedName,
                tokenAddress,
                parsedAmount,
                receiverId,
                crestfiWalletWithdraw,
            ]);
            return data;
        });
    }
    /**
     * Transfers multiple tokens to the receiver at the same time
     * Can be used by gnosis safes multicall function
     * @param tokenAddresses token addresses
     * @param amounts amount of tokens to transfer
     * @param receiver  receiver of the token
     * @returns
     */
    drainAccountFromSafe(tokenAddresses, amounts, receiver) {
        return __awaiter(this, void 0, void 0, function* () {
            let datas = [];
            for (let i = 0; i < tokenAddresses.length; i++) {
                const data = this.withdrawFromSafe(tokenAddresses[i], amounts[i], receiver);
                datas.push(data);
            }
            return datas;
        });
    }
    /**
     * Transfers multiple tokens from crestfi wallet to the receiver at the same time
     * Can be used by gnosis safes multicall function
     * @param tokenAddresses token addresses
     * @param amounts amount of tokens to transfer
     * @param receiver  receiver of the token
     * @returns
     */
    drainAccountFromCrestFiWallet(tokenAddresses, amounts, receiver) {
        return __awaiter(this, void 0, void 0, function* () {
            let datas = [];
            for (let i = 0; i < tokenAddresses.length; i++) {
                const data = this.instantTokenTransfer("drainAccount", tokenAddresses[i], amounts[i], receiver, false);
                datas.push(data);
            }
            return datas;
        });
    }
    depositERC721(tokenId, tokenAddress, safeAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = new ethers_1.ethers.Contract(tokenAddress, contract_1.ERC721__factory.abi, this._contract.signer);
            const sender = yield this._contract.signer.getAddress();
            const safeTransferFrom = yield contract.signer.sendTransaction({
                to: tokenAddress,
                data: contract.interface.encodeFunctionData("safeTransferFrom(address, address, uint256)", [sender, safeAddress, tokenId]),
                gasLimit: utils_1.DEFAULT_GAS_LIMIT,
            });
            return [safeTransferFrom];
        });
    }
    depositERC1155(tokenId, tokenAddress, safeAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = new ethers_1.ethers.Contract(tokenAddress, contract_1.ERC1155__factory.abi, this._contract.signer);
            const sender = yield this._contract.signer.getAddress();
            const safeTransferFrom = yield contract.signer.sendTransaction({
                to: tokenAddress,
                data: contract.interface.encodeFunctionData("safeTransferFrom(address, address, uint256, uint256, bytes)", [sender, safeAddress, tokenId, amount, "0x"]),
                gasLimit: utils_1.DEFAULT_GAS_LIMIT,
            });
            return [safeTransferFrom];
        });
    }
    /**
     * Transfer ERC-721 token to the contract
     * @param token token address
     * @param tokenId token id
     * @returns transaction data
     * @throws error if transaction fails
     */
    transferERC721(tokenId, tokenAddress, to, safeAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = new ethers_1.ethers.Contract(tokenAddress, contract_1.ERC721__factory.abi, this._contract.signer);
            const data = contract.interface.encodeFunctionData("safeTransferFrom(address, address, uint256)", [safeAddress, to, tokenId]);
            return data;
        });
    }
    transferERC1155(tokenAddress, tokenIds, amounts, to, safeAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = new ethers_1.ethers.Contract(tokenAddress, contract_1.ERC1155__factory.abi, this._contract.signer);
            let data = "";
            if (tokenIds.length > 1) {
                data = contract.interface.encodeFunctionData("safeBatchTransferFrom", [
                    safeAddress,
                    to,
                    tokenIds,
                    amounts,
                    "0x",
                ]);
            }
            else {
                data = contract.interface.encodeFunctionData("safeTransferFrom", [
                    safeAddress,
                    to,
                    tokenIds[0],
                    amounts[0],
                    "0x",
                ]);
            }
            return data;
        });
    }
}
exports.CrestFiMultisigStream = CrestFiMultisigStream;
//# sourceMappingURL=multisig-data-factory.js.map