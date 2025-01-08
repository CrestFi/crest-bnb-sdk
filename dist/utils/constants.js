"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STAKE_TOKEN = exports.STAKE_CONTRACT_ADDRESS = exports.BULK_CONTRACT_ADDRESS = exports.CORE_CONTRACT_ADDRESS = exports.BSC_NODE_URL = exports.TESTNET_ADDRESSES = exports.BSC_ADDRESSES = exports.DEFAULT_GAS_LIMIT = exports.BSC_NETWORK_CHAIN_ID = void 0;
const environment = process.env.SDK_ENV || process.env.REACT_SDK_ENV || "production";
const chainId = process.env.CHAIN_ID || "";
exports.BSC_NETWORK_CHAIN_ID = environment === "production" || environment === "beta" ? 56 : 97;
exports.DEFAULT_GAS_LIMIT = 300000;
exports.BSC_ADDRESSES = {
    BulkTransfer: "0xab67E660BE1052a758daB269f555dd2fb8E0D351",
    CoreContract: "0x86277014475162FAa110FC38BdFc6e87467506ed",
    staking: "0x8f01c8b39588C2F5F7AF535b69c26807d527D7BA",
    stakeToken: "0xe211CfC2Ed77b85fed72a15EFe717C2491770145",
};
exports.TESTNET_ADDRESSES = {
    stakeToken: "0x9A807af2E3432AB7C8D39CA5701CcC99A4FEe23E",
    BulkTransfer: "0xEAf43E5Ed521309CFd05de5f7E2228e871EBE14E",
    CoreContract: "0x8245C7F00dC9ed3f5F682319560f67D275704168",
    staking: "0xfb7cfF2d7a811Bed4C52d1A96661E386a860F3d2",
};

const getAddressByType = (chainId, type) => {
    const addresses = {
        "56": {
            bulk: exports.BSC_ADDRESSES.BulkTransfer,
            staking: exports.BSC_ADDRESSES.staking,
            stakeToken: exports.BSC_ADDRESSES.stakeToken,
            core: exports.BSC_ADDRESSES.CoreContract,
        },
    };
    const address = addresses[chainId][type];
    return address || "";
};
const getAddressByTypeTest = (chainId, type) => {
    const addresses = {
        "56": {
            // mainnet
            bulk: exports.BSC_ADDRESSES.BulkTransfer,
            staking: exports.BSC_ADDRESSES.staking,
            stakeToken: exports.BSC_ADDRESSES.stakeToken,
            core: exports.BSC_ADDRESSES.CoreContract,
        },
        "97": {
            bulk: exports.TESTNET_ADDRESSES.BulkTransfer,
            staking: exports.TESTNET_ADDRESSES.staking,
            stakeToken: exports.TESTNET_ADDRESSES.stakeToken,
            core: exports.TESTNET_ADDRESSES.CoreContract,
        },
    };
    const address = addresses[chainId][type];
    return address || "";
};
exports.BSC_NODE_URL = environment === "production"
    ? "https://eth-mainnet.g.alchemy.com/v2/PTdhMPg8JtYgYNExnjeQAJW9zTW1mAkj"
    : "https://data-seed-prebsc-1-s2.binance.org:8545";
exports.CORE_CONTRACT_ADDRESS = environment === "production"
    ? getAddressByType(chainId, "core")
    : environment === "test"
        ? getAddressByTypeTest(chainId, "core")
        : exports.TESTNET_ADDRESSES.CoreContract;
exports.BULK_CONTRACT_ADDRESS = environment === "production"
    ? getAddressByType(chainId, "bulk")
    : environment === "test"
        ? getAddressByTypeTest(chainId, "bulk")
        : exports.TESTNET_ADDRESSES.BulkTransfer;
exports.STAKE_CONTRACT_ADDRESS = environment === "production"
    ? getAddressByType(chainId, "staking")
    : environment === "test"
        ? getAddressByTypeTest(chainId, "staking")
        : exports.TESTNET_ADDRESSES.staking;
exports.STAKE_TOKEN = environment === "production"
    ? getAddressByType(chainId, "stakeToken")
    : environment === "test"
        ? getAddressByTypeTest(chainId, "stakeToken")
        : exports.TESTNET_ADDRESSES.stakeToken;
//# sourceMappingURL=constants.js.map