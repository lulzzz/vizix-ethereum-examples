var src = "contract Edge { address owner; string edgeid; string epcid; string coordinates; string zone; string status; event ThingUpdate (string epcid, string coordinates, string zone, string status); function Edge (string _edgeid, string _coordinates, string _zone, string _status) { owner = msg.sender; edgeid= _edgeid; coordinates = _coordinates; zone = _zone; status = _status; } function updateThing (string _epcid, string _coordinates, string _zone, string _status) { if ( msg.sender != owner ) throw; epcid= _epcid; coordinates = _coordinates; zone = _zone; status = _status; if (stringsEqual(zone, 'POS')) { ThingUpdate (epcid, coordinates, zone, 'SOLD'); } else { ThingUpdate (epcid, coordinates, zone, 'FREE'); } } function stringsEqual(string memory _a, string memory _b) internal returns (bool) { bytes memory a = bytes(_a); bytes memory b = bytes(_b); if (a.length != b.length) return false; for (uint i = 0; i < a.length; i ++) if (a[i] != b[i]) return false; return true; } }";

var compiled = web3.eth.compile.solidity(src);

var myContract = web3.eth.contract(compiled.Edge.info.abiDefinition);

var tracker = myContract.new("AB01", {
        from: web3.eth.accounts[0], 
        data: compiled.Edge.code, 
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

// address: 0x15c5ebe5739d549f8c43ad4e9fdc8c300e76edc7