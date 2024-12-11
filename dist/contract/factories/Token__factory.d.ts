import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Token, TokenInterface } from "../Token";
type TokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Token__factory extends ContractFactory {
    constructor(...args: TokenConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Token>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Token;
    connect(signer: Signer): Token__factory;
    static readonly bytecode = "0x60806040526005805460ff191690553480156200001b57600080fd5b50604051806040016040528060058152602001642a37b5b2b760d91b815250604051806040016040528060038152602001622a25a760e91b81525081600390816200006791906200023f565b5060046200007682826200023f565b5050600580546001600160a81b0319811660ff90911615610100600160a81b031916176101003381029190911791829055620000ca92506001600160a01b039104166a0422ca8b0a00a425000000620000d0565b62000333565b6001600160a01b0382166200012b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200013f91906200030b565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001c657607f821691505b602082108103620001e757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200019657600081815260208120601f850160051c81016020861015620002165750805b601f850160051c820191505b81811015620002375782815560010162000222565b505050505050565b81516001600160401b038111156200025b576200025b6200019b565b62000273816200026c8454620001b1565b84620001ed565b602080601f831160018114620002ab5760008415620002925750858301515b600019600386901b1c1916600185901b17855562000237565b600085815260208120601f198616915b82811015620002dc57888601518255948401946001909101908401620002bb565b5085821015620002fb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200032d57634e487b7160e01b600052601160045260246000fd5b92915050565b610a0f80620003436000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063313ce5671161008c57806395d89b411161006657806395d89b41146101d2578063a457c2d7146101da578063a9059cbb146101ed578063dd62ed3e1461020057600080fd5b8063313ce56714610187578063395093511461019657806370a08231146101a957600080fd5b806318160ddd116100bd57806318160ddd146101555780631f2698ab1461016757806323b872dd1461017457600080fd5b806306fdde03146100e45780630754617214610102578063095ea7b314610132575b600080fd5b6100ec610239565b6040516100f99190610809565b60405180910390f35b60055461011a9061010090046001600160a01b031681565b6040516001600160a01b0390911681526020016100f9565b610145610140366004610891565b6102cb565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b6005546101459060ff1681565b6101456101823660046108bb565b6102e5565b604051601281526020016100f9565b6101456101a4366004610891565b610309565b6101596101b73660046108f7565b6001600160a01b031660009081526020819052604090205490565b6100ec610348565b6101456101e8366004610891565b610357565b6101456101fb366004610891565b610406565b61015961020e366004610919565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102489061094c565b80601f01602080910402602001604051908101604052809291908181526020018280546102749061094c565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b5050505050905090565b6000336102d9818585610414565b60019150505b92915050565b6000336102f385828561056c565b6102fe85858561061c565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102d9908290869061034390879061099f565b610414565b6060600480546102489061094c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103f95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102fe8286868403610414565b6000336102d981858561061c565b6001600160a01b03831661048f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103f0565b6001600160a01b03821661050b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103f0565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461061657818110156106095760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103f0565b6106168484848403610414565b50505050565b6001600160a01b0383166106985760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103f0565b6001600160a01b0382166107145760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103f0565b6001600160a01b038316600090815260208190526040902054818110156107a35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103f0565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610616565b600060208083528351808285015260005b818110156108365785810183015185820160400152820161081a565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80356001600160a01b038116811461088c57600080fd5b919050565b600080604083850312156108a457600080fd5b6108ad83610875565b946020939093013593505050565b6000806000606084860312156108d057600080fd5b6108d984610875565b92506108e760208501610875565b9150604084013590509250925092565b60006020828403121561090957600080fd5b61091282610875565b9392505050565b6000806040838503121561092c57600080fd5b61093583610875565b915061094360208401610875565b90509250929050565b600181811c9082168061096057607f821691505b602082108103610999577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b808201808211156102df577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220a7f6dd255495aee365b8d82fcc685780c558c484b32f4961e6a413bcab4b39a664736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "started";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Token;
}
export {};
