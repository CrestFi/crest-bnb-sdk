import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BulkTransfer, BulkTransferInterface } from "../BulkTransfer";
type BulkTransferConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BulkTransfer__factory extends ContractFactory {
    constructor(...args: BulkTransferConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BulkTransfer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BulkTransfer;
    connect(signer: Signer): BulkTransfer__factory;
    static readonly bytecode = "0x60a08060405234610031573060805261193a90816100378239608051818181610bd301528181610cf301526110210152f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c80631de5b92f1461123f5780632eddbaaf146111b65780633659cfe614610ffb5780634da8945714610f445780634f1ef28614610c7b57806352d1902d14610bbe578063572b6c0514610b8a578063715018a614610b3f57806380539bbf14610b075780638129fc1c146109ce5780638655d9051461099d5780638da5cb5b14610974578063a8a27c6f14610944578063c0d2c157146106bf578063ce1b815f14610696578063e001237714610542578063e94e388a1461030b578063ea0825cc146101e5578063f2fde38b146101535763f6d47542146100fc57600080fd5b3461014f57602036600319011261014f578060a0938335815260cb6020522080549260018201549260ff600284015416916003840154930154938151958652602086015284015260608301526080820152f35b8280fd5b50903461014f57602036600319011261014f5761016e61126f565b91610177611416565b6001600160a01b03831615610193578361019084611479565b80f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b5082346103085760c036600319011261030857823561020261128a565b9161020b6112a0565b916102146112b6565b9360a4356001600160401b0381116103045761023390369089016113b8565b9361023e83826117f1565b9586855260209860cb8a5260018987200154156102f65787865260cb8a5260ff60028a8820015416156102e857508751898101948552602435818a01526001600160a01b039384166060820152918316608083015290911660a08083019190915281526102df94939260019287926102b5816112cc565b51902082518981019182528981526102cc81611318565b51902094815260cb885220015490611760565b90519015158152f35b8851634339cb1d60e11b8152fd5b88516385ac2b9960e01b8152fd5b8380fd5b80fd5b5082903461053e5760c036600319011261053e576084359083356064356001600160401b0360a43581811161053a576103479036908901611371565b97909561035d602435610358611810565b6117f1565b934281111561052a5784895260209760cb89526005888b200154830361051a57858a5260cb895260019a8b898c2001541561050a57868b5260cb8a524260038a8d20015411156104fa579260059288928d8997968c8f8f60cb908c83528181526103fd60ff60028686200154169785519b6103d78d6112cc565b8c52828c01966044358852868d01998a5260608d019a8b5260808d019b8c523691611712565b9c60a08b019d8e528352522095518655519085015560ff6002850191511660ff1982541617905551600383015551838201550191519081519384116104e757600160401b84116104e75750869082548484558085106104bd575b5001908752858720875b8381106104ac5788887fe75b42a906f750a9c47e2c9bd0c4a45ffebe5203e6b36ed394b819f7bbf3b24a8989896001600160a01b0361049e611810565b16948351928352820152a280f35b825182820155918701918901610461565b838a528a85848c2092830192015b8281106104d9575050610457565b8b81558a94508c91016104cb565b634e487b7160e01b895260419052602488fd5b885163028da07f60e51b81528590fd5b88516385ac2b9960e01b81528590fd5b8751634ec4810560e11b81528490fd5b8651639cbecc4160e01b81528390fd5b8680fd5b5080fd5b5082903461053e57610120918260031936011261030857833561056361128a565b9161056c6112a0565b926105756112b6565b9560e4359360ff8516809503610304576001600160401b039161010435838111610692576105a69036908c016113b8565b956105b183896117f1565b9788875260209a60cb8c5260018b89200154156106825789885260cb8c52600160ff60028d8b2001541614610672578a518c810195865260a435818d015260c435606082015260243560808201526001600160a01b0397881660a082015291871660c083015290951660e086015261010080860191909152845283019182118383101761065f5792600192826101406102df9897968a9586528351902092019182528981526102cc81611318565b634e487b7160e01b845260418952602484fd5b8a51634339cb1d60e11b81528d90fd5b8a516385ac2b9960e01b81528d90fd5b8580fd5b83823461053e578160031936011261053e5760c95490516001600160a01b039091168152602090f35b503461014f5760c036600319011261014f57813591604435916064359060ff8216809203610692576001600160401b03608435818111610940576107069036908601611371565b94909160a43592428811156109305761071d611810565b9360018060a01b03988986168c5260209860ca8a52878d20549660019788810180911161091d576107678c6107598c51938492830195866117d1565b03601f198101835282611333565b5190209381840361090d579189600594928f8f959060cb8f6107b68f9485519a6107908c6112cc565b8b52828b01966024358852868c0198895260608c01998a5260808c019a8b523691611712565b9a60a08a019b8c528352522094518555518985015560ff6002850191511660ff19825416179055516003830155518582015501905180519283116108fa57600160401b83116108fa57879082548484558085106108d0575b5001908a52868a20848b5b8481106108be5750505050508561082e611810565b16885260ca8552828820549182018092116108ab5750916060939185937f6ae384d2d62a330f6ea22f5e030d3505ad3871744d197e3dc277ea17e820a73b96610875611810565b16895260ca845281892055610888611810565b9284610892611810565b168952818920549082519889528801528601521692a280f35b634e487b7160e01b885260119052602487fd5b89845194019381840155018590610819565b8685848f8781522092830192015b8281106108ec57505061080e565b8e81558b94508891016108de565b634e487b7160e01b8b526041845260248bfd5b8851634ec4810560e11b81528790fd5b634e487b7160e01b8f526011885260248ffd5b8451639cbecc4160e01b81528390fd5b8780fd5b83823461053e578060031936011261053e5760209061096d61096461126f565b602435906117f1565b9051908152f35b83823461053e578160031936011261053e5760975490516001600160a01b039091168152602090f35b50903461014f578160031936011261014f57816020936109be61096461126f565b815260cb85522001549051908152f35b50903461014f578260031936011261014f57825460ff8160081c161591828093610afa575b8015610ae3575b15610a89575060ff198116600117845581610a78575b50610a2a60ff845460081c16610a25816116b2565b6116b2565b610a3a610a35611810565b611479565b610a42575080f35b60207f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989161ff001984541684555160018152a180f35b61ffff191661010117835538610a10565b608490602085519162461bcd60e51b8352820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152fd5b50303b1580156109fa5750600160ff8316146109fa565b50600160ff8316106109f3565b83823461053e57602036600319011261053e5760209181906001600160a01b03610b2f61126f565b16815260ca845220549051908152f35b8334610308578060031936011261030857610b58611416565b609780546001600160a01b0319811690915581906001600160a01b03166000805160206118a58339815191528280a380f35b83823461053e57602036600319011261053e57602090610ba861126f565b60018060a01b038060c954169116149051908152f35b509134610308578060031936011261030857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163003610c1857602082516000805160206118858339815191528152f35b6020608492519162461bcd60e51b8352820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b6064820152fd5b508060031936011261014f57610c8f61126f565b90602435906001600160401b038211610f405736602383011215610f405781840135610cba81611356565b610cc683519182611333565b8181528660209485830193366024828401011161014f578060248893018637830101526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690610d21308314156114b0565b610d3e6000805160206118858339815191529282845416146114ff565b610d46611416565b6000805160206118458339815191525460ff1615610d6e57505050505050610190915061154e565b869293949596169085516352d1902d60e01b815287818a81865afa8a9181610f0d575b50610dde57865162461bcd60e51b8152808a01899052602e60248201526000805160206118e583398151915260448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b979192939695949703610eb85750610df58261154e565b6000805160206118c58339815191528780a285845115801590610eb0575b610e21575b50505050505080f35b80610e9a96845196610e32886112fd565b602788527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c87890152660819985a5b195960ca1b868901525190845af4913d15610ea6573d610e8c610e8382611356565b92519283611333565b81528681943d92013e6115de565b50388080808085610e18565b50606092506115de565b506001610e13565b835162461bcd60e51b8152908101859052602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b9091508881813d8311610f39575b610f258183611333565b81010312610f3557519038610d91565b8a80fd5b503d610f1b565b8480fd5b50903461014f57602036600319011261014f57610f648135610358611810565b9081845260cb6020526001838520015415610fed5781845260cb60205260038385200154421015610fdf575080835260cb60209081528284206001018490557fd10cc7a05a291d5ec5f5258d6aedba6fbc81316a909bad2fd5ee5aedc3dce4e6916001600160a01b03610fd5611810565b169351908152a280f35b825163028da07f60e51b8152fd5b82516385ac2b9960e01b8152fd5b503461014f576020806003193601126103045761101661126f565b916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811661104e308214156114b0565b61106b6000805160206118858339815191529183835416146114ff565b611073611416565b8251848101929091906001600160401b038411838510176111a3578385528883526000805160206118458339815191525460ff16156110bc57505050505050610190915061154e565b869293949596169085516352d1902d60e01b815287818a81865afa8a9181611174575b5061112c57865162461bcd60e51b8152808a01899052602e60248201526000805160206118e583398151915260448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b979192939695949703610eb857506111438261154e565b6000805160206118c58339815191528780a28584511580159061116d57610e215750505050505080f35b5080610e13565b9091508881813d831161119c575b61118c8183611333565b81010312610f35575190386110df565b503d611182565b634e487b7160e01b895260418852602489fd5b508234610308576060366003190112610308576111d161126f565b6111e160443591602435906117f1565b825260cb602052828220600019929060050182840183811161122c578154111561121957602095509085918152200101549051908152f35b634e487b7160e01b825260328652602482fd5b634e487b7160e01b835260118752602483fd5b83823461053e578060031936011261053e578060209261126061096461126f565b815260cb845220549051908152f35b600435906001600160a01b038216820361128557565b600080fd5b604435906001600160a01b038216820361128557565b606435906001600160a01b038216820361128557565b608435906001600160a01b038216820361128557565b60c081019081106001600160401b038211176112e757604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176112e757604052565b604081019081106001600160401b038211176112e757604052565b601f909101601f19168101906001600160401b038211908210176112e757604052565b6001600160401b0381116112e757601f01601f191660200190565b9181601f84011215611285578235916001600160401b038311611285576020808501948460051b01011161128557565b6001600160401b0381116112e75760051b60200190565b81601f82011215611285578035916113cf836113a1565b926113dd6040519485611333565b808452602092838086019260051b820101928311611285578301905b828210611407575050505090565b813581529083019083016113f9565b6097546001600160a01b039081169061142d611810565b160361143557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b609780546001600160a01b039283166001600160a01b0319821681179092559091166000805160206118a5833981519152600080a3565b156114b757565b60405162461bcd60e51b815260206004820152602c602482015260008051602061186583398151915260448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b1561150657565b60405162461bcd60e51b815260206004820152602c602482015260008051602061186583398151915260448201526b6163746976652070726f787960a01b6064820152608490fd5b803b156115835760008051602061188583398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b9192901561164057508151156115f2575090565b3b156115fb5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156116535750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510611699575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350611676565b156116b957565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b929161171d826113a1565b9161172b6040519384611333565b829481845260208094019160051b810192831161128557905b8282106117515750505050565b81358152908301908301611744565b90926000925b82518410156117c8576020808560051b850101519160008382106000146117bb57506000525260406000205b9260001981146117a55760010192611766565b634e487b7160e01b600052601160045260246000fd5b9160409383525220611792565b91509291501490565b60609190911b6001600160601b0319168152601481019190915260340190565b9061180a610759916040519283916020830195866117d1565b51902090565b601436101580611830575b1561182c5736601319013560601c90565b3390565b5060c9546001600160a01b0316331461181b56fe4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914346756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b45524331393637557067726164653a206e657720696d706c656d656e74617469a2646970667358221220be464902109d4ef8c3e0b5d8e3023832abd9e3e763723e80381f3d248dec619764736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "BulkTransferAlreadyStarted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BulkTransferStartTimePast";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EmptyMerkleRoot";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidArrayLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissMatchBulkTransferType";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "bulkBytes";
            readonly type: "bytes32";
        }];
        readonly name: "CancelledBulkTransfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "name";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bulkCount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "transferType";
            readonly type: "uint8";
        }];
        readonly name: "CreatedBulkTransfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "name";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "bulkBytes";
            readonly type: "bytes32";
        }];
        readonly name: "UpdatedBulkTransfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "bulkCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "bulkTransfers";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "merkleRoots";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "transferType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "recurringFrequency";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bulkCount";
            readonly type: "uint256";
        }];
        readonly name: "calculateBulkBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }];
        readonly name: "cancelBulkTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_merkleRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "_transferType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_startTimes";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_recurringFrequency";
            readonly type: "uint256";
        }];
        readonly name: "createBulkTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bulkSender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }];
        readonly name: "getBulkTransferName";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "streamName";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bulkSender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }];
        readonly name: "getBulkTransferRecurringFrequency";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "recurringFrequency";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bulkSender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "recurringFrequency";
            readonly type: "uint256";
        }];
        readonly name: "getBulkTransferStartTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTrustedForwarder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "isTrustedForwarder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "merkleRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_recurringFrequency";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_startTimes";
            readonly type: "uint256[]";
        }];
        readonly name: "updateBulkTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "transferingAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "transferingToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "transferSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "transferReceiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proofs";
            readonly type: "bytes32[]";
        }];
        readonly name: "verifyBulkInstantTransfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isValid";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bulkTransferIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "transferingAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "transferingToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "transferSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "transferReceiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "transferStartTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "transferEndTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "streamParam";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proofs";
            readonly type: "bytes32[]";
        }];
        readonly name: "verifyBulkStreamTransfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isValid";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BulkTransferInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BulkTransfer;
}
export {};