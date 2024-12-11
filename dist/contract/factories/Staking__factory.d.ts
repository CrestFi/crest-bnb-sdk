import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Staking, StakingInterface } from "../Staking";
type StakingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Staking__factory extends ContractFactory {
    constructor(...args: StakingConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Staking>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Staking;
    connect(signer: Signer): Staking__factory;
    static readonly bytecode = "0x60a08060405234610031573060805261248290816100378239608051818181610cef01528181610e1101526110900152f35b600080fdfe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c806301c361d11461171557806301ffc9a7146116c057806306b091f9146113b4578063248a9ca31461138a5780632c3f7986146113515780632f2ff15d146112b757806336568abe146112255780633659cfe6146110695780634a3357541461103b5780634f1ef28614610d9757806352d1902d14610cda578063608e4dd014610b9d5780636691461a14610b2d5780636899b53914610ab2578063715018a614610a645780637547c7a3146108b05780637736865a146106f25780638da5cb5b146106c957806391d1485414610683578063953fb6ac146105865780639d76ea581461055c578063a217fddf14610541578063c4d66de814610334578063cb6d8ee614610314578063d547741f146102d9578063e90f3fc11461027f578063f2d065ed146101f25763f2fde38b1461015e5750610011565b346101ee5760203660031901126101ee5761017761189a565b91610180611d7d565b6001600160a01b0383161561019c578361019984611dd5565b80f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50503461027b578160031936011261027b57805161013080548083529084526020808301949293927f2f605e086faac1d93117bbfbc18835d434e9405fadc1ca66faf4b864746daf3492915b828210610264576102608686610256828b0383611947565b5191829182611985565b0390f35b83548752958601956001938401939091019061023e565b5080fd5b50503461027b578060031936011261027b57809161029b61189a565b6102a36118b5565b9060018060a01b0380911683526101316020528383209116825260205220600160ff825416910154825191151582526020820152f35b5090346101ee57806003193601126101ee57610199913561030f60016102fd6118b5565b9383875260fb60205286200154611bae565b611d07565b50503461027b578160031936011261027b5760209061012f549051908152f35b50346101ee576020908160031936011261053d5761035061189a565b84549060ff90818360081c161593848095610531575b801561051b575b156104c1575060ff19838116600117885592846104b0575b5061013280546001600160a01b0319166001600160a01b0390921691909117905585546103bf9060081c82166103ba81612131565b612131565b6103c833611dd5565b6103d781875460081c16612131565b85805260fb8452848620338752845284862054161561047a575b508360008051602061238d8339815191529384825260fb845260018183200190828254925551947fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff8380a4610444578280f35b825461ff0019168355600182527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249891a138808280f35b84805260fb835283852033865283526001848620918254161790553333856000805160206122cd8339815191528180a4386103f1565b61ffff191661010117875538610385565b865162461bcd60e51b8152908101869052602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b15801561036d575060018385161461036d565b50600183851610610366565b8380fd5b50503461027b578160031936011261027b5751908152602090f35b50503461027b578160031936011261027b576101325490516001600160a01b039091168152602090f35b50346101ee57816003193601126101ee57816105a061189a565b936105a96118b5565b6001600160a01b03958616808352610131602081815285852093909816808552928852848420549195909160ff16156105f75750600194835286528282209082528552200154905b51908152f35b61012d5461013080546064989297509594509250835b868110610622575b50505050505050906105f1565b81855261012e8a52888520548682101561067057848652818b872001541061064c5760010161060d565b9550505050505061065d91506121b5565b90549060031b1c38808080808080610615565b634e487b7160e01b865260328452602486fd5b50346101ee57816003193601126101ee578160209360ff926106a36118b5565b9035825260fb86528282206001600160a01b039091168252855220549151911615158152f35b50503461027b578160031936011261027b5760975490516001600160a01b039091168152602090f35b5082903461027b578260031936011261027b576001600160401b0392813584811161053d5761072490369084016118cb565b926024358681116108ac5761073c90369083016118cb565b9290916107476119c0565b83860361089e5787861161084057600160401b8087116108535761012d988954888b55808910610878575b50839989526020998a8a20908a5b8a81106108665750505085116108535784116108405750610130805484825580851061081b575b50865286862082875b85811061080957505050917f4e5df2ebeb69f6f6e31496788642b0d7809dc745886b362e7e677577286e17ab9596916107f6610803948651978789988952880191612191565b9285840390860152612191565b0390a180f35b813583820155908901906001016107b0565b8188528489892091820191015b81811061083557506107a7565b888155600101610828565b634e487b7160e01b875260419052602486fd5b634e487b7160e01b885260418252602488fd5b813583820155908c0190600101610780565b8a8a528860208b2091820191015b8181106108935750610772565b8a8155600101610886565b8451630606ba5960e51b8152fd5b8580fd5b5091906020806003193601126101ee5761013254843592906001600160a01b03168015610a25578151636eb1769f60e11b81528381806108f330338c8401612231565b0381855afa908115610a1b5790859187916109ea575b50106109c95783839186976109359785518099819582946323b872dd60e01b84523090339085016121f4565b03925af19384156109bf5760008051602061230d8339815191529394610992575b505b33855261012e80835261096e8583882054611ffb565b9033875283528186205561012f610986858254611ffb565b9055519283523392a280f35b6109b190833d85116109b8575b6109a98183611947565b81019061224b565b5038610956565b503d61099f565b81513d87823e3d90fd5b90516338aa956f60e11b81529081906109e6903390838901612231565b0390fd5b809250858092503d8311610a14575b610a038183611947565b810103126108ac5784905138610909565b503d6109f9565b83513d88823e3d90fd5b5090919293833410610a4857509060008051602061230d83398151915291610958565b6109e684925192839263b2b3b53b60e01b845233908401612216565b8334610aaf5780600319360112610aaf57610a7d611d7d565b609780546001600160a01b0319811690915581906001600160a01b03166000805160206123cd8339815191528280a380f35b80fd5b50503461027b578160031936011261027b57805161012d80548083529084526020808301949293927f193a3ae4da5049eb74cee39e4cf5827f7ce7b1d1d1775ef1c6311eb60558e6d592915b828210610b16576102608686610256828b0383611947565b835487529586019560019384019390910190610afe565b50503461027b57602036600319011261027b5760207f08d9e26510a3cb1d512e4122208b8399da71fdde379ed7801f26cc073be0cad291610b6c61189a565b610b74611d7d565b61013280546001600160a01b0319166001600160a01b039290921691821790559051908152a180f35b5090346101ee5760208060031936011261053d5782359133855261012e80835281862054848110610caf5750338652808352610bdc8483882054612281565b9033875283528186205561012f610bf4848254612281565b905561013280546001600160a01b039190821615610c7d57610c33958492869254169088855180998195829463a9059cbb60e01b845233908401612216565b03925af19384156109bf5760008051602061240d8339815191529394610c60575b505b519283523392a280f35b610c7690833d85116109b8576109a98183611947565b5038610c54565b5050829350610caa8580808060008051602061240d83398151915297335af1610ca4611f3a565b5061228e565b610c56565b610132548351631a5846bb60e21b81529182916109e6919088906001600160a01b0316848b01612263565b508234610aaf5780600319360112610aaf57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163003610d34576020825160008051602061236d8339815191528152f35b6020608492519162461bcd60e51b8352820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b6064820152fd5b5090806003193601126101ee57610dac61189a565b90602435906001600160401b03821161103757366023830112156110375781840135610dd78161196a565b90610de483519283611947565b808252866020948584019236602482840101116101ee578060248893018537840101526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690610e3f30831415611e0c565b610e5c60008051602061236d833981519152928284541614611e5b565b610e64611d7d565b60008051602061232d8339815191525460ff1615610e8c575050505050506101999150611eaa565b8693949596169085516352d1902d60e01b815287818a81865afa8a9181611004575b50610efb57865162461bcd60e51b8152808a01899052602e602482015260008051602061242d83398151915260448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b9791929395949703610faf575090869291610f1585611eaa565b6000805160206123ed8339815191528480a2855115801590610fa7575b610f40575b50505050505080f35b610f9b95660819985a5b195960ca1b837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c86955198610f7e8a6118fb565b60278a528901528701525190845af4610f95611f3a565b91611f6a565b50388080838180610f37565b506001610f32565b835162461bcd60e51b8152908101869052602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b9091508881813d8311611030575b61101c8183611947565b8101031261102c57519038610eae565b8a80fd5b503d611012565b8480fd5b509134610aaf576020366003190112610aaf575061105b602092356121b5565b91905490519160031b1c8152f35b5090346101ee5760208060031936011261053d5761108561189a565b916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116906110be30831415611e0c565b6110db60008051602061236d833981519152928284541614611e5b565b6110e3611d7d565b825191848301916001600160401b038311848410176112125782855288845260008051602061232d8339815191525460ff161561112a575050505050506101999150611eaa565b8693949596169085516352d1902d60e01b815287818a81865afa8a91816111e3575b5061119957865162461bcd60e51b8152808a01899052602e602482015260008051602061242d83398151915260448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b9791929395949703610faf5750908692916111b385611eaa565b6000805160206123ed8339815191528480a28551158015906111dc57610f405750505050505080f35b5082610f32565b9091508881813d831161120b575b6111fb8183611947565b8101031261102c5751903861114c565b503d6111f1565b634e487b7160e01b895260418852602489fd5b5082903461027b578260031936011261027b576112406118b5565b90336001600160a01b0383160361125c57906101999135611d07565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b50346101ee57816003193601126101ee5735906112d26118b5565b9082845260fb6020526112ea60018286200154611bae565b82845260fb60209081528185206001600160a01b039093168086529290528084205460ff1615611318578380f35b82845260fb6020528084208285526020528320600160ff1982541617905533916000805160206122cd8339815191528480a43880808380f35b50503461027b57602036600319011261027b5760209181906001600160a01b0361137961189a565b16815261012e845220549051908152f35b50346101ee5760203660031901126101ee578160209360019235815260fb85522001549051908152f35b5090346101ee57806003193601126101ee576113ce61189a565b602435926113da611d7d565b6001600160a01b0390828216801561156f5784516370a0823160e01b8082523084830152602093918481602481875afa908115611565579089918b91611530575b50106114aa57508661144a9284928a8760975416918a519687958694859363a9059cbb60e01b85528401612216565b03925af180156114a0579161080393916000805160206123ad8339815191529793611482575b50505b609754169351938493846121f4565b8161149892903d106109b8576109a98183611947565b503880611470565b85513d89823e3d90fd5b839597945060248794929751809481938252308a8301525afa9384156115265787946114ef575b505051636e7d25eb60e01b81529384936109e6939291908501612263565b9080929450813d831161151f575b6115078183611947565b810103126108ac57519394508493916109e6386114d1565b503d6114fd565b82513d89823e3d90fd5b809250868092503d831161155e575b6115498183611947565b8101031261155a578890513861141b565b8980fd5b503d61153f565b88513d8c823e3d90fd5b61013254831681036116645784516370a0823160e01b8082523084830152602093918481602481875afa908115611565579089918b91611631575b5061012f546115b891612281565b106114aa5750866115e69284928a8760975416918a519687958694859363a9059cbb60e01b85528401612216565b03925af180156114a0579161080393916000805160206123ad8339815191529793611613575b5050611473565b8161162992903d106109b8576109a98183611947565b50388061160c565b809250868092503d831161165d575b61164a8183611947565b8101031261155a575188906115b86115aa565b503d611640565b508492959447106116a25750818161169d868080806000805160206123ad8339815191529a9b9861080398609754165af1610ca4611f3a565b611473565b85906109e68585479151948594636e7d25eb60e01b86528501612263565b50346101ee5760203660031901126101ee57359063ffffffff60e01b82168092036101ee5760209250637965db0b60e01b8214918215611704575b50519015158152f35b6301ffc9a760e01b149150386116fb565b50346101ee5760603660031901126101ee5761172f61189a565b916001600160401b03916024358381116108ac5761175090369083016118cb565b9490936044359081116118965761176a90369084016118cb565b926117736119c0565b83870361187a5761025880881161185e57506001600160a01b0396838816969150885b8181106117a1578980f35b806117ae889288876121d0565b358a6117c36117be8487896121d0565b6121e0565b168c526101316020918183528d8c868220915283528d60019586912001558b6117f06117be85888a6121d0565b168d528152888c208a8d529052878b20805460ff1916831790557fd16fd414ab78e71952a15742ec97b30557342007d21be62c8f3b119f6ce46f606118396117be8386886121d0565b611844838a896121d0565b35906118558b519283928b846121f4565b0390a101611796565b8551630a02c5cb60e21b81529182015260248101879052604490fd5b60449084888751926374a79b4960e01b84528301526024820152fd5b8680fd5b600435906001600160a01b03821682036118b057565b600080fd5b602435906001600160a01b03821682036118b057565b9181601f840112156118b0578235916001600160401b0383116118b0576020808501948460051b0101116118b057565b606081019081106001600160401b0382111761191657604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761191657604052565b601f909101601f19168101906001600160401b0382119082101761191657604052565b6001600160401b03811161191657601f01601f191660200190565b6020908160408183019282815285518094520193019160005b8281106119ac575050505090565b83518552938101939281019260010161199e565b3360009081527fbf15264b36ac76f2d14fe41fe297a8d30e1813f1e7b0ff9a19f9a0392ae68215602090815260408083205490929060008051602061238d8339815191529060ff1615611a135750505050565b611a1c33612045565b845191611a288361192c565b60428352848301936060368637835115611b9a5760308553835190600191821015611b9a5790607860218601536041915b818311611b2c57505050611afc57611aae938593611ae693611ad76048946109e69951988576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8b978801528251928391603789019101611cb8565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190611cb8565b01036028810185520183611947565b5162461bcd60e51b815291829160048301611cdb565b60648486519062461bcd60e51b825280600483015260248201526000805160206122ed8339815191526044820152fd5b909192600f81166010811015611b86576f181899199a1a9b1b9c1cb0b131b232b360811b901a611b5c858861201e565b5360041c928015611b7257600019019190611a59565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b600081815260209060fb8252604092838220338352835260ff848320541615611bd75750505050565b611be033612045565b845191611bec8361192c565b60428352848301936060368637835115611b9a5760308553835190600191821015611b9a5790607860218601536041915b818311611c7257505050611afc57611aae938593611ae693611ad76048946109e69951988576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8b978801528251928391603789019101611cb8565b909192600f81166010811015611b86576f181899199a1a9b1b9c1cb0b131b232b360811b901a611ca2858861201e565b5360041c928015611b7257600019019190611c1d565b60005b838110611ccb5750506000910152565b8181015183820152602001611cbb565b60409160208252611cfb8151809281602086015260208686019101611cb8565b601f01601f1916010190565b9060009180835260fb602052604083209160018060a01b03169182845260205260ff604084205416611d3857505050565b80835260fb602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b6097546001600160a01b03163303611d9157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b609780546001600160a01b039283166001600160a01b0319821681179092559091166000805160206123cd833981519152600080a3565b15611e1357565b60405162461bcd60e51b815260206004820152602c602482015260008051602061234d83398151915260448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15611e6257565b60405162461bcd60e51b815260206004820152602c602482015260008051602061234d83398151915260448201526b6163746976652070726f787960a01b6064820152608490fd5b803b15611edf5760008051602061236d83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b3d15611f65573d90611f4b8261196a565b91611f596040519384611947565b82523d6000602084013e565b606090565b91929015611fcc5750815115611f7e575090565b3b15611f875790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015611fdf5750805190602001fd5b60405162461bcd60e51b81529081906109e69060048301611cdb565b9190820180921161200857565b634e487b7160e01b600052601160045260246000fd5b90815181101561202f570160200190565b634e487b7160e01b600052603260045260246000fd5b60405190612052826118fb565b602a825260208201604036823782511561202f5760309053815160019081101561202f57607860218401536029905b8082116120c35750506120915790565b606460405162461bcd60e51b815260206004820152602060248201526000805160206122ed8339815191526044820152fd5b9091600f8116601081101561211c576f181899199a1a9b1b9c1cb0b131b232b360811b901a6120f2848661201e565b5360041c918015612107576000190190612081565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b1561213857565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b81835290916001600160fb1b0383116118b05760209260051b809284830137010190565b61012d805482101561202f5760005260206000200190600090565b919081101561202f5760051b0190565b356001600160a01b03811681036118b05790565b6001600160a01b03918216815291166020820152604081019190915260600190565b6001600160a01b039091168152602081019190915260400190565b6001600160a01b0391821681529116602082015260400190565b908160209103126118b0575180151581036118b05790565b604091949392606082019560018060a01b0316825260208201520152565b9190820391821161200857565b1561229557565b60405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8811985a5b1959608a1b6044820152606490fdfe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d537472696e67733a20686578206c656e67746820696e73756666696369656e741b3f64b48324e788237a57cc64f284a65bd87db8e09daf8249e10f91e1979a0b4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914346756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8619cecd8b9e095ab43867f5b69d492180450fe862e6b50bfbfb24b75dd84c8a8210728e7c071f615b840ee026032693858fbcd5e5359e67e438c890f59e56208be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8d66e0822f37d896e7cb74c765ad03869c0c860e7f064326fb43b0a9d4703d2b45524331393637557067726164653a206e657720696d706c656d656e74617469a26469706673582212209ff7575c38951cdd1b4830a8553beb3390442f68aa47592212dfaeef611b554664736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InSufficientAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "vaultAmount";
            readonly type: "uint256";
        }];
        readonly name: "InSufficientStakedAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "InvalidCaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDataSent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "InvalidTokenAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "valueOne";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "valueTwo";
            readonly type: "uint256";
        }];
        readonly name: "ValueDoNotMatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "sentAmount";
            readonly type: "uint256";
        }];
        readonly name: "ValueTooLarge";
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
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "streamFee";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "numberOfTokens";
            readonly type: "uint256[]";
        }];
        readonly name: "SetStreamFeeTiers";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "StakedToken";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newTokenAddress";
            readonly type: "address";
        }];
        readonly name: "StakingTokenUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newStreamFee";
            readonly type: "uint256";
        }];
        readonly name: "StreamFeeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "withdrawer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TokenWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "UnstakedToken";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "walletAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "streamFee";
            readonly type: "uint256";
        }];
        readonly name: "WhiteListedAddress";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllStakingTiers";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_stakingTiers";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllStreamFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_streamFee";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "stakingTierIndex";
            readonly type: "uint256";
        }];
        readonly name: "getCorrespondingStreamFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_streamFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "getStreamFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_streamFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "noOfTokenStakedByUser";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_streamFee";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_numberOfTokens";
            readonly type: "uint256[]";
        }];
        readonly name: "setStreamFeeTiers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "stakeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tokenAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalStakedToken";
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
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "unstakeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newTokenAddress";
            readonly type: "address";
        }];
        readonly name: "updateTokenAddress";
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
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "walletAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_streamFee";
            readonly type: "uint256[]";
        }];
        readonly name: "whitelistAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "whitelistState";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isWhitelisted";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "streamFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): StakingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking;
}
export {};
