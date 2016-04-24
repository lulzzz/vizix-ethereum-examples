var src = "contract Tracker { string public epc; string public name; string public location; address public addr; event UpdatedLocation(string epc, string name, string location); function Tracker(string _epc, string _name, string _location) { addr = msg.sender; epc = _epc; name = _name; location = _location; } function getLocation() returns (string) { return location; } function updateLocation(string _location) { location = _location; UpdatedLocation(epc, name, location); } }"

var compiled = web3.eth.compile.solidity(src);

var myContract = web3.eth.contract(compiled.Tracker.info.abiDefinition);

// note gas had to be increased in order to deploy contract
var tracker = myContract.new("000000AC01","Driller","Assembly Line", {
        from: web3.eth.accounts[0], 
        data: compiled.Tracker.code, 
        gas: 3000000
    }, 
    function(e, contract) {
        if(!e) {
            if(!contract.address) {
                console.log("Contract waiting to be mined");
            } else {
                console.log("Contract mined! Address: " + contract.address);
                console.log(contract);
            }
        } else {
            console.log(e);
        }
    }    
)

// address: 0xbd2cdb99ff21240bbc40ab1299142c3295bd19f7
// address: 0x88a01d9d64bbd7a7a2e238a2e48c23edd2841daa
// address: 0xc6bf453adc2a18f837db6d6bc41f29751a9b264d
// address: 0x75eeede8df682261cd4d033a47e561a8dc6fb2a3
// address: 0xc800747123c194e167893b3fdd43d552a91dfe74
// address: 0x2e862b88f7f5a75d1d465eec7785961ca89198d6