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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrestFiStakingClient = void 0;
const assert_1 = __importDefault(require("assert"));
const ethers_1 = require("ethers");
const contract_1 = require("../contract");
const utils_1 = require("../utils");
const utils_2 = require("../utils/utils");
class CrestFiStakingClient {
    constructor(signerOrProvider, contractAddress = utils_1.STAKE_CONTRACT_ADDRESS) {
        this._contract = contract_1.Staking__factory.connect(contractAddress, signerOrProvider);
    }
    stakeToken(tokenAddress, amount, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
            const _amount = ethers_1.ethers.utils.parseUnits(amount, yield token.decimals());
            const signer = this._contract.signer;
            const address = this._contract.address;
            yield (0, utils_1.approveToken)(signer, address, token, _amount);
            console.log("stakeToken: ", _amount.toString());
            const stakeToken = yield this._contract
                .connect(this._contract.signer)
                .stakeTokens(_amount, _overrides);
            return yield stakeToken.wait();
        });
    }
    unStakeToken(tokenAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = contract_1.Token__factory.connect(tokenAddress, this._contract.signer);
            const _amount = ethers_1.ethers.utils.parseUnits(amount, yield token.decimals());
            const unStakeToken = yield this._contract
                .connect(this._contract.signer)
                .unstakeTokens(_amount);
            return yield unStakeToken.wait();
        });
    }
    whitelistAddress(token, walletAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            const addresses = walletAddresses.map((w) => w.address);
            const streamFees = walletAddresses.map((w) => ethers_1.ethers.utils.parseEther(w.streamFee));
            return (yield this._contract.whitelistAddress(token, addresses, streamFees)).wait();
        });
    }
    getStreamFee(staker, token) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._contract.getStreamFee(staker, token);
        });
    }
    setStreamFeeTiers(feesAndTokenAmounts, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const _fee = feesAndTokenAmounts.map(({ fee }) => ethers_1.ethers.utils.parseUnits(fee, 18));
            const _tokenAmounts = [];
            for (let i = 0; i < feesAndTokenAmounts.length; i++) {
                const { token, amount } = feesAndTokenAmounts[i];
                const tokenContract = contract_1.Token__factory.connect(token, this._contract.signer);
                const decimals = yield (0, utils_2.getDecimals)(tokenContract);
                const tokenAmount = ethers_1.ethers.utils.parseUnits(amount, decimals);
                _tokenAmounts.push(tokenAmount);
            }
            const _overrides = yield (0, utils_2.getOverrides)(overrides);
            const setStreamFee = yield this._contract
                .connect(this._contract.signer)
                .setStreamFeeTiers(_fee, _tokenAmounts, _overrides);
            return yield setStreamFee.wait();
        });
    }
    getAllStreamFeeTier() {
        return __awaiter(this, void 0, void 0, function* () {
            const streamFee = yield this._contract.getAllStreamFee();
            const stakingTiers = yield this._contract.getAllStakingTiers();
            (0, assert_1.default)(stakingTiers.length == streamFee.length);
            const feeAndTier = streamFee.map((fee, i) => ({
                streamFee: fee,
                stakingTier: stakingTiers[i],
            }));
            return feeAndTier;
        });
    }
    getCorrespondingStreamFee(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const fee = yield this._contract.getCorrespondingStreamFee(index);
            return fee;
        });
    }
    getStakedAmount(staker) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._contract.noOfTokenStakedByUser(staker);
        });
    }
    /**
     *
     * @param address grant role
     * @returns
     */
    grantRole(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield this._contract.DEFAULT_ADMIN_ROLE();
            return (yield this._contract.grantRole(role, address)).wait();
        });
    }
}
exports.CrestFiStakingClient = CrestFiStakingClient;
//# sourceMappingURL=client.js.map