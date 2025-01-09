# Table of Contents

1. [StreamClient](#crestfistreamclient)
   1. [Installation](#installation)
   2. [Environment Setup](#environment-setup)
   3. [Run tests](#run-tests)
   4. [Contracts](#contracts)
   5. [Usage](#usage)
      1. [Getting Signer Address](#getting-signer-address)
      2. [Whitelisting Tokens](#whitelisting-tokens)
      3. [Depositing Tokens into the CrestFi Wallet](#depositing-tokens-into-the-crestfi-wallet)
      4. [Withdraw Tokens from the CrestFi Wallet](#withdraw-tokens-from-the-crestfi-wallet)
      5. [Initiating a Stream](#initiating-a-stream)
      6. [Pausing/Resuming/Canceling a Stream](#pausingresumingcanceling-a-stream)
      7. [Updating a Stream](#updating-a-stream)
      8. [Withdrawing Streamed Tokens](#withdrawing-streamed-tokens)
      9. [Getting Stream Details](#getting-stream-details)
2. [CrestFiBulkClient](#crestfibulkclient)
   1. [Overview](#overview)
   2. [Importing the Class](#importing-the-class)
   3. [Initializing the Class](#initializing-the-class)
   4. [Example Use Cases](#example-use-cases)
      1. [Initialize Bulk Instant Transfer](#initialize-bulk-instant-transfer)
      2. [Update Bulk Transfer](#update-bulk-transfer)
      3. [Withdraw Bulk Instant Transfer By Receiver](#withdraw-bulk-instant-transfer-by-receiver)
      4. [Cancel Bulk Instant Transfer](#cancel-bulk-instant-transfer)
      5. [Calculate Latest Bulk Bytes](#calculate-latest-bulk-bytes)
      6. [Get Bulk Transfer Root](#get-bulk-transfer-root)
      7. [Verify Bulk Transfer](#verify-bulk-transfer)
3. [List of Whitelisted Tokens on BSC and Nautilus](#list-of-whitelisted-tokens-on-bsc-and-nautilus)
4. [Contributing](#contributing)

# CrestFiStreamClient

CrestFiStreamClient is a client library that provides an interface to interact with the CrestFi Stream smart contract. It allows you to perform various operations such as initiating streams, withdrawing tokens, updating streams, and more.

## Installation

To use the CrestFiStreamClient library, you need to have `ethers.js` and the `crest-bnb-sdk` package installed in your project. You can install them using npm:

```shell
npm install @crestfi/crest-bnb-sdk
```

## Environment Setup

To Setup the environment checkout the .env.example file.

| Variables | Description                                     | Values                                                             |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| CHAIN_ID  | Chain Ids                                       | 56, 22222(Nautilus), 5, 97                                         |
| SDK_ENV   | Environment to work on : "production" or "test" | "production" if you are working on mainnet and "test" for testnets |

## Run tests

To run the streaming intgration tests from this repo:

```shell
yarn test:single test/integration/stream/stream.spec.ts
```

## Contracts

[Checkout the CrestFi BNB Contract Repository](https://github.com/CrestFi/bnb-crestfi-contract)

## Usage

Import the necessary dependencies and create an instance of the `CrestFiStreamClient` class:

```javascript
import { CrestFiStreamClient } from "@crestfi/crest-bnb-sdk";

// Create an instance of CrestFiStreamClient
const crestfiClient = new CrestFiStreamClient(signer);
```

### Getting Signer Address

You can get the signer's address using the `getSignerAddress()` method:

```javascript
const signerAddress = await client.getSignerAddress();
console.log("Signer Address:", signerAddress);
```

### Whitelisting Tokens

Streaming is only allowed for tokens that have been added to the whitelist within the CrestFi Core Contract. Use `whitelistToken()` method:

```javascript
const tokenAddresses = ["tokenA", "tokenB"];
await crestfiClient.grantWhitelisterRole(sender.address);
await crestfiClient.whitelistToken([tokenAddress]);
```

Note: Only user who has whitlisterRole can whitelist a token. To grant whitelister role, use the `grantWhitelisterRole()`

```javascript
//only contract owner can grant whitelister role
const crestfiClientOwner = new CrestFiStreamClient(contractOwner);
await crestfiClientOwner.grantWhitelisterRole(whitelisterAddress);
```

### Depositing Tokens into the CrestFi Wallet

To deposit tokens into the crestfi wallet, use the `depositToken()` method:

Note: You can override the default sdk overrides using optional param called `overrides` in every client functions.

```javascript
const tokenAddress = "0x1234567890abcdef";
const amount = "100";
const customOverrides = {
  gasLimit: 25000000,
};

const receipt = await client.depositToken(
  tokenAddress,
  amount,
  customOverrides
);

console.log("Deposit Token Receipt:", receipt);
```

### Withdraw Tokens from the CrestFi Wallet

To withdraw tokens from the crestfi wallet, use the `withdrawToken()` method:

Note: You can override the default sdk overrides using optional param called `overrides` in every client functions.

```javascript
const tokenAddress = "0x1234567890abcdef";
const amount = "10";
const customOverrides = {
  gasLimit: 25000000,
};

const receipt = await client.withdrawToken(
  tokenAddress,
  amount,
  customOverrides
);

console.log("Withdraw Token Receipt:", receipt);
```

### Initiating a Stream

To initiate a stream, use the `initStream()` method:

```javascript
const streamName = "MyStream";
const amount = "100";
const tokenAddress = "0x1234567890abcdef";
const receiver = "0xabcdef1234567890";
const startTime = 1654320000;
const endTime = 1657008000;
const canCancel = true;
const canPause = true;
const customOverrides = {
  gasLimit: 25000000,
};

const receipt = await crestfiClient.initStream(
  streamName,
  amount,
  tokenAddress,
  receiver,
  startTime,
  endTime,
  canCancel,
  canPause,
  customOverrides
);

console.log("Initiate Stream Receipt:", receipt);
```

### Pausing/Resuming/Canceling a Stream

You can pause, resume, or cancel a stream using the respective methods:

```javascript
const streamBytes = "0xabcdef1234567890"; // Stream ID

// Pause a stream
const pauseReceipt = await crestfiClient.pauseStream(streamBytes);
console.log("Pause Stream Receipt:", pauseReceipt);

// Resume a stream
const resumeReceipt = await crestfiClient.resumeStream(streamBytes);
console.log("Resume Stream Receipt:", resumeReceipt);

// Cancel a stream
const cancelReceipt = await crestfiClient.cancelStream(streamBytes);
console.log("Cancel Stream Receipt:", cancelReceipt);
```

### Updating a Stream

To update a stream, use the `updateStream()` method:

```javascript
const streamName = "UpdatedStream";
const streamBytes = "0xabcdef1234567890"; // Stream ID
const startTime = 1657008000;
const endTime = 1659696000;
const amount = "200";

const receipt = await crestfiClient.updateStream(
  streamName,
  streamBytes,
  tokenAddress,
  startTime,
  endTime,
  amount
);

console.log("Update Stream Receipt:", receipt);
```

### Withdrawing Streamed Tokens

To withdraw tokens from a stream by receiver, use the `withdrawStream()` method:

```javascript
const streamBytes = "0xabcdef1234567890"; // Stream ID
const tokenAddress = "0x1234567890abcdef";
const amount = "50";
const crestfiWalletWithdrawal = false;

const receipt = await crestfiReceiverClient.withdrawStream(
  streamBytes,
  tokenAddress,
  amount,
  crestfiWalletWithdrawal
);

console.log("Withdraw Stream Receipt:", receipt);
```

### Getting Stream Details

To get the details of a stream, use the `getStreamDetails()` method:

```javascript
const streamBytes = await crestfiClient.getLatestStreamBytes(sender.address);
const streamDetails = await crestfiClient.getStreamDetails(streamBytes);

console.log("Stream Details:", streamDetails);
```

For more details and methods, please refer to the source code or documentation of the `CrestFiStreamClient` class.

# CrestFiBulkClient

The `CrestFiBulkClient` is a TypeScript class designed to interact with Ethereum smart contracts for bulk transfers in the CrestFi protocol. This README will provide an overview of the class and its methods, along with example use cases using the provided test code.

## Overview

The `CrestFiBulkClient` class is designed to interact with two key contracts in the CrestFi protocol: `BulkTransfer` and `Core`. These contracts are used to manage bulk transfers of tokens. The class provides methods to perform actions such as initializing bulk transfers, updating bulk transfers, and withdrawing funds from bulk transfers.

### Importing the Class

You can import the `CrestFiBulkClient` class as follows:

```typescript
import { CrestFiBulkClient } from "./path-to-CrestFiBulkClient";
```

### Initializing the Class

To initialize an instance of the `CrestFiBulkClient` class, you need to provide a signer or provider and optionally specify contract addresses for `BulkTransfer` and `Core`. Here's an example of how to initialize the class:

```typescript
import { ethers } from "ethers";
import { CrestFiBulkClient } from "./path-to-CrestFiBulkClient";

// Initialize with a signer (e.g., MetaMask)
const signer = new ethers.Wallet("your-private-key");
const bulkClient = new CrestFiBulkClient(signer);
```

### Example Use Cases

Here are some example use cases of how to use the methods provided by the `CrestFiBulkClient` class, along with explanations of what each method does:

## Bulk Instant Transfer

The following guide provides instructions on working with the CrestFiBulkClient class to perform various actions related to bulk instant transfers in the CrestFi protocol.

### Initializing the Class

To start using the CrestFiBulkClient class, you need to initialize it with a signer or provider. Optionally, you can specify contract addresses for BulkTransfer and Core. Here's an example of how to initialize the class:

```javascript
import { ethers } from "ethers";
import { CrestFiBulkClient } from "@crestfi/crest-bnb-sdk";

// Initialize with a signer (e.g., MetaMask)
const signer = new ethers.Wallet("your-private-key");
const bulkClient = new CrestFiBulkClient(signer);
```

### Initialize Bulk Instant Transfer

To initiate a bulk instant transfer, use the `initBulkInstantTransfer` method. Here's an example of how to do it:

```javascript
const bulkStreamName = "YourBulkStreamName";
const now = Math.floor(Date.now() / 1000);
const amounts = ["1", "2", "3"];
const tokenAddress = "0xTokenAddress";
const receivers = [receiver1.address, receiver2.address, receiver3.address];
const startTimes = [BigNumber.from(now + 100)]; // An array of start times. Length must be equal to recurring Frequency
const recurringFrequency = 1;
const overrides = {}; // Optional overrides

const bulkInstantTree = await bulkClient.getBulkInstantTransferRoot(
  tokenAddress,
  amounts,
  receivers
);

const txnReceipt = await bulkClient.initBulkInstantTransfer(
  bulkStreamName,
  bulkInstantTree.root,
  startTimes,
  recurringFrequency,
  overrides
);
console.log(txnReceipt);
```

The `initBulkInstantTransfer` method initializes a bulk stream with a bulk tree root, start times, and other parameters.

### Update Bulk Transfer

To update an existing bulk transfer, you can follow these steps:

```javascript
const bulkName = "Updated Bulk";
const bulkIndex = await receiver1Client
  .getLatestBulkCount(sender.address)
  .toNumber(); // Bulk index to update
const amounts = ["5", "7", "9"];
const tokenAddress = "0xNewTokenAddress";
const receivers = [receiver1.address, receiver2.address, receiver3.address];
const startTimes = [BigNumber.from(now + 600), BigNumber.from(now + 900)]; // An array of start times. Length must be equal to recurring Frequency
const recurringFrequency = 2;
const overrides = {}; // Optional overrides

bulkInstantTree = await bulkClient.updateBulkInstantTransferRoot(
  tokenAddress,
  amounts,
  receivers,
  withdrawBulkCount
);

const txnReceipt = await bulkClient.updateBulkTransfer(
  bulkName,
  bulkIndex,
  merkleRoot,
  startTimes,
  recurringFrequency,
  overrides
);
console.log(txnReceipt);
```

The `updateBulkInstantTransferRoot` function recalculates the Merkle tree root based on new transfer data, and the `updateBulkTransfer` method updates a bulk transfer with new information such as a merkle root and start times.

### Withdraw Bulk Instant Transfer By Receiver

To withdraw funds from a bulk instant transfer, you can use the following method:

```javascript
const amount = "1";
const tokenAddress = "0xTokenAddress";
const sender = "0xSenderAddress";
const receiver = "0xReceiverAddress";
const proofs = ["0xProof1", "0xProof2"]; // Array of merkle proofs
const crestfiWalletTransfer = false;
const overrides = {}; // Optional overrides
const bulkIndex = await receiver1Client
  .getLatestBulkCount(sender.address)
  .toNumber(); // Get the latest bulk index

const txnReceipt = await bulkClient.withdrawBulkInstantTransfer(
  bulkIndex,
  amount,
  tokenAddress,
  sender,
  receiver,
  proofs,
  crestfiWalletTransfer,
  overrides
);
console.log(txnReceipt);
```

This method allows a user to withdraw funds from a bulk instant transfer using merkle proofs.

Please note that the purpose of the `getLatestBulkCount` function is to determine the number of bulk transfers that a user has created within the CrestFi protocol. Bulk transfers are collections of individual token streams, and each bulk transfer has a unique index or identifier.

### Cancel Bulk Instant Transfer

To cancel a bulk instant transfer, you can use the following method:

```javascript
const bulkIndex = 1;
const overrides = {}; // Optional overrides
const txnReceipt = await bulkClient.cancelBulkInstantTransfer(
  bulkIndex,
  overrides
);
console.log(txnReceipt);
```

This method cancels a bulk instant transfer.

### Calculate Latest Bulk Bytes

The `calculateLatestBulkBytes` function in the CrestFiBulkClient class is used to calculate the byte representation of the latest bulk transfer associated with a specific user's address. This function allows you to obtain the byte representation of the most recent bulk transfer.

```javascript
const userAddress = "0xUserAddress";
const bulkBytes = await bulkClient.calculateLatestBulkBytes(userAddress);
console.log(bulkBytes);
```

### Get Bulk Transfer Root

You can retrieve the Merkle root associated with a specific bulk transfer using the `getBulkTransferRoot` function.

```javascript
const bulkBytes = "0xabcdef123456..."; // Replace with the actual bulk transfer identifier
// Retrieve the Merkle root of the specified bulk transfer

const bulkTransferRoot = await bulkClient.getBulkTransferRoot(
  bulkTransferBytes
);
console.log(`Merkle Root of Bulk Transfer: ${bulkTransferRoot}`);
```

### Verify Bulk Transfer

You can use the `verifyBulkInstantTransfer` function to verify a bulk instant transfer. This function performs verification checks on a bulk instant transfer to ensure that it matches the expected properties and has not been manipulated or tampered with.

```javascript
// Verify the bulk instant transfer
const verified = await bulkClient.verifyBulkInstantTransfer(
  index,
  amount,
  tokenAddress,
  sender,
  receiver,
  proofs
);

if (verified) {
  console.log("Bulk Instant Transfer is valid and verified.");
} else {
  console.log("Bulk Instant Transfer is not valid.");
}
```

This guide provides an overview of how to initialize the class and perform various actions related to bulk instant transfers using the CrestFiBulkClient in the CrestFi protocol.

## List of Whitelisted Tokens on BSC and Nautilus

### BNB Smart Chain

| Token | Address                                    |
| ----- | ------------------------------------------ |
| BNB   | 0x0000000000000000000000000000000000000000 |
| wBNB  | 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c |
| USDT  | 0x55d398326f99059fF775485246999027B3197955 |
| USDC  | 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d |

### Nautilus

| Token Name | Token Address                              |
| ---------- | ------------------------------------------ |
| USDC       | 0xB2723928400AE5778f6A3C69D7Ca9e90FC430180 |
| USDT       | 0xBDa330Ea8F3005C421C8088e638fBB64fA71b9e0 |

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.


## Upgrade sdk
1.change the verion value of package.json
1.npm login
2.npm publish --access public
