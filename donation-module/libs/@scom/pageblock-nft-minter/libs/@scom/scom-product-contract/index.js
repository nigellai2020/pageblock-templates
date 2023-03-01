define("@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/ERC1155.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/ERC1155.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "uri_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "TransferBatch", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "TransferSingle", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "URI", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "balanceOfBatch", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "uri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001d5238038062001d5283398101604081905262000034916200006e565b6200003f8162000046565b506200029e565b6002620000548282620001d2565b5050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008257600080fd5b82516001600160401b03808211156200009a57600080fd5b818501915085601f830112620000af57600080fd5b815181811115620000c457620000c462000058565b604051601f8201601f19908116603f01168101908382118183101715620000ef57620000ef62000058565b8160405282815288868487010111156200010857600080fd5b600093505b828410156200012c57848401860151818501870152928501926200010d565b600086848301015280965050505050505092915050565b600181811c908216806200015857607f821691505b6020821081036200017957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cd57600081815260208120601f850160051c81016020861015620001a85750805b601f850160051c820191505b81811015620001c957828155600101620001b4565b5050505b505050565b81516001600160401b03811115620001ee57620001ee62000058565b6200020681620001ff845462000143565b846200017f565b602080601f8311600181146200023e5760008415620002255750858301515b600019600386901b1c1916600185901b178555620001c9565b600085815260208120601f198616915b828110156200026f578886015182559484019460019091019084016200024e565b50858210156200028e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611aa480620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461018657600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004611261565b610199565b6040519081526020015b60405180910390f35b6100c56100c03660046112bc565b610279565b60405190151581526020016100a9565b6100e86100e33660046112e0565b61035c565b6040516100a9919061135d565b610108610103366004611511565b6103f0565b005b61011d6101183660046115bb565b6104b9565b6040516100a991906116c1565b6101086101383660046116d4565b610611565b6100c561014b366004611710565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610194366004611743565b610620565b600073ffffffffffffffffffffffffffffffffffffffff8316610243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061030c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061027357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610273565b60606002805461036b906117a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610397906117a8565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff85163314806104195750610419853361014b565b6104a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f766564000000000000000000000000000000000000606482015260840161023a565b6104b285858585856106e2565b5050505050565b6060815183511461054c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161023a565b6000835167ffffffffffffffff81111561056857610568611370565b604051908082528060200260200182016040528015610591578160200160208202803683370190505b50905060005b8451811015610609576105dc8582815181106105b5576105b56117fb565b60200260200101518583815181106105cf576105cf6117fb565b6020026020010151610199565b8282815181106105ee576105ee6117fb565b602090810291909101015261060281611859565b9050610597565b509392505050565b61061c338383610a1c565b5050565b73ffffffffffffffffffffffffffffffffffffffff85163314806106495750610649853361014b565b6106d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f766564000000000000000000000000000000000000606482015260840161023a565b6104b28585858585610b6f565b8151835114610773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161023a565b73ffffffffffffffffffffffffffffffffffffffff8416610816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161023a565b3360005b8451811015610987576000858281518110610837576108376117fb565b602002602001015190506000858381518110610855576108556117fb565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161023a565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b1682528120805484929061096c908490611891565b925050819055505050508061098090611859565b905061081a565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516109fe9291906118a4565b60405180910390a4610a14818787878787610dad565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ad7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161023a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8416610c12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161023a565b336000610c1e85611040565b90506000610c2b85611040565b905060008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8c16845290915290205485811015610ceb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161023a565b60008781526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a16825281208054889290610d35908490611891565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610da2848a8a8a8a8a61108b565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610a14576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c8190610e2490899089908890889088906004016118d2565b6020604051808303816000875af1925050508015610e7d575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610e7a9181019061193d565b60015b610f6657610e8961195a565b806308c379a003610edc5750610e9d611976565b80610ea85750610ede565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023a919061135d565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161023a565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161023a565b50505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061107a5761107a6117fb565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610a14576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e61906111029089908990889088908890600401611a1e565b6020604051808303816000875af192505050801561115b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111589181019061193d565b60015b61116757610e8961195a565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161023a565b803573ffffffffffffffffffffffffffffffffffffffff8116811461125c57600080fd5b919050565b6000806040838503121561127457600080fd5b61127d83611238565b946020939093013593505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146112b957600080fd5b50565b6000602082840312156112ce57600080fd5b81356112d98161128b565b9392505050565b6000602082840312156112f257600080fd5b5035919050565b6000815180845260005b8181101561131f57602081850181015186830182015201611303565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006112d960208301846112f9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156113e3576113e3611370565b6040525050565b600067ffffffffffffffff82111561140457611404611370565b5060051b60200190565b600082601f83011261141f57600080fd5b8135602061142c826113ea565b604051611439828261139f565b83815260059390931b850182019282810191508684111561145957600080fd5b8286015b84811015611474578035835291830191830161145d565b509695505050505050565b600082601f83011261149057600080fd5b813567ffffffffffffffff8111156114aa576114aa611370565b6040516114df60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116018261139f565b8181528460208386010111156114f457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561152957600080fd5b61153286611238565b945061154060208701611238565b9350604086013567ffffffffffffffff8082111561155d57600080fd5b61156989838a0161140e565b9450606088013591508082111561157f57600080fd5b61158b89838a0161140e565b935060808801359150808211156115a157600080fd5b506115ae8882890161147f565b9150509295509295909350565b600080604083850312156115ce57600080fd5b823567ffffffffffffffff808211156115e657600080fd5b818501915085601f8301126115fa57600080fd5b81356020611607826113ea565b604051611614828261139f565b83815260059390931b850182019282810191508984111561163457600080fd5b948201945b838610156116595761164a86611238565b82529482019490820190611639565b9650508601359250508082111561166f57600080fd5b5061167c8582860161140e565b9150509250929050565b600081518084526020808501945080840160005b838110156116b65781518752958201959082019060010161169a565b509495945050505050565b6020815260006112d96020830184611686565b600080604083850312156116e757600080fd5b6116f083611238565b91506020830135801515811461170557600080fd5b809150509250929050565b6000806040838503121561172357600080fd5b61172c83611238565b915061173a60208401611238565b90509250929050565b600080600080600060a0868803121561175b57600080fd5b61176486611238565b945061177260208701611238565b93506040860135925060608601359150608086013567ffffffffffffffff81111561179c57600080fd5b6115ae8882890161147f565b600181811c908216806117bc57607f821691505b6020821081036117f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361188a5761188a61182a565b5060010190565b808201808211156102735761027361182a565b6040815260006118b76040830185611686565b82810360208401526118c98185611686565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a0604083015261190b60a0830186611686565b828103606084015261191d8186611686565b9050828103608084015261193181856112f9565b98975050505050505050565b60006020828403121561194f57600080fd5b81516112d98161128b565b600060033d11156119735760046000803e5060005160e01c5b90565b600060443d10156119845790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156119d257505050505090565b82850191508151818111156119ea5750505050505090565b843d8701016020828501011115611a045750505050505090565b611a136020828601018761139f565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152611a6360a08301846112f9565b97965050505050505056fea26469706673582212203a69c1a68f227678251609f269752d54393fc99a72e821c3351a79331c15f77164736f6c63430008110033"
    };
});
define("@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/ERC1155.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/ERC1155.json.ts"], function (require, exports, eth_contract_1, ERC1155_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC1155 = void 0;
    class ERC1155 extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC1155_json_1.default.abi, ERC1155_json_1.default.bytecode);
            this.assign();
        }
        deploy(uri, options) {
            return this.__deploy([uri], options);
        }
        parseApprovalForAllEvent(receipt) {
            return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
        }
        decodeApprovalForAllEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                operator: result.operator,
                approved: result.approved,
                _event: event
            };
        }
        parseTransferBatchEvent(receipt) {
            return this.parseEvents(receipt, "TransferBatch").map(e => this.decodeTransferBatchEvent(e));
        }
        decodeTransferBatchEvent(event) {
            let result = event.data;
            return {
                operator: result.operator,
                from: result.from,
                to: result.to,
                ids: result.ids.map(e => new eth_contract_1.BigNumber(e)),
                values: result.values.map(e => new eth_contract_1.BigNumber(e)),
                _event: event
            };
        }
        parseTransferSingleEvent(receipt) {
            return this.parseEvents(receipt, "TransferSingle").map(e => this.decodeTransferSingleEvent(e));
        }
        decodeTransferSingleEvent(event) {
            let result = event.data;
            return {
                operator: result.operator,
                from: result.from,
                to: result.to,
                id: new eth_contract_1.BigNumber(result.id),
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        parseURIEvent(receipt) {
            return this.parseEvents(receipt, "URI").map(e => this.decodeURIEvent(e));
        }
        decodeURIEvent(event) {
            let result = event.data;
            return {
                value: result.value,
                id: new eth_contract_1.BigNumber(result.id),
                _event: event
            };
        }
        assign() {
            let balanceOfParams = (params) => [params.account, this.wallet.utils.toString(params.id)];
            let balanceOf_call = async (params, options) => {
                let result = await this.call('balanceOf', balanceOfParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let balanceOfBatchParams = (params) => [params.accounts, this.wallet.utils.toString(params.ids)];
            let balanceOfBatch_call = async (params, options) => {
                let result = await this.call('balanceOfBatch', balanceOfBatchParams(params), options);
                return result.map(e => new eth_contract_1.BigNumber(e));
            };
            this.balanceOfBatch = balanceOfBatch_call;
            let isApprovedForAllParams = (params) => [params.account, params.operator];
            let isApprovedForAll_call = async (params, options) => {
                let result = await this.call('isApprovedForAll', isApprovedForAllParams(params), options);
                return result;
            };
            this.isApprovedForAll = isApprovedForAll_call;
            let supportsInterface_call = async (interfaceId, options) => {
                let result = await this.call('supportsInterface', [interfaceId], options);
                return result;
            };
            this.supportsInterface = supportsInterface_call;
            let uri_call = async (param1, options) => {
                let result = await this.call('uri', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.uri = uri_call;
            let safeBatchTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.amounts), this.wallet.utils.stringToBytes(params.data)];
            let safeBatchTransferFrom_send = async (params, options) => {
                let result = await this.send('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return result;
            };
            let safeBatchTransferFrom_call = async (params, options) => {
                let result = await this.call('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return;
            };
            let safeBatchTransferFrom_txData = async (params, options) => {
                let result = await this.txData('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return result;
            };
            this.safeBatchTransferFrom = Object.assign(safeBatchTransferFrom_send, {
                call: safeBatchTransferFrom_call,
                txData: safeBatchTransferFrom_txData
            });
            let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.data)];
            let safeTransferFrom_send = async (params, options) => {
                let result = await this.send('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            let safeTransferFrom_call = async (params, options) => {
                let result = await this.call('safeTransferFrom', safeTransferFromParams(params), options);
                return;
            };
            let safeTransferFrom_txData = async (params, options) => {
                let result = await this.txData('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
                call: safeTransferFrom_call,
                txData: safeTransferFrom_txData
            });
            let setApprovalForAllParams = (params) => [params.operator, params.approved];
            let setApprovalForAll_send = async (params, options) => {
                let result = await this.send('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            let setApprovalForAll_call = async (params, options) => {
                let result = await this.call('setApprovalForAll', setApprovalForAllParams(params), options);
                return;
            };
            let setApprovalForAll_txData = async (params, options) => {
                let result = await this.txData('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
                call: setApprovalForAll_call,
                txData: setApprovalForAll_txData
            });
        }
    }
    exports.ERC1155 = ERC1155;
    ERC1155._abi = ERC1155_json_1.default.abi;
});
define("@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "TransferBatch", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "TransferSingle", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "URI", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
            { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "balanceOfBatch", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "burnBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "mintBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "uri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162003deb38038062003deb83398101604081905262000034916200023a565b806200004081620000b7565b506005805460ff1916905562000058600033620000c9565b620000847f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000c9565b620000b07f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000c9565b5062000469565b6004620000c582826200039d565b5050565b620000c58282620000e682826200011260201b62000e8b1760201c565b60008281526001602090815260409091206200010d91839062000f7b620001b2821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000c5576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200016e3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001c9836001600160a01b038416620001d2565b90505b92915050565b60008181526001830160205260408120546200021b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001cc565b506000620001cc565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200024e57600080fd5b82516001600160401b03808211156200026657600080fd5b818501915085601f8301126200027b57600080fd5b81518181111562000290576200029062000224565b604051601f8201601f19908116603f01168101908382118183101715620002bb57620002bb62000224565b816040528281528886848701011115620002d457600080fd5b600093505b82841015620002f85784840186015181850187015292850192620002d9565b600086848301015280965050505050505092915050565b600181811c908216806200032457607f821691505b6020821081036200034557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200010d57600081815260208120601f850160051c81016020861015620003745750805b601f850160051c820191505b81811015620003955782815560010162000380565b505050505050565b81516001600160401b03811115620003b957620003b962000224565b620003d181620003ca84546200030f565b846200034b565b602080601f831160018114620004095760008415620003f05750858301515b600019600386901b1c1916600185901b17855562000395565b600085815260208120601f198616915b828110156200043a5788860151825594840194600190910190840162000419565b5085821015620004595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61397280620004796000396000f3fe608060405234801561001057600080fd5b50600436106101a25760003560e01c8063731133e9116100ee578063ca15c87311610097578063e63ab1e911610071578063e63ab1e9146103c6578063e985e9c5146103ed578063f242432a14610436578063f5298aca1461044957600080fd5b8063ca15c87314610379578063d53913931461038c578063d547741f146103b357600080fd5b806391d14854116100c857806391d148541461031a578063a217fddf1461035e578063a22cb4651461036657600080fd5b8063731133e9146102c75780638456cb59146102da5780639010d07c146102e257600080fd5b80632f2ff15d116101505780634e1273f41161012a5780634e1273f4146102895780635c975abb146102a95780636b20c454146102b457600080fd5b80632f2ff15d1461025b57806336568abe1461026e5780633f4ba83a1461028157600080fd5b80631f7fdffa116101815780631f7fdffa14610210578063248a9ca3146102255780632eb2c2d61461024857600080fd5b8062fdd58e146101a757806301ffc9a7146101cd5780630e89341c146101f0575b600080fd5b6101ba6101b5366004612e46565b61045c565b6040519081526020015b60405180910390f35b6101e06101db366004612e9e565b61053e565b60405190151581526020016101c4565b6102036101fe366004612ebb565b610549565b6040516101c49190612f42565b61022361021e3660046130f6565b6105dd565b005b6101ba610233366004612ebb565b60009081526020819052604090206001015490565b61022361025636600461318f565b6106a5565b610223610269366004613239565b61076e565b61022361027c366004613239565b610798565b61022361084b565b61029c610297366004613265565b61090b565b6040516101c4919061336b565b60055460ff166101e0565b6102236102c236600461337e565b610a63565b6102236102d53660046133f2565b610b23565b610223610be5565b6102f56102f0366004613447565b610ca3565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c4565b6101e0610328366004613239565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101ba600081565b610223610374366004613469565b610cc2565b6101ba610387366004612ebb565b610ccd565b6101ba7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102236103c1366004613239565b610ce4565b6101ba7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6101e06103fb3660046134a5565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205460ff1690565b6102236104443660046134cf565b610d09565b610223610457366004613534565b610dcb565b600073ffffffffffffffffffffffffffffffffffffffff8316610506576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b600061053882610f9d565b60606004805461055890613567565b80601f016020809104026020016040519081016040528092919081815260200182805461058490613567565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b50505050509050919050565b6106077f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610328565b610693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f68617665206d696e74657220726f6c6520746f206d696e74000000000000000060648201526084016104fd565b61069f8484848461103f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff85163314806106ce57506106ce85336103fb565b61075a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016104fd565b61076785858585856112c8565b5050505050565b60008281526020819052604090206001015461078981611613565b6107938383611620565b505050565b73ffffffffffffffffffffffffffffffffffffffff8116331461083d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016104fd565b6108478282611642565b5050565b6108757f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610328565b610901576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f686176652070617573657220726f6c6520746f20756e7061757365000000000060648201526084016104fd565b610909611664565b565b6060815183511461099e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016104fd565b6000835167ffffffffffffffff8111156109ba576109ba612f55565b6040519080825280602002602001820160405280156109e3578160200160208202803683370190505b50905060005b8451811015610a5b57610a2e858281518110610a0757610a076135ba565b6020026020010151858381518110610a2157610a216135ba565b602002602001015161045c565b828281518110610a4057610a406135ba565b6020908102919091010152610a5481613618565b90506109e9565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff8316331480610a8c5750610a8c83336103fb565b610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016104fd565b6107938383836116e1565b610b4d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610328565b610bd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f68617665206d696e74657220726f6c6520746f206d696e74000000000000000060648201526084016104fd565b61069f84848484611a1d565b610c0f7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610328565b610c9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f686176652070617573657220726f6c6520746f2070617573650000000000000060648201526084016104fd565b610909611b9f565b6000828152600160205260408120610cbb9083611bfa565b9392505050565b610847338383611c06565b600081815260016020526040812061053890611d59565b600082815260208190526040902060010154610cff81611613565b6107938383611642565b73ffffffffffffffffffffffffffffffffffffffff8516331480610d325750610d3285336103fb565b610dbe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016104fd565b6107678585858585611d63565b73ffffffffffffffffffffffffffffffffffffffff8316331480610df45750610df483336103fb565b610e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016104fd565b610793838383611fb3565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108475760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610f1d3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610cbb8373ffffffffffffffffffffffffffffffffffffffff84166121d5565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061103057507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b80610538575061053882612224565b73ffffffffffffffffffffffffffffffffffffffff84166110e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016104fd565b8151835114611173576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016104fd565b336111838160008787878761227a565b60005b8451811015611239578381815181106111a1576111a16135ba565b6020026020010151600260008784815181106111bf576111bf6135ba565b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112219190613650565b9091555081905061123181613618565b915050611186565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516112b1929190613663565b60405180910390a461076781600087878787612288565b8151835114611359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016104fd565b73ffffffffffffffffffffffffffffffffffffffff84166113fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104fd565b3361140b81878787878761227a565b60005b845181101561157e57600085828151811061142b5761142b6135ba565b602002602001015190506000858381518110611449576114496135ba565b602090810291909101810151600084815260028352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015611517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016104fd565b600083815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b16825281208054849290611563908490613650565b925050819055505050508061157790613618565b905061140e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516115f5929190613663565b60405180910390a461160b818787878787612288565b505050505050565b61161d8133612512565b50565b61162a8282610e8b565b60008281526001602052604090206107939082610f7b565b61164c82826125ca565b60008281526001602052604090206107939082612681565b61166c6126a3565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8316611784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016104fd565b8051825114611815576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016104fd565b60003390506118388185600086866040518060200160405280600081525061227a565b60005b8351811015611989576000848281518110611858576118586135ba565b602002602001015190506000848381518110611876576118766135ba565b602090810291909101810151600084815260028352604080822073ffffffffffffffffffffffffffffffffffffffff8c168352909352919091205490915081811015611943576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e63650000000000000000000000000000000000000000000000000000000060648201526084016104fd565b600092835260026020908152604080852073ffffffffffffffffffffffffffffffffffffffff8b168652909152909220910390558061198181613618565b91505061183b565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611a01929190613663565b60405180910390a460408051602081019091526000905261069f565b73ffffffffffffffffffffffffffffffffffffffff8416611ac0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016104fd565b336000611acc8561270f565b90506000611ad98561270f565b9050611aea8360008985858961227a565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8b16845290915281208054879290611b29908490613650565b9091555050604080518781526020810187905273ffffffffffffffffffffffffffffffffffffffff808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611b968360008989898961275a565b50505050505050565b611ba7612907565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116b73390565b6000610cbb8383612974565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611cc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016104fd565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6000610538825490565b73ffffffffffffffffffffffffffffffffffffffff8416611e06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104fd565b336000611e128561270f565b90506000611e1f8561270f565b9050611e2f83898985858961227a565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8c16845290915290205485811015611eef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016104fd565b600087815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a16825281208054889290611f3b908490613650565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611fa8848a8a8a8a8a61275a565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316612056576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016104fd565b3360006120628461270f565b9050600061206f8461270f565b905061208f8387600085856040518060200160405280600081525061227a565b600085815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8a1684529091529020548481101561214e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e63650000000000000000000000000000000000000000000000000000000060648201526084016104fd565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4604080516020810190915260009052611b96565b600081815260018301602052604081205461221c57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610538565b506000610538565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f00000000000000000000000000000000000000000000000000000000148061053857506105388261299e565b61160b868686868686612a35565b73ffffffffffffffffffffffffffffffffffffffff84163b1561160b576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c81906122ff9089908990889088908890600401613691565b6020604051808303816000875af1925050508015612358575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252612355918101906136fc565b60015b61244157612364613719565b806308c379a0036123b75750612378613735565b8061238357506123b9565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fd9190612f42565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016104fd565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611b96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016104fd565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108475761255081612ac8565b61255b836020612ae7565b60405160200161256c9291906137dd565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526104fd91600401612f42565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156108475760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610cbb8373ffffffffffffffffffffffffffffffffffffffff8416612d2a565b60055460ff16610909576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104fd565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110612749576127496135ba565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b1561160b576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e61906127d1908990899088908890889060040161385e565b6020604051808303816000875af192505050801561282a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252612827918101906136fc565b60015b61283657612364613719565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611b96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016104fd565b60055460ff1615610909576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104fd565b600082600001828154811061298b5761298b6135ba565b9060005260206000200154905092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061053857507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610538565b60055460ff161561160b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243313135355061757361626c653a20746f6b656e207472616e736665722060448201527f7768696c6520706175736564000000000000000000000000000000000000000060648201526084016104fd565b606061053873ffffffffffffffffffffffffffffffffffffffff831660145b60606000612af68360026138ae565b612b01906002613650565b67ffffffffffffffff811115612b1957612b19612f55565b6040519080825280601f01601f191660200182016040528015612b43576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110612b7a57612b7a6135ba565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110612bdd57612bdd6135ba565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000612c198460026138ae565b612c24906001613650565b90505b6001811115612cc1577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110612c6557612c656135ba565b1a60f81b828281518110612c7b57612c7b6135ba565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93612cba816138c5565b9050612c27565b508315610cbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104fd565b60008181526001830160205260408120548015612e13576000612d4e6001836138fa565b8554909150600090612d62906001906138fa565b9050818114612dc7576000866000018281548110612d8257612d826135ba565b9060005260206000200154905080876000018481548110612da557612da56135ba565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080612dd857612dd861390d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610538565b6000915050610538565b803573ffffffffffffffffffffffffffffffffffffffff81168114612e4157600080fd5b919050565b60008060408385031215612e5957600080fd5b612e6283612e1d565b946020939093013593505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461161d57600080fd5b600060208284031215612eb057600080fd5b8135610cbb81612e70565b600060208284031215612ecd57600080fd5b5035919050565b60005b83811015612eef578181015183820152602001612ed7565b50506000910152565b60008151808452612f10816020860160208601612ed4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610cbb6020830184612ef8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715612fc857612fc8612f55565b6040525050565b600067ffffffffffffffff821115612fe957612fe9612f55565b5060051b60200190565b600082601f83011261300457600080fd5b8135602061301182612fcf565b60405161301e8282612f84565b83815260059390931b850182019282810191508684111561303e57600080fd5b8286015b848110156130595780358352918301918301613042565b509695505050505050565b600082601f83011261307557600080fd5b813567ffffffffffffffff81111561308f5761308f612f55565b6040516130c460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160182612f84565b8181528460208386010111156130d957600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561310c57600080fd5b61311585612e1d565b9350602085013567ffffffffffffffff8082111561313257600080fd5b61313e88838901612ff3565b9450604087013591508082111561315457600080fd5b61316088838901612ff3565b9350606087013591508082111561317657600080fd5b5061318387828801613064565b91505092959194509250565b600080600080600060a086880312156131a757600080fd5b6131b086612e1d565b94506131be60208701612e1d565b9350604086013567ffffffffffffffff808211156131db57600080fd5b6131e789838a01612ff3565b945060608801359150808211156131fd57600080fd5b61320989838a01612ff3565b9350608088013591508082111561321f57600080fd5b5061322c88828901613064565b9150509295509295909350565b6000806040838503121561324c57600080fd5b8235915061325c60208401612e1d565b90509250929050565b6000806040838503121561327857600080fd5b823567ffffffffffffffff8082111561329057600080fd5b818501915085601f8301126132a457600080fd5b813560206132b182612fcf565b6040516132be8282612f84565b83815260059390931b85018201928281019150898411156132de57600080fd5b948201945b83861015613303576132f486612e1d565b825294820194908201906132e3565b9650508601359250508082111561331957600080fd5b5061332685828601612ff3565b9150509250929050565b600081518084526020808501945080840160005b8381101561336057815187529582019590820190600101613344565b509495945050505050565b602081526000610cbb6020830184613330565b60008060006060848603121561339357600080fd5b61339c84612e1d565b9250602084013567ffffffffffffffff808211156133b957600080fd5b6133c587838801612ff3565b935060408601359150808211156133db57600080fd5b506133e886828701612ff3565b9150509250925092565b6000806000806080858703121561340857600080fd5b61341185612e1d565b93506020850135925060408501359150606085013567ffffffffffffffff81111561343b57600080fd5b61318387828801613064565b6000806040838503121561345a57600080fd5b50508035926020909101359150565b6000806040838503121561347c57600080fd5b61348583612e1d565b91506020830135801515811461349a57600080fd5b809150509250929050565b600080604083850312156134b857600080fd5b6134c183612e1d565b915061325c60208401612e1d565b600080600080600060a086880312156134e757600080fd5b6134f086612e1d565b94506134fe60208701612e1d565b93506040860135925060608601359150608086013567ffffffffffffffff81111561352857600080fd5b61322c88828901613064565b60008060006060848603121561354957600080fd5b61355284612e1d565b95602085013595506040909401359392505050565b600181811c9082168061357b57607f821691505b6020821081036135b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613649576136496135e9565b5060010190565b80820180821115610538576105386135e9565b6040815260006136766040830185613330565b82810360208401526136888185613330565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a060408301526136ca60a0830186613330565b82810360608401526136dc8186613330565b905082810360808401526136f08185612ef8565b98975050505050505050565b60006020828403121561370e57600080fd5b8151610cbb81612e70565b600060033d11156137325760046000803e5060005160e01c5b90565b600060443d10156137435790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff816024840111818411171561379157505050505090565b82850191508151818111156137a95750505050505090565b843d87010160208285010111156137c35750505050505090565b6137d260208286010187612f84565b509095945050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351613815816017850160208801612ed4565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351613852816028840160208801612ed4565b01602801949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a060808301526138a360a0830184612ef8565b979650505050505050565b8082028115828204841417610538576105386135e9565b6000816138d4576138d46135e9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b81810381811115610538576105386135e9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220ad39224007a916a397a0b800540ef00822029487a714691edf0abc2c3f53d32764736f6c63430008110033"
    };
});
define("@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.json.ts"], function (require, exports, eth_contract_2, ERC1155PresetMinterPauser_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC1155PresetMinterPauser = void 0;
    class ERC1155PresetMinterPauser extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC1155PresetMinterPauser_json_1.default.abi, ERC1155PresetMinterPauser_json_1.default.bytecode);
            this.assign();
        }
        deploy(uri, options) {
            return this.__deploy([uri], options);
        }
        parseApprovalForAllEvent(receipt) {
            return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
        }
        decodeApprovalForAllEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                operator: result.operator,
                approved: result.approved,
                _event: event
            };
        }
        parsePausedEvent(receipt) {
            return this.parseEvents(receipt, "Paused").map(e => this.decodePausedEvent(e));
        }
        decodePausedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        parseRoleAdminChangedEvent(receipt) {
            return this.parseEvents(receipt, "RoleAdminChanged").map(e => this.decodeRoleAdminChangedEvent(e));
        }
        decodeRoleAdminChangedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                previousAdminRole: result.previousAdminRole,
                newAdminRole: result.newAdminRole,
                _event: event
            };
        }
        parseRoleGrantedEvent(receipt) {
            return this.parseEvents(receipt, "RoleGranted").map(e => this.decodeRoleGrantedEvent(e));
        }
        decodeRoleGrantedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                account: result.account,
                sender: result.sender,
                _event: event
            };
        }
        parseRoleRevokedEvent(receipt) {
            return this.parseEvents(receipt, "RoleRevoked").map(e => this.decodeRoleRevokedEvent(e));
        }
        decodeRoleRevokedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                account: result.account,
                sender: result.sender,
                _event: event
            };
        }
        parseTransferBatchEvent(receipt) {
            return this.parseEvents(receipt, "TransferBatch").map(e => this.decodeTransferBatchEvent(e));
        }
        decodeTransferBatchEvent(event) {
            let result = event.data;
            return {
                operator: result.operator,
                from: result.from,
                to: result.to,
                ids: result.ids.map(e => new eth_contract_2.BigNumber(e)),
                values: result.values.map(e => new eth_contract_2.BigNumber(e)),
                _event: event
            };
        }
        parseTransferSingleEvent(receipt) {
            return this.parseEvents(receipt, "TransferSingle").map(e => this.decodeTransferSingleEvent(e));
        }
        decodeTransferSingleEvent(event) {
            let result = event.data;
            return {
                operator: result.operator,
                from: result.from,
                to: result.to,
                id: new eth_contract_2.BigNumber(result.id),
                value: new eth_contract_2.BigNumber(result.value),
                _event: event
            };
        }
        parseURIEvent(receipt) {
            return this.parseEvents(receipt, "URI").map(e => this.decodeURIEvent(e));
        }
        decodeURIEvent(event) {
            let result = event.data;
            return {
                value: result.value,
                id: new eth_contract_2.BigNumber(result.id),
                _event: event
            };
        }
        parseUnpausedEvent(receipt) {
            return this.parseEvents(receipt, "Unpaused").map(e => this.decodeUnpausedEvent(e));
        }
        decodeUnpausedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        assign() {
            let DEFAULT_ADMIN_ROLE_call = async (options) => {
                let result = await this.call('DEFAULT_ADMIN_ROLE', [], options);
                return result;
            };
            this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call;
            let MINTER_ROLE_call = async (options) => {
                let result = await this.call('MINTER_ROLE', [], options);
                return result;
            };
            this.MINTER_ROLE = MINTER_ROLE_call;
            let PAUSER_ROLE_call = async (options) => {
                let result = await this.call('PAUSER_ROLE', [], options);
                return result;
            };
            this.PAUSER_ROLE = PAUSER_ROLE_call;
            let balanceOfParams = (params) => [params.account, this.wallet.utils.toString(params.id)];
            let balanceOf_call = async (params, options) => {
                let result = await this.call('balanceOf', balanceOfParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let balanceOfBatchParams = (params) => [params.accounts, this.wallet.utils.toString(params.ids)];
            let balanceOfBatch_call = async (params, options) => {
                let result = await this.call('balanceOfBatch', balanceOfBatchParams(params), options);
                return result.map(e => new eth_contract_2.BigNumber(e));
            };
            this.balanceOfBatch = balanceOfBatch_call;
            let getRoleAdmin_call = async (role, options) => {
                let result = await this.call('getRoleAdmin', [this.wallet.utils.stringToBytes32(role)], options);
                return result;
            };
            this.getRoleAdmin = getRoleAdmin_call;
            let getRoleMemberParams = (params) => [this.wallet.utils.stringToBytes32(params.role), this.wallet.utils.toString(params.index)];
            let getRoleMember_call = async (params, options) => {
                let result = await this.call('getRoleMember', getRoleMemberParams(params), options);
                return result;
            };
            this.getRoleMember = getRoleMember_call;
            let getRoleMemberCount_call = async (role, options) => {
                let result = await this.call('getRoleMemberCount', [this.wallet.utils.stringToBytes32(role)], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.getRoleMemberCount = getRoleMemberCount_call;
            let hasRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let hasRole_call = async (params, options) => {
                let result = await this.call('hasRole', hasRoleParams(params), options);
                return result;
            };
            this.hasRole = hasRole_call;
            let isApprovedForAllParams = (params) => [params.account, params.operator];
            let isApprovedForAll_call = async (params, options) => {
                let result = await this.call('isApprovedForAll', isApprovedForAllParams(params), options);
                return result;
            };
            this.isApprovedForAll = isApprovedForAll_call;
            let paused_call = async (options) => {
                let result = await this.call('paused', [], options);
                return result;
            };
            this.paused = paused_call;
            let supportsInterface_call = async (interfaceId, options) => {
                let result = await this.call('supportsInterface', [interfaceId], options);
                return result;
            };
            this.supportsInterface = supportsInterface_call;
            let uri_call = async (param1, options) => {
                let result = await this.call('uri', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.uri = uri_call;
            let burnParams = (params) => [params.account, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.value)];
            let burn_send = async (params, options) => {
                let result = await this.send('burn', burnParams(params), options);
                return result;
            };
            let burn_call = async (params, options) => {
                let result = await this.call('burn', burnParams(params), options);
                return;
            };
            let burn_txData = async (params, options) => {
                let result = await this.txData('burn', burnParams(params), options);
                return result;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call,
                txData: burn_txData
            });
            let burnBatchParams = (params) => [params.account, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.values)];
            let burnBatch_send = async (params, options) => {
                let result = await this.send('burnBatch', burnBatchParams(params), options);
                return result;
            };
            let burnBatch_call = async (params, options) => {
                let result = await this.call('burnBatch', burnBatchParams(params), options);
                return;
            };
            let burnBatch_txData = async (params, options) => {
                let result = await this.txData('burnBatch', burnBatchParams(params), options);
                return result;
            };
            this.burnBatch = Object.assign(burnBatch_send, {
                call: burnBatch_call,
                txData: burnBatch_txData
            });
            let grantRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let grantRole_send = async (params, options) => {
                let result = await this.send('grantRole', grantRoleParams(params), options);
                return result;
            };
            let grantRole_call = async (params, options) => {
                let result = await this.call('grantRole', grantRoleParams(params), options);
                return;
            };
            let grantRole_txData = async (params, options) => {
                let result = await this.txData('grantRole', grantRoleParams(params), options);
                return result;
            };
            this.grantRole = Object.assign(grantRole_send, {
                call: grantRole_call,
                txData: grantRole_txData
            });
            let mintParams = (params) => [params.to, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.data)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            let mint_txData = async (params, options) => {
                let result = await this.txData('mint', mintParams(params), options);
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call,
                txData: mint_txData
            });
            let mintBatchParams = (params) => [params.to, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.amounts), this.wallet.utils.stringToBytes(params.data)];
            let mintBatch_send = async (params, options) => {
                let result = await this.send('mintBatch', mintBatchParams(params), options);
                return result;
            };
            let mintBatch_call = async (params, options) => {
                let result = await this.call('mintBatch', mintBatchParams(params), options);
                return;
            };
            let mintBatch_txData = async (params, options) => {
                let result = await this.txData('mintBatch', mintBatchParams(params), options);
                return result;
            };
            this.mintBatch = Object.assign(mintBatch_send, {
                call: mintBatch_call,
                txData: mintBatch_txData
            });
            let pause_send = async (options) => {
                let result = await this.send('pause', [], options);
                return result;
            };
            let pause_call = async (options) => {
                let result = await this.call('pause', [], options);
                return;
            };
            let pause_txData = async (options) => {
                let result = await this.txData('pause', [], options);
                return result;
            };
            this.pause = Object.assign(pause_send, {
                call: pause_call,
                txData: pause_txData
            });
            let renounceRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let renounceRole_send = async (params, options) => {
                let result = await this.send('renounceRole', renounceRoleParams(params), options);
                return result;
            };
            let renounceRole_call = async (params, options) => {
                let result = await this.call('renounceRole', renounceRoleParams(params), options);
                return;
            };
            let renounceRole_txData = async (params, options) => {
                let result = await this.txData('renounceRole', renounceRoleParams(params), options);
                return result;
            };
            this.renounceRole = Object.assign(renounceRole_send, {
                call: renounceRole_call,
                txData: renounceRole_txData
            });
            let revokeRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let revokeRole_send = async (params, options) => {
                let result = await this.send('revokeRole', revokeRoleParams(params), options);
                return result;
            };
            let revokeRole_call = async (params, options) => {
                let result = await this.call('revokeRole', revokeRoleParams(params), options);
                return;
            };
            let revokeRole_txData = async (params, options) => {
                let result = await this.txData('revokeRole', revokeRoleParams(params), options);
                return result;
            };
            this.revokeRole = Object.assign(revokeRole_send, {
                call: revokeRole_call,
                txData: revokeRole_txData
            });
            let safeBatchTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.amounts), this.wallet.utils.stringToBytes(params.data)];
            let safeBatchTransferFrom_send = async (params, options) => {
                let result = await this.send('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return result;
            };
            let safeBatchTransferFrom_call = async (params, options) => {
                let result = await this.call('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return;
            };
            let safeBatchTransferFrom_txData = async (params, options) => {
                let result = await this.txData('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return result;
            };
            this.safeBatchTransferFrom = Object.assign(safeBatchTransferFrom_send, {
                call: safeBatchTransferFrom_call,
                txData: safeBatchTransferFrom_txData
            });
            let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.data)];
            let safeTransferFrom_send = async (params, options) => {
                let result = await this.send('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            let safeTransferFrom_call = async (params, options) => {
                let result = await this.call('safeTransferFrom', safeTransferFromParams(params), options);
                return;
            };
            let safeTransferFrom_txData = async (params, options) => {
                let result = await this.txData('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
                call: safeTransferFrom_call,
                txData: safeTransferFrom_txData
            });
            let setApprovalForAllParams = (params) => [params.operator, params.approved];
            let setApprovalForAll_send = async (params, options) => {
                let result = await this.send('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            let setApprovalForAll_call = async (params, options) => {
                let result = await this.call('setApprovalForAll', setApprovalForAllParams(params), options);
                return;
            };
            let setApprovalForAll_txData = async (params, options) => {
                let result = await this.txData('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
                call: setApprovalForAll_call,
                txData: setApprovalForAll_txData
            });
            let unpause_send = async (options) => {
                let result = await this.send('unpause', [], options);
                return result;
            };
            let unpause_call = async (options) => {
                let result = await this.call('unpause', [], options);
                return;
            };
            let unpause_txData = async (options) => {
                let result = await this.txData('unpause', [], options);
                return result;
            };
            this.unpause = Object.assign(unpause_send, {
                call: unpause_call,
                txData: unpause_txData
            });
        }
    }
    exports.ERC1155PresetMinterPauser = ERC1155PresetMinterPauser;
    ERC1155PresetMinterPauser._abi = ERC1155PresetMinterPauser_json_1.default.abi;
});
define("@scom/scom-product-contract/contracts/ERC20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-product-contract/contracts/ERC20.json.ts'/> 
    exports.default = {
        "abi": [
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60c0604052601360809081527f536f6c6964697479206279204578616d706c650000000000000000000000000060a05260039061003c9082610127565b506040805180820190915260078152660a69e9884b28ab60cb1b60208201526004906100689082610127565b506005805460ff1916601217905534801561008257600080fd5b506101e6565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806100b257607f821691505b6020821081036100d257634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561012257600081815260208120601f850160051c810160208610156100ff5750805b601f850160051c820191505b8181101561011e5782815560010161010b565b5050505b505050565b81516001600160401b0381111561014057610140610088565b6101548161014e845461009e565b846100d8565b602080601f83116001811461018957600084156101715750858301515b600019600386901b1c1916600185901b17855561011e565b600085815260208120601f198616915b828110156101b857888601518255948401946001909101908401610199565b50858210156101d65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610803806101f56000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806342966c6811610081578063a0712d681161005b578063a0712d6814610195578063a9059cbb146101a8578063dd62ed3e146101bb57600080fd5b806342966c681461015857806370a082311461016d57806395d89b411461018d57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610126578063313ce5671461013957600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e6565b6040516100e391906105bc565b60405180910390f35b6100ff6100fa366004610651565b610274565b60405190151581526020016100e3565b61011860005481565b6040519081526020016100e3565b6100ff61013436600461067b565b6102ee565b6005546101469060ff1681565b60405160ff90911681526020016100e3565b61016b6101663660046106b7565b61041c565b005b61011861017b3660046106d0565b60016020526000908152604090205481565b6100d6610494565b61016b6101a33660046106b7565b6104a1565b6100ff6101b6366004610651565b610512565b6101186101c93660046106f2565b600260209081526000928352604080842090915290825290205481565b600380546101f390610725565b80601f016020809104026020016040519081016040528092919081815260200182805461021f90610725565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b505050505081565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102dc9086815260200190565b60405180910390a35060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120805483919083906103309084906107a7565b909155505073ffffffffffffffffffffffffffffffffffffffff84166000908152600160205260408120805484929061036a9084906107a7565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040812080548492906103a49084906107ba565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161040a91815260200190565b60405180910390a35060019392505050565b336000908152600160205260408120805483929061043b9084906107a7565b925050819055508060008082825461045391906107a7565b909155505060405181815260009033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a350565b600480546101f390610725565b33600090815260016020526040812080548392906104c09084906107ba565b92505081905550806000808282546104d891906107ba565b909155505060405181815233906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610489565b336000908152600160205260408120805483919083906105339084906107a7565b909155505073ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260408120805484929061056d9084906107ba565b909155505060405182815273ffffffffffffffffffffffffffffffffffffffff84169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016102dc565b600060208083528351808285015260005b818110156105e9578581018301518582016040015282016105cd565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461064c57600080fd5b919050565b6000806040838503121561066457600080fd5b61066d83610628565b946020939093013593505050565b60008060006060848603121561069057600080fd5b61069984610628565b92506106a760208501610628565b9150604084013590509250925092565b6000602082840312156106c957600080fd5b5035919050565b6000602082840312156106e257600080fd5b6106eb82610628565b9392505050565b6000806040838503121561070557600080fd5b61070e83610628565b915061071c60208401610628565b90509250929050565b600181811c9082168061073957607f821691505b602082108103610772577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156102e8576102e8610778565b808201808211156102e8576102e861077856fea2646970667358221220bcc05a525455acc68add672b8fb992365882b911f8c95c10983e6c7fcc8919a064736f6c63430008110033"
    };
});
define("@scom/scom-product-contract/contracts/ERC20.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-product-contract/contracts/ERC20.json.ts"], function (require, exports, eth_contract_3, ERC20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC20 = void 0;
    class ERC20 extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC20_json_1.default.abi, ERC20_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_3.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_3.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.param1, params.param2];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_3.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (param1, options) => {
                let result = await this.call('balanceOf', [param1], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.decimals = decimals_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            let approve_txData = async (params, options) => {
                let result = await this.txData('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call,
                txData: approve_txData
            });
            let burn_send = async (amount, options) => {
                let result = await this.send('burn', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let burn_call = async (amount, options) => {
                let result = await this.call('burn', [this.wallet.utils.toString(amount)], options);
                return;
            };
            let burn_txData = async (amount, options) => {
                let result = await this.txData('burn', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call,
                txData: burn_txData
            });
            let mint_send = async (amount, options) => {
                let result = await this.send('mint', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let mint_call = async (amount, options) => {
                let result = await this.call('mint', [this.wallet.utils.toString(amount)], options);
                return;
            };
            let mint_txData = async (amount, options) => {
                let result = await this.txData('mint', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call,
                txData: mint_txData
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            let transfer_txData = async (params, options) => {
                let result = await this.txData('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call,
                txData: transfer_txData
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_txData = async (params, options) => {
                let result = await this.txData('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call,
                txData: transferFrom_txData
            });
        }
    }
    exports.ERC20 = ERC20;
    ERC20._abi = ERC20_json_1.default.abi;
});
define("@scom/scom-product-contract/contracts/Product1155.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-product-contract/contracts/Product1155.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "_templateURI", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "TransferBatch", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "TransferSingle", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "URI", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
            { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "balanceOfBatch", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "burnBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "mintBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }], "name": "setTemplateURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "string", "name": "_uri", "type": "string" }], "name": "setURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "templateURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "uri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b50604051620045d3380380620045d3833981016040819052620000349162000518565b604080516020810190915260008152806200004f81620000da565b506005805460ff1916905562000067600033620000ec565b620000937f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000ec565b620000bf7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000ec565b50805115620000d357620000d381620000f8565b506200084e565b6004620000e882826200065e565b5050565b620000e8828262000118565b6000620001058162000156565b60066200011383826200065e565b505050565b6200012f82826200016560201b6200105f1760201c565b6000828152600160209081526040909120620001139183906200114f62000205821b17901c565b62000162813362000225565b50565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e8576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001c13390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200021c836001600160a01b038416620002be565b90505b92915050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e85762000264816200031060201b620011711760201c565b6200027a8360206200119062000323821b17811c565b6040516020016200028d9291906200072a565b60408051601f198184030181529082905262461bcd60e51b8252620002b591600401620007a3565b60405180910390fd5b600081815260018301602052604081205462000307575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200021f565b5060006200021f565b60606200021f6001600160a01b03831660145b6060600062000334836002620007ee565b6200034190600262000808565b6001600160401b038111156200035b576200035b620004dc565b6040519080825280601f01601f19166020018201604052801562000386576020820181803683370190505b509050600360fc1b81600081518110620003a457620003a46200081e565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110620003d657620003d66200081e565b60200101906001600160f81b031916908160001a9053506000620003fc846002620007ee565b6200040990600162000808565b90505b60018111156200048b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106200044157620004416200081e565b1a60f81b8282815181106200045a576200045a6200081e565b60200101906001600160f81b031916908160001a90535060049490941c93620004838162000834565b90506200040c565b5083156200021c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401620002b5565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200050f578181015183820152602001620004f5565b50506000910152565b6000602082840312156200052b57600080fd5b81516001600160401b03808211156200054357600080fd5b818401915084601f8301126200055857600080fd5b8151818111156200056d576200056d620004dc565b604051601f8201601f19908116603f01168101908382118183101715620005985762000598620004dc565b81604052828152876020848701011115620005b257600080fd5b620005c5836020830160208801620004f2565b979650505050505050565b600181811c90821680620005e557607f821691505b6020821081036200060657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011357600081815260208120601f850160051c81016020861015620006355750805b601f850160051c820191505b81811015620006565782815560010162000641565b505050505050565b81516001600160401b038111156200067a576200067a620004dc565b62000692816200068b8454620005d0565b846200060c565b602080601f831160018114620006ca5760008415620006b15750858301515b600019600386901b1c1916600185901b17855562000656565b600085815260208120601f198616915b82811015620006fb57888601518255948401946001909101908401620006da565b50858210156200071a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835162000764816017850160208801620004f2565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835162000797816028840160208801620004f2565b01602801949350505050565b6020815260008251806020840152620007c4816040850160208701620004f2565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200021f576200021f620007d8565b808201808211156200021f576200021f620007d8565b634e487b7160e01b600052603260045260246000fd5b600081620008465762000846620007d8565b506000190190565b613d75806200085e6000396000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c80638456cb59116100f9578063d539139311610097578063e985e9c511610071578063e985e9c514610434578063f242432a1461047d578063f5298aca14610490578063f923e8c3146104a357600080fd5b8063d5391393146103d3578063d547741f146103fa578063e63ab1e91461040d57600080fd5b806391d14854116100d357806391d1485414610361578063a217fddf146103a5578063a22cb465146103ad578063ca15c873146103c057600080fd5b80638456cb591461030e578063862440e2146103165780639010d07c1461032957600080fd5b80632f2ff15d116101665780634e1273f4116101405780634e1273f4146102bd5780635c975abb146102dd5780636b20c454146102e8578063731133e9146102fb57600080fd5b80632f2ff15d1461028f57806336568abe146102a25780633f4ba83a146102b557600080fd5b80631f7fdffa116101a25780631f7fdffa14610231578063248a9ca31461024657806324d88785146102695780632eb2c2d61461027c57600080fd5b8062fdd58e146101c857806301ffc9a7146101ee5780630e89341c14610211575b600080fd5b6101db6101d636600461306f565b6104ab565b6040519081526020015b60405180910390f35b6102016101fc3660046130c7565b61058d565b60405190151581526020016101e5565b61022461021f3660046130e4565b610598565b6040516101e5919061316b565b61024461023f36600461331f565b6106d8565b005b6101db6102543660046130e4565b60009081526020819052604090206001015490565b6102446102773660046133b8565b6107a0565b61024461028a3660046133f5565b6107bc565b61024461029d36600461349f565b610885565b6102446102b036600461349f565b6108aa565b61024461095d565b6102d06102cb3660046134cb565b610a1d565b6040516101e591906135d1565b60055460ff16610201565b6102446102f63660046135e4565b610b75565b610244610309366004613658565b610c35565b610244610cf7565b6102446103243660046136ad565b610db5565b61033c6103373660046136ea565b610de9565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e5565b61020161036f36600461349f565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101db600081565b6102446103bb36600461370c565b610e08565b6101db6103ce3660046130e4565b610e13565b6101db7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61024461040836600461349f565b610e2a565b6101db7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b610201610442366004613748565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205460ff1690565b61024461048b366004613772565b610e4f565b61024461049e3660046137d7565b610f11565b610224610fd1565b600073ffffffffffffffffffffffffffffffffffffffff8316610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b6000610587826113d3565b6000818152600760205260408120805460609291906105b69061380a565b80601f01602080910402602001604051908101604052809291908181526020018280546105e29061380a565b801561062f5780601f106106045761010080835404028352916020019161062f565b820191906000526020600020905b81548152906001019060200180831161061257829003601f168201915b5050505050905080516000146106455792915050565b600680546106529061380a565b80601f016020809104026020016040519081016040528092919081815260200182805461067e9061380a565b80156106cb5780601f106106a0576101008083540402835291602001916106cb565b820191906000526020600020905b8154815290600101906020018083116106ae57829003601f168201915b5050505050915050919050565b6107027f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361036f565b61078e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f68617665206d696e74657220726f6c6520746f206d696e740000000000000000606482015260840161054c565b61079a84848484611475565b50505050565b60006107ab816116fe565b60066107b783826138a3565b505050565b73ffffffffffffffffffffffffffffffffffffffff85163314806107e557506107e58533610442565b610871576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f766564000000000000000000000000000000000000606482015260840161054c565b61087e858585858561170b565b5050505050565b6000828152602081905260409020600101546108a0816116fe565b6107b78383611a56565b73ffffffffffffffffffffffffffffffffffffffff8116331461094f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c660000000000000000000000000000000000606482015260840161054c565b6109598282611a78565b5050565b6109877f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361036f565b610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f686176652070617573657220726f6c6520746f20756e70617573650000000000606482015260840161054c565b610a1b611a9a565b565b60608151835114610ab0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161054c565b6000835167ffffffffffffffff811115610acc57610acc61317e565b604051908082528060200260200182016040528015610af5578160200160208202803683370190505b50905060005b8451811015610b6d57610b40858281518110610b1957610b196139bd565b6020026020010151858381518110610b3357610b336139bd565b60200260200101516104ab565b828281518110610b5257610b526139bd565b6020908102919091010152610b6681613a1b565b9050610afb565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff8316331480610b9e5750610b9e8333610442565b610c2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f766564000000000000000000000000000000000000606482015260840161054c565b6107b7838383611b17565b610c5f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361036f565b610ceb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f68617665206d696e74657220726f6c6520746f206d696e740000000000000000606482015260840161054c565b61079a84848484611e53565b610d217f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361036f565b610dad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f455243313135355072657365744d696e7465725061757365723a206d7573742060448201527f686176652070617573657220726f6c6520746f20706175736500000000000000606482015260840161054c565b610a1b611fd5565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610ddf816116fe565b6107b78383612030565b6000828152600160205260408120610e019083612085565b9392505050565b610959338383612091565b6000818152600160205260408120610587906121e4565b600082815260208190526040902060010154610e45816116fe565b6107b78383611a78565b73ffffffffffffffffffffffffffffffffffffffff8516331480610e785750610e788533610442565b610f04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f766564000000000000000000000000000000000000606482015260840161054c565b61087e85858585856121ee565b73ffffffffffffffffffffffffffffffffffffffff8316331480610f3a5750610f3a8333610442565b610fc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f766564000000000000000000000000000000000000606482015260840161054c565b6107b783838361243e565b60068054610fde9061380a565b80601f016020809104026020016040519081016040528092919081815260200182805461100a9061380a565b80156110575780601f1061102c57610100808354040283529160200191611057565b820191906000526020600020905b81548152906001019060200180831161103a57829003601f168201915b505050505081565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166109595760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556110f13390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610e018373ffffffffffffffffffffffffffffffffffffffff8416612660565b606061058773ffffffffffffffffffffffffffffffffffffffff831660145b6060600061119f836002613a53565b6111aa906002613a6a565b67ffffffffffffffff8111156111c2576111c261317e565b6040519080825280601f01601f1916602001820160405280156111ec576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611223576112236139bd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611286576112866139bd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006112c2846002613a53565b6112cd906001613a6a565b90505b600181111561136a577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061130e5761130e6139bd565b1a60f81b828281518110611324576113246139bd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361136381613a7d565b90506112d0565b508315610e01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161054c565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061146657507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b806105875750610587826126af565b73ffffffffffffffffffffffffffffffffffffffff8416611518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161054c565b81518351146115a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161054c565b336115b981600087878787612705565b60005b845181101561166f578381815181106115d7576115d76139bd565b6020026020010151600260008784815181106115f5576115f56139bd565b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116579190613a6a565b9091555081905061166781613a1b565b9150506115bc565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516116e7929190613ab2565b60405180910390a461087e81600087878787612713565b611708813361299d565b50565b815183511461179c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161054c565b73ffffffffffffffffffffffffffffffffffffffff841661183f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161054c565b3361184e818787878787612705565b60005b84518110156119c157600085828151811061186e5761186e6139bd565b60200260200101519050600085838151811061188c5761188c6139bd565b602090810291909101810151600084815260028352604080822073ffffffffffffffffffffffffffffffffffffffff8e16835290935291909120549091508181101561195a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161054c565b600083815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b168252812080548492906119a6908490613a6a565b92505081905550505050806119ba90613a1b565b9050611851565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611a38929190613ab2565b60405180910390a4611a4e818787878787612713565b505050505050565b611a60828261105f565b60008281526001602052604090206107b7908261114f565b611a828282612a55565b60008281526001602052604090206107b79082612b0c565b611aa2612b2e565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8316611bba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161054c565b8051825114611c4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161054c565b6000339050611c6e81856000868660405180602001604052806000815250612705565b60005b8351811015611dbf576000848281518110611c8e57611c8e6139bd565b602002602001015190506000848381518110611cac57611cac6139bd565b602090810291909101810151600084815260028352604080822073ffffffffffffffffffffffffffffffffffffffff8c168352909352919091205490915081811015611d79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e636500000000000000000000000000000000000000000000000000000000606482015260840161054c565b600092835260026020908152604080852073ffffffffffffffffffffffffffffffffffffffff8b1686529091529092209103905580611db781613a1b565b915050611c71565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611e37929190613ab2565b60405180910390a460408051602081019091526000905261079a565b73ffffffffffffffffffffffffffffffffffffffff8416611ef6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161054c565b336000611f0285612b9a565b90506000611f0f85612b9a565b9050611f2083600089858589612705565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8b16845290915281208054879290611f5f908490613a6a565b9091555050604080518781526020810187905273ffffffffffffffffffffffffffffffffffffffff808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611fcc83600089898989612be5565b50505050505050565b611fdd612d92565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611aed3390565b600082815260076020526040902061204882826138a3565b50817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b82604051612079919061316b565b60405180910390a25050565b6000610e018383612dff565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361214c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161054c565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6000610587825490565b73ffffffffffffffffffffffffffffffffffffffff8416612291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161054c565b33600061229d85612b9a565b905060006122aa85612b9a565b90506122ba838989858589612705565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8c1684529091529020548581101561237a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161054c565b600087815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a168252812080548892906123c6908490613a6a565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612433848a8a8a8a8a612be5565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166124e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161054c565b3360006124ed84612b9a565b905060006124fa84612b9a565b905061251a83876000858560405180602001604052806000815250612705565b600085815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8a168452909152902054848110156125d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e636500000000000000000000000000000000000000000000000000000000606482015260840161054c565b600086815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4604080516020810190915260009052611fcc565b60008181526001830160205260408120546126a757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610587565b506000610587565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f000000000000000000000000000000000000000000000000000000001480610587575061058782612e29565b611a4e868686868686612ec0565b73ffffffffffffffffffffffffffffffffffffffff84163b15611a4e576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c819061278a9089908990889088908890600401613ae0565b6020604051808303816000875af19250505080156127e3575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526127e091810190613b4b565b60015b6128cc576127ef613b68565b806308c379a0036128425750612803613b84565b8061280e5750612844565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054c919061316b565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161054c565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611fcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161054c565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610959576129db81611171565b6129e6836020611190565b6040516020016129f7929190613c2c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261054c9160040161316b565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156109595760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610e018373ffffffffffffffffffffffffffffffffffffffff8416612f53565b60055460ff16610a1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161054c565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110612bd457612bd46139bd565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15611a4e576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e6190612c5c9089908990889088908890600401613cad565b6020604051808303816000875af1925050508015612cb5575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252612cb291810190613b4b565b60015b612cc1576127ef613b68565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611fcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161054c565b60055460ff1615610a1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161054c565b6000826000018281548110612e1657612e166139bd565b9060005260206000200154905092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061058757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610587565b60055460ff1615611a4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243313135355061757361626c653a20746f6b656e207472616e736665722060448201527f7768696c65207061757365640000000000000000000000000000000000000000606482015260840161054c565b6000818152600183016020526040812054801561303c576000612f77600183613cfd565b8554909150600090612f8b90600190613cfd565b9050818114612ff0576000866000018281548110612fab57612fab6139bd565b9060005260206000200154905080876000018481548110612fce57612fce6139bd565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061300157613001613d10565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610587565b6000915050610587565b803573ffffffffffffffffffffffffffffffffffffffff8116811461306a57600080fd5b919050565b6000806040838503121561308257600080fd5b61308b83613046565b946020939093013593505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461170857600080fd5b6000602082840312156130d957600080fd5b8135610e0181613099565b6000602082840312156130f657600080fd5b5035919050565b60005b83811015613118578181015183820152602001613100565b50506000910152565b600081518084526131398160208601602086016130fd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610e016020830184613121565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156131f1576131f161317e565b6040525050565b600067ffffffffffffffff8211156132125761321261317e565b5060051b60200190565b600082601f83011261322d57600080fd5b8135602061323a826131f8565b60405161324782826131ad565b83815260059390931b850182019282810191508684111561326757600080fd5b8286015b84811015613282578035835291830191830161326b565b509695505050505050565b600082601f83011261329e57600080fd5b813567ffffffffffffffff8111156132b8576132b861317e565b6040516132ed60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85011601826131ad565b81815284602083860101111561330257600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561333557600080fd5b61333e85613046565b9350602085013567ffffffffffffffff8082111561335b57600080fd5b6133678883890161321c565b9450604087013591508082111561337d57600080fd5b6133898883890161321c565b9350606087013591508082111561339f57600080fd5b506133ac8782880161328d565b91505092959194509250565b6000602082840312156133ca57600080fd5b813567ffffffffffffffff8111156133e157600080fd5b6133ed8482850161328d565b949350505050565b600080600080600060a0868803121561340d57600080fd5b61341686613046565b945061342460208701613046565b9350604086013567ffffffffffffffff8082111561344157600080fd5b61344d89838a0161321c565b9450606088013591508082111561346357600080fd5b61346f89838a0161321c565b9350608088013591508082111561348557600080fd5b506134928882890161328d565b9150509295509295909350565b600080604083850312156134b257600080fd5b823591506134c260208401613046565b90509250929050565b600080604083850312156134de57600080fd5b823567ffffffffffffffff808211156134f657600080fd5b818501915085601f83011261350a57600080fd5b81356020613517826131f8565b60405161352482826131ad565b83815260059390931b850182019282810191508984111561354457600080fd5b948201945b838610156135695761355a86613046565b82529482019490820190613549565b9650508601359250508082111561357f57600080fd5b5061358c8582860161321c565b9150509250929050565b600081518084526020808501945080840160005b838110156135c6578151875295820195908201906001016135aa565b509495945050505050565b602081526000610e016020830184613596565b6000806000606084860312156135f957600080fd5b61360284613046565b9250602084013567ffffffffffffffff8082111561361f57600080fd5b61362b8783880161321c565b9350604086013591508082111561364157600080fd5b5061364e8682870161321c565b9150509250925092565b6000806000806080858703121561366e57600080fd5b61367785613046565b93506020850135925060408501359150606085013567ffffffffffffffff8111156136a157600080fd5b6133ac8782880161328d565b600080604083850312156136c057600080fd5b82359150602083013567ffffffffffffffff8111156136de57600080fd5b61358c8582860161328d565b600080604083850312156136fd57600080fd5b50508035926020909101359150565b6000806040838503121561371f57600080fd5b61372883613046565b91506020830135801515811461373d57600080fd5b809150509250929050565b6000806040838503121561375b57600080fd5b61376483613046565b91506134c260208401613046565b600080600080600060a0868803121561378a57600080fd5b61379386613046565b94506137a160208701613046565b93506040860135925060608601359150608086013567ffffffffffffffff8111156137cb57600080fd5b6134928882890161328d565b6000806000606084860312156137ec57600080fd5b6137f584613046565b95602085013595506040909401359392505050565b600181811c9082168061381e57607f821691505b602082108103613857577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f8211156107b757600081815260208120601f850160051c810160208610156138845750805b601f850160051c820191505b81811015611a4e57828155600101613890565b815167ffffffffffffffff8111156138bd576138bd61317e565b6138d1816138cb845461380a565b8461385d565b602080601f83116001811461392457600084156138ee5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611a4e565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561397157888601518255948401946001909101908401613952565b50858210156139ad57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613a4c57613a4c6139ec565b5060010190565b8082028115828204841417610587576105876139ec565b80820180821115610587576105876139ec565b600081613a8c57613a8c6139ec565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b604081526000613ac56040830185613596565b8281036020840152613ad78185613596565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a06040830152613b1960a0830186613596565b8281036060840152613b2b8186613596565b90508281036080840152613b3f8185613121565b98975050505050505050565b600060208284031215613b5d57600080fd5b8151610e0181613099565b600060033d1115613b815760046000803e5060005160e01c5b90565b600060443d1015613b925790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715613be057505050505090565b8285019150815181811115613bf85750505050505090565b843d8701016020828501011115613c125750505050505090565b613c21602082860101876131ad565b509095945050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351613c648160178501602088016130fd565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351613ca18160288401602088016130fd565b01602801949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152613cf260a0830184613121565b979650505050505050565b81810381811115610587576105876139ec565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220b6abd5545083ebba2cdb868df2657cd95ed7046c718bb199c0c5d1fc317e48ae64736f6c63430008110033"
    };
});
define("@scom/scom-product-contract/contracts/Product1155.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-product-contract/contracts/Product1155.json.ts"], function (require, exports, eth_contract_4, Product1155_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Product1155 = void 0;
    class Product1155 extends eth_contract_4.Contract {
        constructor(wallet, address) {
            super(wallet, address, Product1155_json_1.default.abi, Product1155_json_1.default.bytecode);
            this.assign();
        }
        deploy(templateURI, options) {
            return this.__deploy([templateURI], options);
        }
        parseApprovalForAllEvent(receipt) {
            return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
        }
        decodeApprovalForAllEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                operator: result.operator,
                approved: result.approved,
                _event: event
            };
        }
        parsePausedEvent(receipt) {
            return this.parseEvents(receipt, "Paused").map(e => this.decodePausedEvent(e));
        }
        decodePausedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        parseRoleAdminChangedEvent(receipt) {
            return this.parseEvents(receipt, "RoleAdminChanged").map(e => this.decodeRoleAdminChangedEvent(e));
        }
        decodeRoleAdminChangedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                previousAdminRole: result.previousAdminRole,
                newAdminRole: result.newAdminRole,
                _event: event
            };
        }
        parseRoleGrantedEvent(receipt) {
            return this.parseEvents(receipt, "RoleGranted").map(e => this.decodeRoleGrantedEvent(e));
        }
        decodeRoleGrantedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                account: result.account,
                sender: result.sender,
                _event: event
            };
        }
        parseRoleRevokedEvent(receipt) {
            return this.parseEvents(receipt, "RoleRevoked").map(e => this.decodeRoleRevokedEvent(e));
        }
        decodeRoleRevokedEvent(event) {
            let result = event.data;
            return {
                role: result.role,
                account: result.account,
                sender: result.sender,
                _event: event
            };
        }
        parseTransferBatchEvent(receipt) {
            return this.parseEvents(receipt, "TransferBatch").map(e => this.decodeTransferBatchEvent(e));
        }
        decodeTransferBatchEvent(event) {
            let result = event.data;
            return {
                operator: result.operator,
                from: result.from,
                to: result.to,
                ids: result.ids.map(e => new eth_contract_4.BigNumber(e)),
                values: result.values.map(e => new eth_contract_4.BigNumber(e)),
                _event: event
            };
        }
        parseTransferSingleEvent(receipt) {
            return this.parseEvents(receipt, "TransferSingle").map(e => this.decodeTransferSingleEvent(e));
        }
        decodeTransferSingleEvent(event) {
            let result = event.data;
            return {
                operator: result.operator,
                from: result.from,
                to: result.to,
                id: new eth_contract_4.BigNumber(result.id),
                value: new eth_contract_4.BigNumber(result.value),
                _event: event
            };
        }
        parseURIEvent(receipt) {
            return this.parseEvents(receipt, "URI").map(e => this.decodeURIEvent(e));
        }
        decodeURIEvent(event) {
            let result = event.data;
            return {
                value: result.value,
                id: new eth_contract_4.BigNumber(result.id),
                _event: event
            };
        }
        parseUnpausedEvent(receipt) {
            return this.parseEvents(receipt, "Unpaused").map(e => this.decodeUnpausedEvent(e));
        }
        decodeUnpausedEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        assign() {
            let DEFAULT_ADMIN_ROLE_call = async (options) => {
                let result = await this.call('DEFAULT_ADMIN_ROLE', [], options);
                return result;
            };
            this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call;
            let MINTER_ROLE_call = async (options) => {
                let result = await this.call('MINTER_ROLE', [], options);
                return result;
            };
            this.MINTER_ROLE = MINTER_ROLE_call;
            let PAUSER_ROLE_call = async (options) => {
                let result = await this.call('PAUSER_ROLE', [], options);
                return result;
            };
            this.PAUSER_ROLE = PAUSER_ROLE_call;
            let balanceOfParams = (params) => [params.account, this.wallet.utils.toString(params.id)];
            let balanceOf_call = async (params, options) => {
                let result = await this.call('balanceOf', balanceOfParams(params), options);
                return new eth_contract_4.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let balanceOfBatchParams = (params) => [params.accounts, this.wallet.utils.toString(params.ids)];
            let balanceOfBatch_call = async (params, options) => {
                let result = await this.call('balanceOfBatch', balanceOfBatchParams(params), options);
                return result.map(e => new eth_contract_4.BigNumber(e));
            };
            this.balanceOfBatch = balanceOfBatch_call;
            let getRoleAdmin_call = async (role, options) => {
                let result = await this.call('getRoleAdmin', [this.wallet.utils.stringToBytes32(role)], options);
                return result;
            };
            this.getRoleAdmin = getRoleAdmin_call;
            let getRoleMemberParams = (params) => [this.wallet.utils.stringToBytes32(params.role), this.wallet.utils.toString(params.index)];
            let getRoleMember_call = async (params, options) => {
                let result = await this.call('getRoleMember', getRoleMemberParams(params), options);
                return result;
            };
            this.getRoleMember = getRoleMember_call;
            let getRoleMemberCount_call = async (role, options) => {
                let result = await this.call('getRoleMemberCount', [this.wallet.utils.stringToBytes32(role)], options);
                return new eth_contract_4.BigNumber(result);
            };
            this.getRoleMemberCount = getRoleMemberCount_call;
            let hasRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let hasRole_call = async (params, options) => {
                let result = await this.call('hasRole', hasRoleParams(params), options);
                return result;
            };
            this.hasRole = hasRole_call;
            let isApprovedForAllParams = (params) => [params.account, params.operator];
            let isApprovedForAll_call = async (params, options) => {
                let result = await this.call('isApprovedForAll', isApprovedForAllParams(params), options);
                return result;
            };
            this.isApprovedForAll = isApprovedForAll_call;
            let paused_call = async (options) => {
                let result = await this.call('paused', [], options);
                return result;
            };
            this.paused = paused_call;
            let supportsInterface_call = async (interfaceId, options) => {
                let result = await this.call('supportsInterface', [interfaceId], options);
                return result;
            };
            this.supportsInterface = supportsInterface_call;
            let templateURI_call = async (options) => {
                let result = await this.call('templateURI', [], options);
                return result;
            };
            this.templateURI = templateURI_call;
            let uri_call = async (id, options) => {
                let result = await this.call('uri', [this.wallet.utils.toString(id)], options);
                return result;
            };
            this.uri = uri_call;
            let burnParams = (params) => [params.account, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.value)];
            let burn_send = async (params, options) => {
                let result = await this.send('burn', burnParams(params), options);
                return result;
            };
            let burn_call = async (params, options) => {
                let result = await this.call('burn', burnParams(params), options);
                return;
            };
            let burn_txData = async (params, options) => {
                let result = await this.txData('burn', burnParams(params), options);
                return result;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call,
                txData: burn_txData
            });
            let burnBatchParams = (params) => [params.account, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.values)];
            let burnBatch_send = async (params, options) => {
                let result = await this.send('burnBatch', burnBatchParams(params), options);
                return result;
            };
            let burnBatch_call = async (params, options) => {
                let result = await this.call('burnBatch', burnBatchParams(params), options);
                return;
            };
            let burnBatch_txData = async (params, options) => {
                let result = await this.txData('burnBatch', burnBatchParams(params), options);
                return result;
            };
            this.burnBatch = Object.assign(burnBatch_send, {
                call: burnBatch_call,
                txData: burnBatch_txData
            });
            let grantRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let grantRole_send = async (params, options) => {
                let result = await this.send('grantRole', grantRoleParams(params), options);
                return result;
            };
            let grantRole_call = async (params, options) => {
                let result = await this.call('grantRole', grantRoleParams(params), options);
                return;
            };
            let grantRole_txData = async (params, options) => {
                let result = await this.txData('grantRole', grantRoleParams(params), options);
                return result;
            };
            this.grantRole = Object.assign(grantRole_send, {
                call: grantRole_call,
                txData: grantRole_txData
            });
            let mintParams = (params) => [params.to, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.data)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return;
            };
            let mint_txData = async (params, options) => {
                let result = await this.txData('mint', mintParams(params), options);
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call,
                txData: mint_txData
            });
            let mintBatchParams = (params) => [params.to, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.amounts), this.wallet.utils.stringToBytes(params.data)];
            let mintBatch_send = async (params, options) => {
                let result = await this.send('mintBatch', mintBatchParams(params), options);
                return result;
            };
            let mintBatch_call = async (params, options) => {
                let result = await this.call('mintBatch', mintBatchParams(params), options);
                return;
            };
            let mintBatch_txData = async (params, options) => {
                let result = await this.txData('mintBatch', mintBatchParams(params), options);
                return result;
            };
            this.mintBatch = Object.assign(mintBatch_send, {
                call: mintBatch_call,
                txData: mintBatch_txData
            });
            let pause_send = async (options) => {
                let result = await this.send('pause', [], options);
                return result;
            };
            let pause_call = async (options) => {
                let result = await this.call('pause', [], options);
                return;
            };
            let pause_txData = async (options) => {
                let result = await this.txData('pause', [], options);
                return result;
            };
            this.pause = Object.assign(pause_send, {
                call: pause_call,
                txData: pause_txData
            });
            let renounceRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let renounceRole_send = async (params, options) => {
                let result = await this.send('renounceRole', renounceRoleParams(params), options);
                return result;
            };
            let renounceRole_call = async (params, options) => {
                let result = await this.call('renounceRole', renounceRoleParams(params), options);
                return;
            };
            let renounceRole_txData = async (params, options) => {
                let result = await this.txData('renounceRole', renounceRoleParams(params), options);
                return result;
            };
            this.renounceRole = Object.assign(renounceRole_send, {
                call: renounceRole_call,
                txData: renounceRole_txData
            });
            let revokeRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
            let revokeRole_send = async (params, options) => {
                let result = await this.send('revokeRole', revokeRoleParams(params), options);
                return result;
            };
            let revokeRole_call = async (params, options) => {
                let result = await this.call('revokeRole', revokeRoleParams(params), options);
                return;
            };
            let revokeRole_txData = async (params, options) => {
                let result = await this.txData('revokeRole', revokeRoleParams(params), options);
                return result;
            };
            this.revokeRole = Object.assign(revokeRole_send, {
                call: revokeRole_call,
                txData: revokeRole_txData
            });
            let safeBatchTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.ids), this.wallet.utils.toString(params.amounts), this.wallet.utils.stringToBytes(params.data)];
            let safeBatchTransferFrom_send = async (params, options) => {
                let result = await this.send('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return result;
            };
            let safeBatchTransferFrom_call = async (params, options) => {
                let result = await this.call('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return;
            };
            let safeBatchTransferFrom_txData = async (params, options) => {
                let result = await this.txData('safeBatchTransferFrom', safeBatchTransferFromParams(params), options);
                return result;
            };
            this.safeBatchTransferFrom = Object.assign(safeBatchTransferFrom_send, {
                call: safeBatchTransferFrom_call,
                txData: safeBatchTransferFrom_txData
            });
            let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.id), this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.data)];
            let safeTransferFrom_send = async (params, options) => {
                let result = await this.send('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            let safeTransferFrom_call = async (params, options) => {
                let result = await this.call('safeTransferFrom', safeTransferFromParams(params), options);
                return;
            };
            let safeTransferFrom_txData = async (params, options) => {
                let result = await this.txData('safeTransferFrom', safeTransferFromParams(params), options);
                return result;
            };
            this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
                call: safeTransferFrom_call,
                txData: safeTransferFrom_txData
            });
            let setApprovalForAllParams = (params) => [params.operator, params.approved];
            let setApprovalForAll_send = async (params, options) => {
                let result = await this.send('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            let setApprovalForAll_call = async (params, options) => {
                let result = await this.call('setApprovalForAll', setApprovalForAllParams(params), options);
                return;
            };
            let setApprovalForAll_txData = async (params, options) => {
                let result = await this.txData('setApprovalForAll', setApprovalForAllParams(params), options);
                return result;
            };
            this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
                call: setApprovalForAll_call,
                txData: setApprovalForAll_txData
            });
            let setTemplateURI_send = async (uri, options) => {
                let result = await this.send('setTemplateURI', [uri], options);
                return result;
            };
            let setTemplateURI_call = async (uri, options) => {
                let result = await this.call('setTemplateURI', [uri], options);
                return;
            };
            let setTemplateURI_txData = async (uri, options) => {
                let result = await this.txData('setTemplateURI', [uri], options);
                return result;
            };
            this.setTemplateURI = Object.assign(setTemplateURI_send, {
                call: setTemplateURI_call,
                txData: setTemplateURI_txData
            });
            let setURIParams = (params) => [this.wallet.utils.toString(params.id), params.uri];
            let setURI_send = async (params, options) => {
                let result = await this.send('setURI', setURIParams(params), options);
                return result;
            };
            let setURI_call = async (params, options) => {
                let result = await this.call('setURI', setURIParams(params), options);
                return;
            };
            let setURI_txData = async (params, options) => {
                let result = await this.txData('setURI', setURIParams(params), options);
                return result;
            };
            this.setURI = Object.assign(setURI_send, {
                call: setURI_call,
                txData: setURI_txData
            });
            let unpause_send = async (options) => {
                let result = await this.send('unpause', [], options);
                return result;
            };
            let unpause_call = async (options) => {
                let result = await this.call('unpause', [], options);
                return;
            };
            let unpause_txData = async (options) => {
                let result = await this.txData('unpause', [], options);
                return result;
            };
            this.unpause = Object.assign(unpause_send, {
                call: unpause_call,
                txData: unpause_txData
            });
        }
    }
    exports.Product1155 = Product1155;
    Product1155._abi = Product1155_json_1.default.abi;
});
define("@scom/scom-product-contract/contracts/ProductInfo.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-product-contract/contracts/ProductInfo.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract Product1155", "name": "_nft", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "Buy", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "decrement", "type": "uint256" }], "name": "DecrementInventory", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "donor", "type": "address" }, { "indexed": true, "internalType": "address", "name": "donee", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "Donate", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "increment", "type": "uint256" }], "name": "IncrementInventory", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }], "name": "NewProduct", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "UpdateProductPrice", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "enum ProductInfo.ProductStatus", "name": "status", "type": "uint8" }], "name": "UpdateProductStatus", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "productId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "uri", "type": "string" }], "name": "UpdateProductUri", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }], "name": "activateProduct", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "buy", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "buyEth", "outputs": [], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }], "name": "deactivateProduct", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "decrement", "type": "uint256" }], "name": "decrementInventory", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "donor", "type": "address" }, { "internalType": "address", "name": "donee", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "name": "donate", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "donor", "type": "address" }, { "internalType": "address", "name": "donee", "type": "address" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }], "name": "donateEth", "outputs": [], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "increment", "type": "uint256" }], "name": "incrementInventory", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "enum ProductInfo.ProductType", "name": "productType", "type": "uint8" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "maxQuantity", "type": "uint256" }, { "internalType": "uint256", "name": "maxPrice", "type": "uint256" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "newProduct", "outputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "nft", "outputs": [{ "internalType": "contract Product1155", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownersProducts", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownersProductsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "productCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "productOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "products", "outputs": [{ "internalType": "enum ProductInfo.ProductType", "name": "productType", "type": "uint8" }, { "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "maxQuantity", "type": "uint256" }, { "internalType": "uint256", "name": "maxPrice", "type": "uint256" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "enum ProductInfo.ProductStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "updateProductPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "productId", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }], "name": "updateProductUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b50604051620033b1380380620033b183398101604081905262000034916200004b565b60016000556001600160a01b03166080526200007d565b6000602082840312156200005e57600080fd5b81516001600160a01b03811681146200007657600080fd5b9392505050565b6080516132ee620000c360003960008181610210015281816107780152818161099101528181610dd90152818161124d015281816116bc0152611b2f01526132ee6000f3fe60806040526004361061010e5760003560e01c8063722caa31116100a5578063c7f939b011610074578063e89b5d4b11610059578063e89b5d4b14610358578063fd77e5de14610378578063fe3d07e41461039857600080fd5b8063c7f939b014610322578063e0f6ef871461034257600080fd5b8063722caa31146102775780637acc0b201461028a5780639c3bddb2146102bf5780639cac76b4146102df57600080fd5b80632f35944f116100e15780632f35944f146101be57806332f662f6146101de57806347ccca02146101fe5780635d3642221461025757600080fd5b80631622dbe414610113578063248e598114610135578063249e948c1461018b5780632e4394b9146101ab575b600080fd5b34801561011f57600080fd5b5061013361012e366004612a4b565b6103b8565b005b34801561014157600080fd5b50610178610150366004612a86565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561019757600080fd5b506101336101a6366004612af3565b61083a565b6101336101b9366004612b3f565b610a54565b3480156101ca57600080fd5b506101336101d9366004612b80565b610ead565b3480156101ea57600080fd5b506101336101f9366004612bc6565b611309565b34801561020a57600080fd5b506102327f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610182565b34801561026357600080fd5b50610178610272366004612bdf565b61144b565b610133610285366004612c73565b611775565b34801561029657600080fd5b506102aa6102a5366004612bc6565b611bdb565b60405161018299989796959493929190612d59565b3480156102cb57600080fd5b506101336102da366004612ddc565b611cdd565b3480156102eb57600080fd5b506102326102fa366004612bc6565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b34801561032e57600080fd5b5061017861033d366004612dfe565b611e2c565b34801561034e57600080fd5b5061017860015481565b34801561036457600080fd5b50610133610373366004612ddc565b611e5d565b34801561038457600080fd5b50610133610393366004612bc6565b61201e565b3480156103a457600080fd5b506101336103b3366004612ddc565b612161565b6103c0612390565b600083815260046020526040812090815460ff1660028111156103e5576103e5612ca8565b14610451576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f64756374207479706500000000000000000000000060448201526064015b60405180910390fd5b80600301548311156104bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6f7574206f662073746f636b00000000000000000000000000000000000000006044820152606401610448565b6001600782015474010000000000000000000000000000000000000000900460ff1660018111156104f2576104f2612ca8565b14610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f70726f64756374206e6f742061637469766500000000000000000000000000006044820152606401610448565b600781015473ffffffffffffffffffffffffffffffffffffffff166105da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c696420746f6b656e207479706500000000000000000000000000006044820152606401610448565b60008311610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f696e76616c6964207175616e74697479000000000000000000000000000000006044820152606401610448565b80600501548311156106b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6d6178207175616e7469747920657863656564656400000000000000000000006044820152606401610448565b8281600401546106c29190612e59565b9150828160030160008282546106d89190612e76565b909155505060008481526002602052604090205460078201546107179173ffffffffffffffffffffffffffffffffffffffff9182169133911685612403565b6040517f731133e900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018690526044820185905260806064830152600060848301527f0000000000000000000000000000000000000000000000000000000000000000169063731133e99060a401600060405180830381600087803b1580156107bc57600080fd5b505af11580156107d0573d6000803e3d6000fd5b5050604080518681526020810186905287935073ffffffffffffffffffffffffffffffffffffffff8916925033917ef93dbdb72854b6b6fb35433086556f2635fc83c37080c667496fecfa650fb491015b60405180910390a4506108346001600055565b50505050565b600083815260026020526040902054839073ffffffffffffffffffffffffffffffffffffffff1633146108c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610448565b600084815260046020526040902060018101548514610944576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f70726f647563744964206e6f74206d61746368000000000000000000000000006044820152606401610448565b60028101610953848683612f59565b506040517f862440e200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063862440e2906109ca908890889088906004016130bd565b600060405180830381600087803b1580156109e457600080fd5b505af11580156109f8573d6000803e3d6000fd5b50505050843373ffffffffffffffffffffffffffffffffffffffff167f8940ef451459d1d04bf74a7480cb7ad72fb21ce3ffe39f3f31e0a3d88ba80b918686604051610a459291906130e0565b60405180910390a35050505050565b610a5c612390565b60008181526004602052604090206001815460ff166002811115610a8257610a82612ca8565b1480610aa357506002815460ff166002811115610aa157610aa1612ca8565b145b610b09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6475637420747970650000000000000000000000006044820152606401610448565b6000816003015411610b77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6f7574206f662073746f636b00000000000000000000000000000000000000006044820152606401610448565b6001600782015474010000000000000000000000000000000000000000900460ff166001811115610baa57610baa612ca8565b14610c11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f70726f64756374206e6f742061637469766500000000000000000000000000006044820152606401610448565b600781015473ffffffffffffffffffffffffffffffffffffffff1615610c93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c696420746f6b656e207479706500000000000000000000000000006044820152606401610448565b60068101541580610ca8575080600601543411155b610d0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6d617820707269636520657863656564656400000000000000000000000000006044820152606401610448565b6001815460ff166002811115610d2657610d26612ca8565b03610d535760008281526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b6001816003016000828254610d689190612e76565b90915550610d7890508334612498565b6040517f731133e900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152602482018490526001604483015260806064830152600060848301527f0000000000000000000000000000000000000000000000000000000000000000169063731133e99060a401600060405180830381600087803b158015610e1d57600080fd5b505af1158015610e31573d6000803e3d6000fd5b50505050818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f5d4fda7240a3bcd7170980bb222c3df7a119c03f3fe98a939ac6e85948b584a034604051610e9591815260200190565b60405180910390a450610ea86001600055565b505050565b610eb5612390565b60008281526004602052604090206001815460ff166002811115610edb57610edb612ca8565b1480610efc57506002815460ff166002811115610efa57610efa612ca8565b145b610f62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6475637420747970650000000000000000000000006044820152606401610448565b6000816003015411610fd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6f7574206f662073746f636b00000000000000000000000000000000000000006044820152606401610448565b6001600782015474010000000000000000000000000000000000000000900460ff16600181111561100357611003612ca8565b1461106a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f70726f64756374206e6f742061637469766500000000000000000000000000006044820152606401610448565b600781015473ffffffffffffffffffffffffffffffffffffffff166110eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c696420746f6b656e207479706500000000000000000000000000006044820152606401610448565b60068101541580611100575080600601548211155b611166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6d617820707269636520657863656564656400000000000000000000000000006044820152606401610448565b6001815460ff16600281111561117e5761117e612ca8565b036111ab5760008381526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1693505b60018160030160008282546111c09190612e76565b909155505060078101546111ec9073ffffffffffffffffffffffffffffffffffffffff16868685612403565b6040517f731133e900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018590526001604483015260806064830152600060848301527f0000000000000000000000000000000000000000000000000000000000000000169063731133e99060a401600060405180830381600087803b15801561129157600080fd5b505af11580156112a5573d6000803e3d6000fd5b50505050828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167f5d4fda7240a3bcd7170980bb222c3df7a119c03f3fe98a939ac6e85948b584a08560405161082191815260200190565b600081815260026020526040902054819073ffffffffffffffffffffffffffffffffffffffff163314611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610448565b600082815260046020526040812090600782015474010000000000000000000000000000000000000000900460ff1660018111156113d8576113d8612ca8565b1461143f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f70726f64756374206e6f7420696e6163746976650000000000000000000000006044820152606401610448565b610ea8818460016125f2565b600060016000815461145c906130f4565b91905081905590506040518061012001604052808a600281111561148257611482612ca8565b815260200182815260200189898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810188905260408101879052606081018690526080810185905273ffffffffffffffffffffffffffffffffffffffff841660a082015260c0016001905260008281526004602052604090208151815482907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561154f5761154f612ca8565b02179055506020820151600182015560408201516002820190611572908261312c565b50606082015160038201556080820151600482015560a0820151600582015560c0820151600682015560e082015160078201805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178255610100850151927fffffffffffffffffffffff00000000000000000000000000000000000000000016177401000000000000000000000000000000000000000083600181111561163757611637612ca8565b02179055505050600081815260026020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915583526003825280832080546001810182559084529190922001829055517f862440e20000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063862440e29061170a9084908c908c906004016130bd565b600060405180830381600087803b15801561172457600080fd5b505af1158015611738573d6000803e3d6000fd5b50506040513392508391507f4f3181d227c647e281efabfa1e1ee55cc982f3d8ab6d495bf054aa0ff3083d6f90600090a398975050505050505050565b61177d612390565b600082815260046020526040812090815460ff1660028111156117a2576117a2612ca8565b14611809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e76616c69642070726f6475637420747970650000000000000000000000006044820152606401610448565b8060030154821115611877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6f7574206f662073746f636b00000000000000000000000000000000000000006044820152606401610448565b6001600782015474010000000000000000000000000000000000000000900460ff1660018111156118aa576118aa612ca8565b14611911576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f70726f64756374206e6f742061637469766500000000000000000000000000006044820152606401610448565b600781015473ffffffffffffffffffffffffffffffffffffffff1615611993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c696420746f6b656e207479706500000000000000000000000000006044820152606401610448565b600082116119fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f696e76616c6964207175616e74697479000000000000000000000000000000006044820152606401610448565b8060050154821115611a6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6d6178207175616e7469747920657863656564656400000000000000000000006044820152606401610448565b818160040154611a7b9190612e59565b3414611a8657600080fd5b81816003016000828254611a9a9190612e76565b9091555050600083815260026020526040902054611ace9073ffffffffffffffffffffffffffffffffffffffff1634612498565b6040517f731133e900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152602482018590526044820184905260806064830152600060848301527f0000000000000000000000000000000000000000000000000000000000000000169063731133e99060a401600060405180830381600087803b158015611b7357600080fd5b505af1158015611b87573d6000803e3d6000fd5b50506040805185815234602082015286935073ffffffffffffffffffffffffffffffffffffffff8816925033917ef93dbdb72854b6b6fb35433086556f2635fc83c37080c667496fecfa650fb49101610e95565b60046020526000908152604090208054600182015460028301805460ff909316939192611c0790612eb8565b80601f0160208091040260200160405190810160405280929190818152602001828054611c3390612eb8565b8015611c805780601f10611c5557610100808354040283529160200191611c80565b820191906000526020600020905b815481529060010190602001808311611c6357829003601f168201915b505050600384015460048501546005860154600687015460079097015495969295919450925073ffffffffffffffffffffffffffffffffffffffff81169060ff740100000000000000000000000000000000000000009091041689565b600082815260026020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314611d6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610448565b600083815260046020526040902060018101548414611de7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f70726f647563744964206e6f74206d61746368000000000000000000000000006044820152606401610448565b60048101839055604051838152849033907f5c2a0216ef065f0b55e400f83a524a1ee63ec0459436d6241763135efcce0b1e906020015b60405180910390a350505050565b60036020528160005260406000208181548110611e4857600080fd5b90600052602060002001600091509150505481565b600082815260026020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314611eec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610448565b60008211611f56576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f696e76616c6964207175616e74697479000000000000000000000000000000006044820152606401610448565b600083815260046020526040902060018101548414611fd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f70726f647563744964206e6f74206d61746368000000000000000000000000006044820152606401610448565b82816003016000828254611fe59190613246565b9091555050604051838152849033907f198f35366637579d7bd48a95cb88e93e65c4ed73893c9bd112e963de5a38ea2390602001611e1e565b600081815260026020526040902054819073ffffffffffffffffffffffffffffffffffffffff1633146120ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610448565b60008281526004602052604090206001600782015474010000000000000000000000000000000000000000900460ff1660018111156120ee576120ee612ca8565b14612155576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f70726f64756374206e6f742061637469766500000000000000000000000000006044820152606401610448565b610ea8818460006125f2565b600082815260026020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146121f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610448565b6000821161225a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f696e76616c6964207175616e74697479000000000000000000000000000000006044820152606401610448565b6000838152600460205260409020600181015484146122d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f70726f647563744964206e6f74206d61746368000000000000000000000000006044820152606401610448565b8281600301541015612343576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6f7574206f662073746f636b00000000000000000000000000000000000000006044820152606401610448565b828160030160008282546123579190612e76565b9091555050604051838152849033907f187b120007f9c42564635b2cc3ffc1135c876c28d721d43d3c948e005af6e8a990602001611e1e565b6002600054036123fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610448565b6002600055565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261083490859061270b565b80471015612502576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610448565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461255c576040519150601f19603f3d011682016040523d82523d6000602084013e612561565b606091505b5050905080610ea8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610448565b8183600101541461265f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f70726f647563744964206e6f74206d61746368000000000000000000000000006044820152606401610448565b6007830180548291907fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000008360018111156126b2576126b2612ca8565b0217905550813373ffffffffffffffffffffffffffffffffffffffff167f08011185cddd29033a347051cfccf2ce17fbf2a30e0815f91142ad61cd37ee21836040516126fe9190613259565b60405180910390a3505050565b600061276d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166128179092919063ffffffff16565b805190915015610ea8578080602001905181019061278b9190613267565b610ea8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610448565b6060612826848460008561282e565b949350505050565b6060824710156128c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610448565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516128e99190613289565b60006040518083038185875af1925050503d8060008114612926576040519150601f19603f3d011682016040523d82523d6000602084013e61292b565b606091505b509150915061293c87838387612947565b979650505050505050565b606083156129dd5782516000036129d65773ffffffffffffffffffffffffffffffffffffffff85163b6129d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610448565b5081612826565b61282683838151156129f25781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044891906132a5565b73ffffffffffffffffffffffffffffffffffffffff81168114612a4857600080fd5b50565b60008060008060808587031215612a6157600080fd5b8435612a6c81612a26565b966020860135965060408601359560600135945092505050565b600060208284031215612a9857600080fd5b8135612aa381612a26565b9392505050565b60008083601f840112612abc57600080fd5b50813567ffffffffffffffff811115612ad457600080fd5b602083019150836020828501011115612aec57600080fd5b9250929050565b600080600060408486031215612b0857600080fd5b83359250602084013567ffffffffffffffff811115612b2657600080fd5b612b3286828701612aaa565b9497909650939450505050565b600080600060608486031215612b5457600080fd5b8335612b5f81612a26565b92506020840135612b6f81612a26565b929592945050506040919091013590565b60008060008060808587031215612b9657600080fd5b8435612ba181612a26565b93506020850135612bb181612a26565b93969395505050506040820135916060013590565b600060208284031215612bd857600080fd5b5035919050565b60008060008060008060008060e0898b031215612bfb57600080fd5b883560038110612c0a57600080fd5b9750602089013567ffffffffffffffff811115612c2657600080fd5b612c328b828c01612aaa565b90985096505060408901359450606089013593506080890135925060a0890135915060c0890135612c6281612a26565b809150509295985092959890939650565b600080600060608486031215612c8857600080fd5b8335612c9381612a26565b95602085013595506040909401359392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60005b83811015612cf2578181015183820152602001612cda565b50506000910152565b60008151808452612d13816020860160208601612cd7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60028110612d5557612d55612ca8565b9052565b600061012060038c10612d6e57612d6e612ca8565b8b83528a6020840152806040840152612d898184018b612cfb565b9150508760608301528660808301528560a08301528460c083015273ffffffffffffffffffffffffffffffffffffffff841660e0830152612dce610100830184612d45565b9a9950505050505050505050565b60008060408385031215612def57600080fd5b50508035926020909101359150565b60008060408385031215612e1157600080fd5b8235612e1c81612a26565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082028115828204841417612e7057612e70612e2a565b92915050565b81810381811115612e7057612e70612e2a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c90821680612ecc57607f821691505b602082108103612f05577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610ea857600081815260208120601f850160051c81016020861015612f325750805b601f850160051c820191505b81811015612f5157828155600101612f3e565b505050505050565b67ffffffffffffffff831115612f7157612f71612e89565b612f8583612f7f8354612eb8565b83612f0b565b6000601f841160018114612fd75760008515612fa15750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b17835561306d565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156130265786850135825560209485019460019092019101613006565b5086821015613061577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8381526040602082015260006130d7604083018486613074565b95945050505050565b602081526000612826602083018486613074565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361312557613125612e2a565b5060010190565b815167ffffffffffffffff81111561314657613146612e89565b61315a816131548454612eb8565b84612f0b565b602080601f8311600181146131ad57600084156131775750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555612f51565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156131fa578886015182559484019460019091019084016131db565b508582101561323657878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115612e7057612e70612e2a565b60208101612e708284612d45565b60006020828403121561327957600080fd5b81518015158114612aa357600080fd5b6000825161329b818460208701612cd7565b9190910192915050565b602081526000612aa36020830184612cfb56fea26469706673582212202d1d4e09a641048f2cbb81734bb87ed1dc133cec1bc460092332111dbfc6bd3c64736f6c63430008110033"
    };
});
define("@scom/scom-product-contract/contracts/ProductInfo.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/scom-product-contract/contracts/ProductInfo.json.ts"], function (require, exports, eth_contract_5, ProductInfo_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductInfo = void 0;
    class ProductInfo extends eth_contract_5.Contract {
        constructor(wallet, address) {
            super(wallet, address, ProductInfo_json_1.default.abi, ProductInfo_json_1.default.bytecode);
            this.assign();
        }
        deploy(nft, options) {
            return this.__deploy([nft], options);
        }
        parseBuyEvent(receipt) {
            return this.parseEvents(receipt, "Buy").map(e => this.decodeBuyEvent(e));
        }
        decodeBuyEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                recipient: result.recipient,
                productId: new eth_contract_5.BigNumber(result.productId),
                quantity: new eth_contract_5.BigNumber(result.quantity),
                amountIn: new eth_contract_5.BigNumber(result.amountIn),
                _event: event
            };
        }
        parseDecrementInventoryEvent(receipt) {
            return this.parseEvents(receipt, "DecrementInventory").map(e => this.decodeDecrementInventoryEvent(e));
        }
        decodeDecrementInventoryEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                productId: new eth_contract_5.BigNumber(result.productId),
                decrement: new eth_contract_5.BigNumber(result.decrement),
                _event: event
            };
        }
        parseDonateEvent(receipt) {
            return this.parseEvents(receipt, "Donate").map(e => this.decodeDonateEvent(e));
        }
        decodeDonateEvent(event) {
            let result = event.data;
            return {
                donor: result.donor,
                donee: result.donee,
                productId: new eth_contract_5.BigNumber(result.productId),
                amountIn: new eth_contract_5.BigNumber(result.amountIn),
                _event: event
            };
        }
        parseIncrementInventoryEvent(receipt) {
            return this.parseEvents(receipt, "IncrementInventory").map(e => this.decodeIncrementInventoryEvent(e));
        }
        decodeIncrementInventoryEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                productId: new eth_contract_5.BigNumber(result.productId),
                increment: new eth_contract_5.BigNumber(result.increment),
                _event: event
            };
        }
        parseNewProductEvent(receipt) {
            return this.parseEvents(receipt, "NewProduct").map(e => this.decodeNewProductEvent(e));
        }
        decodeNewProductEvent(event) {
            let result = event.data;
            return {
                productId: new eth_contract_5.BigNumber(result.productId),
                owner: result.owner,
                _event: event
            };
        }
        parseUpdateProductPriceEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProductPrice").map(e => this.decodeUpdateProductPriceEvent(e));
        }
        decodeUpdateProductPriceEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                productId: new eth_contract_5.BigNumber(result.productId),
                price: new eth_contract_5.BigNumber(result.price),
                _event: event
            };
        }
        parseUpdateProductStatusEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProductStatus").map(e => this.decodeUpdateProductStatusEvent(e));
        }
        decodeUpdateProductStatusEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                productId: new eth_contract_5.BigNumber(result.productId),
                status: new eth_contract_5.BigNumber(result.status),
                _event: event
            };
        }
        parseUpdateProductUriEvent(receipt) {
            return this.parseEvents(receipt, "UpdateProductUri").map(e => this.decodeUpdateProductUriEvent(e));
        }
        decodeUpdateProductUriEvent(event) {
            let result = event.data;
            return {
                sender: result.sender,
                productId: new eth_contract_5.BigNumber(result.productId),
                uri: result.uri,
                _event: event
            };
        }
        assign() {
            let nft_call = async (options) => {
                let result = await this.call('nft', [], options);
                return result;
            };
            this.nft = nft_call;
            let ownersProductsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownersProducts_call = async (params, options) => {
                let result = await this.call('ownersProducts', ownersProductsParams(params), options);
                return new eth_contract_5.BigNumber(result);
            };
            this.ownersProducts = ownersProducts_call;
            let ownersProductsLength_call = async (owner, options) => {
                let result = await this.call('ownersProductsLength', [owner], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.ownersProductsLength = ownersProductsLength_call;
            let productCount_call = async (options) => {
                let result = await this.call('productCount', [], options);
                return new eth_contract_5.BigNumber(result);
            };
            this.productCount = productCount_call;
            let productOwner_call = async (param1, options) => {
                let result = await this.call('productOwner', [this.wallet.utils.toString(param1)], options);
                return result;
            };
            this.productOwner = productOwner_call;
            let products_call = async (param1, options) => {
                let result = await this.call('products', [this.wallet.utils.toString(param1)], options);
                return {
                    productType: new eth_contract_5.BigNumber(result.productType),
                    productId: new eth_contract_5.BigNumber(result.productId),
                    uri: result.uri,
                    quantity: new eth_contract_5.BigNumber(result.quantity),
                    price: new eth_contract_5.BigNumber(result.price),
                    maxQuantity: new eth_contract_5.BigNumber(result.maxQuantity),
                    maxPrice: new eth_contract_5.BigNumber(result.maxPrice),
                    token: result.token,
                    status: new eth_contract_5.BigNumber(result.status)
                };
            };
            this.products = products_call;
            let activateProduct_send = async (productId, options) => {
                let result = await this.send('activateProduct', [this.wallet.utils.toString(productId)], options);
                return result;
            };
            let activateProduct_call = async (productId, options) => {
                let result = await this.call('activateProduct', [this.wallet.utils.toString(productId)], options);
                return;
            };
            let activateProduct_txData = async (productId, options) => {
                let result = await this.txData('activateProduct', [this.wallet.utils.toString(productId)], options);
                return result;
            };
            this.activateProduct = Object.assign(activateProduct_send, {
                call: activateProduct_call,
                txData: activateProduct_txData
            });
            let buyParams = (params) => [params.to, this.wallet.utils.toString(params.productId), this.wallet.utils.toString(params.quantity), this.wallet.utils.toString(params.amountIn)];
            let buy_send = async (params, options) => {
                let result = await this.send('buy', buyParams(params), options);
                return result;
            };
            let buy_call = async (params, options) => {
                let result = await this.call('buy', buyParams(params), options);
                return;
            };
            let buy_txData = async (params, options) => {
                let result = await this.txData('buy', buyParams(params), options);
                return result;
            };
            this.buy = Object.assign(buy_send, {
                call: buy_call,
                txData: buy_txData
            });
            let buyEthParams = (params) => [params.to, this.wallet.utils.toString(params.productId), this.wallet.utils.toString(params.quantity)];
            let buyEth_send = async (params, options) => {
                let result = await this.send('buyEth', buyEthParams(params), options);
                return result;
            };
            let buyEth_call = async (params, options) => {
                let result = await this.call('buyEth', buyEthParams(params), options);
                return;
            };
            let buyEth_txData = async (params, options) => {
                let result = await this.txData('buyEth', buyEthParams(params), options);
                return result;
            };
            this.buyEth = Object.assign(buyEth_send, {
                call: buyEth_call,
                txData: buyEth_txData
            });
            let deactivateProduct_send = async (productId, options) => {
                let result = await this.send('deactivateProduct', [this.wallet.utils.toString(productId)], options);
                return result;
            };
            let deactivateProduct_call = async (productId, options) => {
                let result = await this.call('deactivateProduct', [this.wallet.utils.toString(productId)], options);
                return;
            };
            let deactivateProduct_txData = async (productId, options) => {
                let result = await this.txData('deactivateProduct', [this.wallet.utils.toString(productId)], options);
                return result;
            };
            this.deactivateProduct = Object.assign(deactivateProduct_send, {
                call: deactivateProduct_call,
                txData: deactivateProduct_txData
            });
            let decrementInventoryParams = (params) => [this.wallet.utils.toString(params.productId), this.wallet.utils.toString(params.decrement)];
            let decrementInventory_send = async (params, options) => {
                let result = await this.send('decrementInventory', decrementInventoryParams(params), options);
                return result;
            };
            let decrementInventory_call = async (params, options) => {
                let result = await this.call('decrementInventory', decrementInventoryParams(params), options);
                return;
            };
            let decrementInventory_txData = async (params, options) => {
                let result = await this.txData('decrementInventory', decrementInventoryParams(params), options);
                return result;
            };
            this.decrementInventory = Object.assign(decrementInventory_send, {
                call: decrementInventory_call,
                txData: decrementInventory_txData
            });
            let donateParams = (params) => [params.donor, params.donee, this.wallet.utils.toString(params.productId), this.wallet.utils.toString(params.amountIn)];
            let donate_send = async (params, options) => {
                let result = await this.send('donate', donateParams(params), options);
                return result;
            };
            let donate_call = async (params, options) => {
                let result = await this.call('donate', donateParams(params), options);
                return;
            };
            let donate_txData = async (params, options) => {
                let result = await this.txData('donate', donateParams(params), options);
                return result;
            };
            this.donate = Object.assign(donate_send, {
                call: donate_call,
                txData: donate_txData
            });
            let donateEthParams = (params) => [params.donor, params.donee, this.wallet.utils.toString(params.productId)];
            let donateEth_send = async (params, options) => {
                let result = await this.send('donateEth', donateEthParams(params), options);
                return result;
            };
            let donateEth_call = async (params, options) => {
                let result = await this.call('donateEth', donateEthParams(params), options);
                return;
            };
            let donateEth_txData = async (params, options) => {
                let result = await this.txData('donateEth', donateEthParams(params), options);
                return result;
            };
            this.donateEth = Object.assign(donateEth_send, {
                call: donateEth_call,
                txData: donateEth_txData
            });
            let incrementInventoryParams = (params) => [this.wallet.utils.toString(params.productId), this.wallet.utils.toString(params.increment)];
            let incrementInventory_send = async (params, options) => {
                let result = await this.send('incrementInventory', incrementInventoryParams(params), options);
                return result;
            };
            let incrementInventory_call = async (params, options) => {
                let result = await this.call('incrementInventory', incrementInventoryParams(params), options);
                return;
            };
            let incrementInventory_txData = async (params, options) => {
                let result = await this.txData('incrementInventory', incrementInventoryParams(params), options);
                return result;
            };
            this.incrementInventory = Object.assign(incrementInventory_send, {
                call: incrementInventory_call,
                txData: incrementInventory_txData
            });
            let newProductParams = (params) => [this.wallet.utils.toString(params.productType), params.uri, this.wallet.utils.toString(params.quantity), this.wallet.utils.toString(params.price), this.wallet.utils.toString(params.maxQuantity), this.wallet.utils.toString(params.maxPrice), params.token];
            let newProduct_send = async (params, options) => {
                let result = await this.send('newProduct', newProductParams(params), options);
                return result;
            };
            let newProduct_call = async (params, options) => {
                let result = await this.call('newProduct', newProductParams(params), options);
                return new eth_contract_5.BigNumber(result);
            };
            let newProduct_txData = async (params, options) => {
                let result = await this.txData('newProduct', newProductParams(params), options);
                return result;
            };
            this.newProduct = Object.assign(newProduct_send, {
                call: newProduct_call,
                txData: newProduct_txData
            });
            let updateProductPriceParams = (params) => [this.wallet.utils.toString(params.productId), this.wallet.utils.toString(params.price)];
            let updateProductPrice_send = async (params, options) => {
                let result = await this.send('updateProductPrice', updateProductPriceParams(params), options);
                return result;
            };
            let updateProductPrice_call = async (params, options) => {
                let result = await this.call('updateProductPrice', updateProductPriceParams(params), options);
                return;
            };
            let updateProductPrice_txData = async (params, options) => {
                let result = await this.txData('updateProductPrice', updateProductPriceParams(params), options);
                return result;
            };
            this.updateProductPrice = Object.assign(updateProductPrice_send, {
                call: updateProductPrice_call,
                txData: updateProductPrice_txData
            });
            let updateProductUriParams = (params) => [this.wallet.utils.toString(params.productId), params.uri];
            let updateProductUri_send = async (params, options) => {
                let result = await this.send('updateProductUri', updateProductUriParams(params), options);
                return result;
            };
            let updateProductUri_call = async (params, options) => {
                let result = await this.call('updateProductUri', updateProductUriParams(params), options);
                return;
            };
            let updateProductUri_txData = async (params, options) => {
                let result = await this.txData('updateProductUri', updateProductUriParams(params), options);
                return result;
            };
            this.updateProductUri = Object.assign(updateProductUri_send, {
                call: updateProductUri_call,
                txData: updateProductUri_txData
            });
        }
    }
    exports.ProductInfo = ProductInfo;
    ProductInfo._abi = ProductInfo_json_1.default.abi;
});
define("@scom/scom-product-contract/contracts/index.ts", ["require", "exports", "@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/ERC1155.ts", "@scom/scom-product-contract/contracts/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.ts", "@scom/scom-product-contract/contracts/ERC20.ts", "@scom/scom-product-contract/contracts/Product1155.ts", "@scom/scom-product-contract/contracts/ProductInfo.ts"], function (require, exports, ERC1155_1, ERC1155PresetMinterPauser_1, ERC20_1, Product1155_1, ProductInfo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductInfo = exports.Product1155 = exports.ERC20 = exports.ERC1155PresetMinterPauser = exports.ERC1155 = void 0;
    Object.defineProperty(exports, "ERC1155", { enumerable: true, get: function () { return ERC1155_1.ERC1155; } });
    Object.defineProperty(exports, "ERC1155PresetMinterPauser", { enumerable: true, get: function () { return ERC1155PresetMinterPauser_1.ERC1155PresetMinterPauser; } });
    Object.defineProperty(exports, "ERC20", { enumerable: true, get: function () { return ERC20_1.ERC20; } });
    Object.defineProperty(exports, "Product1155", { enumerable: true, get: function () { return Product1155_1.Product1155; } });
    Object.defineProperty(exports, "ProductInfo", { enumerable: true, get: function () { return ProductInfo_1.ProductInfo; } });
});
define("@scom/scom-product-contract", ["require", "exports", "@scom/scom-product-contract/contracts/index.ts", "@ijstech/eth-wallet"], function (require, exports, Contracts, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onProgress = exports.deploy = exports.DefaultDeployOptions = exports.Contracts = void 0;
    exports.Contracts = Contracts;
    ;
    ;
    var progressHandler;
    exports.DefaultDeployOptions = {
        deployERC20: false,
        initSupply: '10000000000000000000000',
        templateURI: ''
    };
    function progress(msg) {
        if (typeof (progressHandler) == 'function') {
            progressHandler(msg);
        }
        ;
    }
    async function deploy(wallet, options) {
        var _a;
        let erc20Address;
        if (options.deployERC20) {
            let erc20 = new Contracts.ERC20(wallet);
            progress('Deploy ERC20');
            erc20Address = await erc20.deploy();
            progress('ERC20 deployed ' + erc20Address);
            if (options && options.initSupply) {
                progress('Mint initial supply ' + options.initSupply);
                let value = new eth_wallet_1.BigNumber(options.initSupply);
                let result = await erc20.mint(value);
                progress('Transaction # ' + result.transactionHash);
            }
            ;
        }
        let product1155 = new Contracts.Product1155(wallet);
        progress('Deploy Product1155');
        let product1155Address = await product1155.deploy((_a = options === null || options === void 0 ? void 0 : options.templateURI) !== null && _a !== void 0 ? _a : "");
        progress('Product1155 deployed ' + product1155Address);
        let productInfo = new Contracts.ProductInfo(wallet);
        progress('Deploy ProductInfo');
        let productInfoAddress = await productInfo.deploy(product1155.address);
        progress('ProductInfo deployed ' + productInfoAddress);
        progress('Grant Minter Role');
        let minterRole = await product1155.MINTER_ROLE();
        await product1155.grantRole({ role: minterRole, account: productInfoAddress });
        return {
            erc20: erc20Address,
            product1155: product1155Address,
            productInfo: productInfoAddress
        };
    }
    exports.deploy = deploy;
    ;
    function onProgress(handler) {
        progressHandler = handler;
    }
    exports.onProgress = onProgress;
    ;
    exports.default = {
        Contracts,
        deploy,
        DefaultDeployOptions: exports.DefaultDeployOptions,
        onProgress
    };
});
