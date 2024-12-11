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
exports.CrestFiStreamClient = void 0;
const ethers_1 = require("ethers");
const contract_1 = require("../contract");
const Core__factory_1 = require("../contract/factories/Core__factory");
const utils_1 = require("../utils");
const utils_2 = require("../utils/utils");
class CrestFiStreamClient {
    /**
     * Constructs an client instance to interact with evm bridge contract
     * @param contractAddress address of the bridge contract address
     * @param signer evm signer
     * @param sourceChain wormhole chain id of deployed evm contract
     **/
    constructor(signerOrProvider, contractAddress = utils_1.CORE_CONTRACT_ADDRESS) {
        this._contract = Core__factory_1.Core__factory.connect(contractAddress, signerOrProvider);
    }
    /**
     * Retrieves the signer address.
     * @returns signer address
     */
    getSignerAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._contract.signer.getAddress();
        });
    }
    /**
     * Retrieves the stream bytes for the latest stream of an owner address
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     * */
    getLatestStreamBytes(ownerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const streamCount = (yield this.getStreamAttribute(ownerAddress))
                .streamCount;
            return yield this._contract.calculateStreamBytes(ownerAddress, streamCount.sub(1));
        });
    }
    /**
     * Retrieves the stream bytes for the next stream of an owner address.
     * @param ownerAddress address of the owner
     * @returns stream bytes
     * @throws error if contract call fails
     * */
    getNextStreamBytes(ownerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const streamCount = (yield this.getStreamAttribute(ownerAddress))
                .streamCount;
            return yield this._contract.calculateStreamBytes(ownerAddress, streamCount);
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
            const withdrawAmounts = yield this._contract.calculateReleasableAmount(streamBytes);
            return withdrawAmounts;
        });
    }
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
    getStreamDetails(streamBytes) {
        return __awaiter(this, void 0, void 0, function* () {
            const streamDetails = yield this._contract.streams(streamBytes);
            return streamDetails;
        });
    }
    /**
     * Grants the whitelister role to an address.
     * @param whitelister address of the whitelister
     * @throws error if contract call fails
     * */
    grantWhitelisterRole(whitelister, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!ethers_1.ethers.utils.isAddress(whitelister)) {
                throw new Error("Invalid whitelister address");
            }
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const grantRole = yield this._contract.grantWhitelisterRole(whitelister, _overrides);
            return yield grantRole.wait();
        });
    }
    /**
     * Whitelist Token
     * @param tokens token address
     * @throws error if contract call fails
     * */
    whitelistToken(tokens, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < tokens.length; i++) {
                if (!ethers_1.ethers.utils.isAddress(tokens[i])) {
                    throw new Error("Invalid token address");
                }
            }
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const isWhitelisted = tokens.map((_) => true);
            const whitelistToken = yield this._contract.updateWhitelistedTokens(tokens, isWhitelisted, _overrides);
            return yield whitelistToken.wait();
        });
    }
    /**
     * Delete Whitelisted Token
     * @param tokens token address
     * @throws error if contract call fails
     * */
    unWhilelistToken(tokens, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < tokens.length; i++) {
                if (!ethers_1.ethers.utils.isAddress(tokens[i])) {
                    throw new Error("Invalid token address");
                }
            }
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const isWhitelisted = tokens.map((_) => false);
            const whitelistToken = yield this._contract.updateWhitelistedTokens(tokens, isWhitelisted, _overrides);
            return yield whitelistToken.wait();
        });
    }
    /**
     * Retrieves the stream attributes for an owner address.
     * @param ownerAddress
     * @returns Stream Attributes:
     * streamCount: BigNumber;
     * streamCreateTime: BigNumber;
     * @throws error if contract call fails
     */
    getStreamAttribute(ownerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = yield this._contract.wallets(ownerAddress);
            return wallet;
        });
    }
    /**
     * Get Wallet Token Balance
     * @param owner owner address
     * @param tokenAddresses token address
     * @returns wallet token balances
     * @throws error if contract call fails
     * */
    getWalletTokenBalance(owner, tokenAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletTokenBalance = yield this._contract.getWalletTokenBalance([owner], tokenAddresses);
            return walletTokenBalance;
        });
    }
    /**
     * Get Wallet Token Balance of multiple owners
     * @param owner owner address
     * @param tokenAddresses token address
     * @returns wallet token balances
     * @throws error if contract call fails
     * */
    getWalletTokenBalanceNew(owner, tokenAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            let returnObj = {};
            const walletTokenBalance = yield this._contract.getWalletTokenBalance(owner, tokenAddresses);
            const numOwners = owner.length;
            for (let i = 0; i < numOwners; i++) {
                const offset = walletTokenBalance.length / numOwners;
                returnObj[owner[i]] = walletTokenBalance.slice(i * offset, (i + 1) * offset);
            }
            return returnObj;
        });
    }
    /**
     * Retrieves the token balances of an owner's CrestFi wallet.
     * @param sender address of sender
     * @param tokenAddresses array of tokenaddress of which balance is to be retrieved
     * @param overrides call overrides
     * @returns array of balances
     */
    getCrestFiWalletTokenBalances(sender, tokenAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._contract.getCrestFiWalletTokenBalance([sender], tokenAddresses);
        });
    }
    /**
     * Retrieves the token balances of multiple owners' CrestFi wallets.
     * @param sender address of sender
     * @param tokenAddresses array of tokenaddress of which balance is to be retrieved
     * @param overrides call overrides
     * @returns array of balances
     */
    getCrestFiWalletTokenBalanceNew(owners, tokenAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            let returnObj = {};
            const walletTokenBalance = yield this._contract.getCrestFiWalletTokenBalance(owners, tokenAddresses);
            const numOwners = owners.length;
            for (let i = 0; i < numOwners; i++) {
                const offset = walletTokenBalance.length / numOwners;
                returnObj[owners[i]] = walletTokenBalance.slice(i * offset, (i + 1) * offset);
            }
            return returnObj;
        });
    }
    /**
     * Deposit token to the crestfi wallet
     * @param token token address
     * @param amount amount of token to deposit
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    depositToken(tokenAddress, amount, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let ethValue = ethers_1.ethers.constants.Zero;
            let parsedAmount = ethers_1.ethers.constants.Zero;
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
                ethValue = parsedAmount;
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
                const signer = this._contract.signer;
                const address = this._contract.address;
                yield (0, utils_1.approveToken)(signer, address, token, parsedAmount);
            }
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            return (yield this._contract.depositTokens(this._contract.signer.getAddress(), parsedAmount, tokenAddress, Object.assign(Object.assign({}, _overrides), { value: ethValue }))).wait();
        });
    }
    /**
     * Withdraw token from the crestfi wallet
     * @param token token address
     * @param amount amount of token to withdraw
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    withdrawToken(tokenAddress, amount, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            return (yield this._contract.withdrawTokens(parsedAmount, tokenAddress, _overrides)).wait();
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
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    initStream(streamName, amount, tokenAddress, receiver, startTime, endTime, canCancel, canPause, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const streamNameBytes = ethers_1.utils.formatBytes32String(streamName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            return (yield this._contract.createStream(streamNameBytes, parsedAmount, tokenAddress, receiver, startTime, endTime, canCancel, canPause, _overrides)).wait();
        });
    }
    /**
     * Pause a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    pauseStream(streamBytes, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            return (yield this._contract.pauseStream(streamBytes, _overrides)).wait();
        });
    }
    /**
     * Resume a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    resumeStream(streamBytes, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            return (yield this._contract.resumeStream(streamBytes, _overrides)).wait();
        });
    }
    /**
     *  Cancel a stream
     * @param streamBytes id of the stream
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    cancelStream(streamBytes, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            return (yield this._contract.cancelStream(streamBytes, _overrides)).wait();
        });
    }
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
    updateStream(streamName, streamBytes, tokenAddress, startTime, endTime, amount, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const streamNameBytes = ethers_1.utils.formatBytes32String(streamName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            return (yield this._contract.updateStream(streamBytes, streamNameBytes, startTime, endTime, parsedAmount, _overrides)).wait();
        });
    }
    /**
     * Withdraw from a stream
     * @param streamBytes id of the stream
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     * */
    withdrawStream(streamBytes, tokenAddress, amount, crestfiWalletWithdrawal, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            let parsedAmount = ethers_1.ethers.constants.Zero;
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            return (yield this._contract.functions.withdrawStream(streamBytes, parsedAmount, crestfiWalletWithdrawal, _overrides)).wait();
        });
    }
    /**
     * Instant token transfer
     * @param tokenAddress token address
     * @param amount amount of token to transfer
     * @param receiver receiver of the token
     * @param crestfiWalletWithdrawal whether the withdrawal is to crestfi wallet or user wallet
     * @returns transaction receipt
     * @throws error if transaction fails
     **/
    instantTokenTransfer(instantName, tokenAddress, amount, receiver, crestfiWalletWithdrawal, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const instantNameBytes = ethers_1.utils.formatBytes32String(instantName);
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            return (yield this._contract.instantTokenTransfer(instantNameBytes, tokenAddress, parsedAmount, receiver, crestfiWalletWithdrawal, _overrides)).wait();
        });
    }
    /**
     * Get total amount currently being streamed
     * @param ownerAddress address of the owner
     * @param tokenAddress token address in array
     * @returns
     */
    getStreamingAmount(ownerAddress, tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const [_, balanceRequired] = yield this._contract.calculateMinimumDepositAmount(ownerAddress, tokenAddress);
            return balanceRequired;
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
     * @returns transaction receipt
     * @throws error if transaction fails
     */
    initStreamTNS(streamName, amount, tokenAddress, receiver, startTime, endTime, canCancel, canPause, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let parsedAmount = ethers_1.ethers.constants.Zero;
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const streamNameBytes = ethers_1.utils.formatBytes32String(streamName);
            if (tokenAddress === ethers_1.ethers.constants.AddressZero) {
                parsedAmount = ethers_1.ethers.utils.parseEther(amount);
            }
            else {
                const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(token);
                parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            }
            return (yield this._contract.createStreamTNS(streamNameBytes, parsedAmount, tokenAddress, receiver, startTime, endTime, canCancel, canPause, _overrides)).wait();
        });
    }
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
    instantTokenTransferTNS(name, receiverId, tokenAddress, amount, crestfiWalletWithdraw = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedName = ethers_1.ethers.utils.formatBytes32String(name);
            const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
            const decimals = yield (0, utils_2.getDecimals)(token);
            const parsedAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
            return (yield this._contract.instantTokenTransferTNS(parsedName, tokenAddress, parsedAmount, receiverId, crestfiWalletWithdraw)).wait();
        });
    }
}
exports.CrestFiStreamClient = CrestFiStreamClient;
//# sourceMappingURL=client.js.map