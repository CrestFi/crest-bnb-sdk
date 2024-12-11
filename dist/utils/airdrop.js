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
exports.airdrop = void 0;
const ethers_1 = require("ethers");
const contract_1 = require("../contract");
const utils_1 = require("./utils");
function airdrop(tokenAddress, receiver, amount = "10") {
    return __awaiter(this, void 0, void 0, function* () {
        const secretKey = process.env.AIRDROP_PRIVATE_KEY;
        if (!secretKey || secretKey === "") {
            throw new Error("Missing private key for airdrop");
        }
        const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s2.binance.org:8545");
        const signer = new ethers_1.ethers.Wallet(secretKey, provider);
        const token = contract_1.Token__factory.connect(tokenAddress, signer);
        const decimals = yield (0, utils_1.getDecimals)(token);
        const _amount = ethers_1.ethers.utils.parseUnits(amount, decimals);
        return yield (yield token.transfer(receiver, _amount)).wait();
    });
}
exports.airdrop = airdrop;
//# sourceMappingURL=airdrop.js.map