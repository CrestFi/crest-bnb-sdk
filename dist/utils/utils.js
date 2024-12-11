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
exports.getOverrides = exports.getDecimals = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
const getDecimals = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ethers_1.ethers.utils.isAddress(token.address)) {
        throw new Error("Invalid token address");
    }
    let decimals;
    try {
        decimals = yield token.decimals();
    }
    catch (e) {
        console.error(e);
        throw e;
    }
    if (!decimals || decimals === 0) {
        throw new Error("Could not retrieve decimal value");
    }
    return decimals;
});
exports.getDecimals = getDecimals;
const getOverrides = (overrides) => __awaiter(void 0, void 0, void 0, function* () {
    let _overrides;
    if (overrides) {
        if (!overrides.gasLimit) {
            _overrides = Object.assign(Object.assign({}, overrides), { gasLimit: constants_1.DEFAULT_GAS_LIMIT });
        }
        _overrides = overrides;
    }
    else {
        _overrides = { gasLimit: constants_1.DEFAULT_GAS_LIMIT };
    }
    return _overrides;
});
exports.getOverrides = getOverrides;
//# sourceMappingURL=utils.js.map