"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STAKE_TOKEN = exports.STAKE_CONTRACT_ADDRESS = exports.BULK_CONTRACT_ADDRESS = exports.CORE_CONTRACT_ADDRESS = exports.BSC_NODE_URL = exports.GOERLI_ADDRESSES = exports.TESTNET_ADDRESSES = exports.NAUTILUS_PRODUCTION_ADDRESSES = exports.NAUTILUS_STAGING_ADDRESSES = exports.BSC_ADDRESSES = exports.DEFAULT_GAS_LIMIT = exports.NAUTILUS_CHAIN_ID = exports.BSC_NETWORK_CHAIN_ID = void 0;
const ethers_1 = require("ethers");
const environment = process.env.SDK_ENV || process.env.REACT_SDK_ENV || "production";
const chainId = process.env.CHAIN_ID || "";
exports.BSC_NETWORK_CHAIN_ID = environment === "production" || environment === "beta" ? 56 : 97;
exports.NAUTILUS_CHAIN_ID = environment === "production" || environment === "beta" ? 22222 : 97;
exports.DEFAULT_GAS_LIMIT = chainId === "22222" ? 25000000 : 300000;
exports.BSC_ADDRESSES = {
    BulkTransfer: "0xacaC879dD166bE70A7FEDef45cbFbe7908Aa944b",
    CoreContract: "0xDa5D43C496E1d4553c72EEbcf36791110bC0db0b",
    staking: "0x455c4ee78a926FaBE708e697B723e76a3993b11a",
    stakeToken: "0x37a56cdcD83Dce2868f721De58cB3830C44C6303",
};
exports.NAUTILUS_STAGING_ADDRESSES = {
    CoreContract: "0x4d613e91bb9f092B2b8E1267726591A3d5a57643",
    staking: "0xa893074DB2471543C09f5f8f7a91CF10a5138e44",
    BulkTransfer: "0x76241C46a9fED9E501Cce865e7AA3e46E73650c7",
    stakeToken: ethers_1.ethers.constants.AddressZero,
};
exports.NAUTILUS_PRODUCTION_ADDRESSES = {
    CoreContract: "0x4d613e91bb9f092B2b8E1267726591A3d5a57643",
    staking: "0xa893074DB2471543C09f5f8f7a91CF10a5138e44",
    BulkTransfer: "0x76241C46a9fED9E501Cce865e7AA3e46E73650c7",
    stakeToken: ethers_1.ethers.constants.AddressZero,
};
exports.TESTNET_ADDRESSES = {
    stakeToken: "0xAa195b09f45616270607B0E8505A28782e6013A8",
    BulkTransfer: "0x4317bBCa60Ad40B7cac74760FD53C414009B924b",
    CoreContract: "0x4bCfa3131898a9A485fE6bec64545659E92A3A90",
    staking: "0xae6f649A8Dd3df9882798Be0625bE787E635bF52",
};
exports.GOERLI_ADDRESSES = {
    stakeToken: "0xF607500b11B77112D2dC564ca26aae7eB3F4f926",
    BulkTransfer: "0xb869eaaBDAe4D1124a00895A29AD4cc3e3463a94",
    CoreContract: "0x45668c3b0B6255d089Aeb5bdED92ef758d7c3b25",
    staking: "0x3821Bd69514046c31fD6BC3FFEb838A18969aed8",
    SingletonPaymaster: "0x6ccEd5E8DF9354F7441C867809197cE6b097F760",
};
const getAddressByType = (chainId, type) => {
    const addresses = {
        "56": {
            bulk: exports.BSC_ADDRESSES.BulkTransfer,
            staking: exports.BSC_ADDRESSES.staking,
            stakeToken: exports.BSC_ADDRESSES.stakeToken,
            core: exports.BSC_ADDRESSES.CoreContract,
        },
        "22222": {
            bulk: exports.NAUTILUS_PRODUCTION_ADDRESSES.BulkTransfer,
            staking: exports.NAUTILUS_PRODUCTION_ADDRESSES.staking,
            stakeToken: exports.NAUTILUS_PRODUCTION_ADDRESSES.stakeToken,
            core: exports.NAUTILUS_PRODUCTION_ADDRESSES.CoreContract,
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
        "22222": {
            // mainnet
            bulk: exports.NAUTILUS_STAGING_ADDRESSES.BulkTransfer,
            staking: exports.NAUTILUS_STAGING_ADDRESSES.staking,
            stakeToken: exports.NAUTILUS_STAGING_ADDRESSES.stakeToken,
            core: exports.NAUTILUS_STAGING_ADDRESSES.CoreContract,
        },
        "5": {
            bulk: exports.GOERLI_ADDRESSES.BulkTransfer,
            staking: exports.GOERLI_ADDRESSES.staking,
            stakeToken: exports.GOERLI_ADDRESSES.stakeToken,
            core: exports.GOERLI_ADDRESSES.CoreContract,
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