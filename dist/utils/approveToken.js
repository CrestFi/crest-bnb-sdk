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
exports.getApproveTokenData = exports.approveToken = void 0;
const utils_1 = require("./utils");
/**
 * Approve token to the contract
 * @param signer evm signer
 * @param spender address of spender
 * @param token token contract instance
 * @param amount amount to approve
 * @throws error if contract call fails
 * */
function approveToken(signer, spender, token, amount, overrides) {
    return __awaiter(this, void 0, void 0, function* () {
        const _overrides = yield (0, utils_1.getOverrides)(overrides);
        const approveToken = yield token
            .connect(signer)
            .approve(spender, amount, _overrides);
        yield approveToken.wait();
    });
}
exports.approveToken = approveToken;
/**
 * Approve token to the contract
 * @param signer evm signer
 * @param spender address of spender
 * @param token token contract instance
 * @param amount amount to approve
 * @throws error if contract call fails
 * */
function getApproveTokenData(spender, token, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const approveTokenData = token.interface.encodeFunctionData("approve", [
            spender,
            amount,
        ]);
        return approveTokenData;
    });
}
exports.getApproveTokenData = getApproveTokenData;
//# sourceMappingURL=approveToken.js.map